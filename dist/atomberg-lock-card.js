function t(t,e,r,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(s=(i<3?a(s):i>3?a(e,r,s):a(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}};const s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",b=u.reactiveElementPolyfillSupport,v=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},x=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const i=o?.call(this);a?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(r)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of o){const o=document.createElement("style"),a=e.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=r.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const a=(void 0!==r.converter?.toAttribute?r.converter:f).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=o;const i=a.fromAttribute(e,t.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(t,e,r,o=!1,a){if(void 0!==t){const i=this.constructor;if(!1===o&&(a=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??x)(a,e)||r.useDefault&&r.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:a},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==a||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,r,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,b?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=t=>t,w=k.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,T=`<${E}>`,P=document,z=()=>P.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,U="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,N=/>/g,D=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,R=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),F=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),V=new WeakMap,W=P.createTreeWalker(P,129);function q(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const r=t.length-1,o=[];let a,i=2===e?"<svg>":3===e?"<math>":"",s=L;for(let e=0;e<r;e++){const r=t[e];let n,c,l=-1,d=0;for(;d<r.length&&(s.lastIndex=d,c=s.exec(r),null!==c);)d=s.lastIndex,s===L?"!--"===c[1]?s=H:void 0!==c[1]?s=N:void 0!==c[2]?(R.test(c[2])&&(a=RegExp("</"+c[2],"g")),s=D):void 0!==c[3]&&(s=D):s===D?">"===c[0]?(s=a??L,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,n=c[1],s=void 0===c[3]?D:'"'===c[3]?j:I):s===j||s===I?s=D:s===H||s===N?s=L:(s=D,a=void 0);const p=s===D&&t[e+1].startsWith("/>")?" ":"";i+=s===L?r+T:l>=0?(o.push(n),r.slice(0,l)+A+r.slice(l)+C+p):r+C+(-2===l?e:p)}return[q(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class K{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,i=0;const s=t.length-1,n=this.parts,[c,l]=Y(t,e);if(this.el=K.createElement(c,r),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(A)){const e=l[i++],r=o.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:s[2],strings:r,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?rt:Q}),o.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:a}),o.removeAttribute(t));if(R.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],z()),W.nextNode(),n.push({type:2,index:++a});o.append(t[e],z())}}}else if(8===o.nodeType)if(o.data===E)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)n.push({type:7,index:a}),t+=C.length-1}a++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function J(t,e,r=t,o){if(e===F)return e;let a=void 0!==o?r._$Co?.[o]:r._$Cl;const i=M(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(t),a._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=a:r._$Cl=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);W.currentNode=o;let a=W.nextNode(),i=0,s=0,n=r[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new Z(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new ot(a,this,t)),this._$AV.push(e),n=r[++s]}i!==n?.index&&(a=W.nextNode(),i++)}return W.currentNode=P,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),M(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new Z(this.O(z()),this.O(z()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=G}_$AI(t,e=this,r,o){const a=this.strings;let i=!1;if(void 0===a)t=J(this,t,e,0),i=!M(t)||t!==this._$AH&&t!==F,i&&(this._$AH=t);else{const o=t;let s,n;for(t=a[0],s=0;s<a.length-1;s++)n=J(this,o[r+s],e,s),n===F&&(n=this._$AH[s]),i||=!M(n)||n!==this._$AH[s],n===G?t=G:t!==G&&(t+=(n??"")+a[s+1]),this._$AH[s]=n}i&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class rt extends Q{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??G)===F)return;const r=this._$AH,o=t===G&&r!==G||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==G&&(r===G||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const at=k.litHtmlPolyfillSupport;at?.(K,Z),(k.litHtmlVersions??=[]).push("3.3.3");const it=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let a=o._$litPart$;if(void 0===a){const t=r?.renderBefore??null;o._$litPart$=a=new Z(e.insertBefore(z(),t),t,void 0,r??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}st._$litElement$=!0,st.finalized=!0,it.litElementHydrateSupport?.({LitElement:st});const nt=it.litElementPolyfillSupport;nt?.({LitElement:st}),(it.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:x},lt=(t=ct,e,r)=>{const{kind:o,metadata:a}=r;let i=globalThis.litPropertyMetadata.get(a);if(void 0===i&&globalThis.litPropertyMetadata.set(a,i=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const a=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,a,t,!0,r)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=r;return function(r){const a=this[o];e.call(this,r),this.requestUpdate(o,a,t,!0,r)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,r)=>"object"==typeof r?lt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0,attribute:!1})}const ht=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new i(r,t,o)})`
  :host {
    display: block;
    --atomberg-accent: var(--primary-color, #f5a623);
    --card-accent: var(--atomberg-accent);
    --card-accent-rgb: 245, 166, 35;
    --card-on-accent: #121212;

    /* Surfaces - color-mix ensures deep contrast and purple tint inheritance in HA themes */
    --card-bg: var(--appliance-bg, var(--ha-card-background, var(--card-background-color, var(--lovelace-background, #1e1e24))));
    --card-surface: var(--appliance-surface, color-mix(in srgb, var(--primary-text-color, #fff) 10%, var(--ha-card-background, var(--card-background-color, #1e1e24))));
    --card-surface-hover: var(--appliance-surface-hover, color-mix(in srgb, var(--primary-text-color, #fff) 18%, var(--card-surface)));
    --card-border: var(--appliance-border, color-mix(in srgb, var(--primary-text-color, #fff) 24%, transparent));

    /* Text */
    --card-text: var(--appliance-text, var(--primary-text-color, #ffffff));
    --card-text-muted: var(--appliance-text-2, var(--secondary-text-color, #9e9e9e));
    --card-success: #4caf50;
    --card-locked: var(--card-accent);
    --card-unlocked: #4caf50;
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --card-accent: var(--md-sys-color-primary, var(--atomberg-accent, #f5a623));
    --card-bg: var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, #1e1e24))));
    --card-surface: var(--md-sys-color-surface, color-mix(in srgb, var(--primary-text-color, #fff) 10%, var(--ha-card-background, var(--card-background-color, #1e1e24))));
    --card-surface-hover: color-mix(in srgb, var(--md-sys-color-on-surface, var(--card-text)) 18%, var(--card-surface));
    --card-border: var(--md-sys-color-outline-variant, var(--md-sys-color-outline, color-mix(in srgb, var(--primary-text-color, #fff) 24%, transparent)));
    --card-text: var(--md-sys-color-on-surface, var(--primary-text-color, #ffffff));
    --card-text-muted: var(--md-sys-color-on-surface-variant, color-mix(in srgb, var(--primary-text-color, #fff) 75%, transparent));
    --card-on-accent: var(--md-sys-color-on-primary, #ffffff);
  }

  ha-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--ha-card-border-radius, 16px);
    padding: 16px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    color: var(--card-text);
    overflow: hidden;
    position: relative;
    font-family: var(--paper-font-body1_-_font-family, inherit);
  }

  /* Google Home Layout Overrides (M3 Pill Shapes & Soft Radii) */
  ha-card.google-home {
    border-radius: 28px;
  }
  ha-card.google-home .pill-chip {
    border-radius: 9999px;
    padding: 8px 14px;
  }
  ha-card.google-home .btn-generate {
    border-radius: 28px;
    box-shadow: 0 4px 18px color-mix(in srgb, var(--card-accent) 45%, transparent);
  }
  ha-card.google-home .otp-hero-box {
    border-radius: 24px;
  }
  ha-card.google-home .history-tab {
    border-radius: 9999px;
  }
  ha-card.google-home .history-item-card,
  ha-card.google-home .unlock-event-card {
    border-radius: 20px;
  }
  ha-card.google-home .filter-chip {
    border-radius: 9999px;
  }

  /* Classic Layout Overrides (Structured Crisp Segments & Square Radii) */
  ha-card.classic {
    border-radius: 16px;
  }
  ha-card.classic .pill-chip {
    border-radius: 8px;
    padding: 8px 10px;
  }
  ha-card.classic .btn-generate {
    border-radius: 12px;
  }
  ha-card.classic .otp-hero-box {
    border-radius: 12px;
  }
  ha-card.classic .history-tab {
    border-radius: 8px;
  }
  ha-card.classic .history-item-card,
  ha-card.classic .unlock-event-card {
    border-radius: 12px;
  }
  ha-card.classic .filter-chip {
    border-radius: 8px;
  }

  /* Header */
  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 12px;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
    flex: 1;
  }

  .device-title {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--card-text);
  }

  .device-subtitle-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 0.8rem;
    color: var(--card-text-muted);
  }

  .status-state {
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .status-state.locked {
    color: var(--card-locked);
  }
  .status-state.unlocked {
    color: var(--card-unlocked);
  }

  .sep {
    opacity: 0.4;
  }

  .telemetry-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
  }

  .telemetry-item.history-pill {
    cursor: pointer;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    padding: 2px 8px;
    border-radius: 9999px;
    font-weight: 600;
    color: var(--card-text);
    transition: all 0.2s ease;
  }
  .telemetry-item.history-pill:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .header-right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .battery-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 12px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
  }

  .battery-low {
    color: #f44336;
    border-color: #f44336;
  }

  .history-nav-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 12px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    cursor: pointer;
    color: var(--card-text);
    transition: all 0.2s ease;
  }

  .history-nav-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .history-nav-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* ── Classic Full View Hero Block (Squarish) ── */
  .lock-block {
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin: 4px 0 16px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lock-block:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .lock-block-left {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .lock-block-icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--card-text);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .lock-block.locked .lock-block-icon-btn {
    background: color-mix(in srgb, var(--card-accent) 22%, var(--card-surface));
    color: var(--card-accent);
    border-color: var(--card-accent);
    box-shadow: 0 0 14px color-mix(in srgb, var(--card-accent) 40%, transparent);
  }

  .lock-block.unlocked .lock-block-icon-btn {
    background: color-mix(in srgb, #4caf50 22%, var(--card-surface));
    color: #4caf50;
    border-color: #4caf50;
    box-shadow: 0 0 14px rgba(76, 175, 80, 0.35);
  }

  .lock-block-icon-btn ha-icon {
    --mdc-icon-size: 24px;
  }

  .lock-block-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .lock-block-state {
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.3px;
    line-height: 1.2;
  }

  .lock-block.locked .lock-block-state {
    color: var(--card-accent);
  }

  .lock-block.unlocked .lock-block-state {
    color: #4caf50;
  }

  .lock-block-sub {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--card-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lock-block-toggle-btn {
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--card-text);
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .lock-block-toggle-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .lock-block-toggle-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Hero Section (Google Home Round Dial) */
  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0 20px;
    position: relative;
  }

  .lock-dial {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border: 3px solid var(--card-border);
    background: var(--card-surface);
  }

  .lock-dial:hover {
    transform: scale(1.03);
    background: var(--card-surface-hover);
  }

  .lock-dial:active {
    transform: scale(0.97);
  }

  .lock-dial.locked {
    border-color: var(--card-locked);
    box-shadow: 0 0 24px color-mix(in srgb, var(--card-locked) 30%, transparent),
                inset 0 0 16px color-mix(in srgb, var(--card-locked) 15%, transparent);
  }

  .lock-dial.unlocked {
    border-color: var(--card-unlocked);
    box-shadow: 0 0 24px color-mix(in srgb, var(--card-unlocked) 35%, transparent),
                inset 0 0 16px color-mix(in srgb, var(--card-unlocked) 20%, transparent);
  }

  .lock-dial ha-icon {
    --mdc-icon-size: 48px;
    transition: transform 0.3s ease;
  }

  .dial-status-label {
    margin-top: 12px;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .dial-subtext {
    font-size: 0.85rem;
    color: var(--card-text-muted);
    margin-top: 2px;
  }

  /* Section Dividers */
  .section-divider {
    height: 1px;
    background: var(--card-border);
    margin: 16px 0;
  }

  .section-title {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--card-text-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Duration Segmented Pills */
  .pill-group {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 4px;
    margin-bottom: 14px;
    scrollbar-width: none;
  }

  .pill-group::-webkit-scrollbar {
    display: none;
  }

  .pill-chip {
    flex: 1;
    min-width: 60px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .pill-chip:hover {
    background: var(--card-surface-hover);
  }

  .pill-chip.selected {
    background: var(--card-accent);
    color: #121212;
    font-weight: 700;
    border-color: var(--card-accent);
    box-shadow: 0 2px 10px color-mix(in srgb, var(--card-accent) 40%, transparent);
  }

  /* High-Contrast Generate Button */
  .btn-generate {
    width: 100%;
    padding: 12px 16px;
    border-radius: 14px;
    border: none;
    background: var(--card-accent);
    color: #121212;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--card-accent) 35%, transparent);
  }

  .btn-generate ha-icon {
    --mdc-icon-size: 20px;
    color: #121212;
  }

  .btn-generate:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .btn-generate:active {
    transform: translateY(1px);
  }

  .btn-generate:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Active / Generated OTP Card */
  .otp-hero-box {
    margin-top: 14px;
    padding: 16px;
    border-radius: 16px;
    background: color-mix(in srgb, var(--card-accent) 10%, var(--card-surface));
    border: 1px solid color-mix(in srgb, var(--card-accent) 35%, var(--card-border));
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .otp-digits {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 6px;
    color: var(--card-text);
    font-family: 'Courier New', Courier, monospace;
    margin: 8px 0;
    user-select: all;
  }

  .otp-meta {
    font-size: 0.82rem;
    color: var(--card-text-muted);
    margin-bottom: 12px;
  }

  .otp-actions {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .otp-action-btn {
    flex: 1;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .otp-action-btn:hover {
    background: var(--card-surface-hover);
  }

  .otp-action-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* History Page Styles */
  .history-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--card-border);
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--card-text);
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 6px 12px;
    transition: all 0.2s ease;
  }

  .back-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .back-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .history-title {
    font-size: 1rem;
    font-weight: 700;
  }

  .history-count-badge {
    font-size: 0.75rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 10px;
    background: var(--card-surface);
    color: var(--card-text-muted);
    border: 1px solid var(--card-border);
  }

  /* History Main Tabs (Unlock Activity vs Generated PINs) */
  .history-main-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 14px;
    background: color-mix(in srgb, var(--card-surface) 60%, var(--card-bg));
    padding: 4px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
  }

  ha-card.google-home .history-main-tabs {
    border-radius: 9999px;
  }

  .history-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    color: var(--card-text-muted);
    transition: all 0.2s ease;
    border-radius: 8px;
    user-select: none;
  }

  .history-tab:hover {
    color: var(--card-text);
    background: var(--card-surface-hover);
  }

  .history-tab.selected {
    background: var(--card-accent);
    color: #121212;
    font-weight: 700;
    box-shadow: 0 2px 8px color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  /* History Action Row & Sync Button */
  .history-actions-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  .sync-history-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 10px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    color: var(--card-text);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  ha-card.google-home .sync-history-btn {
    border-radius: 9999px;
  }

  .sync-history-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .sync-history-btn.syncing ha-icon,
  .compact-action-btn.syncing ha-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  /* Physical Unlock Event Card */
  .unlock-event-card {
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: border-color 0.2s, background 0.2s;
  }

  .unlock-event-card:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .unlock-icon-box {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--card-accent);
    flex-shrink: 0;
  }

  ha-card.google-home .unlock-icon-box {
    border-radius: 50%;
  }

  .unlock-icon-box ha-icon {
    --mdc-icon-size: 22px;
  }

  .unlock-details {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .unlock-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .unlock-user-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--card-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .source-badge {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }

  .source-badge.ble {
    background: color-mix(in srgb, #2196f3 18%, transparent);
    color: #64b5f6;
    border: 1px solid color-mix(in srgb, #2196f3 30%, transparent);
  }

  .source-badge.cloud {
    background: color-mix(in srgb, var(--card-accent) 18%, transparent);
    color: var(--card-accent);
    border: 1px solid color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  .unlock-sub-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    color: var(--card-text-muted);
  }

  .unlock-type-pill {
    font-weight: 600;
    color: var(--card-text);
  }

  .unlock-time {
    font-weight: 400;
  }

  .filter-group {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
  }

  .filter-chip {
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    color: var(--card-text);
    transition: all 0.2s ease;
  }

  .filter-chip.selected {
    background: var(--card-accent);
    color: #121212;
    border-color: var(--card-accent);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  .history-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 420px;
    overflow-y: auto;
    padding-right: 2px;
  }

  .history-item-card {
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: border-color 0.2s;
  }

  .history-item-card.is-active {
    border-color: color-mix(in srgb, var(--card-success) 40%, var(--card-border));
    background: color-mix(in srgb, var(--card-success) 8%, var(--card-surface));
  }

  .history-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .history-card-pin {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 3px;
    color: var(--card-text);
  }

  .status-tag {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .status-tag.active {
    color: var(--card-success);
    background: color-mix(in srgb, var(--card-success) 18%, transparent);
    border: 1px solid color-mix(in srgb, var(--card-success) 40%, transparent);
  }

  .status-tag.expired {
    color: var(--card-text-muted);
    background: rgba(128, 128, 128, 0.12);
  }

  .history-card-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.78rem;
    color: var(--card-text-muted);
  }

  .history-card-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }

  .history-action-btn {
    flex: 1;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .history-action-btn:hover {
    background: var(--card-surface-hover);
  }

  .history-action-btn ha-icon {
    --mdc-icon-size: 14px;
  }

  .empty-history {
    padding: 32px 16px;
    text-align: center;
    color: var(--card-text-muted);
    font-size: 0.9rem;
  }

  /* Footer */
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--card-border);
    font-size: 0.8rem;
    color: var(--card-text-muted);
  }

  .footer-status {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--card-success);
    box-shadow: 0 0 6px var(--card-success);
  }

  .toast {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #323232;
    color: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
  }

  .toast.show {
    opacity: 1;
  }

  /* ── Collapse Button ── */
  .collapse-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--card-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-surface);
    color: var(--card-text-muted);
    transition: all 0.2s ease;
    outline: none;
  }

  .collapse-btn:hover {
    background: var(--card-surface-hover);
    color: var(--card-text);
  }

  .collapse-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ── Compact Card: Classic (Squarish) vs Google Home (Round) ── */
  ha-card.compact-card {
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  ha-card.compact-card.classic {
    border-radius: 16px;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
  }

  ha-card.compact-card.classic .compact-icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
  }

  ha-card.compact-card.classic .compact-action-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
  }

  ha-card.compact-card.classic .compact-value {
    font-size: 2.2rem;
    font-weight: 800;
  }

  ha-card.compact-card.google-home {
    border-radius: 28px;
    border: none;
    box-shadow: none;
    background: var(--card-bg);
  }

  ha-card.compact-card.google-home .compact-icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
  }

  ha-card.compact-card.google-home .compact-action-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
  }

  ha-card.compact-card.google-home .compact-value {
    font-size: 2.4rem;
    font-weight: 400;
  }

  ha-card.compact-card:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .compact-icon-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-surface);
    color: var(--card-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .compact-icon-btn.locked {
    background: color-mix(in srgb, var(--card-accent) 20%, var(--card-surface));
    color: var(--card-accent);
    border-color: var(--card-accent);
    box-shadow: 0 0 12px color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  .compact-icon-btn.unlocked {
    background: color-mix(in srgb, #4caf50 20%, var(--card-surface));
    color: #4caf50;
    border-color: #4caf50;
    box-shadow: 0 0 12px rgba(76, 175, 80, 0.3);
  }

  .compact-icon-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .compact-title-wrap {
    flex: 1;
    min-width: 0;
  }

  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--card-text);
  }

  .compact-subtitle {
    font-size: 0.75rem;
    color: var(--card-text-muted);
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
  }

  .compact-chevron {
    color: var(--card-text-muted);
    opacity: 0.7;
    --mdc-icon-size: 22px;
    transition: transform 0.2s ease;
  }

  .compact-center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
  }

  .compact-value {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    line-height: 1.1;
    text-align: center;
  }

  .compact-value.locked {
    color: var(--card-accent);
  }

  .compact-value.unlocked {
    color: #4caf50;
  }

  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 0 2px;
  }

  .compact-action-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-surface);
    color: var(--card-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .compact-action-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .compact-action-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .compact-action-btn.generating {
    background: var(--card-accent);
    color: var(--card-on-accent);
    border-color: var(--card-accent);
    box-shadow: 0 0 12px color-mix(in srgb, var(--card-accent) 40%, transparent);
  }

  .compact-telemetry {
    font-size: 0.8rem;
    color: var(--card-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex: 1;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── Share Selector Modal ── */
  .share-modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 14px;
    box-sizing: border-box;
  }

  .share-modal {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 18px;
    padding: 16px;
    width: 100%;
    max-width: 330px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
  }

  .share-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .share-modal-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--card-text);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .share-modal-title ha-icon {
    color: var(--card-accent);
    --mdc-icon-size: 20px;
  }

  .share-close-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--card-text-muted);
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .share-close-btn:hover {
    color: var(--card-text);
  }

  .share-preview-box {
    font-size: 0.8rem;
    line-height: 1.35;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 10px;
    color: var(--card-text-muted);
    user-select: text;
  }

  .share-target-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .share-target-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
    text-align: left;
    outline: none;
  }

  .share-target-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .share-target-btn.whatsapp ha-icon {
    color: #25d366;
  }

  .share-target-btn.sms ha-icon {
    color: #3b82f6;
  }

  .share-target-btn.system ha-icon {
    color: var(--card-accent);
  }

  .share-target-btn ha-icon {
    --mdc-icon-size: 20px;
  }
`,ut={type:"atomberg-lock-card",name:"Atomberg Smart Lock Card",description:"A custom Lovelace card for Atomberg smart locks with offline OTP generator, active PINs, and audit logs.",preview:!0,domain:"lock",domains:["lock"],documentationURL:"https://github.com/selvakk2k/atomberg-lock-card"};window.customCards=window.customCards||[];const gt=window.customCards.findIndex(t=>"atomberg-lock-card"===t.type||"custom:atomberg-lock-card"===t.type);gt>=0?window.customCards[gt]=ut:window.customCards.push(ut);const mt=[{label:"30m",value:.5,desc:"Remote (1-Time)"},{label:"1h",value:1,desc:"1 Hour"},{label:"2h",value:2,desc:"2 Hours"},{label:"4h",value:4,desc:"4 Hours"},{label:"12h",value:12,desc:"12 Hours"},{label:"24h",value:24,desc:"24 Hours"}];let bt=class extends st{constructor(){super(...arguments),this._selectedDuration=.5,this._isGenerating=!1,this._isSyncing=!1,this._latestOtp=null,this._toastMessage="",this._showToast=!1,this._currentView="main",this._historyTab="unlock",this._historyFilter="all",this._expanded=!1,this._shareModalData=null}static get styles(){return ht}updated(t){super.updated(t),"material_you"===this._config?.theme?this.setAttribute("theme","material_you"):this.removeAttribute("theme")}_haptic(t="selection"){const e=new CustomEvent("haptic",{detail:t,bubbles:!0,composed:!0});window.dispatchEvent(e)}_isCompact(){return"compact"===(this._config?.layout||this._config?.card_layout)}getCardSize(){return this._isCompact()&&!this._expanded?2:5}static getConfigForm(){return{schema:[{name:"entity",label:"Lock Entity (Auto-Discovered if blank)",selector:{entity:{domain:"lock"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You (Optimized for Material 3 Theme)",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color Override",selector:{ui_color:{}}},{name:"main_color",label:"Background Color Override",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Sensors (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"otp_sensor",label:"Generated OTP Sensor",selector:{entity:{domain:"sensor"}}},{name:"battery_sensor",label:"Battery Sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"last_user_sensor",label:"Last User Sensor",selector:{entity:{domain:"sensor"}}},{name:"last_event_sensor",label:"Last Event Sensor",selector:{entity:{domain:"sensor"}}}]},{name:"confirm_unlock",label:"Require Confirmation to Unlock",selector:{boolean:{}}}]}}static getStubConfig(t,e,r){let o="";if(e&&e.length&&(o=e.find(t=>t.startsWith("lock."))||""),!o&&r&&r.length&&(o=r.find(t=>t.startsWith("lock."))||""),!o&&t&&t.states){const e=Object.keys(t.states).filter(t=>t.startsWith("lock."));o=e.find(t=>t.includes("atomberg")||t.includes("sl1"))||e[0]||""}return{type:"custom:atomberg-lock-card",entity:o}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={card_layout:"default",default_duration:.5,show_history:!0,...t},this._config.default_duration&&(this._selectedDuration=this._config.default_duration)}_getEntityId(){if(this._config?.entity)return this._config.entity;if(this.hass?.states){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("lock."));return t.find(t=>t.includes("atomberg")||t.includes("sl1"))||t[0]||""}return""}_getSecondaryEntityId(t,e){const r=this._getEntityId();if(!r||!this.hass?.states)return"";const o=r.replace("lock.","");for(const t of e){const e=`sensor.${o}_${t}`;if(this.hass.states[e])return e}const a=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor."));for(const t of e){const e=a.find(e=>e.includes(o)&&e.includes(t));if(e)return e}return""}_triggerToast(t){this._toastMessage=t,this._showToast=!0,setTimeout(()=>{this._showToast=!1},2800)}async _toggleLock(){const t=this._getEntityId();if(!t||!this.hass)return;const e=this.hass.states[t],r=!e||"locked"===e.state;if(r&&this._config.confirm_unlock){if(!window.confirm("Are you sure you want to unlock the door?"))return}const o=r?"unlock":"lock";try{await this.hass.callService("lock",o,{entity_id:t}),this._triggerToast(r?"Unlocking door...":"Locking door...")}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}}async _generateOtp(){const t=this._getEntityId();if(t&&this.hass){this._isGenerating=!0;try{const e=await this.hass.callWS({type:"call_service",domain:"atomberg_lock",service:"generate_otp",service_data:{entity_id:t,duration_hours:this._selectedDuration},return_response:!0}),r=e?.response||e?.service_response||e;r&&r.otp?(this._latestOtp={otp:r.otp,expires_at:r.expires_at,valid_until_timestamp:r.valid_until_timestamp,duration_hours:r.duration_hours},this._triggerToast(`OTP ${r.otp} generated!`)):this._triggerToast("OTP generated successfully")}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}finally{this._isGenerating=!1}}}async _syncLogs(){if(this._isSyncing||!this.hass)return;this._isSyncing=!0,this._haptic("light");const t=this._getEntityId(),e=t.replace("lock.","");let r=`button.${e}_sync_status`;if(!this.hass.states[r]){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("button."));r=t.find(t=>t.includes(e)&&(t.includes("sync")||t.includes("log")))||""}try{r&&this.hass.states[r]?await this.hass.callService("button","press",{entity_id:r}):await this.hass.callService("homeassistant","update_entity",{entity_id:t}),this._triggerToast("Sync triggered over Bluetooth")}catch(t){this._triggerToast(`Sync failed: ${t.message||t}`)}finally{setTimeout(()=>{this._isSyncing=!1},2500)}}_fallbackCopy(t){try{const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",e.style.left="-9999px",e.style.top="-9999px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,t.length);const r=document.execCommand("copy");document.body.removeChild(e),r?this._triggerToast("PIN copied to clipboard!"):this._triggerToast("Failed to copy PIN")}catch{this._triggerToast("Failed to copy PIN")}}_copyToClipboard(t){t&&("undefined"!=typeof navigator&&navigator.clipboard&&"function"==typeof navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>this._triggerToast("PIN copied to clipboard!")).catch(()=>this._fallbackCopy(t)):this._fallbackCopy(t))}_formatFriendlyExpiry(t){if(!t)return"Boundary Expiry";const e="number"==typeof t?new Date(t*(t<1e11?1e3:1)):new Date(t);if(isNaN(e.getTime()))return String(t);const r=new Date,o=e.toDateString()===r.toDateString(),a=e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),i=e.getTime()-r.getTime(),s=Math.round(i/6e4);if(s>0&&s<=1440){if(s<60)return`${a} (in ${s}m)`;const t=Math.floor(s/60),e=s%60;return`${a} (in ${e>0?`${t}h ${e}m`:`${t}h`})`}if(s<=0)return`${a} (Expired)`;if(o)return`Today at ${a}`;const n=new Date(r);return n.setDate(n.getDate()+1),e.toDateString()===n.toDateString()?`Tomorrow at ${a}`:`${e.toLocaleDateString([],{month:"short",day:"numeric"})}, ${a}`}_formatFriendlyCreated(t){if(!t)return"";const e="number"==typeof t?new Date(t*(t<1e11?1e3:1)):new Date(t);if(isNaN(e.getTime()))return String(t);const r=new Date,o=e.toDateString()===r.toDateString(),a=e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return o?`Today at ${a}`:`${e.toLocaleDateString([],{month:"short",day:"numeric"})}, ${a}`}_openShareModal(t,e){this._shareModalData={otp:t,expiresAt:e}}_closeShareModal(){this._shareModalData=null}_getShareMessage(t,e){return`Your guest access PIN for Atomberg Smart Lock is ${t} followed by #. Valid until ${this._formatFriendlyExpiry(e)}.`}_shareViaWhatsApp(t){const e=`https://api.whatsapp.com/send?text=${encodeURIComponent(t)}`;window.open(e,"_blank","noreferrer"),this._closeShareModal()}_shareViaSms(t){const e=`sms:?body=${encodeURIComponent(t)}`;window.location.href=e,this._closeShareModal()}_shareViaSystem(t){if("undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent))return window.location.href=`intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=${encodeURIComponent(t)};end;`,void this._closeShareModal();"undefined"!=typeof navigator&&navigator.share&&"function"==typeof navigator.share?navigator.share({title:"Atomberg Smart Lock Guest PIN",text:t}).then(()=>this._closeShareModal()).catch(()=>{}):(this._fallbackCopy(t),this._triggerToast("Invitation copied to clipboard!"),this._closeShareModal())}_renderMainView(t,e,r,o,a,i,s,n=!1){const c="locked"===t.state,l="unlocking"===t.state,d="locking"===t.state;return B`
      <!-- Option A Header: Full-width title on top, telemetry in subtitle row -->
      <div class="card-header">
        <div class="header-left">
          <div class="device-title">${s}</div>
          <div class="device-subtitle-row">
            <span class="status-state ${c?"locked":"unlocked"}">${t.state.toUpperCase()}</span>
            <span class="sep">•</span>
            ${null!==e?B`
                  <span class="telemetry-item ${e<=20?"battery-low":""}">
                    <ha-icon icon="${e<=20?"mdi:battery-alert":"mdi:battery"}" style="--mdc-icon-size:14px;"></ha-icon>
                    <span>${e}%</span>
                  </span>
                  <span class="sep">•</span>
                `:""}
            <span
              class="telemetry-item history-pill"
              @click="${()=>this._currentView="history"}"
              title="View Activity & Logs"
            >
              <ha-icon icon="mdi:history" style="--mdc-icon-size:14px;"></ha-icon>
              <span>Logs (${o})</span>
            </span>
          </div>
        </div>
        <div class="header-right">
          ${this._isCompact()?B`
                <button
                  class="collapse-btn"
                  title="Collapse Card"
                  @click="${()=>this._expanded=!1}"
                >
                  <ha-icon icon="mdi:chevron-up"></ha-icon>
                </button>
              `:""}
        </div>
      </div>

      <!-- Hero Lock Control: Classic (Squarish Block) vs Google Home (Round Dial) -->
      ${"google_home"===this._config.full_layout?B`
            <div class="hero-container">
              <div
                class="lock-dial ${c?"locked":"unlocked"}"
                @click="${()=>{this._haptic("selection"),this._toggleLock()}}"
                title="${c?"Click to Unlock":"Click to Lock"}"
              >
                <ha-icon
                  icon="${c?"mdi:lock":l?"mdi:lock-clock":d?"mdi:lock-reset":"mdi:lock-open-variant"}"
                  style="color: ${c?"var(--card-locked)":"var(--card-unlocked)"};"
                ></ha-icon>
              </div>
              <div class="dial-status-label" style="color: ${c?"var(--card-locked)":"var(--card-unlocked)"};">
                ${l?"Unlocking...":d?"Locking...":c?"Locked":"Unlocked"}
              </div>
              <div class="dial-subtext">
                ${c?"Tap dial to unlock":"Tap dial to lock"}
              </div>
            </div>
          `:B`
            <div
              class="lock-block ${c?"locked":"unlocked"}"
              @click="${()=>{this._haptic("selection"),this._toggleLock()}}"
            >
              <div class="lock-block-left">
                <div class="lock-block-icon-btn">
                  <ha-icon
                    icon="${c?"mdi:lock":l?"mdi:lock-clock":d?"mdi:lock-reset":"mdi:lock-open-variant"}"
                  ></ha-icon>
                </div>
                <div class="lock-block-text">
                  <div class="lock-block-state">
                    ${l?"Unlocking...":d?"Locking...":c?"Locked":"Unlocked"}
                  </div>
                  <div class="lock-block-sub">
                    ${c?"Door is secured":"Door is unlocked"} • Bluetooth BLE
                  </div>
                </div>
              </div>
              <button
                class="lock-block-toggle-btn"
                @click="${t=>{t.stopPropagation(),this._haptic("selection"),this._toggleLock()}}"
              >
                <ha-icon icon="${c?"mdi:lock-open-variant":"mdi:lock"}"></ha-icon>
                <span>${c?"Unlock":"Lock"}</span>
              </button>
            </div>
          `}

      <!-- Guest OTP Generator Section (Strictly for Cloud-Connected Locks) -->
      ${n?B`
            <div class="section-divider"></div>
            <div class="section-title">
              <ha-icon icon="mdi:shield-key-outline"></ha-icon>
              <span>Remote Guest OTP Generator</span>
            </div>

            <!-- Duration Segmented Chips -->
            <div class="pill-group">
              ${mt.map(t=>B`
                  <div
                    class="pill-chip ${this._selectedDuration===t.value?"selected":""}"
                    @click="${()=>this._selectedDuration=t.value}"
                    title="${t.desc}"
                  >
                    ${t.label}
                  </div>
                `)}
            </div>

            <button
              class="btn-generate"
              @click="${this._generateOtp}"
              ?disabled="${this._isGenerating}"
            >
              <ha-icon icon="${this._isGenerating?"mdi:loading":"mdi:numeric"}"></ha-icon>
              <span>${this._isGenerating?"Calculating PIN...":"Generate Keypad PIN"}</span>
            </button>

            <!-- Current / Generated OTP Hero Display -->
            ${r?B`
                  <div class="otp-hero-box">
                    <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--card-accent);">
                      Active Keypad PIN (${r.duration_hours}h)
                    </div>
                    <div class="otp-digits" @click="${()=>this._copyToClipboard(r.otp)}">
                      ${r.otp.slice(0,4)}  ${r.otp.slice(4)}
                    </div>
                    <div class="otp-meta">
                      Valid until: <strong>${this._formatFriendlyExpiry(r.valid_until_timestamp||r.expires_at)}</strong>
                    </div>
                    <div class="otp-actions">
                      <div class="otp-action-btn" @click="${()=>this._copyToClipboard(r.otp)}">
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        <span>Copy PIN</span>
                      </div>
                      <div class="otp-action-btn" @click="${()=>this._openShareModal(r.otp,r.valid_until_timestamp||r.expires_at)}">
                        <ha-icon icon="mdi:share-variant"></ha-icon>
                        <span>Share PIN</span>
                      </div>
                    </div>
                  </div>
                `:""}
          `:""}

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-status">
          <div class="status-dot"></div>
          <span>BLE Proxy Active</span>
        </div>
        <div>
          ${a||i?B`<span>Last: ${a||i}</span>`:B`<span>SL1 Pro</span>`}
        </div>
      </div>
    `}_getCredentialIcon(t){const e=(t||"").toLowerCase();return e.includes("fingerprint")?"mdi:fingerprint":e.includes("pin")||e.includes("code")?"mdi:dialpad":e.includes("nfc")||e.includes("card")?"mdi:credit-card-outline":e.includes("app")?"mdi:cellphone":e.includes("key")?"mdi:key":e.includes("thumbturn")||e.includes("manual")?"mdi:hand-back-right":e.includes("otp")?"mdi:shield-key":"mdi:lock-open-variant"}_renderHistoryView(t,e,r=[],o=!1){const a=Math.floor(Date.now()/1e3),i="active"===this._historyFilter?t:e,s=o?this._historyTab:"unlock";return B`
      <!-- History Page Header -->
      <div class="history-page-header">
        <div class="back-btn" @click="${()=>this._currentView="main"}">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Back</span>
        </div>
        <div class="history-title">Activity & Logs</div>
        <div class="history-count-badge">
          ${"unlock"===s?`${r.length} Events`:`${i.length} PINs`}
        </div>
      </div>

      <!-- Main History Category Switcher (Only shown if cloud OTPs exist) -->
      ${o?B`
            <div class="history-main-tabs">
              <div
                class="history-tab ${"unlock"===this._historyTab?"selected":""}"
                @click="${()=>this._historyTab="unlock"}"
              >
                <ha-icon icon="mdi:door-open" style="--mdc-icon-size: 16px;"></ha-icon>
                <span>Unlock Activity (${r.length})</span>
              </div>
              <div
                class="history-tab ${"otp"===this._historyTab?"selected":""}"
                @click="${()=>this._historyTab="otp"}"
              >
                <ha-icon icon="mdi:key-outline" style="--mdc-icon-size: 16px;"></ha-icon>
                <span>Generated PINs (${e.length})</span>
              </div>
            </div>
          `:""}

      ${"unlock"===s?B`
            <!-- Unlock Activity Tab -->
            <div class="history-actions-row">
              <button
                class="sync-history-btn ${this._isSyncing?"syncing":""}"
                ?disabled="${this._isSyncing}"
                @click="${()=>this._syncLogs()}"
                title="Synchronize activity logs with lock via BLE"
              >
                <ha-icon icon="${this._isSyncing?"mdi:loading":"mdi:sync"}"></ha-icon>
                <span>${this._isSyncing?"Syncing with Lock...":"Sync Activity"}</span>
              </button>
            </div>

            ${0===r.length?B`<div class="empty-history">No unlock activity recorded yet. Sync with lock via Bluetooth.</div>`:B`
                  <div class="history-list">
                    ${r.map(t=>{const e=this._getCredentialIcon(t.credential_type),r=this._formatFriendlyCreated(t.timestamp||t.recordTime),o=t.user_name||(void 0!==t.slot_id?`Slot ${t.slot_id}`:"User"),a=t.credential_type||"Unknown",i=(t.source||"ble").toUpperCase();return B`
                        <div class="unlock-event-card">
                          <div class="unlock-icon-box">
                            <ha-icon icon="${e}"></ha-icon>
                          </div>
                          <div class="unlock-details">
                            <div class="unlock-title-row">
                              <span class="unlock-user-name">${o}</span>
                              <span class="source-badge ${i.toLowerCase()}">${i}</span>
                            </div>
                            <div class="unlock-sub-row">
                              <span class="unlock-type-pill">${a}</span>
                              <span class="sep">•</span>
                              <span class="unlock-time">${r}</span>
                            </div>
                          </div>
                        </div>
                      `})}
                  </div>
                `}
          `:B`
            <!-- Generated OTPs Tab -->
            <div class="filter-group">
              <div
                class="filter-chip ${"all"===this._historyFilter?"selected":""}"
                @click="${()=>this._historyFilter="all"}"
              >
                All (${e.length})
              </div>
              <div
                class="filter-chip ${"active"===this._historyFilter?"selected":""}"
                @click="${()=>this._historyFilter="active"}"
              >
                Active (${t.length})
              </div>
            </div>

            <!-- History List -->
            ${0===i.length?B`<div class="empty-history">No OTP records found in this view.</div>`:B`
                  <div class="history-list">
                    ${i.map(t=>{const e=t.valid_until_timestamp>a;return B`
                        <div class="history-item-card ${e?"is-active":""}">
                          <div class="history-card-top">
                            <div class="history-card-pin">
                              ${t.otp.slice(0,4)} ${t.otp.slice(4)}
                            </div>
                            <div class="status-tag ${e?"active":"expired"}">
                              ${e?"Active":"Expired"}
                            </div>
                          </div>
                          <div class="history-card-details">
                            <div>Expires: ${this._formatFriendlyExpiry(t.valid_until_timestamp||t.expires_at)} (${t.duration_hours}h)</div>
                            ${t.created_at||t.created_timestamp?B`<div>Created: ${this._formatFriendlyCreated(t.created_timestamp||t.created_at)}</div>`:""}
                          </div>
                          <div class="history-card-actions">
                            <div class="history-action-btn" @click="${()=>this._copyToClipboard(t.otp)}">
                              <ha-icon icon="mdi:content-copy"></ha-icon>
                              <span>Copy PIN</span>
                            </div>
                            <div class="history-action-btn" @click="${()=>this._openShareModal(t.otp,t.valid_until_timestamp||t.expires_at)}">
                              <ha-icon icon="mdi:share-variant"></ha-icon>
                              <span>Share</span>
                            </div>
                          </div>
                        </div>
                      `})}
                  </div>
                `}
          `}
    `}_renderCompact(t,e,r,o,a=!1){const i="locked"===t.state,s="unlocking"===t.state,n="locking"===t.state,c="unavailable"===t.state||"unknown"===t.state,l=c?"Unavailable":s?"Unlocking...":n?"Locking...":i?"Locked":"Unlocked",d="google_home"===this._config.full_layout?"google-home":"classic",p=[this._config.accent_color?`--card-accent: ${this._config.accent_color};`:"",this._config.main_color?`--card-bg: ${this._config.main_color};`:""].filter(Boolean).join(" ");return B`
      <ha-card
        class="compact-card ${d}"
        style="${p}"
        @click="${()=>{this._haptic("selection"),this._expanded=!0}}"
      >
        <!-- Compact Header: Clean single-line header matching Fan/AC/Washer -->
        <div class="compact-header">
          <button
            class="compact-icon-btn ${i?"locked":"unlocked"} ${c?"disabled":""}"
            title="${i?"Unlock Door":"Lock Door"}"
            @click="${t=>{t.stopPropagation(),this._toggleLock()}}"
          >
            <ha-icon icon="${i?"mdi:lock":"mdi:lock-open-variant"}"></ha-icon>
          </button>
          <div class="compact-title">${o}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <!-- Compact Hero State: Horizontally Centered -->
        <div class="compact-center">
          <div class="compact-value ${i?"locked":"unlocked"}">${l}</div>
        </div>

        <!-- Compact Footer: Symmetrical 3-element row matching sibling cards -->
        <div class="compact-footer">
          <button
            class="compact-action-btn ${a?this._isGenerating?"generating":"":this._isSyncing?"syncing":""}"
            title="${a?"Generate PIN":"Sync Activity"}"
            @click="${t=>{t.stopPropagation(),a?this._generateOtp():this._syncLogs()}}"
          >
            <ha-icon icon="${a?this._isGenerating?"mdi:loading":"mdi:key-outline":this._isSyncing?"mdi:loading":"mdi:sync"}"></ha-icon>
          </button>

          <div class="compact-telemetry">
            ${null!==e?B`<ha-icon icon="mdi:battery" style="--mdc-icon-size: 14px;"></ha-icon><span>${e}%</span> • `:""}
            <span>${c?"Offline":"Bluetooth BLE"}</span>
          </div>

          <button
            class="compact-action-btn"
            title="View Logs (${r})"
            @click="${t=>{t.stopPropagation(),this._currentView="history",this._expanded=!0}}"
          >
            <ha-icon icon="mdi:history"></ha-icon>
          </button>
        </div>

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast?"show":""}">${this._toastMessage}</div>

        <!-- Share Selector Modal Overlay -->
        ${this._renderShareModal()}
      </ha-card>
    `}_renderShareModal(){if(!this._shareModalData)return B``;const{otp:t,expiresAt:e}=this._shareModalData,r=this._getShareMessage(t,e),o="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent);return B`
      <div class="share-modal-backdrop" @click="${this._closeShareModal}">
        <div class="share-modal" @click="${t=>t.stopPropagation()}">
          <div class="share-modal-header">
            <div class="share-modal-title">
              <ha-icon icon="mdi:share-variant"></ha-icon>
              <span>Share Guest PIN</span>
            </div>
            <button class="share-close-btn" @click="${this._closeShareModal}" title="Close">
              <ha-icon icon="mdi:close" style="--mdc-icon-size: 20px;"></ha-icon>
            </button>
          </div>

          <div class="share-preview-box">
            ${r}
          </div>

          <div class="share-target-list">
            <button class="share-target-btn whatsapp" @click="${()=>this._shareViaWhatsApp(r)}">
              <ha-icon icon="mdi:whatsapp"></ha-icon>
              <span>Share via WhatsApp</span>
            </button>

            <button class="share-target-btn sms" @click="${()=>this._shareViaSms(r)}">
              <ha-icon icon="mdi:message-text"></ha-icon>
              <span>Share via SMS</span>
            </button>

            ${o?B`
                  <button class="share-target-btn system" @click="${()=>this._shareViaSystem(r)}">
                    <ha-icon icon="mdi:share-variant"></ha-icon>
                    <span>System Share Sheet</span>
                  </button>
                `:""}

            <button
              class="share-target-btn"
              @click="${()=>{this._fallbackCopy(r),this._triggerToast("Invitation copied to clipboard!"),this._closeShareModal()}}"
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
              <span>Copy Full Invitation</span>
            </button>
          </div>
        </div>
      </div>
    `}render(){const t=this._getEntityId(),e=this.hass?.states[t];if(!e)return B`
        <ha-card>
          <div style="padding: 16px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon icon="mdi:lock-alert" style="--mdc-icon-size: 36px; margin-bottom: 8px;"></ha-icon>
            <div>No Atomberg Smart Lock found. Please configure an entity.</div>
          </div>
        </ha-card>
      `;const r=this._config.battery_sensor||this._getSecondaryEntityId("battery",["battery"]),o=r&&this.hass.states[r]?this.hass.states[r].state:null,a=o&&!isNaN(Number(o))?Number(o):null,i=this._config.otp_sensor||this._getSecondaryEntityId("otp",["last_generated_otp","last_otp"]),s=i?this.hass.states[i]:null;let n=[];s?.attributes?.active_otps&&Array.isArray(s.attributes.active_otps)&&(n=s.attributes.active_otps);let c=[];s?.attributes?.otp_history&&Array.isArray(s.attributes.otp_history)?c=s.attributes.otp_history:n.length>0&&(c=n);const l=this._latestOtp||(n.length>0?n[n.length-1]:null),d=this._config.last_user_sensor||this._getSecondaryEntityId("last_user",["last_user"]),p=d&&this.hass.states[d]?this.hass.states[d].state:null,h=this._config.last_event_sensor||this._getSecondaryEntityId("last_event",["last_event"]),u=h&&this.hass.states[h]?this.hass.states[h].state:null,g=this._config.name||e.attributes.friendly_name||"Atomberg Smart Lock",m=e?.attributes?.unlock_history||h&&this.hass.states[h]?.attributes?.unlock_history||[],b=m.length>0?m.length:c.length,v=Boolean(e.attributes?.is_cloud_connected);if(this._isCompact()&&!this._expanded)return this._renderCompact(e,a,b,g,v);const f="google_home"===this._config.full_layout?"google-home":"classic",x=[this._config.accent_color?`--card-accent: ${this._config.accent_color};`:"",this._config.main_color?`--card-bg: ${this._config.main_color};`:""].filter(Boolean).join(" ");return B`
      <ha-card class="${f}" style="${x}">
        ${"history"===this._currentView?this._renderHistoryView(n,c,m,v):this._renderMainView(e,a,l,b,p,u,g,v)}

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast?"show":""}">${this._toastMessage}</div>

        <!-- Share Selector Modal Overlay -->
        ${this._renderShareModal()}
      </ha-card>
    `}};t([dt({attribute:!1})],bt.prototype,"hass",void 0),t([pt()],bt.prototype,"_config",void 0),t([pt()],bt.prototype,"_selectedDuration",void 0),t([pt()],bt.prototype,"_isGenerating",void 0),t([pt()],bt.prototype,"_isSyncing",void 0),t([pt()],bt.prototype,"_latestOtp",void 0),t([pt()],bt.prototype,"_toastMessage",void 0),t([pt()],bt.prototype,"_showToast",void 0),t([pt()],bt.prototype,"_currentView",void 0),t([pt()],bt.prototype,"_historyTab",void 0),t([pt()],bt.prototype,"_historyFilter",void 0),t([pt()],bt.prototype,"_expanded",void 0),t([pt()],bt.prototype,"_shareModalData",void 0),bt=t([(t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("atomberg-lock-card")],bt);export{bt as AtombergLockCard};
