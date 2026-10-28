function t(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}};const a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",v=u.reactiveElementPolyfillSupport,m=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);s?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(r)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(e,r.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const o=s.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(void 0!==t){const o=this.constructor;if(!1===i&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??_)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,v?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=t=>t,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,T=document,O=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,L=/>/g,R=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,D=/"/g,j=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),V=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),G=new WeakMap,W=T.createTreeWalker(T,129);function q(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const r=t.length-1,i=[];let s,o=2===e?"<svg>":3===e?"<math>":"",a=z;for(let e=0;e<r;e++){const r=t[e];let n,c,d=-1,l=0;for(;l<r.length&&(a.lastIndex=l,c=a.exec(r),null!==c);)l=a.lastIndex,a===z?"!--"===c[1]?a=M:void 0!==c[1]?a=L:void 0!==c[2]?(j.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=R):void 0!==c[3]&&(a=R):a===R?">"===c[0]?(a=s??z,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?R:'"'===c[3]?D:I):a===D||a===I?a=R:a===M||a===L?a=z:(a=R,s=void 0);const h=a===R&&t[e+1].startsWith("/>")?" ":"";o+=a===z?r+P:d>=0?(i.push(n),r.slice(0,d)+E+r.slice(d)+S+h):r+S+(-2===d?e:h)}return[q(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,n=this.parts,[c,d]=K(t,e);if(this.el=Y.createElement(c,r),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=d[o++],r=i.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?rt:Q}),i.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],O()),W.nextNode(),n.push({type:2,index:++s});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===C)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)n.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function J(t,e,r=t,i){if(e===V)return e;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const o=H(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);W.currentNode=i;let s=W.nextNode(),o=0,a=0,n=r[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new X(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new it(s,this,t)),this._$AV.push(e),n=r[++a]}o!==n?.index&&(s=W.nextNode(),o++)}return W.currentNode=T,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),H(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Y.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new X(this.O(O()),this.O(O()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(void 0===s)t=J(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=J(this,i[r+a],e,a),n===V&&(n=this._$AH[a]),o||=!H(n)||n!==this._$AH[a],n===F?t=F:t!==F&&(t+=(n??"")+s[a+1]),this._$AH[a]=n}o&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class rt extends Q{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??F)===V)return;const r=this._$AH,i=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==F&&(r===F||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(Y,X),($.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=r?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(O(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const nt=ot.litElementPolyfillSupport;nt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},dt=(t=ct,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,s,t,!0,r)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=r;return function(r){const s=this[i];e.call(this,r),this.requestUpdate(i,s,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return lt({...t,state:!0,attribute:!1})}const pt=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new o(r,t,i)})`
  :host {
    display: block;
    --card-accent: var(--atomberg-accent, var(--primary-color, #f5a623));
    --card-accent-rgb: 245, 166, 35;
    --card-on-accent: #121212;
    --card-bg: var(--ha-card-background, var(--card-background-color, #1e1e24));
    --card-surface: color-mix(in srgb, var(--card-bg) 92%, var(--primary-text-color, #ffffff));
    --card-surface-hover: color-mix(in srgb, var(--card-bg) 84%, var(--primary-text-color, #ffffff));
    --card-border: var(--ha-card-border-color, var(--divider-color, rgba(255, 255, 255, 0.08)));
    --card-text: var(--primary-text-color, #ffffff);
    --card-text-muted: var(--secondary-text-color, #9e9e9e);
    --card-success: #4caf50;
    --card-locked: var(--card-accent);
    --card-unlocked: #4caf50;
  }

  ha-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 18px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    color: var(--card-text);
    overflow: hidden;
    position: relative;
    font-family: var(--paper-font-body1_-_font-family, inherit);
  }

  /* Header */
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .device-title {
    font-size: 1.15rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .device-subtitle {
    font-size: 0.8rem;
    color: var(--card-text-muted);
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
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

  /* Hero Section */
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
    justify-content: space-between;
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
`,ut={type:"atomberg-lock-card",name:"Atomberg Smart Lock Card",description:"A custom Lovelace card for Atomberg smart locks with offline OTP generator, active PINs, and audit logs.",preview:!0,domain:"lock",domains:["lock"],documentationURL:"https://github.com/selvakk2k/atomberg-lock-card"};window.customCards=window.customCards||[];const gt=window.customCards.findIndex(t=>"atomberg-lock-card"===t.type||"custom:atomberg-lock-card"===t.type);gt>=0?window.customCards[gt]=ut:window.customCards.push(ut);const ft=[{label:"30m",value:.5,desc:"Remote (1-Time)"},{label:"1h",value:1,desc:"1 Hour"},{label:"2h",value:2,desc:"2 Hours"},{label:"4h",value:4,desc:"4 Hours"},{label:"12h",value:12,desc:"12 Hours"},{label:"24h",value:24,desc:"24 Hours"}];let vt=class extends at{constructor(){super(...arguments),this._selectedDuration=.5,this._isGenerating=!1,this._latestOtp=null,this._toastMessage="",this._showToast=!1,this._currentView="main",this._historyFilter="all"}static get styles(){return pt}static getConfigForm(){return{schema:[{name:"entity",label:"Lock Entity (Auto-Discovered if blank)",selector:{entity:{domain:"lock"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"card_layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact",value:"compact"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Sensors (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"otp_sensor",label:"Generated OTP Sensor",selector:{entity:{domain:"sensor"}}},{name:"battery_sensor",label:"Battery Sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"last_user_sensor",label:"Last User Sensor",selector:{entity:{domain:"sensor"}}},{name:"last_event_sensor",label:"Last Event Sensor",selector:{entity:{domain:"sensor"}}}]},{name:"confirm_unlock",label:"Require Confirmation to Unlock",selector:{boolean:{}}}]}}static getStubConfig(t,e,r){let i="";if(e&&e.length&&(i=e.find(t=>t.startsWith("lock."))||""),!i&&r&&r.length&&(i=r.find(t=>t.startsWith("lock."))||""),!i&&t&&t.states){const e=Object.keys(t.states).filter(t=>t.startsWith("lock."));i=e.find(t=>t.includes("atomberg")||t.includes("sl1"))||e[0]||""}return{type:"custom:atomberg-lock-card",entity:i}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={card_layout:"default",default_duration:.5,show_history:!0,...t},this._config.default_duration&&(this._selectedDuration=this._config.default_duration)}_getEntityId(){if(this._config?.entity)return this._config.entity;if(this.hass?.states){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("lock."));return t.find(t=>t.includes("atomberg")||t.includes("sl1"))||t[0]||""}return""}_getSecondaryEntityId(t,e){const r=this._getEntityId();if(!r||!this.hass?.states)return"";const i=r.replace("lock.","");for(const t of e){const e=`sensor.${i}_${t}`;if(this.hass.states[e])return e}const s=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor."));for(const t of e){const e=s.find(e=>e.includes(i)&&e.includes(t));if(e)return e}return""}_triggerToast(t){this._toastMessage=t,this._showToast=!0,setTimeout(()=>{this._showToast=!1},2800)}async _toggleLock(){const t=this._getEntityId();if(!t||!this.hass)return;const e=this.hass.states[t],r=!e||"locked"===e.state;if(r&&this._config.confirm_unlock){if(!window.confirm("Are you sure you want to unlock the door?"))return}const i=r?"unlock":"lock";try{await this.hass.callService("lock",i,{entity_id:t}),this._triggerToast(r?"Unlocking door...":"Locking door...")}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}}async _generateOtp(){const t=this._getEntityId();if(t&&this.hass){this._isGenerating=!0;try{const e=await this.hass.callWS({type:"call_service",domain:"atomberg_lock",service:"generate_otp",service_data:{entity_id:t,duration_hours:this._selectedDuration},return_response:!0}),r=e?.response||e?.service_response||e;r&&r.otp?(this._latestOtp={otp:r.otp,expires_at:r.expires_at,valid_until_timestamp:r.valid_until_timestamp,duration_hours:r.duration_hours},this._triggerToast(`OTP ${r.otp} generated!`)):this._triggerToast("OTP generated successfully")}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}finally{this._isGenerating=!1}}}_copyToClipboard(t){t&&navigator.clipboard.writeText(t).then(()=>this._triggerToast("PIN copied to clipboard!"),()=>this._triggerToast("Failed to copy PIN"))}_shareOtp(t,e){if(!t)return;const r=`Your guest access PIN for Atomberg Smart Lock is ${t} followed by #. Valid until ${e}.`;navigator.share?navigator.share({title:"Atomberg Smart Lock Guest PIN",text:r}).catch(()=>{this._copyToClipboard(r)}):this._copyToClipboard(r)}_renderMainView(t,e,r,i,s,o,a){const n="locked"===t.state,c="unlocking"===t.state,d="locking"===t.state;return B`
      <!-- Header -->
      <div class="card-header">
        <div class="header-left">
          <div>
            <div class="device-title">${a}</div>
            <div class="device-subtitle">${t.state.toUpperCase()} • Bluetooth BLE</div>
          </div>
        </div>
        <div class="header-right">
          ${null!==e?B`
                <div class="battery-badge ${e<=20?"battery-low":""}">
                  <ha-icon icon="${e<=20?"mdi:battery-alert":"mdi:battery"}"></ha-icon>
                  <span>${e}%</span>
                </div>
              `:""}
          <div
            class="history-nav-btn"
            @click="${()=>this._currentView="history"}"
            title="View OTP History & Audit Log"
          >
            <ha-icon icon="mdi:history"></ha-icon>
            <span>Logs (${i})</span>
          </div>
        </div>
      </div>

      <!-- Hero Lock Dial -->
      <div class="hero-container">
        <div
          class="lock-dial ${n?"locked":"unlocked"}"
          @click="${this._toggleLock}"
          title="${n?"Click to Unlock":"Click to Lock"}"
        >
          <ha-icon
            icon="${n?"mdi:lock":c?"mdi:lock-clock":d?"mdi:lock-reset":"mdi:lock-open-variant"}"
            style="color: ${n?"var(--card-locked)":"var(--card-unlocked)"};"
          ></ha-icon>
        </div>
        <div class="dial-status-label" style="color: ${n?"var(--card-locked)":"var(--card-unlocked)"};">
          ${c?"Unlocking...":d?"Locking...":n?"Locked":"Unlocked"}
        </div>
        <div class="dial-subtext">
          ${n?"Tap dial to unlock":"Tap dial to lock"}
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Guest OTP Generator Section -->
      <div class="section-title">
        <ha-icon icon="mdi:shield-key-outline"></ha-icon>
        <span>Offline Guest OTP Generator</span>
      </div>

      <!-- Duration Segmented Chips -->
      <div class="pill-group">
        ${ft.map(t=>B`
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
                Valid until: <strong>${r.expires_at||"Boundary Expiry"}</strong>
              </div>
              <div class="otp-actions">
                <div class="otp-action-btn" @click="${()=>this._copyToClipboard(r.otp)}">
                  <ha-icon icon="mdi:content-copy"></ha-icon>
                  <span>Copy PIN</span>
                </div>
                <div class="otp-action-btn" @click="${()=>this._shareOtp(r.otp,r.expires_at)}">
                  <ha-icon icon="mdi:share-variant"></ha-icon>
                  <span>Share PIN</span>
                </div>
              </div>
            </div>
          `:""}

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-status">
          <div class="status-dot"></div>
          <span>BLE Proxy Active</span>
        </div>
        <div>
          ${s||o?B`<span>Last: ${s||o}</span>`:B`<span>SL1 Pro</span>`}
        </div>
      </div>
    `}_renderHistoryView(t,e){const r=Math.floor(Date.now()/1e3),i="active"===this._historyFilter?t:e;return B`
      <!-- History Page Header -->
      <div class="history-page-header">
        <div class="back-btn" @click="${()=>this._currentView="main"}">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Back</span>
        </div>
        <div class="history-title">OTP Audit Log</div>
        <div class="history-count-badge">${i.length} Records</div>
      </div>

      <!-- Filter Segmented Tabs -->
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
              ${i.map(t=>{const e=t.valid_until_timestamp>r;return B`
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
                      <div>Expires: ${t.expires_at} (${t.duration_hours}h)</div>
                      ${t.created_at?B`<div>Created: ${t.created_at}</div>`:""}
                    </div>
                    <div class="history-card-actions">
                      <div class="history-action-btn" @click="${()=>this._copyToClipboard(t.otp)}">
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        <span>Copy PIN</span>
                      </div>
                      <div class="history-action-btn" @click="${()=>this._shareOtp(t.otp,t.expires_at)}">
                        <ha-icon icon="mdi:share-variant"></ha-icon>
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                `})}
            </div>
          `}
    `}render(){const t=this._getEntityId(),e=this.hass?.states[t];if(!e)return B`
        <ha-card>
          <div style="padding: 16px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon icon="mdi:lock-alert" style="--mdc-icon-size: 36px; margin-bottom: 8px;"></ha-icon>
            <div>No Atomberg Smart Lock found. Please configure an entity.</div>
          </div>
        </ha-card>
      `;const r=this._config.battery_sensor||this._getSecondaryEntityId("battery",["battery"]),i=r&&this.hass.states[r]?this.hass.states[r].state:null,s=i&&!isNaN(Number(i))?Number(i):null,o=this._config.otp_sensor||this._getSecondaryEntityId("otp",["last_generated_otp","last_otp"]),a=o?this.hass.states[o]:null;let n=[];a?.attributes?.active_otps&&Array.isArray(a.attributes.active_otps)&&(n=a.attributes.active_otps);let c=[];a?.attributes?.otp_history&&Array.isArray(a.attributes.otp_history)?c=a.attributes.otp_history:n.length>0&&(c=n);const d=this._latestOtp||(n.length>0?n[n.length-1]:null),l=this._config.last_user_sensor||this._getSecondaryEntityId("last_user",["last_user"]),h=l&&this.hass.states[l]?this.hass.states[l].state:null,p=this._config.last_event_sensor||this._getSecondaryEntityId("last_event",["last_event"]),u=p&&this.hass.states[p]?this.hass.states[p].state:null,g=this._config.name||e.attributes.friendly_name||"Atomberg Smart Lock";return B`
      <ha-card style="${this._config.accent_color?`--card-accent: ${this._config.accent_color};`:""}">
        ${"history"===this._currentView?this._renderHistoryView(n,c):this._renderMainView(e,s,d,c.length,h,u,g)}

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast?"show":""}">${this._toastMessage}</div>
      </ha-card>
    `}};t([lt({attribute:!1})],vt.prototype,"hass",void 0),t([ht()],vt.prototype,"_config",void 0),t([ht()],vt.prototype,"_selectedDuration",void 0),t([ht()],vt.prototype,"_isGenerating",void 0),t([ht()],vt.prototype,"_latestOtp",void 0),t([ht()],vt.prototype,"_toastMessage",void 0),t([ht()],vt.prototype,"_showToast",void 0),t([ht()],vt.prototype,"_currentView",void 0),t([ht()],vt.prototype,"_historyFilter",void 0),vt=t([(t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("atomberg-lock-card")],vt);export{vt as AtombergLockCard};
