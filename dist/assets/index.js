(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},ml={},ws={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),Ic=Symbol.for("react.portal"),Rc=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Vc=Symbol.for("react.memo"),Hc=Symbol.for("react.lazy"),qi=Symbol.iterator;function Qc(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},js=Object.assign,Ss={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ks}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=vn.prototype;function ei(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ks}var ti=ei.prototype=new bs;ti.constructor=ei;js(ti,vn.prototype);ti.isPureReactComponent=!0;var ea=Array.isArray,Ns=Object.prototype.hasOwnProperty,ni={current:null},Cs={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ns.call(t,r)&&!Cs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ar,type:e,key:o,ref:i,props:l,_owner:ni.current}}function Yc(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ta=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kc(""+e.key):t.toString(36)}function Pr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ar:case Ic:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Pl(i,0):r,ea(l)?(n="",e!=null&&(n=e.replace(ta,"$&/")+"/"),Pr(l,t,n,"",function(d){return d})):l!=null&&(ri(l)&&(l=Yc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ta,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ea(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Pl(o,s);i+=Pr(o,t,n,u,l)}else if(u=Qc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Pl(o,s++),i+=Pr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function fr(e,t,n){if(e==null)return e;var r=[],l=0;return Pr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Fr={transition:null},Xc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:ni};function zs(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=vn;A.Fragment=Rc;A.Profiler=Ac;A.PureComponent=ei;A.StrictMode=Oc;A.Suspense=Wc;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;A.act=zs;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=js({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ni.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ns.call(t,u)&&!Cs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ar,type:e.type,key:l,ref:o,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:Bc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$c,_context:e},e.Consumer=e};A.createElement=Es;A.createFactory=function(e){var t=Es.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Uc,render:e}};A.isValidElement=ri;A.lazy=function(e){return{$$typeof:Hc,_payload:{_status:-1,_result:e},_init:Gc}};A.memo=function(e,t){return{$$typeof:Vc,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};A.unstable_act=zs;A.useCallback=function(e,t){return he.current.useCallback(e,t)};A.useContext=function(e){return he.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return he.current.useDeferredValue(e)};A.useEffect=function(e,t){return he.current.useEffect(e,t)};A.useId=function(){return he.current.useId()};A.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return he.current.useMemo(e,t)};A.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};A.useRef=function(e){return he.current.useRef(e)};A.useState=function(e){return he.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return he.current.useTransition()};A.version="18.3.1";ws.exports=A;var M=ws.exports;const Ms=Lc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=M,Zc=Symbol.for("react.element"),qc=Symbol.for("react.fragment"),ed=Object.prototype.hasOwnProperty,td=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nd={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ed.call(t,r)&&!nd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Zc,type:e,key:o,ref:i,props:l,_owner:td.current}}ml.Fragment=qc;ml.jsx=_s;ml.jsxs=_s;xs.exports=ml;var a=xs.exports,lo={},Ps={exports:{}},ze={},Fs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,z){var x=g.length;g.push(z);e:for(;0<x;){var F=x-1>>>1,I=g[F];if(0<l(I,z))g[F]=z,g[x]=I,x=F;else break e}}function n(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var z=g[0],x=g.pop();if(x!==z){g[0]=x;e:for(var F=0,I=g.length,Z=I>>>1;F<Z;){var _e=2*(F+1)-1,wn=g[_e],pe=_e+1,Et=g[pe];if(0>l(wn,x))pe<I&&0>l(Et,wn)?(g[F]=Et,g[pe]=x,F=pe):(g[F]=wn,g[_e]=x,F=_e);else if(pe<I&&0>l(Et,x))g[F]=Et,g[pe]=x,F=pe;else break e}}return z}function l(g,z){var x=g.sortIndex-z.sortIndex;return x!==0?x:g.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],y=1,h=null,m=3,S=!1,j=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(g){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=g)r(d),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(d)}}function w(g){if(N=!1,p(g),!j)if(n(u)!==null)j=!0,C(E);else{var z=n(d);z!==null&&L(w,z.startTime-g)}}function E(g,z){j=!1,N&&(N=!1,f(_),_=-1),S=!0;var x=m;try{for(p(z),h=n(u);h!==null&&(!(h.expirationTime>z)||g&&!D());){var F=h.callback;if(typeof F=="function"){h.callback=null,m=h.priorityLevel;var I=F(h.expirationTime<=z);z=e.unstable_now(),typeof I=="function"?h.callback=I:h===n(u)&&r(u),p(z)}else r(u);h=n(u)}if(h!==null)var Z=!0;else{var _e=n(d);_e!==null&&L(w,_e.startTime-z),Z=!1}return Z}finally{h=null,m=x,S=!1}}var k=!1,P=null,_=-1,$=5,v=-1;function D(){return!(e.unstable_now()-v<$)}function R(){if(P!==null){var g=e.unstable_now();v=g;var z=!0;try{z=P(!0,g)}finally{z?B():(k=!1,P=null)}}else k=!1}var B;if(typeof c=="function")B=function(){c(R)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ye=K.port2;K.port1.onmessage=R,B=function(){ye.postMessage(null)}}else B=function(){O(R,0)};function C(g){P=g,k||(k=!0,B())}function L(g,z){_=O(function(){g(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,C(E))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(g){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var x=m;m=z;try{return g()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,z){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var x=m;m=g;try{return z()}finally{m=x}},e.unstable_scheduleCallback=function(g,z,x){var F=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?F+x:F):x=F,g){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=x+I,g={id:y++,callback:z,priorityLevel:g,startTime:x,expirationTime:I,sortIndex:-1},x>F?(g.sortIndex=x,t(d,g),n(u)===null&&g===n(d)&&(N?(f(_),_=-1):N=!0,L(w,x-F))):(g.sortIndex=I,t(u,g),j||S||(j=!0,C(E))),g},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(g){var z=m;return function(){var x=m;m=z;try{return g.apply(this,arguments)}finally{m=x}}}})(Ts);Fs.exports=Ts;var rd=Fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=M,Ee=rd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ds=new Set,Vn={};function Bt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,od=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,na={},ra={};function id(e){return oo.call(ra,e)?!0:oo.call(na,e)?!1:od.test(e)?ra[e]=!0:(na[e]=!0,!1)}function ad(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sd(e,t,n,r){if(t===null||typeof t>"u"||ad(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var li=/[\-:]([a-z])/g;function oi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(li,oi);se[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(li,oi);se[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(li,oi);se[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ii(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sd(t,n,l,r)&&(n=null),r||l===null?id(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),ai=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Is=Symbol.for("react.context"),si=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),ui=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Rs=Symbol.for("react.offscreen"),la=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Fl;function _n(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Tl=!1;function Dl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function ud(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Ht:return"Portal";case io:return"Profiler";case ai:return"StrictMode";case ao:return"Suspense";case so:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case si:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ui:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function cd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dd(e){var t=Os(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=dd(e))}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Os(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $s(e,t){t=t.checked,t!=null&&ii(e,"checked",t,!1)}function fo(e,t){$s(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ia(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Pn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Bs(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var pd=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function ci(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,ln=null,on=null;function ua(e){if(e=cr(e)){if(typeof xo!="function")throw Error(b(280));var t=e.stateNode;t&&(t=xl(t),xo(e.stateNode,e.type,t))}}function Qs(e){ln?on?on.push(e):on=[e]:ln=e}function Ys(){if(ln){var e=ln,t=on;if(on=ln=null,ua(e),t)for(e=0;e<t.length;e++)ua(t[e])}}function Ks(e,t){return e(t)}function Gs(){}var Ll=!1;function Xs(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Ks(e,t,n)}finally{Ll=!1,(ln!==null||on!==null)&&(Gs(),Ys())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var wo=!1;if(nt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{wo=!1}function md(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Ln=!1,Hr=null,Qr=!1,ko=null,gd={onError:function(e){Ln=!0,Hr=e}};function hd(e,t,n,r,l,o,i,s,u){Ln=!1,Hr=null,md.apply(gd,arguments)}function vd(e,t,n,r,l,o,i,s,u){if(hd.apply(this,arguments),Ln){if(Ln){var d=Hr;Ln=!1,Hr=null}else throw Error(b(198));Qr||(Qr=!0,ko=d)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ca(e){if(Ut(e)!==e)throw Error(b(188))}function yd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ca(l),e;if(o===r)return ca(l),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Zs(e){return e=yd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var eu=Ee.unstable_scheduleCallback,da=Ee.unstable_cancelCallback,xd=Ee.unstable_shouldYield,wd=Ee.unstable_requestPaint,ee=Ee.unstable_now,kd=Ee.unstable_getCurrentPriorityLevel,di=Ee.unstable_ImmediatePriority,tu=Ee.unstable_UserBlockingPriority,Yr=Ee.unstable_NormalPriority,jd=Ee.unstable_LowPriority,nu=Ee.unstable_IdlePriority,gl=null,Ke=null;function Sd(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Cd,bd=Math.log,Nd=Math.LN2;function Cd(e){return e>>>=0,e===0?32:31-(bd(e)/Nd|0)|0}var hr=64,vr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Fn(s):(o&=i,o!==0&&(r=Fn(o)))}else i=n&~l,i!==0?r=Fn(i):o!==0&&(r=Fn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),l=1<<n,r|=e[n],t&=~l;return r}function Ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Be(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Ed(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Be(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function fi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,pi,iu,au,su,So=!1,yr=[],mt=null,gt=null,ht=null,Yn=new Map,Kn=new Map,ct=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Sn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&pi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Pd(e,t,n,r,l){switch(t){case"focusin":return mt=Sn(mt,e,t,n,r,l),!0;case"dragenter":return gt=Sn(gt,e,t,n,r,l),!0;case"mouseover":return ht=Sn(ht,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Yn.set(o,Sn(Yn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Kn.set(o,Sn(Kn.get(o)||null,e,t,n,r,l)),!0}return!1}function uu(e){var t=_t(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Js(n),t!==null){e.blockedOn=t,su(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=cr(n),t!==null&&pi(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){Tr(e)&&n.delete(t)}function Fd(){So=!1,mt!==null&&Tr(mt)&&(mt=null),gt!==null&&Tr(gt)&&(gt=null),ht!==null&&Tr(ht)&&(ht=null),Yn.forEach(pa),Kn.forEach(pa)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Fd)))}function Gn(e){function t(l){return bn(l,e)}if(0<yr.length){bn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&bn(mt,e),gt!==null&&bn(gt,e),ht!==null&&bn(ht,e),Yn.forEach(t),Kn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&ct.shift()}var an=it.ReactCurrentBatchConfig,Gr=!0;function Td(e,t,n,r){var l=W,o=an.transition;an.transition=null;try{W=1,mi(e,t,n,r)}finally{W=l,an.transition=o}}function Dd(e,t,n,r){var l=W,o=an.transition;an.transition=null;try{W=4,mi(e,t,n,r)}finally{W=l,an.transition=o}}function mi(e,t,n,r){if(Gr){var l=bo(e,t,n,r);if(l===null)Ql(e,t,r,Xr,n),fa(e,r);else if(Pd(l,e,t,n,r))r.stopPropagation();else if(fa(e,r),t&4&&-1<_d.indexOf(e)){for(;l!==null;){var o=cr(l);if(o!==null&&ou(o),o=bo(e,t,n,r),o===null&&Ql(e,t,r,Xr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Xr=null;function bo(e,t,n,r){if(Xr=null,e=ci(r),e=_t(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case di:return 1;case tu:return 4;case Yr:case jd:return 16;case nu:return 536870912;default:return 16}default:return 16}}var ft=null,gi=null,Dr=null;function du(){if(Dr)return Dr;var e,t=gi,n=t.length,r,l="value"in ft?ft.value:ft.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function ma(){return!1}function Me(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xr:ma,this.isPropagationStopped=ma,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=Me(yn),ur=J({},yn,{view:0,detail:0}),Ld=Me(ur),Rl,Ol,Nn,hl=J({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Rl=e.screenX-Nn.screenX,Ol=e.screenY-Nn.screenY):Ol=Rl=0,Nn=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),ga=Me(hl),Id=J({},hl,{dataTransfer:0}),Rd=Me(Id),Od=J({},ur,{relatedTarget:0}),Al=Me(Od),Ad=J({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Me(Ad),Bd=J({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=Me(Bd),Wd=J({},yn,{data:0}),ha=Me(Wd),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qd[e])?!!t[e]:!1}function vi(){return Yd}var Kd=J({},ur,{key:function(e){if(e.key){var t=Vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=Me(Kd),Xd=J({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=Me(Xd),Jd=J({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),Zd=Me(Jd),qd=J({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=Me(qd),tf=J({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=Me(tf),rf=[9,13,27,32],yi=nt&&"CompositionEvent"in window,In=null;nt&&"documentMode"in document&&(In=document.documentMode);var lf=nt&&"TextEvent"in window&&!In,fu=nt&&(!yi||In&&8<In&&11>=In),ya=" ",xa=!1;function pu(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function of(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(xa=!0,ya);case"textInput":return e=t.data,e===ya&&xa?null:e;default:return null}}function af(e,t){if(Yt)return e==="compositionend"||!yi&&pu(e,t)?(e=du(),Dr=gi=ft=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function gu(e,t,n,r){Qs(r),t=Jr(t,"onChange"),0<t.length&&(n=new hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Xn=null;function uf(e){Cu(e,0)}function vl(e){var t=Xt(e);if(As(t))return e}function cf(e,t){if(e==="change")return t}var hu=!1;if(nt){var $l;if(nt){var Bl="oninput"in document;if(!Bl){var ka=document.createElement("div");ka.setAttribute("oninput","return;"),Bl=typeof ka.oninput=="function"}$l=Bl}else $l=!1;hu=$l&&(!document.documentMode||9<document.documentMode)}function ja(){Rn&&(Rn.detachEvent("onpropertychange",vu),Xn=Rn=null)}function vu(e){if(e.propertyName==="value"&&vl(Xn)){var t=[];gu(t,Xn,e,ci(e)),Xs(uf,t)}}function df(e,t,n){e==="focusin"?(ja(),Rn=t,Xn=n,Rn.attachEvent("onpropertychange",vu)):e==="focusout"&&ja()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Xn)}function pf(e,t){if(e==="click")return vl(t)}function mf(e,t){if(e==="input"||e==="change")return vl(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:gf;function Jn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oo.call(t,l)||!We(e[l],t[l]))return!1}return!0}function Sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=Sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sa(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ba(n,o);var i=ba(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=nt&&"documentMode"in document&&11>=document.documentMode,Kt=null,No=null,On=null,Co=!1;function Na(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Co||Kt==null||Kt!==Vr(r)||(r=Kt,"selectionStart"in r&&xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Jn(On,r)||(On=r,r=Jr(No,"onSelect"),0<r.length&&(t=new hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Ul={},wu={};nt&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function yl(e){if(Ul[e])return Ul[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Ul[e]=t[n];return e}var ku=yl("animationend"),ju=yl("animationiteration"),Su=yl("animationstart"),bu=yl("transitionend"),Nu=new Map,Ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Nu.set(e,t),Bt(t,[e])}for(var Wl=0;Wl<Ca.length;Wl++){var Vl=Ca[Wl],yf=Vl.toLowerCase(),xf=Vl[0].toUpperCase()+Vl.slice(1);bt(yf,"on"+xf)}bt(ku,"onAnimationEnd");bt(ju,"onAnimationIteration");bt(Su,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(bu,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vd(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Ea(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Ea(l,s,d),o=u}}}if(Qr)throw e=ko,Qr=!1,ko=null,e}function H(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[kr]){e[kr]=!0,Ds.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Hl("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(cu(t)){case 1:var l=Td;break;case 4:l=Dd;break;default:l=mi}n=l.bind(null,t,n,e),l=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=_t(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Xs(function(){var d=o,y=ci(n),h=[];e:{var m=Nu.get(e);if(m!==void 0){var S=hi,j=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":S=Gd;break;case"focusin":j="focus",S=Al;break;case"focusout":j="blur",S=Al;break;case"beforeblur":case"afterblur":S=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Zd;break;case ku:case ju:case Su:S=$d;break;case bu:S=ef;break;case"scroll":S=Ld;break;case"wheel":S=nf;break;case"copy":case"cut":case"paste":S=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=va}var N=(t&4)!==0,O=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Qn(c,f),w!=null&&N.push(qn(c,w,p)))),O)break;c=c.return}0<N.length&&(m=new S(m,j,null,n,y),h.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==yo&&(j=n.relatedTarget||n.fromElement)&&(_t(j)||j[rt]))break e;if((S||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,S?(j=n.relatedTarget||n.toElement,S=d,j=j?_t(j):null,j!==null&&(O=Ut(j),j!==O||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=d),S!==j)){if(N=ga,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=va,w="onPointerLeave",f="onPointerEnter",c="pointer"),O=S==null?m:Xt(S),p=j==null?m:Xt(j),m=new N(w,c+"leave",S,n,y),m.target=O,m.relatedTarget=p,w=null,_t(y)===d&&(N=new N(f,c+"enter",j,n,y),N.target=p,N.relatedTarget=O,w=N),O=w,S&&j)t:{for(N=S,f=j,c=0,p=N;p;p=Wt(p))c++;for(p=0,w=f;w;w=Wt(w))p++;for(;0<c-p;)N=Wt(N),c--;for(;0<p-c;)f=Wt(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Wt(N),f=Wt(f)}N=null}else N=null;S!==null&&za(h,m,S,N,!1),j!==null&&O!==null&&za(h,O,j,N,!0)}}e:{if(m=d?Xt(d):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var E=cf;else if(wa(m))if(hu)E=mf;else{E=ff;var k=df}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=pf);if(E&&(E=E(e,d))){gu(h,E,n,y);break e}k&&k(e,m,d),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&po(m,"number",m.value)}switch(k=d?Xt(d):window,e){case"focusin":(wa(k)||k.contentEditable==="true")&&(Kt=k,No=d,On=null);break;case"focusout":On=No=Kt=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,Na(h,n,y);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":Na(h,n,y)}var P;if(yi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Yt?pu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(fu&&n.locale!=="ko"&&(Yt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Yt&&(P=du()):(ft=y,gi="value"in ft?ft.value:ft.textContent,Yt=!0)),k=Jr(d,_),0<k.length&&(_=new ha(_,e,null,n,y),h.push({event:_,listeners:k}),P?_.data=P:(P=mu(n),P!==null&&(_.data=P)))),(P=lf?of(e,n):af(e,n))&&(d=Jr(d,"onBeforeInput"),0<d.length&&(y=new ha("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=P))}Cu(h,t)})}function qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Qn(e,n),o!=null&&r.unshift(qn(e,o,l)),o=Qn(e,t),o!=null&&r.push(qn(e,o,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function za(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Qn(n,o),u!=null&&i.unshift(qn(n,u,s))):l||(u=Qn(n,o),u!=null&&i.push(qn(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var kf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(jf,"")}function jr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(b(425))}function Zr(){}var Eo=null,zo=null;function Mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,Sf=typeof clearTimeout=="function"?clearTimeout:void 0,_a=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof _a<"u"?function(e){return _a.resolve(null).then(e).catch(Nf)}:_o;function Nf(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+xn,er="__reactProps$"+xn,rt="__reactContainer$"+xn,Po="__reactEvents$"+xn,Cf="__reactListeners$"+xn,Ef="__reactHandles$"+xn;function _t(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[Ye])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Ye]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function xl(e){return e[er]||null}var Fo=[],Jt=-1;function Nt(e){return{current:e}}function Q(e){0>Jt||(e.current=Fo[Jt],Fo[Jt]=null,Jt--)}function V(e,t){Jt++,Fo[Jt]=e.current,e.current=t}var St={},fe=Nt(St),ke=Nt(!1),It=St;function dn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function je(e){return e=e.childContextTypes,e!=null}function qr(){Q(ke),Q(fe)}function Fa(e,t,n){if(fe.current!==St)throw Error(b(168));V(fe,t),V(ke,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(b(108,cd(e)||"Unknown",l));return J({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,It=fe.current,V(fe,e),V(ke,ke.current),!0}function Ta(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=zu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(fe),V(fe,e)):Q(ke),V(ke,n)}var Ze=null,wl=!1,Kl=!1;function Mu(e){Ze===null?Ze=[e]:Ze.push(e)}function zf(e){wl=!0,Mu(e)}function Ct(){if(!Kl&&Ze!==null){Kl=!0;var e=0,t=W;try{var n=Ze;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,wl=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),eu(di,Ct),l}finally{W=t,Kl=!1}}return null}var Zt=[],qt=0,tl=null,nl=0,Pe=[],Fe=0,Rt=null,qe=1,et="";function zt(e,t){Zt[qt++]=nl,Zt[qt++]=tl,tl=e,nl=t}function _u(e,t,n){Pe[Fe++]=qe,Pe[Fe++]=et,Pe[Fe++]=Rt,Rt=e;var r=qe;e=et;var l=32-Be(r)-1;r&=~(1<<l),n+=1;var o=32-Be(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,qe=1<<32-Be(t)+l|n<<l|r,et=o+e}else qe=1<<o|n<<l|r,et=e}function wi(e){e.return!==null&&(zt(e,1),_u(e,1,0))}function ki(e){for(;e===tl;)tl=Zt[--qt],Zt[qt]=null,nl=Zt[--qt],Zt[qt]=null;for(;e===Rt;)Rt=Pe[--Fe],Pe[Fe]=null,et=Pe[--Fe],Pe[Fe]=null,qe=Pe[--Fe],Pe[Fe]=null}var Ce=null,Ne=null,Y=!1,$e=null;function Pu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Da(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:qe,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ne=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(Y){var t=Ne;if(t){var n=t;if(!Da(e,t)){if(To(e))throw Error(b(418));t=vt(n.nextSibling);var r=Ce;t&&Da(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(To(e))throw Error(b(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function La(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Sr(e){if(e!==Ce)return!1;if(!Y)return La(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mo(e.type,e.memoizedProps)),t&&(t=Ne)){if(To(e))throw Fu(),Error(b(418));for(;t;)Pu(e,t),t=vt(t.nextSibling)}if(La(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ce?vt(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=Ne;e;)e=vt(e.nextSibling)}function fn(){Ne=Ce=null,Y=!1}function ji(e){$e===null?$e=[e]:$e.push(e)}var Mf=it.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ia(e){var t=e._init;return t(e._payload)}function Tu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=kt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=to(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var E=p.type;return E===Qt?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===st&&Ia(E)===c.type)?(w=l(c,p.props),w.ref=Cn(f,c,p),w.return=f,w):(w=Ur(p.type,p.key,p.props,null,f.mode,w),w.ref=Cn(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=no(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,E){return c===null||c.tag!==7?(c=Dt(p,f.mode,w,E),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=to(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return p=Ur(c.type,c.key,c.props,null,f.mode,p),p.ref=Cn(f,null,c),p.return=f,p;case Ht:return c=no(c,f.mode,p),c.return=f,c;case st:var w=c._init;return h(f,w(c._payload),p)}if(Pn(c)||kn(c))return c=Dt(c,f.mode,p,null),c.return=f,c;br(f,c)}return null}function m(f,c,p,w){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:return p.key===E?u(f,c,p,w):null;case Ht:return p.key===E?d(f,c,p,w):null;case st:return E=p._init,m(f,c,E(p._payload),w)}if(Pn(p)||kn(p))return E!==null?null:y(f,c,p,w,null);br(f,p)}return null}function S(f,c,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pr:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,E);case Ht:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,E);case st:var k=w._init;return S(f,c,p,k(w._payload),E)}if(Pn(w)||kn(w))return f=f.get(p)||null,y(c,f,w,E,null);br(c,w)}return null}function j(f,c,p,w){for(var E=null,k=null,P=c,_=c=0,$=null;P!==null&&_<p.length;_++){P.index>_?($=P,P=null):$=P.sibling;var v=m(f,P,p[_],w);if(v===null){P===null&&(P=$);break}e&&P&&v.alternate===null&&t(f,P),c=o(v,c,_),k===null?E=v:k.sibling=v,k=v,P=$}if(_===p.length)return n(f,P),Y&&zt(f,_),E;if(P===null){for(;_<p.length;_++)P=h(f,p[_],w),P!==null&&(c=o(P,c,_),k===null?E=P:k.sibling=P,k=P);return Y&&zt(f,_),E}for(P=r(f,P);_<p.length;_++)$=S(P,f,_,p[_],w),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?_:$.key),c=o($,c,_),k===null?E=$:k.sibling=$,k=$);return e&&P.forEach(function(D){return t(f,D)}),Y&&zt(f,_),E}function N(f,c,p,w){var E=kn(p);if(typeof E!="function")throw Error(b(150));if(p=E.call(p),p==null)throw Error(b(151));for(var k=E=null,P=c,_=c=0,$=null,v=p.next();P!==null&&!v.done;_++,v=p.next()){P.index>_?($=P,P=null):$=P.sibling;var D=m(f,P,v.value,w);if(D===null){P===null&&(P=$);break}e&&P&&D.alternate===null&&t(f,P),c=o(D,c,_),k===null?E=D:k.sibling=D,k=D,P=$}if(v.done)return n(f,P),Y&&zt(f,_),E;if(P===null){for(;!v.done;_++,v=p.next())v=h(f,v.value,w),v!==null&&(c=o(v,c,_),k===null?E=v:k.sibling=v,k=v);return Y&&zt(f,_),E}for(P=r(f,P);!v.done;_++,v=p.next())v=S(P,f,_,v.value,w),v!==null&&(e&&v.alternate!==null&&P.delete(v.key===null?_:v.key),c=o(v,c,_),k===null?E=v:k.sibling=v,k=v);return e&&P.forEach(function(R){return t(f,R)}),Y&&zt(f,_),E}function O(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Qt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:e:{for(var E=p.key,k=c;k!==null;){if(k.key===E){if(E=p.type,E===Qt){if(k.tag===7){n(f,k.sibling),c=l(k,p.props.children),c.return=f,f=c;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===st&&Ia(E)===k.type){n(f,k.sibling),c=l(k,p.props),c.ref=Cn(f,k,p),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===Qt?(c=Dt(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Ur(p.type,p.key,p.props,null,f.mode,w),w.ref=Cn(f,c,p),w.return=f,f=w)}return i(f);case Ht:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=no(p,f.mode,w),c.return=f,f=c}return i(f);case st:return k=p._init,O(f,c,k(p._payload),w)}if(Pn(p))return j(f,c,p,w);if(kn(p))return N(f,c,p,w);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=to(p,f.mode,w),c.return=f,f=c),i(f)):n(f,c)}return O}var pn=Tu(!0),Du=Tu(!1),rl=Nt(null),ll=null,en=null,Si=null;function bi(){Si=en=ll=null}function Ni(e){var t=rl.current;Q(rl),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ll=e,Si=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(ll===null)throw Error(b(308));en=e,ll.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Pt=null;function Ci(e){Pt===null?Pt=[e]:Pt.push(e)}function Lu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ci(t)):(n.next=l.next,l.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,lt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ci(r)):(t.next=l.next,l.next=t),r.interleaved=t,lt(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fi(e,n)}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;ut=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,y=d=u=null,s=o;do{var m=s.lane,S=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,N=s;switch(m=t,S=n,N.tag){case 1:if(j=N.payload,typeof j=="function"){h=j.call(S,h,m);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=N.payload,m=typeof j=="function"?j.call(S,h,m):j,m==null)break e;h=J({},h,m);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=S,u=h):y=y.next=S,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=h}}function Oa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(b(191,l));l.call(r)}}}var dr={},Ge=Nt(dr),tr=Nt(dr),nr=Nt(dr);function Ft(e){if(e===dr)throw Error(b(174));return e}function zi(e,t){switch(V(nr,t),V(tr,e),V(Ge,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}Q(Ge),V(Ge,t)}function mn(){Q(Ge),Q(tr),Q(nr)}function Ru(e){Ft(nr.current);var t=Ft(Ge.current),n=go(t,e.type);t!==n&&(V(tr,e),V(Ge,n))}function Mi(e){tr.current===e&&(Q(Ge),Q(tr))}var G=Nt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function _i(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Rr=it.ReactCurrentDispatcher,Xl=it.ReactCurrentBatchConfig,Ot=0,X=null,ne=null,le=null,al=!1,An=!1,rr=0,_f=0;function ue(){throw Error(b(321))}function Pi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Fi(e,t,n,r,l,o){if(Ot=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?Df:Lf,e=n(r,l),An){o=0;do{if(An=!1,rr=0,25<=o)throw Error(b(301));o+=1,le=ne=null,t.updateQueue=null,Rr.current=If,e=n(r,l)}while(An)}if(Rr.current=sl,t=ne!==null&&ne.next!==null,Ot=0,le=ne=X=null,al=!1,t)throw Error(b(300));return e}function Ti(){var e=rr!==0;return rr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Ie(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(b(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function lr(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var y=d.lane;if((Ot&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,X.lanes|=y,At|=y}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,We(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,X.lanes|=o,At|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);We(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ou(){}function Au(e,t){var n=X,r=Ie(),l=t(),o=!We(r.memoizedState,l);if(o&&(r.memoizedState=l,we=!0),r=r.queue,Di(Uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,or(9,Bu.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(b(349));Ot&30||$u(n,t,l)}return l}function $u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,Wu(t)&&Vu(e)}function Uu(e,t,n){return n(function(){Wu(t)&&Vu(e)})}function Wu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Vu(e){var t=lt(e,1);t!==null&&Ue(t,e,1,-1)}function Aa(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,X,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return Ie().memoizedState}function Or(e,t,n,r){var l=Qe();X.flags|=e,l.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var o=void 0;if(ne!==null){var i=ne.memoizedState;if(o=i.destroy,r!==null&&Pi(r,i.deps)){l.memoizedState=or(t,n,o,r);return}}X.flags|=e,l.memoizedState=or(1|t,n,o,r)}function $a(e,t){return Or(8390656,8,e,t)}function Di(e,t){return kl(2048,8,e,t)}function Qu(e,t){return kl(4,2,e,t)}function Yu(e,t){return kl(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,Ku.bind(null,t,e),n)}function Li(){}function Xu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ju(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return Ot&21?(We(n,t)||(n=ru(),X.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Pf(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{W=n,Xl.transition=r}}function qu(){return Ie().memoizedState}function Ff(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Lu(e,t,n,r),n!==null){var l=ge();Ue(n,e,r,l),nc(n,t,r)}}function Tf(e,t,n){var r=wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,We(s,i)){var u=t.interleaved;u===null?(l.next=l,Ci(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Lu(e,t,l,r),n!==null&&(l=ge(),Ue(n,e,r,l),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===X||t!==null&&t===X}function tc(e,t){An=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fi(e,n)}}var sl={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Df={readContext:Le,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ff.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Li,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Pf.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Qe();if(Y){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),oe===null)throw Error(b(349));Ot&30||$u(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,$a(Uu.bind(null,r,o,e),[e]),r.flags|=2048,or(9,Bu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Qe(),t=oe.identifierPrefix;if(Y){var n=et,r=qe;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:Le,useCallback:Xu,useContext:Le,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Yu,useMemo:Ju,useReducer:Jl,useRef:Hu,useState:function(){return Jl(lr)},useDebugValue:Li,useDeferredValue:function(e){var t=Ie();return Zu(t,ne.memoizedState,e)},useTransition:function(){var e=Jl(lr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1},If={readContext:Le,useCallback:Xu,useContext:Le,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Yu,useMemo:Ju,useReducer:Zl,useRef:Hu,useState:function(){return Zl(lr)},useDebugValue:Li,useDeferredValue:function(e){var t=Ie();return ne===null?t.memoizedState=e:Zu(t,ne.memoizedState,e)},useTransition:function(){var e=Zl(lr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Io(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=wt(e),o=tt(r,l);o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,l),t!==null&&(Ue(t,e,l,r),Ir(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=wt(e),o=tt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,l),t!==null&&(Ue(t,e,l,r),Ir(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=wt(e),l=tt(n,r);l.tag=2,t!=null&&(l.callback=t),t=yt(e,l,r),t!==null&&(Ue(t,e,r,n),Ir(t,e,r))}};function Ba(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,o):!0}function rc(e,t,n){var r=!1,l=St,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(l=je(t)?It:fe.current,r=t.contextTypes,o=(r=r!=null)?dn(e,l):St),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function Ro(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ei(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Le(o):(o=je(t)?It:fe.current,l.context=dn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Io(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&jl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=ud(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,Ko=r),Oo(e,t)},n}function oc(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oo(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Jf.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ha(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Of=it.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?Du(t,null,n,r):pn(t,e.child,n,r)}function Qa(e,t,n,r,l){n=n.render;var o=t.ref;return sn(t,l),r=Fi(e,t,n,r,o,l),n=Ti(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(Y&&n&&wi(t),t.flags|=1,me(e,t,r,l),t.child)}function Ya(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Wi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ic(e,t,o,r,l)):(e=Ur(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return ot(e,t,l)}return t.flags|=1,e=kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ot(e,t,l)}return Ao(e,t,n,r,l)}function ac(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(nn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(nn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(nn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(nn,be),be|=r;return me(e,t,l,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,l){var o=je(n)?It:fe.current;return o=dn(t,o),sn(t,l),n=Fi(e,t,n,r,o,l),r=Ti(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(Y&&r&&wi(t),t.flags|=1,me(e,t,n,l),t.child)}function Ka(e,t,n,r,l){if(je(n)){var o=!0;el(t)}else o=!1;if(sn(t,l),t.stateNode===null)Ar(e,t),rc(t,n,r),Ro(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=je(n)?It:fe.current,d=dn(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ua(t,i,r,d),ut=!1;var m=t.memoizedState;i.state=m,ol(t,r,i,l),u=t.memoizedState,s!==r||m!==u||ke.current||ut?(typeof y=="function"&&(Io(t,n,y,r),u=t.memoizedState),(s=ut||Ba(t,n,s,r,m,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Iu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Oe(t.type,s),i.props=d,h=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=je(n)?It:fe.current,u=dn(t,u));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ua(t,i,r,u),ut=!1,m=t.memoizedState,i.state=m,ol(t,r,i,l);var j=t.memoizedState;s!==h||m!==j||ke.current||ut?(typeof S=="function"&&(Io(t,n,S,r),j=t.memoizedState),(d=ut||Ba(t,n,d,r,m,j,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,j,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,j,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),i.props=r,i.state=j,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,l)}function $o(e,t,n,r,l,o){sc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ta(t,n,!1),ot(e,t,o);r=t.stateNode,Of.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,s,o)):me(e,t,s,o),t.memoizedState=r.state,l&&Ta(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),zi(e,t.containerInfo)}function Ga(e,t,n,r,l){return fn(),ji(l),t.flags|=256,me(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,l=G.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(G,l&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Nl(i,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Bo,e):Ii(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Af(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=kt(s,o):(o=Dt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Uo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ii(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&ji(r),pn(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Af(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(b(422))),Nr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),o=Dt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,i),t.child.memoizedState=Uo(i),t.memoizedState=Bo,o);if(!(t.mode&1))return Nr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(b(419)),r=ql(o,r,void 0),Nr(e,t,i,r)}if(s=(i&e.childLanes)!==0,we||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,lt(e,l),Ue(r,e,l,-1))}return Ui(),r=ql(Error(b(421))),Nr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Zf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ne=vt(l.nextSibling),Ce=t,Y=!0,$e=null,e!==null&&(Pe[Fe++]=qe,Pe[Fe++]=et,Pe[Fe++]=Rt,qe=e.id,et=e.overflow,Rt=t),t=Ii(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function eo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function dc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),eo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}eo(t,!0,n,null,o);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:uc(t),fn();break;case 5:Ru(t);break;case 1:je(t.type)&&el(t);break;case 4:zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(V(G,G.current&1),e=ot(e,t,n),e!==null?e.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return ot(e,t,n)}var fc,Wo,pc,mc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};pc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Ge.current);var o=null;switch(n){case"input":l=co(e,l),r=co(e,r),o=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":l=mo(e,l),r=mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}ho(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return je(t.type)&&qr(),ce(t),null;case 3:return r=t.stateNode,mn(),Q(ke),Q(fe),_i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Jo($e),$e=null))),Wo(e,t),ce(t),null;case 5:Mi(t);var l=Ft(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return ce(t),null}if(e=Ft(Ge.current),Sr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[er]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)H(Tn[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":oa(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":aa(r,o),H("invalid",r)}ho(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",""+s]):Vn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&H("scroll",r)}switch(n){case"input":mr(r),ia(r,o,!0);break;case"textarea":mr(r),sa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[er]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(i=vo(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)H(Tn[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":oa(e,r),l=co(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":aa(e,r),l=mo(e,r),H("invalid",e);break;default:l=r}ho(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Hs(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ws(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&ii(e,o,u,i))}switch(n){case"input":mr(e),ia(e,r,!1);break;case"textarea":mr(e),sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Ft(nr.current),Ft(Ge.current),Sr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&t.mode&1&&!(t.flags&128))Fu(),fn(),t.flags|=98560,o=!1;else if(o=Sr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Ye]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(Jo($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Ui())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return mn(),Wo(e,t),e===null&&Zn(t.stateNode.containerInfo),ce(t),null;case 10:return Ni(t.type._context),ce(t),null;case 17:return je(t.type)&&qr(),ce(t),null;case 19:if(Q(G),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)En(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=il(e),i!==null){for(t.flags|=128,En(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>hn&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304)}else{if(!r)if(e=il(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Y)return ce(t),null}else 2*ee()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,n=G.current,V(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Uf(e,t){switch(ki(t),t.tag){case 1:return je(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),Q(ke),Q(fe),_i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mi(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return mn(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return Bi(),null;case 24:return null;default:return null}}var Cr=!1,de=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,T=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Vo(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ja=!1;function Vf(e,t){if(Eo=Gr,e=xu(),xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,y=0,h=e,m=null;t:for(;;){for(var S;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=i),m===o&&++y===r&&(u=i),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var N=j.memoizedProps,O=j.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:Oe(t.type,N),O);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return j=Ja,Ja=!1,j}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vo(t,n,o)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[er],delete t[Po],delete t[Cf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var ie=null,Ae=!1;function at(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:de||tn(n,t);case 6:var r=ie,l=Ae;ie=null,at(e,t,n),ie=r,Ae=l,ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),Gn(e)):Yl(ie,n.stateNode));break;case 4:r=ie,l=Ae,ie=n.stateNode.containerInfo,Ae=!0,at(e,t,n),ie=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Vo(n,t,i),l=l.next}while(l!==r)}at(e,t,n);break;case 1:if(!de&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,at(e,t,n),de=r):at(e,t,n);break;default:at(e,t,n)}}function qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wf),t.forEach(function(r){var l=qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ae=!1;break e;case 3:ie=s.stateNode.containerInfo,Ae=!0;break e;case 4:ie=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(ie===null)throw Error(b(160));vc(o,i,l),ie=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ve(e),r&4){try{$n(3,e,e.return),Sl(3,e)}catch(N){q(e,e.return,N)}try{$n(5,e,e.return)}catch(N){q(e,e.return,N)}}break;case 1:Re(t,e),Ve(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Re(t,e),Ve(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(N){q(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&$s(l,o),vo(s,i);var d=vo(s,o);for(i=0;i<u.length;i+=2){var y=u[i],h=u[i+1];y==="style"?Hs(l,h):y==="dangerouslySetInnerHTML"?Ws(l,h):y==="children"?Hn(l,h):ii(l,y,h,d)}switch(s){case"input":fo(l,o);break;case"textarea":Bs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?rn(l,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?rn(l,!!o.multiple,o.defaultValue,!0):rn(l,!!o.multiple,o.multiple?[]:"",!1))}l[er]=o}catch(N){q(e,e.return,N)}}break;case 6:if(Re(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(b(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(N){q(e,e.return,N)}}break;case 3:if(Re(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(N){q(e,e.return,N)}break;case 4:Re(t,e),Ve(e);break;case 13:Re(t,e),Ve(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ai=ee())),r&4&&qa(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||y,Re(t,e),de=d):Re(t,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(h=T=y;T!==null;){switch(m=T,S=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:tn(m,m.return);var j=m.stateNode;if(typeof j.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(N){q(r,n,N)}}break;case 5:tn(m,m.return);break;case 22:if(m.memoizedState!==null){ts(h);continue}}S!==null?(S.return=m,T=S):ts(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Vs("display",i))}catch(N){q(e,e.return,N)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(N){q(e,e.return,N)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),Ve(e),r&4&&qa(e);break;case 21:break;default:Re(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var o=Za(e);Yo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Za(e);Qo(e,s,i);break;default:throw Error(b(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e,t,n){T=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Cr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Cr;var d=de;if(Cr=i,(de=u)&&!d)for(T=l;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?ns(l):u!==null?(u.return=i,T=u):ns(l);for(;o!==null;)T=o,xc(o),o=o.sibling;T=l,Cr=s,de=d}es(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):es(e)}}function es(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Gn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}de||t.flags&512&&Ho(t)}catch(m){q(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ts(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ns(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var o=t.return;try{Ho(t)}catch(u){q(t,o,u)}break;case 5:var i=t.return;try{Ho(t)}catch(u){q(t,i,u)}}}catch(u){q(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Qf=Math.ceil,ul=it.ReactCurrentDispatcher,Ri=it.ReactCurrentOwner,De=it.ReactCurrentBatchConfig,U=0,oe=null,te=null,ae=0,be=0,nn=Nt(0),re=0,ir=null,At=0,bl=0,Oi=0,Bn=null,xe=null,Ai=0,hn=1/0,Je=null,cl=!1,Ko=null,xt=null,Er=!1,pt=null,dl=0,Un=0,Go=null,$r=-1,Br=0;function ge(){return U&6?ee():$r!==-1?$r:$r=ee()}function wt(e){return e.mode&1?U&2&&ae!==0?ae&-ae:Mf.transition!==null?(Br===0&&(Br=ru()),Br):(e=W,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function Ue(e,t,n,r){if(50<Un)throw Un=0,Go=null,Error(b(185));sr(e,n,r),(!(U&2)||e!==oe)&&(e===oe&&(!(U&2)&&(bl|=n),re===4&&dt(e,ae)),Se(e,r),n===1&&U===0&&!(t.mode&1)&&(hn=ee()+500,wl&&Ct()))}function Se(e,t){var n=e.callbackNode;zd(e,t);var r=Kr(e,e===oe?ae:0);if(r===0)n!==null&&da(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&da(n),t===1)e.tag===0?zf(rs.bind(null,e)):Mu(rs.bind(null,e)),bf(function(){!(U&6)&&Ct()}),n=null;else{switch(lu(r)){case 1:n=di;break;case 4:n=tu;break;case 16:n=Yr;break;case 536870912:n=nu;break;default:n=Yr}n=Ec(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if($r=-1,Br=0,U&6)throw Error(b(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=Kr(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=U;U|=2;var o=jc();(oe!==e||ae!==t)&&(Je=null,hn=ee()+500,Tt(e,t));do try{Gf();break}catch(s){kc(e,s)}while(!0);bi(),ul.current=o,U=l,te!==null?t=0:(oe=null,ae=0,t=re)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=Xo(e,l))),t===1)throw n=ir,Tt(e,0),dt(e,r),Se(e,ee()),n;if(t===6)dt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Yf(l)&&(t=fl(e,r),t===2&&(o=jo(e),o!==0&&(r=o,t=Xo(e,o))),t===1))throw n=ir,Tt(e,0),dt(e,r),Se(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Mt(e,xe,Je);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Ai+500-ee(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_o(Mt.bind(null,e,xe,Je),t);break}Mt(e,xe,Je);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Be(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qf(r/1960))-r,10<r){e.timeoutHandle=_o(Mt.bind(null,e,xe,Je),r);break}Mt(e,xe,Je);break;case 5:Mt(e,xe,Je);break;default:throw Error(b(329))}}}return Se(e,ee()),e.callbackNode===n?wc.bind(null,e):null}function Xo(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=xe,xe=n,t!==null&&Jo(t)),e}function Jo(e){xe===null?xe=e:xe.push.apply(xe,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!We(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Oi,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function rs(e){if(U&6)throw Error(b(327));un();var t=Kr(e,0);if(!(t&1))return Se(e,ee()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=Xo(e,r))}if(n===1)throw n=ir,Tt(e,0),dt(e,t),Se(e,ee()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,xe,Je),Se(e,ee()),null}function $i(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(hn=ee()+500,wl&&Ct())}}function $t(e){pt!==null&&pt.tag===0&&!(U&6)&&un();var t=U;U|=1;var n=De.transition,r=W;try{if(De.transition=null,W=1,e)return e()}finally{W=r,De.transition=n,U=t,!(U&6)&&Ct()}}function Bi(){be=nn.current,Q(nn)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:mn(),Q(ke),Q(fe),_i();break;case 5:Mi(r);break;case 4:mn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Ni(r.type._context);break;case 22:case 23:Bi()}n=n.return}if(oe=e,te=e=kt(e.current,null),ae=be=t,re=0,ir=null,Oi=bl=At=0,xe=Bn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Pt=null}return e}function kc(e,t){do{var n=te;try{if(bi(),Rr.current=sl,al){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}al=!1}if(Ot=0,le=ne=X=null,An=!1,rr=0,Ri.current=null,n===null||n.return===null){re=1,ir=t,te=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Va(i);if(S!==null){S.flags&=-257,Ha(S,i,s,o,t),S.mode&1&&Wa(o,d,t),t=S,u=d;var j=t.updateQueue;if(j===null){var N=new Set;N.add(u),t.updateQueue=N}else j.add(u);break e}else{if(!(t&1)){Wa(o,d,t),Ui();break e}u=Error(b(426))}}else if(Y&&s.mode&1){var O=Va(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ha(O,i,s,o,t),ji(gn(u,s));break e}}o=u=gn(u,s),re!==4&&(re=2),Bn===null?Bn=[o]:Bn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=lc(o,u,t);Ra(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=oc(o,s,t);Ra(o,w);break e}}o=o.return}while(o!==null)}bc(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function jc(){var e=ul.current;return ul.current=sl,e===null?sl:e}function Ui(){(re===0||re===3||re===2)&&(re=4),oe===null||!(At&268435455)&&!(bl&268435455)||dt(oe,ae)}function fl(e,t){var n=U;U|=2;var r=jc();(oe!==e||ae!==t)&&(Je=null,Tt(e,t));do try{Kf();break}catch(l){kc(e,l)}while(!0);if(bi(),U=n,ul.current=r,te!==null)throw Error(b(261));return oe=null,ae=0,re}function Kf(){for(;te!==null;)Sc(te)}function Gf(){for(;te!==null&&!xd();)Sc(te)}function Sc(e){var t=Cc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?bc(e):te=t,Ri.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uf(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Bf(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Mt(e,t,n){var r=W,l=De.transition;try{De.transition=null,W=1,Xf(e,t,n,r)}finally{De.transition=l,W=r}return null}function Xf(e,t,n,r){do un();while(pt!==null);if(U&6)throw Error(b(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Md(e,o),e===oe&&(te=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,Ec(Yr,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var i=W;W=1;var s=U;U|=4,Ri.current=null,Vf(e,n),yc(n,e),hf(zo),Gr=!!Eo,zo=Eo=null,e.current=n,Hf(n),wd(),U=s,W=i,De.transition=o}else e.current=n;if(Er&&(Er=!1,pt=e,dl=l),o=e.pendingLanes,o===0&&(xt=null),Sd(n.stateNode),Se(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(cl)throw cl=!1,e=Ko,Ko=null,e;return dl&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===Go?Un++:(Un=0,Go=e):Un=0,Ct(),null}function un(){if(pt!==null){var e=lu(dl),t=De.transition,n=W;try{if(De.transition=null,W=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,dl=0,U&6)throw Error(b(331));var l=U;for(U|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:$n(8,y,o)}var h=y.child;if(h!==null)h.return=y,T=h;else for(;T!==null;){y=T;var m=y.sibling,S=y.return;if(gc(y),y===d){T=null;break}if(m!==null){m.return=S,T=m;break}T=S}}}var j=o.alternate;if(j!==null){var N=j.child;if(N!==null){j.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$n(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(E){q(s,s.return,E)}if(s===i){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(U=l,Ct(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{W=n,De.transition=t}}return!1}function ls(e,t,n){t=gn(n,t),t=lc(e,t,1),e=yt(e,t,1),t=ge(),e!==null&&(sr(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=gn(n,e),e=oc(t,e,1),t=yt(t,e,1),e=ge(),t!==null&&(sr(t,1,e),Se(t,e));break}}t=t.return}}function Jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>ee()-Ai?Tt(e,0):Oi|=n),Se(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ge();e=lt(e,t),e!==null&&(sr(e,t,n),Se(e,n))}function Zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Nc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,$f(e,t,n);we=!!(e.flags&131072)}else we=!1,Y&&t.flags&1048576&&_u(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=dn(t,fe.current);sn(t,n),l=Fi(null,t,r,e,l,n);var o=Ti();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,el(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ei(t),l.updater=jl,t.stateNode=l,l._reactInternals=t,Ro(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&wi(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=tp(r),e=Oe(r,e),l){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Qa(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,Oe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ao(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ka(e,t,r,l,n);case 3:e:{if(uc(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Iu(e,t),ol(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=gn(Error(b(423)),t),t=Ga(e,t,r,n,l);break e}else if(r!==l){l=gn(Error(b(424)),t),t=Ga(e,t,r,n,l);break e}else for(Ne=vt(t.stateNode.containerInfo.firstChild),Ce=t,Y=!0,$e=null,n=Du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===l){t=ot(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Ru(t),e===null&&Do(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Mo(r,l)?i=null:o!==null&&Mo(r,o)&&(t.flags|=32),sc(e,t),me(e,t,i,n),t.child;case 6:return e===null&&Do(t),null;case 13:return cc(e,t,n);case 4:return zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Qa(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,V(rl,r._currentValue),r._currentValue=i,o!==null)if(We(o.value,i)){if(o.children===l.children&&!ke.current){t=ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Lo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(b(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Lo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=Le(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ya(e,t,r,l,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ar(e,t),t.tag=1,je(r)?(e=!0,el(t)):e=!1,sn(t,n),rc(t,r,l),Ro(t,r,l,n),$o(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(b(156,t.tag))};function Ec(e,t){return eu(e,t)}function ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new ep(e,t,n,r)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tp(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===si)return 11;if(e===ui)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Wi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qt:return Dt(n.children,l,o,t);case ai:i=8,l|=8;break;case io:return e=Te(12,n,t,l|2),e.elementType=io,e.lanes=o,e;case ao:return e=Te(13,n,t,l),e.elementType=ao,e.lanes=o,e;case so:return e=Te(19,n,t,l),e.elementType=so,e.lanes=o,e;case Rs:return Nl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:i=10;break e;case Is:i=9;break e;case si:i=11;break e;case ui:i=14;break e;case st:i=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Rs,e.lanes=n,e.stateNode={isHidden:!1},e}function to(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function no(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function np(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vi(e,t,n,r,l,o,i,s,u){return e=new np(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ei(o),e}function rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return St;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(je(n))return zu(e,n,t)}return t}function Mc(e,t,n,r,l,o,i,s,u){return e=Vi(n,r,!0,e,l,o,i,s,u),e.context=zc(null),n=e.current,r=ge(),l=wt(n),o=tt(r,l),o.callback=t??null,yt(n,o,l),e.current.lanes=l,sr(e,l,r),Se(e,r),e}function Cl(e,t,n,r){var l=t.current,o=ge(),i=wt(l);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(l,t,i),e!==null&&(Ue(e,l,i,o),Ir(e,l,i)),i}function pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hi(e,t){os(e,t),(e=e.alternate)&&os(e,t)}function lp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qi(e){this._internalRoot=e}El.prototype.render=Qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Cl(e,t,null,null)};El.prototype.unmount=Qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Cl(null,e,null,null)}),t[rt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&uu(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function is(){}function op(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=pl(i);o.call(d)}}var i=Mc(t,r,e,0,null,!1,!1,"",is);return e._reactRootContainer=i,e[rt]=i.current,Zn(e.nodeType===8?e.parentNode:e),$t(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=pl(u);s.call(d)}}var u=Vi(e,0,!1,null,null,!1,!1,"",is);return e._reactRootContainer=u,e[rt]=u.current,Zn(e.nodeType===8?e.parentNode:e),$t(function(){Cl(t,u,n,r)}),u}function Ml(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=pl(i);s.call(u)}}Cl(t,i,e,l)}else i=op(n,t,e,l,r);return pl(i)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(fi(t,n|1),Se(t,ee()),!(U&6)&&(hn=ee()+500,Ct()))}break;case 13:$t(function(){var r=lt(e,1);if(r!==null){var l=ge();Ue(r,e,1,l)}}),Hi(e,1)}};pi=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=ge();Ue(t,e,134217728,n)}Hi(e,134217728)}};iu=function(e){if(e.tag===13){var t=wt(e),n=lt(e,t);if(n!==null){var r=ge();Ue(n,e,t,r)}Hi(e,t)}};au=function(){return W};su=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};xo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=xl(r);if(!l)throw Error(b(90));As(r),fo(r,l)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Ks=$i;Gs=$t;var ip={usingClientEntryPoint:!1,Events:[cr,Xt,xl,Qs,Ys,$i]},zn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ap={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{gl=zr.inject(ap),Ke=zr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(b(200));return rp(e,t,null,n)};ze.createRoot=function(e,t){if(!Yi(e))throw Error(b(299));var n=!1,r="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vi(e,1,!1,null,null,n,!1,r,l),e[rt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Qi(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $t(e)};ze.hydrate=function(e,t,n){if(!zl(t))throw Error(b(200));return Ml(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=_c;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,l,!1,o,i),e[rt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};ze.render=function(e,t,n){if(!zl(t))throw Error(b(200));return Ml(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!zl(e))throw Error(b(40));return e._reactRootContainer?($t(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};ze.unstable_batchedUpdates=$i;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ml(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=ze;var sp=Ps.exports,as=sp;lo.createRoot=as.createRoot,lo.hydrateRoot=as.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...s},u)=>M.createElement("svg",{ref:u,...cp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Fc("lucide",l),...s},[...i.map(([d,y])=>M.createElement(d,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(e,t)=>{const n=M.forwardRef(({className:r,...l},o)=>M.createElement(dp,{ref:o,iconNode:t,className:Fc(`lucide-${up(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=Xe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=Xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=Xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=Xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=Xe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Xe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=Xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pp=`

/* remove iframe scrollbar — auto-resize handles height */
html { overflow-y: auto; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }
body { margin: 0; }

/* base */
.ab {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-deep: #E5701A;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --blush:       #FFFFFF;
  --blush-tint:  rgba(255, 255, 255, .07);
  --blush-bd:    rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.ab * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ab-serif { font-family: 'Cormorant', 'Georgia', serif; }
.ab-wrap  { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; }

/* header */
.ab-brand { text-align: center; padding: 6px 0 2px; }
.ab-logo  { height: 26px; width: auto; max-width: 260px; display: block; margin: 0 auto; object-fit: contain; }
.ab-rule  { height: 1px; background: var(--line); margin: 18px 0 0; }

/* page title */
.ab-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 46px;
  line-height: .98;
  letter-spacing: -.005em;
  margin: 22px 0 9px;
}
.ab-h1 .acc {
  font-style: italic;
  color: var(--blush);
  font-weight: 500;
}
.ab-sub {
  color: var(--muted);
  font-size: 14.5px;
  max-width: 50ch;
}

/* legend */
.ab-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 4px;
}
.ab-key {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 6px 12px;
}
.ab-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

/* week navigation */
.ab-week-hd    { text-align: center; margin: 20px 0 8px; }
.ab-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.ab-week-month {
  font-family: 'Cormorant', serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 12px;
}
.ab-week-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.ab-week-arr {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.ab-week-arr:hover {
  background: var(--surface2);
  border-color: #3a3a3e;
  color: var(--ink);
}
.ab-days {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}
.ab-days::-webkit-scrollbar { display: none; }
.ab-day {
  flex: 0 0 auto;
  min-width: 60px;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 11px 9px;
  cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.ab-day:hover {
  transform: translateY(-1px);
  border-color: #3a3a3e;
}
.ab-day-dow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.ab-day-num {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  letter-spacing: -.01em;
}
.ab-day.on { background: var(--orange); border-color: var(--orange); }
.ab-day.on .ab-day-dow,
.ab-day.on .ab-day-num { color: #0B0B0C; }
.ab-day-pref {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--orange);
  margin: 5px auto 0;
}
.ab-day.on .ab-day-pref { background: #0B0B0C; }

/* period labels */
.ab-period {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 24px 0 10px;
}

/* slot cards */
.ab-slot {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 11px;
  overflow: hidden;
  transition: transform .12s, box-shadow .12s, border-color .12s;
}
.ab-slot.preferred { background: var(--orange-tint); border-color: var(--orange-bd); }
.ab-slot.open      { background: var(--blush-tint);  border-color: var(--blush-bd);  }
.ab-slot.reserved {
  background: repeating-linear-gradient(
    45deg,
    #121214, #121214 7px,
    #161618, #161618 14px
  );
  opacity: .5;
}
.ab-slot.mine { background: var(--orange); border-color: var(--orange); opacity: 1; }

/* slot icon */
.ab-ico {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}
.ab-slot.preferred .ab-ico { background: var(--orange);   color: #0B0B0C; }
.ab-slot.open      .ab-ico { background: var(--surface2); color: var(--blush); border: 1px solid var(--blush-bd); }
.ab-slot.reserved  .ab-ico { background: var(--surface2); color: var(--res);   border: 1px solid var(--res-bd);   }
.ab-slot.mine      .ab-ico { background: rgba(11, 11, 12, .18); color: #0B0B0C; }

/* slot body */
.ab-body { flex: 1; min-width: 0; }
.ab-eye {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.ab-slot.preferred .ab-eye { color: var(--orange); }
.ab-slot.open      .ab-eye { color: var(--blush);  }
.ab-slot.reserved  .ab-eye { color: var(--res);    }
.ab-slot.mine      .ab-eye { color: #0B0B0C; opacity: .7; }
.ab-time {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.05;
  letter-spacing: -.01em;
}
.ab-slot.mine .ab-time { color: #0B0B0C; }
.ab-meta {
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 2px;
}
.ab-slot.mine .ab-meta { color: #0B0B0C; opacity: .7; }
.ab-meta .ab-wl { display: inline-flex; align-items: center; gap: 4px; }

/* slot action buttons */
.ab-act { flex: 0 0 auto; }
.ab-btn {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 13.5px;
  border-radius: 11px;
  padding: 10px 16px;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: filter .12s, transform .08s, background .12s, border-color .12s;
}
.ab-btn:active { transform: translateY(1px); }
.ab-btn:hover  { filter: brightness(1.06); }
.ab-btn-pref       { background: var(--orange); color: #0B0B0C; }
.ab-btn-open       { background: transparent; color: var(--ink); border-color: var(--blush-bd); }
.ab-btn-open:hover { border-color: var(--blush); filter: none; }
.ab-btn-wait       { background: transparent; color: var(--res); border-color: var(--res-bd); }
.ab-btn-wait:hover { border-color: var(--res); filter: none; }
.ab-btn-pill {
  background: rgba(11, 11, 12, .18);
  color: #0B0B0C;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* sessions bar */
.ab-foot {
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 12px 16px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
.ab-foot-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--orange-tint);
  border: 1px solid var(--orange-bd);
  border-radius: 12px;
  padding: 10px 20px;
  cursor: pointer;
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .02em;
  transition: background .15s;
}
.ab-foot-btn:hover { background: rgba(245,132,31,.2); }
.ab-foot-btn-label { text-transform: uppercase; font-size: 11px; letter-spacing: .1em; color: var(--muted); }
.ab-foot-btn-count {
  background: var(--orange);
  color: #fff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 7px;
  min-width: 20px;
  text-align: center;
}

/* loading state */
.ab-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  color: var(--muted);
  font-size: 15px;
  letter-spacing: .02em;
}
.ab-foot-h {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: .02em;
  white-space: nowrap;
  flex: 0 0 auto;
  text-transform: uppercase;
}
.ab-foot-tags {
  display: flex;
  gap: 6px;
  flex: 0 1 auto;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 2px;
}
.ab-foot-tags::-webkit-scrollbar { display: none; }
.ab-tag {
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 500;
  background: var(--orange-tint);
  color: var(--orange);
  border: 1px solid var(--orange-bd);
  border-radius: 999px;
  padding: 4px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ab-tag.wait {
  background: var(--surface2);
  color: var(--res);
  border-color: var(--res-bd);
}
.ab-tag button {
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  display: grid;
  place-items: center;
  opacity: .6;
}
.ab-tag button:hover { opacity: 1; }
.ab-foot-empty { color: var(--muted); font-size: 13px; }

/* toast */
.ab-toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: var(--surface2);
  color: #fff;
  font-size: 13.5px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  gap: 9px;
  z-index: 60;
  animation: ab-rise .22s ease;
}
.ab-toast .ic { color: var(--orange); }
@keyframes ab-rise {
  from { opacity: 0; transform: translate(-50%, 8px); }
  to   { opacity: 1; transform: translate(-50%, 0);   }
}

/* preferred-nudge modal */
.ab-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .62);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 70;
  animation: ab-fade .15s ease;
}
@keyframes ab-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.ab-modal {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  max-width: 380px;
  width: 100%;
  padding: 24px;
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, .6);
  animation: ab-pop .18s ease;
}
@keyframes ab-pop {
  from { opacity: 0; transform: scale(.96); }
  to   { opacity: 1; transform: scale(1);   }
}
.ab-modal-ico {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  background: var(--orange-tint);
  color: var(--orange);
  display: grid;
  place-items: center;
  margin-bottom: 14px;
}
.ab-modal h3 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 29px;
  letter-spacing: -.01em;
  margin-bottom: 7px;
}
.ab-modal h3 .acc { font-style: italic; color: var(--blush); }
.ab-modal p {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 18px;
}
.ab-modal p b { color: var(--ink); font-weight: 600; }
.ab-modal-acts { display: flex; flex-direction: column; gap: 8px; }
.ab-modal-acts .ab-btn { width: 100%; padding: 13px; font-size: 14.5px; }
.ab-btn-line { background: transparent; color: var(--muted); border: none; }

/* focus and responsive */
.ab :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ab * { animation: none !important; transition: none !important; }
}
@media (max-width: 420px) {
  .ab-h1 { font-size: 38px; }
  .ab-key { font-size: 11px; padding: 5px 9px; }
}
`,mp={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},Vt=["Mon","Tue","Wed","Thu","Fri","Sat"],cs=["Morning","Afternoon","Evening"],gp=["January","February","March","April","May","June","July","August","September","October","November","December"],ds=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function hp(){const e={};return Vt.forEach(t=>{e[t]=mp[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const Wn={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:Xi},open:{label:"Open",dot:"#FFFFFF",icon:Tc},reserved:{label:"Reserved",dot:"#3A3A40",icon:Dc}};function vp({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:l=null}){const o=M.useMemo(hp,[]),i=e??o,[s,u]=M.useState("Mon"),[d,y]=M.useState(0),[h,m]=M.useState({}),[S,j]=M.useState({}),[N,O]=M.useState(null),[f,c]=M.useState(null);M.useEffect(()=>{if(!e)return;const C={};Object.values(e).flat().forEach(L=>{L.userBookingId&&(C[L.id]=L)}),m(C)},[e]),M.useEffect(()=>{r&&(m(C=>{const L={...C};return delete L[r.slotId],L}),O(r.message),l==null||l())},[r]),M.useEffect(()=>{if(!N)return;const C=setTimeout(()=>O(null),2600);return()=>clearTimeout(C)},[N]),M.useEffect(()=>{if(!n)return;const C=new Date,L=C.getDay(),g=new Date(C);g.setDate(C.getDate()-(L===0?6:L-1)+d*7),g.setHours(0,0,0,0),n({type:"weekChange",mondayISO:g.toISOString()})},[d]);const p=new Date,w=(i[s]||[]).filter(C=>{var g;const L=((g=C.slotData)==null?void 0:g.startDate)||C.startDate;return!L||new Date(L)>p}),E=M.useMemo(()=>{const C={};return cs.forEach(L=>{C[L]=w.filter(g=>g.period===L)}),C},[w]),k=M.useMemo(()=>{const C=new Date,L=C.getDay(),g=new Date(C);g.setDate(C.getDate()-(L===0?6:L-1)+d*7);const z={};return Vt.forEach((x,F)=>{const I=new Date(g);I.setDate(g.getDate()+F),z[x]={num:I.getDate(),month:I.getMonth(),year:I.getFullYear()}}),z},[d]),P=M.useMemo(()=>{const C=k[Vt[0]],L=k[Vt[Vt.length-1]];return C.month===L.month?`${gp[C.month]} ${C.year}`:`${ds[C.month]} - ${ds[L.month]} ${L.year}`},[k]),_=C=>O(C);function $(C){m(L=>({...L,[C.id]:C})),j(L=>{const g={...L};return delete g[C.id],g}),_(`Booked - ${C.day}, ${C.time}`),n==null||n({type:"book",slot:C})}function v(C){if(C.tier==="open"){const L=i[C.day].find(g=>g.tier==="preferred"&&!h[g.id]);if(L){c({slot:C,alt:L});return}}$(C)}function D(C){const L=(C.waitlist||0)+1;j(g=>({...g,[C.id]:{slot:C,pos:L}})),_(`You're #${L} on the waitlist - ${C.day}, ${C.time}`),n==null||n({type:"waitlist",slot:C})}function R(C){m(L=>{const g={...L};return delete g[C],g}),_("Booking canceled"),n==null||n({type:"cancel",slotId:C})}function B(C){j(L=>{const g={...L};return delete g[C],g}),_("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:C})}const K=Object.values(h),ye=Object.values(S);return a.jsxs("div",{className:"ab",children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),a.jsx("style",{children:pp}),a.jsxs("div",{className:"ab-wrap",children:[a.jsxs("h1",{className:"ab-h1",children:["Book your ",a.jsx("span",{className:"acc",children:"week."})]}),a.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),a.jsxs("div",{className:"ab-legend",children:[a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Wn.preferred.dot}}),"Preferred - recommended"]}),a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Wn.open.dot}}),"Open - available, not preferred"]}),a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Wn.reserved.dot}}),"Reserved - join waitlist"]})]}),a.jsxs("div",{className:"ab-week-hd",children:[a.jsx("div",{className:"ab-week-month",children:P}),a.jsx("div",{className:"ab-week-div"}),a.jsxs("div",{className:"ab-week-nav",children:[a.jsx("button",{className:"ab-week-arr",onClick:()=>y(C=>C-1),"aria-label":"Previous week",children:a.jsx(Gi,{size:18})}),a.jsx("div",{className:"ab-days",children:Vt.map(C=>{const L=(i[C]||[]).filter(x=>{var I;const F=((I=x.slotData)==null?void 0:I.startDate)||x.startDate;return!F||new Date(F)>p}),g=L.some(x=>x.tier==="preferred"),z=L.length>0&&!g&&L.every(x=>x.tier==="reserved");return a.jsxs("div",{className:`ab-day${C===s?" on":""}`,role:"button",tabIndex:0,onClick:()=>u(C),onKeyDown:x=>x.key==="Enter"&&u(C),children:[a.jsx("div",{className:"ab-day-dow",children:C}),a.jsx("div",{className:"ab-day-num",children:k[C].num}),(g||z)&&a.jsx("span",{className:"ab-day-pref",style:z?{background:"#555558"}:void 0})]},C)})}),a.jsx("button",{className:"ab-week-arr",onClick:()=>y(C=>C+1),"aria-label":"Next week",children:a.jsx(Lt,{size:18})})]}),a.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?a.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):cs.map(C=>E[C].length?a.jsxs("div",{children:[a.jsx("div",{className:"ab-period",children:C}),E[C].map(L=>a.jsx(yp,{slot:L,mine:!!h[L.id],wait:S[L.id],onBook:()=>v(L),onWaitlist:()=>D(L),onCancel:()=>R(L.id),onLeave:()=>B(L.id)},L.id))]},C):null)]}),a.jsx("div",{className:"ab-foot",children:a.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[a.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),K.length+ye.length>0?a.jsx("span",{className:"ab-foot-btn-count",children:K.length+ye.length}):a.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),a.jsx(Lt,{size:16,style:{color:"var(--muted)"}})]})}),N&&a.jsxs("div",{className:"ab-toast",children:[a.jsx(Ki,{size:16,className:"ic"}),N]}),f&&a.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:a.jsxs("div",{className:"ab-modal",onClick:C=>C.stopPropagation(),children:[a.jsx("div",{className:"ab-modal-ico",children:a.jsx(Xi,{size:22})}),a.jsxs("h3",{children:["A ",a.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),a.jsxs("p",{children:[a.jsx("b",{children:f.slot.time})," works, but Andrea has an open recommended slot at ",a.jsx("b",{children:f.alt.time})," the same day. Choosing it helps her fit more clients in."]}),a.jsxs("div",{className:"ab-modal-acts",children:[a.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{$(f.alt),c(null)},children:["Book ",f.alt.time," instead"]}),a.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{$(f.slot),c(null)},children:["Keep ",f.slot.time]})]})]})})]})}function yp({slot:e,mine:t,wait:n,onBook:r,onWaitlist:l,onCancel:o,onLeave:i}){const s=t?"mine":e.tier,u=t?Ki:Wn[e.tier].icon,d=t?"Your session":Wn[e.tier].label;return a.jsxs("div",{className:`ab-slot ${s}`,children:[a.jsx("div",{className:"ab-ico",children:a.jsx(u,{size:18})}),a.jsxs("div",{className:"ab-body",children:[a.jsx("div",{className:"ab-eye",children:d}),a.jsx("div",{className:"ab-time",children:e.time}),a.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?a.jsxs("span",{className:"ab-wl",children:[a.jsx(us,{size:12})," You're #",n.pos," on the waitlist"]}):a.jsxs("span",{className:"ab-wl",children:[a.jsx(us,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),a.jsx("div",{className:"ab-act",children:t?a.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:o,children:[a.jsx(Ji,{size:14})," Cancel"]}):e.tier==="reserved"?n?a.jsx("button",{className:"ab-btn ab-btn-wait",onClick:i,children:"Leave waitlist"}):a.jsx("button",{className:"ab-btn ab-btn-wait",onClick:l,children:"Join waitlist"}):e.tier==="preferred"?a.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",a.jsx(Lt,{size:14,style:{verticalAlign:"-2px"}})]}):a.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const xp=`

/* no internal iframe scrolling; body grows freely with content */
html { overflow-y: auto; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }
body { margin: 0; }

/* base */
.fg {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --np:          #FFFFFF;
  --np-tint:     rgba(255, 255, 255, .07);
  --np-line:     rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 1.45;
}
.fg * { box-sizing: border-box; margin: 0; padding: 0; }
.fg-wrap { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; }

/* page title */
.fg-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.02;
  letter-spacing: -.01em;
  margin: 4px 0 4px;
}
.fg-sub { color: var(--muted); font-size: 13.5px; max-width: 48ch; }

/* legend */
.fg-legend { display: flex; flex-wrap: wrap; gap: 7px; margin: 15px 0 4px; }
.fg-key {
  display: flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 500; color: var(--ink);
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 11px;
}
.fg-dot { width: 9px; height: 9px; border-radius: 3px; }

/* week navigation */
.fg-week-hd    { text-align: center; margin: 20px 0 8px; }
.fg-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.fg-week-month {
  font-family: 'Cormorant', serif; font-size: 18px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase; color: var(--ink); margin-bottom: 12px;
}
.fg-week-nav { display: flex; align-items: center; justify-content: center; gap: 10px; }
.fg-week-arr {
  width: 34px; height: 34px; border-radius: 10px;
  background: var(--surface); border: 1px solid var(--line);
  color: var(--muted); display: grid; place-items: center;
  cursor: pointer; flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.fg-week-arr:hover { background: var(--surface2); border-color: #3a3a3e; color: var(--ink); }
.fg-days { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
.fg-days::-webkit-scrollbar { display: none; }
.fg-day {
  flex: 0 0 auto; min-width: 58px; text-align: center;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; padding: 9px 8px; cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.fg-day:hover { transform: translateY(-1px); border-color: #3a3a3e; }
.fg-day-dow { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.fg-day-num { font-weight: 700; font-size: 20px; line-height: 1.15; }
.fg-day-c   { font-size: 10px; color: var(--muted); margin-top: 1px; }
.fg-day.on  { background: var(--orange); border-color: var(--orange); }
.fg-day.on .fg-day-dow,
.fg-day.on .fg-day-num,
.fg-day.on .fg-day-c { color: #0B0B0C; }

/* tally */
.fg-tally { font-size: 12.5px; color: var(--muted); margin: 14px 0 10px; display: flex; gap: 12px; flex-wrap: wrap; }
.fg-tally b { font-weight: 600; color: var(--ink); }
.fg-tally i { font-style: normal; }

/* time block cards */
.fg-blk {
  background: var(--surface); border: 1px solid var(--line);
  border-left: 4px solid var(--line); border-radius: 14px;
  padding: 12px 13px; margin-bottom: 9px;
}
.fg-blk.preferred { border-left-color: var(--orange);  }
.fg-blk.np        { border-left-color: var(--np-line); }
.fg-blk.reserved  { border-left-color: var(--res-bd);  }
.fg-blk-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.fg-blk-time { font-weight: 700; font-size: 21px; display: flex; align-items: center; gap: 8px; }
.fg-blk-ic { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; }
.fg-blk.preferred .fg-blk-ic { background: var(--orange);   color: #0B0B0C; }
.fg-blk.np        .fg-blk-ic { background: var(--surface2); color: var(--np);  border: 1px solid var(--np-line); }
.fg-blk.reserved  .fg-blk-ic { background: var(--surface2); color: var(--res); border: 1px solid var(--res-bd);  }
.fg-rm { background: none; border: none; color: var(--muted); cursor: pointer; padding: 5px; border-radius: 8px; }
.fg-rm:hover { background: var(--surface2); color: var(--ink); }

/* tier segmented control */
.fg-seg {
  display: flex; gap: 4px;
  background: var(--surface2); border: 1px solid var(--line);
  border-radius: 11px; padding: 4px;
}
.fg-seg button {
  flex: 1; font-family: 'Inter'; font-weight: 600; font-size: 12.5px;
  border: none; background: transparent; color: var(--muted);
  padding: 9px 6px; border-radius: 8px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 5px;
  transition: background .12s, color .12s;
}
.fg-seg button:hover        { color: var(--ink); }
.fg-seg button.on.preferred { background: var(--orange); color: #0B0B0C; }
.fg-seg button.on.np        { background: rgba(255, 255, 255, .15); color: var(--ink); }
.fg-seg button.on.reserved  { background: var(--res); color: var(--ink); }

/* add time */
.fg-add {
  width: 100%; border: 1.5px dashed var(--line); background: transparent;
  color: var(--muted); font-family: 'Inter'; font-weight: 600; font-size: 14px;
  border-radius: 13px; padding: 13px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 7px;
  margin-top: 4px; transition: border-color .12s, color .12s;
}
.fg-add:hover { border-color: var(--orange); color: var(--orange); }
.fg-palette { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 14px; margin-top: 4px; }
.fg-palette-h {
  font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 10px;
  display: flex; justify-content: space-between; align-items: center;
}
.fg-palette-h button { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 12px; font-weight: 600; }
.fg-palette-h button:hover { color: var(--ink); }
.fg-times { display: flex; flex-wrap: wrap; gap: 7px; }
.fg-tchip {
  font-weight: 700; font-size: 14px;
  background: var(--surface2); border: 1px solid var(--line);
  color: var(--muted); border-radius: 9px; padding: 7px 11px;
  cursor: pointer; transition: background .12s, border-color .12s, color .12s;
}
.fg-tchip:hover { background: var(--orange); border-color: var(--orange); color: #0B0B0C; }
.fg-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 18px 0 8px; }

/* service select */
.fg-svc {
  margin-top: 8px;
}
.fg-svc select {
  width: 100%; background: var(--surface2); border: 1px solid var(--line);
  border-radius: 9px; padding: 8px 10px; color: var(--ink);
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
  appearance: none; -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239C988F' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 10px center;
  padding-right: 28px; cursor: pointer;
}
.fg-svc select:focus { outline: 2px solid var(--ring); outline-offset: 1px; }
.fg-svc select option { background: #1C1C1E; }

/* custom time row */
.fg-custom {
  display: flex; align-items: center; gap: 8px;
  margin-top: 12px; padding-top: 12px;
  border-top: 1px solid var(--line);
}
.fg-custom-label { font-size: 12px; font-weight: 600; color: var(--muted); white-space: nowrap; }
.fg-custom input[type="time"] {
  flex: 1; background: var(--surface2); border: 1px solid var(--line);
  border-radius: 9px; padding: 7px 10px; color: var(--ink);
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
  color-scheme: dark;
}
.fg-custom input[type="time"]:focus { outline: 2px solid var(--ring); outline-offset: 1px; }
.fg-custom-add {
  font-family: 'Inter'; font-weight: 600; font-size: 13px;
  background: var(--orange); color: #0B0B0C; border: none;
  border-radius: 9px; padding: 8px 14px; cursor: pointer;
  white-space: nowrap; transition: filter .12s;
}
.fg-custom-add:hover { filter: brightness(1.08); }
.fg-custom-add:disabled { opacity: .4; cursor: not-allowed; }

/* save bar — static so iframe auto-resizes correctly */
.fg-save {
  background: rgba(11, 11, 12, .92);
  border-top: 1px solid var(--line);
  padding: 12px 14px;
  margin-top: 24px;
}
.fg-save-in { max-width: 560px; margin: 0 auto; display: flex; align-items: center; gap: 12px; }
.fg-save-t  { flex: 1; font-size: 12.5px; color: var(--muted); }
.fg-btn {
  font-family: 'Inter'; font-weight: 600; font-size: 14.5px;
  border-radius: 12px; padding: 12px 20px; border: none;
  background: var(--orange); color: #0B0B0C; cursor: pointer;
  display: inline-flex; align-items: center; gap: 7px;
  transition: filter .12s;
}
.fg-btn:hover:not(:disabled) { filter: brightness(1.06); }
.fg-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.fg :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .fg * { transition: none !important; } }
`,Mn=["Mon","Tue","Wed","Thu","Fri","Sat"],wp=["January","February","March","April","May","June","July","August","September","October","November","December"],fs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kp=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],Wr=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],Zo=[{key:"preferred",label:"Preferred",icon:Xi,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:Tc,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:Dc,dot:"#6A665F"}],jp=Object.fromEntries(Zo.map(e=>[e.key,e]));function ps(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let qo=100;function Sp(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function bp(){const e=(t,n,r=Wr[0])=>({id:++qo,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function Np({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[l,o]=M.useState(bp),[i,s]=M.useState("Mon"),[u,d]=M.useState(!1),[y,h]=M.useState(""),[m,S]=M.useState(0);M.useEffect(()=>{if(e===null)return;const v=Sp();e.forEach(D=>{v[D.dayOfWeek]&&v[D.dayOfWeek].push({id:++qo,time:D.time,tier:D.tier==="open"?"np":D.tier,service:D.service||Wr[0]})}),o(v)},[e]);const j=M.useMemo(()=>{const v=new Date,D=v.getDay(),R=new Date(v);R.setDate(v.getDate()-(D===0?6:D-1)+m*7);const B={};return Mn.forEach((K,ye)=>{const C=new Date(R);C.setDate(R.getDate()+ye),B[K]={num:C.getDate(),month:C.getMonth(),year:C.getFullYear()}}),B},[m]),N=M.useMemo(()=>{const v=j[Mn[0]],D=j[Mn[Mn.length-1]];return v.month===D.month?`${wp[v.month]} ${v.year}`:`${fs[v.month]} - ${fs[D.month]} ${D.year}`},[j]),O=M.useMemo(()=>[...l[i]].sort((v,D)=>ps(v.time)-ps(D.time)),[l,i]),f=M.useMemo(()=>{const v={preferred:0,np:0,reserved:0};return l[i].forEach(D=>v[D.tier]++),v},[l,i]),c=new Set(l[i].map(v=>v.time)),p=kp.filter(v=>!c.has(v));function w(v,D){o(R=>({...R,[i]:R[i].map(B=>B.id===v?{...B,tier:D}:B)}))}function E(v,D){o(R=>({...R,[i]:R[i].map(B=>B.id===v?{...B,service:D}:B)}))}function k(v){o(D=>({...D,[i]:D[i].filter(R=>R.id!==v)}))}function P(v){o(D=>({...D,[i]:[...D[i],{id:++qo,time:v,tier:"preferred",service:Wr[0]}]})),d(!1),h("")}function _(){if(!y)return;const[v,D]=y.split(":").map(Number),R=v<12?"AM":"PM",K=`${v%12||12}:${String(D).padStart(2,"0")} ${R}`;c.has(K)||P(K)}function $(){const v=[];Object.entries(l).forEach(([D,R])=>{R.forEach(B=>{v.push({dayOfWeek:D,time:B.time,tier:B.tier==="np"?"open":B.tier,service:B.service})})}),n==null||n({type:"savePrefs",items:v})}return a.jsxs("div",{className:"fg",children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),a.jsx("style",{children:xp}),a.jsxs("div",{className:"fg-wrap",children:[a.jsx("h1",{className:"fg-h1",children:"Set your availability"}),a.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),a.jsx("div",{className:"fg-legend",children:Zo.map(v=>a.jsxs("span",{className:"fg-key",children:[a.jsx("span",{className:"fg-dot",style:{background:v.dot}}),v.key==="preferred"&&"Preferred — recommended",v.key==="np"&&"Non-preferred — available",v.key==="reserved"&&"Reserved — held"]},v.key))}),a.jsxs("div",{className:"fg-week-hd",children:[a.jsx("div",{className:"fg-week-month",children:N}),a.jsx("div",{className:"fg-week-div"}),a.jsxs("div",{className:"fg-week-nav",children:[a.jsx("button",{className:"fg-week-arr",onClick:()=>S(v=>v-1),"aria-label":"Previous week",children:a.jsx(Gi,{size:18})}),a.jsx("div",{className:"fg-days",children:Mn.map(v=>a.jsxs("div",{className:`fg-day${v===i?" on":""}`,role:"button",tabIndex:0,onClick:()=>{s(v),d(!1)},onKeyDown:D=>D.key==="Enter"&&s(v),children:[a.jsx("div",{className:"fg-day-dow",children:v}),a.jsx("div",{className:"fg-day-num",children:j[v].num}),a.jsxs("div",{className:"fg-day-c",children:[l[v].length," slot",l[v].length!==1?"s":""]})]},v))}),a.jsx("button",{className:"fg-week-arr",onClick:()=>S(v=>v+1),"aria-label":"Next week",children:a.jsx(Lt,{size:18})})]}),a.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),a.jsxs("div",{className:"fg-tally",children:[a.jsxs("span",{children:[a.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",a.jsx("b",{children:f.preferred})," preferred"]}),a.jsxs("span",{children:[a.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",a.jsx("b",{children:f.np})," non-pref"]}),a.jsxs("span",{children:[a.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",a.jsx("b",{children:f.reserved})," reserved"]})]}),t?a.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):a.jsxs(a.Fragment,{children:[O.length===0&&!u&&a.jsxs("div",{className:"fg-empty",children:["No times set for ",i," yet. Add one below."]}),O.map(v=>{const D=jp[v.tier].icon;return a.jsxs("div",{className:`fg-blk ${v.tier}`,children:[a.jsxs("div",{className:"fg-blk-top",children:[a.jsxs("span",{className:"fg-blk-time",children:[a.jsx("span",{className:"fg-blk-ic",children:a.jsx(D,{size:15})}),v.time]}),a.jsx("button",{className:"fg-rm",onClick:()=>k(v.id),"aria-label":"Remove time",children:a.jsx(Ji,{size:18})})]}),a.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:Zo.map(R=>{const B=R.icon,K=v.tier===R.key;return a.jsxs("button",{className:`${K?"on":""} ${R.key}`,onClick:()=>w(v.id,R.key),children:[a.jsx(B,{size:13})," ",R.label]},R.key)})}),a.jsx("div",{className:"fg-svc",children:a.jsx("select",{value:v.service,onChange:R=>E(v.id,R.target.value),"aria-label":"Service",children:Wr.map(R=>a.jsx("option",{value:R,children:R},R))})})]},v.id)}),u?a.jsxs("div",{className:"fg-palette",children:[a.jsxs("div",{className:"fg-palette-h",children:[a.jsx("span",{children:"Pick a time to add"}),a.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),p.length===0?a.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",i,"."]}):a.jsx("div",{className:"fg-times",children:p.map(v=>a.jsx("button",{className:"fg-tchip",onClick:()=>P(v),children:v},v))}),a.jsxs("div",{className:"fg-custom",children:[a.jsx("span",{className:"fg-custom-label",children:"Custom"}),a.jsx("input",{type:"time",value:y,onChange:v=>h(v.target.value),onKeyDown:v=>v.key==="Enter"&&_()}),a.jsx("button",{className:"fg-custom-add",disabled:!y,onClick:_,children:"Add"})]})]}):a.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[a.jsx(fp,{size:17})," Add a time"]})]})]}),a.jsx("div",{className:"fg-save",children:a.jsxs("div",{className:"fg-save-in",children:[a.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),a.jsxs("button",{className:"fg-btn",disabled:r,onClick:$,children:[a.jsx(Ki,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const Zi="/assets/logo.png",Cp=window.self!==window.top,Ep=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #0B0B0C;
  --surface: #161617;
  --line:    #2A2A2D;
  --text:    #FFFFFF;
  --muted:   #9C988F;
  --orange:  #F5841F;
  --orange-tint: rgba(245,132,31,.12);
}

body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

.cv {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  padding: 0 20px 40px;
}

.cv-header {
  display: flex;
  justify-content: center;
  padding: 24px 0 16px;
}
.cv-logo { height: 38px; width: auto; }
.cv-rule { border: none; border-top: 1px solid var(--line); margin: 0 0 36px; }

.cv-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cv-heading {
  font-family: 'Cormorant', serif;
  font-size: 34px;
  font-weight: 600;
  letter-spacing: .01em;
  text-align: center;
  line-height: 1.15;
}
.cv-heading em { font-style: italic; color: var(--orange); }

.cv-card {
  width: 100%;
  max-width: 420px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}
.cv-card-top {
  background: var(--orange-tint);
  border-bottom: 1px solid var(--line);
  padding: 16px 20px;
}
.cv-card-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 6px;
}
.cv-card-service {
  font-family: 'Cormorant', serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text);
}
.cv-card-bottom {
  padding: 18px 20px;
  display: flex;
  gap: 28px;
}
.cv-card-item { display: flex; flex-direction: column; gap: 3px; }
.cv-card-item-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.cv-card-item-value {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
}

.cv-policy {
  font-size: 12px;
  color: var(--muted);
  text-align: center;
  max-width: 340px;
  line-height: 1.6;
}

.cv-btn {
  width: 100%;
  max-width: 420px;
  padding: 16px;
  background: var(--orange);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .02em;
  cursor: pointer;
  transition: opacity .15s;
}
.cv-btn:hover:not(:disabled) { opacity: .88; }
.cv-btn:disabled { opacity: .45; cursor: default; }

.cv-btn-ghost {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  width: 100%;
  max-width: 420px;
  padding: 13px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color .15s, color .15s;
}
.cv-btn-ghost:hover { border-color: var(--muted); color: var(--text); }

.cv-error {
  width: 100%;
  max-width: 420px;
  background: rgba(255,69,58,.08);
  border: 1px solid rgba(255,69,58,.25);
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 13px;
  color: #FF6B63;
  line-height: 1.55;
}

.cv-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  padding-top: 20px;
}
.cv-success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(52,199,89,.12);
  border: 1px solid rgba(52,199,89,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #34C759;
}
.cv-success-h {
  font-family: 'Cormorant', serif;
  font-size: 32px;
  font-weight: 600;
}
.cv-success-h em { font-style: italic; color: var(--orange); }
.cv-success-sub { font-size: 14px; color: var(--muted); max-width: 280px; line-height: 1.6; }

.cv-loading-slot {
  width: 100%;
  max-width: 420px;
  height: 130px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 14px;
}
`;function zp({slot:e=null}){const[t,n]=M.useState("idle"),[r,l]=M.useState("");M.useEffect(()=>{const u=d=>{var y;if((y=d.data)!=null&&y.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const h=d.data.message||"",m=h.toLowerCase().includes("plan")||h.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":h||"Could not confirm booking. Please try again.";l(m),n("error")}};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]);const o=()=>{n("loading"),l(""),Cp&&window.parent.postMessage({type:"abate-confirm"},"*")},i=()=>{n("idle"),l("")},s=t==="loading"?"Booking…":"Confirm my session →";return a.jsxs("div",{className:"cv",children:[a.jsx("style",{children:Ep}),a.jsx("div",{className:"cv-header",children:a.jsx("img",{src:Zi,alt:"Abate Wellness",className:"cv-logo"})}),a.jsx("hr",{className:"cv-rule"}),a.jsx("div",{className:"cv-body",children:t==="success"?a.jsxs("div",{className:"cv-success",children:[a.jsx("div",{className:"cv-success-icon",children:"✓"}),a.jsxs("div",{className:"cv-success-h",children:["You're ",a.jsx("em",{children:"booked"})]}),a.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cv-heading",children:["Confirm your ",a.jsx("em",{children:"session"})]}),e!=null&&e.service?a.jsxs("div",{className:"cv-card",children:[a.jsxs("div",{className:"cv-card-top",children:[a.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),a.jsx("div",{className:"cv-card-service",children:e.service})]}),a.jsxs("div",{className:"cv-card-bottom",children:[e.day&&a.jsxs("div",{className:"cv-card-item",children:[a.jsx("div",{className:"cv-card-item-label",children:"Date"}),a.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&a.jsxs("div",{className:"cv-card-item",children:[a.jsx("div",{className:"cv-card-item-label",children:"Time"}),a.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):a.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&a.jsx("div",{className:"cv-error",children:r}),t==="error"?a.jsx("button",{className:"cv-btn",onClick:i,children:"Try again"}):a.jsx("button",{className:"cv-btn",onClick:o,disabled:t==="loading",children:s}),a.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const Mr=window.self!==window.top,Mp=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,_p=e=>Mp.test(e||""),Pp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ro=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function Fp(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function _r(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Tp(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function Dp(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Lp(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function ms(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Ip=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --line:        #2A2A2D;
  --text:        #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245,132,31,.10);
  --orange-bd:   rgba(245,132,31,.30);
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

/* ── shell ─────────────────────────────────────────────────────────────────── */
.ms { min-height: 100vh; background: var(--bg); padding-bottom: 60px; }

/* ── header ────────────────────────────────────────────────────────────────── */
.ms-header { display: flex; justify-content: center; padding: 52px 0 16px; }
.ms-logo   { height: 38px; width: auto; }
.ms-rule   { border: none; border-top: 1px solid var(--line); }

/* ── title row ─────────────────────────────────────────────────────────────── */
.ms-title-row {
  max-width: 600px; margin: 24px auto 0; padding: 0 20px;
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
}
.ms-title { font-family: 'Cormorant', serif; font-size: 44px; font-weight: 600; letter-spacing: .01em; line-height: 1.1; }
.ms-title em { font-style: italic; color: var(--orange); }
.ms-title-count { font-size: 12px; font-weight: 600; letter-spacing: .10em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }

/* ── tabs ───────────────────────────────────────────────────────────────────── */
.ms-tabs {
  max-width: 600px; margin: 20px auto 0; padding: 0 20px;
  display: flex; border-bottom: 1px solid var(--line);
}
.ms-tab {
  padding: 10px 18px 11px; font-size: 13px; font-weight: 600; color: var(--muted);
  background: none; border: none; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color .15s, border-color .15s;
  display: flex; align-items: center; gap: 7px;
}
.ms-tab.active { color: var(--text); border-bottom-color: var(--orange); }
.ms-tab-badge {
  background: var(--orange); color: #fff; font-size: 10px; font-weight: 700;
  border-radius: 10px; padding: 1px 6px; line-height: 1.6;
}

/* ── week nav ───────────────────────────────────────────────────────────────── */
.ms-week-nav {
  max-width: 600px; margin: 22px auto 0; padding: 0 20px;
  display: flex; align-items: center; justify-content: space-between;
}
.ms-week-month { font-family: 'Cormorant', serif; font-size: 20px; font-weight: 600; letter-spacing: .01em; }
.ms-week-arrow {
  width: 32px; height: 32px; border: 1px solid var(--line); border-radius: 8px;
  background: none; color: var(--text);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .15s;
}
.ms-week-arrow:hover { background: var(--surface); }

/* ── day strip ──────────────────────────────────────────────────────────────── */
.ms-days { max-width: 600px; margin: 10px auto 0; padding: 0 20px; display: flex; gap: 3px; }
.ms-day {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 7px 2px 9px; border-radius: 10px; cursor: pointer; transition: background .15s;
}
.ms-day:hover  { background: var(--surface); }
.ms-day.sel    { background: var(--surface2); }
.ms-day-abbr   { font-size: 9px; font-weight: 700; letter-spacing: .07em; color: var(--muted); text-transform: uppercase; }
.ms-day-num    { font-size: 15px; font-weight: 700; }
.ms-day.today .ms-day-num { color: var(--orange); }
.ms-day-dot    { width: 5px; height: 5px; border-radius: 50%; background: var(--orange); }

/* ── section label ──────────────────────────────────────────────────────────── */
.ms-section {
  max-width: 600px; margin: 22px auto 10px; padding: 0 20px;
  font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
}

/* ── session cards ──────────────────────────────────────────────────────────── */
.ms-list { max-width: 600px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
.ms-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  padding: 16px 18px; display: flex; align-items: center; gap: 14px;
}
.ms-card-body  { flex: 1; min-width: 0; }
.ms-card-date  { font-size: 11px; font-weight: 700; letter-spacing: .07em; color: var(--orange); text-transform: uppercase; margin-bottom: 4px; }
.ms-card-time  { font-size: 22px; font-weight: 700; line-height: 1.1; }
.ms-card-svc   { font-size: 13px; color: var(--muted); margin-top: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ms-cancel-btn {
  background: none; border: 1px solid var(--line); border-radius: 8px; padding: 7px 12px;
  color: var(--muted); font-size: 12px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; gap: 5px;
  transition: border-color .15s, color .15s; white-space: nowrap; flex-shrink: 0;
}
.ms-cancel-btn:hover    { border-color: #FF453A; color: #FF453A; }
.ms-cancel-btn:disabled { opacity: .4; cursor: default; }

/* ── empty states ───────────────────────────────────────────────────────────── */
.ms-empty {
  max-width: 600px; margin: 44px auto 0; padding: 0 20px;
  display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center;
}
.ms-empty-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--surface); border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center; color: var(--muted);
}
.ms-empty-h   { font-family: 'Cormorant', serif; font-size: 24px; font-weight: 600; }
.ms-empty-sub { font-size: 13px; color: var(--muted); line-height: 1.65; }

/* ── book button ────────────────────────────────────────────────────────────── */
.ms-book-wrap { max-width: 600px; margin: 0 auto; padding: 26px 20px 0; display: flex; justify-content: center; }
.ms-book-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange); color: #fff; border: none; border-radius: 12px;
  padding: 13px 26px; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
}
.ms-book-btn:hover { opacity: .88; }

/* ── loading ────────────────────────────────────────────────────────────────── */
.ms-loading {
  display: flex; align-items: center; justify-content: center;
  min-height: 220px; color: var(--muted); font-size: 14px; letter-spacing: .02em;
}

/* ── auto-schedule tab ──────────────────────────────────────────────────────── */
.ms-auto { max-width: 600px; margin: 24px auto 0; padding: 0 20px; }
.ms-auto-desc { font-size: 13px; color: var(--muted); line-height: 1.65; margin-bottom: 20px; }

/* master toggle card */
.ms-auto-master {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 16px 18px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; margin-bottom: 16px;
}
.ms-auto-master.on { border-color: var(--orange-bd); }
.ms-auto-master-label { font-size: 15px; font-weight: 600; }
.ms-auto-master-sub   { font-size: 12px; color: var(--muted); margin-top: 3px; }

/* toggle pill */
.ms-toggle {
  width: 42px; height: 24px; border-radius: 12px; position: relative;
  border: none; cursor: pointer; flex-shrink: 0; transition: background .2s;
}
.ms-toggle[data-on="false"] { background: var(--line); }
.ms-toggle[data-on="true"]  { background: var(--orange); }
.ms-toggle::after {
  content: ''; position: absolute;
  width: 18px; height: 18px; border-radius: 50%; background: #fff;
  top: 3px; left: 3px; transition: transform .2s;
}
.ms-toggle[data-on="true"]::after { transform: translateX(18px); }

/* day rows */
.ms-auto-days { display: flex; flex-direction: column; gap: 6px; }
.ms-auto-row {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 16px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; transition: border-color .15s, opacity .2s;
}
.ms-auto-row.on       { border-color: var(--orange-bd); }
.ms-auto-row.disabled { opacity: .35; pointer-events: none; }
.ms-auto-day-name     { font-size: 14px; font-weight: 600; flex: 1; }
.ms-auto-time-input {
  border: 1px solid var(--line); border-radius: 8px; background: var(--surface2);
  color: var(--text); font-family: 'Inter', sans-serif; font-size: 14px;
  padding: 5px 10px; outline: none; width: 120px; text-align: center; transition: border-color .15s;
  color-scheme: dark;
}
.ms-auto-time-input:focus  { border-color: var(--orange); }
.ms-auto-time-off { font-size: 13px; color: var(--line); width: 120px; text-align: center; }

/* save row */
.ms-auto-save { margin-top: 22px; display: flex; align-items: center; gap: 14px; }
.ms-save-btn {
  background: var(--orange); color: #fff; border: none; border-radius: 12px;
  padding: 12px 28px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
}
.ms-save-btn:hover    { opacity: .88; }
.ms-save-btn:disabled { opacity: .5; cursor: default; }
.ms-saved-label { font-size: 13px; color: var(--orange); font-weight: 600; }
`;function Rp({sessions:e=null,onBook:t=null}){const[n,r]=M.useState(e),[l,o]=M.useState(null),[i,s]=M.useState("sessions"),u=(()=>{const g=new Date;return g.setHours(0,0,0,0),g})(),[d,y]=M.useState(()=>Fp(new Date)),[h,m]=M.useState(null),[S,j]=M.useState(!1),[N,O]=M.useState({}),[f,c]=M.useState(!1),[p,w]=M.useState(!1),[E,k]=M.useState(!1);M.useEffect(()=>{e!==null&&r(e)},[e]),M.useEffect(()=>{const g=z=>{var x,F,I;if((x=z.data)!=null&&x.type)switch(z.data.type){case"abate-schedule-data":r(z.data.sessions||[]);break;case"abate-schedule-cancelled":r(Z=>(Z||[]).filter(_e=>_e._id!==z.data.recordId)),o(null);break;case"abate-schedule-cancel-error":o(null);break;case"abate-auto-prefs-data":j(((F=z.data.prefs)==null?void 0:F.enabled)||!1),O(((I=z.data.prefs)==null?void 0:I.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":w(!1),k(!0),setTimeout(()=>k(!1),3e3);break}};return window.addEventListener("message",g),()=>window.removeEventListener("message",g)},[]),M.useEffect(()=>{i==="auto"&&!f&&Mr&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[i,f]);const P=g=>{o(g._id),Mr&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:g._id},"*")},_=()=>{Mr?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},$=()=>{w(!0),Mr&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:S,slots:N}},"*")},v=g=>{O(z=>{const x={...z};return x[g]!==void 0?delete x[g]:x[g]="",x})},D=(g,z)=>O(x=>({...x,[g]:z})),R=Array.from({length:7},(g,z)=>_r(d,z)),B=(n||[]).filter(g=>{const z=new Date(g.startDate);return z>=d&&z<_r(d,7)}),K=B.reduce((g,z)=>{const x=new Date(z.startDate),F=R.findIndex(I=>ms(I,x));return F>=0&&(g[F]=g[F]||[],g[F].push(z)),g},{}),ye=(h!==null?K[h]||[]:B).slice().sort((g,z)=>new Date(g.startDate)-new Date(z.startDate)),C=(n||[]).length,L=n===null;return a.jsxs("div",{className:"ms",children:[a.jsx("style",{children:Ip}),a.jsx("div",{className:"ms-header",children:a.jsx("img",{src:Zi,alt:"Abate Wellness",className:"ms-logo"})}),a.jsx("hr",{className:"ms-rule"}),a.jsxs("div",{className:"ms-title-row",children:[a.jsxs("h1",{className:"ms-title",children:["Your ",a.jsx("em",{children:"schedule"})]}),!L&&C>0&&a.jsxs("span",{className:"ms-title-count",children:[C," upcoming"]})]}),a.jsxs("div",{className:"ms-tabs",children:[a.jsxs("button",{className:`ms-tab${i==="sessions"?" active":""}`,onClick:()=>s("sessions"),children:["My sessions",!L&&C>0&&a.jsx("span",{className:"ms-tab-badge",children:C})]}),a.jsx("button",{className:`ms-tab${i==="auto"?" active":""}`,onClick:()=>s("auto"),children:"Auto-schedule"})]}),i==="sessions"&&a.jsx(a.Fragment,{children:L?a.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):C===0?a.jsxs("div",{className:"ms-empty",children:[a.jsx("div",{className:"ms-empty-icon",children:a.jsx(ss,{size:24})}),a.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),a.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),a.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:a.jsxs("button",{className:"ms-book-btn",onClick:_,children:["Book a session ",a.jsx(Lt,{size:16})]})})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ms-week-nav",children:[a.jsx("button",{className:"ms-week-arrow",onClick:()=>{y(g=>_r(g,-7)),m(null)},children:a.jsx(Gi,{size:16})}),a.jsx("span",{className:"ms-week-month",children:Tp(d)}),a.jsx("button",{className:"ms-week-arrow",onClick:()=>{y(g=>_r(g,7)),m(null)},children:a.jsx(Lt,{size:16})})]}),a.jsx("div",{className:"ms-days",children:R.map((g,z)=>{var x;return a.jsxs("div",{className:`ms-day${ms(g,u)?" today":""}${h===z?" sel":""}`,onClick:()=>m(h===z?null:z),children:[a.jsx("span",{className:"ms-day-abbr",children:Pp[z]}),a.jsx("span",{className:"ms-day-num",children:g.getDate()}),((x=K[z])==null?void 0:x.length)>0&&a.jsx("span",{className:"ms-day-dot"})]},z)})}),ye.length===0?a.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[a.jsx("div",{className:"ms-empty-icon",children:a.jsx(ss,{size:24})}),a.jsx("div",{className:"ms-empty-h",children:h!==null?`No sessions on ${ro[h]}`:"No sessions this week"}),a.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"ms-section",children:h!==null?ro[h]:"This week"}),a.jsx("div",{className:"ms-list",children:ye.map(g=>a.jsxs("div",{className:"ms-card",children:[a.jsxs("div",{className:"ms-card-body",children:[a.jsx("div",{className:"ms-card-date",children:Lp(g.startDate)}),a.jsx("div",{className:"ms-card-time",children:Dp(g.startDate)}),g.service&&!_p(g.service)&&a.jsx("div",{className:"ms-card-svc",children:g.service})]}),a.jsxs("button",{className:"ms-cancel-btn",onClick:()=>P(g),disabled:l===g._id,children:[a.jsx(Ji,{size:13}),l===g._id?"Cancelling…":"Cancel"]})]},g._id))})]}),a.jsx("div",{className:"ms-book-wrap",children:a.jsxs("button",{className:"ms-book-btn",onClick:_,children:["Book another session ",a.jsx(Lt,{size:16})]})})]})}),i==="auto"&&a.jsxs("div",{className:"ms-auto",children:[a.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),a.jsxs("div",{className:`ms-auto-master${S?" on":""}`,children:[a.jsxs("div",{children:[a.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),a.jsx("div",{className:"ms-auto-master-sub",children:S?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),a.jsx("button",{className:"ms-toggle","data-on":String(S),onClick:()=>j(g=>!g)})]}),a.jsx("div",{className:"ms-auto-days",children:ro.map((g,z)=>{const x=N[z]!==void 0;return a.jsxs("div",{className:`ms-auto-row${x?" on":""}${S?"":" disabled"}`,children:[a.jsx("button",{className:"ms-toggle","data-on":String(x),onClick:()=>v(z)}),a.jsx("span",{className:"ms-auto-day-name",children:g}),x?a.jsx("input",{type:"time",className:"ms-auto-time-input",value:N[z]||"",onChange:F=>D(z,F.target.value)}):a.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},z)})}),a.jsxs("div",{className:"ms-auto-save",children:[a.jsx("button",{className:"ms-save-btn",onClick:$,disabled:p,children:p?"Saving…":"Save schedule"}),E&&a.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const Op=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],gs=["MON","TUE","WED","THU","FRI","SAT","SUN"],hs=[{emoji:"😊",label:"Great",value:5},{emoji:"🙂",label:"Good",value:4},{emoji:"😐",label:"Okay",value:3},{emoji:"😟",label:"Meh",value:2},{emoji:"😫",label:"Bad",value:1}],vs=[{id:1,name:"Probiotic Smoothie",time:"5 min",tag:"gut-friendly",emoji:"🥤"},{id:2,name:"Kimchi Rice Bowl",time:"15 min",tag:"fermented",emoji:"🍚"},{id:3,name:"Bone Broth Soup",time:"30 min",tag:"gut-healing",emoji:"🍲"},{id:4,name:"Overnight Oats",time:"5 min",tag:"prebiotic",emoji:"🥣"},{id:5,name:"Miso Salmon",time:"20 min",tag:"fermented",emoji:"🍣"},{id:6,name:"Ginger Turmeric Tea",time:"5 min",tag:"anti-inflammatory",emoji:"☕"},{id:7,name:"Greek Yogurt Bowl",time:"3 min",tag:"probiotic",emoji:"🫙"},{id:8,name:"Sauerkraut Wrap",time:"10 min",tag:"fermented",emoji:"🌯"}];function ys(){const e=new Date().getDay();return e===0?6:e-1}function Ap({score:e}){const l=j=>{const N=Math.PI*(1-j);return[+(105+70*Math.cos(N)).toFixed(2),+(88-70*Math.sin(N)).toFixed(2)]},[o,i]=l(0),[s,u]=l(1),d=Math.max(.005,Math.min(.995,e/100)),[y,h]=l(d),m=(j,N,O,f)=>`M ${j} ${N} A 70 70 0 0 1 ${O} ${f}`,S=e<34?"#FF453A":e<67?"#FFD60A":"#30D158";return a.jsxs("div",{className:"fj-gauge-wrap",children:[a.jsx("div",{className:"fj-gauge-label",children:"Gut Health"}),a.jsxs("svg",{viewBox:"0 0 210 136",style:{display:"block",width:"100%"},children:[a.jsx("path",{d:m(o,i,s,u),stroke:"#252527",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),a.jsx("path",{d:m(o,i,y,h),stroke:S,strokeWidth:"14",fill:"none",strokeLinecap:"round"}),a.jsx("line",{x1:105,y1:88,x2:y,y2:h,stroke:"rgba(255,255,255,.85)",strokeWidth:"2.5",strokeLinecap:"round"}),a.jsx("circle",{cx:105,cy:88,r:"5",fill:"#fff"}),a.jsx("text",{x:105,y:118,textAnchor:"middle",fill:"#fff",fontSize:"24",fontWeight:"700",fontFamily:"Inter,sans-serif",children:e}),a.jsx("text",{x:105,y:130,textAnchor:"middle",fill:"#9C988F",fontSize:"7.5",fontFamily:"Inter,sans-serif",letterSpacing:"2",children:"GUT SCORE"}),a.jsx("text",{x:o,y:i+20,textAnchor:"middle",fill:"#FF453A",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Poor"}),a.jsx("text",{x:s,y:u+20,textAnchor:"middle",fill:"#30D158",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Good"})]})]})}const $p=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --line:        #2A2A2D;
  --text:        #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245,132,31,.08);
  --orange-bd:   rgba(245,132,31,.30);
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

/* ── shell ── */
.fj { min-height: 100vh; background: var(--bg); padding-bottom: 60px; }
.fj-header { display: flex; justify-content: center; padding: 48px 0 16px; }
.fj-logo   { height: 38px; width: auto; }
.fj-rule   { border: none; border-top: 1px solid var(--line); }

/* ── page title ── */
.fj-title-row { max-width: 980px; margin: 22px auto 0; padding: 0 20px; }
.fj-title     { font-family: 'Cormorant', serif; font-size: 40px; font-weight: 600; line-height: 1.1; }
.fj-title em  { font-style: italic; color: var(--orange); }
.fj-subtitle  { font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5; }

/* ── top row: input + right panel ── */
.fj-top   { max-width: 980px; margin: 22px auto 0; padding: 0 20px; display: flex; gap: 20px; align-items: flex-start; }
.fj-left  { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.fj-right { width: 252px; flex-shrink: 0; }

/* ── full-width week section ── */
.fj-week-section { max-width: 980px; margin: 20px auto 0; padding: 0 20px; }

/* ── input section ── */
.fj-input-box {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 16px; margin-bottom: 14px;
}
.fj-input-row { display: flex; gap: 10px; margin-bottom: 13px; }
.fj-input {
  flex: 1; background: var(--surface2); border: 1px solid var(--line); border-radius: 10px;
  padding: 11px 14px; color: var(--text); font-family: 'Inter', sans-serif; font-size: 14px;
  outline: none; transition: border-color .15s;
}
.fj-input:focus     { border-color: var(--orange); }
.fj-input::placeholder { color: var(--muted); }
.fj-log-btn {
  background: var(--orange); color: #fff; border: none; border-radius: 10px;
  padding: 11px 20px; font-size: 14px; font-weight: 700; cursor: pointer;
  white-space: nowrap; transition: opacity .15s; font-family: 'Inter', sans-serif;
}
.fj-log-btn:hover { opacity: .88; }

/* meta row */
.fj-meta-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.fj-meta-left { display: flex; align-items: center; gap: 6px; }
.fj-meta-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.fj-day-pills { display: flex; gap: 4px; flex-wrap: wrap; }
.fj-day-pill {
  background: none; border: 1px solid var(--line); border-radius: 20px;
  padding: 4px 9px; font-size: 11px; font-weight: 600; color: var(--muted);
  cursor: pointer; transition: all .15s; font-family: 'Inter', sans-serif;
}
.fj-day-pill.active        { background: var(--orange); border-color: var(--orange); color: #fff; }
.fj-day-pill:hover:not(.active) { border-color: var(--muted); color: var(--text); }

.fj-feelings { display: flex; gap: 3px; }
.fj-feeling {
  background: none; border: 1px solid var(--line); border-radius: 8px;
  padding: 4px 7px; font-size: 15px; cursor: pointer; transition: all .15s;
  line-height: 1;
}
.fj-feeling.active { background: var(--orange-tint); border-color: var(--orange-bd); }

/* ── weekly grid ── */
.fj-week-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
.fj-week-scroll { }
.fj-week { display: flex; gap: 8px; }
.fj-day-col {
  flex: 1; min-width: 0; background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; padding: 10px 9px; cursor: pointer;
  transition: border-color .15s, background .15s; min-height: 210px;
  display: flex; flex-direction: column;
}
.fj-day-col:hover           { border-color: var(--muted); }
.fj-day-col.today           { border-color: rgba(245,132,31,.35); }
.fj-day-col.selected        { background: rgba(245,132,31,.04); border-color: var(--orange-bd); }
.fj-day-col.drag-over       { border-color: var(--orange); background: var(--orange-tint); }

.fj-day-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.fj-day-name { font-size: 9px; font-weight: 700; letter-spacing: .08em; color: var(--muted); }
.fj-day-name.today { color: var(--orange); }
.fj-day-badge {
  background: var(--orange); color: #fff; font-size: 9px; font-weight: 700;
  border-radius: 10px; padding: 1px 5px;
}
.fj-day-entries { display: flex; flex-direction: column; gap: 5px; flex: 1; }
.fj-entry {
  display: flex; align-items: flex-start; gap: 4px;
  background: var(--surface2); border-radius: 7px; padding: 5px 6px;
}
.fj-entry.from-recipe { }
.fj-entry-feel  { font-size: 12px; flex-shrink: 0; line-height: 1.4; }
.fj-entry-text  { flex: 1; font-size: 11px; line-height: 1.4; color: var(--text); word-break: break-word; }
.fj-entry-del   { background: none; border: none; color: var(--line); cursor: pointer; font-size: 13px; flex-shrink: 0; padding: 0; transition: color .15s; line-height: 1; }
.fj-entry-del:hover { color: #FF453A; }
.fj-day-drop-hint { font-size: 10px; color: var(--line); text-align: center; padding: 18px 0; margin-top: auto; }

/* ── recipes grid (under input box, left column) ── */
.fj-recipes-header { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 20px; margin-bottom: 10px; gap: 10px; }
.fj-recipe-controls { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

/* expandable search */
.fj-search-wrap { display: flex; align-items: center; gap: 6px; }
.fj-search-slide {
  max-width: 0; overflow: hidden;
  transition: max-width .52s cubic-bezier(.22,1,.36,1);
}
.fj-search-wrap.expanded .fj-search-slide { max-width: 150px; }
.fj-search-input {
  width: 130px; background: transparent; border: none; border-radius: 0;
  border-bottom: 1.5px solid var(--line);
  padding: 4px 2px; color: var(--text); font-size: 12px;
  font-family: 'Inter', sans-serif; outline: none;
  opacity: 0; transition: opacity .2s ease .22s, border-color .15s;
}
.fj-search-wrap.expanded .fj-search-input { opacity: 1; }
.fj-search-input::placeholder { color: var(--muted); }
.fj-search-input:focus { border-bottom-color: var(--orange); }
.fj-search-icon-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--muted); width: 30px; height: 30px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: color .15s, border-color .15s;
}
.fj-search-icon-btn:hover { color: var(--text); border-color: var(--orange); }
.fj-search-wrap.expanded .fj-search-icon-btn { color: var(--text); border-color: var(--orange); }

/* custom filter dropdown */
.fj-filter-wrap { position: relative; }
.fj-filter-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  padding: 5px 10px; color: var(--text); font-size: 12px; font-family: 'Inter', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 6px; height: 30px;
  transition: border-color .15s; white-space: nowrap; min-width: 72px;
}
.fj-filter-btn:hover { border-color: var(--orange); }
.fj-filter-chevron { color: var(--muted); transition: transform .2s; flex-shrink: 0; }
.fj-filter-wrap.open .fj-filter-chevron { transform: rotate(180deg); }
@keyframes dropdownIn {
  from { opacity: 0; transform: translateY(-6px) scale(.97); }
  to   { opacity: 1; transform: translateY(0)   scale(1);    }
}
.fj-filter-dropdown {
  position: absolute; top: calc(100% + 6px); right: 0; z-index: 100;
  background: var(--surface); border: 1px solid var(--line); border-radius: 10px;
  min-width: 160px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,.6);
  animation: dropdownIn .18s cubic-bezier(.22,1,.36,1) both;
}
.fj-filter-opt {
  display: block; width: 100%; padding: 9px 14px; text-align: left;
  background: none; border: none; color: var(--muted); font-size: 12px;
  font-family: 'Inter', sans-serif; cursor: pointer; transition: background .12s, color .12s;
}
.fj-filter-opt + .fj-filter-opt { border-top: 1px solid var(--line); }
.fj-filter-opt:hover { background: var(--surface2); color: var(--text); }
.fj-filter-opt.active { color: var(--orange); font-weight: 600; }
.fj-recipe-no-results { font-size: 12px; color: var(--muted); padding: 20px 0; text-align: center; }
.fj-recipe-nav { display: flex; gap: 4px; }
.fj-recipe-nav button {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--text); width: 28px; height: 28px; font-size: 18px; line-height: 1;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: border-color .15s, background .15s; font-family: 'Inter', sans-serif;
}
.fj-recipe-nav button:hover:not(:disabled) { border-color: var(--orange); background: var(--orange-tint); }
.fj-recipe-nav button:disabled { opacity: .28; cursor: default; }
.fj-recipes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
@keyframes recipeCardIn {
  from { opacity: 0; transform: scale(0.93) translateY(10px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}
.fj-recipe-card-anim { animation: recipeCardIn .32s cubic-bezier(.22,1,.36,1) both; }
@keyframes cardJiggle {
  0%,100% { transform: rotate(0deg)  scale(1); }
  15%     { transform: rotate(-5deg) scale(1.06); }
  35%     { transform: rotate(4deg)  scale(1.06); }
  55%     { transform: rotate(-3deg) scale(1.04); }
  75%     { transform: rotate(2deg)  scale(1.02); }
}
.fj-recipe-card.fj-grabbing { animation: cardJiggle .42s cubic-bezier(.36,.07,.19,.97) both; opacity: 0.5; }

/* ── gauge ── */
.fj-gauge-wrap  { padding: 4px 0 0; }
.fj-gauge-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); text-align: center; margin-bottom: 4px; }

/* ── advice box ── */
.fj-advice {
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 14px; margin-top: 10px;
}
.fj-advice-head {
  font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
}
.fj-advice-dot  { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }
.fj-advice-body { font-size: 12px; color: var(--muted); line-height: 1.75; }

/* ── recipe cards ── */
.fj-recipe-card  {
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 12px 13px; cursor: grab; user-select: none;
  transition: border-color .15s, transform .15s;
}
.fj-recipe-card:hover  { border-color: var(--orange-bd); transform: translateY(-1px); }
.fj-recipe-card:active { cursor: grabbing; }
.fj-recipe-top   { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.fj-recipe-emoji { font-size: 18px; line-height: 1; }
.fj-recipe-name  { font-size: 13px; font-weight: 600; }
.fj-recipe-meta  { display: flex; align-items: center; gap: 6px; }
.fj-recipe-time  { font-size: 11px; color: var(--muted); }
.fj-recipe-tag   { background: var(--surface2); border-radius: 10px; padding: 2px 7px; font-size: 10px; color: var(--muted); font-weight: 600; }
.fj-drag-hint    { font-size: 11px; color: var(--muted); margin-bottom: 12px; }
`;function Bp(){const[e,t]=M.useState(""),[n,r]=M.useState(ys()),[l,o]=M.useState(3),[i,s]=M.useState({}),[u,d]=M.useState(null),[y,h]=M.useState(0),[m,S]=M.useState(""),[j,N]=M.useState(""),[O,f]=M.useState(!1),[c,p]=M.useState(!1),w=M.useRef(null),E=M.useRef(null),k=[...new Set(vs.map(x=>x.tag))];Ms.useEffect(()=>{const x=F=>{E.current&&!E.current.contains(F.target)&&p(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const P=vs.filter(x=>{const F=m.toLowerCase();return(!F||x.name.toLowerCase().includes(F))&&(!j||x.tag===j)}),_=4,$=Math.ceil(P.length/_),v=P.slice(y*_,(y+1)*_),D=M.useRef(null),R=()=>{const x=e.trim();if(!x)return;const F={id:Date.now(),text:x,feel:l,fromRecipe:!1};s(I=>({...I,[n]:[...I[n]||[],F]})),t("")},B=(x,F)=>{s(I=>({...I,[x]:(I[x]||[]).filter(Z=>Z.id!==F)}))},K=x=>{const F=D.current;if(!F)return;const I={id:Date.now(),text:F.name,feel:3,fromRecipe:!0};s(Z=>({...Z,[x]:[...Z[x]||[],I]}))},ye=Object.values(i).flat(),C=ye.length>0?ye.reduce((x,F)=>x+F.feel,0)/ye.length:3,L=Math.round(C/5*100),g=ye.length===0?"Start logging your meals and feelings throughout the week. Your personalized gut health insights will appear here.":L>=67?"Your gut is thriving this week. Keep up the variety and stay consistent with hydration and fiber-rich foods.":L>=34?"You're on track. Consider adding more fermented foods — kimchi, yogurt, or miso — to boost your gut flora further.":"Your gut may need some extra support. Focus on whole foods, reduce processed items, and try incorporating a daily probiotic.",z=ys();return a.jsxs("div",{className:"fj",children:[a.jsx("style",{children:$p}),a.jsx("div",{className:"fj-header",children:a.jsx("img",{src:Zi,alt:"Abate Wellness",className:"fj-logo"})}),a.jsx("hr",{className:"fj-rule"}),a.jsxs("div",{className:"fj-title-row",children:[a.jsxs("h1",{className:"fj-title",children:["Food ",a.jsx("em",{children:"journal"})]}),a.jsx("p",{className:"fj-subtitle",children:"Track what you eat, how it makes you feel, and get personalized gut health insights."})]}),a.jsxs("div",{className:"fj-top",children:[a.jsxs("div",{className:"fj-left",children:[a.jsxs("div",{className:"fj-input-box",children:[a.jsxs("div",{className:"fj-input-row",children:[a.jsx("input",{className:"fj-input",placeholder:"What did you eat? (e.g. Greek yogurt, grilled salmon…)",value:e,onChange:x=>t(x.target.value),onKeyDown:x=>x.key==="Enter"&&R()}),a.jsx("button",{className:"fj-log-btn",onClick:R,children:"Log"})]}),a.jsxs("div",{className:"fj-meta-row",children:[a.jsxs("div",{className:"fj-meta-left",children:[a.jsx("span",{className:"fj-meta-label",children:"Day"}),a.jsx("div",{className:"fj-day-pills",children:gs.map((x,F)=>a.jsx("button",{className:`fj-day-pill${n===F?" active":""}`,onClick:()=>r(F),children:x.slice(0,3)},F))})]}),a.jsx("div",{className:"fj-feelings",children:hs.map(x=>a.jsx("button",{className:`fj-feeling${l===x.value?" active":""}`,onClick:()=>o(x.value),title:x.label,children:x.emoji},x.value))})]})]}),a.jsxs("div",{className:"fj-recipes-header",children:[a.jsx("span",{className:"fj-week-label",children:"Recipes — drag onto a day"}),a.jsxs("div",{className:"fj-recipe-controls",children:[a.jsxs("div",{className:`fj-search-wrap${O?" expanded":""}`,children:[a.jsx("div",{className:"fj-search-slide",children:a.jsx("input",{ref:w,className:"fj-search-input",placeholder:"Search...",value:m,onChange:x=>{S(x.target.value),h(0)},onBlur:()=>{m||f(!1)}})}),a.jsx("button",{className:"fj-search-icon-btn",onMouseDown:x=>x.preventDefault(),onClick:()=>{O?(f(!1),S(""),h(0)):(f(!0),setTimeout(()=>{var x;return(x=w.current)==null?void 0:x.focus()},30))},"aria-label":"Search recipes",children:a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),a.jsxs("div",{ref:E,className:`fj-filter-wrap${c?" open":""}`,children:[a.jsxs("button",{className:"fj-filter-btn",onClick:()=>p(x=>!x),children:[j||"All",a.jsx("svg",{className:"fj-filter-chevron",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&a.jsx("div",{className:"fj-filter-dropdown",children:["",...k].map(x=>a.jsx("button",{className:`fj-filter-opt${j===x?" active":""}`,onMouseDown:F=>{F.preventDefault(),N(x),h(0),p(!1)},children:x||"All"},x))})]}),a.jsxs("div",{className:"fj-recipe-nav",children:[a.jsx("button",{onClick:()=>h(x=>Math.max(0,x-1)),disabled:y===0,"aria-label":"Previous recipes",children:"‹"}),a.jsx("button",{onClick:()=>h(x=>Math.min(Math.max(0,$-1),x+1)),disabled:y>=$-1,"aria-label":"Next recipes",children:"›"})]})]})]}),v.length===0&&a.jsx("div",{className:"fj-recipe-no-results",children:"No recipes match your search."}),a.jsx("div",{className:"fj-recipes-grid",children:v.map((x,F)=>a.jsxs("div",{className:"fj-recipe-card fj-recipe-card-anim",style:{animationDelay:`${F*65}ms`},draggable:!0,onDragStart:I=>{D.current=x,I.currentTarget.classList.add("fj-grabbing");const Z=document.createElement("div");Z.innerHTML=`<span style="font-size:15px;line-height:1">${x.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${x.name}</span>`,Z.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-3deg);",document.body.appendChild(Z),I.dataTransfer.setDragImage(Z,Z.offsetWidth/2,Z.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(Z)}catch{}},100)},onDragEnd:I=>{I.currentTarget.classList.remove("fj-grabbing"),D.current=null,d(null)},children:[a.jsxs("div",{className:"fj-recipe-top",children:[a.jsx("span",{className:"fj-recipe-emoji",children:x.emoji}),a.jsx("span",{className:"fj-recipe-name",children:x.name})]}),a.jsxs("div",{className:"fj-recipe-meta",children:[a.jsx("span",{className:"fj-recipe-time",children:x.time}),a.jsx("span",{className:"fj-recipe-tag",children:x.tag})]})]},`${y}-${x.id}`))})]}),a.jsxs("div",{className:"fj-right",children:[a.jsx(Ap,{score:L}),a.jsxs("div",{className:"fj-advice",children:[a.jsxs("div",{className:"fj-advice-head",children:[a.jsx("span",{className:"fj-advice-dot"}),"AI Insights"]}),a.jsx("div",{className:"fj-advice-body",children:g})]})]})]}),a.jsxs("div",{className:"fj-week-section",children:[a.jsx("div",{className:"fj-week-label",children:"Weekly log"}),a.jsx("div",{className:"fj-week",children:Op.map((x,F)=>{const I=i[F]||[],Z=F===z,_e=F===n,wn=u===F;return a.jsxs("div",{className:`fj-day-col${Z?" today":""}${_e?" selected":""}${wn?" drag-over":""}`,onClick:()=>r(F),onDragOver:pe=>{pe.preventDefault(),d(F)},onDragLeave:()=>d(null),onDrop:()=>{d(null),K(F)},children:[a.jsxs("div",{className:"fj-day-head",children:[a.jsx("span",{className:`fj-day-name${Z?" today":""}`,children:gs[F]}),I.length>0&&a.jsx("span",{className:"fj-day-badge",children:I.length})]}),a.jsx("div",{className:"fj-day-entries",children:I.map(pe=>{var Et;return a.jsxs("div",{className:`fj-entry${pe.fromRecipe?" from-recipe":""}`,children:[a.jsx("span",{className:"fj-entry-feel",children:((Et=hs.find(_l=>_l.value===pe.feel))==null?void 0:Et.emoji)??"🙂"}),a.jsx("span",{className:"fj-entry-text",children:pe.text}),a.jsx("button",{className:"fj-entry-del",onClick:_l=>{_l.stopPropagation(),B(F,pe.id)},children:"×"})]},pe.id)})}),I.length===0&&a.jsx("div",{className:"fj-day-drop-hint",children:"drop recipe"})]},F)})})]})]})}const He=window.self!==window.top;function Up(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":e==="food-journal"?"food-journal":He?null:"client"}function Wp(){const[e,t]=M.useState(Up),[n,r]=M.useState(null),[l,o]=M.useState(null),[i,s]=M.useState(null),[u,d]=M.useState({}),[y,h]=M.useState(null),[m,S]=M.useState(null),[j,N]=M.useState(!He),[O,f]=M.useState(!1),c=M.useRef(null);M.useEffect(()=>{let k;const P=()=>{clearTimeout(k),k=setTimeout(()=>{var D;const v=(D=c.current)==null?void 0:D.scrollHeight;v>0&&window.parent.postMessage({type:"abate-resize",height:v+40},"*")},50)},_=new ResizeObserver(P);c.current&&_.observe(c.current),P(),He&&window.parent.postMessage({type:"abate-ready"},"*");const $=v=>{var D;if((D=v.data)!=null&&D.type){if(v.data.type==="abate-mode"&&t(v.data.mode),v.data.type==="abate-data"){const R=v.data.slots??null;if(r(R),R){const B={};Object.values(R).flat().forEach(K=>{K.userBookingId&&(B[K.id]=K.userBookingId)}),Object.keys(B).length>0&&d(K=>({...B,...K}))}}v.data.type==="abate-booked"&&d(R=>({...R,[v.data.slotId]:v.data.bookingId})),v.data.type==="abate-error"&&h({slotId:v.data.slotId,message:v.data.message}),v.data.type==="abate-confirm-data"&&o(v.data.slot??null),v.data.type==="abate-schedule-data"&&s(v.data.sessions??[]),v.data.type==="abate-prefs"&&(S(v.data.prefs??[]),N(!0)),v.data.type==="abate-prefs-saved"&&f(!1),v.data.type==="abate-prefs-error"&&f(!1)}};return window.addEventListener("message",$),()=>{clearTimeout(k),_.disconnect(),window.removeEventListener("message",$)}},[]);const p=M.useCallback(k=>{if(He)switch(k.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:k.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:k.slotId,bookingId:u[k.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:k.slotId},"*");break;case"savePrefs":f(!0),window.parent.postMessage({type:"abate-save-prefs",items:k.items},"*");break}},[u]),w=(()=>{const k=new URLSearchParams(window.location.search);return k.get("serviceId")?{serviceId:k.get("serviceId"),startDate:k.get("startDate"),endDate:k.get("endDate"),service:k.get("service"),day:k.get("day"),time:k.get("time")}:null})();let E;return e==="confirm"?E=a.jsx(zp,{slot:He?l:w}):e==="food-journal"?E=a.jsx(Bp,{}):e==="schedule"?E=a.jsx(Rp,{sessions:He?i:[]}):e==="admin"?E=a.jsx(Np,{livePrefs:He?m:null,loading:He&&!j,onAction:p,saving:O}):e==="client"?E=a.jsx(vp,{liveSlots:He?n:null,loading:He&&n===null,onAction:p,errorMsg:y,onErrorDismiss:()=>h(null)}):E=a.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),a.jsx("div",{ref:c,children:E})}lo.createRoot(document.getElementById("root")).render(a.jsx(Ms.StrictMode,{children:a.jsx(Wp,{})}));
