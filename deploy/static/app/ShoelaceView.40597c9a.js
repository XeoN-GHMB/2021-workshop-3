import{y as _,z as y,A as $,_ as r,B as v,C as b,D as x,L as T,E as C,G as f,$ as u,H as A,I as w,J as B,K as I,M as S,N as E,n as z,k as W,o as L,c as O,d as a,t as H,v as N,x as P,f as k}from"./vendor.c40be0ea.js";import{c as V}from"./counterLogic.31a1ceb1.js";import{_ as F}from"./index.45407c0a.js";var G=_`
  ${y}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${$}:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
    box-shadow: inset var(--sl-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

`,d=class extends x{constructor(){super(...arguments);this.localize=new T(this),this.attrId=C(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){f(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,u`
      <div
        part="base"
        class=${A({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?u`
              <sl-icon-button
                name="x"
                library="system"
                label=${this.localize.term("close")}
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};d.styles=G;r([v(".tab")],d.prototype,"tab",2);r([b({reflect:!0})],d.prototype,"panel",2);r([b({type:Boolean,reflect:!0})],d.prototype,"active",2);r([b({type:Boolean})],d.prototype,"closable",2);r([b({type:Boolean,reflect:!0})],d.prototype,"disabled",2);r([b()],d.prototype,"lang",2);d=r([w("sl-tab")],d);var U=_`
  ${y}

  :host {
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    left: 0;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid 2px var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: -2px;
    border-bottom: solid 2px var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid 2px var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * 2px);
    border-top: solid 2px var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid 2px var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * 2px);
    border-right: solid 2px var(--indicator-color);
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid 2px var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * 2px);
    border-left: solid 2px var(--indicator-color);
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /* flap styling */

  .tab-group--variant-flap.tab-group--top .tab-group__tabs{
    border:0px;
  }
  .tab-group--variant-flap.tab-group--bottom .tab-group__tabs{
    border:0px;
  }
  .tab-group--variant-flap.tab-group--end .tab-group__tabs{
    border:0px;
  }
  .tab-group--variant-flap.tab-group--start .tab-group__tabs{
    border:0px;
  }

  .tab-group--variant-flap.tab-group--top ::slotted(sl-tab){
    background-color:var(--sl-shadow-large);
  }

  .tab-group--variant-flap.tab-group--top ::slotted(sl-tab[active]){
    border: 1px solid var(--sl-color-neutral-300);
    box-shadow: 2px 5px 16px 0px var(--sl-color-neutral-300), 5px 5px 15px 5px rgb(0 0 0 / 0%);
    border-bottom:0px;
  }
  .tab-group--variant-flap.tab-group--top ::slotted(:not(sl-tab[active])){
     border-bottom: 1px solid var(--sl-color-neutral-300);
  }


  .tab-group--variant-flap.tab-group--bottom ::slotted(sl-tab[active]){
    border: 1px solid var(--sl-color-neutral-300);
    box-shadow: 2px 5px 16px 0px var(--sl-color-neutral-300), 5px 5px 15px 5px rgb(0 0 0 / 0%);
    border-top:0px;
  }
  .tab-group--variant-flap.tab-group--bottom ::slotted(:not(sl-tab[active])){
     border-top: 1px solid var(--sl-color-neutral-300);
  }

  .tab-group--variant-flap.tab-group--start ::slotted(sl-tab[active]){
    border: 1px solid var(--sl-color-neutral-300);
    box-shadow: -10px 0px 16px 0px var(--sl-color-neutral-300);
    border-right:0px;
  }
  .tab-group--variant-flap.tab-group--start ::slotted(:not(sl-tab[active])){
     border-right: 1px solid var(--sl-color-neutral-300);
  }

  .tab-group--variant-flap.tab-group--end ::slotted(sl-tab[active]){
    border: 1px solid var(--sl-color-neutral-300);
    box-shadow: 10px 0px 16px 0px var(--sl-color-neutral-300);
    border-left:0px;
  }
  .tab-group--variant-flap.tab-group--end ::slotted(:not(sl-tab[active])){
     border-left: 1px solid var(--sl-color-neutral-300);
  }
`,c=class extends x{constructor(){super(...arguments);this.localize=new T(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.variant="indicator",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((o,s)=>{var e;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((e=this.getActiveTab())!=null?e:this.tabs[0],{emitEvents:!1}),s.unobserve(o[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const o=this.tabs.find(s=>s.panel===t);o&&this.setActiveTab(o,{scrollBehavior:"smooth"})}getAllTabs(t=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>t?s.tagName.toLowerCase()==="sl-tab":s.tagName.toLowerCase()==="sl-tab"&&!s.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(o=>o.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const p=document.activeElement;if((p==null?void 0:p.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(p);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key==="ArrowLeft"||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n=Math.max(0,n-1):(["top","bottom"].includes(this.placement)&&t.key==="ArrowRight"||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&(n=Math.min(this.tabs.length-1,n+1)),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&S(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(t,o){if(o=E({emitEvents:!0,scrollBehavior:"auto"},o),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.map(e=>e.active=e===this.activeTab),this.panels.map(e=>{var p;return e.active=e.name===((p=this.activeTab)==null?void 0:p.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&S(this.activeTab,this.nav,"horizontal",o.scrollBehavior),o.emitEvents&&(s&&f(this,"sl-tab-hide",{detail:{name:s.panel}}),f(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const o=this.panels.find(s=>s.name===t.panel);o&&(t.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const o=t.clientWidth,s=t.clientHeight,e=this.getAllTabs(),n=e.slice(0,e.indexOf(t)).reduce((l,m)=>({left:l.left+m.clientWidth,top:l.top+m.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${o}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${n.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.transform=`translateY(${n.top}px)`;break}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=t})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return u`
      <div
        part="base"
        class=${A({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--variant-flap":this.variant==="flap"})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?u`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  exportparts="base:scroll-button"
                  name="chevron-left"
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              ${this.variant==="flap"?u``:u`<div part="active-tab-indicator" class="tab-group__indicator"></div>`}
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?u`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  exportparts="base:scroll-button"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};c.styles=U;r([v(".tab-group")],c.prototype,"tabGroup",2);r([v(".tab-group__body")],c.prototype,"body",2);r([v(".tab-group__nav")],c.prototype,"nav",2);r([v(".tab-group__indicator")],c.prototype,"indicator",2);r([B()],c.prototype,"hasScrollControls",2);r([b()],c.prototype,"placement",2);r([b({type:String,reflect:!0})],c.prototype,"variant",2);r([b()],c.prototype,"activation",2);r([b({attribute:"no-scroll-controls",type:Boolean})],c.prototype,"noScrollControls",2);r([b()],c.prototype,"lang",2);r([I("noScrollControls",{waitUntilFirstUpdate:!0})],c.prototype,"updateScrollControls",1);r([I("placement",{waitUntilFirstUpdate:!0})],c.prototype,"syncIndicator",1);c=r([w("sl-tab-group")],c);var M=_`
  ${y}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,g=class extends x{constructor(){super(...arguments);this.attrId=C(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",u`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};g.styles=M;r([b({reflect:!0})],g.prototype,"name",2);r([b({type:Boolean,reflect:!0})],g.prototype,"active",2);g=r([w("sl-tab-panel")],g);const R={name:"ShoelaceView",setup(t,o){const s=z("global"),{removeFromCounter:e}=V(s),p=W(null);function n(h){h.detail.name==="dialog"&&l()}function l(h){p.value.show()}function m(h){p.value.hide()}function D(h){parseInt(h.target.value)===14?h.target.invalid=!1:h.target.invalid=!0}return{tabChange:n,welcomeDialog:p,closeWelcomeDialog:m,checkinput:D,global:s,removeFromCounter:e,openWelcomeDialog:l}}},i=t=>(N("data-v-41865e82"),t=t(),P(),t),q={class:"shoelace"},K=i(()=>a("img",{src:"https://shoelace.style/assets/images/wordmark.svg"},null,-1)),j=i(()=>a("h1",null,"Welcome to Shoelace",-1)),J=i(()=>a("p",null,"Shoelace provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology.",-1)),X=i(()=>a("sl-button",{style:{"margin-top":"20px"},href:"https://serene-allen-537100.netlify.app/"},[a("sl-icon",{slot:"prefix",name:"box-arrow-up-right"}),k(" Shoelace Documentation")],-1)),Y=i(()=>a("br",null,null,-1)),Q=i(()=>a("br",null,null,-1)),Z=i(()=>a("br",null,null,-1)),tt=i(()=>a("h3",null,"Some Examples",-1)),ot=i(()=>a("sl-tab",{slot:"nav",panel:"buttons",active:""},"Buttons",-1)),at=i(()=>a("sl-tab",{slot:"nav",panel:"dialog"},"Dialog",-1)),et=i(()=>a("sl-tab",{slot:"nav",panel:"elements"},"Elements",-1)),st={name:"buttons",active:""},rt=i(()=>a("sl-button",{variant:"danger",outline:""},"Button",-1)),lt=i(()=>a("sl-dropdown",null,[a("sl-button",{slot:"trigger",caret:""},"Dropdown"),a("sl-menu",null,[a("sl-menu-item",null,"Item 1"),a("sl-menu-item",null,"Item 2"),a("sl-menu-item",null,"Item 3")])],-1)),it=i(()=>a("sl-button",{variant:"default"},[a("sl-icon",{name:"gear"})],-1)),nt=i(()=>a("sl-button",null,[k(" Badges "),a("sl-badge",{variant:"danger",pill:""},"6")],-1)),ct={name:"dialog"},pt={content:"This is a tooltip"},bt={name:"elements"},dt={ref:"welcomeDialog",label:"Dialog",class:"dialog-overview"},ut=k(" Welcome to a shoelace dialog "),ht=i(()=>a("h3",null,"Use a global State counter",-1));function gt(t,o,s,e,p,n){return L(),O("div",q,[K,j,J,X,Y,Q,Z,tt,a("sl-tab-group",{onSlTabShow:o[3]||(o[3]=(...l)=>e.tabChange&&e.tabChange(...l))},[ot,at,et,a("sl-tab-panel",st,[a("sl-button-group",null,[a("sl-button",{variant:"primary",onClick:o[0]||(o[0]=(...l)=>e.openWelcomeDialog&&e.openWelcomeDialog(...l))},"Button"),rt,lt,it,nt])]),a("sl-tab-panel",ct,[a("sl-tooltip",pt,[a("sl-button",{onClick:o[1]||(o[1]=(...l)=>e.openWelcomeDialog&&e.openWelcomeDialog(...l))},"Hover Me")])]),a("sl-tab-panel",bt,[a("sl-input",{clearable:"",placeholder:"this input is empty",label:"7+7","help-text":"Please enter the correct value",onInput:o[2]||(o[2]=(...l)=>e.checkinput&&e.checkinput(...l))},null,32)])],32),a("sl-dialog",dt,[ut,a("sl-button",{slot:"footer",variant:"primary",onClick:o[4]||(o[4]=(...l)=>e.closeWelcomeDialog&&e.closeWelcomeDialog(...l))},"close")],512),ht,a("sl-button",{type:"primary",onClick:o[5]||(o[5]=(...l)=>e.removeFromCounter&&e.removeFromCounter(...l))},H(e.global.state.counter),1)])}var _t=F(R,[["render",gt],["__scopeId","data-v-41865e82"]]);export{_t as default};
