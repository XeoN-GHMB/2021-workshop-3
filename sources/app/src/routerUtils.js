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
    let pathList = path.split("/")

    if (path.endsWith("_view")){
        let pathTemplate = () => import(`./views/${modulename}_view.vue`)
        if (pathList.length===2){
            pathTemplate = () => import(`./views/${pathList[0]}/${modulename}_view.vue`)
        }else if (pathList.length===3){
            pathTemplate = () => import(`./views/${pathList[0]}/${pathList[1]}/${modulename}_view.vue`)
        }

        return {
            path: `/${modulename}/view/:key`,
            name: `${modulename}_view`,
            meta:{"moduleName": modulename},
            component: pathTemplate,
            props:viewData
        }
    }else if (path.endsWith("_list")){
        let pathTemplate = () => import(`./views/${modulename}_list.vue`)
        if (pathList.length===2){
            pathTemplate = () => import(`./views/${pathList[0]}/${modulename}_list.vue`)
        }else if (pathList.length===3){
            pathTemplate = () => import(`./views/${pathList[0]}/${pathList[1]}/${modulename}_list.vue`)
        }

        return {
            path: `/${modulename}/list`,
            name: `${modulename}_list`,
            meta:{"moduleName": modulename},
            component: pathTemplate,
            props: listData
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
