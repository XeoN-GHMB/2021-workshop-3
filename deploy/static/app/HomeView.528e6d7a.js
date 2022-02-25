import{_ as u,R as v}from"./index.18b67d52.js";import{c as m}from"./counterLogic.31a1ceb1.js";import{m as b,j as g,a as f,o as p,c as h,d as e,t as i,n as k,q as y,v as j,f as _,b as D,e as V}from"./vendor.0ffd3825.js";const x={name:"HelloWorld",props:{msg:String},setup(s,t){const n=b("global"),{addToCounter:o}=m(n),r=g(),c=f({requestdata:"No Data"});function a(d){r.value.show()}return v.get("https://jsonplaceholder.typicode.com/todos/1").then(d=>{c.requestdata=d.data}),{state:c,showPopup:a,helloDialog:r,addToCounter:o,global:n}}},l=s=>(y("data-v-3b66d23c"),s=s(),j(),s),S={class:"hello"},C=k('<p data-v-3b66d23c> For a guide and recipes on how to configure / customize this project,<br data-v-3b66d23c> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-3b66d23c>vue-cli documentation</a>. </p><h3 data-v-3b66d23c>Essential Links</h3><ul data-v-3b66d23c><li data-v-3b66d23c><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-3b66d23c>Vue.js Docs</a></li><li data-v-3b66d23c><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-3b66d23c>Vue Router Docs</a></li><li data-v-3b66d23c><a href="https://vuejs.org/style-guide/rules-essential.html" target="_blank" rel="noopener" data-v-3b66d23c>Vue Style Guide</a></li><li data-v-3b66d23c><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-3b66d23c>awesome-vue</a></li></ul><h3 data-v-3b66d23c>Vue Devtools</h3><ul data-v-3b66d23c><li data-v-3b66d23c><a href="https://devtools.vuejs.org/guide/installation.html#chrome" target="_blank" rel="noopener" data-v-3b66d23c>Debugger for Chrome</a></li><li data-v-3b66d23c><a href="https://devtools.vuejs.org/guide/installation.html#firefox" target="_blank" rel="noopener" data-v-3b66d23c>Debugger for Firefox</a></li><li data-v-3b66d23c><a href="https://plugins.jetbrains.com/plugin/9442-vue-js" target="_blank" rel="noopener" data-v-3b66d23c>Pycharm Plugin</a></li><li data-v-3b66d23c><a href="https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack" target="_blank" rel="noopener" data-v-3b66d23c>VSCode Extension</a></li></ul><h3 data-v-3b66d23c>ViUR Shoelace Components</h3>',6),w=l(()=>e("sl-icon",{name:"cloud"},null,-1)),H=_(" I'am a shoelace button "),q=[w,H],I=l(()=>e("h4",null,"Use Shoelace for bootstrap icons, viur icons and custom icons",-1)),N=l(()=>e("sl-icon",{class:"viuricon",library:"myicons",name:"viur"},null,-1)),W=l(()=>e("sl-icon",{style:{"font-size":"2em",color:"var(--sl-color-info-500)"},library:"bootstrap",name:"puzzle-fill"},null,-1)),z=l(()=>e("sl-icon",{style:{"font-size":"2em",color:"var(--sl-color-success-500)","margin-left":"10px"},name:"heart-fill"},null,-1)),P={ref:"helloDialog",label:"Dialog"},R=_(" I'am a Shoelace Dialog "),$=l(()=>e("h3",null,"Request Some Demo Data",-1)),T=l(()=>e("h3",null,"Use a global State counter",-1));function B(s,t,n,o,r,c){return p(),h("div",S,[e("h1",null,i(n.msg),1),C,e("sl-button",{onClick:t[0]||(t[0]=(...a)=>o.showPopup&&o.showPopup(...a))},q),I,N,W,z,e("sl-dialog",P,[R,e("sl-button",{slot:"footer",type:"primary",onClick:t[1]||(t[1]=a=>o.helloDialog.hide())},"Close")],512),$,e("p",null,i(o.state.requestdata),1),T,e("sl-button",{type:"primary",onClick:t[2]||(t[2]=(...a)=>o.addToCounter&&o.addToCounter(...a))}," Click me: "+i(o.global.state.counter),1)])}var E=u(x,[["render",B],["__scopeId","data-v-3b66d23c"]]),U="/static/app/logo.03d6d6da.png";const F={name:"HomeView",components:{HelloWorld:E}},L={class:"home"},A=e("img",{alt:"Vue logo",src:U},null,-1),G=e("div",{style:{height:"100px"}},null,-1);function Y(s,t,n,o,r,c){const a=D("HelloWorld");return p(),h("div",L,[A,V(a,{msg:"Welcome to Your Vue.js App"}),G])}var O=u(F,[["render",Y]]);export{O as default};
