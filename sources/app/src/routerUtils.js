// Router Utils
import { ref } from 'vue'
import Request from '@/request.js';
import list from "@/views/default/default_list.vue";
import view from "@/views/default/default_view.vue";
import view_missing from "@/views/errors/view_missing.vue";
import {createRouter, createWebHashHistory} from "vue-router";


export function routesInit(routes){
    //this Entry needs to be the first one
    return [
        {
            path: '/:pathMatch(.*)*',
            name: 'view_missing',
            component: view_missing
        },
        ...routes
    ]
}

export function createRouterInstance(routes,moduleRoutes=true){
    if (moduleRoutes){
        addModuleRoutes(routes)
    }

    return  createRouter({
        history: createWebHashHistory(import.meta.env.BASE_URL),
        routes
    })
}

// Adds routes for mapping the ViUR URL schemas
export function addModuleRoutes(routes){
    // add list views
    routes.push({
        path: '/:moduleName/list',
        name: 'list',
        component: list,
        props:listData
    })
    // add view views
    routes.push({
        path: '/:moduleName/view/:key',
        name: 'view',
        component: view,
        props:viewData
    })
    return routes
}

export function addRoute(path){
    let modulename = path.split("/").slice(-1)[0].split("_")[0]

    if (path.endsWith("_view")){
        return {
            path: `/${modulename}/view/:key`,
            name: `${modulename}_view`,
            meta:{"moduleName": modulename},
            component: () => import(`./views/${modulename}/${modulename}_view.vue`),
            props:viewData
        }
    }else if (path.endsWith("_list")){
        return {
            path: `/${modulename}/list`,
            name: `${modulename}_list`,
            meta:{"moduleName": modulename},
            component: () => import(`./views/${modulename}/${modulename}_list.vue`),
            props:listData
        }
    }else{
        throw Error("path must end with _view or _list")
    }

}


export function listData(route){
    //fetch skeldata with route info
    const skellist = ref([])
    const structure = ref({})
    const cursor = ref("")
    const request_status = ref(null)
    const modulename = "moduleName" in route.params?route.params.moduleName:route.meta.moduleName

    Request.list(modulename, {dataObj: route.query}).then((resp)=>{
        console.log(resp)
        request_status.value = parseInt(resp.status)
        skellist.value = resp["data"]["skellist"]
        structure.value = resp["data"]["structure"]
        cursor.value = resp["data"]["cursor"]
    }).catch((error)=>{
        request_status.value = parseInt(error.response.status)
        console.log(error.response.status)
    })

    return {
        skellist: skellist,
        structure: structure,
        cursor: cursor,
        request_status: request_status
    }
}

export function viewData(route){
    //fetch skeldata with route info
    const skel = ref({})
    const structure = ref({})
    const request_status = ref(null)
    const modulename = "moduleName" in route.params?route.params.moduleName:route.meta.moduleName

    Request.view(modulename, route.params.key, {dataObj: route.query}).then((resp)=>{
        skel.value = resp["data"]["values"]
        structure.value = resp["data"]["structure"]
        request_status.value = parseInt(resp.status)
    }).catch((error)=>{
        request_status.value = parseInt(error.response.status)
        console.log(error.response.status)
    })

    return {
        skel: skel,
        structure: structure,
        request_status: request_status
    }
}
