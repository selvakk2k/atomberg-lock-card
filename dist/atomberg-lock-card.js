function t(t,e,r,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(s=(i<3?a(s):i>3?a(e,r,s):a(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}};const s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:n,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,g=u.trustedTypes,b=g?g.emptyScript:"",m=u.reactiveElementPolyfillSupport,f=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},v=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&n(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const i=o?.call(this);a?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(r)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of o){const o=document.createElement("style"),a=e.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=r.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const a=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=o;const i=a.fromAttribute(e,t.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(t,e,r,o=!1,a){if(void 0!==t){const i=this.constructor;if(!1===o&&(a=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??v)(a,e)||r.useDefault&&r.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:a},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==a||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,r,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[f("elementProperties")]=new Map,_[f("finalized")]=new Map,m?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=t=>t,w=k.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,z=`<${E}>`,U=document,P=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,N=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),F=new WeakMap,q=U.createTreeWalker(U,129);function G(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Y=(t,e)=>{const r=t.length-1,o=[];let a,i=2===e?"<svg>":3===e?"<math>":"",s=O;for(let e=0;e<r;e++){const r=t[e];let c,n,l=-1,d=0;for(;d<r.length&&(s.lastIndex=d,n=s.exec(r),null!==n);)d=s.lastIndex,s===O?"!--"===n[1]?s=j:void 0!==n[1]?s=M:void 0!==n[2]?(B.test(n[2])&&(a=RegExp("</"+n[2],"g")),s=N):void 0!==n[3]&&(s=N):s===N?">"===n[0]?(s=a??O,l=-1):void 0===n[1]?l=-2:(l=s.lastIndex-n[2].length,c=n[1],s=void 0===n[3]?N:'"'===n[3]?D:R):s===D||s===R?s=N:s===j||s===M?s=O:(s=N,a=void 0);const p=s===N&&t[e+1].startsWith("/>")?" ":"";i+=s===O?r+z:l>=0?(o.push(c),r.slice(0,l)+S+r.slice(l)+C+p):r+C+(-2===l?e:p)}return[G(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class J{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,i=0;const s=t.length-1,c=this.parts,[n,l]=Y(t,e);if(this.el=J.createElement(n,r),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&c.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=l[i++],r=o.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);c.push({type:1,index:a,name:s[2],strings:r,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?rt:Q}),o.removeAttribute(t)}else t.startsWith(C)&&(c.push({type:6,index:a}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],P()),q.nextNode(),c.push({type:2,index:++a});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===E)c.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)c.push({type:7,index:a}),t+=C.length-1}a++}}static createElement(t,e){const r=U.createElement("template");return r.innerHTML=t,r}}function K(t,e,r=t,o){if(e===V)return e;let a=void 0!==o?r._$Co?.[o]:r._$Cl;const i=T(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(t),a._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=a:r._$Cl=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??U).importNode(e,!0);q.currentNode=o;let a=q.nextNode(),i=0,s=0,c=r[0];for(;void 0!==c;){if(i===c.index){let e;2===c.type?e=new X(a,a.nextSibling,this,t):1===c.type?e=new c.ctor(a,c.name,c.strings,this,t):6===c.type&&(e=new ot(a,this,t)),this._$AV.push(e),c=r[++s]}i!==c?.index&&(a=q.nextNode(),i++)}return q.currentNode=U,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=J.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Z(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new J(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new X(this.O(P()),this.O(P()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(t,e=this,r,o){const a=this.strings;let i=!1;if(void 0===a)t=K(this,t,e,0),i=!T(t)||t!==this._$AH&&t!==V,i&&(this._$AH=t);else{const o=t;let s,c;for(t=a[0],s=0;s<a.length-1;s++)c=K(this,o[r+s],e,s),c===V&&(c=this._$AH[s]),i||=!T(c)||c!==this._$AH[s],c===W?t=W:t!==W&&(t+=(c??"")+a[s+1]),this._$AH[s]=c}i&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends Q{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===V)return;const r=this._$AH,o=t===W&&r!==W||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==W&&(r===W||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const at=k.litHtmlPolyfillSupport;at?.(J,X),(k.litHtmlVersions??=[]).push("3.3.3");const it=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let a=o._$litPart$;if(void 0===a){const t=r?.renderBefore??null;o._$litPart$=a=new X(e.insertBefore(P(),t),t,void 0,r??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}st._$litElement$=!0,st.finalized=!0,it.litElementHydrateSupport?.({LitElement:st});const ct=it.litElementPolyfillSupport;ct?.({LitElement:st}),(it.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:v},lt=(t=nt,e,r)=>{const{kind:o,metadata:a}=r;let i=globalThis.litPropertyMetadata.get(a);if(void 0===i&&globalThis.litPropertyMetadata.set(a,i=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const a=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,a,t,!0,r)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=r;return function(r){const a=this[o];e.call(this,r),this.requestUpdate(o,a,t,!0,r)}}throw Error("Unsupported decorator location: "+o)};
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
`,ut={type:"atomberg-lock-card",name:"Atomberg Smart Lock Card",description:"A custom Lovelace card for Atomberg smart locks with local BLE control, battery monitoring, and activity audit logs.",preview:!0,domain:"lock",domains:["lock"],documentationURL:"https://github.com/selvakk2k/atomberg-lock-card"};window.customCards=window.customCards||[];const gt=window.customCards.findIndex(t=>"atomberg-lock-card"===t.type||"custom:atomberg-lock-card"===t.type);gt>=0?window.customCards[gt]=ut:window.customCards.push(ut);let bt=class extends st{constructor(){super(...arguments),this._isSyncing=!1,this._toastMessage="",this._showToast=!1,this._currentView="main",this._expanded=!1,this._prevLockState=null,this._localUnlockHistory=null}static get styles(){return ht}updated(t){super.updated(t),"material_you"===this._config?.theme?this.setAttribute("theme","material_you"):this.removeAttribute("theme");const e=this._getEntityId();if(e&&this.hass?.states[e]){const t=this.hass.states[e].state;null!==this._prevLockState&&this._prevLockState!==t&&("locked"===t?this._triggerToast("Door locked"):"unlocked"===t&&this._triggerToast("Door unlocked")),this._prevLockState=t}}_haptic(t="selection"){const e=new CustomEvent("haptic",{detail:t,bubbles:!0,composed:!0});window.dispatchEvent(e)}_isCompact(){return"compact"===(this._config?.layout||this._config?.card_layout)}getCardSize(){return this._isCompact()&&!this._expanded?2:5}static getConfigForm(){return{schema:[{name:"entity",label:"Lock Entity (Auto-Discovered if blank)",selector:{entity:{domain:"lock"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You (Optimized for Material 3 Theme)",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color Override",selector:{ui_color:{}}},{name:"main_color",label:"Background Color Override",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Sensors (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"battery_sensor",label:"Battery Sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"last_user_sensor",label:"Last User Sensor",selector:{entity:{domain:"sensor"}}},{name:"last_event_sensor",label:"Last Event Sensor",selector:{entity:{domain:"sensor"}}}]},{name:"confirm_unlock",label:"Require Confirmation to Unlock",selector:{boolean:{}}}]}}static getStubConfig(t,e,r){let o="";if(e&&e.length&&(o=e.find(t=>t.startsWith("lock."))||""),!o&&r&&r.length&&(o=r.find(t=>t.startsWith("lock."))||""),!o&&t&&t.states){const e=Object.keys(t.states).filter(t=>t.startsWith("lock."));o=e.find(t=>t.includes("atomberg")||t.includes("sl1"))||e[0]||""}return{type:"custom:atomberg-lock-card",entity:o}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={card_layout:"default",show_history:!0,...t}}_getEntityId(){if(this._config?.entity)return this._config.entity;if(this.hass?.states){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("lock."));return t.find(t=>t.includes("atomberg")||t.includes("sl1")||t.includes("smart_lock"))||t[0]||""}return""}_getSecondaryEntityId(t,e){const r=this._getEntityId();if(!r||!this.hass?.states)return"";const o=r.replace("lock.","");for(const t of e){const e=`sensor.${o}_${t}`;if(this.hass.states[e])return e}const a=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor."));for(const t of e){const e=a.find(e=>e.includes(o)&&e.includes(t));if(e)return e}return""}_triggerToast(t){this._toastMessage=t,this._showToast=!0,setTimeout(()=>{this._showToast=!1},2800)}async _toggleLock(){const t=this._getEntityId();if(!t||!this.hass)return;const e=this.hass.states[t],r=!e||"locked"===e.state;if(r&&this._config.confirm_unlock){if(!window.confirm("Are you sure you want to unlock the door?"))return}const o=r?"unlock":"lock";this._triggerToast(r?"Unlocking door...":"Locking door...");try{await this.hass.callService("lock",o,{entity_id:t})}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}}async _syncLogs(){if(this._isSyncing||!this.hass)return;this._isSyncing=!0,this._haptic("light");const t=this._getEntityId(),e=t.replace("lock.","");let r=`button.${e}_sync_status`;if(!this.hass.states[r]){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("button."));r=t.find(t=>t.includes(e)&&(t.includes("sync")||t.includes("log")))||""}try{let e=null;try{const r=await this.hass.callWS({type:"call_service",domain:"atomberg_lock",service:"sync",service_data:{entity_id:t},return_response:!0});e=r?.response||r?.service_response||r}catch(e){r&&this.hass.states[r]?await this.hass.callService("button","press",{entity_id:r}):await this.hass.callService("homeassistant","update_entity",{entity_id:t})}if(!e)try{const r=(await this.hass.callWS({type:"get_states"})).find(e=>e.entity_id===t);(r?.attributes?.unlock_history||r?.attributes?.access_logs)&&(e={unlock_history:r.attributes.unlock_history||r.attributes.access_logs,unlock_count:(r.attributes.unlock_history||r.attributes.access_logs).length})}catch{}if(e&&Array.isArray(e.unlock_history)){this._localUnlockHistory=e.unlock_history;const t=e.ble_new_count||0,r=e.unlock_count||e.unlock_history.length;t>0?this._triggerToast(`Synced: +${t} new records from lock (${r} total)`):this._triggerToast(`Sync complete: ${r} records up to date`)}else this._triggerToast("Sync completed")}catch(t){this._triggerToast(`Sync failed: ${t.message||t}`)}finally{this._isSyncing=!1,this.requestUpdate()}}_formatFriendlyCreated(t){if(!t)return"";const e="number"==typeof t?new Date(t*(t<1e11?1e3:1)):new Date(t);if(isNaN(e.getTime()))return String(t);const r=new Date,o=e.toDateString()===r.toDateString(),a=e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return o?`Today at ${a}`:`${e.toLocaleDateString([],{month:"short",day:"numeric"})}, ${a}`}_getCredentialIcon(t){const e=(t||"").toLowerCase();return e.includes("fingerprint")?"mdi:fingerprint":e.includes("pin")||e.includes("code")?"mdi:dialpad":e.includes("nfc")||e.includes("card")?"mdi:credit-card-outline":e.includes("app")?"mdi:cellphone":e.includes("key")?"mdi:key":e.includes("thumbturn")||e.includes("manual")?"mdi:hand-back-right":e.includes("otp")?"mdi:shield-key":"mdi:lock-open-variant"}_renderMainView(t,e,r,o,a,i){const s="locked"===t.state,c="unlocking"===t.state,n="locking"===t.state;return I`
      <!-- Option A Header: Full-width title on top, telemetry in subtitle row -->
      <div class="card-header">
        <div class="header-left">
          <div class="device-title">${i}</div>
          <div class="device-subtitle-row">
            <span class="status-state ${s?"locked":"unlocked"}">${t.state.toUpperCase()}</span>
            <span class="sep">•</span>
            ${null!==e?I`
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
              <span>Logs (${r})</span>
            </span>
          </div>
        </div>
        <div class="header-right">
          ${this._isCompact()?I`
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
      ${"google_home"===this._config.full_layout?I`
            <div class="hero-container">
              <div
                class="lock-dial ${s?"locked":"unlocked"}"
                @click="${()=>{this._haptic("selection"),this._toggleLock()}}"
                title="${s?"Click to Unlock":"Click to Lock"}"
              >
                <ha-icon
                  icon="${s?"mdi:lock":c?"mdi:lock-clock":n?"mdi:lock-reset":"mdi:lock-open-variant"}"
                  style="color: ${s?"var(--card-locked)":"var(--card-unlocked)"};"
                ></ha-icon>
              </div>
              <div class="dial-status-label" style="color: ${s?"var(--card-locked)":"var(--card-unlocked)"};">
                ${c?"Unlocking...":n?"Locking...":s?"Locked":"Unlocked"}
              </div>
              <div class="dial-subtext">
                ${s?"Tap dial to unlock":"Tap dial to lock"}
              </div>
            </div>
          `:I`
            <div
              class="lock-block ${s?"locked":"unlocked"}"
              @click="${()=>{this._haptic("selection"),this._toggleLock()}}"
            >
              <div class="lock-block-left">
                <div class="lock-block-icon-btn">
                  <ha-icon
                    icon="${s?"mdi:lock":c?"mdi:lock-clock":n?"mdi:lock-reset":"mdi:lock-open-variant"}"
                  ></ha-icon>
                </div>
                <div class="lock-block-text">
                  <div class="lock-block-state">
                    ${c?"Unlocking...":n?"Locking...":s?"Locked":"Unlocked"}
                  </div>
                  <div class="lock-block-sub">
                    ${s?"Door is secured":"Door is unlocked"} • Bluetooth BLE
                  </div>
                </div>
              </div>
              <button
                class="lock-block-toggle-btn"
                @click="${t=>{t.stopPropagation(),this._haptic("selection"),this._toggleLock()}}"
              >
                <ha-icon icon="${s?"mdi:lock-open-variant":"mdi:lock"}"></ha-icon>
                <span>${s?"Unlock":"Lock"}</span>
              </button>
            </div>
          `}

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-status">
          <div class="status-dot"></div>
          <span>Bluetooth BLE</span>
        </div>
        <div>
          ${o||a?I`<span>Last: ${o||a}</span>`:I`<span>Smart Lock</span>`}
        </div>
      </div>
    `}_renderHistoryView(t=[]){return I`
      <!-- History Page Header -->
      <div class="history-page-header">
        <div class="back-btn" @click="${()=>this._currentView="main"}">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Back</span>
        </div>
        <div class="history-title">Activity & Logs</div>
        <div class="history-count-badge">
          ${t.length} Events
        </div>
      </div>

      <!-- Unlock Activity Section -->
      <div class="history-actions-row">
        <button
          class="sync-history-btn ${this._isSyncing?"syncing":""}"
          ?disabled="${this._isSyncing}"
          @click="${()=>this._syncLogs()}"
          title="Synchronize activity logs with lock via Bluetooth"
        >
          <ha-icon icon="${this._isSyncing?"mdi:loading":"mdi:sync"}"></ha-icon>
          <span>${this._isSyncing?"Syncing with Lock...":"Sync Activity"}</span>
        </button>
      </div>

      ${0===t.length?I`<div class="empty-history">No unlock activity recorded yet. Sync with lock via Bluetooth.</div>`:I`
            <div class="history-list">
              ${t.map(t=>{const e=this._getCredentialIcon(t.credential_type),r=this._formatFriendlyCreated(t.timestamp||t.datetime||t.recordTime),o=t.user_name||t.detail||(void 0!==t.slot_id?`Slot ${t.slot_id}`:void 0!==t.slot?`Slot ${t.slot}`:"User"),a=t.credential_type||"Unknown",i=(t.source||"ble").toUpperCase();return I`
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
    `}_renderCompact(t,e,r,o){const a="locked"===t.state,i="unlocking"===t.state,s="locking"===t.state,c="unavailable"===t.state||"unknown"===t.state,n=c?"Unavailable":i?"Unlocking...":s?"Locking...":a?"Locked":"Unlocked",l="google_home"===this._config.full_layout?"google-home":"classic",d=[this._config.accent_color?`--card-accent: ${this._config.accent_color};`:"",this._config.main_color?`--card-bg: ${this._config.main_color};`:""].filter(Boolean).join(" ");return I`
      <ha-card
        class="compact-card ${l}"
        style="${d}"
        @click="${()=>{this._haptic("selection"),this._expanded=!0}}"
      >
        <!-- Compact Header: Clean single-line header matching Fan/AC/Washer -->
        <div class="compact-header">
          <button
            class="compact-icon-btn ${a?"locked":"unlocked"} ${c?"disabled":""}"
            title="${a?"Unlock Door":"Lock Door"}"
            @click="${t=>{t.stopPropagation(),this._toggleLock()}}"
          >
            <ha-icon icon="${a?"mdi:lock":"mdi:lock-open-variant"}"></ha-icon>
          </button>
          <div class="compact-title">${o}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <!-- Compact Hero State: Horizontally Centered -->
        <div class="compact-center">
          <div class="compact-value ${a?"locked":"unlocked"}">${n}</div>
        </div>

        <!-- Compact Footer: Symmetrical 3-element row matching sibling cards -->
        <div class="compact-footer">
          <button
            class="compact-action-btn ${this._isSyncing?"syncing":""}"
            title="Sync Activity"
            @click="${t=>{t.stopPropagation(),this._syncLogs()}}"
          >
            <ha-icon icon="${this._isSyncing?"mdi:loading":"mdi:sync"}"></ha-icon>
          </button>

          <div class="compact-telemetry">
            ${null!==e?I`<ha-icon icon="mdi:battery" style="--mdc-icon-size: 14px;"></ha-icon><span>${e}%</span> • `:""}
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
      </ha-card>
    `}render(){const t=this._getEntityId(),e=this.hass?.states[t];if(!e)return I`
        <ha-card>
          <div style="padding: 16px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon icon="mdi:lock-alert" style="--mdc-icon-size: 36px; margin-bottom: 8px;"></ha-icon>
            <div>No Atomberg Smart Lock found. Please configure an entity.</div>
          </div>
        </ha-card>
      `;const r=this._config.battery_sensor||this._getSecondaryEntityId("battery",["battery","battery_level"]),o=r&&this.hass.states[r]?this.hass.states[r].state:null,a=o&&!isNaN(Number(o))?Number(o):null,i=this._config.last_user_sensor||this._getSecondaryEntityId("last_user",["last_user","last_unlocked_by","last_credential","user"]),s=i&&this.hass.states[i]?this.hass.states[i].state:null,c=this._config.last_event_sensor||this._getSecondaryEntityId("last_event",["last_event","last_event_time","event","history","access_log"]),n=c&&this.hass.states[c]?this.hass.states[c].state:null,l=this._config.name||e.attributes.friendly_name||"Atomberg Smart Lock",d=this._localUnlockHistory||e?.attributes?.unlock_history||e?.attributes?.access_logs||e?.attributes?.logs||c&&this.hass.states[c]?.attributes?.unlock_history||c&&this.hass.states[c]?.attributes?.access_logs||[],p=d.length;if(this._isCompact()&&!this._expanded)return this._renderCompact(e,a,p,l);const h="google_home"===this._config.full_layout?"google-home":"classic",u=[this._config.accent_color?`--card-accent: ${this._config.accent_color};`:"",this._config.main_color?`--card-bg: ${this._config.main_color};`:""].filter(Boolean).join(" ");return I`
      <ha-card class="${h}" style="${u}">
        ${"history"===this._currentView?this._renderHistoryView(d):this._renderMainView(e,a,p,s,n,l)}

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast?"show":""}">${this._toastMessage}</div>
      </ha-card>
    `}};t([dt({attribute:!1})],bt.prototype,"hass",void 0),t([pt()],bt.prototype,"_config",void 0),t([pt()],bt.prototype,"_isSyncing",void 0),t([pt()],bt.prototype,"_toastMessage",void 0),t([pt()],bt.prototype,"_showToast",void 0),t([pt()],bt.prototype,"_currentView",void 0),t([pt()],bt.prototype,"_expanded",void 0),t([pt()],bt.prototype,"_prevLockState",void 0),t([pt()],bt.prototype,"_localUnlockHistory",void 0),bt=t([(t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("atomberg-lock-card")],bt);export{bt as AtombergLockCard};
