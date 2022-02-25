import{r as q,s as T,a as h,b as V,o as m,c as w,d as p,e as f,w as y,f as S,K as F,F as N,p as C,g as u,h as E,l as k,u as O,t as v,i as U,j as W,k as l,m as j}from"./vendor.55e829ed.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};B();var b={apiUrl:"http://localhost:8080",staticFolder:"/static/app"};T(`${b.staticFolder}/viur-shoelace`);q("myicons",{resolver:t=>`${b.staticFolder}/myicons/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")});const M=h({counter:0,user:null,userLoggedIn:"initial"});var H={state:M};var $=(t,e)=>{const n=t.__vccOpts||t;for(const[o,s]of e)n[o]=s;return n};const K={components:{},setup(){C("global",H)}},G={id:"nav"},J=u("VueJS"),X=u(" | "),z=u("Shoelace"),Q=u(" | "),Y=u("ViUR");function Z(t,e,n,o,s,r){const a=V("router-link"),i=V("router-view");return m(),w(N,null,[p("nav",G,[f(a,{to:"/"},{default:y(()=>[J]),_:1}),X,f(a,{to:"/shoelace"},{default:y(()=>[z]),_:1}),Q,f(a,{to:"/viur"},{default:y(()=>[Y]),_:1})]),(m(),S(F,null,[f(i)],1024))],64)}var ee=$(K,[["render",Z]]);const te="modulepreload",R={},se="/",c=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${se}${o}`,o in R)return;R[o]=!0;const s=o.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":te,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((i,_)=>{a.addEventListener("load",i),a.addEventListener("error",_)})})).then(()=>e())};E.defaults.withCredentials=!0;const L=k.createInstance({driver:[k.INDEXEDDB,k.LOCALSTORAGE],name:"page-cache"});class d{static removeFromCache(e){L.removeItem(e)}static clearCache(){L.clear()}static buildUrl(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")||(e=b.apiUrl+e),e}static post(e,n=null,o=null,s=null){function r(){const i=new FormData;for(const _ in n)i.append(_,n[_]);return i}let a=E.post(d.buildUrl(e),r());return a.then(function(i){o&&o(i.data)}).catch(function(i){s&&s(i)}),a}static async securePost(e,n=null,o=null,s=null){let r=null;return await this.get("/json/skey").then(a=>{console.log(a),n||(n={}),n.skey=a.data,r=this.post(e,n,o,s)}),r}static get(e,n=null,o=null,s=null,r=!1,a=!1,i=1e3*60*60*24*1){let I=E.get(d.buildUrl(e),{params:n,clearCache:a});return I.then(function(g){o&&o(g.data)}).catch(function(g){s&&s(g)}),I}static list(e,{dataObj:n=null,callback:o=null,failedCallback:s=null}={}){return this.get(`/json/${e}/list`,n,o,s)}static view(e,n,{dataObj:o=null,callback:s=null,failedCallback:r=null}={}){return this.get(`/json/${e}/view/${n}`,o,s,r)}}const ne={components:{},props:{skellist:Object,structure:Object,cursor:String,reqeuest_status:Number},setup(t,e){const n=O(),o=h({skellist:t.skellist});return{route:n,state:o}}},oe=u(" default list"),re=p("br",null,null,-1),ae=p("br",null,null,-1),ie=u(" To disable default views for views and lists use createRouterInstance(routes,false) ");function ue(t,e,n,o,s,r){return m(),w(N,null,[oe,re,u(" Status:"+v(n.reqeuest_status)+": "+v(o.state.skellist),1),ae,ie],64)}var ce=$(ne,[["render",ue]]);const le={components:{},props:{skel:Object,structure:Object,request_status:Number},setup(t,e){return{state:h({})}}},_e=u(" default view "),me=p("br",null,null,-1),de=p("br",null,null,-1),pe=u(" To disable default views for views and lists use createRouterInstance(routes,false) ");function fe(t,e,n,o,s,r){return m(),w("div",null,[_e,me,u(" "+v(n.skel),1),de,pe])}var ve=$(le,[["render",fe]]);const he={name:"Home",components:{},setup(t,e){const n=O();return{state:h({}),route:n}}},we={class:"home"};function $e(t,e,n,o,s,r){return m(),w("div",we," View "+v(o.route.path)+" is missing. ",1)}var ge=$(he,[["render",$e]]);function ye(t){switch(t){case"./views/HomeView.vue":return c(()=>import("./HomeView.b7748975.js"),["static/app/HomeView.b7748975.js","static/app/HomeView.267acf79.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.55e829ed.js"]);case"./views/ShoelaceView.vue":return c(()=>import("./ShoelaceView.9cb0c71c.js"),["static/app/ShoelaceView.9cb0c71c.js","static/app/ShoelaceView.915e9d39.css","static/app/vendor.55e829ed.js","static/app/counterLogic.31a1ceb1.js"]);case"./views/ViurView.vue":return c(()=>import("./ViurView.623b2f62.js"),["static/app/ViurView.623b2f62.js","static/app/ViurView.a0df23b9.css","static/app/vendor.55e829ed.js"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function ke(t){switch(t){case"./views/HomeView.vue":return c(()=>import("./HomeView.b7748975.js"),["static/app/HomeView.b7748975.js","static/app/HomeView.267acf79.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.55e829ed.js"]);case"./views/ShoelaceView.vue":return c(()=>import("./ShoelaceView.9cb0c71c.js"),["static/app/ShoelaceView.9cb0c71c.js","static/app/ShoelaceView.915e9d39.css","static/app/vendor.55e829ed.js","static/app/counterLogic.31a1ceb1.js"]);case"./views/ViurView.vue":return c(()=>import("./ViurView.623b2f62.js"),["static/app/ViurView.623b2f62.js","static/app/ViurView.a0df23b9.css","static/app/vendor.55e829ed.js"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function Ee(t){return[{path:"/:pathMatch(.*)*",name:"view_missing",component:ge},...t]}function be(t,e=!0){return e&&Ie(t),U({history:W("/"),routes:t})}function Ie(t){return t.push({path:"/:moduleName/list",name:"list",component:ce,props:D}),t.push({path:"/:moduleName/view/:key",name:"view",component:ve,props:x}),t}function P(t){let e=t.split("/").slice(-1)[0].split("_")[0];if(t.endsWith("_view"))return{path:`/${e}/view/:key`,name:`${e}_view`,meta:{moduleName:e},component:()=>ke(`./views/${t}.vue`),props:x};if(t.endsWith("_list"))return{path:`/${e}/list`,name:`${e}_list`,meta:{moduleName:e},component:()=>ye(`./views/${t}.vue`),props:D};throw Error("path must end with _view or _list")}function D(t){const e=l([]),n=l({}),o=l(""),s=l(null),r="moduleName"in t.params?t.params.moduleName:t.meta.moduleName;return d.list(r,{dataObj:t.query}).then(a=>{console.log(a),s.value=parseInt(a.status),e.value=a.data.skellist,n.value=a.data.structure,o.value=a.data.cursor}).catch(a=>{s.value=parseInt(a.response.status),console.log(a.response.status)}),{skellist:e,structure:n,cursor:o,request_status:s}}function x(t){const e=l({}),n=l({}),o=l(null),s="moduleName"in t.params?t.params.moduleName:t.meta.moduleName;return d.view(s,t.params.key,{dataObj:t.query}).then(r=>{e.value=r.data.values,n.value=r.data.structure,o.value=parseInt(r.status)}).catch(r=>{o.value=parseInt(r.response.status),console.log(r.response.status)}),{skel:e,structure:n,request_status:o}}const Ve=Ee([{path:"/",name:"home",component:()=>c(()=>import("./HomeView.b7748975.js"),["static/app/HomeView.b7748975.js","static/app/HomeView.267acf79.css","static/app/counterLogic.31a1ceb1.js","static/app/vendor.55e829ed.js"])},{path:"/shoelace",name:"shoelace",component:()=>c(()=>import("./ShoelaceView.9cb0c71c.js"),["static/app/ShoelaceView.9cb0c71c.js","static/app/ShoelaceView.915e9d39.css","static/app/vendor.55e829ed.js","static/app/counterLogic.31a1ceb1.js"])},{path:"/viur",name:"viur",component:()=>c(()=>import("./ViurView.623b2f62.js"),["static/app/ViurView.623b2f62.js","static/app/ViurView.a0df23b9.css","static/app/vendor.55e829ed.js"])},P("example/example_view"),P("example/example_list")]),Re=be(Ve),A=j(ee);A.use(Re);A.mount("#app");export{d as R,$ as _};
