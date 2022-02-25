import{x as V,y as I,_ as s,C as S,N as F,$ as b,G as T,H,A as P,B as _,J as U,O as N,P as q,E as g,Q as k,R as x,S as L,m as O,a as $,T as z,U as D,o as v,c as p,V as C,W as A,X as R,d as n,Y as M,q as W,v as G,f as E,b as J,e as K,n as j}from"./vendor.0ffd3825.js";import{R as m,_ as B}from"./index.18b67d52.js";var X=V`
  ${I}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,w=class extends S{constructor(){super(...arguments);this.hasSlotController=new F(this,"footer","header","image")}render(){return b`
      <div
        part="base"
        class=${T({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};w.styles=X;w=s([H("sl-card")],w);var Q=V`
  ${I}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    /*border-top-width: calc(var(--sl-panel-border-width) * 3)*/
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
  }

  .alert__icon ::slotted(*) {
    margin-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-100);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-color: var(--sl-color-success-600);
    background-color: var(--sl-color-success-100);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-color: var(--sl-color-neutral-600);
    background-color: var(--sl-color-neutral-100);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-color: var(--sl-color-warning-600);
    background-color: var(--sl-color-warning-100);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-color: var(--sl-color-danger-600);
    background-color: var(--sl-color-danger-100);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert--info {
    border-color: var(--sl-color-info-600);
    background-color: var(--sl-color-info-100);
  }

  .alert--info .alert__icon {
    color: var(--sl-color-info-600);
  }

  .alert--secondary {
    border-color: var(--sl-color-secondary-600);
    background-color: var(--sl-color-secondary-100);
  }

  .alert--secondary .alert__icon {
    color: var(--sl-color-secondary-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`,d=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),o=class extends S{constructor(){super(...arguments);this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,q(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,q(this,"sl-after-hide")}async toast(){return new Promise(t=>{d.parentElement===null&&document.body.append(d),d.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{d.removeChild(this),t(),d.querySelector("sl-alert")===null&&d.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){g(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await k(this.base),this.base.hidden=!1;const{keyframes:t,options:a}=x(this,"alert.show");await L(this.base,t,a),g(this,"sl-after-show")}else{g(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await k(this.base);const{keyframes:t,options:a}=x(this,"alert.hide");await L(this.base,t,a),this.base.hidden=!0,g(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return b`
      <div
        part="base"
        class=${T({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger","alert--info":this.variant==="info","alert--secondary":this.variant==="secondary"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?b`
              <span class="alert__close">
                <sl-icon-button
                  exportparts="base:close-button"
                  name="x"
                  library="system"
                  @click=${this.handleCloseClick}
                ></sl-icon-button>
              </span>
            `:""}
      </div>
    `}};o.styles=Q;s([P('[part="base"]')],o.prototype,"base",2);s([_({type:Boolean,reflect:!0})],o.prototype,"open",2);s([_({type:Boolean,reflect:!0})],o.prototype,"closable",2);s([_({reflect:!0})],o.prototype,"variant",2);s([_({type:Number})],o.prototype,"duration",2);s([U("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);s([U("duration")],o.prototype,"handleDurationChange",1);o=s([H("sl-alert")],o);N("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});N("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});const Y=t=>{function a(e,h){t.state.userLoggedIn=h,t.state.user=null,console.error(e)}function i(e,h){t.state.userLoggedIn="loading",m.securePost("/json/user/auth_userpassword/login",{name:e,password:h}).then(f=>{m.get("/json/user/view/self").then(l=>{console.log(l.status),t.state.userLoggedIn="success",t.state.user=l.values}).catch(l=>{a(l,"failed")})}).catch(f=>{a(f,"failed")})}function r(){m.securePost("/json/user/logout").then(e=>{a(e,"initial")}).catch(e=>console.error(e))}function c(){return m.get("/json/user/view/self").then(e=>{console.log(e.status),t.state.userLoggedIn="success",t.state.user=e.values}).catch(e=>{}),t.state.userLoggedIn}function u(){return t.state.user}return{login:i,logout:r,isLoggedIn:c,getUser:u}};const Z={name:"user-login",setup(t,a){const i=O("global"),{login:r,logout:c,isLoggedIn:u}=Y(i),e=$({name:"",password:"",isFilled:z(()=>e.name&&e.password)});D(()=>{u()});function h(l){r(e.name,e.password),e.name="",e.password=""}function f(l){c()}return{global:i,state:e,onLoginAction:h,onLogoutAction:f}}},y=t=>(W("data-v-fd27d0f8"),t=t(),G(),t),ee={key:0},ae={key:0,open:"",variant:"danger",duration:"3000"},te=y(()=>n("sl-icon",{slot:"icon",name:"exclamation-octagon"},null,-1)),re=E(" Login Failed "),oe=[te,re],se=y(()=>n("br",null,null,-1)),ne=["disabled","loading"],ie={key:1},le={key:0,open:"",variant:"success",duration:"3000"},de=y(()=>n("sl-icon",{slot:"icon",name:"check"},null,-1)),ce=E(" Login Success "),ue=[de,ce];function he(t,a,i,r,c,u){return r.global.state.userLoggedIn!=="success"?(v(),p("sl-card",ee,[r.global.state.userLoggedIn==="failed"?(v(),p("sl-alert",ae,oe)):C("",!0),A(n("sl-input",{type:"text",name:"name","onUpdate:modelValue":a[0]||(a[0]=e=>r.state.name=e),placeholder:"username",clearable:"",onSlClear:a[1]||(a[1]=e=>r.state.name="")},null,544),[[R,r.state.name]]),A(n("sl-input",{onKeydown:a[2]||(a[2]=M((...e)=>r.onLoginAction&&r.onLoginAction(...e),["enter"])),type:"password",name:"password","onUpdate:modelValue":a[3]||(a[3]=e=>r.state.password=e),placeholder:"password",onSlClear:a[4]||(a[4]=e=>r.state.password=""),"toggle-password":""},null,544),[[R,r.state.password]]),se,n("sl-button",{onClick:a[5]||(a[5]=(...e)=>r.onLoginAction&&r.onLoginAction(...e)),disabled:!r.state.isFilled,loading:r.global.state.userLoggedIn==="loading"}," Login ",8,ne)])):(v(),p("div",ie,[r.global.state.userLoggedIn==="success"?(v(),p("sl-alert",le,ue)):C("",!0),n("sl-button",{onClick:a[6]||(a[6]=(...e)=>r.onLogoutAction&&r.onLogoutAction(...e))},"Logout")]))}var ve=B(Z,[["render",he],["__scopeId","data-v-fd27d0f8"]]),pe="/static/app/viur.41ff2d25.svg";const fe={name:"ShoelaceView",components:{userLogin:ve},setup(t,a){return{}}},ge={class:"viur"},me=j('<img src="'+pe+'" data-v-32ec98f8><h1 data-v-32ec98f8>Welcome to ViUR</h1><p data-v-32ec98f8>ViUR is an open source software development framework that was created to fulfill both designers and developers needs and requirements.</p><p data-v-32ec98f8> It provides a clear concept for implementing agile data management software. It&#39;s written in Python\u2122 and already attracted a steady growing community constantly helping and improving ViUR.</p><h3 data-v-32ec98f8>Essential Links</h3><ul class="links" data-v-32ec98f8><li data-v-32ec98f8><a href="https://viur.dev/" target="_blank" rel="noopener" data-v-32ec98f8>ViUR.dev</a></li><li data-v-32ec98f8><a href="hhttps://viur-core.readthedocs.io/en/latest/?badge=latest" target="_blank" rel="noopener" data-v-32ec98f8>Core Docs</a></li><li data-v-32ec98f8><a href="https://github.com/viur-framework/viur-base" target="_blank" rel="noopener" data-v-32ec98f8>ViUR Base Template</a></li><li data-v-32ec98f8><a href="https://github.com/viur-framework/awesome-viur" target="_blank" rel="noopener" data-v-32ec98f8>awesome-viur</a></li></ul><h3 data-v-32ec98f8>1. Whitelist Vue dev-server</h3><div class="code" data-v-32ec98f8><code data-v-32ec98f8> if os.environ[&#39;GAE_ENV&#39;] == &quot;localdev&quot;:<br data-v-32ec98f8> \xA0\xA0&quot;Whitelist vueJs Frontend server&quot;<br data-v-32ec98f8> \xA0\xA0request.BrowseHandler.requestValidators = []<br data-v-32ec98f8> \xA0\xA0def preprocessRequestHandler(path):<br data-v-32ec98f8> \xA0\xA0\xA0\xA0currentRequest.get().response.headers[&quot;Access-Control-Allow-Origin&quot;] = &quot;http://localhost:8081&quot;<br data-v-32ec98f8> currentRequest.get().response.headers[&quot;Access-Control-Allow-Credentials&quot;] = &quot;true&quot;<br data-v-32ec98f8> \xA0\xA0\xA0\xA0return (path)<br data-v-32ec98f8> conf[&quot;viur.requestPreprocessor&quot;] = preprocessRequestHandler </code></div><h3 data-v-32ec98f8>Example Login Process</h3>',9),_e=j('<h3 data-v-32ec98f8>Requesttypes</h3> import:<br data-v-32ec98f8><code data-v-32ec98f8> import Request from &quot;@/request.js&quot; </code><div style="margin-top:20px;" data-v-32ec98f8><ul data-v-32ec98f8><li data-v-32ec98f8><b data-v-32ec98f8>Request.get</b>: Send data as get request, get requests are cacheable</li><li data-v-32ec98f8><b data-v-32ec98f8>Request.post</b>: Send data as post request</li><li data-v-32ec98f8><b data-v-32ec98f8>Request.securePost</b>: This request fetches an skey which is appended</li><li data-v-32ec98f8><b data-v-32ec98f8>Request.list</b>: send a list request with moduleName and dataObject</li><li data-v-32ec98f8><b data-v-32ec98f8>Request.view</b>: send a view request with moduleName and dataObject</li></ul></div><h3 data-v-32ec98f8>Views</h3> use addRoute to autogenerate the matching route for a view<br data-v-32ec98f8> This route will automatically fetch a skellist<br data-v-32ec98f8><code data-v-32ec98f8> addRoute(&quot;example/example_list&quot;) </code><div style="height:100px;" data-v-32ec98f8></div>',12);function be(t,a,i,r,c,u){const e=J("user-login");return v(),p("div",ge,[me,K(e),_e])}var qe=B(fe,[["render",be],["__scopeId","data-v-32ec98f8"]]);export{qe as default};
