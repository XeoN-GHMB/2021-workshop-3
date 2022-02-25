import{y as R,z as V,_ as s,D as S,O as F,$ as b,H as T,I as H,B as P,C as f,K as U,P as N,Q as q,G as m,R as k,S as x,T as L,n as z,a as D,U as O,V as $,o as v,c as p,W as C,X as A,Y as I,d,Z as M,v as W,x as K,f as j,b as G,e as X,q as E}from"./vendor.7d12e349.js";import{R as _,_ as B}from"./index.bc4bbed2.js";var J=R`
  ${V}

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
    `}};w.styles=J;w=s([H("sl-card")],w);var Q=R`
  ${V}

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
`,l=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),o=class extends S{constructor(){super(...arguments);this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,q(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,q(this,"sl-after-hide")}async toast(){return new Promise(t=>{l.parentElement===null&&document.body.append(l),l.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{l.removeChild(this),t(),l.querySelector("sl-alert")===null&&l.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){m(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await k(this.base),this.base.hidden=!1;const{keyframes:t,options:a}=x(this,"alert.show");await L(this.base,t,a),m(this,"sl-after-show")}else{m(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await k(this.base);const{keyframes:t,options:a}=x(this,"alert.hide");await L(this.base,t,a),this.base.hidden=!0,m(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return b`
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
    `}};o.styles=Q;s([P('[part="base"]')],o.prototype,"base",2);s([f({type:Boolean,reflect:!0})],o.prototype,"open",2);s([f({type:Boolean,reflect:!0})],o.prototype,"closable",2);s([f({reflect:!0})],o.prototype,"variant",2);s([f({type:Number})],o.prototype,"duration",2);s([U("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);s([U("duration")],o.prototype,"handleDurationChange",1);o=s([H("sl-alert")],o);N("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});N("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});const Y=t=>{function a(e,h){t.state.userLoggedIn=h,t.state.user=null,console.error(e)}function n(e,h){t.state.userLoggedIn="loading",_.securePost("/json/user/auth_userpassword/login",{name:e,password:h}).then(g=>{_.get("/json/user/view/self").then(i=>{console.log(i.status),t.state.userLoggedIn="success",t.state.user=i.values}).catch(i=>{a(i,"failed")})}).catch(g=>{a(g,"failed")})}function r(){_.securePost("/json/user/logout").then(e=>{a(e,"initial")}).catch(e=>console.error(e))}function c(){return _.get("/json/user/view/self").then(e=>{console.log(e.status),t.state.userLoggedIn="success",t.state.user=e.values}).catch(e=>{}),t.state.userLoggedIn}function u(){return t.state.user}return{login:n,logout:r,isLoggedIn:c,getUser:u}};const Z={name:"user-login",setup(t,a){const n=z("global"),{login:r,logout:c,isLoggedIn:u}=Y(n),e=D({name:"",password:"",isFilled:O(()=>e.name&&e.password)});$(()=>{u()});function h(i){r(e.name,e.password),e.name="",e.password=""}function g(i){c()}return{global:n,state:e,onLoginAction:h,onLogoutAction:g}}},y=t=>(W("data-v-fd27d0f8"),t=t(),K(),t),ee={key:0},ae={key:0,open:"",variant:"danger",duration:"3000"},te=y(()=>d("sl-icon",{slot:"icon",name:"exclamation-octagon"},null,-1)),re=j(" Login Failed "),oe=[te,re],se=y(()=>d("br",null,null,-1)),de=["disabled","loading"],ne={key:1},ie={key:0,open:"",variant:"success",duration:"3000"},le=y(()=>d("sl-icon",{slot:"icon",name:"check"},null,-1)),ce=j(" Login Success "),ue=[le,ce];function he(t,a,n,r,c,u){return r.global.state.userLoggedIn!=="success"?(v(),p("sl-card",ee,[r.global.state.userLoggedIn==="failed"?(v(),p("sl-alert",ae,oe)):C("",!0),A(d("sl-input",{type:"text",name:"name","onUpdate:modelValue":a[0]||(a[0]=e=>r.state.name=e),placeholder:"username",clearable:"",onSlClear:a[1]||(a[1]=e=>r.state.name="")},null,544),[[I,r.state.name]]),A(d("sl-input",{onKeydown:a[2]||(a[2]=M((...e)=>r.onLoginAction&&r.onLoginAction(...e),["enter"])),type:"password",name:"password","onUpdate:modelValue":a[3]||(a[3]=e=>r.state.password=e),placeholder:"password",onSlClear:a[4]||(a[4]=e=>r.state.password=""),"toggle-password":""},null,544),[[I,r.state.password]]),se,d("sl-button",{onClick:a[5]||(a[5]=(...e)=>r.onLoginAction&&r.onLoginAction(...e)),disabled:!r.state.isFilled,loading:r.global.state.userLoggedIn==="loading"}," Login ",8,de)])):(v(),p("div",ne,[r.global.state.userLoggedIn==="success"?(v(),p("sl-alert",ie,ue)):C("",!0),d("sl-button",{onClick:a[6]||(a[6]=(...e)=>r.onLogoutAction&&r.onLogoutAction(...e))},"Logout")]))}var ve=B(Z,[["render",he],["__scopeId","data-v-fd27d0f8"]]);const pe={name:"ShoelaceView",components:{userLogin:ve},setup(t,a){return{}}},ge={class:"viur"},me=E('<img src="https://www.viur.dev/static/images/logo-red.svg" data-v-5d1dc220><h1 data-v-5d1dc220>Welcome to ViUR</h1><p data-v-5d1dc220>ViUR is an open source software development framework that was created to fulfill both designers and developers needs and requirements.</p><p data-v-5d1dc220> It provides a clear concept for implementing agile data management software. It&#39;s written in Python\u2122 and already attracted a steady growing community constantly helping and improving ViUR.</p><h3 data-v-5d1dc220>Essential Links</h3><ul class="links" data-v-5d1dc220><li data-v-5d1dc220><a href="https://viur.dev/" target="_blank" rel="noopener" data-v-5d1dc220>ViUR.dev</a></li><li data-v-5d1dc220><a href="hhttps://viur-core.readthedocs.io/en/latest/?badge=latest" target="_blank" rel="noopener" data-v-5d1dc220>Core Docs</a></li><li data-v-5d1dc220><a href="https://github.com/viur-framework/viur-base" target="_blank" rel="noopener" data-v-5d1dc220>ViUR Base Template</a></li><li data-v-5d1dc220><a href="https://github.com/viur-framework/awesome-viur" target="_blank" rel="noopener" data-v-5d1dc220>awesome-viur</a></li></ul><h3 data-v-5d1dc220>1. Whitelist Vue dev-server</h3><div class="code" data-v-5d1dc220><code data-v-5d1dc220> if os.environ[&#39;GAE_ENV&#39;] == &quot;localdev&quot;:<br data-v-5d1dc220> \xA0\xA0&quot;Whitelist vueJs Frontend server&quot;<br data-v-5d1dc220> \xA0\xA0request.BrowseHandler.requestValidators = []<br data-v-5d1dc220> \xA0\xA0def preprocessRequestHandler(path):<br data-v-5d1dc220> \xA0\xA0\xA0\xA0currentRequest.get().response.headers[&quot;Access-Control-Allow-Origin&quot;] = &quot;http://localhost:8081&quot;<br data-v-5d1dc220> currentRequest.get().response.headers[&quot;Access-Control-Allow-Credentials&quot;] = &quot;true&quot;<br data-v-5d1dc220> \xA0\xA0\xA0\xA0return (path)<br data-v-5d1dc220> conf[&quot;viur.requestPreprocessor&quot;] = preprocessRequestHandler </code></div><h3 data-v-5d1dc220>Example Login Process</h3>',9),_e=E('<h3 data-v-5d1dc220>Requesttypes</h3> import:<br data-v-5d1dc220><code data-v-5d1dc220> import Request from &quot;@/request.js&quot; </code><div style="margin-top:20px;" data-v-5d1dc220><ul data-v-5d1dc220><li data-v-5d1dc220><b data-v-5d1dc220>Request.get</b>: Send data as get request, get requests are cacheable</li><li data-v-5d1dc220><b data-v-5d1dc220>Request.post</b>: Send data as post request</li><li data-v-5d1dc220><b data-v-5d1dc220>Request.securePost</b>: This request fetches an skey which is appended</li><li data-v-5d1dc220><b data-v-5d1dc220>Request.list</b>: send a list request with moduleName and dataObject</li><li data-v-5d1dc220><b data-v-5d1dc220>Request.view</b>: send a view request with moduleName and dataObject</li></ul></div><h3 data-v-5d1dc220>Views</h3> use addRoute to autogenerate the matching route for a view<br data-v-5d1dc220> This route will automatically fetch a skellist<br data-v-5d1dc220><code data-v-5d1dc220> addRoute(&quot;example/example_list&quot;) </code><div style="height:100px;" data-v-5d1dc220></div>',12);function fe(t,a,n,r,c,u){const e=G("user-login");return v(),p("div",ge,[me,X(e),_e])}var ye=B(pe,[["render",fe],["__scopeId","data-v-5d1dc220"]]);export{ye as default};
