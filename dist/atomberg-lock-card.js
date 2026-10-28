function t(t,e,s,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,s,a):o(e,s))||a);return r>3&&a&&Object.defineProperty(e,s,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??b)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,w=x.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,T=document,O=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,z=/>/g,I=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,j=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),G=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=T.createTreeWalker(T,129);function V(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",a=M;for(let e=0;e<s;e++){const s=t[e];let n,c,l=-1,d=0;for(;d<s.length&&(a.lastIndex=d,c=a.exec(s),null!==c);)d=a.lastIndex,a===M?"!--"===c[1]?a=L:void 0!==c[1]?a=z:void 0!==c[2]?(j.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=I):void 0!==c[3]&&(a=I):a===I?">"===c[0]?(a=o??M,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?I:'"'===c[3]?D:R):a===D||a===R?a=I:a===L||a===z?a=M:(a=I,o=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===M?s+P:l>=0?(i.push(n),s.slice(0,l)+E+s.slice(l)+S+h):s+S+(-2===l?e:h)}return[V(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const a=t.length-1,n=this.parts,[c,l]=K(t,e);if(this.el=Y.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[r++],s=i.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:s,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?st:Q}),i.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:o}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),F.nextNode(),n.push({type:2,index:++o});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===C)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)n.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===G)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=U(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);F.currentNode=i;let o=F.nextNode(),r=0,a=0,n=s[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new X(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new it(o,this,t)),this._$AV.push(e),n=s[++a]}r!==n?.index&&(o=F.nextNode(),r++)}return F.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new X(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const i=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=J(this,i[s+a],e,a),n===G&&(n=this._$AH[a]),r||=!U(n)||n!==this._$AH[a],n===W?t=W:t!==W&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===G)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(Y,X),(x.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new X(e.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},lt=(t=ct,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return dt({...t,state:!0,attribute:!1})}const pt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)})`
  :host {
    display: block;
    --card-accent: var(--atomberg-accent, var(--primary-color, #f5a623));
    --card-accent-rgb: 245, 166, 35;
    --card-on-accent: #ffffff;
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

  .brand-logo {
    height: 28px;
    width: auto;
    max-width: 130px;
    object-fit: contain;
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
    color: var(--card-on-accent);
    border-color: var(--card-accent);
    box-shadow: 0 2px 10px color-mix(in srgb, var(--card-accent) 40%, transparent);
  }

  /* Action Buttons */
  .btn-generate {
    width: 100%;
    padding: 12px 16px;
    border-radius: 14px;
    border: none;
    background: var(--card-accent);
    color: var(--card-on-accent);
    font-size: 0.95rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--card-accent) 35%, transparent);
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

  /* Active OTP List */
  .otp-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
  }

  .otp-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
  }

  .otp-item-code {
    font-family: monospace;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .otp-item-meta {
    font-size: 0.75rem;
    color: var(--card-text-muted);
  }

  .otp-copy-icon {
    cursor: pointer;
    color: var(--card-text-muted);
    transition: color 0.2s;
  }

  .otp-copy-icon:hover {
    color: var(--card-accent);
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

  .status-dot.offline {
    background: #f44336;
    box-shadow: 0 0 6px #f44336;
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
`,ut={type:"atomberg-lock-card",name:"Atomberg Smart Lock Card",description:"A custom Lovelace card for Atomberg smart locks with offline OTP generator, active PINs, and audit logs.",preview:!0,domain:"lock",domains:["lock"],documentationURL:"https://github.com/selvakk2k/atomberg-lock-card"};window.customCards=window.customCards||[];const ft=window.customCards.findIndex(t=>"atomberg-lock-card"===t.type||"custom:atomberg-lock-card"===t.type);ft>=0?window.customCards[ft]=ut:window.customCards.push(ut);const gt=[{label:"30m",value:.5,desc:"Remote (1-Time)"},{label:"1h",value:1,desc:"1 Hour"},{label:"2h",value:2,desc:"2 Hours"},{label:"4h",value:4,desc:"4 Hours"},{label:"12h",value:12,desc:"12 Hours"},{label:"24h",value:24,desc:"24 Hours"}];let mt=class extends at{constructor(){super(...arguments),this._selectedDuration=.5,this._isGenerating=!1,this._latestOtp=null,this._toastMessage="",this._showToast=!1}static get styles(){return pt}static getConfigForm(){return{schema:[{name:"entity",label:"Lock Entity (Auto-Discovered if blank)",selector:{entity:{domain:"lock"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"card_layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact",value:"compact"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Companion Sensors (Auto-Discovered if blank)",icon:"mdi:link-variant",schema:[{name:"otp_sensor",label:"Generated OTP Sensor",selector:{entity:{domain:"sensor"}}},{name:"battery_sensor",label:"Battery Sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"last_user_sensor",label:"Last User Sensor",selector:{entity:{domain:"sensor"}}},{name:"last_event_sensor",label:"Last Event Sensor",selector:{entity:{domain:"sensor"}}}]},{name:"confirm_unlock",label:"Require Confirmation to Unlock",selector:{boolean:{}}}]}}static getStubConfig(t,e,s){let i="";if(e&&e.length&&(i=e.find(t=>t.startsWith("lock."))||""),!i&&s&&s.length&&(i=s.find(t=>t.startsWith("lock."))||""),!i&&t&&t.states){const e=Object.keys(t.states).filter(t=>t.startsWith("lock."));i=e.find(t=>t.includes("atomberg")||t.includes("sl1"))||e[0]||""}return{type:"custom:atomberg-lock-card",entity:i}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={card_layout:"default",default_duration:.5,show_history:!0,...t},this._config.default_duration&&(this._selectedDuration=this._config.default_duration)}_getEntityId(){if(this._config?.entity)return this._config.entity;if(this.hass?.states){const t=Object.keys(this.hass.states).filter(t=>t.startsWith("lock."));return t.find(t=>t.includes("atomberg")||t.includes("sl1"))||t[0]||""}return""}_getSecondaryEntityId(t,e){const s=this._getEntityId();if(!s||!this.hass?.states)return"";const i=s.replace("lock.","");for(const t of e){const e=`sensor.${i}_${t}`;if(this.hass.states[e])return e}const o=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor."));for(const t of e){const e=o.find(e=>e.includes(i)&&e.includes(t));if(e)return e}return""}_triggerToast(t){this._toastMessage=t,this._showToast=!0,setTimeout(()=>{this._showToast=!1},2800)}async _toggleLock(){const t=this._getEntityId();if(!t||!this.hass)return;const e=this.hass.states[t],s=!e||"locked"===e.state;if(s&&this._config.confirm_unlock){if(!window.confirm("Are you sure you want to unlock the door?"))return}const i=s?"unlock":"lock";try{await this.hass.callService("lock",i,{entity_id:t}),this._triggerToast(s?"Unlocking door...":"Locking door...")}catch(t){this._triggerToast(`Failed: ${t.message||t}`)}}async _generateOtp(){const t=this._getEntityId();if(t&&this.hass){this._isGenerating=!0;try{const e=await this.hass.callService("atomberg_lock","generate_otp",{entity_id:t,duration_hours:this._selectedDuration},void 0,!0),s=e?.response||e?.service_response||e;s&&s.otp?(this._latestOtp={otp:s.otp,expires_at:s.expires_at,valid_until_timestamp:s.valid_until_timestamp,duration_hours:s.duration_hours},this._triggerToast(`OTP ${s.otp} generated!`)):this._triggerToast("OTP generated successfully")}catch(t){this._triggerToast(`Failed to generate OTP: ${t.message||t}`)}finally{this._isGenerating=!1}}}_copyToClipboard(t){t&&navigator.clipboard.writeText(t).then(()=>this._triggerToast("PIN copied to clipboard!"),()=>this._triggerToast("Failed to copy PIN"))}_shareOtp(t,e){if(!t)return;const s=`Your guest access PIN for Atomberg Smart Lock is ${t} followed by #. Valid until ${e}.`;navigator.share?navigator.share({title:"Atomberg Smart Lock Guest PIN",text:s}).catch(()=>{this._copyToClipboard(s)}):this._copyToClipboard(s)}render(){const t=this._getEntityId(),e=this.hass?.states[t];if(!e)return B`
        <ha-card>
          <div style="padding: 16px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon icon="mdi:lock-alert" style="--mdc-icon-size: 36px; margin-bottom: 8px;"></ha-icon>
            <div>No Atomberg Smart Lock found. Please configure an entity.</div>
          </div>
        </ha-card>
      `;const s="locked"===e.state,i="unlocking"===e.state,o="locking"===e.state,r=this._config.battery_sensor||this._getSecondaryEntityId("battery",["battery"]),a=r&&this.hass.states[r]?this.hass.states[r].state:null,n=a&&!isNaN(Number(a))?Number(a):null,c=this._config.otp_sensor||this._getSecondaryEntityId("otp",["last_generated_otp","last_otp"]),l=c?this.hass.states[c]:null;let d=[];l?.attributes?.active_otps&&Array.isArray(l.attributes.active_otps)&&(d=l.attributes.active_otps);const h=this._latestOtp||(d.length>0?d[d.length-1]:null),p=this._config.last_user_sensor||this._getSecondaryEntityId("last_user",["last_user"]),u=p&&this.hass.states[p]?this.hass.states[p].state:null,f=this._config.last_event_sensor||this._getSecondaryEntityId("last_event",["last_event"]),g=f&&this.hass.states[f]?this.hass.states[f].state:null,m=this._config.name||e.attributes.friendly_name||"Atomberg Smart Lock";return B`
      <ha-card style="${this._config.accent_color?`--card-accent: ${this._config.accent_color};`:""}">
        <!-- Header -->
        <div class="card-header">
          <div class="header-left">
            <div>
              <div class="device-title">${m}</div>
              <div class="device-subtitle">${e.state.toUpperCase()} • Bluetooth BLE</div>
            </div>
          </div>
          <div class="header-right">
            ${null!==n?B`
                  <div class="battery-badge ${n<=20?"battery-low":""}">
                    <ha-icon icon="${n<=20?"mdi:battery-alert":"mdi:battery"}"></ha-icon>
                    <span>${n}%</span>
                  </div>
                `:""}
          </div>
        </div>

        <!-- Hero Lock Dial -->
        <div class="hero-container">
          <div
            class="lock-dial ${s?"locked":"unlocked"}"
            @click="${this._toggleLock}"
            title="${s?"Click to Unlock":"Click to Lock"}"
          >
            <ha-icon
              icon="${s?"mdi:lock":i?"mdi:lock-clock":o?"mdi:lock-reset":"mdi:lock-open-variant"}"
              style="color: ${s?"var(--card-locked)":"var(--card-unlocked)"};"
            ></ha-icon>
          </div>
          <div class="dial-status-label" style="color: ${s?"var(--card-locked)":"var(--card-unlocked)"};">
            ${i?"Unlocking...":o?"Locking...":s?"Locked":"Unlocked"}
          </div>
          <div class="dial-subtext">
            ${s?"Tap dial to unlock":"Tap dial to lock"}
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
          ${gt.map(t=>B`
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
        ${h?B`
              <div class="otp-hero-box">
                <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--card-accent);">
                  Active Keypad PIN (${h.duration_hours}h)
                </div>
                <div class="otp-digits" @click="${()=>this._copyToClipboard(h.otp)}">
                  ${h.otp.slice(0,4)}  ${h.otp.slice(4)}
                </div>
                <div class="otp-meta">
                  Valid until: <strong>${h.expires_at||"Boundary Expiry"}</strong>
                </div>
                <div class="otp-actions">
                  <div class="otp-action-btn" @click="${()=>this._copyToClipboard(h.otp)}">
                    <ha-icon icon="mdi:content-copy"></ha-icon>
                    <span>Copy PIN</span>
                  </div>
                  <div class="otp-action-btn" @click="${()=>this._shareOtp(h.otp,h.expires_at)}">
                    <ha-icon icon="mdi:share-variant"></ha-icon>
                    <span>Share PIN</span>
                  </div>
                </div>
              </div>
            `:""}

        <!-- Active OTP List -->
        ${d.length>1?B`
              <div style="margin-top: 14px;">
                <div class="section-title" style="font-size: 0.75rem;">
                  <span>Other Active Guest PINs (${d.length})</span>
                </div>
                <div class="otp-list">
                  ${d.map(t=>B`
                      <div class="otp-item">
                        <div>
                          <div class="otp-item-code">${t.otp}</div>
                          <div class="otp-item-meta">Expires: ${t.expires_at} (${t.duration_hours}h)</div>
                        </div>
                        <ha-icon
                          class="otp-copy-icon"
                          icon="mdi:content-copy"
                          @click="${()=>this._copyToClipboard(t.otp)}"
                          title="Copy PIN"
                        ></ha-icon>
                      </div>
                    `)}
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
            ${u||g?B`<span>Last: ${u||g}</span>`:B`<span>SL1 Pro</span>`}
          </div>
        </div>

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast?"show":""}">${this._toastMessage}</div>
      </ha-card>
    `}};t([dt({attribute:!1})],mt.prototype,"hass",void 0),t([ht()],mt.prototype,"_config",void 0),t([ht()],mt.prototype,"_selectedDuration",void 0),t([ht()],mt.prototype,"_isGenerating",void 0),t([ht()],mt.prototype,"_latestOtp",void 0),t([ht()],mt.prototype,"_toastMessage",void 0),t([ht()],mt.prototype,"_showToast",void 0),mt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("atomberg-lock-card")],mt);export{mt as AtombergLockCard};
