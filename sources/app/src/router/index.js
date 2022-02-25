import {routesInit, createRouterInstance, addRoute} from "@/routerUtils.js"

//define statics
const routes = routesInit([
     {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },{
        path: "/shoelace",
        name: "shoelace",
        component: () => import("../views/ShoelaceView.vue"),
      },{
        path: "/viur",
        name: "viur",
        component: () => import("../views/ViurView.vue"),
      },
    addRoute("example/example_view"),
    addRoute("example/example_list")
])

const router = createRouterInstance(routes)
export default router
