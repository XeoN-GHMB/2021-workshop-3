var er={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Hi=t=>(...e)=>({_$litDirective$:t,values:e}),ji=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qi=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vi=Symbol(),Is=new Map,dl=class{constructor(t,e){if(this._$cssResult$=!0,e!==Vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Is.get(this.cssText);return qi&&t===void 0&&(Is.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},hl=t=>new dl(typeof t=="string"?t:t+"",Vi),Gt=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new dl(r,Vi)},jc=(t,e)=>{qi?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},Ds=qi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return hl(r)})(t):t,Yo,Ns=window.trustedTypes,qc=Ns?Ns.emptyScript:"",Ls=window.reactiveElementPolyfillSupport,hi={toAttribute(t,e){switch(e){case Boolean:t=t?qc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},pl=(t,e)=>e!==t&&(e==e||t==t),Xo={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:pl},kr=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=Xo){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Xo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Ds(n))}else t!==void 0&&e.push(Ds(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jc(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Xo){var n,o;const i=this.constructor._$Eh(t,r);if(i!==void 0&&r.reflect===!0){const s=((o=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:hi.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,e){var r,n,o;const i=this.constructor,s=i._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const a=i.getPropertyOptions(s),l=a.converter,f=(o=(n=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&o!==void 0?o:hi.fromAttribute;this._$Ei=s,this[s]=f(e,a.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||pl)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};kr.finalized=!0,kr.elementProperties=new Map,kr.elementStyles=[],kr.shadowRootOptions={mode:"open"},Ls==null||Ls({ReactiveElement:kr}),((Yo=globalThis.reactiveElementVersions)!==null&&Yo!==void 0?Yo:globalThis.reactiveElementVersions=[]).push("1.2.3");var Jo,zr=globalThis.trustedTypes,Ms=zr?zr.createPolicy("lit-html",{createHTML:t=>t}):void 0,or=`lit$${(Math.random()+"").slice(9)}$`,vl="?"+or,Vc=`<${vl}>`,Hr=document,Cn=(t="")=>Hr.createComment(t),Sn=t=>t===null||typeof t!="object"&&typeof t!="function",ml=Array.isArray,Wc=t=>{var e;return ml(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bs=/-->/g,Fs=/>/g,dr=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Us=/'/g,zs=/"/g,gl=/^(?:script|style|textarea|title)$/i,Kc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Pt=Kc(1),be=Symbol.for("lit-noChange"),Dt=Symbol.for("lit-nothing"),Hs=new WeakMap,Yc=(t,e,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=i._$litPart$;if(s===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new $o(e.insertBefore(Cn(),a),a,void 0,r!=null?r:{})}return s._$AI(t),s},Mr=Hr.createTreeWalker(Hr,129,null,!1),Xc=(t,e)=>{const r=t.length-1,n=[];let o,i=e===2?"<svg>":"",s=cn;for(let l=0;l<r;l++){const f=t[l];let u,d,v=-1,_=0;for(;_<f.length&&(s.lastIndex=_,d=s.exec(f),d!==null);)_=s.lastIndex,s===cn?d[1]==="!--"?s=Bs:d[1]!==void 0?s=Fs:d[2]!==void 0?(gl.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=dr):d[3]!==void 0&&(s=dr):s===dr?d[0]===">"?(s=o!=null?o:cn,v=-1):d[1]===void 0?v=-2:(v=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?dr:d[3]==='"'?zs:Us):s===zs||s===Us?s=dr:s===Bs||s===Fs?s=cn:(s=dr,o=void 0);const A=s===dr&&t[l+1].startsWith("/>")?" ":"";i+=s===cn?f+Vc:v>=0?(n.push(u),f.slice(0,v)+"$lit$"+f.slice(v)+or+A):f+or+(v===-2?(n.push(void 0),l):A)}const a=i+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ms!==void 0?Ms.createHTML(a):a,n]},ho=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0;const s=t.length-1,a=this.parts,[l,f]=Xc(t,e);if(this.el=ho.createElement(l,r),Mr.currentNode=this.el.content,e===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(n=Mr.nextNode())!==null&&a.length<s;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(or)){const v=f[i++];if(u.push(d),v!==void 0){const _=n.getAttribute(v.toLowerCase()+"$lit$").split(or),A=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:A[2],strings:_,ctor:A[1]==="."?Qc:A[1]==="?"?Zc:A[1]==="@"?tf:Co})}else a.push({type:6,index:o})}for(const d of u)n.removeAttribute(d)}if(gl.test(n.tagName)){const u=n.textContent.split(or),d=u.length-1;if(d>0){n.textContent=zr?zr.emptyScript:"";for(let v=0;v<d;v++)n.append(u[v],Cn()),Mr.nextNode(),a.push({type:2,index:++o});n.append(u[d],Cn())}}}else if(n.nodeType===8)if(n.data===vl)a.push({type:2,index:o});else{let u=-1;for(;(u=n.data.indexOf(or,u+1))!==-1;)a.push({type:7,index:o}),u+=or.length-1}o++}}static createElement(t,e){const r=Hr.createElement("template");return r.innerHTML=t,r}};function jr(t,e,r=t,n){var o,i,s,a;if(e===be)return e;let l=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const f=Sn(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==f&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),f===void 0?l=void 0:(l=new f(t),l._$AT(t,r,n)),n!==void 0?((s=(a=r)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[n]=l:r._$Cu=l),l!==void 0&&(e=jr(t,l._$AS(t,e.values),l,n)),e}var Jc=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Hr).importNode(r,!0);Mr.currentNode=o;let i=Mr.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let f;l.type===2?f=new $o(i,i.nextSibling,this,t):l.type===1?f=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(f=new ef(i,this,t)),this.v.push(f),l=n[++a]}s!==(l==null?void 0:l.index)&&(i=Mr.nextNode(),s++)}return o}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},$o=class{constructor(t,e,r,n){var o;this.type=2,this._$AH=Dt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=jr(this,t,e),Sn(t)?t===Dt||t==null||t===""?(this._$AH!==Dt&&this._$AR(),this._$AH=Dt):t!==this._$AH&&t!==be&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Wc(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==Dt&&Sn(this._$AH)?this._$AA.nextSibling.data=t:this.S(Hr.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ho.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(r);else{const i=new Jc(o,this),s=i.p(this.options);i.m(r),this.S(s),this._$AH=i}}_$AC(t){let e=Hs.get(t.strings);return e===void 0&&Hs.set(t.strings,e=new ho(t)),e}A(t){ml(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new $o(this.M(Cn()),this.M(Cn()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Co=class{constructor(t,e,r,n,o){this.type=1,this._$AH=Dt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Dt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const o=this.strings;let i=!1;if(o===void 0)t=jr(this,t,e,0),i=!Sn(t)||t!==this._$AH&&t!==be,i&&(this._$AH=t);else{const s=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=jr(this,s[r+a],e,a),l===be&&(l=this._$AH[a]),i||(i=!Sn(l)||l!==this._$AH[a]),l===Dt?t=Dt:t!==Dt&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}i&&!n&&this.k(t)}k(t){t===Dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Qc=class extends Co{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===Dt?void 0:t}},Gc=zr?zr.emptyScript:"",Zc=class extends Co{constructor(){super(...arguments),this.type=4}k(t){t&&t!==Dt?this.element.setAttribute(this.name,Gc):this.element.removeAttribute(this.name)}},tf=class extends Co{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=jr(this,t,e,0))!==null&&r!==void 0?r:Dt)===be)return;const n=this._$AH,o=t===Dt&&n!==Dt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Dt&&(n===Dt||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},ef=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){jr(this,t)}},js=window.litHtmlPolyfillSupport;js==null||js(ho,$o),((Jo=globalThis.litHtmlVersions)!==null&&Jo!==void 0?Jo:globalThis.litHtmlVersions=[]).push("2.1.3");var Qo,Go,jt=class extends kr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Yc(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return be}};jt.finalized=!0,jt._$litElement$=!0,(Qo=globalThis.litElementHydrateSupport)===null||Qo===void 0||Qo.call(globalThis,{LitElement:jt});var qs=globalThis.litElementPolyfillSupport;qs==null||qs({LitElement:jt});((Go=globalThis.litElementVersions)!==null&&Go!==void 0?Go:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le=Hi(class extends ji{constructor(t){var e;if(super(t),t.type!==er.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.et)===null||r===void 0?void 0:r.has(i))&&this.st.add(i);return this.render(e)}const o=t.element.classList;this.st.forEach(i=>{i in e||(o.remove(i),this.st.delete(i))});for(const i in e){const s=!!e[i];s===this.st.has(i)||((n=this.et)===null||n===void 0?void 0:n.has(i))||(s?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return be}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt=t=>t!=null?t:Dt;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bl=Object.defineProperty,rf=Object.defineProperties,nf=Object.getOwnPropertyDescriptor,of=Object.getOwnPropertyDescriptors,Vs=Object.getOwnPropertySymbols,sf=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,Ws=(t,e,r)=>e in t?bl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,$r=(t,e)=>{for(var r in e||(e={}))sf.call(e,r)&&Ws(t,r,e[r]);if(Vs)for(var r of Vs(e))af.call(e,r)&&Ws(t,r,e[r]);return t},So=(t,e)=>rf(t,of(e)),E=(t,e,r,n)=>{for(var o=n>1?void 0:n?nf(e,r):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(o=(n?s(e,r,o):s(o))||o);return n&&o&&bl(e,r,o),o},lf=class extends Event{constructor(t){super("formdata");this.formData=t}},uf=class extends FormData{constructor(t){super(t);this.form=t,t.dispatchEvent(new lf(this))}append(t,e){let r=this.form.elements[t];if(r||(r=document.createElement("input"),r.type="hidden",r.name=t,this.form.appendChild(r)),this.has(t)){const n=this.getAll(t),o=n.indexOf(r.value);o!==-1&&n.splice(o,1),n.push(e),this.set(t,n)}else super.append(t,e);r.value=e}};function cf(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),t.addEventListener("formdata",()=>e=!0),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}function Ks(){!window.FormData||cf()||(window.FormData=uf,window.addEventListener("submit",t=>{t.defaultPrevented||new FormData(t.target)}))}document.readyState==="complete"?Ks():window.addEventListener("DOMContentLoaded",()=>Ks());var yl=class{constructor(t,e){(this.host=t).addController(this),this.options=$r({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!e&&typeof r=="string"&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(o=>{t.formData.append(r,o.toString())}):t.formData.append(r,n.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!e&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}submit(){const t=document.createElement("button");this.form&&(t.type="submit",t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clip="rect(0 0 0 0)",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.form.append(t),t.click(),t.remove())}};function ff(t,e){const r=t.label?!0:!!t.hasLabelSlot,n=t.helpText?!0:!!t.hasHelpTextSlot,o=t.labelPosition?t.labelPosition:"top";return Pt`
    <div
      part="form-control"
      class=${Le({"form-control":!0,"form-control--small":t.size==="small","form-control--medium":t.size==="medium","form-control--large":t.size==="large","form-control--has-label":r,"form-control--has-help-text":n,"form-control__label-top":o==="top","form-control__label-left":o==="left"})}
    >
      <label
        part="label"
        id=${mt(t.labelId)}
        class="form-control__label"
        for=${t.inputId}
        aria-hidden=${r?"false":"true"}
        @click=${i=>{var s;return(s=t.onLabelClick)==null?void 0:s.call(t,i)}}
      >
        <slot name="label">${t.label}</slot>
      </label>

      <div class="form-control__input">${Pt`${e}`}</div>

      <div part="help-text" id=${mt(t.helpTextId)} class="form-control__help-text" aria-hidden=${n?"false":"true"}>
        <slot name="help-text">${t.helpText}</slot>
      </div>
    </div>
  `}function df(t){return[t.label.length>0?t.label:t.hasLabelSlot?t.labelId:"",t.helpText.length>0?t.helpText:t.hasHelpTextSlot?t.helpTextId:""].filter(r=>r!=="").join(" ")}var Wi=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>t.nodeType===t.TEXT_NODE&&t.textContent.trim()!==""||t.nodeType===t.ELEMENT_NODE&&!t.hasAttribute("slot"))}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function hf(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let r="";return[...e].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var ro=(()=>{const t=document.createElement("style");let e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{t.remove()}return e})(),Ut=hl(ro?":focus-visible":":focus"),ue=Gt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,pf=Gt`
  ${ue}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.7;
    background: none;
    cursor: not-allowed;
    border-style: dashed !important; /**fixme**/
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-100);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-700);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-400);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-400);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-400);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-warning-400);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-400);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-400);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-danger-400);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-400);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Info */
  .button--standard.button--info {
    background-color: var(--sl-color-info-500);
    border-color: var(--sl-color-info-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--info:hover:not(.button--disabled) {
    background-color: var(--sl-color-info-400);
    border-color: var(--sl-color-info-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--info${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-info-500);
    border-color: var(--sl-color-info-700);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--info:active:not(.button--disabled) {
    background-color: var(--sl-color-info-500);
    border-color: var(--sl-color-info-700);
    color: var(--sl-color-neutral-0);
  }

  /* secondary */
  .button--standard.button--secondary {
    background-color: var(--sl-color-secondary-500);
    border-color: var(--sl-color-secondary-700);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--secondary:hover:not(.button--disabled) {
    background-color: var(--sl-color-secondary-400);
    border-color: var(--sl-color-secondary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--secondary${Ut}:not(.button--disabled) {
    background-color: var(--sl-color-secondary-500);
    border-color: var(--sl-color-secondary-700);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--secondary:active:not(.button--disabled) {
    background-color: var(--sl-color-secondary-500);
    border-color: var(--sl-color-secondary-700);
    color: var(--sl-color-neutral-0);
  }


  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /* Info */
  .button--outline.button--info {
    border-color: var(--sl-color-info-600);
    color: var(--sl-color-info-600);
  }

  .button--outline.button--info:hover:not(.button--disabled) {
    background-color: var(--sl-color-info-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--info${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-info-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--info:active:not(.button--disabled) {
    border-color: var(--sl-color-info-700);
    background-color: var(--sl-color-info-700);
    color: var(--sl-color-neutral-0);
  }

  /* Secondary */
  .button--outline.button--secondary {
    border-color: var(--sl-color-secondary-600);
    color: var(--sl-color-secondary-600);
  }

  .button--outline.button--secondary:hover:not(.button--disabled) {
    background-color: var(--sl-color-secondary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--secondary${Ut}:not(.button--disabled) {
    border-color: var(--sl-color-secondary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--secondary:active:not(.button--disabled) {
    border-color: var(--sl-color-secondary-700);
    background-color: var(--sl-color-secondary-700);
    color: var(--sl-color-neutral-0);
  }


  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${Ut}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`;function wt(t,e,r){const n=new CustomEvent(e,$r({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return t.dispatchEvent(n),n}function qr(t,e){return new Promise(r=>{function n(o){o.target===t&&(t.removeEventListener(e,n),r())}t.addEventListener(e,n)})}var ce=t=>e=>typeof e=="function"?((r,n)=>(window.customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){window.customElements.define(r,s)}}})(t,e),vf=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?So($r({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function z(t){return(e,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(t,e,r):vf(t,e)}function Fn(t){return z(So($r({},t),{state:!0}))}var mf=({finisher:t,descriptor:e})=>(r,n)=>{var o;if(n===void 0){const i=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(r.key)}:So($r({},r),{key:i});return t!=null&&(s.finisher=function(a){t(a,i)}),s}{const i=r.constructor;e!==void 0&&Object.defineProperty(r,n,e(n)),t==null||t(i,n)}};function re(t,e){return mf({descriptor:r=>{const n={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const o=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,s;return this[o]===void 0&&(this[o]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null),this[o]}}return n}})}var Zo;((Zo=window.HTMLSlotElement)===null||Zo===void 0?void 0:Zo.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ys=(t,...e)=>({_$litStatic$:e.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[o+1],t[0])}),Xs=new Map,gf=t=>(e,...r)=>{var n;const o=r.length;let i,s;const a=[],l=[];let f,u=0,d=!1;for(;u<o;){for(f=e[u];u<o&&(s=r[u],(i=(n=s)===null||n===void 0?void 0:n._$litStatic$)!==void 0);)f+=i+e[++u],d=!0;l.push(s),a.push(f),u++}if(u===o&&a.push(e[o]),d){const v=a.join("$$lit$$");(e=Xs.get(v))===void 0&&(a.raw=a,Xs.set(v,e=a)),r=l}return t(e,...r)},ti=gf(Pt),zt=class extends jt{constructor(){super(...arguments);this.formSubmitController=new yl(this),this.hasSlotController=new Wi(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,wt(this,"sl-blur")}handleFocus(){this.hasFocus=!0,wt(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit()}render(){const t=!!this.href,e=t?Ys`a`:Ys`button`;return ti`
      <${e}
        part="base"
        class=${Le({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--info":this.variant==="info","button--secondary":this.variant==="secondary","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${mt(t?void 0:this.disabled)}
        type=${this.type}
        name=${mt(t?void 0:this.name)}
        value=${mt(t?void 0:this.value)}
        href=${mt(this.href)}
        target=${mt(this.target)}
        download=${mt(this.download)}
        rel=${mt(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?ti`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?ti`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};zt.styles=pf;E([re(".button")],zt.prototype,"button",2);E([Fn()],zt.prototype,"hasFocus",2);E([z({reflect:!0})],zt.prototype,"variant",2);E([z({reflect:!0})],zt.prototype,"size",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"caret",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"loading",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"outline",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"pill",2);E([z({type:Boolean,reflect:!0})],zt.prototype,"circle",2);E([z()],zt.prototype,"type",2);E([z()],zt.prototype,"name",2);E([z()],zt.prototype,"value",2);E([z()],zt.prototype,"href",2);E([z()],zt.prototype,"target",2);E([z()],zt.prototype,"download",2);zt=E([ce("sl-button")],zt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bf=Gt`
  ${ue}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --dot-width: calc(1em / 4);
    --speed: 1s;
  }

  .loader {
    position: relative;
    display: block;
    width: calc(var(--dot-width) * 4);
    height: calc(var(--dot-width) * 4);
  }
  .loader span:nth-child(1) {
    --i: 0;
  }

  .loader span:nth-child(2) {
    --i: 1;
    left: calc(50% - (50% / 4));
  }
  .loader span:nth-child(3) {
    --i: 2;
    left: calc(100% - (50% / 4) * 2);
  }
  .loader span:nth-child(4) {
    --i: 3;
    left: calc(100% - (50% / 4) * 2);
    top: calc(50% - (50% / 4));
  }
  .loader span:nth-child(5) {
    --i: 4;
    left: calc(100% - (50% / 4) * 2);
    top: calc(100% - (50% / 4) * 2);
  }
  .loader span:nth-child(6) {
    --i: 5;
    left: calc(50% - (50% / 4));
    top: calc(100% - (50% / 4) * 2);
  }
  .loader span:nth-child(7) {
    --i: 6;
    top: calc(100% - (50% / 4) * 2);
  }
  .loader span:nth-child(8) {
    --i: 7;
    top: calc(50% - (50% / 4));
  }

  .loader span {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc((50% / 4) * 2);
    height: calc((50% / 4) * 2);
    background: var(--indicator-color);
    box-shadow: 0 0 calc(var(--dot-width) / 2) var(--indicator-color);
    animation: animate calc(var(--speed)) linear infinite;
    animation-delay: calc(var(--speed) / 8 * var(--i));
  }

  @keyframes animate {
    0% {
      opacity: 1;
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`,pi=class extends jt{render(){return Pt` <div part="base" class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>`}};pi.styles=bf;pi=E([ce("sl-spinner")],pi);var yf=Gt`
  ${ue}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Tn=class extends jt{constructor(){super(...arguments);this.label=""}handleFocus(t){const e=hr(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=hr(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=hr(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=hr(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const r=t.indexOf(e),n=hr(e);n!==null&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",r===0),n.classList.toggle("sl-button-group__button--inner",r>0&&r<t.length-1),n.classList.toggle("sl-button-group__button--last",r===t.length-1));const o=hr(e,"sl-input");o&&(o.classList.add("sl-button-group__button"),o.classList.toggle("sl-button-group__button--first",r===0),o.classList.toggle("sl-button-group__button--inner",r>0&&r<t.length-1),o.classList.toggle("sl-button-group__button--last",r===t.length-1));const i=hr(e,"sl-select");i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<t.length-1),i.classList.toggle("sl-button-group__button--last",r===t.length-1))})}render(){return Pt`
      <div
        part="base"
        class="button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Tn.styles=yf;E([re("slot")],Tn.prototype,"defaultSlot",2);E([z()],Tn.prototype,"label",2);Tn=E([ce("sl-button-group")],Tn);function hr(t,e="sl-button"){return t.tagName.toLowerCase()===e?t:t.querySelector(e)}var wl="";function Js(t){wl=t}function _l(){return wl.replace(/\/$/,"")}var xl=[...document.getElementsByTagName("script")],Qs=xl.find(t=>t.hasAttribute("data-shoelace"));if(Qs)Js(Qs.getAttribute("data-shoelace"));else{const t=xl.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let e="";t&&(e=t.getAttribute("src")),Js(e.split("/").slice(0,-1).join("/"))}var wf={name:"bootstrap",resolver:t=>`${_l()}/assets/bootstrap-icons/${t}.svg`},_f=wf,xf={name:"default",resolver:t=>`${_l()}/assets/icons/${t}.svg`,mutator:t=>{t.setAttribute("fill","currentColor"),[...t.querySelectorAll("*")].map(e=>e.setAttribute("fill","inherit"))}},Ef=xf,Gs={check:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `,search:`
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"></path>
    </svg>
  `},Af={name:"system",resolver:t=>t in Gs?`data:image/svg+xml,${encodeURIComponent(Gs[t])}`:""},$f=Af,po=[Ef,_f,$f],vo=[];function Cf(t){vo.push(t)}function Sf(t){vo=vo.filter(e=>e!==t)}function Zs(t){return po.find(e=>e.name===t)}function Zg(t,e){Tf(t),po.push({name:t,resolver:e.resolver,mutator:e.mutator}),vo.forEach(r=>{r.library===t&&r.redraw()})}function Tf(t){po=po.filter(e=>e.name!==t)}var ei=new Map;function Of(t,e="cors"){if(ei.has(t))return ei.get(t);const r=fetch(t,{mode:e}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return ei.set(t,r),r}var ri=new Map;async function Rf(t){if(ri.has(t))return ri.get(t);const e=await Of(t),r={ok:e.ok,status:e.status,svg:null};if(e.ok){const n=document.createElement("div");n.innerHTML=e.html;const o=n.firstElementChild;r.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return ri.set(t,r),r}var Pf=Gt`
  ${ue}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,vi=class extends ji{constructor(t){if(super(t),this.it=Dt,t.type!==er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Dt||t==null)return this.vt=void 0,this.it=t;if(t===be)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.vt;this.it=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};vi.directiveName="unsafeHTML",vi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(t,e){const r=$r({waitUntilFirstUpdate:!1},e);return(n,o)=>{const{update:i}=n;if(t in n){const s=t;n.update=function(a){if(a.has(s)){const l=a.get(s),f=this[s];l!==f&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](l,f)}i.call(this,a)}}}}var mi=class extends vi{};mi.directiveName="unsafeSVG",mi.resultType=2;var kf=Hi(mi),If=new DOMParser,We=class extends jt{constructor(){super(...arguments);this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Cf(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sf(this)}getUrl(){const t=Zs(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=Zs(this.library),r=this.getUrl();if(r)try{const n=await Rf(r);if(r!==this.getUrl())return;if(n.ok){const i=If.parseFromString(n.svg,"text/html").body.querySelector("svg");i!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,i),this.svg=i.outerHTML,wt(this,"sl-load")):(this.svg="",wt(this,"sl-error",{detail:{status:n.status}}))}else this.svg="",wt(this,"sl-error",{detail:{status:n.status}})}catch{wt(this,"sl-error",{detail:{status:-1}})}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return Pt` <div
      part="base"
      class="icon"
      role=${mt(t?"img":void 0)}
      aria-label=${mt(t?this.label:void 0)}
      aria-hidden=${mt(t?void 0:"true")}
    >
      ${kf(this.svg)}
    </div>`}};We.styles=Pf;E([Fn()],We.prototype,"svg",2);E([z()],We.prototype,"name",2);E([z()],We.prototype,"src",2);E([z()],We.prototype,"label",2);E([z()],We.prototype,"library",2);E([Lt("name"),Lt("src"),Lt("library")],We.prototype,"setIcon",1);We=E([ce("sl-icon")],We);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Df=Gt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label {
    display: flex;
    flex-direction: column;
  }

  .form-control--has-label.form-control__label-left {
    display: flex;
    flex-direction: row;
  }

  .form-control--has-label.form-control__label-left .form-control__label {
    border-radius: 0.4em;
    border: 1px solid #e0e0e0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.3em 1.125em;
    min-width: 220px;
    height: var(--sl-input-height-medium);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .form-control--has-label.form-control--small.form-control__label-left .form-control__label {
    height: var(--sl-input-height-small);
  }

  .form-control--has-label.form-control--large.form-control__label-left .form-control__label {
    height: var(--sl-input-height-large);
    padding: 0.7em 1.125em;
  }

  .form-control--has-label.form-control__label-left .form-control__input {
    width: 100%;
  }

  .form-control--has-label.form-control__label-left .form-control__input .input,
  .form-control--has-label.form-control__label-left .form-control__input .select__control{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-control--has-label.form-control__label-left .form-control__input .textarea{
    border-top-left-radius: 0;
  }

  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,Nf=Gt`
  ${ue}
  ${Df}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Button Group classse*/
  :host(.sl-button-group__button--inner) .input {
    border-radius: 0;
  }

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }



`,Lf=t=>t.strings===void 0,Mf={},Bf=(t,e=Mf)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ff=Hi(class extends ji{constructor(t){if(super(t),t.type!==er.PROPERTY&&t.type!==er.ATTRIBUTE&&t.type!==er.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Lf(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===be||e===Dt)return e;const r=t.element,n=t.name;if(t.type===er.PROPERTY){if(e===r[n])return be}else if(t.type===er.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return be}else if(t.type===er.ATTRIBUTE&&r.getAttribute(n)===e+"")return be;return Bf(t),e}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Uf=0;function zf(){return++Uf}var pt=class extends jt{constructor(){super(...arguments);this.formSubmitController=new yl(this),this.hasSlotController=new Wi(this,"help-text","label"),this.attrId=zf(),this.inputId=`input-${this.attrId}`,this.helpTextId=`input-help-text-${this.attrId}`,this.labelId=`input-label-${this.attrId}`,this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.label="",this.labelposition="top",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){return this.input.valueAsDate}set valueAsDate(t){this.input.valueAsDate=t,this.value=this.input.value}get valueAsNumber(){return this.input.valueAsNumber}set valueAsNumber(t){this.input.valueAsNumber=t,this.value=this.input.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,n="preserve"){this.input.setRangeText(t,e,r,n),this.value!==this.input.value&&(this.value=this.input.value,wt(this,"sl-input"),wt(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,wt(this,"sl-blur")}handleChange(){this.value=this.input.value,wt(this,"sl-change")}handleClearClick(t){this.value="",wt(this,"sl-clear"),wt(this,"sl-input"),wt(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,wt(this,"sl-focus")}handleInput(){this.value=this.input.value,wt(this,"sl-input")}handleInvalid(){this.invalid=!0}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text");return ff({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:t,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:e,size:this.size,labelPosition:this.labelposition},Pt`
        <div
          part="base"
          class=${Le({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":this.value.length===0,"input--invalid":this.invalid})}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <input
            part="input"
            id=${this.inputId}
            class="input__control"
            type=${this.type==="password"&&this.isPasswordVisible?"text":this.type}
            name=${mt(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${mt(this.placeholder)}
            minlength=${mt(this.minlength)}
            maxlength=${mt(this.maxlength)}
            min=${mt(this.min)}
            max=${mt(this.max)}
            step=${mt(this.step)}
            .value=${Ff(this.value)}
            autocapitalize=${mt(this.autocapitalize)}
            autocomplete=${mt(this.autocomplete)}
            autocorrect=${mt(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${mt(this.spellcheck)}
            pattern=${mt(this.pattern)}
            inputmode=${mt(this.inputmode)}
            aria-labelledby=${mt(df({label:this.label,labelId:this.labelId,hasLabelSlot:t,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:e}))}
            aria-invalid=${this.invalid?"true":"false"}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />

          ${this.clearable&&this.value.length>0?Pt`
                <button
                  part="clear-button"
                  class="input__clear"
                  type="button"
                  @click=${this.handleClearClick}
                  tabindex="-1"
                >
                  <slot name="clear-icon">
                    <sl-icon name="x-circle-fill" library="system"></sl-icon>
                  </slot>
                </button>
              `:""}
          ${this.togglePassword?Pt`
                <button
                  part="password-toggle-button"
                  class="input__password-toggle"
                  type="button"
                  @click=${this.handlePasswordToggle}
                  tabindex="-1"
                >
                  ${this.isPasswordVisible?Pt`
                        <slot name="show-password-icon">
                          <sl-icon name="eye-slash" library="system"></sl-icon>
                        </slot>
                      `:Pt`
                        <slot name="hide-password-icon">
                          <sl-icon name="eye" library="system"></sl-icon>
                        </slot>
                      `}
                </button>
              `:""}

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `)}};pt.styles=Nf;E([re(".input__control")],pt.prototype,"input",2);E([Fn()],pt.prototype,"hasFocus",2);E([Fn()],pt.prototype,"isPasswordVisible",2);E([z({reflect:!0})],pt.prototype,"type",2);E([z({reflect:!0})],pt.prototype,"size",2);E([z()],pt.prototype,"name",2);E([z()],pt.prototype,"value",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"filled",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"pill",2);E([z()],pt.prototype,"label",2);E([z()],pt.prototype,"labelposition",2);E([z({attribute:"help-text"})],pt.prototype,"helpText",2);E([z({type:Boolean})],pt.prototype,"clearable",2);E([z({attribute:"toggle-password",type:Boolean})],pt.prototype,"togglePassword",2);E([z()],pt.prototype,"placeholder",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"readonly",2);E([z({type:Number})],pt.prototype,"minlength",2);E([z({type:Number})],pt.prototype,"maxlength",2);E([z()],pt.prototype,"min",2);E([z()],pt.prototype,"max",2);E([z({type:Number})],pt.prototype,"step",2);E([z()],pt.prototype,"pattern",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"required",2);E([z({type:Boolean,reflect:!0})],pt.prototype,"invalid",2);E([z()],pt.prototype,"autocapitalize",2);E([z()],pt.prototype,"autocorrect",2);E([z()],pt.prototype,"autocomplete",2);E([z({type:Boolean})],pt.prototype,"autofocus",2);E([z({type:Boolean})],pt.prototype,"spellcheck",2);E([z()],pt.prototype,"inputmode",2);E([Lt("disabled",{waitUntilFirstUpdate:!0})],pt.prototype,"handleDisabledChange",1);E([Lt("value",{waitUntilFirstUpdate:!0})],pt.prototype,"handleValueChange",1);pt=E([ce("sl-input")],pt);function Ce(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Vr(t){var e=Ce(t).Element;return t instanceof e||t instanceof Element}function ye(t){var e=Ce(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function El(t){if(typeof ShadowRoot=="undefined")return!1;var e=Ce(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var wr=Math.max,mo=Math.min,Wr=Math.round;function Kr(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,o=1;if(ye(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(n=Wr(r.width)/s||1),i>0&&(o=Wr(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function Ki(t){var e=Ce(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Hf(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function jf(t){return t===Ce(t)||!ye(t)?Ki(t):Hf(t)}function ke(t){return t?(t.nodeName||"").toLowerCase():null}function cr(t){return((Vr(t)?t.ownerDocument:t.document)||window.document).documentElement}function Yi(t){return Kr(cr(t)).left+Ki(t).scrollLeft}function Ke(t){return Ce(t).getComputedStyle(t)}function Xi(t){var e=Ke(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function qf(t){var e=t.getBoundingClientRect(),r=Wr(e.width)/t.offsetWidth||1,n=Wr(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Vf(t,e,r){r===void 0&&(r=!1);var n=ye(e),o=ye(e)&&qf(e),i=cr(e),s=Kr(t,o),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((ke(e)!=="body"||Xi(i))&&(a=jf(e)),ye(e)?(l=Kr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Yi(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Ji(t){var e=Kr(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function To(t){return ke(t)==="html"?t:t.assignedSlot||t.parentNode||(El(t)?t.host:null)||cr(t)}function Al(t){return["html","body","#document"].indexOf(ke(t))>=0?t.ownerDocument.body:ye(t)&&Xi(t)?t:Al(To(t))}function gn(t,e){var r;e===void 0&&(e=[]);var n=Al(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=Ce(n),s=o?[i].concat(i.visualViewport||[],Xi(n)?n:[]):n,a=e.concat(s);return o?a:a.concat(gn(To(s)))}function Wf(t){return["table","td","th"].indexOf(ke(t))>=0}function ta(t){return!ye(t)||Ke(t).position==="fixed"?null:t.offsetParent}function Kf(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&ye(t)){var n=Ke(t);if(n.position==="fixed")return null}for(var o=To(t);ye(o)&&["html","body"].indexOf(ke(o))<0;){var i=Ke(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Un(t){for(var e=Ce(t),r=ta(t);r&&Wf(r)&&Ke(r).position==="static";)r=ta(r);return r&&(ke(r)==="html"||ke(r)==="body"&&Ke(r).position==="static")?e:r||Kf(t)||e}var ae="top",we="bottom",_e="right",le="left",Qi="auto",zn=[ae,we,_e,le],Yr="start",On="end",Yf="clippingParents",$l="viewport",fn="popper",Xf="reference",ea=zn.reduce(function(t,e){return t.concat([e+"-"+Yr,e+"-"+On])},[]),Cl=[].concat(zn,[Qi]).reduce(function(t,e){return t.concat([e,e+"-"+Yr,e+"-"+On])},[]),Jf="beforeRead",Qf="read",Gf="afterRead",Zf="beforeMain",td="main",ed="afterMain",rd="beforeWrite",nd="write",od="afterWrite",id=[Jf,Qf,Gf,Zf,td,ed,rd,nd,od];function sd(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!r.has(a)){var l=e.get(a);l&&o(l)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||o(i)}),n}function ad(t){var e=sd(t);return id.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function ld(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Pe(t){return t.split("-")[0]}function ud(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function cd(t){var e=Ce(t),r=cr(t),n=e.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,a=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,a=n.offsetTop)),{width:o,height:i,x:s+Yi(t),y:a}}function fd(t){var e,r=cr(t),n=Ki(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=wr(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=wr(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+Yi(t),l=-n.scrollTop;return Ke(o||r).direction==="rtl"&&(a+=wr(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Sl(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&El(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function gi(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function dd(t){var e=Kr(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ra(t,e){return e===$l?gi(cd(t)):Vr(e)?dd(e):gi(fd(cr(t)))}function hd(t){var e=gn(To(t)),r=["absolute","fixed"].indexOf(Ke(t).position)>=0,n=r&&ye(t)?Un(t):t;return Vr(n)?e.filter(function(o){return Vr(o)&&Sl(o,n)&&ke(o)!=="body"}):[]}function pd(t,e,r){var n=e==="clippingParents"?hd(t):[].concat(e),o=[].concat(n,[r]),i=o[0],s=o.reduce(function(a,l){var f=ra(t,l);return a.top=wr(f.top,a.top),a.right=mo(f.right,a.right),a.bottom=mo(f.bottom,a.bottom),a.left=wr(f.left,a.left),a},ra(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Xr(t){return t.split("-")[1]}function Gi(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Tl(t){var e=t.reference,r=t.element,n=t.placement,o=n?Pe(n):null,i=n?Xr(n):null,s=e.x+e.width/2-r.width/2,a=e.y+e.height/2-r.height/2,l;switch(o){case ae:l={x:s,y:e.y-r.height};break;case we:l={x:s,y:e.y+e.height};break;case _e:l={x:e.x+e.width,y:a};break;case le:l={x:e.x-r.width,y:a};break;default:l={x:e.x,y:e.y}}var f=o?Gi(o):null;if(f!=null){var u=f==="y"?"height":"width";switch(i){case Yr:l[f]=l[f]-(e[u]/2-r[u]/2);break;case On:l[f]=l[f]+(e[u]/2-r[u]/2);break}}return l}function Ol(){return{top:0,right:0,bottom:0,left:0}}function Rl(t){return Object.assign({},Ol(),t)}function Pl(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function Rn(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.boundary,s=i===void 0?Yf:i,a=r.rootBoundary,l=a===void 0?$l:a,f=r.elementContext,u=f===void 0?fn:f,d=r.altBoundary,v=d===void 0?!1:d,_=r.padding,A=_===void 0?0:_,M=Rl(typeof A!="number"?A:Pl(A,zn)),$=u===fn?Xf:fn,I=t.rects.popper,N=t.elements[v?$:u],tt=pd(Vr(N)?N:N.contextElement||cr(t.elements.popper),s,l),V=Kr(t.elements.reference),T=Tl({reference:V,element:I,strategy:"absolute",placement:o}),K=gi(Object.assign({},I,T)),W=u===fn?K:V,et={top:tt.top-W.top+M.top,bottom:W.bottom-tt.bottom+M.bottom,left:tt.left-W.left+M.left,right:W.right-tt.right+M.right},nt=t.modifiersData.offset;if(u===fn&&nt){var lt=nt[o];Object.keys(et).forEach(function(ut){var gt=[_e,we].indexOf(ut)>=0?1:-1,_t=[ae,we].indexOf(ut)>=0?"y":"x";et[ut]+=lt[_t]*gt})}return et}var na={placement:"bottom",modifiers:[],strategy:"absolute"};function oa(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function vd(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?na:o;return function(a,l,f){f===void 0&&(f=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},na,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],v=!1,_={state:u,setOptions:function(I){var N=typeof I=="function"?I(u.options):I;M(),u.options=Object.assign({},i,u.options,N),u.scrollParents={reference:Vr(a)?gn(a):a.contextElement?gn(a.contextElement):[],popper:gn(l)};var tt=ad(ud([].concat(n,u.options.modifiers)));return u.orderedModifiers=tt.filter(function(V){return V.enabled}),A(),_.update()},forceUpdate:function(){if(!v){var I=u.elements,N=I.reference,tt=I.popper;if(!!oa(N,tt)){u.rects={reference:Vf(N,Un(tt),u.options.strategy==="fixed"),popper:Ji(tt)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(lt){return u.modifiersData[lt.name]=Object.assign({},lt.data)});for(var V=0;V<u.orderedModifiers.length;V++){if(u.reset===!0){u.reset=!1,V=-1;continue}var T=u.orderedModifiers[V],K=T.fn,W=T.options,et=W===void 0?{}:W,nt=T.name;typeof K=="function"&&(u=K({state:u,options:et,name:nt,instance:_})||u)}}}},update:ld(function(){return new Promise(function($){_.forceUpdate(),$(u)})}),destroy:function(){M(),v=!0}};if(!oa(a,l))return _;_.setOptions(f).then(function($){!v&&f.onFirstUpdate&&f.onFirstUpdate($)});function A(){u.orderedModifiers.forEach(function($){var I=$.name,N=$.options,tt=N===void 0?{}:N,V=$.effect;if(typeof V=="function"){var T=V({state:u,name:I,instance:_,options:tt}),K=function(){};d.push(T||K)}})}function M(){d.forEach(function($){return $()}),d=[]}return _}}var Wn={passive:!0};function md(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,s=n.resize,a=s===void 0?!0:s,l=Ce(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach(function(u){u.addEventListener("scroll",r.update,Wn)}),a&&l.addEventListener("resize",r.update,Wn),function(){i&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Wn)}),a&&l.removeEventListener("resize",r.update,Wn)}}var gd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:md,data:{}};function bd(t){var e=t.state,r=t.name;e.modifiersData[r]=Tl({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var yd={name:"popperOffsets",enabled:!0,phase:"read",fn:bd,data:{}},wd={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _d(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:Wr(e*o)/o||0,y:Wr(r*o)/o||0}}function ia(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,f=t.adaptive,u=t.roundOffsets,d=t.isFixed,v=s.x,_=v===void 0?0:v,A=s.y,M=A===void 0?0:A,$=typeof u=="function"?u({x:_,y:M}):{x:_,y:M};_=$.x,M=$.y;var I=s.hasOwnProperty("x"),N=s.hasOwnProperty("y"),tt=le,V=ae,T=window;if(f){var K=Un(r),W="clientHeight",et="clientWidth";if(K===Ce(r)&&(K=cr(r),Ke(K).position!=="static"&&a==="absolute"&&(W="scrollHeight",et="scrollWidth")),K=K,o===ae||(o===le||o===_e)&&i===On){V=we;var nt=d&&T.visualViewport?T.visualViewport.height:K[W];M-=nt-n.height,M*=l?1:-1}if(o===le||(o===ae||o===we)&&i===On){tt=_e;var lt=d&&T.visualViewport?T.visualViewport.width:K[et];_-=lt-n.width,_*=l?1:-1}}var ut=Object.assign({position:a},f&&wd),gt=u===!0?_d({x:_,y:M}):{x:_,y:M};if(_=gt.x,M=gt.y,l){var _t;return Object.assign({},ut,(_t={},_t[V]=N?"0":"",_t[tt]=I?"0":"",_t.transform=(T.devicePixelRatio||1)<=1?"translate("+_+"px, "+M+"px)":"translate3d("+_+"px, "+M+"px, 0)",_t))}return Object.assign({},ut,(e={},e[V]=N?M+"px":"",e[tt]=I?_+"px":"",e.transform="",e))}function xd(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,s=i===void 0?!0:i,a=r.roundOffsets,l=a===void 0?!0:a,f={placement:Pe(e.placement),variation:Xr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ia(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ia(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Ed={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xd,data:{}};function Ad(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!ye(i)||!ke(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(s){var a=o[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function $d(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},s=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),a=s.reduce(function(l,f){return l[f]="",l},{});!ye(o)||!ke(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(l){o.removeAttribute(l)}))})}}var Cd={name:"applyStyles",enabled:!0,phase:"write",fn:Ad,effect:$d,requires:["computeStyles"]};function Sd(t,e,r){var n=Pe(t),o=[le,ae].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[le,_e].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}function Td(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,s=Cl.reduce(function(u,d){return u[d]=Sd(d,e.rects,i),u},{}),a=s[e.placement],l=a.x,f=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=s}var Od={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Td},Rd={left:"right",right:"left",bottom:"top",top:"bottom"};function no(t){return t.replace(/left|right|bottom|top/g,function(e){return Rd[e]})}var Pd={start:"end",end:"start"};function sa(t){return t.replace(/start|end/g,function(e){return Pd[e]})}function kd(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,f=l===void 0?Cl:l,u=Xr(n),d=u?a?ea:ea.filter(function(A){return Xr(A)===u}):zn,v=d.filter(function(A){return f.indexOf(A)>=0});v.length===0&&(v=d);var _=v.reduce(function(A,M){return A[M]=Rn(t,{placement:M,boundary:o,rootBoundary:i,padding:s})[Pe(M)],A},{});return Object.keys(_).sort(function(A,M){return _[A]-_[M]})}function Id(t){if(Pe(t)===Qi)return[];var e=no(t);return[sa(t),e,sa(e)]}function Dd(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,a=s===void 0?!0:s,l=r.fallbackPlacements,f=r.padding,u=r.boundary,d=r.rootBoundary,v=r.altBoundary,_=r.flipVariations,A=_===void 0?!0:_,M=r.allowedAutoPlacements,$=e.options.placement,I=Pe($),N=I===$,tt=l||(N||!A?[no($)]:Id($)),V=[$].concat(tt).reduce(function(me,S){return me.concat(Pe(S)===Qi?kd(e,{placement:S,boundary:u,rootBoundary:d,padding:f,flipVariations:A,allowedAutoPlacements:M}):S)},[]),T=e.rects.reference,K=e.rects.popper,W=new Map,et=!0,nt=V[0],lt=0;lt<V.length;lt++){var ut=V[lt],gt=Pe(ut),_t=Xr(ut)===Yr,Ht=[ae,we].indexOf(gt)>=0,Vt=Ht?"width":"height",ht=Rn(e,{placement:ut,boundary:u,rootBoundary:d,altBoundary:v,padding:f}),ot=Ht?_t?_e:le:_t?we:ae;T[Vt]>K[Vt]&&(ot=no(ot));var vt=no(ot),It=[];if(i&&It.push(ht[gt]<=0),a&&It.push(ht[ot]<=0,ht[vt]<=0),It.every(function(me){return me})){nt=ut,et=!1;break}W.set(ut,It)}if(et)for(var de=A?3:1,kt=function(S){var Y=V.find(function(H){var J=W.get(H);if(J)return J.slice(0,S).every(function(bt){return bt})});if(Y)return nt=Y,"break"},Bt=de;Bt>0;Bt--){var Ft=kt(Bt);if(Ft==="break")break}e.placement!==nt&&(e.modifiersData[n]._skip=!0,e.placement=nt,e.reset=!0)}}var Nd={name:"flip",enabled:!0,phase:"main",fn:Dd,requiresIfExists:["offset"],data:{_skip:!1}};function Ld(t){return t==="x"?"y":"x"}function bn(t,e,r){return wr(t,mo(e,r))}function Md(t,e,r){var n=bn(t,e,r);return n>r?r:n}function Bd(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,a=s===void 0?!1:s,l=r.boundary,f=r.rootBoundary,u=r.altBoundary,d=r.padding,v=r.tether,_=v===void 0?!0:v,A=r.tetherOffset,M=A===void 0?0:A,$=Rn(e,{boundary:l,rootBoundary:f,padding:d,altBoundary:u}),I=Pe(e.placement),N=Xr(e.placement),tt=!N,V=Gi(I),T=Ld(V),K=e.modifiersData.popperOffsets,W=e.rects.reference,et=e.rects.popper,nt=typeof M=="function"?M(Object.assign({},e.rects,{placement:e.placement})):M,lt=typeof nt=="number"?{mainAxis:nt,altAxis:nt}:Object.assign({mainAxis:0,altAxis:0},nt),ut=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,gt={x:0,y:0};if(!!K){if(i){var _t,Ht=V==="y"?ae:le,Vt=V==="y"?we:_e,ht=V==="y"?"height":"width",ot=K[V],vt=ot+$[Ht],It=ot-$[Vt],de=_?-et[ht]/2:0,kt=N===Yr?W[ht]:et[ht],Bt=N===Yr?-et[ht]:-W[ht],Ft=e.elements.arrow,me=_&&Ft?Ji(Ft):{width:0,height:0},S=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ol(),Y=S[Ht],H=S[Vt],J=bn(0,W[ht],me[ht]),bt=tt?W[ht]/2-de-J-Y-lt.mainAxis:kt-J-Y-lt.mainAxis,xt=tt?-W[ht]/2+de+J+H+lt.mainAxis:Bt+J+H+lt.mainAxis,st=e.elements.arrow&&Un(e.elements.arrow),it=st?V==="y"?st.clientTop||0:st.clientLeft||0:0,p=(_t=ut==null?void 0:ut[V])!=null?_t:0,g=ot+bt-p-it,x=ot+xt-p,R=bn(_?mo(vt,g):vt,ot,_?wr(It,x):It);K[V]=R,gt[V]=R-ot}if(a){var O,B=V==="x"?ae:le,q=V==="x"?we:_e,D=K[T],U=T==="y"?"height":"width",P=D+$[B],G=D-$[q],X=[ae,le].indexOf(I)!==-1,Z=(O=ut==null?void 0:ut[T])!=null?O:0,rt=X?P:D-W[U]-et[U]-Z+lt.altAxis,ft=X?D+W[U]+et[U]-Z-lt.altAxis:G,Et=_&&X?Md(rt,D,ft):bn(_?rt:P,D,_?ft:G);K[T]=Et,gt[T]=Et-D}e.modifiersData[n]=gt}}var Fd={name:"preventOverflow",enabled:!0,phase:"main",fn:Bd,requiresIfExists:["offset"]},Ud=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Rl(typeof e!="number"?e:Pl(e,zn))};function zd(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,a=Pe(r.placement),l=Gi(a),f=[le,_e].indexOf(a)>=0,u=f?"height":"width";if(!(!i||!s)){var d=Ud(o.padding,r),v=Ji(i),_=l==="y"?ae:le,A=l==="y"?we:_e,M=r.rects.reference[u]+r.rects.reference[l]-s[l]-r.rects.popper[u],$=s[l]-r.rects.reference[l],I=Un(i),N=I?l==="y"?I.clientHeight||0:I.clientWidth||0:0,tt=M/2-$/2,V=d[_],T=N-v[u]-d[A],K=N/2-v[u]/2+tt,W=bn(V,K,T),et=l;r.modifiersData[n]=(e={},e[et]=W,e.centerOffset=W-K,e)}}function Hd(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!Sl(e.elements.popper,o)||(e.elements.arrow=o))}var jd={name:"arrow",enabled:!0,phase:"main",fn:zd,effect:Hd,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function aa(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function la(t){return[ae,_e,we,le].some(function(e){return t[e]>=0})}function qd(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,s=Rn(e,{elementContext:"reference"}),a=Rn(e,{altBoundary:!0}),l=aa(s,n),f=aa(a,o,i),u=la(l),d=la(f);e.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Vd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:qd},Wd=[gd,yd,Ed,Cd,Od,Nd,Fd,jd,Vd],kl=vd({defaultModifiers:Wd}),Kd=Gt`
  ${ue}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    max-height: 75vh;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;function ua(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Il(t){var e,r;const n=[];function o(a){a instanceof HTMLElement&&(n.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&o(a.shadowRoot)),[...a.querySelectorAll("*")].forEach(l=>o(l))}o(t);const i=(e=n.find(a=>ua(a)))!=null?e:null,s=(r=n.reverse().find(a=>ua(a)))!=null?r:null;return{start:i,end:s}}function Yd(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var bi=new Set;function ca(t){bi.add(t),document.body.classList.add("sl-scroll-lock")}function fa(t){bi.delete(t),bi.size===0&&document.body.classList.remove("sl-scroll-lock")}function Xd(t,e,r="vertical",n="smooth"){const o=Yd(t,e),i=o.top+e.scrollTop,s=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,f=e.scrollTop,u=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(s<a?e.scrollTo({left:s,behavior:n}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(i<f?e.scrollTo({top:i,behavior:n}):i+t.clientHeight>u&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:n}))}var Dl=new Map,Jd=new WeakMap;function Qd(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function Xe(t,e){Dl.set(t,Qd(e))}function He(t,e){const r=Jd.get(t);if(r==null?void 0:r[e])return r[e];const n=Dl.get(e);return n||{keyframes:[],options:{duration:0}}}function je(t,e,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,So($r({},r),{duration:Gd()?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function da(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Gd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ir(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{const n=requestAnimationFrame(r);e.addEventListener("cancel",()=>n,{once:!0}),e.addEventListener("finish",()=>n,{once:!0}),e.cancel()})))}var Qt=class extends jt{constructor(){super(...arguments);this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this),this.updateComplete.then(()=>{this.popover=kl(this.trigger,this.positioner,{placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})})}firstUpdated(){this.panel.hidden=!this.open}disconnectedCallback(){var t;super.disconnectedCallback(),this.hide(),(t=this.popover)==null||t.destroy()}focusOnTrigger(){const e=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(t){var e;if(t.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,o;const i=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){const e=t.target;Xd(e,this.panel)}handlePanelSelect(t){const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){var t;(t=this.popover)==null||t.setOptions({placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),r=e.defaultSlot.assignedElements({flatten:!0}),n=r[0],o=r[r.length-1];if(t.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}["ArrowDown","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),requestAnimationFrame(()=>{t.key==="ArrowDown"&&(e.setCurrentItem(n),n.focus()),t.key==="ArrowUp"&&(e.setCurrentItem(o),o.focus())}));const i=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!i.includes(t.key)&&e.typeToSelect(t.key)}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(n=>Il(n).start);r&&(r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,qr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,qr(this,"sl-after-hide")}reposition(){var t;!this.open||(t=this.popover)==null||t.update()}async handleOpenChange(){var t;if(!this.disabled)if(this.updateAccessibleTrigger(),this.open){wt(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await ir(this),(t=this.popover)==null||t.update(),this.panel.hidden=!1;const{keyframes:e,options:r}=He(this,"dropdown.show");await je(this.panel,e,r),wt(this,"sl-after-show")}else{wt(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await ir(this);const{keyframes:e,options:r}=He(this,"dropdown.hide");await je(this.panel,e,r),this.panel.hidden=!0,wt(this,"sl-after-hide")}}render(){return Pt`
      <div
        part="base"
        id="dropdown"
        class=${Le({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Qt.styles=Kd;E([re(".dropdown__trigger")],Qt.prototype,"trigger",2);E([re(".dropdown__panel")],Qt.prototype,"panel",2);E([re(".dropdown__positioner")],Qt.prototype,"positioner",2);E([z({type:Boolean,reflect:!0})],Qt.prototype,"open",2);E([z()],Qt.prototype,"placement",2);E([z({type:Boolean})],Qt.prototype,"disabled",2);E([z({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Qt.prototype,"stayOpenOnSelect",2);E([z({attribute:!1})],Qt.prototype,"containingElement",2);E([z({type:Number})],Qt.prototype,"distance",2);E([z({type:Number})],Qt.prototype,"skidding",2);E([z({type:Boolean})],Qt.prototype,"hoist",2);E([Lt("distance"),Lt("hoist"),Lt("placement"),Lt("skidding")],Qt.prototype,"handlePopoverOptionsChange",1);E([Lt("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);Qt=E([ce("sl-dropdown")],Qt);Xe("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});Xe("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var Zd=Gt`
  ${ue}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Jr=class extends jt{constructor(){super(...arguments);this.notTabbable=!1,this.typeToSelectString="",this.currentItem=null}firstUpdated(){this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.getAttribute("role")!=="menuitem"?!1:!(!(t==null?void 0:t.includeDisabled)&&e.disabled))}getCurrentItem(){return this.currentItem}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),r=t.disabled?e[0]:t;this.currentItem=r,wt(this,"sl-item-active",{detail:t}),this.notTabbable||e.map(n=>n.setAttribute("tabindex",n===r?"0":"-1"))}typeToSelect(t){var e;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",750),this.typeToSelectString+=t.toLowerCase(),ro||r.forEach(n=>n.classList.remove("sl-focus-invisible"));for(const n of r){const o=(e=n.shadowRoot)==null?void 0:e.querySelector("slot:not([name])");if(hf(o).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(n),n.focus();break}}}handleClick(t){const r=t.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&wt(this,"sl-select",{detail:{item:r}})}handleKeyUp(){ro||this.getAllItems().forEach(e=>{e.classList.remove("sl-focus-invisible")})}handleKeyDown(t){if(t.key==="Enter"){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let n=r?e.indexOf(r):0;if(e.length>0){t.preventDefault(),t.key==="ArrowDown"?n++:t.key==="ArrowUp"?n--:t.key==="Home"?n=0:t.key==="End"&&(n=e.length-1),n<0&&(n=0),n>e.length-1&&(n=e.length-1),this.setCurrentItem(e[n]),e[n].focus();return}}this.typeToSelect(t.key)}handleMouseDown(t){const e=t.target;e.getAttribute("role")==="menuitem"&&(this.setCurrentItem(e),ro||e.classList.add("sl-focus-invisible"))}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return Pt`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Jr.styles=Zd;E([re(".menu")],Jr.prototype,"menu",2);E([re("slot")],Jr.prototype,"defaultSlot",2);E([z({type:Boolean,reflect:!0,attribute:"not-tabbable"})],Jr.prototype,"notTabbable",2);Jr=E([ce("sl-menu")],Jr);var th=Gt`
  ${ue}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }
  .menu-item.menu-item--highlight:not(.menu-item--disabled) {
    outline: none;
    background-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }
  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${Ut}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item,
  .menu-item--active {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`,Ie=class extends jt{constructor(){super(...arguments);this.checked=!1,this.value="",this.disabled=!1,this.active=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return Pt`
      <div
        part="base"
        class=${Le({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--active":this.active})}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}};Ie.styles=th;E([re(".menu-item")],Ie.prototype,"menuItem",2);E([z({type:Boolean,reflect:!0})],Ie.prototype,"checked",2);E([z()],Ie.prototype,"value",2);E([z({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);E([z({type:Boolean,reflect:!0})],Ie.prototype,"active",2);E([Lt("checked")],Ie.prototype,"handleCheckedChange",1);E([Lt("disabled")],Ie.prototype,"handleDisabledChange",1);Ie=E([ce("sl-menu-item")],Ie);var eh=Gt`
  ${ue}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--info {
    background-color: var(--sl-color-info-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--secondary {
    background-color: var(--sl-color-secondary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  .badge--pulse.badge--info {
    --pulse-color: var(--sl-color-info-600);
  }

  .badge--pulse.badge--secondary {
    --pulse-color: var(--sl-color-secondary-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Qr=class extends jt{constructor(){super(...arguments);this.variant="primary",this.pill=!1,this.pulse=!1}render(){return Pt`
      <span
        part="base"
        class=${Le({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--info":this.variant==="info","badge--secondary":this.variant==="secondary","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Qr.styles=eh;E([z({reflect:!0})],Qr.prototype,"variant",2);E([z({type:Boolean,reflect:!0})],Qr.prototype,"pill",2);E([z({type:Boolean,reflect:!0})],Qr.prototype,"pulse",2);Qr=E([ce("sl-badge")],Qr);var rh=Gt`
  ${ue}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Pn=class extends jt{constructor(){super(...arguments);this.vertical=!1}firstUpdated(){this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Pn.styles=rh;E([z({type:Boolean,reflect:!0})],Pn.prototype,"vertical",2);E([Lt("vertical")],Pn.prototype,"handleVerticalChange",1);Pn=E([ce("sl-divider")],Pn);var nh=Gt`
  ${ue}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    overflow: hidden;
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,lr=class extends jt{constructor(){super(...arguments);this.hasError=!1,this.label="",this.shape="circle"}render(){return Pt`
      <div
        part="base"
        class=${Le({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials?Pt` <div part="initials" class="avatar__initials">${this.initials}</div> `:Pt`
              <div part="icon" class="avatar__icon" aria-hidden="true">
                <slot name="icon">
                  <sl-icon name="person-fill" library="system"></sl-icon>
                </slot>
              </div>
            `}
        ${typeof this.image=="string"&&!this.hasError?Pt`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                alt=""
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};lr.styles=nh;E([Fn()],lr.prototype,"hasError",2);E([z()],lr.prototype,"image",2);E([z()],lr.prototype,"label",2);E([z()],lr.prototype,"initials",2);E([z({reflect:!0})],lr.prototype,"shape",2);lr=E([ce("sl-avatar")],lr);var Tr=[],oh=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){Tr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){Tr=Tr.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return Tr.length>0&&Tr[Tr.length-1]===this.element}handleFocusIn(t){const e=t.composedPath();if(this.isActive()&&!e.includes(this.element)){const{start:r,end:n}=Il(this.element),o=this.tabDirection==="forward"?r:n;typeof(o==null?void 0:o.focus)=="function"&&o.focus({preventScroll:!0})}}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",setTimeout(()=>this.tabDirection="forward"))}};function ih(){let t=!1;return document.createElement("div").focus({get preventScroll(){return t=!0,!1}}),t}var sh=Gt`
  ${ue}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,yi=new Set,ah=new MutationObserver(Nl),wi=new Map,pn=document.documentElement.lang||navigator.language,yn;ah.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function lh(...t){t.map(e=>{const r=e.$code.toLowerCase();wi.set(r,e),yn||(yn=e)}),Nl()}function uh(t,e,...r){const n=t.toLowerCase().slice(0,2),o=t.length>2?t.toLowerCase():"",i=wi.get(o),s=wi.get(n);let a;if(i&&i[e])a=i[e];else if(s&&s[e])a=s[e];else if(yn&&yn[e])a=yn[e];else return console.error(`No translation found for: ${e}`),e;return typeof a=="function"?a(...r):a}function ch(t,e,r){return e=new Date(e),new Intl.DateTimeFormat(t,r).format(e)}function fh(t,e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(t,r).format(e)}function dh(t,e,r,n){return new Intl.RelativeTimeFormat(t,n).format(e,r)}function Nl(){pn=document.documentElement.lang||navigator.language,[...yi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var hh=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yi.add(this.host)}hostDisconnected(){yi.delete(this.host)}term(t,...e){return uh(this.host.lang||pn,t,...e)}date(t,e){return ch(this.host.lang||pn,t,e)}number(t,e){return fh(this.host.lang||pn,t,e)}relativeTime(t,e,r){return dh(this.host.lang||pn,t,e,r)}},ph={$code:"en",$name:"English",$dir:"ltr",close:"Close",copy:"Copy",progress:"Progress",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",toggleColorFormat:"Toggle color format"};lh(ph);var ha=ih(),De=class extends jt{constructor(){super(...arguments);this.hasSlotController=new Wi(this,"footer"),this.localize=new hh(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new oh(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),ca(this))}disconnectedCallback(){super.disconnectedCallback(),fa(this)}async show(){if(!this.open)return this.open=!0,qr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,qr(this,"sl-after-hide")}requestClose(t){if(wt(this,"sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const r=He(this,"dialog.denyClose");je(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){wt(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),ca(this),await Promise.all([ir(this.dialog),ir(this.overlay)]),this.dialog.hidden=!1,ha&&(wt(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}));const t=He(this,"dialog.show"),e=He(this,"dialog.overlay.show");await Promise.all([je(this.panel,t.keyframes,t.options),je(this.overlay,e.keyframes,e.options)]),ha||wt(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}),wt(this,"sl-after-show")}else{wt(this,"sl-hide"),this.modal.deactivate(),await Promise.all([ir(this.dialog),ir(this.overlay)]);const t=He(this,"dialog.hide"),e=He(this,"dialog.overlay.hide");await Promise.all([je(this.panel,t.keyframes,t.options),je(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,fa(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),wt(this,"sl-after-hide")}}render(){return Pt`
      <div
        part="base"
        class=${Le({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${mt(this.noHeader?this.label:void 0)}
          aria-labelledby=${mt(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":Pt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};De.styles=sh;E([re(".dialog")],De.prototype,"dialog",2);E([re(".dialog__panel")],De.prototype,"panel",2);E([re(".dialog__overlay")],De.prototype,"overlay",2);E([z({type:Boolean,reflect:!0})],De.prototype,"open",2);E([z({reflect:!0})],De.prototype,"label",2);E([z({attribute:"no-header",type:Boolean,reflect:!0})],De.prototype,"noHeader",2);E([Lt("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);De=E([ce("sl-dialog")],De);Xe("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});Xe("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});Xe("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});Xe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Xe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var vh=Gt`
  ${ue}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${Ut} {
    box-shadow: var(--sl-focus-ring);
  }
`,xe=class extends jt{constructor(){super(...arguments);this.label="",this.disabled=!1}render(){const t=!!this.href,e=Pt`
      <sl-icon
        name=${mt(this.name)}
        library=${mt(this.library)}
        src=${mt(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return t?Pt`
          <a
            part="base"
            class="icon-button"
            href=${mt(this.href)}
            target=${mt(this.target)}
            download=${mt(this.download)}
            rel=${mt(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:Pt`
          <button
            part="base"
            class=${Le({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};xe.styles=vh;E([re("button")],xe.prototype,"button",2);E([z()],xe.prototype,"name",2);E([z()],xe.prototype,"library",2);E([z()],xe.prototype,"src",2);E([z()],xe.prototype,"href",2);E([z()],xe.prototype,"target",2);E([z()],xe.prototype,"download",2);E([z()],xe.prototype,"label",2);E([z({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);xe=E([ce("sl-icon-button")],xe);var mh=Gt`
  ${ue}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-content {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip {
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
  }

  .tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  .tooltip-positioner[data-popper-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-popper-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-popper-placement^='right'] .tooltip {
    transform-origin: left;
  }

  /* Arrow + bottom */
  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip:after {
    bottom: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='bottom-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='bottom-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + top */
  .tooltip-positioner[data-popper-placement^='top'] .tooltip:after {
    top: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='top-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='top-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + left */
  .tooltip-positioner[data-popper-placement^='left'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    left: 100%;
    border-left: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='left-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='left-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }

  /* Arrow + right */
  .tooltip-positioner[data-popper-placement^='right'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    right: 100%;
    border-right: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='right-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='right-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }
`,Xt=class extends jt{constructor(){super(...arguments);this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),this.target=this.getTarget(),this.syncOptions()})}firstUpdated(){this.tooltip.hidden=!this.open}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),(t=this.popover)==null||t.destroy()}async show(){if(!this.open)return this.open=!0,qr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,qr(this,"sl-after-hide")}getTarget(){const t=[...this.children].find(e=>e.tagName.toLowerCase()!=="style"&&e.getAttribute("slot")!=="content");if(!t)throw new Error("Invalid tooltip target: no child element was found.");return t}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const t=da(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.show(),t)}}handleMouseOut(){if(this.hasTrigger("hover")){const t=da(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.hide(),t)}}async handleOpenChange(){var t,e;if(!this.disabled)if(this.open){wt(this,"sl-show"),await ir(this.tooltip),(t=this.popover)==null||t.destroy(),this.popover=kl(this.target,this.positioner,{placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]}),this.tooltip.hidden=!1;const{keyframes:r,options:n}=He(this,"tooltip.show");await je(this.tooltip,r,n),wt(this,"sl-after-show")}else{wt(this,"sl-hide"),await ir(this.tooltip);const{keyframes:r,options:n}=He(this,"tooltip.hide");await je(this.tooltip,r,n),this.tooltip.hidden=!0,(e=this.popover)==null||e.destroy(),wt(this,"sl-after-hide")}}handleOptionsChange(){this.syncOptions()}handleContentChange(){var t;this.open&&((t=this.popover)==null||t.update())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(t){return this.trigger.split(" ").includes(t)}syncOptions(){var t;(t=this.popover)==null||t.setOptions({placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}render(){return Pt`
      <div class="tooltip-content" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${Le({tooltip:!0,"tooltip--open":this.open})}
          role="tooltip"
          aria-hidden=${this.open?"false":"true"}
        >
          <slot name="content"> ${this.content} </slot>
        </div>
      </div>
    `}};Xt.styles=mh;E([re(".tooltip-positioner")],Xt.prototype,"positioner",2);E([re(".tooltip")],Xt.prototype,"tooltip",2);E([z()],Xt.prototype,"content",2);E([z()],Xt.prototype,"placement",2);E([z({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);E([z({type:Number})],Xt.prototype,"distance",2);E([z({type:Boolean,reflect:!0})],Xt.prototype,"open",2);E([z({type:Number})],Xt.prototype,"skidding",2);E([z()],Xt.prototype,"trigger",2);E([z({type:Boolean})],Xt.prototype,"hoist",2);E([Lt("open",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleOpenChange",1);E([Lt("placement"),Lt("distance"),Lt("skidding"),Lt("hoist")],Xt.prototype,"handleOptionsChange",1);E([Lt("content")],Xt.prototype,"handleContentChange",1);E([Lt("disabled")],Xt.prototype,"handleDisabledChange",1);Xt=E([ce("sl-tooltip")],Xt);Xe("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});Xe("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});function Zi(t,e){const r=Object.create(null),n=t.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return e?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bh=Zi(gh);function Ll(t){return!!t||t===""}function ts(t){if(at(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],o=Jt(n)?_h(n):ts(n);if(o)for(const i in o)e[i]=o[i]}return e}else{if(Jt(t))return t;if(qt(t))return t}}const yh=/;(?![^(]*\))/g,wh=/:(.+)/;function _h(t){const e={};return t.split(yh).forEach(r=>{if(r){const n=r.split(wh);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function es(t){let e="";if(Jt(t))e=t;else if(at(t))for(let r=0;r<t.length;r++){const n=es(t[r]);n&&(e+=n+" ")}else if(qt(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const tb=t=>Jt(t)?t:t==null?"":at(t)||qt(t)&&(t.toString===Ul||!ct(t.toString))?JSON.stringify(t,Ml,2):String(t),Ml=(t,e)=>e&&e.__v_isRef?Ml(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Bl(e)?{[`Set(${e.size})`]:[...e.values()]}:qt(e)&&!at(e)&&!zl(e)?String(e):e,Rt={},Br=[],Ae=()=>{},xh=()=>!1,Eh=/^on[^a-z]/,Oo=t=>Eh.test(t),rs=t=>t.startsWith("onUpdate:"),ee=Object.assign,ns=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},Ah=Object.prototype.hasOwnProperty,yt=(t,e)=>Ah.call(t,e),at=Array.isArray,Fr=t=>Ro(t)==="[object Map]",Bl=t=>Ro(t)==="[object Set]",ct=t=>typeof t=="function",Jt=t=>typeof t=="string",os=t=>typeof t=="symbol",qt=t=>t!==null&&typeof t=="object",Fl=t=>qt(t)&&ct(t.then)&&ct(t.catch),Ul=Object.prototype.toString,Ro=t=>Ul.call(t),$h=t=>Ro(t).slice(8,-1),zl=t=>Ro(t)==="[object Object]",is=t=>Jt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oo=Zi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Ch=/-(\w)/g,Ne=Po(t=>t.replace(Ch,(e,r)=>r?r.toUpperCase():"")),Sh=/\B([A-Z])/g,Cr=Po(t=>t.replace(Sh,"-$1").toLowerCase()),ko=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),ni=Po(t=>t?`on${ko(t)}`:""),kn=(t,e)=>!Object.is(t,e),io=(t,e)=>{for(let r=0;r<t.length;r++)t[r](e)},go=(t,e,r)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:r})},_i=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pa;const Th=()=>pa||(pa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ue;class Oh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Ue=this,e()}finally{Ue=this.parent}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Rh(t,e=Ue){e&&e.active&&e.effects.push(t)}const ss=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hl=t=>(t.w&ur)>0,jl=t=>(t.n&ur)>0,Ph=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ur},kh=t=>{const{deps:e}=t;if(e.length){let r=0;for(let n=0;n<e.length;n++){const o=e[n];Hl(o)&&!jl(o)?o.delete(t):e[r++]=o,o.w&=~ur,o.n&=~ur}e.length=r}},xi=new WeakMap;let vn=0,ur=1;const Ei=30;let Re;const _r=Symbol(""),Ai=Symbol("");class as{constructor(e,r=null,n){this.fn=e,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Rh(this,n)}run(){if(!this.active)return this.fn();let e=Re,r=sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Re,Re=this,sr=!0,ur=1<<++vn,vn<=Ei?Ph(this):va(this),this.fn()}finally{vn<=Ei&&kh(this),ur=1<<--vn,Re=this.parent,sr=r,this.parent=void 0}}stop(){this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(t){const{deps:e}=t;if(e.length){for(let r=0;r<e.length;r++)e[r].delete(t);e.length=0}}let sr=!0;const ql=[];function rn(){ql.push(sr),sr=!1}function nn(){const t=ql.pop();sr=t===void 0?!0:t}function ve(t,e,r){if(sr&&Re){let n=xi.get(t);n||xi.set(t,n=new Map);let o=n.get(r);o||n.set(r,o=ss()),Vl(o)}}function Vl(t,e){let r=!1;vn<=Ei?jl(t)||(t.n|=ur,r=!Hl(t)):r=!t.has(Re),r&&(t.add(Re),Re.deps.push(t))}function Ye(t,e,r,n,o,i){const s=xi.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(r==="length"&&at(t))s.forEach((l,f)=>{(f==="length"||f>=n)&&a.push(l)});else switch(r!==void 0&&a.push(s.get(r)),e){case"add":at(t)?is(r)&&a.push(s.get("length")):(a.push(s.get(_r)),Fr(t)&&a.push(s.get(Ai)));break;case"delete":at(t)||(a.push(s.get(_r)),Fr(t)&&a.push(s.get(Ai)));break;case"set":Fr(t)&&a.push(s.get(_r));break}if(a.length===1)a[0]&&$i(a[0]);else{const l=[];for(const f of a)f&&l.push(...f);$i(ss(l))}}function $i(t,e){for(const r of at(t)?t:[...t])(r!==Re||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const Ih=Zi("__proto__,__v_isRef,__isVue"),Wl=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(os)),Dh=ls(),Nh=ls(!1,!0),Lh=ls(!0),ma=Mh();function Mh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const n=Ct(this);for(let i=0,s=this.length;i<s;i++)ve(n,"get",i+"");const o=n[e](...r);return o===-1||o===!1?n[e](...r.map(Ct)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){rn();const n=Ct(this)[e].apply(this,r);return nn(),n}}),t}function ls(t=!1,e=!1){return function(n,o,i){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_isShallow")return e;if(o==="__v_raw"&&i===(t?e?Zh:Ql:e?Jl:Xl).get(n))return n;const s=at(n);if(!t&&s&&yt(ma,o))return Reflect.get(ma,o,i);const a=Reflect.get(n,o,i);return(os(o)?Wl.has(o):Ih(o))||(t||ve(n,"get",o),e)?a:Yt(a)?!s||!is(o)?a.value:a:qt(a)?t?Gl(a):Hn(a):a}}const Bh=Kl(),Fh=Kl(!0);function Kl(t=!1){return function(r,n,o,i){let s=r[n];if(In(s)&&Yt(s)&&!Yt(o))return!1;if(!t&&!In(o)&&(Zl(o)||(o=Ct(o),s=Ct(s)),!at(r)&&Yt(s)&&!Yt(o)))return s.value=o,!0;const a=at(r)&&is(n)?Number(n)<r.length:yt(r,n),l=Reflect.set(r,n,o,i);return r===Ct(i)&&(a?kn(o,s)&&Ye(r,"set",n,o):Ye(r,"add",n,o)),l}}function Uh(t,e){const r=yt(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&r&&Ye(t,"delete",e,void 0),n}function zh(t,e){const r=Reflect.has(t,e);return(!os(e)||!Wl.has(e))&&ve(t,"has",e),r}function Hh(t){return ve(t,"iterate",at(t)?"length":_r),Reflect.ownKeys(t)}const Yl={get:Dh,set:Bh,deleteProperty:Uh,has:zh,ownKeys:Hh},jh={get:Lh,set(t,e){return!0},deleteProperty(t,e){return!0}},qh=ee({},Yl,{get:Nh,set:Fh}),us=t=>t,Io=t=>Reflect.getPrototypeOf(t);function Kn(t,e,r=!1,n=!1){t=t.__v_raw;const o=Ct(t),i=Ct(e);e!==i&&!r&&ve(o,"get",e),!r&&ve(o,"get",i);const{has:s}=Io(o),a=n?us:r?ds:Dn;if(s.call(o,e))return a(t.get(e));if(s.call(o,i))return a(t.get(i));t!==o&&t.get(e)}function Yn(t,e=!1){const r=this.__v_raw,n=Ct(r),o=Ct(t);return t!==o&&!e&&ve(n,"has",t),!e&&ve(n,"has",o),t===o?r.has(t):r.has(t)||r.has(o)}function Xn(t,e=!1){return t=t.__v_raw,!e&&ve(Ct(t),"iterate",_r),Reflect.get(t,"size",t)}function ga(t){t=Ct(t);const e=Ct(this);return Io(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function ba(t,e){e=Ct(e);const r=Ct(this),{has:n,get:o}=Io(r);let i=n.call(r,t);i||(t=Ct(t),i=n.call(r,t));const s=o.call(r,t);return r.set(t,e),i?kn(e,s)&&Ye(r,"set",t,e):Ye(r,"add",t,e),this}function ya(t){const e=Ct(this),{has:r,get:n}=Io(e);let o=r.call(e,t);o||(t=Ct(t),o=r.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return o&&Ye(e,"delete",t,void 0),i}function wa(){const t=Ct(this),e=t.size!==0,r=t.clear();return e&&Ye(t,"clear",void 0,void 0),r}function Jn(t,e){return function(n,o){const i=this,s=i.__v_raw,a=Ct(s),l=e?us:t?ds:Dn;return!t&&ve(a,"iterate",_r),s.forEach((f,u)=>n.call(o,l(f),l(u),i))}}function Qn(t,e,r){return function(...n){const o=this.__v_raw,i=Ct(o),s=Fr(i),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,f=o[t](...n),u=r?us:e?ds:Dn;return!e&&ve(i,"iterate",l?Ai:_r),{next(){const{value:d,done:v}=f.next();return v?{value:d,done:v}:{value:a?[u(d[0]),u(d[1])]:u(d),done:v}},[Symbol.iterator](){return this}}}}function Ge(t){return function(...e){return t==="delete"?!1:this}}function Vh(){const t={get(i){return Kn(this,i)},get size(){return Xn(this)},has:Yn,add:ga,set:ba,delete:ya,clear:wa,forEach:Jn(!1,!1)},e={get(i){return Kn(this,i,!1,!0)},get size(){return Xn(this)},has:Yn,add:ga,set:ba,delete:ya,clear:wa,forEach:Jn(!1,!0)},r={get(i){return Kn(this,i,!0)},get size(){return Xn(this,!0)},has(i){return Yn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:Jn(!0,!1)},n={get(i){return Kn(this,i,!0,!0)},get size(){return Xn(this,!0)},has(i){return Yn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:Jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qn(i,!1,!1),r[i]=Qn(i,!0,!1),e[i]=Qn(i,!1,!0),n[i]=Qn(i,!0,!0)}),[t,r,e,n]}const[Wh,Kh,Yh,Xh]=Vh();function cs(t,e){const r=e?t?Xh:Yh:t?Kh:Wh;return(n,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?n:Reflect.get(yt(r,o)&&o in n?r:n,o,i)}const Jh={get:cs(!1,!1)},Qh={get:cs(!1,!0)},Gh={get:cs(!0,!1)},Xl=new WeakMap,Jl=new WeakMap,Ql=new WeakMap,Zh=new WeakMap;function tp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ep(t){return t.__v_skip||!Object.isExtensible(t)?0:tp($h(t))}function Hn(t){return In(t)?t:fs(t,!1,Yl,Jh,Xl)}function rp(t){return fs(t,!1,qh,Qh,Jl)}function Gl(t){return fs(t,!0,jh,Gh,Ql)}function fs(t,e,r,n,o){if(!qt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const s=ep(t);if(s===0)return t;const a=new Proxy(t,s===2?n:r);return o.set(t,a),a}function Ur(t){return In(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function In(t){return!!(t&&t.__v_isReadonly)}function Zl(t){return!!(t&&t.__v_isShallow)}function tu(t){return Ur(t)||In(t)}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function eu(t){return go(t,"__v_skip",!0),t}const Dn=t=>qt(t)?Hn(t):t,ds=t=>qt(t)?Gl(t):t;function ru(t){sr&&Re&&(t=Ct(t),Vl(t.dep||(t.dep=ss())))}function nu(t,e){t=Ct(t),t.dep&&$i(t.dep)}function Yt(t){return!!(t&&t.__v_isRef===!0)}function np(t){return ou(t,!1)}function op(t){return ou(t,!0)}function ou(t,e){return Yt(t)?t:new ip(t,e)}class ip{constructor(e,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?e:Ct(e),this._value=r?e:Dn(e)}get value(){return ru(this),this._value}set value(e){e=this.__v_isShallow?e:Ct(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Dn(e),nu(this))}}function wn(t){return Yt(t)?t.value:t}const sp={get:(t,e,r)=>wn(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const o=t[e];return Yt(o)&&!Yt(r)?(o.value=r,!0):Reflect.set(t,e,r,n)}};function iu(t){return Ur(t)?t:new Proxy(t,sp)}class ap{constructor(e,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new as(e,()=>{this._dirty||(this._dirty=!0,nu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const e=Ct(this);return ru(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lp(t,e,r=!1){let n,o;const i=ct(t);return i?(n=t,o=Ae):(n=t.get,o=t.set),new ap(n,o,i||!o,r)}Promise.resolve();function ar(t,e,r,n){let o;try{o=n?t(...n):t()}catch(i){Do(i,e,r)}return o}function $e(t,e,r,n){if(ct(t)){const i=ar(t,e,r,n);return i&&Fl(i)&&i.catch(s=>{Do(s,e,r)}),i}const o=[];for(let i=0;i<t.length;i++)o.push($e(t[i],e,r,n));return o}function Do(t,e,r,n=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,a=r;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,s,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ar(l,null,10,[t,s,a]);return}}up(t,r,o,n)}function up(t,e,r,n=!0){console.error(t)}let bo=!1,Ci=!1;const pe=[];let qe=0;const _n=[];let mn=null,Ir=0;const xn=[];let tr=null,Dr=0;const su=Promise.resolve();let hs=null,Si=null;function au(t){const e=hs||su;return t?e.then(this?t.bind(this):t):e}function cp(t){let e=qe+1,r=pe.length;for(;e<r;){const n=e+r>>>1;Nn(pe[n])<t?e=n+1:r=n}return e}function lu(t){(!pe.length||!pe.includes(t,bo&&t.allowRecurse?qe+1:qe))&&t!==Si&&(t.id==null?pe.push(t):pe.splice(cp(t.id),0,t),uu())}function uu(){!bo&&!Ci&&(Ci=!0,hs=su.then(du))}function fp(t){const e=pe.indexOf(t);e>qe&&pe.splice(e,1)}function cu(t,e,r,n){at(t)?r.push(...t):(!e||!e.includes(t,t.allowRecurse?n+1:n))&&r.push(t),uu()}function dp(t){cu(t,mn,_n,Ir)}function hp(t){cu(t,tr,xn,Dr)}function ps(t,e=null){if(_n.length){for(Si=e,mn=[...new Set(_n)],_n.length=0,Ir=0;Ir<mn.length;Ir++)mn[Ir]();mn=null,Ir=0,Si=null,ps(t,e)}}function fu(t){if(xn.length){const e=[...new Set(xn)];if(xn.length=0,tr){tr.push(...e);return}for(tr=e,tr.sort((r,n)=>Nn(r)-Nn(n)),Dr=0;Dr<tr.length;Dr++)tr[Dr]();tr=null,Dr=0}}const Nn=t=>t.id==null?1/0:t.id;function du(t){Ci=!1,bo=!0,ps(t),pe.sort((r,n)=>Nn(r)-Nn(n));const e=Ae;try{for(qe=0;qe<pe.length;qe++){const r=pe[qe];r&&r.active!==!1&&ar(r,null,14)}}finally{qe=0,pe.length=0,fu(),bo=!1,hs=null,(pe.length||_n.length||xn.length)&&du(t)}}function pp(t,e,...r){const n=t.vnode.props||Rt;let o=r;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in n){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:v}=n[u]||Rt;v?o=r.map(_=>_.trim()):d&&(o=r.map(_i))}let a,l=n[a=ni(e)]||n[a=ni(Ne(e))];!l&&i&&(l=n[a=ni(Cr(e))]),l&&$e(l,t,6,o);const f=n[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$e(f,t,6,o)}}function hu(t,e,r=!1){const n=e.emitsCache,o=n.get(t);if(o!==void 0)return o;const i=t.emits;let s={},a=!1;if(!ct(t)){const l=f=>{const u=hu(f,e,!0);u&&(a=!0,ee(s,u))};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(n.set(t,null),null):(at(i)?i.forEach(l=>s[l]=null):ee(s,i),n.set(t,s),s)}function vs(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),yt(t,e[0].toLowerCase()+e.slice(1))||yt(t,Cr(e))||yt(t,e))}let Ee=null,No=null;function yo(t){const e=Ee;return Ee=t,No=t&&t.type.__scopeId||null,e}function eb(t){No=t}function rb(){No=null}function vp(t,e=Ee,r){if(!e||t._n)return t;const n=(...o)=>{n._d&&Ra(-1);const i=yo(e),s=t(...o);return yo(i),n._d&&Ra(1),s};return n._n=!0,n._c=!0,n._d=!0,n}function oi(t){const{type:e,vnode:r,proxy:n,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:f,render:u,renderCache:d,data:v,setupState:_,ctx:A,inheritAttrs:M}=t;let $,I;const N=yo(t);try{if(r.shapeFlag&4){const V=o||n;$=Te(u.call(V,V,d,i,_,v,A)),I=l}else{const V=e;$=Te(V.length>1?V(i,{attrs:l,slots:a,emit:f}):V(i,null)),I=e.props?l:mp(l)}}catch(V){En.length=0,Do(V,t,1),$=se(Ar)}let tt=$;if(I&&M!==!1){const V=Object.keys(I),{shapeFlag:T}=tt;V.length&&T&7&&(s&&V.some(rs)&&(I=gp(I,s)),tt=Ln(tt,I))}return r.dirs&&(tt.dirs=tt.dirs?tt.dirs.concat(r.dirs):r.dirs),r.transition&&(tt.transition=r.transition),$=tt,yo(N),$}const mp=t=>{let e;for(const r in t)(r==="class"||r==="style"||Oo(r))&&((e||(e={}))[r]=t[r]);return e},gp=(t,e)=>{const r={};for(const n in t)(!rs(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function bp(t,e,r){const{props:n,children:o,component:i}=t,{props:s,children:a,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?_a(n,s,f):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const v=u[d];if(s[v]!==n[v]&&!vs(f,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?_a(n,s,f):!0:!!s;return!1}function _a(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(e[i]!==t[i]&&!vs(r,i))return!0}return!1}function yp({vnode:t,parent:e},r){for(;e&&e.subTree===t;)(t=e.vnode).el=r,e=e.parent}const wp=t=>t.__isSuspense;function _p(t,e){e&&e.pendingBranch?at(t)?e.effects.push(...t):e.effects.push(t):hp(t)}function so(t,e){if(Kt){let r=Kt.provides;const n=Kt.parent&&Kt.parent.provides;n===r&&(r=Kt.provides=Object.create(n)),r[t]=e}}function Ve(t,e,r=!1){const n=Kt||Ee;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return r&&ct(e)?e.call(n.proxy):e}}const xa={};function ao(t,e,r){return pu(t,e,r)}function pu(t,e,{immediate:r,deep:n,flush:o,onTrack:i,onTrigger:s}=Rt){const a=Kt;let l,f=!1,u=!1;if(Yt(t)?(l=()=>t.value,f=Zl(t)):Ur(t)?(l=()=>t,n=!0):at(t)?(u=!0,f=t.some(Ur),l=()=>t.map(I=>{if(Yt(I))return I.value;if(Ur(I))return yr(I);if(ct(I))return ar(I,a,2)})):ct(t)?e?l=()=>ar(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),$e(t,a,3,[v])}:l=Ae,e&&n){const I=l;l=()=>yr(I())}let d,v=I=>{d=$.onStop=()=>{ar(I,a,4)}};if(Mn)return v=Ae,e?r&&$e(e,a,3,[l(),u?[]:void 0,v]):l(),Ae;let _=u?[]:xa;const A=()=>{if(!!$.active)if(e){const I=$.run();(n||f||(u?I.some((N,tt)=>kn(N,_[tt])):kn(I,_)))&&(d&&d(),$e(e,a,3,[I,_===xa?void 0:_,v]),_=I)}else $.run()};A.allowRecurse=!!e;let M;o==="sync"?M=A:o==="post"?M=()=>ie(A,a&&a.suspense):M=()=>{!a||a.isMounted?dp(A):A()};const $=new as(l,M);return e?r?A():_=$.run():o==="post"?ie($.run.bind($),a&&a.suspense):$.run(),()=>{$.stop(),a&&a.scope&&ns(a.scope.effects,$)}}function xp(t,e,r){const n=this.proxy,o=Jt(t)?t.includes(".")?vu(n,t):()=>n[t]:t.bind(n,n);let i;ct(e)?i=e:(i=e.handler,r=e);const s=Kt;Gr(this);const a=pu(o,i.bind(n),r);return s?Gr(s):Er(),a}function vu(t,e){const r=e.split(".");return()=>{let n=t;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function yr(t,e){if(!qt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Yt(t))yr(t.value,e);else if(at(t))for(let r=0;r<t.length;r++)yr(t[r],e);else if(Bl(t)||Fr(t))t.forEach(r=>{yr(r,e)});else if(zl(t))for(const r in t)yr(t[r],e);return t}function mu(t){return ct(t)?{setup:t,name:t.name}:t}const Ti=t=>!!t.type.__asyncLoader,gu=t=>t.type.__isKeepAlive;function Ep(t,e){bu(t,"a",e)}function Ap(t,e){bu(t,"da",e)}function bu(t,e,r=Kt){const n=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Lo(e,n,r),r){let o=r.parent;for(;o&&o.parent;)gu(o.parent.vnode)&&$p(n,e,r,o),o=o.parent}}function $p(t,e,r,n){const o=Lo(e,t,n,!0);yu(()=>{ns(n[e],o)},r)}function Lo(t,e,r=Kt,n=!1){if(r){const o=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(r.isUnmounted)return;rn(),Gr(r);const a=$e(e,r,t,s);return Er(),nn(),a});return n?o.unshift(i):o.push(i),i}}const Je=t=>(e,r=Kt)=>(!Mn||t==="sp")&&Lo(t,e,r),Cp=Je("bm"),Sp=Je("m"),Tp=Je("bu"),Op=Je("u"),Rp=Je("bum"),yu=Je("um"),Pp=Je("sp"),kp=Je("rtg"),Ip=Je("rtc");function Dp(t,e=Kt){Lo("ec",t,e)}let Oi=!0;function Np(t){const e=_u(t),r=t.proxy,n=t.ctx;Oi=!1,e.beforeCreate&&Ea(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:f,created:u,beforeMount:d,mounted:v,beforeUpdate:_,updated:A,activated:M,deactivated:$,beforeDestroy:I,beforeUnmount:N,destroyed:tt,unmounted:V,render:T,renderTracked:K,renderTriggered:W,errorCaptured:et,serverPrefetch:nt,expose:lt,inheritAttrs:ut,components:gt,directives:_t,filters:Ht}=e;if(f&&Lp(f,n,null,t.appContext.config.unwrapInjectedRef),s)for(const ot in s){const vt=s[ot];ct(vt)&&(n[ot]=vt.bind(r))}if(o){const ot=o.call(r,r);qt(ot)&&(t.data=Hn(ot))}if(Oi=!0,i)for(const ot in i){const vt=i[ot],It=ct(vt)?vt.bind(r,r):ct(vt.get)?vt.get.bind(r,r):Ae,de=!ct(vt)&&ct(vt.set)?vt.set.bind(r):Ae,kt=Oe({get:It,set:de});Object.defineProperty(n,ot,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Bt=>kt.value=Bt})}if(a)for(const ot in a)wu(a[ot],n,r,ot);if(l){const ot=ct(l)?l.call(r):l;Reflect.ownKeys(ot).forEach(vt=>{so(vt,ot[vt])})}u&&Ea(u,t,"c");function ht(ot,vt){at(vt)?vt.forEach(It=>ot(It.bind(r))):vt&&ot(vt.bind(r))}if(ht(Cp,d),ht(Sp,v),ht(Tp,_),ht(Op,A),ht(Ep,M),ht(Ap,$),ht(Dp,et),ht(Ip,K),ht(kp,W),ht(Rp,N),ht(yu,V),ht(Pp,nt),at(lt))if(lt.length){const ot=t.exposed||(t.exposed={});lt.forEach(vt=>{Object.defineProperty(ot,vt,{get:()=>r[vt],set:It=>r[vt]=It})})}else t.exposed||(t.exposed={});T&&t.render===Ae&&(t.render=T),ut!=null&&(t.inheritAttrs=ut),gt&&(t.components=gt),_t&&(t.directives=_t)}function Lp(t,e,r=Ae,n=!1){at(t)&&(t=Ri(t));for(const o in t){const i=t[o];let s;qt(i)?"default"in i?s=Ve(i.from||o,i.default,!0):s=Ve(i.from||o):s=Ve(i),Yt(s)&&n?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[o]=s}}function Ea(t,e,r){$e(at(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function wu(t,e,r,n){const o=n.includes(".")?vu(r,n):()=>r[n];if(Jt(t)){const i=e[t];ct(i)&&ao(o,i)}else if(ct(t))ao(o,t.bind(r));else if(qt(t))if(at(t))t.forEach(i=>wu(i,e,r,n));else{const i=ct(t.handler)?t.handler.bind(r):e[t.handler];ct(i)&&ao(o,i,t)}}function _u(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!r&&!n?l=e:(l={},o.length&&o.forEach(f=>wo(l,f,s,!0)),wo(l,e,s)),i.set(e,l),l}function wo(t,e,r,n=!1){const{mixins:o,extends:i}=e;i&&wo(t,i,r,!0),o&&o.forEach(s=>wo(t,s,r,!0));for(const s in e)if(!(n&&s==="expose")){const a=Mp[s]||r&&r[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Mp={data:Aa,props:gr,emits:gr,methods:gr,computed:gr,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:gr,directives:gr,watch:Fp,provide:Aa,inject:Bp};function Aa(t,e){return e?t?function(){return ee(ct(t)?t.call(this,this):t,ct(e)?e.call(this,this):e)}:e:t}function Bp(t,e){return gr(Ri(t),Ri(e))}function Ri(t){if(at(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function te(t,e){return t?[...new Set([].concat(t,e))]:e}function gr(t,e){return t?ee(ee(Object.create(null),t),e):e}function Fp(t,e){if(!t)return e;if(!e)return t;const r=ee(Object.create(null),t);for(const n in e)r[n]=te(t[n],e[n]);return r}function Up(t,e,r,n=!1){const o={},i={};go(i,Mo,1),t.propsDefaults=Object.create(null),xu(t,e,o,i);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);r?t.props=n?o:rp(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function zp(t,e,r,n){const{props:o,attrs:i,vnode:{patchFlag:s}}=t,a=Ct(o),[l]=t.propsOptions;let f=!1;if((n||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let v=u[d];const _=e[v];if(l)if(yt(i,v))_!==i[v]&&(i[v]=_,f=!0);else{const A=Ne(v);o[A]=Pi(l,a,A,_,t,!1)}else _!==i[v]&&(i[v]=_,f=!0)}}}else{xu(t,e,o,i)&&(f=!0);let u;for(const d in a)(!e||!yt(e,d)&&((u=Cr(d))===d||!yt(e,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(o[d]=Pi(l,a,d,void 0,t,!0)):delete o[d]);if(i!==a)for(const d in i)(!e||!yt(e,d)&&!0)&&(delete i[d],f=!0)}f&&Ye(t,"set","$attrs")}function xu(t,e,r,n){const[o,i]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(oo(l))continue;const f=e[l];let u;o&&yt(o,u=Ne(l))?!i||!i.includes(u)?r[u]=f:(a||(a={}))[u]=f:vs(t.emitsOptions,l)||(!(l in n)||f!==n[l])&&(n[l]=f,s=!0)}if(i){const l=Ct(r),f=a||Rt;for(let u=0;u<i.length;u++){const d=i[u];r[d]=Pi(o,l,d,f[d],t,!yt(f,d))}}return s}function Pi(t,e,r,n,o,i){const s=t[r];if(s!=null){const a=yt(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&ct(l)){const{propsDefaults:f}=o;r in f?n=f[r]:(Gr(o),n=f[r]=l.call(null,e),Er())}else n=l}s[0]&&(i&&!a?n=!1:s[1]&&(n===""||n===Cr(r))&&(n=!0))}return n}function Eu(t,e,r=!1){const n=e.propsCache,o=n.get(t);if(o)return o;const i=t.props,s={},a=[];let l=!1;if(!ct(t)){const u=d=>{l=!0;const[v,_]=Eu(d,e,!0);ee(s,v),_&&a.push(..._)};!r&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return n.set(t,Br),Br;if(at(i))for(let u=0;u<i.length;u++){const d=Ne(i[u]);$a(d)&&(s[d]=Rt)}else if(i)for(const u in i){const d=Ne(u);if($a(d)){const v=i[u],_=s[d]=at(v)||ct(v)?{type:v}:v;if(_){const A=Ta(Boolean,_.type),M=Ta(String,_.type);_[0]=A>-1,_[1]=M<0||A<M,(A>-1||yt(_,"default"))&&a.push(d)}}}const f=[s,a];return n.set(t,f),f}function $a(t){return t[0]!=="$"}function Ca(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Sa(t,e){return Ca(t)===Ca(e)}function Ta(t,e){return at(e)?e.findIndex(r=>Sa(r,t)):ct(e)&&Sa(e,t)?0:-1}const Au=t=>t[0]==="_"||t==="$stable",ms=t=>at(t)?t.map(Te):[Te(t)],Hp=(t,e,r)=>{const n=vp((...o)=>ms(e(...o)),r);return n._c=!1,n},$u=(t,e,r)=>{const n=t._ctx;for(const o in t){if(Au(o))continue;const i=t[o];if(ct(i))e[o]=Hp(o,i,n);else if(i!=null){const s=ms(i);e[o]=()=>s}}},Cu=(t,e)=>{const r=ms(e);t.slots.default=()=>r},jp=(t,e)=>{if(t.vnode.shapeFlag&32){const r=e._;r?(t.slots=Ct(e),go(e,"_",r)):$u(e,t.slots={})}else t.slots={},e&&Cu(t,e);go(t.slots,Mo,1)},qp=(t,e,r)=>{const{vnode:n,slots:o}=t;let i=!0,s=Rt;if(n.shapeFlag&32){const a=e._;a?r&&a===1?i=!1:(ee(o,e),!r&&a===1&&delete o._):(i=!e.$stable,$u(e,o)),s=e}else e&&(Cu(t,e),s={default:1});if(i)for(const a in o)!Au(a)&&!(a in s)&&delete o[a]};function nb(t,e){const r=Ee;if(r===null)return t;const n=r.proxy,o=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,a,l,f=Rt]=e[i];ct(s)&&(s={mounted:s,updated:s}),s.deep&&yr(a),o.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:f})}return t}function pr(t,e,r,n){const o=t.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[n];l&&(rn(),$e(l,r,8,[t.el,a,t,e]),nn())}}function Su(){return{app:null,config:{isNativeTag:xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vp=0;function Wp(t,e){return function(n,o=null){o!=null&&!qt(o)&&(o=null);const i=Su(),s=new Set;let a=!1;const l=i.app={_uid:Vp++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:mv,get config(){return i.config},set config(f){},use(f,...u){return s.has(f)||(f&&ct(f.install)?(s.add(f),f.install(l,...u)):ct(f)&&(s.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,d){if(!a){const v=se(n,o);return v.appContext=i,u&&e?e(v,f):t(v,f,d),a=!0,l._container=f,f.__vue_app__=l,ys(v.component)||v.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function ki(t,e,r,n,o=!1){if(at(t)){t.forEach((v,_)=>ki(v,e&&(at(e)?e[_]:e),r,n,o));return}if(Ti(n)&&!o)return;const i=n.shapeFlag&4?ys(n.component)||n.component.proxy:n.el,s=o?null:i,{i:a,r:l}=t,f=e&&e.r,u=a.refs===Rt?a.refs={}:a.refs,d=a.setupState;if(f!=null&&f!==l&&(Jt(f)?(u[f]=null,yt(d,f)&&(d[f]=null)):Yt(f)&&(f.value=null)),ct(l))ar(l,a,12,[s,u]);else{const v=Jt(l),_=Yt(l);if(v||_){const A=()=>{if(t.f){const M=v?u[l]:l.value;o?at(M)&&ns(M,i):at(M)?M.includes(i)||M.push(i):v?u[l]=[i]:(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=s,yt(d,l)&&(d[l]=s)):Yt(l)&&(l.value=s,t.k&&(u[t.k]=s))};s?(A.id=-1,ie(A,r)):A()}}}const ie=_p;function Kp(t){return Yp(t)}function Yp(t,e){const r=Th();r.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:v,setScopeId:_=Ae,cloneNode:A,insertStaticContent:M}=t,$=(p,g,x,R=null,O=null,B=null,q=!1,D=null,U=!!g.dynamicChildren)=>{if(p===g)return;p&&!dn(p,g)&&(R=J(p),Ft(p,O,B,!0),p=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:P,ref:G,shapeFlag:X}=g;switch(P){case gs:I(p,g,x,R);break;case Ar:N(p,g,x,R);break;case lo:p==null&&tt(g,x,R,q);break;case ze:_t(p,g,x,R,O,B,q,D,U);break;default:X&1?K(p,g,x,R,O,B,q,D,U):X&6?Ht(p,g,x,R,O,B,q,D,U):(X&64||X&128)&&P.process(p,g,x,R,O,B,q,D,U,xt)}G!=null&&O&&ki(G,p&&p.ref,B,g||p,!g)},I=(p,g,x,R)=>{if(p==null)n(g.el=a(g.children),x,R);else{const O=g.el=p.el;g.children!==p.children&&f(O,g.children)}},N=(p,g,x,R)=>{p==null?n(g.el=l(g.children||""),x,R):g.el=p.el},tt=(p,g,x,R)=>{[p.el,p.anchor]=M(p.children,g,x,R,p.el,p.anchor)},V=({el:p,anchor:g},x,R)=>{let O;for(;p&&p!==g;)O=v(p),n(p,x,R),p=O;n(g,x,R)},T=({el:p,anchor:g})=>{let x;for(;p&&p!==g;)x=v(p),o(p),p=x;o(g)},K=(p,g,x,R,O,B,q,D,U)=>{q=q||g.type==="svg",p==null?W(g,x,R,O,B,q,D,U):lt(p,g,O,B,q,D,U)},W=(p,g,x,R,O,B,q,D)=>{let U,P;const{type:G,props:X,shapeFlag:Z,transition:rt,patchFlag:ft,dirs:Et}=p;if(p.el&&A!==void 0&&ft===-1)U=p.el=A(p.el);else{if(U=p.el=s(p.type,B,X&&X.is,X),Z&8?u(U,p.children):Z&16&&nt(p.children,U,null,R,O,B&&G!=="foreignObject",q,D),Et&&pr(p,null,R,"created"),X){for(const Tt in X)Tt!=="value"&&!oo(Tt)&&i(U,Tt,null,X[Tt],B,p.children,R,O,H);"value"in X&&i(U,"value",null,X.value),(P=X.onVnodeBeforeMount)&&Se(P,R,p)}et(U,p,p.scopeId,q,R)}Et&&pr(p,null,R,"beforeMount");const At=(!O||O&&!O.pendingBranch)&&rt&&!rt.persisted;At&&rt.beforeEnter(U),n(U,g,x),((P=X&&X.onVnodeMounted)||At||Et)&&ie(()=>{P&&Se(P,R,p),At&&rt.enter(U),Et&&pr(p,null,R,"mounted")},O)},et=(p,g,x,R,O)=>{if(x&&_(p,x),R)for(let B=0;B<R.length;B++)_(p,R[B]);if(O){let B=O.subTree;if(g===B){const q=O.vnode;et(p,q,q.scopeId,q.slotScopeIds,O.parent)}}},nt=(p,g,x,R,O,B,q,D,U=0)=>{for(let P=U;P<p.length;P++){const G=p[P]=D?rr(p[P]):Te(p[P]);$(null,G,g,x,R,O,B,q,D)}},lt=(p,g,x,R,O,B,q)=>{const D=g.el=p.el;let{patchFlag:U,dynamicChildren:P,dirs:G}=g;U|=p.patchFlag&16;const X=p.props||Rt,Z=g.props||Rt;let rt;x&&vr(x,!1),(rt=Z.onVnodeBeforeUpdate)&&Se(rt,x,g,p),G&&pr(g,p,x,"beforeUpdate"),x&&vr(x,!0);const ft=O&&g.type!=="foreignObject";if(P?ut(p.dynamicChildren,P,D,x,R,ft,B):q||It(p,g,D,null,x,R,ft,B,!1),U>0){if(U&16)gt(D,g,X,Z,x,R,O);else if(U&2&&X.class!==Z.class&&i(D,"class",null,Z.class,O),U&4&&i(D,"style",X.style,Z.style,O),U&8){const Et=g.dynamicProps;for(let At=0;At<Et.length;At++){const Tt=Et[At],ne=X[Tt],Be=Z[Tt];(Be!==ne||Tt==="value")&&i(D,Tt,ne,Be,O,p.children,x,R,H)}}U&1&&p.children!==g.children&&u(D,g.children)}else!q&&P==null&&gt(D,g,X,Z,x,R,O);((rt=Z.onVnodeUpdated)||G)&&ie(()=>{rt&&Se(rt,x,g,p),G&&pr(g,p,x,"updated")},R)},ut=(p,g,x,R,O,B,q)=>{for(let D=0;D<g.length;D++){const U=p[D],P=g[D],G=U.el&&(U.type===ze||!dn(U,P)||U.shapeFlag&70)?d(U.el):x;$(U,P,G,null,R,O,B,q,!0)}},gt=(p,g,x,R,O,B,q)=>{if(x!==R){for(const D in R){if(oo(D))continue;const U=R[D],P=x[D];U!==P&&D!=="value"&&i(p,D,P,U,q,g.children,O,B,H)}if(x!==Rt)for(const D in x)!oo(D)&&!(D in R)&&i(p,D,x[D],null,q,g.children,O,B,H);"value"in R&&i(p,"value",x.value,R.value)}},_t=(p,g,x,R,O,B,q,D,U)=>{const P=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:X,dynamicChildren:Z,slotScopeIds:rt}=g;rt&&(D=D?D.concat(rt):rt),p==null?(n(P,x,R),n(G,x,R),nt(g.children,x,G,O,B,q,D,U)):X>0&&X&64&&Z&&p.dynamicChildren?(ut(p.dynamicChildren,Z,x,O,B,q,D),(g.key!=null||O&&g===O.subTree)&&Tu(p,g,!0)):It(p,g,x,G,O,B,q,D,U)},Ht=(p,g,x,R,O,B,q,D,U)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?O.ctx.activate(g,x,R,q,U):Vt(g,x,R,O,B,q,U):ht(p,g,U)},Vt=(p,g,x,R,O,B,q)=>{const D=p.component=uv(p,R,O);if(gu(p)&&(D.ctx.renderer=xt),cv(D),D.asyncDep){if(O&&O.registerDep(D,ot),!p.el){const U=D.subTree=se(Ar);N(null,U,g,x)}return}ot(D,p,g,x,O,B,q)},ht=(p,g,x)=>{const R=g.component=p.component;if(bp(p,g,x))if(R.asyncDep&&!R.asyncResolved){vt(R,g,x);return}else R.next=g,fp(R.update),R.update();else g.component=p.component,g.el=p.el,R.vnode=g},ot=(p,g,x,R,O,B,q)=>{const D=()=>{if(p.isMounted){let{next:G,bu:X,u:Z,parent:rt,vnode:ft}=p,Et=G,At;vr(p,!1),G?(G.el=ft.el,vt(p,G,q)):G=ft,X&&io(X),(At=G.props&&G.props.onVnodeBeforeUpdate)&&Se(At,rt,G,ft),vr(p,!0);const Tt=oi(p),ne=p.subTree;p.subTree=Tt,$(ne,Tt,d(ne.el),J(ne),p,O,B),G.el=Tt.el,Et===null&&yp(p,Tt.el),Z&&ie(Z,O),(At=G.props&&G.props.onVnodeUpdated)&&ie(()=>Se(At,rt,G,ft),O)}else{let G;const{el:X,props:Z}=g,{bm:rt,m:ft,parent:Et}=p,At=Ti(g);if(vr(p,!1),rt&&io(rt),!At&&(G=Z&&Z.onVnodeBeforeMount)&&Se(G,Et,g),vr(p,!0),X&&it){const Tt=()=>{p.subTree=oi(p),it(X,p.subTree,p,O,null)};At?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Tt()):Tt()}else{const Tt=p.subTree=oi(p);$(null,Tt,x,R,p,O,B),g.el=Tt.el}if(ft&&ie(ft,O),!At&&(G=Z&&Z.onVnodeMounted)){const Tt=g;ie(()=>Se(G,Et,Tt),O)}g.shapeFlag&256&&p.a&&ie(p.a,O),p.isMounted=!0,g=x=R=null}},U=p.effect=new as(D,()=>lu(p.update),p.scope),P=p.update=U.run.bind(U);P.id=p.uid,vr(p,!0),P()},vt=(p,g,x)=>{g.component=p;const R=p.vnode.props;p.vnode=g,p.next=null,zp(p,g.props,R,x),qp(p,g.children,x),rn(),ps(void 0,p.update),nn()},It=(p,g,x,R,O,B,q,D,U=!1)=>{const P=p&&p.children,G=p?p.shapeFlag:0,X=g.children,{patchFlag:Z,shapeFlag:rt}=g;if(Z>0){if(Z&128){kt(P,X,x,R,O,B,q,D,U);return}else if(Z&256){de(P,X,x,R,O,B,q,D,U);return}}rt&8?(G&16&&H(P,O,B),X!==P&&u(x,X)):G&16?rt&16?kt(P,X,x,R,O,B,q,D,U):H(P,O,B,!0):(G&8&&u(x,""),rt&16&&nt(X,x,R,O,B,q,D,U))},de=(p,g,x,R,O,B,q,D,U)=>{p=p||Br,g=g||Br;const P=p.length,G=g.length,X=Math.min(P,G);let Z;for(Z=0;Z<X;Z++){const rt=g[Z]=U?rr(g[Z]):Te(g[Z]);$(p[Z],rt,x,null,O,B,q,D,U)}P>G?H(p,O,B,!0,!1,X):nt(g,x,R,O,B,q,D,U,X)},kt=(p,g,x,R,O,B,q,D,U)=>{let P=0;const G=g.length;let X=p.length-1,Z=G-1;for(;P<=X&&P<=Z;){const rt=p[P],ft=g[P]=U?rr(g[P]):Te(g[P]);if(dn(rt,ft))$(rt,ft,x,null,O,B,q,D,U);else break;P++}for(;P<=X&&P<=Z;){const rt=p[X],ft=g[Z]=U?rr(g[Z]):Te(g[Z]);if(dn(rt,ft))$(rt,ft,x,null,O,B,q,D,U);else break;X--,Z--}if(P>X){if(P<=Z){const rt=Z+1,ft=rt<G?g[rt].el:R;for(;P<=Z;)$(null,g[P]=U?rr(g[P]):Te(g[P]),x,ft,O,B,q,D,U),P++}}else if(P>Z)for(;P<=X;)Ft(p[P],O,B,!0),P++;else{const rt=P,ft=P,Et=new Map;for(P=ft;P<=Z;P++){const Zt=g[P]=U?rr(g[P]):Te(g[P]);Zt.key!=null&&Et.set(Zt.key,P)}let At,Tt=0;const ne=Z-ft+1;let Be=!1,sn=0;const Fe=new Array(ne);for(P=0;P<ne;P++)Fe[P]=0;for(P=rt;P<=X;P++){const Zt=p[P];if(Tt>=ne){Ft(Zt,O,B,!0);continue}let oe;if(Zt.key!=null)oe=Et.get(Zt.key);else for(At=ft;At<=Z;At++)if(Fe[At-ft]===0&&dn(Zt,g[At])){oe=At;break}oe===void 0?Ft(Zt,O,B,!0):(Fe[oe-ft]=P+1,oe>=sn?sn=oe:Be=!0,$(Zt,g[oe],x,null,O,B,q,D,U),Tt++)}const qn=Be?Xp(Fe):Br;for(At=qn.length-1,P=ne-1;P>=0;P--){const Zt=ft+P,oe=g[Zt],an=Zt+1<G?g[Zt+1].el:R;Fe[P]===0?$(null,oe,x,an,O,B,q,D,U):Be&&(At<0||P!==qn[At]?Bt(oe,x,an,2):At--)}}},Bt=(p,g,x,R,O=null)=>{const{el:B,type:q,transition:D,children:U,shapeFlag:P}=p;if(P&6){Bt(p.component.subTree,g,x,R);return}if(P&128){p.suspense.move(g,x,R);return}if(P&64){q.move(p,g,x,xt);return}if(q===ze){n(B,g,x);for(let X=0;X<U.length;X++)Bt(U[X],g,x,R);n(p.anchor,g,x);return}if(q===lo){V(p,g,x);return}if(R!==2&&P&1&&D)if(R===0)D.beforeEnter(B),n(B,g,x),ie(()=>D.enter(B),O);else{const{leave:X,delayLeave:Z,afterLeave:rt}=D,ft=()=>n(B,g,x),Et=()=>{X(B,()=>{ft(),rt&&rt()})};Z?Z(B,ft,Et):Et()}else n(B,g,x)},Ft=(p,g,x,R=!1,O=!1)=>{const{type:B,props:q,ref:D,children:U,dynamicChildren:P,shapeFlag:G,patchFlag:X,dirs:Z}=p;if(D!=null&&ki(D,null,x,p,!0),G&256){g.ctx.deactivate(p);return}const rt=G&1&&Z,ft=!Ti(p);let Et;if(ft&&(Et=q&&q.onVnodeBeforeUnmount)&&Se(Et,g,p),G&6)Y(p.component,x,R);else{if(G&128){p.suspense.unmount(x,R);return}rt&&pr(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,x,O,xt,R):P&&(B!==ze||X>0&&X&64)?H(P,g,x,!1,!0):(B===ze&&X&384||!O&&G&16)&&H(U,g,x),R&&me(p)}(ft&&(Et=q&&q.onVnodeUnmounted)||rt)&&ie(()=>{Et&&Se(Et,g,p),rt&&pr(p,null,g,"unmounted")},x)},me=p=>{const{type:g,el:x,anchor:R,transition:O}=p;if(g===ze){S(x,R);return}if(g===lo){T(p);return}const B=()=>{o(x),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(p.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:D}=O,U=()=>q(x,B);D?D(p.el,B,U):U()}else B()},S=(p,g)=>{let x;for(;p!==g;)x=v(p),o(p),p=x;o(g)},Y=(p,g,x)=>{const{bum:R,scope:O,update:B,subTree:q,um:D}=p;R&&io(R),O.stop(),B&&(B.active=!1,Ft(q,p,g,x)),D&&ie(D,g),ie(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},H=(p,g,x,R=!1,O=!1,B=0)=>{for(let q=B;q<p.length;q++)Ft(p[q],g,x,R,O)},J=p=>p.shapeFlag&6?J(p.component.subTree):p.shapeFlag&128?p.suspense.next():v(p.anchor||p.el),bt=(p,g,x)=>{p==null?g._vnode&&Ft(g._vnode,null,null,!0):$(g._vnode||null,p,g,null,null,null,x),fu(),g._vnode=p},xt={p:$,um:Ft,m:Bt,r:me,mt:Vt,mc:nt,pc:It,pbc:ut,n:J,o:t};let st,it;return e&&([st,it]=e(xt)),{render:bt,hydrate:st,createApp:Wp(bt,st)}}function vr({effect:t,update:e},r){t.allowRecurse=e.allowRecurse=r}function Tu(t,e,r=!1){const n=t.children,o=e.children;if(at(n)&&at(o))for(let i=0;i<n.length;i++){const s=n[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=rr(o[i]),a.el=s.el),r||Tu(s,a))}}function Xp(t){const e=t.slice(),r=[0];let n,o,i,s,a;const l=t.length;for(n=0;n<l;n++){const f=t[n];if(f!==0){if(o=r[r.length-1],t[o]<f){e[n]=o,r.push(n);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,t[r[a]]<f?i=a+1:s=a;f<t[r[i]]&&(i>0&&(e[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=e[s];return r}const Jp=t=>t.__isTeleport,Ou="components";function ob(t,e){return Gp(Ou,t,!0,e)||t}const Qp=Symbol();function Gp(t,e,r=!0,n=!1){const o=Ee||Kt;if(o){const i=o.type;if(t===Ou){const a=pv(i);if(a&&(a===e||a===Ne(e)||a===ko(Ne(e))))return i}const s=Oa(o[t]||i[t],e)||Oa(o.appContext[t],e);return!s&&n?i:s}}function Oa(t,e){return t&&(t[e]||t[Ne(e)]||t[ko(Ne(e))])}const ze=Symbol(void 0),gs=Symbol(void 0),Ar=Symbol(void 0),lo=Symbol(void 0),En=[];let xr=null;function Zp(t=!1){En.push(xr=t?null:[])}function tv(){En.pop(),xr=En[En.length-1]||null}let _o=1;function Ra(t){_o+=t}function Ru(t){return t.dynamicChildren=_o>0?xr||Br:null,tv(),_o>0&&xr&&xr.push(t),t}function ib(t,e,r,n,o,i){return Ru(ku(t,e,r,n,o,i,!0))}function ev(t,e,r,n,o){return Ru(se(t,e,r,n,o,!0))}function Ii(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const Mo="__vInternal",Pu=({key:t})=>t!=null?t:null,uo=({ref:t,ref_key:e,ref_for:r})=>t!=null?Jt(t)||Yt(t)||ct(t)?{i:Ee,r:t,k:e,f:!!r}:t:null;function ku(t,e=null,r=null,n=0,o=null,i=t===ze?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pu(e),ref:e&&uo(e),scopeId:No,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(bs(l,r),i&128&&t.normalize(l)):r&&(l.shapeFlag|=Jt(r)?8:16),_o>0&&!s&&xr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xr.push(l),l}const se=rv;function rv(t,e=null,r=null,n=0,o=null,i=!1){if((!t||t===Qp)&&(t=Ar),Ii(t)){const a=Ln(t,e,!0);return r&&bs(a,r),a}if(vv(t)&&(t=t.__vccOpts),e){e=nv(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=es(a)),qt(l)&&(tu(l)&&!at(l)&&(l=ee({},l)),e.style=ts(l))}const s=Jt(t)?1:wp(t)?128:Jp(t)?64:qt(t)?4:ct(t)?2:0;return ku(t,e,r,n,o,s,i,!0)}function nv(t){return t?tu(t)||Mo in t?ee({},t):t:null}function Ln(t,e,r=!1){const{props:n,ref:o,patchFlag:i,children:s}=t,a=e?iv(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pu(a),ref:e&&e.ref?r&&o?at(o)?o.concat(uo(e)):[o,uo(e)]:uo(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor}}function ov(t=" ",e=0){return se(gs,null,t,e)}function sb(t,e){const r=se(lo,null,t);return r.staticCount=e,r}function ab(t="",e=!1){return e?(Zp(),ev(Ar,null,t)):se(Ar,null,t)}function Te(t){return t==null||typeof t=="boolean"?se(Ar):at(t)?se(ze,null,t.slice()):typeof t=="object"?rr(t):se(gs,null,String(t))}function rr(t){return t.el===null||t.memo?t:Ln(t)}function bs(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(at(e))r=16;else if(typeof e=="object")if(n&65){const o=e.default;o&&(o._c&&(o._d=!1),bs(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=e._;!o&&!(Mo in e)?e._ctx=Ee:o===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:Ee},r=32):(e=String(e),n&64?(r=16,e=[ov(e)]):r=8);t.children=e,t.shapeFlag|=r}function iv(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const o in n)if(o==="class")e.class!==n.class&&(e.class=es([e.class,n.class]));else if(o==="style")e.style=ts([e.style,n.style]);else if(Oo(o)){const i=e[o],s=n[o];s&&i!==s&&!(at(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=n[o])}return e}function Se(t,e,r,n=null){$e(t,e,7,[r,n])}const Di=t=>t?Iu(t)?ys(t)||t.proxy:Di(t.parent):null,xo=ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Di(t.parent),$root:t=>Di(t.root),$emit:t=>t.emit,$options:t=>_u(t),$forceUpdate:t=>()=>lu(t.update),$nextTick:t=>au.bind(t.proxy),$watch:t=>xp.bind(t)}),sv={get({_:t},e){const{ctx:r,setupState:n,data:o,props:i,accessCache:s,type:a,appContext:l}=t;let f;if(e[0]!=="$"){const _=s[e];if(_!==void 0)switch(_){case 1:return n[e];case 2:return o[e];case 4:return r[e];case 3:return i[e]}else{if(n!==Rt&&yt(n,e))return s[e]=1,n[e];if(o!==Rt&&yt(o,e))return s[e]=2,o[e];if((f=t.propsOptions[0])&&yt(f,e))return s[e]=3,i[e];if(r!==Rt&&yt(r,e))return s[e]=4,r[e];Oi&&(s[e]=0)}}const u=xo[e];let d,v;if(u)return e==="$attrs"&&ve(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(r!==Rt&&yt(r,e))return s[e]=4,r[e];if(v=l.config.globalProperties,yt(v,e))return v[e]},set({_:t},e,r){const{data:n,setupState:o,ctx:i}=t;return o!==Rt&&yt(o,e)?(o[e]=r,!0):n!==Rt&&yt(n,e)?(n[e]=r,!0):yt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:o,propsOptions:i}},s){let a;return!!r[s]||t!==Rt&&yt(t,s)||e!==Rt&&yt(e,s)||(a=i[0])&&yt(a,s)||yt(n,s)||yt(xo,s)||yt(o.config.globalProperties,s)},defineProperty(t,e,r){return r.get!=null?this.set(t,e,r.get(),null):r.value!=null&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}},av=Su();let lv=0;function uv(t,e,r){const n=t.type,o=(e?e.appContext:t.appContext)||av,i={uid:lv++,vnode:t,type:n,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eu(n,o),emitsOptions:hu(n,o),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:n.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pp.bind(null,i),t.ce&&t.ce(i),i}let Kt=null;const Gr=t=>{Kt=t,t.scope.on()},Er=()=>{Kt&&Kt.scope.off(),Kt=null};function Iu(t){return t.vnode.shapeFlag&4}let Mn=!1;function cv(t,e=!1){Mn=e;const{props:r,children:n}=t.vnode,o=Iu(t);Up(t,r,o,e),jp(t,n);const i=o?fv(t,e):void 0;return Mn=!1,i}function fv(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=eu(new Proxy(t.ctx,sv));const{setup:n}=r;if(n){const o=t.setupContext=n.length>1?hv(t):null;Gr(t),rn();const i=ar(n,t,0,[t.props,o]);if(nn(),Er(),Fl(i)){if(i.then(Er,Er),e)return i.then(s=>{Pa(t,s,e)}).catch(s=>{Do(s,t,0)});t.asyncDep=i}else Pa(t,i,e)}else Du(t,e)}function Pa(t,e,r){ct(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qt(e)&&(t.setupState=iu(e)),Du(t,r)}let ka;function Du(t,e,r){const n=t.type;if(!t.render){if(!e&&ka&&!n.render){const o=n.template;if(o){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=n,f=ee(ee({isCustomElement:i,delimiters:a},s),l);n.render=ka(o,f)}}t.render=n.render||Ae}Gr(t),rn(),Np(t),nn(),Er()}function dv(t){return new Proxy(t.attrs,{get(e,r){return ve(t,"get","$attrs"),e[r]}})}function hv(t){const e=n=>{t.exposed=n||{}};let r;return{get attrs(){return r||(r=dv(t))},slots:t.slots,emit:t.emit,expose:e}}function ys(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(iu(eu(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in xo)return xo[r](t)}}))}function pv(t){return ct(t)&&t.displayName||t.name}function vv(t){return ct(t)&&"__vccOpts"in t}const Oe=(t,e)=>lp(t,e,Mn);function Nu(t,e,r){const n=arguments.length;return n===2?qt(e)&&!at(e)?Ii(e)?se(t,null,[e]):se(t,e):se(t,null,e):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Ii(r)&&(r=[r]),se(t,e,r))}const mv="3.2.31",gv="http://www.w3.org/2000/svg",br=typeof document!="undefined"?document:null,Ia=br&&br.createElement("template"),bv={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const o=e?br.createElementNS(gv,t):br.createElement(t,r?{is:r}:void 0);return t==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:t=>br.createTextNode(t),createComment:t=>br.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>br.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,r,n,o,i){const s=r?r.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{Ia.innerHTML=n?`<svg>${t}</svg>`:t;const a=Ia.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,r)}return[s?s.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}};function yv(t,e,r){const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}function wv(t,e,r){const n=t.style,o=Jt(r);if(r&&!o){for(const i in r)Ni(n,i,r[i]);if(e&&!Jt(e))for(const i in e)r[i]==null&&Ni(n,i,"")}else{const i=n.display;o?e!==r&&(n.cssText=r):e&&t.removeAttribute("style"),"_vod"in t&&(n.display=i)}}const Da=/\s*!important$/;function Ni(t,e,r){if(at(r))r.forEach(n=>Ni(t,e,n));else if(e.startsWith("--"))t.setProperty(e,r);else{const n=_v(t,e);Da.test(r)?t.setProperty(Cr(n),r.replace(Da,""),"important"):t[n]=r}}const Na=["Webkit","Moz","ms"],ii={};function _v(t,e){const r=ii[e];if(r)return r;let n=Ne(e);if(n!=="filter"&&n in t)return ii[e]=n;n=ko(n);for(let o=0;o<Na.length;o++){const i=Na[o]+n;if(i in t)return ii[e]=i}return e}const La="http://www.w3.org/1999/xlink";function xv(t,e,r,n,o){if(n&&e.startsWith("xlink:"))r==null?t.removeAttributeNS(La,e.slice(6,e.length)):t.setAttributeNS(La,e,r);else{const i=bh(e);r==null||i&&!Ll(r)?t.removeAttribute(e):t.setAttribute(e,i?"":r)}}function Ev(t,e,r,n,o,i,s){if(e==="innerHTML"||e==="textContent"){n&&s(n,o,i),t[e]=r==null?"":r;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=r;const a=r==null?"":r;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),r==null&&t.removeAttribute(e);return}if(r===""||r==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ll(r);return}else if(r==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=r}catch{}}let Eo=Date.now,Lu=!1;if(typeof window!="undefined"){Eo()>document.createEvent("Event").timeStamp&&(Eo=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Lu=!!(t&&Number(t[1])<=53)}let Li=0;const Av=Promise.resolve(),$v=()=>{Li=0},Cv=()=>Li||(Av.then($v),Li=Eo());function Nr(t,e,r,n){t.addEventListener(e,r,n)}function Sv(t,e,r,n){t.removeEventListener(e,r,n)}function Tv(t,e,r,n,o=null){const i=t._vei||(t._vei={}),s=i[e];if(n&&s)s.value=n;else{const[a,l]=Ov(e);if(n){const f=i[e]=Rv(n,o);Nr(t,a,f,l)}else s&&(Sv(t,a,s,l),i[e]=void 0)}}const Ma=/(?:Once|Passive|Capture)$/;function Ov(t){let e;if(Ma.test(t)){e={};let r;for(;r=t.match(Ma);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[Cr(t.slice(2)),e]}function Rv(t,e){const r=n=>{const o=n.timeStamp||Eo();(Lu||o>=r.attached-1)&&$e(Pv(n,r.value),e,5,[n])};return r.value=t,r.attached=Cv(),r}function Pv(t,e){if(at(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>o=>!o._stopped&&n&&n(o))}else return e}const Ba=/^on[a-z]/,kv=(t,e,r,n,o=!1,i,s,a,l)=>{e==="class"?yv(t,n,o):e==="style"?wv(t,r,n):Oo(e)?rs(e)||Tv(t,e,r,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iv(t,e,n,o))?Ev(t,e,n,i,s,a,l):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),xv(t,e,n,o))};function Iv(t,e,r,n){return n?!!(e==="innerHTML"||e==="textContent"||e in t&&Ba.test(e)&&ct(r)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ba.test(e)&&Jt(r)?!1:e in t}const Fa=t=>{const e=t.props["onUpdate:modelValue"];return at(e)?r=>io(e,r):e};function Dv(t){t.target.composing=!0}function Ua(t){const e=t.target;e.composing&&(e.composing=!1,Nv(e,"input"))}function Nv(t,e){const r=document.createEvent("HTMLEvents");r.initEvent(e,!0,!0),t.dispatchEvent(r)}const lb={created(t,{modifiers:{lazy:e,trim:r,number:n}},o){t._assign=Fa(o);const i=n||o.props&&o.props.type==="number";Nr(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;r?a=a.trim():i&&(a=_i(a)),t._assign(a)}),r&&Nr(t,"change",()=>{t.value=t.value.trim()}),e||(Nr(t,"compositionstart",Dv),Nr(t,"compositionend",Ua),Nr(t,"change",Ua))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:r,trim:n,number:o}},i){if(t._assign=Fa(i),t.composing||document.activeElement===t&&(r||n&&t.value.trim()===e||(o||t.type==="number")&&_i(t.value)===e))return;const s=e==null?"":e;t.value!==s&&(t.value=s)}},Lv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ub=(t,e)=>r=>{if(!("key"in r))return;const n=Cr(r.key);if(e.some(o=>o===n||Lv[o]===n))return t(r)},Mv=ee({patchProp:kv},bv);let za;function Bv(){return za||(za=Kp(Mv))}const cb=(...t)=>{const e=Bv().createApp(...t),{mount:r}=e;return e.mount=n=>{const o=Fv(n);if(!o)return;const i=e._component;!ct(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function Fv(t){return Jt(t)?document.querySelector(t):t}var Gn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Zn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ws={exports:{}},Mu=function(e,r){return function(){for(var o=new Array(arguments.length),i=0;i<o.length;i++)o[i]=arguments[i];return e.apply(r,o)}},Uv=Mu,fr=Object.prototype.toString;function _s(t){return Array.isArray(t)}function Mi(t){return typeof t=="undefined"}function zv(t){return t!==null&&!Mi(t)&&t.constructor!==null&&!Mi(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Bu(t){return fr.call(t)==="[object ArrayBuffer]"}function Hv(t){return fr.call(t)==="[object FormData]"}function jv(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Bu(t.buffer),e}function qv(t){return typeof t=="string"}function Vv(t){return typeof t=="number"}function Fu(t){return t!==null&&typeof t=="object"}function co(t){if(fr.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Wv(t){return fr.call(t)==="[object Date]"}function Kv(t){return fr.call(t)==="[object File]"}function Yv(t){return fr.call(t)==="[object Blob]"}function Uu(t){return fr.call(t)==="[object Function]"}function Xv(t){return Fu(t)&&Uu(t.pipe)}function Jv(t){return fr.call(t)==="[object URLSearchParams]"}function Qv(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Gv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function xs(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),_s(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function Bi(){var t={};function e(o,i){co(t[i])&&co(o)?t[i]=Bi(t[i],o):co(o)?t[i]=Bi({},o):_s(o)?t[i]=o.slice():t[i]=o}for(var r=0,n=arguments.length;r<n;r++)xs(arguments[r],e);return t}function Zv(t,e,r){return xs(e,function(o,i){r&&typeof o=="function"?t[i]=Uv(o,r):t[i]=o}),t}function tm(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var fe={isArray:_s,isArrayBuffer:Bu,isBuffer:zv,isFormData:Hv,isArrayBufferView:jv,isString:qv,isNumber:Vv,isObject:Fu,isPlainObject:co,isUndefined:Mi,isDate:Wv,isFile:Kv,isBlob:Yv,isFunction:Uu,isStream:Xv,isURLSearchParams:Jv,isStandardBrowserEnv:Gv,forEach:xs,merge:Bi,extend:Zv,trim:Qv,stripBOM:tm},Or=fe;function Ha(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var zu=function(e,r,n){if(!r)return e;var o;if(n)o=n(r);else if(Or.isURLSearchParams(r))o=r.toString();else{var i=[];Or.forEach(r,function(l,f){l===null||typeof l=="undefined"||(Or.isArray(l)?f=f+"[]":l=[l],Or.forEach(l,function(d){Or.isDate(d)?d=d.toISOString():Or.isObject(d)&&(d=JSON.stringify(d)),i.push(Ha(f)+"="+Ha(d))}))}),o=i.join("&")}if(o){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e},em=fe;function Bo(){this.handlers=[]}Bo.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Bo.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Bo.prototype.forEach=function(e){em.forEach(this.handlers,function(n){n!==null&&e(n)})};var rm=Bo,nm=fe,om=function(e,r){nm.forEach(e,function(o,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=o,delete e[i])})},Hu=function(e,r,n,o,i){return e.config=r,n&&(e.code=n),e.request=o,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},im=Hu,ju=function(e,r,n,o,i){var s=new Error(e);return im(s,r,n,o,i)},sm=ju,am=function(e,r,n){var o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(sm("Request failed with status code "+n.status,n.config,null,n.request,n))},to=fe,lm=to.isStandardBrowserEnv()?function(){return{write:function(r,n,o,i,s,a){var l=[];l.push(r+"="+encodeURIComponent(n)),to.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),to.isString(i)&&l.push("path="+i),to.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),um=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},cm=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},fm=um,dm=cm,hm=function(e,r){return e&&!fm(r)?dm(e,r):r},si=fe,pm=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],vm=function(e){var r={},n,o,i;return e&&si.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),n=si.trim(a.substr(0,i)).toLowerCase(),o=si.trim(a.substr(i+1)),n){if(r[n]&&pm.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([o]):r[n]=r[n]?r[n]+", "+o:o}}),r},ja=fe,mm=ja.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(i){var s=i;return e&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(s){var a=ja.isString(s)?o(s):s;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function Es(t){this.message=t}Es.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Es.prototype.__CANCEL__=!0;var Fo=Es,eo=fe,gm=am,bm=lm,ym=zu,wm=hm,_m=vm,xm=mm,ai=ju,Em=zo,Am=Fo,qa=function(e){return new Promise(function(n,o){var i=e.data,s=e.headers,a=e.responseType,l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}eo.isFormData(i)&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(d+":"+v)}var _=wm(e.baseURL,e.url);u.open(e.method.toUpperCase(),ym(_,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function A(){if(!!u){var $="getAllResponseHeaders"in u?_m(u.getAllResponseHeaders()):null,I=!a||a==="text"||a==="json"?u.responseText:u.response,N={data:I,status:u.status,statusText:u.statusText,headers:$,config:e,request:u};gm(function(V){n(V),f()},function(V){o(V),f()},N),u=null}}if("onloadend"in u?u.onloadend=A:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(A)},u.onabort=function(){!u||(o(ai("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){o(ai("Network Error",e,null,u)),u=null},u.ontimeout=function(){var I=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",N=e.transitional||Em.transitional;e.timeoutErrorMessage&&(I=e.timeoutErrorMessage),o(ai(I,e,N.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},eo.isStandardBrowserEnv()){var M=(e.withCredentials||xm(_))&&e.xsrfCookieName?bm.read(e.xsrfCookieName):void 0;M&&(s[e.xsrfHeaderName]=M)}"setRequestHeader"in u&&eo.forEach(s,function(I,N){typeof i=="undefined"&&N.toLowerCase()==="content-type"?delete s[N]:u.setRequestHeader(N,I)}),eo.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function($){!u||(o(!$||$&&$.type?new Am("canceled"):$),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null),u.send(i)})},Wt=fe,Va=om,$m=Hu,Cm={"Content-Type":"application/x-www-form-urlencoded"};function Wa(t,e){!Wt.isUndefined(t)&&Wt.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Sm(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=qa),t}function Tm(t,e,r){if(Wt.isString(t))try{return(e||JSON.parse)(t),Wt.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var Uo={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Sm(),transformRequest:[function(e,r){return Va(r,"Accept"),Va(r,"Content-Type"),Wt.isFormData(e)||Wt.isArrayBuffer(e)||Wt.isBuffer(e)||Wt.isStream(e)||Wt.isFile(e)||Wt.isBlob(e)?e:Wt.isArrayBufferView(e)?e.buffer:Wt.isURLSearchParams(e)?(Wa(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Wt.isObject(e)||r&&r["Content-Type"]==="application/json"?(Wa(r,"application/json"),Tm(e)):e}],transformResponse:[function(e){var r=this.transitional||Uo.transitional,n=r&&r.silentJSONParsing,o=r&&r.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||o&&Wt.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?$m(s,this,"E_JSON_PARSE"):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Wt.forEach(["delete","get","head"],function(e){Uo.headers[e]={}});Wt.forEach(["post","put","patch"],function(e){Uo.headers[e]=Wt.merge(Cm)});var zo=Uo,Om=fe,Rm=zo,Pm=function(e,r,n){var o=this||Rm;return Om.forEach(n,function(s){e=s.call(o,e,r)}),e},qu=function(e){return!!(e&&e.__CANCEL__)},Ka=fe,li=Pm,km=qu,Im=zo,Dm=Fo;function ui(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Dm("canceled")}var Nm=function(e){ui(e),e.headers=e.headers||{},e.data=li.call(e,e.data,e.headers,e.transformRequest),e.headers=Ka.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ka.forEach(["delete","get","head","post","put","patch","common"],function(o){delete e.headers[o]});var r=e.adapter||Im.adapter;return r(e).then(function(o){return ui(e),o.data=li.call(e,o.data,o.headers,e.transformResponse),o},function(o){return km(o)||(ui(e),o&&o.response&&(o.response.data=li.call(e,o.response.data,o.response.headers,e.transformResponse))),Promise.reject(o)})},he=fe,Vu=function(e,r){r=r||{};var n={};function o(u,d){return he.isPlainObject(u)&&he.isPlainObject(d)?he.merge(u,d):he.isPlainObject(d)?he.merge({},d):he.isArray(d)?d.slice():d}function i(u){if(he.isUndefined(r[u])){if(!he.isUndefined(e[u]))return o(void 0,e[u])}else return o(e[u],r[u])}function s(u){if(!he.isUndefined(r[u]))return o(void 0,r[u])}function a(u){if(he.isUndefined(r[u])){if(!he.isUndefined(e[u]))return o(void 0,e[u])}else return o(void 0,r[u])}function l(u){if(u in r)return o(e[u],r[u]);if(u in e)return o(void 0,e[u])}var f={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return he.forEach(Object.keys(e).concat(Object.keys(r)),function(d){var v=f[d]||i,_=v(d);he.isUndefined(_)&&v!==l||(n[d]=_)}),n},Wu={version:"0.26.0"},Lm=Wu.version,As={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){As[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var Ya={};As.transitional=function(e,r,n){function o(i,s){return"[Axios v"+Lm+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return function(i,s,a){if(e===!1)throw new Error(o(s," has been removed"+(r?" in "+r:"")));return r&&!Ya[s]&&(Ya[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,s,a):!0}};function Mm(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),o=n.length;o-- >0;){var i=n[o],s=e[i];if(s){var a=t[i],l=a===void 0||s(a,i,t);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+i)}}var Bm={assertOptions:Mm,validators:As},Ku=fe,Fm=zu,Xa=rm,Ja=Nm,Ho=Vu,Yu=Bm,Rr=Yu.validators;function jn(t){this.defaults=t,this.interceptors={request:new Xa,response:new Xa}}jn.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Ho(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Yu.assertOptions(n,{silentJSONParsing:Rr.transitional(Rr.boolean),forcedJSONParsing:Rr.transitional(Rr.boolean),clarifyTimeoutError:Rr.transitional(Rr.boolean)},!1);var o=[],i=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(r)===!1||(i=i&&_.synchronous,o.unshift(_.fulfilled,_.rejected))});var s=[];this.interceptors.response.forEach(function(_){s.push(_.fulfilled,_.rejected)});var a;if(!i){var l=[Ja,void 0];for(Array.prototype.unshift.apply(l,o),l=l.concat(s),a=Promise.resolve(r);l.length;)a=a.then(l.shift(),l.shift());return a}for(var f=r;o.length;){var u=o.shift(),d=o.shift();try{f=u(f)}catch(v){d(v);break}}try{a=Ja(f)}catch(v){return Promise.reject(v)}for(;s.length;)a=a.then(s.shift(),s.shift());return a};jn.prototype.getUri=function(e){return e=Ho(this.defaults,e),Fm(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ku.forEach(["delete","get","head","options"],function(e){jn.prototype[e]=function(r,n){return this.request(Ho(n||{},{method:e,url:r,data:(n||{}).data}))}});Ku.forEach(["post","put","patch"],function(e){jn.prototype[e]=function(r,n,o){return this.request(Ho(o||{},{method:e,url:r,data:n}))}});var Um=jn,zm=Fo;function Zr(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(o){e=o});var r=this;this.promise.then(function(n){if(!!r._listeners){var o,i=r._listeners.length;for(o=0;o<i;o++)r._listeners[o](n);r._listeners=null}}),this.promise.then=function(n){var o,i=new Promise(function(s){r.subscribe(s),o=s}).then(n);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o){r.reason||(r.reason=new zm(o),e(r.reason))})}Zr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Zr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Zr.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};Zr.source=function(){var e,r=new Zr(function(o){e=o});return{token:r,cancel:e}};var Hm=Zr,jm=function(e){return function(n){return e.apply(null,n)}},qm=fe,Vm=function(e){return qm.isObject(e)&&e.isAxiosError===!0},Qa=fe,Wm=Mu,fo=Um,Km=Vu,Ym=zo;function Xu(t){var e=new fo(t),r=Wm(fo.prototype.request,e);return Qa.extend(r,fo.prototype,e),Qa.extend(r,e),r.create=function(o){return Xu(Km(t,o))},r}var Me=Xu(Ym);Me.Axios=fo;Me.Cancel=Fo;Me.CancelToken=Hm;Me.isCancel=qu;Me.VERSION=Wu.version;Me.all=function(e){return Promise.all(e)};Me.spread=jm;Me.isAxiosError=Vm;ws.exports=Me;ws.exports.default=Me;var fb=ws.exports,Ju={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(t,e){(function(r){t.exports=r()})(function(){return function r(n,o,i){function s(f,u){if(!o[f]){if(!n[f]){var d=typeof Zn=="function"&&Zn;if(!u&&d)return d(f,!0);if(a)return a(f,!0);var v=new Error("Cannot find module '"+f+"'");throw v.code="MODULE_NOT_FOUND",v}var _=o[f]={exports:{}};n[f][0].call(_.exports,function(A){var M=n[f][1][A];return s(M||A)},_,_.exports,r,n,o,i)}return o[f].exports}for(var a=typeof Zn=="function"&&Zn,l=0;l<i.length;l++)s(i[l]);return s}({1:[function(r,n,o){(function(i){var s=i.MutationObserver||i.WebKitMutationObserver,a;if(s){var l=0,f=new s(A),u=i.document.createTextNode("");f.observe(u,{characterData:!0}),a=function(){u.data=l=++l%2}}else if(!i.setImmediate&&typeof i.MessageChannel!="undefined"){var d=new i.MessageChannel;d.port1.onmessage=A,a=function(){d.port2.postMessage(0)}}else"document"in i&&"onreadystatechange"in i.document.createElement("script")?a=function(){var $=i.document.createElement("script");$.onreadystatechange=function(){A(),$.onreadystatechange=null,$.parentNode.removeChild($),$=null},i.document.documentElement.appendChild($)}:a=function(){setTimeout(A,0)};var v,_=[];function A(){v=!0;for(var $,I,N=_.length;N;){for(I=_,_=[],$=-1;++$<N;)I[$]();N=_.length}v=!1}n.exports=M;function M($){_.push($)===1&&!v&&a()}}).call(this,typeof Gn!="undefined"?Gn:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(r,n,o){var i=r(1);function s(){}var a={},l=["REJECTED"],f=["FULFILLED"],u=["PENDING"];n.exports=d;function d(T){if(typeof T!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,T!==s&&M(this,T)}d.prototype.catch=function(T){return this.then(null,T)},d.prototype.then=function(T,K){if(typeof T!="function"&&this.state===f||typeof K!="function"&&this.state===l)return this;var W=new this.constructor(s);if(this.state!==u){var et=this.state===f?T:K;_(W,et,this.outcome)}else this.queue.push(new v(W,T,K));return W};function v(T,K,W){this.promise=T,typeof K=="function"&&(this.onFulfilled=K,this.callFulfilled=this.otherCallFulfilled),typeof W=="function"&&(this.onRejected=W,this.callRejected=this.otherCallRejected)}v.prototype.callFulfilled=function(T){a.resolve(this.promise,T)},v.prototype.otherCallFulfilled=function(T){_(this.promise,this.onFulfilled,T)},v.prototype.callRejected=function(T){a.reject(this.promise,T)},v.prototype.otherCallRejected=function(T){_(this.promise,this.onRejected,T)};function _(T,K,W){i(function(){var et;try{et=K(W)}catch(nt){return a.reject(T,nt)}et===T?a.reject(T,new TypeError("Cannot resolve promise with itself")):a.resolve(T,et)})}a.resolve=function(T,K){var W=$(A,K);if(W.status==="error")return a.reject(T,W.value);var et=W.value;if(et)M(T,et);else{T.state=f,T.outcome=K;for(var nt=-1,lt=T.queue.length;++nt<lt;)T.queue[nt].callFulfilled(K)}return T},a.reject=function(T,K){T.state=l,T.outcome=K;for(var W=-1,et=T.queue.length;++W<et;)T.queue[W].callRejected(K);return T};function A(T){var K=T&&T.then;if(T&&(typeof T=="object"||typeof T=="function")&&typeof K=="function")return function(){K.apply(T,arguments)}}function M(T,K){var W=!1;function et(gt){W||(W=!0,a.reject(T,gt))}function nt(gt){W||(W=!0,a.resolve(T,gt))}function lt(){K(nt,et)}var ut=$(lt);ut.status==="error"&&et(ut.value)}function $(T,K){var W={};try{W.value=T(K),W.status="success"}catch(et){W.status="error",W.value=et}return W}d.resolve=I;function I(T){return T instanceof this?T:a.resolve(new this(s),T)}d.reject=N;function N(T){var K=new this(s);return a.reject(K,T)}d.all=tt;function tt(T){var K=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var W=T.length,et=!1;if(!W)return this.resolve([]);for(var nt=new Array(W),lt=0,ut=-1,gt=new this(s);++ut<W;)_t(T[ut],ut);return gt;function _t(Ht,Vt){K.resolve(Ht).then(ht,function(ot){et||(et=!0,a.reject(gt,ot))});function ht(ot){nt[Vt]=ot,++lt===W&&!et&&(et=!0,a.resolve(gt,nt))}}}d.race=V;function V(T){var K=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var W=T.length,et=!1;if(!W)return this.resolve([]);for(var nt=-1,lt=new this(s);++nt<W;)ut(T[nt]);return lt;function ut(gt){K.resolve(gt).then(function(_t){et||(et=!0,a.resolve(lt,_t))},function(_t){et||(et=!0,a.reject(lt,_t))})}}},{"1":1}],3:[function(r,n,o){(function(i){typeof i.Promise!="function"&&(i.Promise=r(2))}).call(this,typeof Gn!="undefined"?Gn:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(r,n,o){var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};function s(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var l=a();function f(){try{if(!l||!l.open)return!1;var c=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),m=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!c||m)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function u(c,m){c=c||[],m=m||{};try{return new Blob(c,m)}catch(b){if(b.name!=="TypeError")throw b;for(var h=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,y=new h,w=0;w<c.length;w+=1)y.append(c[w]);return y.getBlob(m.type)}}typeof Promise=="undefined"&&r(3);var d=Promise;function v(c,m){m&&c.then(function(h){m(null,h)},function(h){m(h)})}function _(c,m,h){typeof m=="function"&&c.then(m),typeof h=="function"&&c.catch(h)}function A(c){return typeof c!="string"&&(console.warn(c+" used as a key, but it is not a string."),c=String(c)),c}function M(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var $="local-forage-detect-blob-support",I=void 0,N={},tt=Object.prototype.toString,V="readonly",T="readwrite";function K(c){for(var m=c.length,h=new ArrayBuffer(m),y=new Uint8Array(h),w=0;w<m;w++)y[w]=c.charCodeAt(w);return h}function W(c){return new d(function(m){var h=c.transaction($,T),y=u([""]);h.objectStore($).put(y,"key"),h.onabort=function(w){w.preventDefault(),w.stopPropagation(),m(!1)},h.oncomplete=function(){var w=navigator.userAgent.match(/Chrome\/(\d+)/),b=navigator.userAgent.match(/Edge\//);m(b||!w||parseInt(w[1],10)>=43)}}).catch(function(){return!1})}function et(c){return typeof I=="boolean"?d.resolve(I):W(c).then(function(m){return I=m,I})}function nt(c){var m=N[c.name],h={};h.promise=new d(function(y,w){h.resolve=y,h.reject=w}),m.deferredOperations.push(h),m.dbReady?m.dbReady=m.dbReady.then(function(){return h.promise}):m.dbReady=h.promise}function lt(c){var m=N[c.name],h=m.deferredOperations.pop();if(h)return h.resolve(),h.promise}function ut(c,m){var h=N[c.name],y=h.deferredOperations.pop();if(y)return y.reject(m),y.promise}function gt(c,m){return new d(function(h,y){if(N[c.name]=N[c.name]||Bt(),c.db)if(m)nt(c),c.db.close();else return h(c.db);var w=[c.name];m&&w.push(c.version);var b=l.open.apply(l,w);m&&(b.onupgradeneeded=function(C){var k=b.result;try{k.createObjectStore(c.storeName),C.oldVersion<=1&&k.createObjectStore($)}catch(L){if(L.name==="ConstraintError")console.warn('The database "'+c.name+'" has been upgraded from version '+C.oldVersion+" to version "+C.newVersion+', but the storage "'+c.storeName+'" already exists.');else throw L}}),b.onerror=function(C){C.preventDefault(),y(b.error)},b.onsuccess=function(){var C=b.result;C.onversionchange=function(k){k.target.close()},h(C),lt(c)}})}function _t(c){return gt(c,!1)}function Ht(c){return gt(c,!0)}function Vt(c,m){if(!c.db)return!0;var h=!c.db.objectStoreNames.contains(c.storeName),y=c.version<c.db.version,w=c.version>c.db.version;if(y&&(c.version!==m&&console.warn('The database "'+c.name+`" can't be downgraded from version `+c.db.version+" to version "+c.version+"."),c.version=c.db.version),w||h){if(h){var b=c.db.version+1;b>c.version&&(c.version=b)}return!0}return!1}function ht(c){return new d(function(m,h){var y=new FileReader;y.onerror=h,y.onloadend=function(w){var b=btoa(w.target.result||"");m({__local_forage_encoded_blob:!0,data:b,type:c.type})},y.readAsBinaryString(c)})}function ot(c){var m=K(atob(c.data));return u([m],{type:c.type})}function vt(c){return c&&c.__local_forage_encoded_blob}function It(c){var m=this,h=m._initReady().then(function(){var y=N[m._dbInfo.name];if(y&&y.dbReady)return y.dbReady});return _(h,c,c),h}function de(c){nt(c);for(var m=N[c.name],h=m.forages,y=0;y<h.length;y++){var w=h[y];w._dbInfo.db&&(w._dbInfo.db.close(),w._dbInfo.db=null)}return c.db=null,_t(c).then(function(b){return c.db=b,Vt(c)?Ht(c):b}).then(function(b){c.db=m.db=b;for(var C=0;C<h.length;C++)h[C]._dbInfo.db=b}).catch(function(b){throw ut(c,b),b})}function kt(c,m,h,y){y===void 0&&(y=1);try{var w=c.db.transaction(c.storeName,m);h(null,w)}catch(b){if(y>0&&(!c.db||b.name==="InvalidStateError"||b.name==="NotFoundError"))return d.resolve().then(function(){if(!c.db||b.name==="NotFoundError"&&!c.db.objectStoreNames.contains(c.storeName)&&c.version<=c.db.version)return c.db&&(c.version=c.db.version+1),Ht(c)}).then(function(){return de(c).then(function(){kt(c,m,h,y-1)})}).catch(h);h(b)}}function Bt(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ft(c){var m=this,h={db:null};if(c)for(var y in c)h[y]=c[y];var w=N[h.name];w||(w=Bt(),N[h.name]=w),w.forages.push(m),m._initReady||(m._initReady=m.ready,m.ready=It);var b=[];function C(){return d.resolve()}for(var k=0;k<w.forages.length;k++){var L=w.forages[k];L!==m&&b.push(L._initReady().catch(C))}var F=w.forages.slice(0);return d.all(b).then(function(){return h.db=w.db,_t(h)}).then(function(j){return h.db=j,Vt(h,m._defaultConfig.version)?Ht(h):j}).then(function(j){h.db=w.db=j,m._dbInfo=h;for(var Q=0;Q<F.length;Q++){var dt=F[Q];dt!==m&&(dt._dbInfo.db=h.db,dt._dbInfo.version=h.version)}})}function me(c,m){var h=this;c=A(c);var y=new d(function(w,b){h.ready().then(function(){kt(h._dbInfo,V,function(C,k){if(C)return b(C);try{var L=k.objectStore(h._dbInfo.storeName),F=L.get(c);F.onsuccess=function(){var j=F.result;j===void 0&&(j=null),vt(j)&&(j=ot(j)),w(j)},F.onerror=function(){b(F.error)}}catch(j){b(j)}})}).catch(b)});return v(y,m),y}function S(c,m){var h=this,y=new d(function(w,b){h.ready().then(function(){kt(h._dbInfo,V,function(C,k){if(C)return b(C);try{var L=k.objectStore(h._dbInfo.storeName),F=L.openCursor(),j=1;F.onsuccess=function(){var Q=F.result;if(Q){var dt=Q.value;vt(dt)&&(dt=ot(dt));var $t=c(dt,Q.key,j++);$t!==void 0?w($t):Q.continue()}else w()},F.onerror=function(){b(F.error)}}catch(Q){b(Q)}})}).catch(b)});return v(y,m),y}function Y(c,m,h){var y=this;c=A(c);var w=new d(function(b,C){var k;y.ready().then(function(){return k=y._dbInfo,tt.call(m)==="[object Blob]"?et(k.db).then(function(L){return L?m:ht(m)}):m}).then(function(L){kt(y._dbInfo,T,function(F,j){if(F)return C(F);try{var Q=j.objectStore(y._dbInfo.storeName);L===null&&(L=void 0);var dt=Q.put(L,c);j.oncomplete=function(){L===void 0&&(L=null),b(L)},j.onabort=j.onerror=function(){var $t=dt.error?dt.error:dt.transaction.error;C($t)}}catch($t){C($t)}})}).catch(C)});return v(w,h),w}function H(c,m){var h=this;c=A(c);var y=new d(function(w,b){h.ready().then(function(){kt(h._dbInfo,T,function(C,k){if(C)return b(C);try{var L=k.objectStore(h._dbInfo.storeName),F=L.delete(c);k.oncomplete=function(){w()},k.onerror=function(){b(F.error)},k.onabort=function(){var j=F.error?F.error:F.transaction.error;b(j)}}catch(j){b(j)}})}).catch(b)});return v(y,m),y}function J(c){var m=this,h=new d(function(y,w){m.ready().then(function(){kt(m._dbInfo,T,function(b,C){if(b)return w(b);try{var k=C.objectStore(m._dbInfo.storeName),L=k.clear();C.oncomplete=function(){y()},C.onabort=C.onerror=function(){var F=L.error?L.error:L.transaction.error;w(F)}}catch(F){w(F)}})}).catch(w)});return v(h,c),h}function bt(c){var m=this,h=new d(function(y,w){m.ready().then(function(){kt(m._dbInfo,V,function(b,C){if(b)return w(b);try{var k=C.objectStore(m._dbInfo.storeName),L=k.count();L.onsuccess=function(){y(L.result)},L.onerror=function(){w(L.error)}}catch(F){w(F)}})}).catch(w)});return v(h,c),h}function xt(c,m){var h=this,y=new d(function(w,b){if(c<0){w(null);return}h.ready().then(function(){kt(h._dbInfo,V,function(C,k){if(C)return b(C);try{var L=k.objectStore(h._dbInfo.storeName),F=!1,j=L.openKeyCursor();j.onsuccess=function(){var Q=j.result;if(!Q){w(null);return}c===0||F?w(Q.key):(F=!0,Q.advance(c))},j.onerror=function(){b(j.error)}}catch(Q){b(Q)}})}).catch(b)});return v(y,m),y}function st(c){var m=this,h=new d(function(y,w){m.ready().then(function(){kt(m._dbInfo,V,function(b,C){if(b)return w(b);try{var k=C.objectStore(m._dbInfo.storeName),L=k.openKeyCursor(),F=[];L.onsuccess=function(){var j=L.result;if(!j){y(F);return}F.push(j.key),j.continue()},L.onerror=function(){w(L.error)}}catch(j){w(j)}})}).catch(w)});return v(h,c),h}function it(c,m){m=M.apply(this,arguments);var h=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||h.name,c.storeName=c.storeName||h.storeName);var y=this,w;if(!c.name)w=d.reject("Invalid arguments");else{var b=c.name===h.name&&y._dbInfo.db,C=b?d.resolve(y._dbInfo.db):_t(c).then(function(k){var L=N[c.name],F=L.forages;L.db=k;for(var j=0;j<F.length;j++)F[j]._dbInfo.db=k;return k});c.storeName?w=C.then(function(k){if(!!k.objectStoreNames.contains(c.storeName)){var L=k.version+1;nt(c);var F=N[c.name],j=F.forages;k.close();for(var Q=0;Q<j.length;Q++){var dt=j[Q];dt._dbInfo.db=null,dt._dbInfo.version=L}var $t=new d(function(St,Mt){var Nt=l.open(c.name,L);Nt.onerror=function(ge){var un=Nt.result;un.close(),Mt(ge)},Nt.onupgradeneeded=function(){var ge=Nt.result;ge.deleteObjectStore(c.storeName)},Nt.onsuccess=function(){var ge=Nt.result;ge.close(),St(ge)}});return $t.then(function(St){F.db=St;for(var Mt=0;Mt<j.length;Mt++){var Nt=j[Mt];Nt._dbInfo.db=St,lt(Nt._dbInfo)}}).catch(function(St){throw(ut(c,St)||d.resolve()).catch(function(){}),St})}}):w=C.then(function(k){nt(c);var L=N[c.name],F=L.forages;k.close();for(var j=0;j<F.length;j++){var Q=F[j];Q._dbInfo.db=null}var dt=new d(function($t,St){var Mt=l.deleteDatabase(c.name);Mt.onerror=function(){var Nt=Mt.result;Nt&&Nt.close(),St(Mt.error)},Mt.onblocked=function(){console.warn('dropInstance blocked for database "'+c.name+'" until all open connections are closed')},Mt.onsuccess=function(){var Nt=Mt.result;Nt&&Nt.close(),$t(Nt)}});return dt.then(function($t){L.db=$t;for(var St=0;St<F.length;St++){var Mt=F[St];lt(Mt._dbInfo)}}).catch(function($t){throw(ut(c,$t)||d.resolve()).catch(function(){}),$t})})}return v(w,m),w}var p={_driver:"asyncStorage",_initStorage:Ft,_support:f(),iterate:S,getItem:me,setItem:Y,removeItem:H,clear:J,length:bt,key:xt,keys:st,dropInstance:it};function g(){return typeof openDatabase=="function"}var x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",R="~~local_forage_type~",O=/^~~local_forage_type~([^~]+)~/,B="__lfsc__:",q=B.length,D="arbf",U="blob",P="si08",G="ui08",X="uic8",Z="si16",rt="si32",ft="ur16",Et="ui32",At="fl32",Tt="fl64",ne=q+D.length,Be=Object.prototype.toString;function sn(c){var m=c.length*.75,h=c.length,y,w=0,b,C,k,L;c[c.length-1]==="="&&(m--,c[c.length-2]==="="&&m--);var F=new ArrayBuffer(m),j=new Uint8Array(F);for(y=0;y<h;y+=4)b=x.indexOf(c[y]),C=x.indexOf(c[y+1]),k=x.indexOf(c[y+2]),L=x.indexOf(c[y+3]),j[w++]=b<<2|C>>4,j[w++]=(C&15)<<4|k>>2,j[w++]=(k&3)<<6|L&63;return F}function Fe(c){var m=new Uint8Array(c),h="",y;for(y=0;y<m.length;y+=3)h+=x[m[y]>>2],h+=x[(m[y]&3)<<4|m[y+1]>>4],h+=x[(m[y+1]&15)<<2|m[y+2]>>6],h+=x[m[y+2]&63];return m.length%3===2?h=h.substring(0,h.length-1)+"=":m.length%3===1&&(h=h.substring(0,h.length-2)+"=="),h}function qn(c,m){var h="";if(c&&(h=Be.call(c)),c&&(h==="[object ArrayBuffer]"||c.buffer&&Be.call(c.buffer)==="[object ArrayBuffer]")){var y,w=B;c instanceof ArrayBuffer?(y=c,w+=D):(y=c.buffer,h==="[object Int8Array]"?w+=P:h==="[object Uint8Array]"?w+=G:h==="[object Uint8ClampedArray]"?w+=X:h==="[object Int16Array]"?w+=Z:h==="[object Uint16Array]"?w+=ft:h==="[object Int32Array]"?w+=rt:h==="[object Uint32Array]"?w+=Et:h==="[object Float32Array]"?w+=At:h==="[object Float64Array]"?w+=Tt:m(new Error("Failed to get type for BinaryArray"))),m(w+Fe(y))}else if(h==="[object Blob]"){var b=new FileReader;b.onload=function(){var C=R+c.type+"~"+Fe(this.result);m(B+U+C)},b.readAsArrayBuffer(c)}else try{m(JSON.stringify(c))}catch(C){console.error("Couldn't convert value into a JSON string: ",c),m(null,C)}}function Zt(c){if(c.substring(0,q)!==B)return JSON.parse(c);var m=c.substring(ne),h=c.substring(q,ne),y;if(h===U&&O.test(m)){var w=m.match(O);y=w[1],m=m.substring(w[0].length)}var b=sn(m);switch(h){case D:return b;case U:return u([b],{type:y});case P:return new Int8Array(b);case G:return new Uint8Array(b);case X:return new Uint8ClampedArray(b);case Z:return new Int16Array(b);case ft:return new Uint16Array(b);case rt:return new Int32Array(b);case Et:return new Uint32Array(b);case At:return new Float32Array(b);case Tt:return new Float64Array(b);default:throw new Error("Unkown type: "+h)}}var oe={serialize:qn,deserialize:Zt,stringToBuffer:sn,bufferToString:Fe};function an(c,m,h,y){c.executeSql("CREATE TABLE IF NOT EXISTS "+m.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],h,y)}function ac(c){var m=this,h={db:null};if(c)for(var y in c)h[y]=typeof c[y]!="string"?c[y].toString():c[y];var w=new d(function(b,C){try{h.db=openDatabase(h.name,String(h.version),h.description,h.size)}catch(k){return C(k)}h.db.transaction(function(k){an(k,h,function(){m._dbInfo=h,b()},function(L,F){C(F)})},C)});return h.serializer=oe,w}function Qe(c,m,h,y,w,b){c.executeSql(h,y,w,function(C,k){k.code===k.SYNTAX_ERR?C.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[m.storeName],function(L,F){F.rows.length?b(L,k):an(L,m,function(){L.executeSql(h,y,w,b)},b)},b):b(C,k)},b)}function lc(c,m){var h=this;c=A(c);var y=new d(function(w,b){h.ready().then(function(){var C=h._dbInfo;C.db.transaction(function(k){Qe(k,C,"SELECT * FROM "+C.storeName+" WHERE key = ? LIMIT 1",[c],function(L,F){var j=F.rows.length?F.rows.item(0).value:null;j&&(j=C.serializer.deserialize(j)),w(j)},function(L,F){b(F)})})}).catch(b)});return v(y,m),y}function uc(c,m){var h=this,y=new d(function(w,b){h.ready().then(function(){var C=h._dbInfo;C.db.transaction(function(k){Qe(k,C,"SELECT * FROM "+C.storeName,[],function(L,F){for(var j=F.rows,Q=j.length,dt=0;dt<Q;dt++){var $t=j.item(dt),St=$t.value;if(St&&(St=C.serializer.deserialize(St)),St=c(St,$t.key,dt+1),St!==void 0){w(St);return}}w()},function(L,F){b(F)})})}).catch(b)});return v(y,m),y}function Ts(c,m,h,y){var w=this;c=A(c);var b=new d(function(C,k){w.ready().then(function(){m===void 0&&(m=null);var L=m,F=w._dbInfo;F.serializer.serialize(m,function(j,Q){Q?k(Q):F.db.transaction(function(dt){Qe(dt,F,"INSERT OR REPLACE INTO "+F.storeName+" (key, value) VALUES (?, ?)",[c,j],function(){C(L)},function($t,St){k(St)})},function(dt){if(dt.code===dt.QUOTA_ERR){if(y>0){C(Ts.apply(w,[c,L,h,y-1]));return}k(dt)}})})}).catch(k)});return v(b,h),b}function cc(c,m,h){return Ts.apply(this,[c,m,h,1])}function fc(c,m){var h=this;c=A(c);var y=new d(function(w,b){h.ready().then(function(){var C=h._dbInfo;C.db.transaction(function(k){Qe(k,C,"DELETE FROM "+C.storeName+" WHERE key = ?",[c],function(){w()},function(L,F){b(F)})})}).catch(b)});return v(y,m),y}function dc(c){var m=this,h=new d(function(y,w){m.ready().then(function(){var b=m._dbInfo;b.db.transaction(function(C){Qe(C,b,"DELETE FROM "+b.storeName,[],function(){y()},function(k,L){w(L)})})}).catch(w)});return v(h,c),h}function hc(c){var m=this,h=new d(function(y,w){m.ready().then(function(){var b=m._dbInfo;b.db.transaction(function(C){Qe(C,b,"SELECT COUNT(key) as c FROM "+b.storeName,[],function(k,L){var F=L.rows.item(0).c;y(F)},function(k,L){w(L)})})}).catch(w)});return v(h,c),h}function pc(c,m){var h=this,y=new d(function(w,b){h.ready().then(function(){var C=h._dbInfo;C.db.transaction(function(k){Qe(k,C,"SELECT key FROM "+C.storeName+" WHERE id = ? LIMIT 1",[c+1],function(L,F){var j=F.rows.length?F.rows.item(0).key:null;w(j)},function(L,F){b(F)})})}).catch(b)});return v(y,m),y}function vc(c){var m=this,h=new d(function(y,w){m.ready().then(function(){var b=m._dbInfo;b.db.transaction(function(C){Qe(C,b,"SELECT key FROM "+b.storeName,[],function(k,L){for(var F=[],j=0;j<L.rows.length;j++)F.push(L.rows.item(j).key);y(F)},function(k,L){w(L)})})}).catch(w)});return v(h,c),h}function mc(c){return new d(function(m,h){c.transaction(function(y){y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(w,b){for(var C=[],k=0;k<b.rows.length;k++)C.push(b.rows.item(k).name);m({db:c,storeNames:C})},function(w,b){h(b)})},function(y){h(y)})})}function gc(c,m){m=M.apply(this,arguments);var h=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||h.name,c.storeName=c.storeName||h.storeName);var y=this,w;return c.name?w=new d(function(b){var C;c.name===h.name?C=y._dbInfo.db:C=openDatabase(c.name,"","",0),c.storeName?b({db:C,storeNames:[c.storeName]}):b(mc(C))}).then(function(b){return new d(function(C,k){b.db.transaction(function(L){function F($t){return new d(function(St,Mt){L.executeSql("DROP TABLE IF EXISTS "+$t,[],function(){St()},function(Nt,ge){Mt(ge)})})}for(var j=[],Q=0,dt=b.storeNames.length;Q<dt;Q++)j.push(F(b.storeNames[Q]));d.all(j).then(function(){C()}).catch(function($t){k($t)})},function(L){k(L)})})}):w=d.reject("Invalid arguments"),v(w,m),w}var bc={_driver:"webSQLStorage",_initStorage:ac,_support:g(),iterate:uc,getItem:lc,setItem:cc,removeItem:fc,clear:dc,length:hc,key:pc,keys:vc,dropInstance:gc};function yc(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Os(c,m){var h=c.name+"/";return c.storeName!==m.storeName&&(h+=c.storeName+"/"),h}function wc(){var c="_localforage_support_test";try{return localStorage.setItem(c,!0),localStorage.removeItem(c),!1}catch{return!0}}function _c(){return!wc()||localStorage.length>0}function xc(c){var m=this,h={};if(c)for(var y in c)h[y]=c[y];return h.keyPrefix=Os(c,m._defaultConfig),_c()?(m._dbInfo=h,h.serializer=oe,d.resolve()):d.reject()}function Ec(c){var m=this,h=m.ready().then(function(){for(var y=m._dbInfo.keyPrefix,w=localStorage.length-1;w>=0;w--){var b=localStorage.key(w);b.indexOf(y)===0&&localStorage.removeItem(b)}});return v(h,c),h}function Ac(c,m){var h=this;c=A(c);var y=h.ready().then(function(){var w=h._dbInfo,b=localStorage.getItem(w.keyPrefix+c);return b&&(b=w.serializer.deserialize(b)),b});return v(y,m),y}function $c(c,m){var h=this,y=h.ready().then(function(){for(var w=h._dbInfo,b=w.keyPrefix,C=b.length,k=localStorage.length,L=1,F=0;F<k;F++){var j=localStorage.key(F);if(j.indexOf(b)===0){var Q=localStorage.getItem(j);if(Q&&(Q=w.serializer.deserialize(Q)),Q=c(Q,j.substring(C),L++),Q!==void 0)return Q}}});return v(y,m),y}function Cc(c,m){var h=this,y=h.ready().then(function(){var w=h._dbInfo,b;try{b=localStorage.key(c)}catch{b=null}return b&&(b=b.substring(w.keyPrefix.length)),b});return v(y,m),y}function Sc(c){var m=this,h=m.ready().then(function(){for(var y=m._dbInfo,w=localStorage.length,b=[],C=0;C<w;C++){var k=localStorage.key(C);k.indexOf(y.keyPrefix)===0&&b.push(k.substring(y.keyPrefix.length))}return b});return v(h,c),h}function Tc(c){var m=this,h=m.keys().then(function(y){return y.length});return v(h,c),h}function Oc(c,m){var h=this;c=A(c);var y=h.ready().then(function(){var w=h._dbInfo;localStorage.removeItem(w.keyPrefix+c)});return v(y,m),y}function Rc(c,m,h){var y=this;c=A(c);var w=y.ready().then(function(){m===void 0&&(m=null);var b=m;return new d(function(C,k){var L=y._dbInfo;L.serializer.serialize(m,function(F,j){if(j)k(j);else try{localStorage.setItem(L.keyPrefix+c,F),C(b)}catch(Q){(Q.name==="QuotaExceededError"||Q.name==="NS_ERROR_DOM_QUOTA_REACHED")&&k(Q),k(Q)}})})});return v(w,h),w}function Pc(c,m){if(m=M.apply(this,arguments),c=typeof c!="function"&&c||{},!c.name){var h=this.config();c.name=c.name||h.name,c.storeName=c.storeName||h.storeName}var y=this,w;return c.name?w=new d(function(b){c.storeName?b(Os(c,y._defaultConfig)):b(c.name+"/")}).then(function(b){for(var C=localStorage.length-1;C>=0;C--){var k=localStorage.key(C);k.indexOf(b)===0&&localStorage.removeItem(k)}}):w=d.reject("Invalid arguments"),v(w,m),w}var kc={_driver:"localStorageWrapper",_initStorage:xc,_support:yc(),iterate:$c,getItem:Ac,setItem:Rc,removeItem:Oc,clear:Ec,length:Tc,key:Cc,keys:Sc,dropInstance:Pc},Ic=function(m,h){return m===h||typeof m=="number"&&typeof h=="number"&&isNaN(m)&&isNaN(h)},Dc=function(m,h){for(var y=m.length,w=0;w<y;){if(Ic(m[w],h))return!0;w++}return!1},Rs=Array.isArray||function(c){return Object.prototype.toString.call(c)==="[object Array]"},ln={},Ps={},Sr={INDEXEDDB:p,WEBSQL:bc,LOCALSTORAGE:kc},Nc=[Sr.INDEXEDDB._driver,Sr.WEBSQL._driver,Sr.LOCALSTORAGE._driver],Vn=["dropInstance"],qo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Vn),Lc={description:"",driver:Nc.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Mc(c,m){c[m]=function(){var h=arguments;return c.ready().then(function(){return c[m].apply(c,h)})}}function Vo(){for(var c=1;c<arguments.length;c++){var m=arguments[c];if(m)for(var h in m)m.hasOwnProperty(h)&&(Rs(m[h])?arguments[0][h]=m[h].slice():arguments[0][h]=m[h])}return arguments[0]}var Bc=function(){function c(m){s(this,c);for(var h in Sr)if(Sr.hasOwnProperty(h)){var y=Sr[h],w=y._driver;this[h]=w,ln[w]||this.defineDriver(y)}this._defaultConfig=Vo({},Lc),this._config=Vo({},this._defaultConfig,m),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return c.prototype.config=function(h){if((typeof h=="undefined"?"undefined":i(h))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var y in h){if(y==="storeName"&&(h[y]=h[y].replace(/\W/g,"_")),y==="version"&&typeof h[y]!="number")return new Error("Database version must be a number.");this._config[y]=h[y]}return"driver"in h&&h.driver?this.setDriver(this._config.driver):!0}else return typeof h=="string"?this._config[h]:this._config},c.prototype.defineDriver=function(h,y,w){var b=new d(function(C,k){try{var L=h._driver,F=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!h._driver){k(F);return}for(var j=qo.concat("_initStorage"),Q=0,dt=j.length;Q<dt;Q++){var $t=j[Q],St=!Dc(Vn,$t);if((St||h[$t])&&typeof h[$t]!="function"){k(F);return}}var Mt=function(){for(var un=function(zc){return function(){var Hc=new Error("Method "+zc+" is not implemented by the current driver"),ks=d.reject(Hc);return v(ks,arguments[arguments.length-1]),ks}},Wo=0,Uc=Vn.length;Wo<Uc;Wo++){var Ko=Vn[Wo];h[Ko]||(h[Ko]=un(Ko))}};Mt();var Nt=function(un){ln[L]&&console.info("Redefining LocalForage driver: "+L),ln[L]=h,Ps[L]=un,C()};"_support"in h?h._support&&typeof h._support=="function"?h._support().then(Nt,k):Nt(!!h._support):Nt(!0)}catch(ge){k(ge)}});return _(b,y,w),b},c.prototype.driver=function(){return this._driver||null},c.prototype.getDriver=function(h,y,w){var b=ln[h]?d.resolve(ln[h]):d.reject(new Error("Driver not found."));return _(b,y,w),b},c.prototype.getSerializer=function(h){var y=d.resolve(oe);return _(y,h),y},c.prototype.ready=function(h){var y=this,w=y._driverSet.then(function(){return y._ready===null&&(y._ready=y._initDriver()),y._ready});return _(w,h,h),w},c.prototype.setDriver=function(h,y,w){var b=this;Rs(h)||(h=[h]);var C=this._getSupportedDrivers(h);function k(){b._config.driver=b.driver()}function L(Q){return b._extend(Q),k(),b._ready=b._initStorage(b._config),b._ready}function F(Q){return function(){var dt=0;function $t(){for(;dt<Q.length;){var St=Q[dt];return dt++,b._dbInfo=null,b._ready=null,b.getDriver(St).then(L).catch($t)}k();var Mt=new Error("No available storage method found.");return b._driverSet=d.reject(Mt),b._driverSet}return $t()}}var j=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=j.then(function(){var Q=C[0];return b._dbInfo=null,b._ready=null,b.getDriver(Q).then(function(dt){b._driver=dt._driver,k(),b._wrapLibraryMethodsWithReady(),b._initDriver=F(C)})}).catch(function(){k();var Q=new Error("No available storage method found.");return b._driverSet=d.reject(Q),b._driverSet}),_(this._driverSet,y,w),this._driverSet},c.prototype.supports=function(h){return!!Ps[h]},c.prototype._extend=function(h){Vo(this,h)},c.prototype._getSupportedDrivers=function(h){for(var y=[],w=0,b=h.length;w<b;w++){var C=h[w];this.supports(C)&&y.push(C)}return y},c.prototype._wrapLibraryMethodsWithReady=function(){for(var h=0,y=qo.length;h<y;h++)Mc(this,qo[h])},c.prototype.createInstance=function(h){return new c(h)},c}(),Fc=new Bc;n.exports=Fc},{"3":3}]},{},[4])(4)})})(Ju);var db=Ju.exports;/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Qu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",on=t=>Qu?Symbol(t):"_vr_"+t,Xm=on("rvlm"),Ga=on("rvd"),$s=on("r"),Cs=on("rl"),Fi=on("rvl"),Lr=typeof window!="undefined";function Jm(t){return t.__esModule||Qu&&t[Symbol.toStringTag]==="Module"}const Ot=Object.assign;function ci(t,e){const r={};for(const n in e){const o=e[n];r[n]=Array.isArray(o)?o.map(t):t(o)}return r}const An=()=>{},Qm=/\/$/,Gm=t=>t.replace(Qm,"");function fi(t,e,r="/"){let n,o={},i="",s="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(n=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),o=t(i)),l>-1&&(n=n||e.slice(0,l),s=e.slice(l,e.length)),n=rg(n!=null?n:e,r),{fullPath:n+(i&&"?")+i+s,path:n,query:o,hash:s}}function Zm(t,e){const r=e.query?t(e.query):"";return e.path+(r&&"?")+r+(e.hash||"")}function Za(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tg(t,e,r){const n=e.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&tn(e.matched[n],r.matched[o])&&Gu(e.params,r.params)&&t(e.query)===t(r.query)&&e.hash===r.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(!eg(t[r],e[r]))return!1;return!0}function eg(t,e){return Array.isArray(t)?tl(t,e):Array.isArray(e)?tl(e,t):t===e}function tl(t,e){return Array.isArray(e)?t.length===e.length&&t.every((r,n)=>r===e[n]):t.length===1&&t[0]===e}function rg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const r=e.split("/"),n=t.split("/");let o=r.length-1,i,s;for(i=0;i<n.length;i++)if(s=n[i],!(o===1||s==="."))if(s==="..")o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(i-(i===n.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var $n;(function(t){t.back="back",t.forward="forward",t.unknown=""})($n||($n={}));function ng(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gm(t)}const og=/^[^#]+#/;function ig(t,e){return t.replace(og,"#")+e}function sg(t,e){const r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-r.left-(e.left||0),top:n.top-r.top-(e.top||0)}}const jo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ag(t){let e;if("el"in t){const r=t.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;e=sg(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function el(t,e){return(history.state?history.state.position-e:-1)+t}const Ui=new Map;function lg(t,e){Ui.set(t,e)}function ug(t){const e=Ui.get(t);return Ui.delete(t),e}let cg=()=>location.protocol+"//"+location.host;function Zu(t,e){const{pathname:r,search:n,hash:o}=e,i=t.indexOf("#");if(i>-1){let a=o.includes(t.slice(i))?t.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Za(l,"")}return Za(r,t)+n+o}function fg(t,e,r,n){let o=[],i=[],s=null;const a=({state:v})=>{const _=Zu(t,location),A=r.value,M=e.value;let $=0;if(v){if(r.value=_,e.value=v,s&&s===A){s=null;return}$=M?v.position-M.position:0}else n(_);o.forEach(I=>{I(r.value,A,{delta:$,type:Bn.pop,direction:$?$>0?$n.forward:$n.back:$n.unknown})})};function l(){s=r.value}function f(v){o.push(v);const _=()=>{const A=o.indexOf(v);A>-1&&o.splice(A,1)};return i.push(_),_}function u(){const{history:v}=window;!v.state||v.replaceState(Ot({},v.state,{scroll:jo()}),"")}function d(){for(const v of i)v();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:f,destroy:d}}function rl(t,e,r,n=!1,o=!1){return{back:t,current:e,forward:r,replaced:n,position:window.history.length,scroll:o?jo():null}}function dg(t){const{history:e,location:r}=window,n={value:Zu(t,r)},o={value:e.state};o.value||i(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,f,u){const d=t.indexOf("#"),v=d>-1?(r.host&&document.querySelector("base")?t:t.slice(d))+l:cg()+t+l;try{e[u?"replaceState":"pushState"](f,"",v),o.value=f}catch(_){console.error(_),r[u?"replace":"assign"](v)}}function s(l,f){const u=Ot({},e.state,rl(o.value.back,l,o.value.forward,!0),f,{position:o.value.position});i(l,u,!0),n.value=l}function a(l,f){const u=Ot({},o.value,e.state,{forward:l,scroll:jo()});i(u.current,u,!0);const d=Ot({},rl(n.value,l,null),{position:u.position+1},f);i(l,d,!1),n.value=l}return{location:n,state:o,push:a,replace:s}}function hg(t){t=ng(t);const e=dg(t),r=fg(t,e.state,e.location,e.replace);function n(i,s=!0){s||r.pauseListeners(),history.go(i)}const o=Ot({location:"",base:t,go:n,createHref:ig.bind(null,t)},e,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function hb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hg(t)}function pg(t){return typeof t=="string"||t&&typeof t=="object"}function tc(t){return typeof t=="string"||typeof t=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ec=on("nf");var nl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nl||(nl={}));function en(t,e){return Ot(new Error,{type:t,[ec]:!0},e)}function mr(t,e){return t instanceof Error&&ec in t&&(e==null||!!(t.type&e))}const ol="[^/]+?",vg={sensitive:!1,strict:!1,start:!0,end:!0},mg=/[.+*?^${}()[\]/\\]/g;function gg(t,e){const r=Ot({},vg,e),n=[];let o=r.start?"^":"";const i=[];for(const f of t){const u=f.length?[]:[90];r.strict&&!f.length&&(o+="/");for(let d=0;d<f.length;d++){const v=f[d];let _=40+(r.sensitive?.25:0);if(v.type===0)d||(o+="/"),o+=v.value.replace(mg,"\\$&"),_+=40;else if(v.type===1){const{value:A,repeatable:M,optional:$,regexp:I}=v;i.push({name:A,repeatable:M,optional:$});const N=I||ol;if(N!==ol){_+=10;try{new RegExp(`(${N})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${A}" (${N}): `+V.message)}}let tt=M?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(tt=$&&f.length<2?`(?:/${tt})`:"/"+tt),$&&(tt+="?"),o+=tt,_+=20,$&&(_+=-8),M&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}n.push(u)}if(r.strict&&r.end){const f=n.length-1;n[f][n[f].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const s=new RegExp(o,r.sensitive?"":"i");function a(f){const u=f.match(s),d={};if(!u)return null;for(let v=1;v<u.length;v++){const _=u[v]||"",A=i[v-1];d[A.name]=_&&A.repeatable?_.split("/"):_}return d}function l(f){let u="",d=!1;for(const v of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const _ of v)if(_.type===0)u+=_.value;else if(_.type===1){const{value:A,repeatable:M,optional:$}=_,I=A in f?f[A]:"";if(Array.isArray(I)&&!M)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const N=Array.isArray(I)?I.join("/"):I;if(!N)if($)v.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=N}}return u}return{re:s,score:n,keys:i,parse:a,stringify:l}}function bg(t,e){let r=0;for(;r<t.length&&r<e.length;){const n=e[r]-t[r];if(n)return n;r++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yg(t,e){let r=0;const n=t.score,o=e.score;for(;r<n.length&&r<o.length;){const i=bg(n[r],o[r]);if(i)return i;r++}return o.length-n.length}const wg={type:0,value:""},_g=/[a-zA-Z0-9_]/;function xg(t){if(!t)return[[]];if(t==="/")return[[wg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${r})/"${f}": ${_}`)}let r=0,n=r;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,f="",u="";function d(){!f||(r===0?i.push({type:0,value:f}):r===1||r===2||r===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(f&&d(),s()):l===":"?(d(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:_g.test(l)?v():(d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return r===2&&e(`Unfinished custom RegExp for param "${f}"`),d(),s(),o}function Eg(t,e,r){const n=gg(xg(t.path),r),o=Ot(n,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function Ag(t,e){const r=[],n=new Map;e=sl({strict:!1,end:!0,sensitive:!1},e);function o(u){return n.get(u)}function i(u,d,v){const _=!v,A=Cg(u);A.aliasOf=v&&v.record;const M=sl(e,u),$=[A];if("alias"in u){const tt=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of tt)$.push(Ot({},A,{components:v?v.record.components:A.components,path:V,aliasOf:v?v.record:A}))}let I,N;for(const tt of $){const{path:V}=tt;if(d&&V[0]!=="/"){const T=d.record.path,K=T[T.length-1]==="/"?"":"/";tt.path=d.record.path+(V&&K+V)}if(I=Eg(tt,d,M),v?v.alias.push(I):(N=N||I,N!==I&&N.alias.push(I),_&&u.name&&!il(I)&&s(u.name)),"children"in A){const T=A.children;for(let K=0;K<T.length;K++)i(T[K],I,v&&v.children[K])}v=v||I,l(I)}return N?()=>{s(N)}:An}function s(u){if(tc(u)){const d=n.get(u);d&&(n.delete(u),r.splice(r.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=r.indexOf(u);d>-1&&(r.splice(d,1),u.record.name&&n.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return r}function l(u){let d=0;for(;d<r.length&&yg(u,r[d])>=0;)d++;r.splice(d,0,u),u.record.name&&!il(u)&&n.set(u.record.name,u)}function f(u,d){let v,_={},A,M;if("name"in u&&u.name){if(v=n.get(u.name),!v)throw en(1,{location:u});M=v.record.name,_=Ot($g(d.params,v.keys.filter(N=>!N.optional).map(N=>N.name)),u.params),A=v.stringify(_)}else if("path"in u)A=u.path,v=r.find(N=>N.re.test(A)),v&&(_=v.parse(A),M=v.record.name);else{if(v=d.name?n.get(d.name):r.find(N=>N.re.test(d.path)),!v)throw en(1,{location:u,currentLocation:d});M=v.record.name,_=Ot({},d.params,u.params),A=v.stringify(_)}const $=[];let I=v;for(;I;)$.unshift(I.record),I=I.parent;return{name:M,path:A,params:_,matched:$,meta:Tg($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:f,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function $g(t,e){const r={};for(const n of e)n in t&&(r[n]=t[n]);return r}function Cg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Sg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Sg(t){const e={},r=t.props||!1;if("component"in t)e.default=r;else for(const n in t.components)e[n]=typeof r=="boolean"?r:r[n];return e}function il(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tg(t){return t.reduce((e,r)=>Ot(e,r.meta),{})}function sl(t,e){const r={};for(const n in t)r[n]=n in e?e[n]:t[n];return r}const rc=/#/g,Og=/&/g,Rg=/\//g,Pg=/=/g,kg=/\?/g,nc=/\+/g,Ig=/%5B/g,Dg=/%5D/g,oc=/%5E/g,Ng=/%60/g,ic=/%7B/g,Lg=/%7C/g,sc=/%7D/g,Mg=/%20/g;function Ss(t){return encodeURI(""+t).replace(Lg,"|").replace(Ig,"[").replace(Dg,"]")}function Bg(t){return Ss(t).replace(ic,"{").replace(sc,"}").replace(oc,"^")}function zi(t){return Ss(t).replace(nc,"%2B").replace(Mg,"+").replace(rc,"%23").replace(Og,"%26").replace(Ng,"`").replace(ic,"{").replace(sc,"}").replace(oc,"^")}function Fg(t){return zi(t).replace(Pg,"%3D")}function Ug(t){return Ss(t).replace(rc,"%23").replace(kg,"%3F")}function zg(t){return t==null?"":Ug(t).replace(Rg,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Hg(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<n.length;++o){const i=n[o].replace(nc," "),s=i.indexOf("="),a=Ao(s<0?i:i.slice(0,s)),l=s<0?null:Ao(i.slice(s+1));if(a in e){let f=e[a];Array.isArray(f)||(f=e[a]=[f]),f.push(l)}else e[a]=l}return e}function al(t){let e="";for(let r in t){const n=t[r];if(r=Fg(r),n==null){n!==void 0&&(e+=(e.length?"&":"")+r);continue}(Array.isArray(n)?n.map(i=>i&&zi(i)):[n&&zi(n)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+r,i!=null&&(e+="="+i))})}return e}function jg(t){const e={};for(const r in t){const n=t[r];n!==void 0&&(e[r]=Array.isArray(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return e}function hn(){let t=[];function e(n){return t.push(n),()=>{const o=t.indexOf(n);o>-1&&t.splice(o,1)}}function r(){t=[]}return{add:e,list:()=>t,reset:r}}function nr(t,e,r,n,o){const i=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=d=>{d===!1?a(en(4,{from:r,to:e})):d instanceof Error?a(d):pg(d)?a(en(2,{from:e,to:d})):(i&&n.enterCallbacks[o]===i&&typeof d=="function"&&i.push(d),s())},f=t.call(n&&n.instances[o],e,r,l);let u=Promise.resolve(f);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function di(t,e,r,n){const o=[];for(const i of t)for(const s in i.components){let a=i.components[s];if(!(e!=="beforeRouteEnter"&&!i.instances[s]))if(qg(a)){const f=(a.__vccOpts||a)[e];f&&o.push(nr(f,r,n,i,s))}else{let l=a();o.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=Jm(f)?f.default:f;i.components[s]=u;const v=(u.__vccOpts||u)[e];return v&&nr(v,r,n,i,s)()}))}}return o}function qg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ll(t){const e=Ve($s),r=Ve(Cs),n=Oe(()=>e.resolve(wn(t.to))),o=Oe(()=>{const{matched:l}=n.value,{length:f}=l,u=l[f-1],d=r.matched;if(!u||!d.length)return-1;const v=d.findIndex(tn.bind(null,u));if(v>-1)return v;const _=ul(l[f-2]);return f>1&&ul(u)===_&&d[d.length-1].path!==_?d.findIndex(tn.bind(null,l[f-2])):v}),i=Oe(()=>o.value>-1&&Yg(r.params,n.value.params)),s=Oe(()=>o.value>-1&&o.value===r.matched.length-1&&Gu(r.params,n.value.params));function a(l={}){return Kg(l)?e[wn(t.replace)?"replace":"push"](wn(t.to)).catch(An):Promise.resolve()}return{route:n,href:Oe(()=>n.value.href),isActive:i,isExactActive:s,navigate:a}}const Vg=mu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ll,setup(t,{slots:e}){const r=Hn(ll(t)),{options:n}=Ve($s),o=Oe(()=>({[cl(t.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[cl(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=e.default&&e.default(r);return t.custom?i:Nu("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),Wg=Vg;function Kg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yg(t,e){for(const r in e){const n=e[r],o=t[r];if(typeof n=="string"){if(n!==o)return!1}else if(!Array.isArray(o)||o.length!==n.length||n.some((i,s)=>i!==o[s]))return!1}return!0}function ul(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cl=(t,e,r)=>t!=null?t:e!=null?e:r,Xg=mu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:r}){const n=Ve(Fi),o=Oe(()=>t.route||n.value),i=Ve(Ga,0),s=Oe(()=>o.value.matched[i]);so(Ga,i+1),so(Xm,s),so(Fi,o);const a=np();return ao(()=>[a.value,s.value,t.name],([l,f,u],[d,v,_])=>{f&&(f.instances[u]=l,v&&v!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),l&&f&&(!v||!tn(f,v)||!d)&&(f.enterCallbacks[u]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=o.value,f=s.value,u=f&&f.components[t.name],d=t.name;if(!u)return fl(r.default,{Component:u,route:l});const v=f.props[t.name],_=v?v===!0?l.params:typeof v=="function"?v(l):v:null,M=Nu(u,Ot({},_,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[d]=null)},ref:a}));return fl(r.default,{Component:M,route:l})||M}}});function fl(t,e){if(!t)return null;const r=t(e);return r.length===1?r[0]:r}const Jg=Xg;function pb(t){const e=Ag(t.routes,t),r=t.parseQuery||Hg,n=t.stringifyQuery||al,o=t.history,i=hn(),s=hn(),a=hn(),l=op(Ze);let f=Ze;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ci.bind(null,S=>""+S),d=ci.bind(null,zg),v=ci.bind(null,Ao);function _(S,Y){let H,J;return tc(S)?(H=e.getRecordMatcher(S),J=Y):J=S,e.addRoute(J,H)}function A(S){const Y=e.getRecordMatcher(S);Y&&e.removeRoute(Y)}function M(){return e.getRoutes().map(S=>S.record)}function $(S){return!!e.getRecordMatcher(S)}function I(S,Y){if(Y=Ot({},Y||l.value),typeof S=="string"){const it=fi(r,S,Y.path),p=e.resolve({path:it.path},Y),g=o.createHref(it.fullPath);return Ot(it,p,{params:v(p.params),hash:Ao(it.hash),redirectedFrom:void 0,href:g})}let H;if("path"in S)H=Ot({},S,{path:fi(r,S.path,Y.path).path});else{const it=Ot({},S.params);for(const p in it)it[p]==null&&delete it[p];H=Ot({},S,{params:d(S.params)}),Y.params=d(Y.params)}const J=e.resolve(H,Y),bt=S.hash||"";J.params=u(v(J.params));const xt=Zm(n,Ot({},S,{hash:Bg(bt),path:J.path})),st=o.createHref(xt);return Ot({fullPath:xt,hash:bt,query:n===al?jg(S.query):S.query||{}},J,{redirectedFrom:void 0,href:st})}function N(S){return typeof S=="string"?fi(r,S,l.value.path):Ot({},S)}function tt(S,Y){if(f!==S)return en(8,{from:Y,to:S})}function V(S){return W(S)}function T(S){return V(Ot(N(S),{replace:!0}))}function K(S){const Y=S.matched[S.matched.length-1];if(Y&&Y.redirect){const{redirect:H}=Y;let J=typeof H=="function"?H(S):H;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=N(J):{path:J},J.params={}),Ot({query:S.query,hash:S.hash,params:S.params},J)}}function W(S,Y){const H=f=I(S),J=l.value,bt=S.state,xt=S.force,st=S.replace===!0,it=K(H);if(it)return W(Ot(N(it),{state:bt,force:xt,replace:st}),Y||H);const p=H;p.redirectedFrom=Y;let g;return!xt&&tg(n,J,H)&&(g=en(16,{to:p,from:J}),de(J,J,!0,!1)),(g?Promise.resolve(g):nt(p,J)).catch(x=>mr(x)?x:ot(x,p,J)).then(x=>{if(x){if(mr(x,2))return W(Ot(N(x.to),{state:bt,force:xt,replace:st}),Y||p)}else x=ut(p,J,!0,st,bt);return lt(p,J,x),x})}function et(S,Y){const H=tt(S,Y);return H?Promise.reject(H):Promise.resolve()}function nt(S,Y){let H;const[J,bt,xt]=Qg(S,Y);H=di(J.reverse(),"beforeRouteLeave",S,Y);for(const it of J)it.leaveGuards.forEach(p=>{H.push(nr(p,S,Y))});const st=et.bind(null,S,Y);return H.push(st),Pr(H).then(()=>{H=[];for(const it of i.list())H.push(nr(it,S,Y));return H.push(st),Pr(H)}).then(()=>{H=di(bt,"beforeRouteUpdate",S,Y);for(const it of bt)it.updateGuards.forEach(p=>{H.push(nr(p,S,Y))});return H.push(st),Pr(H)}).then(()=>{H=[];for(const it of S.matched)if(it.beforeEnter&&!Y.matched.includes(it))if(Array.isArray(it.beforeEnter))for(const p of it.beforeEnter)H.push(nr(p,S,Y));else H.push(nr(it.beforeEnter,S,Y));return H.push(st),Pr(H)}).then(()=>(S.matched.forEach(it=>it.enterCallbacks={}),H=di(xt,"beforeRouteEnter",S,Y),H.push(st),Pr(H))).then(()=>{H=[];for(const it of s.list())H.push(nr(it,S,Y));return H.push(st),Pr(H)}).catch(it=>mr(it,8)?it:Promise.reject(it))}function lt(S,Y,H){for(const J of a.list())J(S,Y,H)}function ut(S,Y,H,J,bt){const xt=tt(S,Y);if(xt)return xt;const st=Y===Ze,it=Lr?history.state:{};H&&(J||st?o.replace(S.fullPath,Ot({scroll:st&&it&&it.scroll},bt)):o.push(S.fullPath,bt)),l.value=S,de(S,Y,H,st),It()}let gt;function _t(){gt=o.listen((S,Y,H)=>{const J=I(S),bt=K(J);if(bt){W(Ot(bt,{replace:!0}),J).catch(An);return}f=J;const xt=l.value;Lr&&lg(el(xt.fullPath,H.delta),jo()),nt(J,xt).catch(st=>mr(st,12)?st:mr(st,2)?(W(st.to,J).then(it=>{mr(it,20)&&!H.delta&&H.type===Bn.pop&&o.go(-1,!1)}).catch(An),Promise.reject()):(H.delta&&o.go(-H.delta,!1),ot(st,J,xt))).then(st=>{st=st||ut(J,xt,!1),st&&(H.delta?o.go(-H.delta,!1):H.type===Bn.pop&&mr(st,20)&&o.go(-1,!1)),lt(J,xt,st)}).catch(An)})}let Ht=hn(),Vt=hn(),ht;function ot(S,Y,H){It(S);const J=Vt.list();return J.length?J.forEach(bt=>bt(S,Y,H)):console.error(S),Promise.reject(S)}function vt(){return ht&&l.value!==Ze?Promise.resolve():new Promise((S,Y)=>{Ht.add([S,Y])})}function It(S){ht||(ht=!0,_t(),Ht.list().forEach(([Y,H])=>S?H(S):Y()),Ht.reset())}function de(S,Y,H,J){const{scrollBehavior:bt}=t;if(!Lr||!bt)return Promise.resolve();const xt=!H&&ug(el(S.fullPath,0))||(J||!H)&&history.state&&history.state.scroll||null;return au().then(()=>bt(S,Y,xt)).then(st=>st&&ag(st)).catch(st=>ot(st,S,Y))}const kt=S=>o.go(S);let Bt;const Ft=new Set;return{currentRoute:l,addRoute:_,removeRoute:A,hasRoute:$,getRoutes:M,resolve:I,options:t,push:V,replace:T,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:Vt.add,isReady:vt,install(S){const Y=this;S.component("RouterLink",Wg),S.component("RouterView",Jg),S.config.globalProperties.$router=Y,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>wn(l)}),Lr&&!Bt&&l.value===Ze&&(Bt=!0,V(o.location).catch(bt=>{}));const H={};for(const bt in Ze)H[bt]=Oe(()=>l.value[bt]);S.provide($s,Y),S.provide(Cs,Hn(H)),S.provide(Fi,l);const J=S.unmount;Ft.add(S),S.unmount=function(){Ft.delete(S),Ft.size<1&&(f=Ze,gt&&gt(),l.value=Ze,Bt=!1,ht=!1),J()}}}}function Pr(t){return t.reduce((e,r)=>e.then(()=>r()),Promise.resolve())}function Qg(t,e){const r=[],n=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const a=e.matched[s];a&&(t.matched.find(f=>tn(f,a))?n.push(a):r.push(a));const l=t.matched[s];l&&(e.matched.find(f=>tn(f,l))||o.push(l))}return[r,n,o]}function vb(){return Ve(Cs)}export{Pt as $,re as A,z as B,jt as C,zf as D,wt as E,ze as F,Le as G,ce as H,Fn as I,Lt as J,Xd as K,hh as L,$r as M,Wi as N,Xe as O,qr as P,ir as Q,He as R,je as S,Oe as T,Sp as U,ab as V,nb as W,lb as X,ub as Y,E as _,Hn as a,ob as b,ib as c,ku as d,se as e,ov as f,fb as g,pb as h,hb as i,np as j,cb as k,db as l,Ve as m,sb as n,Zp as o,so as p,eb as q,Zg as r,Js as s,tb as t,vb as u,rb as v,vp as w,Gt as x,ue as y,Ut as z};
