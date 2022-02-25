import{r as A,s as T,a as v,b as V,o as h,c as w,d,e as p,w as y,F as N,p as S,f as u,g as k,l as E,u as O,t as f,h as F,i as C,j as l,k as U}from"./vendor.0ffd3825.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};W();var b={apiUrl:"http://localhost:8080",staticFolder:"/static/app"};T(`${b.staticFolder}/viur-shoelace`);A("myicons",{resolver:t=>`${b.staticFolder}/myicons/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")});const j=v({counter:0,user:null,userLoggedIn:"initial"});var M={state:j};var $=(t,e)=>{const n=t.__vccOpts||t;for(const[o,s]of e)n[o]=s;return n};const B={components:{},setup(){S("global",M)}},H={id:"nav"},G=u("VueJS"),J=u(" | "),K=u("Shoelace"),X=u(" | "),z=u("ViUR");function Q(t,e,n,o,s,r){const a=V("router-link"),i=V("router-view");return h(),w(N,null,[d("nav",H,[p(a,{to:"/"},{default:y(()=>[G]),_:1}),J,p(a,{to:"/shoelace"},{default:y(()=>[K]),_:1}),X,p(a,{to:"/viur"},{default:y(()=>[z]),_:1})]),p(i)],64)}var Y=$(B,[["render",Q]]);const Z="modulepreload",R={},ee="/",c=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${ee}${o}`,o in R)return;R[o]=!0;const s=o.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Z,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((i,_)=>{a.addEventListener("load",i),a.addEventListener("error",_)})})).then(()=>e())};k.defaults.withCredentials=!0;const L=E.createInstance({driver:[E.INDEXEDDB,E.LOCALSTORAGE],name:"page-cache"});class m{static removeFromCache(e){L.removeItem(e)}static clearCache(){L.clear()}static buildUrl(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")||(e=b.apiUrl+e),e}static post(e,n=null,o=null,s=null){function r(){const i=new FormData;for(const _ in n)i.append(_,n[_]);return i}let a=k.post(m.buildUrl(e),r());return a.then(function(i){o&&o(i.data)}).catch(function(i){s&&s(i)}),a}static async securePost(e,n=null,o=null,s=null){let r=null;return await this.get("/json/skey").then(a=>{console.log(a),n||(n={}),n.skey=a.data,r=this.post(e,n,o,s)}),r}static get(e,n=null,o=null,s=null,r=!1,a=!1,i=1e3*60*60*24*1){let I=k.get(m.buildUrl(e),{params:n,clearCache:a});return I.then(function(g){o&&o(g.data)}).catch(function(g){s&&s(g)}),I}static list(e,{dataObj:n=null,callback:o=null,failedCallback:s=null}={}){return this.get(`/json/${e}/list`,n,o,s)}static view(e,n,{dataObj:o=null,callback:s=null,failedCallback:r=null}={}){return this.get(`/json/${e}/view/${n}`,o,s,r)}}const te={components:{},props:{skellist:Object,structure:Object,cursor:String,reqeuest_status:Number},setup(t,e){const n=O(),o=v({skellist:t.skellist});return{route:n,state:o}}},se=u(" default list"),ne=d("br",null,null,-1),oe=d("br",null,null,-1),re=u(" To disable default views for views and lists use createRouterInstance(routes,false) ");function ae(t,e,n,o,s,r){return h(),w(N,null,[se,ne,u(" Status:"+f(n.reqeuest_status)+": "+f(o.state.skellist),1),oe,re],64)}var ie=$(te,[["render",ae]]);const ue={components:{},props:{skel:Object,structure:Object,request_status:Number},setup(t,e){return{state:v({})}}},ce=u(" default view "),le=d("br",null,null,-1),_e=d("br",null,null,-1),me=u(" To disable default views for views and lists use createRouterInstance(routes,false) ");function de(t,e,n,o,s,r){return h(),w("div",null,[ce,le,u(" "+f(n.skel),1),_e,me])}var pe=$(ue,[["render",de]]);const fe={name:"Home",components:{},setup(t,e){const n=O();return{state:v({}),route:n}}},ve={class:"home"};function he(t,e,n,o,s,r){return h(),w("div",ve," View "+f(o.route.path)+" is missing. ",1)}var we=$(fe,[["render",he]]);function $e(t){switch(t){case"./views/HomeView.vue":return c(()=>import("./HomeView.a20db5e1.js"),["static/app/HomeView.a20db5e1.js","static/app/HomeView.17f2b670.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.0ffd3825.js"]);case"./views/ShoelaceView.vue":return c(()=>import("./ShoelaceView.c976bd46.js"),["static/app/ShoelaceView.c976bd46.js","static/app/ShoelaceView.6fc84bdf.css","static/app/vendor.0ffd3825.js","static/app/counterLogic.31a1ceb1.js"]);case"./views/ViurView.vue":return c(()=>import("./ViurView.50922ab8.js"),["static/app/ViurView.50922ab8.js","static/app/ViurView.a0df23b9.css","static/app/vendor.0ffd3825.js"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function ge(t){switch(t){case"./views/HomeView.vue":return c(()=>import("./HomeView.a20db5e1.js"),["static/app/HomeView.a20db5e1.js","static/app/HomeView.17f2b670.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.0ffd3825.js"]);case"./views/ShoelaceView.vue":return c(()=>import("./ShoelaceView.c976bd46.js"),["static/app/ShoelaceView.c976bd46.js","static/app/ShoelaceView.6fc84bdf.css","static/app/vendor.0ffd3825.js","static/app/counterLogic.31a1ceb1.js"]);case"./views/ViurView.vue":return c(()=>import("./ViurView.50922ab8.js"),["static/app/ViurView.50922ab8.js","static/app/ViurView.a0df23b9.css","static/app/vendor.0ffd3825.js"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function ye(t){return[{path:"/:pathMatch(.*)*",name:"view_missing",component:we},...t]}function Ee(t,e=!0){return e&&ke(t),F({history:C("/"),routes:t})}function ke(t){return t.push({path:"/:moduleName/list",name:"list",component:ie,props:D}),t.push({path:"/:moduleName/view/:key",name:"view",component:pe,props:x}),t}function P(t){let e=t.split("/").slice(-1)[0].split("_")[0];if(t.endsWith("_view"))return{path:`/${e}/view/:key`,name:`${e}_view`,meta:{moduleName:e},component:()=>ge(`./views/${t}.vue`),props:x};if(t.endsWith("_list"))return{path:`/${e}/list`,name:`${e}_list`,meta:{moduleName:e},component:()=>$e(`./views/${t}.vue`),props:D};throw Error("path must end with _view or _list")}function D(t){const e=l([]),n=l({}),o=l(""),s=l(null),r="moduleName"in t.params?t.params.moduleName:t.meta.moduleName;return m.list(r,{dataObj:t.query}).then(a=>{console.log(a),s.value=parseInt(a.status),e.value=a.data.skellist,n.value=a.data.structure,o.value=a.data.cursor}).catch(a=>{s.value=parseInt(a.response.status),console.log(a.response.status)}),{skellist:e,structure:n,cursor:o,request_status:s}}function x(t){const e=l({}),n=l({}),o=l(null),s="moduleName"in t.params?t.params.moduleName:t.meta.moduleName;return m.view(s,t.params.key,{dataObj:t.query}).then(r=>{e.value=r.data.values,n.value=r.data.structure,o.value=parseInt(r.status)}).catch(r=>{o.value=parseInt(r.response.status),console.log(r.response.status)}),{skel:e,structure:n,request_status:o}}const be=ye([{path:"/",name:"home",component:()=>c(()=>import("./HomeView.a20db5e1.js"),["static/app/HomeView.a20db5e1.js","static/app/HomeView.17f2b670.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.0ffd3825.js"])},{path:"/shoelace",name:"shoelace",component:()=>c(()=>import("./ShoelaceView.c976bd46.js"),["static/app/ShoelaceView.c976bd46.js","static/app/ShoelaceView.6fc84bdf.css","static/app/vendor.0ffd3825.js","static/app/counterLogic.31a1ceb1.js"])},{path:"/viur",name:"viur",component:()=>c(()=>import("./ViurView.50922ab8.js"),["static/app/ViurView.50922ab8.js","static/app/ViurView.a0df23b9.css","static/app/vendor.0ffd3825.js"])},P("example/example_view"),P("example/example_list")]),Ie=Ee(be),q=U(Y);q.use(Ie);q.mount("#app");export{m as R,$ as _};
