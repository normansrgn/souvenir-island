function G1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function pf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eg={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=Symbol.for("react.transitional.element"),F1=Symbol.for("react.fragment");function tg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:Y1,type:t,key:i,ref:e!==void 0?e:null,props:n}}mo.Fragment=F1;mo.jsx=tg;mo.jsxs=tg;eg.exports=mo;var g=eg.exports,ng={exports:{}},M={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=Symbol.for("react.transitional.element"),K1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),Q1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),$1=Symbol.for("react.consumer"),Z1=Symbol.for("react.context"),J1=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),ig=Symbol.for("react.lazy"),id=Symbol.iterator;function nE(t){return t===null||typeof t!="object"?null:(t=id&&t[id]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,rg={};function zs(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||sg}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=zs.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||sg}var _f=gf.prototype=new lg;_f.constructor=gf;ag(_f,zs.prototype);_f.isPureReactComponent=!0;var sd=Array.isArray,re={H:null,A:null,T:null,S:null},og=Object.prototype.hasOwnProperty;function vf(t,e,n,i,s,a){return n=a.ref,{$$typeof:mf,type:t,key:e,ref:n!==void 0?n:null,props:a}}function iE(t,e){return vf(t.type,e,void 0,void 0,void 0,t.props)}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===mf}function sE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ad=/\/+/g;function Qo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sE(""+t.key):e.toString(36)}function rd(){}function aE(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(rd,rd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Xi(t,e,n,i,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case mf:case K1:r=!0;break;case ig:return r=t._init,Xi(r(t._payload),e,n,i,s)}}if(r)return s=s(t),r=i===""?"."+Qo(t,0):i,sd(s)?(n="",r!=null&&(n=r.replace(ad,"$&/")+"/"),Xi(s,e,n,"",function(c){return c})):s!=null&&(yf(s)&&(s=iE(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(ad,"$&/")+"/")+r)),e.push(s)),1;r=0;var l=i===""?".":i+":";if(sd(t))for(var o=0;o<t.length;o++)i=t[o],a=l+Qo(i,o),r+=Xi(i,e,n,a,s);else if(o=nE(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,a=l+Qo(i,o++),r+=Xi(i,e,n,a,s);else if(a==="object"){if(typeof t.then=="function")return Xi(aE(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function jr(t,e,n){if(t==null)return t;var i=[],s=0;return Xi(t,i,"","",function(a){return e.call(n,a,s++)}),i}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ld=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function lE(){}M.Children={map:jr,forEach:function(t,e,n){jr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jr(t,function(){e++}),e},toArray:function(t){return jr(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=zs;M.Fragment=X1;M.Profiler=W1;M.PureComponent=gf;M.StrictMode=Q1;M.Suspense=eE;M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re;M.act=function(){throw Error("act(...) is not supported in production builds of React.")};M.cache=function(t){return function(){return t.apply(null,arguments)}};M.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),s=t.key,a=void 0;if(e!=null)for(r in e.ref!==void 0&&(a=void 0),e.key!==void 0&&(s=""+e.key),e)!og.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];i.children=l}return vf(t.type,s,void 0,void 0,a,i)};M.createContext=function(t){return t={$$typeof:Z1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:$1,_context:t},t};M.createElement=function(t,e,n){var i,s={},a=null;if(e!=null)for(i in e.key!==void 0&&(a=""+e.key),e)og.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];s.children=l}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return vf(t,a,void 0,void 0,null,s)};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:J1,render:t}};M.isValidElement=yf;M.lazy=function(t){return{$$typeof:ig,_payload:{_status:-1,_result:t},_init:rE}};M.memo=function(t,e){return{$$typeof:tE,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=re.T,n={};re.T=n;try{var i=t(),s=re.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(lE,ld)}catch(a){ld(a)}finally{re.T=e}};M.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()};M.use=function(t){return re.H.use(t)};M.useActionState=function(t,e,n){return re.H.useActionState(t,e,n)};M.useCallback=function(t,e){return re.H.useCallback(t,e)};M.useContext=function(t){return re.H.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t,e){return re.H.useDeferredValue(t,e)};M.useEffect=function(t,e){return re.H.useEffect(t,e)};M.useId=function(){return re.H.useId()};M.useImperativeHandle=function(t,e,n){return re.H.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return re.H.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return re.H.useLayoutEffect(t,e)};M.useMemo=function(t,e){return re.H.useMemo(t,e)};M.useOptimistic=function(t,e){return re.H.useOptimistic(t,e)};M.useReducer=function(t,e,n){return re.H.useReducer(t,e,n)};M.useRef=function(t){return re.H.useRef(t)};M.useState=function(t){return re.H.useState(t)};M.useSyncExternalStore=function(t,e,n){return re.H.useSyncExternalStore(t,e,n)};M.useTransition=function(){return re.H.useTransition()};M.version="19.0.0";ng.exports=M;var b=ng.exports;const oE=pf(b),cE=G1({__proto__:null,default:oE},[b]);var cg={exports:{}},go={},ug={exports:{}},fg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var L=A.length;A.push(U);e:for(;0<L;){var ue=L-1>>>1,ye=A[ue];if(0<s(ye,U))A[ue]=U,A[L]=ye,L=ue;else break e}}function n(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var U=A[0],L=A.pop();if(L!==U){A[0]=L;e:for(var ue=0,ye=A.length,kr=ye>>>1;ue<kr;){var Lr=2*(ue+1)-1,Xo=A[Lr],ii=Lr+1,Ur=A[ii];if(0>s(Xo,L))ii<ye&&0>s(Ur,Xo)?(A[ue]=Ur,A[ii]=L,ue=ii):(A[ue]=Xo,A[Lr]=L,ue=Lr);else if(ii<ye&&0>s(Ur,L))A[ue]=Ur,A[ii]=L,ue=ii;else break e}}return U}function s(A,U){var L=A.sortIndex-U.sortIndex;return L!==0?L:A.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var r=Date,l=r.now();t.unstable_now=function(){return r.now()-l}}var o=[],c=[],f=1,u=null,h=3,p=!1,v=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function _(A){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=A)i(c),U.sortIndex=U.expirationTime,e(o,U);else break;U=n(c)}}function y(A){if(S=!1,_(A),!v)if(n(o)!==null)v=!0,Fo();else{var U=n(c);U!==null&&Ko(y,U.startTime-A)}}var C=!1,N=-1,R=5,O=-1;function Z(){return!(t.unstable_now()-O<R)}function k(){if(C){var A=t.unstable_now();O=A;var U=!0;try{e:{v=!1,S&&(S=!1,m(N),N=-1),p=!0;var L=h;try{t:{for(_(A),u=n(o);u!==null&&!(u.expirationTime>A&&Z());){var ue=u.callback;if(typeof ue=="function"){u.callback=null,h=u.priorityLevel;var ye=ue(u.expirationTime<=A);if(A=t.unstable_now(),typeof ye=="function"){u.callback=ye,_(A),U=!0;break t}u===n(o)&&i(o),_(A)}else i(o);u=n(o)}if(u!==null)U=!0;else{var kr=n(c);kr!==null&&Ko(y,kr.startTime-A),U=!1}}break e}finally{u=null,h=L,p=!1}U=void 0}}finally{U?Ve():C=!1}}}var Ve;if(typeof d=="function")Ve=function(){d(k)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,q1=xr.port2;xr.port1.onmessage=k,Ve=function(){q1.postMessage(null)}}else Ve=function(){T(k,0)};function Fo(){C||(C=!0,Ve())}function Ko(A,U){N=T(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Fo())},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(o)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var L=h;h=U;try{return A()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=h;h=A;try{return U()}finally{h=L}},t.unstable_scheduleCallback=function(A,U,L){var ue=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ue+L:ue):L=ue,A){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=L+ye,A={id:f++,callback:U,priorityLevel:A,startTime:L,expirationTime:ye,sortIndex:-1},L>ue?(A.sortIndex=L,e(c,A),n(o)===null&&A===n(c)&&(S?(m(N),N=-1):S=!0,Ko(y,L-ue))):(A.sortIndex=ye,e(o,A),v||p||(v=!0,Fo())),A},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(A){var U=h;return function(){var L=h;h=U;try{return A.apply(this,arguments)}finally{h=L}}}})(fg);ug.exports=fg;var uE=ug.exports,hg={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=b;function dg(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function vn(){}var ze={d:{f:vn,r:function(){throw Error(dg(522))},D:vn,C:vn,L:vn,m:vn,X:vn,S:vn,M:vn},p:0,findDOMNode:null},hE=Symbol.for("react.portal");function dE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hE,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var va=fE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _o(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;Pe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(dg(299));return dE(t,e,null,n)};Pe.flushSync=function(t){var e=va.T,n=ze.p;try{if(va.T=null,ze.p=2,t)return t()}finally{va.T=e,ze.p=n,ze.d.f()}};Pe.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,ze.d.C(t,e))};Pe.prefetchDNS=function(t){typeof t=="string"&&ze.d.D(t)};Pe.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=_o(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,a=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?ze.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&ze.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Pe.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=_o(e.as,e.crossOrigin);ze.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&ze.d.M(t)};Pe.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=_o(n,e.crossOrigin);ze.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Pe.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=_o(e.as,e.crossOrigin);ze.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else ze.d.m(t)};Pe.requestFormReset=function(t){ze.d.r(t)};Pe.unstable_batchedUpdates=function(t,e){return t(e)};Pe.useFormState=function(t,e,n){return va.H.useFormState(t,e,n)};Pe.useFormStatus=function(){return va.H.useHostTransitionStatus()};Pe.version="19.0.0";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(t){console.error(t)}}pg(),hg.exports=Pe;var pE=hg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=uE,mg=b,mE=pE;function E(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var gE=Symbol.for("react.element"),zr=Symbol.for("react.transitional.element"),fa=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),vg=Symbol.for("react.consumer"),Qt=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Sf=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),vE=Symbol.for("react.memo_cache_sentinel"),od=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var yE=Symbol.for("react.client.reference");function $c(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yE?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case fa:return"Portal";case Xc:return"Profiler";case _g:return"StrictMode";case Qc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qt:return(t.displayName||"Context")+".Provider";case vg:return(t._context.displayName||"Context")+".Consumer";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sf:return e=t.displayName||null,e!==null?e:$c(t.type)||"Memo";case Tn:e=t._payload,t=t._init;try{return $c(t(e))}catch{}}return null}var D=mg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=Object.assign,Wo,cd;function ha(t){if(Wo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wo=e&&e[1]||"",cd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wo+t+cd}var $o=!1;function Zo(t,e){if(!t||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(p){var h=p}Reflect.construct(t,[],u)}else{try{u.call()}catch(p){h=p}t.call(u.prototype)}}else{try{throw Error()}catch(p){h=p}(u=t())&&typeof u.catch=="function"&&u.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],l=a[1];if(r&&l){var o=r.split(`
`),c=l.split(`
`);for(s=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===o.length||s===c.length)for(i=o.length-1,s=c.length-1;1<=i&&0<=s&&o[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==c[s]){var f=`
`+o[i].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=i&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ha(n):""}function EE(t){switch(t.tag){case 26:case 27:case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return t=Zo(t.type,!1),t;case 11:return t=Zo(t.type.render,!1),t;case 1:return t=Zo(t.type,!0),t;default:return""}}function ud(t){try{var e="";do e+=EE(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fd(t){if(Hs(t)!==t)throw Error(E(188))}function SE(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return fd(s),t;if(a===i)return fd(s),e;a=a.sibling}throw Error(E(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,l=s.child;l;){if(l===n){r=!0,n=s,i=a;break}if(l===i){r=!0,i=s,n=a;break}l=l.sibling}if(!r){for(l=a.child;l;){if(l===n){r=!0,n=a,i=s;break}if(l===i){r=!0,i=a,n=s;break}l=l.sibling}if(!r)throw Error(E(189))}}if(n.alternate!==i)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Sg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Sg(t),e!==null)return e;t=t.sibling}return null}var da=Array.isArray,te=mE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pi={pending:!1,data:null,method:null,action:null},Zc=[],Ji=-1;function Ht(t){return{current:t}}function Ae(t){0>Ji||(t.current=Zc[Ji],Zc[Ji]=null,Ji--)}function se(t,e){Ji++,Zc[Ji]=t.current,t.current=e}var Mt=Ht(null),Ba=Ht(null),Un=Ht(null),yl=Ht(null);function El(t,e){switch(se(Un,e),se(Ba,t),se(Mt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?hp(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=hp(t),e=xv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ae(Mt),se(Mt,e)}function ws(){Ae(Mt),Ae(Ba),Ae(Un)}function Jc(t){t.memoizedState!==null&&se(yl,t);var e=Mt.current,n=xv(e,t.type);e!==n&&(se(Ba,t),se(Mt,n))}function Sl(t){Ba.current===t&&(Ae(Mt),Ae(Ba)),yl.current===t&&(Ae(yl),$a._currentValue=pi)}var eu=Object.prototype.hasOwnProperty,bf=ve.unstable_scheduleCallback,Jo=ve.unstable_cancelCallback,bE=ve.unstable_shouldYield,TE=ve.unstable_requestPaint,xt=ve.unstable_now,CE=ve.unstable_getCurrentPriorityLevel,bg=ve.unstable_ImmediatePriority,Tg=ve.unstable_UserBlockingPriority,bl=ve.unstable_NormalPriority,wE=ve.unstable_LowPriority,Cg=ve.unstable_IdlePriority,AE=ve.log,RE=ve.unstable_setDisableYieldValue,ur=null,Ze=null;function OE(t){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ur,t,void 0,(t.current.flags&128)===128)}catch{}}function xn(t){if(typeof AE=="function"&&RE(t),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(ur,t)}catch{}}var Je=Math.clz32?Math.clz32:DE,NE=Math.log,IE=Math.LN2;function DE(t){return t>>>=0,t===0?32:31-(NE(t)/IE|0)|0}var Hr=128,Br=4194304;function ai(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,a=t.pingedLanes,r=t.warmLanes;t=t.finishedLanes!==0;var l=n&134217727;return l!==0?(n=l&~s,n!==0?i=ai(n):(a&=l,a!==0?i=ai(a):t||(r=l&~r,r!==0&&(i=ai(r))))):(l=n&~s,l!==0?i=ai(l):a!==0?i=ai(a):t||(r=n&~r,r!==0&&(i=ai(r)))),i===0?0:e!==0&&e!==i&&!(e&s)&&(s=i&-i,r=e&-e,s>=r||s===32&&(r&4194176)!==0)?e:i}function fr(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ME(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(){var t=Hr;return Hr<<=1,!(Hr&4194176)&&(Hr=128),t}function Ag(){var t=Br;return Br<<=1,!(Br&62914560)&&(Br=4194304),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xE(t,e,n,i,s,a){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Je(n),u=1<<f;l[f]=0,o[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~u}i!==0&&Rg(t,i,0),a!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=a&~(r&~e))}function Rg(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Je(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194218}function Og(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Je(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function Ng(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ig(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:qv(t.type))}function kE(t,e){var n=te.p;try{return te.p=t,e()}finally{te.p=n}}var Jn=Math.random().toString(36).slice(2),ke="__reactFiber$"+Jn,Fe="__reactProps$"+Jn,Bs="__reactContainer$"+Jn,tu="__reactEvents$"+Jn,LE="__reactListeners$"+Jn,UE="__reactHandles$"+Jn,hd="__reactResources$"+Jn,Pa="__reactMarker$"+Jn;function Tf(t){delete t[ke],delete t[Fe],delete t[tu],delete t[LE],delete t[UE]}function ui(t){var e=t[ke];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bs]||n[ke]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[ke])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function Ps(t){if(t=t[ke]||t[Bs]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function pa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(E(33))}function hs(t){var e=t[hd];return e||(e=t[hd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Te(t){t[Pa]=!0}var Dg=new Set,Mg={};function Mi(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Mg[t]=e,t=0;t<e.length;t++)Dg.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dd={},pd={};function zE(t){return eu.call(pd,t)?!0:eu.call(dd,t)?!1:jE.test(t)?pd[t]=!0:(dd[t]=!0,!1)}function nl(t,e,n){if(zE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Pr(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Vt(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HE(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=HE(t))}function kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var BE=/[\n"\\]/g;function ut(t){return t.replace(BE,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nu(t,e,n,i,s,a,r,l){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+lt(e)):t.value!==""+lt(e)&&(t.value=""+lt(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?iu(t,r,lt(e)):n!=null?iu(t,r,lt(n)):i!=null&&t.removeAttribute("value"),s==null&&a!=null&&(t.defaultChecked=!!a),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+lt(l):t.removeAttribute("name")}function Lg(t,e,n,i,s,a,r,l){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null))return;n=n!=null?""+lt(n):"",e=e!=null?""+lt(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function iu(t,e,n){e==="number"&&Cl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ds(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lt(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ug(t,e,n){if(e!=null&&(e=""+lt(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+lt(n):""}function jg(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(E(92));if(da(i)){if(1<i.length)throw Error(E(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=lt(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function Rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var PE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||PE.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function zg(t,e,n){if(e!=null&&typeof e!="object")throw Error(E(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&md(t,s,i)}else for(var a in e)e.hasOwnProperty(a)&&md(t,a,e[a])}function Cf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return qE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var su=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var es=null,ps=null;function gd(t){var e=Ps(t);if(e&&(t=e.stateNode)){var n=t[Fe]||null;e:switch(t=e.stateNode,e.type){case"input":if(nu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ut(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[Fe]||null;if(!s)throw Error(E(90));nu(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&kg(i)}break e;case"textarea":Ug(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}}}var tc=!1;function Hg(t,e,n){if(tc)return t(e,n);tc=!0;try{var i=t(e);return i}finally{if(tc=!1,(es!==null||ps!==null)&&(Oo(),es&&(e=es,t=ps,ps=es=null,gd(e),t)))for(e=0;e<t.length;e++)gd(t[e])}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Fe]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var au=!1;if(on)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){au=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{au=!1}var kn=null,Af=null,sl=null;function Bg(){if(sl)return sl;var t,e=Af,n=e.length,i,s="value"in kn?kn.value:kn.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===s[a-i];i++);return sl=s.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vr(){return!0}function _d(){return!1}function Ke(t){function e(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vr:_d,this.isPropagationStopped=_d,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),e}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Ke(xi),dr=ne({},xi,{view:0,detail:0}),GE=Ke(dr),nc,ic,ta,Eo=ne({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(nc=t.screenX-ta.screenX,ic=t.screenY-ta.screenY):ic=nc=0,ta=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),vd=Ke(Eo),YE=ne({},Eo,{dataTransfer:0}),FE=Ke(YE),KE=ne({},dr,{relatedTarget:0}),sc=Ke(KE),XE=ne({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),QE=Ke(XE),WE=ne({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$E=Ke(WE),ZE=ne({},xi,{data:0}),yd=Ke(ZE),JE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tS[t])?!!e[t]:!1}function Rf(){return nS}var iS=ne({},dr,{key:function(t){if(t.key){var e=JE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=Ke(iS),aS=ne({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=Ke(aS),rS=ne({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),lS=Ke(rS),oS=ne({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=Ke(oS),uS=ne({},Eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=Ke(uS),hS=ne({},xi,{newState:0,oldState:0}),dS=Ke(hS),pS=[9,13,27,32],Of=on&&"CompositionEvent"in window,ya=null;on&&"documentMode"in document&&(ya=document.documentMode);var mS=on&&"TextEvent"in window&&!ya,Pg=on&&(!Of||ya&&8<ya&&11>=ya),Sd=" ",bd=!1;function Vg(t,e){switch(t){case"keyup":return pS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function gS(t,e){switch(t){case"compositionend":return qg(e);case"keypress":return e.which!==32?null:(bd=!0,Sd);case"textInput":return t=e.data,t===Sd&&bd?null:t;default:return null}}function _S(t,e){if(ts)return t==="compositionend"||!Of&&Vg(t,e)?(t=Bg(),sl=Af=kn=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vS[t.type]:e==="textarea"}function Gg(t,e,n,i){es?ps?ps.push(i):ps=[i]:es=i,e=Bl(e,"onChange"),0<e.length&&(n=new yo("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,qa=null;function yS(t){Iv(t,0)}function So(t){var e=pa(t);if(kg(e))return t}function Cd(t,e){if(t==="change")return e}var Yg=!1;if(on){var ac;if(on){var rc="oninput"in document;if(!rc){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),rc=typeof wd.oninput=="function"}ac=rc}else ac=!1;Yg=ac&&(!document.documentMode||9<document.documentMode)}function Ad(){Ea&&(Ea.detachEvent("onpropertychange",Fg),qa=Ea=null)}function Fg(t){if(t.propertyName==="value"&&So(qa)){var e=[];Gg(e,qa,t,wf(t)),Hg(yS,e)}}function ES(t,e,n){t==="focusin"?(Ad(),Ea=e,qa=n,Ea.attachEvent("onpropertychange",Fg)):t==="focusout"&&Ad()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(qa)}function bS(t,e){if(t==="click")return So(e)}function TS(t,e){if(t==="input"||t==="change")return So(e)}function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var it=typeof Object.is=="function"?Object.is:CS;function Ga(t,e){if(it(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!eu.call(e,s)||!it(t[s],e[s]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Od(t,e){var n=Rd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rd(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Cl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wS(t,e){var n=Xg(e);e=t.focusedElem;var i=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&Kg(e.ownerDocument.documentElement,e)){if(i!==null&&Nf(e)){if(t=i.start,n=i.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var s=e.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!n.extend&&a>i&&(s=i,i=a,a=s),s=Od(e,a);var r=Od(e,i);s&&r&&(n.rangeCount!==1||n.anchorNode!==s.node||n.anchorOffset!==s.offset||n.focusNode!==r.node||n.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),n.removeAllRanges(),a>i?(n.addRange(t),n.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var AS=on&&"documentMode"in document&&11>=document.documentMode,ns=null,ru=null,Sa=null,lu=!1;function Nd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||ns==null||ns!==Cl(i)||(i=ns,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Ga(Sa,i)||(Sa=i,i=Bl(ru,"onSelect"),0<i.length&&(e=new yo("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function si(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},lc={},Qg={};on&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function ki(t){if(lc[t])return lc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return lc[t]=e[n];return t}var Wg=ki("animationend"),$g=ki("animationiteration"),Zg=ki("animationstart"),RS=ki("transitionrun"),OS=ki("transitionstart"),NS=ki("transitioncancel"),Jg=ki("transitionend"),e_=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Rt(t,e){e_.set(t,e),Mi(e,[t])}var rt=[],ss=0,If=0;function bo(){for(var t=ss,e=If=ss=0;e<t;){var n=rt[e];rt[e++]=null;var i=rt[e];rt[e++]=null;var s=rt[e];rt[e++]=null;var a=rt[e];if(rt[e++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&t_(n,s,a)}}function To(t,e,n,i){rt[ss++]=t,rt[ss++]=e,rt[ss++]=n,rt[ss++]=i,If|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Df(t,e,n,i){return To(t,e,n,i),wl(t)}function Xn(t,e){return To(t,null,null,e),wl(t)}function t_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=t.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(s=!0)),t=a,a=a.return;s&&e!==null&&t.tag===3&&(a=t.stateNode,s=31-Je(n),a=a.hiddenUpdates,t=a[s],t===null?a[s]=[e]:t.push(e),e.lane=n|536870912)}function wl(t){if(50<xa)throw xa=0,Nu=null,Error(E(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var as={},Dd=new WeakMap;function ft(t,e){if(typeof t=="object"&&t!==null){var n=Dd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ud(e)},Dd.set(t,e),e)}return{value:t,source:e,stack:ud(e)}}var rs=[],ls=0,Al=null,Rl=0,ot=[],ct=0,mi=null,Wt=1,$t="";function ri(t,e){rs[ls++]=Rl,rs[ls++]=Al,Al=t,Rl=e}function n_(t,e,n){ot[ct++]=Wt,ot[ct++]=$t,ot[ct++]=mi,mi=t;var i=Wt;t=$t;var s=32-Je(i)-1;i&=~(1<<s),n+=1;var a=32-Je(e)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Wt=1<<32-Je(e)+s|n<<s|i,$t=a+t}else Wt=1<<a|n<<s|i,$t=t}function Mf(t){t.return!==null&&(ri(t,1),n_(t,1,0))}function xf(t){for(;t===Al;)Al=rs[--ls],rs[ls]=null,Rl=rs[--ls],rs[ls]=null;for(;t===mi;)mi=ot[--ct],ot[ct]=null,$t=ot[--ct],ot[ct]=null,Wt=ot[--ct],ot[ct]=null}var je=null,Oe=null,q=!1,Et=null,Ot=!1,ou=Error(E(519));function Ei(t){var e=Error(E(418,""));throw Ya(ft(e,t)),ou}function Md(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ke]=t,e[Fe]=i,n){case"dialog":z("cancel",e),z("close",e);break;case"iframe":case"object":case"embed":z("load",e);break;case"video":case"audio":for(n=0;n<Xa.length;n++)z(Xa[n],e);break;case"source":z("error",e);break;case"img":case"image":case"link":z("error",e),z("load",e);break;case"details":z("toggle",e);break;case"input":z("invalid",e),Lg(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Tl(e);break;case"select":z("invalid",e);break;case"textarea":z("invalid",e),jg(e,i.value,i.defaultValue,i.children),Tl(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Mv(e.textContent,n)?(i.popover!=null&&(z("beforetoggle",e),z("toggle",e)),i.onScroll!=null&&z("scroll",e),i.onScrollEnd!=null&&z("scrollend",e),i.onClick!=null&&(e.onclick=Io),e=!0):e=!1,e||Ei(t)}function xd(t){for(je=t.return;je;)switch(je.tag){case 3:case 27:Ot=!0;return;case 5:case 13:Ot=!1;return;default:je=je.return}}function na(t){if(t!==je)return!1;if(!q)return xd(t),q=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Uu(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&Oe&&Ei(t),xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Oe=Tt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Oe=null}}else Oe=je?Tt(t.stateNode.nextSibling):null;return!0}function pr(){Oe=je=null,q=!1}function Ya(t){Et===null?Et=[t]:Et.push(t)}var ba=Error(E(460)),i_=Error(E(474)),cu={then:function(){}};function kd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qr(){}function s_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(qr,qr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===ba?Error(E(483)):t;default:if(typeof e.status=="string")e.then(qr,qr);else{if(t=$,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===ba?Error(E(483)):t}throw Ta=e,ba}}var Ta=null;function Ld(){if(Ta===null)throw Error(E(459));var t=Ta;return Ta=null,t}var ms=null,Fa=0;function Gr(t){var e=Fa;return Fa+=1,ms===null&&(ms=[]),s_(ms,t,e)}function ia(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yr(t,e){throw e.$$typeof===gE?Error(E(525)):(t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ud(t){var e=t._init;return e(t._payload)}function a_(t){function e(m,d){if(t){var _=m.deletions;_===null?(m.deletions=[d],m.flags|=16):_.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function i(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function s(m,d){return m=Hn(m,d),m.index=0,m.sibling=null,m}function a(m,d,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<d?(m.flags|=33554434,d):_):(m.flags|=33554434,d)):(m.flags|=1048576,d)}function r(m){return t&&m.alternate===null&&(m.flags|=33554434),m}function l(m,d,_,y){return d===null||d.tag!==6?(d=yc(_,m.mode,y),d.return=m,d):(d=s(d,_),d.return=m,d)}function o(m,d,_,y){var C=_.type;return C===Zi?f(m,d,_.props.children,y,_.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&Ud(C)===d.type)?(d=s(d,_.props),ia(d,_),d.return=m,d):(d=ul(_.type,_.key,_.props,null,m.mode,y),ia(d,_),d.return=m,d)}function c(m,d,_,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==_.containerInfo||d.stateNode.implementation!==_.implementation?(d=Ec(_,m.mode,y),d.return=m,d):(d=s(d,_.children||[]),d.return=m,d)}function f(m,d,_,y,C){return d===null||d.tag!==7?(d=_i(_,m.mode,y,C),d.return=m,d):(d=s(d,_),d.return=m,d)}function u(m,d,_){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=yc(""+d,m.mode,_),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return _=ul(d.type,d.key,d.props,null,m.mode,_),ia(_,d),_.return=m,_;case fa:return d=Ec(d,m.mode,_),d.return=m,d;case Tn:var y=d._init;return d=y(d._payload),u(m,d,_)}if(da(d)||Js(d))return d=_i(d,m.mode,_,null),d.return=m,d;if(typeof d.then=="function")return u(m,Gr(d),_);if(d.$$typeof===Qt)return u(m,Fr(m,d),_);Yr(m,d)}return null}function h(m,d,_,y){var C=d!==null?d.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:l(m,d,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zr:return _.key===C?o(m,d,_,y):null;case fa:return _.key===C?c(m,d,_,y):null;case Tn:return C=_._init,_=C(_._payload),h(m,d,_,y)}if(da(_)||Js(_))return C!==null?null:f(m,d,_,y,null);if(typeof _.then=="function")return h(m,d,Gr(_),y);if(_.$$typeof===Qt)return h(m,d,Fr(m,_),y);Yr(m,_)}return null}function p(m,d,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return m=m.get(_)||null,l(d,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zr:return m=m.get(y.key===null?_:y.key)||null,o(d,m,y,C);case fa:return m=m.get(y.key===null?_:y.key)||null,c(d,m,y,C);case Tn:var N=y._init;return y=N(y._payload),p(m,d,_,y,C)}if(da(y)||Js(y))return m=m.get(_)||null,f(d,m,y,C,null);if(typeof y.then=="function")return p(m,d,_,Gr(y),C);if(y.$$typeof===Qt)return p(m,d,_,Fr(d,y),C);Yr(d,y)}return null}function v(m,d,_,y){for(var C=null,N=null,R=d,O=d=0,Z=null;R!==null&&O<_.length;O++){R.index>O?(Z=R,R=null):Z=R.sibling;var k=h(m,R,_[O],y);if(k===null){R===null&&(R=Z);break}t&&R&&k.alternate===null&&e(m,R),d=a(k,d,O),N===null?C=k:N.sibling=k,N=k,R=Z}if(O===_.length)return n(m,R),q&&ri(m,O),C;if(R===null){for(;O<_.length;O++)R=u(m,_[O],y),R!==null&&(d=a(R,d,O),N===null?C=R:N.sibling=R,N=R);return q&&ri(m,O),C}for(R=i(R);O<_.length;O++)Z=p(R,m,O,_[O],y),Z!==null&&(t&&Z.alternate!==null&&R.delete(Z.key===null?O:Z.key),d=a(Z,d,O),N===null?C=Z:N.sibling=Z,N=Z);return t&&R.forEach(function(Ve){return e(m,Ve)}),q&&ri(m,O),C}function S(m,d,_,y){if(_==null)throw Error(E(151));for(var C=null,N=null,R=d,O=d=0,Z=null,k=_.next();R!==null&&!k.done;O++,k=_.next()){R.index>O?(Z=R,R=null):Z=R.sibling;var Ve=h(m,R,k.value,y);if(Ve===null){R===null&&(R=Z);break}t&&R&&Ve.alternate===null&&e(m,R),d=a(Ve,d,O),N===null?C=Ve:N.sibling=Ve,N=Ve,R=Z}if(k.done)return n(m,R),q&&ri(m,O),C;if(R===null){for(;!k.done;O++,k=_.next())k=u(m,k.value,y),k!==null&&(d=a(k,d,O),N===null?C=k:N.sibling=k,N=k);return q&&ri(m,O),C}for(R=i(R);!k.done;O++,k=_.next())k=p(R,m,O,k.value,y),k!==null&&(t&&k.alternate!==null&&R.delete(k.key===null?O:k.key),d=a(k,d,O),N===null?C=k:N.sibling=k,N=k);return t&&R.forEach(function(xr){return e(m,xr)}),q&&ri(m,O),C}function T(m,d,_,y){if(typeof _=="object"&&_!==null&&_.type===Zi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case zr:e:{for(var C=_.key;d!==null;){if(d.key===C){if(C=_.type,C===Zi){if(d.tag===7){n(m,d.sibling),y=s(d,_.props.children),y.return=m,m=y;break e}}else if(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&Ud(C)===d.type){n(m,d.sibling),y=s(d,_.props),ia(y,_),y.return=m,m=y;break e}n(m,d);break}else e(m,d);d=d.sibling}_.type===Zi?(y=_i(_.props.children,m.mode,y,_.key),y.return=m,m=y):(y=ul(_.type,_.key,_.props,null,m.mode,y),ia(y,_),y.return=m,m=y)}return r(m);case fa:e:{for(C=_.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===_.containerInfo&&d.stateNode.implementation===_.implementation){n(m,d.sibling),y=s(d,_.children||[]),y.return=m,m=y;break e}else{n(m,d);break}else e(m,d);d=d.sibling}y=Ec(_,m.mode,y),y.return=m,m=y}return r(m);case Tn:return C=_._init,_=C(_._payload),T(m,d,_,y)}if(da(_))return v(m,d,_,y);if(Js(_)){if(C=Js(_),typeof C!="function")throw Error(E(150));return _=C.call(_),S(m,d,_,y)}if(typeof _.then=="function")return T(m,d,Gr(_),y);if(_.$$typeof===Qt)return T(m,d,Fr(m,_),y);Yr(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,d!==null&&d.tag===6?(n(m,d.sibling),y=s(d,_),y.return=m,m=y):(n(m,d),y=yc(_,m.mode,y),y.return=m,m=y),r(m)):n(m,d)}return function(m,d,_,y){try{Fa=0;var C=T(m,d,_,y);return ms=null,C}catch(R){if(R===ba)throw R;var N=ht(29,R,null,m.mode);return N.lanes=y,N.return=m,N}finally{}}}var Si=a_(!0),r_=a_(!1),Os=Ht(null),Ol=Ht(0);function jd(t,e){t=fn,se(Ol,t),se(Os,e),fn=t|e.baseLanes}function uu(){se(Ol,fn),se(Os,Os.current)}function kf(){fn=Ol.current,Ae(Os),Ae(Ol)}var gt=Ht(null),kt=null;function wn(t){var e=t.alternate;se(_e,_e.current&1),se(gt,t),kt===null&&(e===null||Os.current!==null||e.memoizedState!==null)&&(kt=t)}function l_(t){if(t.tag===22){if(se(_e,_e.current),se(gt,t),kt===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(kt=t)}}else An()}function An(){se(_e,_e.current),se(gt,gt.current)}function Zt(t){Ae(gt),kt===t&&(kt=null),Ae(_e)}var _e=Ht(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var IS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},DS=ve.unstable_scheduleCallback,MS=ve.unstable_NormalPriority,ge={$$typeof:Qt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new IS,data:new Map,refCount:0}}function mr(t){t.refCount--,t.refCount===0&&DS(MS,function(){t.controller.abort()})}var Ca=null,fu=0,Ns=0,gs=null;function xS(t,e){if(Ca===null){var n=Ca=[];fu=0,Ns=sh(),gs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fu++,e.then(zd,zd),e}function zd(){if(--fu===0&&Ca!==null){gs!==null&&(gs.status="fulfilled");var t=Ca;Ca=null,Ns=0,gs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function kS(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Hd=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&xS(t,e),Hd!==null&&Hd(t,e)};var gi=Ht(null);function Uf(){var t=gi.current;return t!==null?t:$.pooledCache}function rl(t,e){e===null?se(gi,gi.current):se(gi,e.pool)}function o_(){var t=Uf();return t===null?null:{parent:ge._currentValue,pool:t}}var Qn=0,x=null,K=null,de=null,Il=!1,_s=!1,bi=!1,Dl=0,Ka=0,vs=null,LS=0;function fe(){throw Error(E(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!it(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,s,a){return Qn=a,x=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?Li:ei,bi=!1,a=n(i,s),bi=!1,_s&&(a=u_(e,n,i,s)),c_(t),a}function c_(t){D.H=jt;var e=K!==null&&K.next!==null;if(Qn=0,de=K=x=null,Il=!1,Ka=0,vs=null,e)throw Error(E(300));t===null||we||(t=t.dependencies,t!==null&&kl(t)&&(we=!0))}function u_(t,e,n,i){x=t;var s=0;do{if(_s&&(vs=null),Ka=0,_s=!1,25<=s)throw Error(E(301));if(s+=1,de=K=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}D.H=Ui,a=e(n,i)}while(_s);return a}function US(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?gr(e):e,t=t.useState()[0],(K!==null?K.memoizedState:null)!==t&&(x.flags|=1024),e}function Hf(){var t=Dl!==0;return Dl=0,t}function Bf(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Pf(t){if(Il){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Il=!1}Qn=0,de=K=x=null,_s=!1,Ka=Dl=0,vs=null}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?x.memoizedState=de=t:de=de.next=t,de}function pe(){if(K===null){var t=x.alternate;t=t!==null?t.memoizedState:null}else t=K.next;var e=de===null?x.memoizedState:de.next;if(e!==null)de=e,K=t;else{if(t===null)throw x.alternate===null?Error(E(467)):Error(E(310));K=t,t={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},de===null?x.memoizedState=de=t:de=de.next=t}return de}var Co;Co=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function gr(t){var e=Ka;return Ka+=1,vs===null&&(vs=[]),t=s_(vs,t,e),e=x,(de===null?e.memoizedState:de.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?Li:ei),t}function wo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return gr(t);if(t.$$typeof===Qt)return Le(t)}throw Error(E(438,String(t)))}function Vf(t){var e=null,n=x.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=x.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Co(),x.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=vE;return e.index++,n}function cn(t,e){return typeof e=="function"?e(t):e}function ll(t){var e=pe();return qf(e,K,t)}function qf(t,e,n){var i=t.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=n;var s=t.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}e.baseQueue=s=a,i.pending=null}if(a=t.baseState,s===null)t.memoizedState=a;else{e=s.next;var l=r=null,o=null,c=e,f=!1;do{var u=c.lane&-536870913;if(u!==c.lane?(V&u)===u:(Qn&u)===u){var h=c.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),u===Ns&&(f=!0);else if((Qn&h)===h){c=c.next,h===Ns&&(f=!0);continue}else u={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=u,r=a):o=o.next=u,x.lanes|=h,$n|=h;u=c.action,bi&&n(a,u),a=c.hasEagerState?c.eagerState:n(a,u)}else h={lane:u,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=h,r=a):o=o.next=h,x.lanes|=u,$n|=u;c=c.next}while(c!==null&&c!==e);if(o===null?r=a:o.next=l,!it(a,t.memoizedState)&&(we=!0,f&&(n=gs,n!==null)))throw n;t.memoizedState=a,t.baseState=r,t.baseQueue=o,i.lastRenderedState=a}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function oc(t){var e=pe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=t(a,r.action),r=r.next;while(r!==s);it(a,e.memoizedState)||(we=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function f_(t,e,n){var i=x,s=pe(),a=q;if(a){if(n===void 0)throw Error(E(407));n=n()}else n=e();var r=!it((K||s).memoizedState,n);if(r&&(s.memoizedState=n,we=!0),s=s.queue,Gf(p_.bind(null,i,s,t),[t]),s.getSnapshot!==e||r||de!==null&&de.memoizedState.tag&1){if(i.flags|=2048,Is(9,d_.bind(null,i,s,n,e),{destroy:void 0},null),$===null)throw Error(E(349));a||Qn&60||h_(i,e,n)}return n}function h_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=x.updateQueue,e===null?(e=Co(),x.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,i){e.value=n,e.getSnapshot=i,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!it(t,n)}catch{return!0}}function g_(t){var e=Xn(t,2);e!==null&&He(e,t,2)}function hu(t){var e=qe();if(typeof t=="function"){var n=t;if(t=n(),bi){xn(!0);try{n()}finally{xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:t},e}function __(t,e,n,i){return t.baseState=n,qf(t,K,typeof i=="function"?i:cn)}function jS(t,e,n,i,s){if(Ro(t))throw Error(E(485));if(t=e.action,t!==null){var a={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};D.T!==null?n(!0):a.isTransition=!1,i(a),n=e.pending,n===null?(a.next=e.pending=a,v_(e,a)):(a.next=n.next,e.pending=n.next=a)}}function v_(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var a=D.T,r={};D.T=r;try{var l=n(s,i),o=D.S;o!==null&&o(r,l),Bd(t,e,l)}catch(c){du(t,e,c)}finally{D.T=a}}else try{a=n(s,i),Bd(t,e,a)}catch(c){du(t,e,c)}}function Bd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Pd(t,e,i)},function(i){return du(t,e,i)}):Pd(t,e,n)}function Pd(t,e,n){e.status="fulfilled",e.value=n,y_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,v_(t,n)))}function du(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,y_(e),e=e.next;while(e!==i)}t.action=null}function y_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function E_(t,e){return e}function S_(t,e){if(q){var n=$.formState;if(n!==null){e:{var i=x;if(q){if(Oe){t:{for(var s=Oe,a=Ot;s.nodeType!==8;){if(!a){s=null;break t}if(s=Tt(s.nextSibling),s===null){s=null;break t}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Oe=Tt(s.nextSibling),i=s.data==="F!";break e}}Ei(i)}i=!1}i&&(e=n[0])}}return n=qe(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E_,lastRenderedState:e},n.queue=i,n=z_.bind(null,x,i),i.dispatch=n,i=hu(!1),a=Xf.bind(null,x,!1,i.queue),i=qe(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=jS.bind(null,x,s,a,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function b_(t){var e=pe();return T_(e,K,t)}function T_(t,e,n){e=qf(t,e,E_)[0],t=ll(cn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?gr(e):e;var i=pe(),s=i.queue,a=s.dispatch;return n!==i.memoizedState&&(x.flags|=2048,Is(9,zS.bind(null,s,n),{destroy:void 0},null)),[e,a,t]}function zS(t,e){t.action=e}function C_(t){var e=pe(),n=K;if(n!==null)return T_(e,n,t);pe(),e=e.memoizedState,n=pe();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Is(t,e,n,i){return t={tag:t,create:e,inst:n,deps:i,next:null},e=x.updateQueue,e===null&&(e=Co(),x.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function w_(){return pe().memoizedState}function ol(t,e,n,i){var s=qe();x.flags|=t,s.memoizedState=Is(1|e,n,{destroy:void 0},i===void 0?null:i)}function Ao(t,e,n,i){var s=pe();i=i===void 0?null:i;var a=s.memoizedState.inst;K!==null&&i!==null&&jf(i,K.memoizedState.deps)?s.memoizedState=Is(e,n,a,i):(x.flags|=t,s.memoizedState=Is(1|e,n,a,i))}function Vd(t,e){ol(8390656,8,t,e)}function Gf(t,e){Ao(2048,8,t,e)}function A_(t,e){return Ao(4,2,t,e)}function R_(t,e){return Ao(4,4,t,e)}function O_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N_(t,e,n){n=n!=null?n.concat([t]):null,Ao(4,4,O_.bind(null,e,t),n)}function Yf(){}function I_(t,e){var n=pe();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=pe();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&jf(e,i[1]))return i[0];if(i=t(),bi){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[i,e],i}function Ff(t,e,n){return n===void 0||Qn&1073741824?t.memoizedState=e:(t.memoizedState=n,t=yv(),x.lanes|=t,$n|=t,n)}function M_(t,e,n,i){return it(n,e)?n:Os.current!==null?(t=Ff(t,n,i),it(t,e)||(we=!0),t):Qn&42?(t=yv(),x.lanes|=t,$n|=t,e):(we=!0,t.memoizedState=n)}function x_(t,e,n,i,s){var a=te.p;te.p=a!==0&&8>a?a:8;var r=D.T,l={};D.T=l,Xf(t,!1,e,n);try{var o=s(),c=D.S;if(c!==null&&c(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var f=kS(o,i);wa(t,e,f,et(t))}else wa(t,e,i,et(t))}catch(u){wa(t,e,{then:function(){},status:"rejected",reason:u},et())}finally{te.p=a,D.T=r}}function HS(){}function pu(t,e,n,i){if(t.tag!==5)throw Error(E(476));var s=k_(t).queue;x_(t,s,e,pi,n===null?HS:function(){return L_(t),n(i)})}function k_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:pi,baseState:pi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:pi},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function L_(t){var e=k_(t).next.queue;wa(t,e,{},et())}function Kf(){return Le($a)}function U_(){return pe().memoizedState}function j_(){return pe().memoizedState}function BS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=et();t=jn(n);var i=zn(e,t,n);i!==null&&(He(i,e,n),Ra(i,e,n)),e={cache:Lf()},t.payload=e;return}e=e.return}}function PS(t,e,n){var i=et();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ro(t)?H_(e,n):(n=Df(t,e,n,i),n!==null&&(He(n,t,i),B_(n,e,i)))}function z_(t,e,n){var i=et();wa(t,e,n,i)}function wa(t,e,n,i){var s={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ro(t))H_(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var r=e.lastRenderedState,l=a(r,n);if(s.hasEagerState=!0,s.eagerState=l,it(l,r))return To(t,e,s,0),$===null&&bo(),!1}catch{}finally{}if(n=Df(t,e,s,i),n!==null)return He(n,t,i),B_(n,e,i),!0}return!1}function Xf(t,e,n,i){if(i={lane:2,revertLane:sh(),action:i,hasEagerState:!1,eagerState:null,next:null},Ro(t)){if(e)throw Error(E(479))}else e=Df(t,n,i,2),e!==null&&He(e,t,2)}function Ro(t){var e=t.alternate;return t===x||e!==null&&e===x}function H_(t,e){_s=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194176){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Og(t,n)}}var jt={readContext:Le,use:wo,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe};jt.useCacheRefresh=fe;jt.useMemoCache=fe;jt.useHostTransitionStatus=fe;jt.useFormState=fe;jt.useActionState=fe;jt.useOptimistic=fe;var Li={readContext:Le,use:wo,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:Le,useEffect:Vd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,ol(4194308,4,O_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){ol(4,2,t,e)},useMemo:function(t,e){var n=qe();e=e===void 0?null:e;var i=t();if(bi){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=qe();if(n!==void 0){var s=n(e);if(bi){xn(!0);try{n(e)}finally{xn(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=PS.bind(null,x,t),[i.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:function(t){t=hu(t);var e=t.queue,n=z_.bind(null,x,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Yf,useDeferredValue:function(t,e){var n=qe();return Ff(n,t,e)},useTransition:function(){var t=hu(!1);return t=x_.bind(null,x,t.queue,!0,!1),qe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=x,s=qe();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),$===null)throw Error(E(349));V&60||h_(i,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,Vd(p_.bind(null,i,a,t),[t]),i.flags|=2048,Is(9,d_.bind(null,i,a,n,e),{destroy:void 0},null),n},useId:function(){var t=qe(),e=$.identifierPrefix;if(q){var n=$t,i=Wt;n=(i&~(1<<32-Je(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return qe().memoizedState=BS.bind(null,x)}};Li.useMemoCache=Vf;Li.useHostTransitionStatus=Kf;Li.useFormState=S_;Li.useActionState=S_;Li.useOptimistic=function(t){var e=qe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Xf.bind(null,x,!0,n),n.dispatch=e,[t,e]};var ei={readContext:Le,use:wo,useCallback:I_,useContext:Le,useEffect:Gf,useImperativeHandle:N_,useInsertionEffect:A_,useLayoutEffect:R_,useMemo:D_,useReducer:ll,useRef:w_,useState:function(){return ll(cn)},useDebugValue:Yf,useDeferredValue:function(t,e){var n=pe();return M_(n,K.memoizedState,t,e)},useTransition:function(){var t=ll(cn)[0],e=pe().memoizedState;return[typeof t=="boolean"?t:gr(t),e]},useSyncExternalStore:f_,useId:U_};ei.useCacheRefresh=j_;ei.useMemoCache=Vf;ei.useHostTransitionStatus=Kf;ei.useFormState=b_;ei.useActionState=b_;ei.useOptimistic=function(t,e){var n=pe();return __(n,K,t,e)};var Ui={readContext:Le,use:wo,useCallback:I_,useContext:Le,useEffect:Gf,useImperativeHandle:N_,useInsertionEffect:A_,useLayoutEffect:R_,useMemo:D_,useReducer:oc,useRef:w_,useState:function(){return oc(cn)},useDebugValue:Yf,useDeferredValue:function(t,e){var n=pe();return K===null?Ff(n,t,e):M_(n,K.memoizedState,t,e)},useTransition:function(){var t=oc(cn)[0],e=pe().memoizedState;return[typeof t=="boolean"?t:gr(t),e]},useSyncExternalStore:f_,useId:U_};Ui.useCacheRefresh=j_;Ui.useMemoCache=Vf;Ui.useHostTransitionStatus=Kf;Ui.useFormState=C_;Ui.useActionState=C_;Ui.useOptimistic=function(t,e){var n=pe();return K!==null?__(n,K,t,e):(n.baseState=t,[t,n.queue.dispatch])};function cc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=et(),s=jn(i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(He(e,t,i),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=et(),s=jn(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(He(e,t,i),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),i=jn(n);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,n),e!==null&&(He(e,t,n),Ra(e,t,n))}};function qd(t,e,n,i,s,a,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,r):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,i)||!Ga(s,a):!0}function Gd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Ti(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=ne({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function P_(t){Ml(t)}function V_(t){console.error(t)}function q_(t){Ml(t)}function xl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Yd(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function gu(t,e,n){return n=jn(n),n.tag=3,n.payload={element:null},n.callback=function(){xl(t,e)},n}function G_(t){return t=jn(t),t.tag=3,t}function Y_(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;t.payload=function(){return s(a)},t.callback=function(){Yd(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Yd(e,n,i),typeof s!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function VS(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&_r(e,n,s,!0),n=gt.current,n!==null){switch(n.tag){case 13:return kt===null?Du():n.alternate===null&&ce===0&&(ce=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===cu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),bc(t,i,s)),!1;case 22:return n.flags|=65536,i===cu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),bc(t,i,s)),!1}throw Error(E(435,n.tag))}return bc(t,i,s),Du(),!1}if(q)return e=gt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==ou&&(t=Error(E(422),{cause:i}),Ya(ft(t,n)))):(i!==ou&&(e=Error(E(423),{cause:i}),Ya(ft(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=ft(i,n),s=gu(t.stateNode,i,s),mc(t,s),ce!==4&&(ce=2)),!1;var a=Error(E(520),{cause:i});if(a=ft(a,n),Da===null?Da=[a]:Da.push(a),ce!==4&&(ce=2),e===null)return!0;i=ft(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=gu(n.stateNode,i,t),mc(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=G_(s),Y_(s,t,n,i),mc(n,s),!1}n=n.return}while(n!==null);return!1}var F_=Error(E(461)),we=!1;function Re(t,e,n,i){e.child=t===null?r_(e,null,n,i):Si(e,t.child,n,i)}function Fd(t,e,n,i,s){n=n.render;var a=e.ref;if("ref"in i){var r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}else r=i;return Ci(e),i=zf(t,e,n,r,a,s),l=Hf(),t!==null&&!we?(Bf(t,e,s),un(t,e,s)):(q&&l&&Mf(e),e.flags|=1,Re(t,e,i,s),e.child)}function Kd(t,e,n,i,s){if(t===null){var a=n.type;return typeof a=="function"&&!Jf(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,K_(t,e,a,i,s)):(t=ul(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!Qf(t,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(r,i)&&t.ref===e.ref)return un(t,e,s)}return e.flags|=1,t=Hn(a,i),t.ref=e.ref,t.return=e,e.child=t}function K_(t,e,n,i,s){if(t!==null){var a=t.memoizedProps;if(Ga(a,i)&&t.ref===e.ref)if(we=!1,e.pendingProps=i=a,Qf(t,s))t.flags&131072&&(we=!0);else return e.lanes=t.lanes,un(t,e,s)}return _u(t,e,n,i,s)}function X_(t,e,n){var i=e.pendingProps,s=i.children,a=(e.stateNode._pendingVisibility&2)!==0,r=t!==null?t.memoizedState:null;if(Aa(t,e),i.mode==="hidden"||a){if(e.flags&128){if(i=r!==null?r.baseLanes|n:n,t!==null){for(s=e.child=t.child,a=0;s!==null;)a=a|s.lanes|s.childLanes,s=s.sibling;e.childLanes=a&~i}else e.childLanes=0,e.child=null;return Xd(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(e,r!==null?r.cachePool:null),r!==null?jd(e,r):uu(),l_(e);else return e.lanes=e.childLanes=536870912,Xd(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(rl(e,r.cachePool),jd(e,r),An(),e.memoizedState=null):(t!==null&&rl(e,null),uu(),An());return Re(t,e,s,n),e.child}function Xd(t,e,n,i){var s=Uf();return s=s===null?null:{parent:ge._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&rl(e,null),uu(),l_(e),t!==null&&_r(t,e,i,!0),null}function Aa(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(E(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function _u(t,e,n,i,s){return Ci(e),n=zf(t,e,n,i,void 0,s),i=Hf(),t!==null&&!we?(Bf(t,e,s),un(t,e,s)):(q&&i&&Mf(e),e.flags|=1,Re(t,e,n,s),e.child)}function Qd(t,e,n,i,s,a){return Ci(e),e.updateQueue=null,n=u_(e,i,n,s),c_(t),i=Hf(),t!==null&&!we?(Bf(t,e,a),un(t,e,a)):(q&&i&&Mf(e),e.flags|=1,Re(t,e,n,a),e.child)}function Wd(t,e,n,i,s){if(Ci(e),e.stateNode===null){var a=as,r=n.contextType;typeof r=="object"&&r!==null&&(a=Le(r)),a=new n(i,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mu,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=i,a.state=e.memoizedState,a.refs={},Wf(e),r=n.contextType,a.context=typeof r=="object"&&r!==null?Le(r):as,a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(cc(e,n,r,i),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&mu.enqueueReplaceState(a,a.state,null),Na(e,i,a,s),Oa(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){a=e.stateNode;var l=e.memoizedProps,o=Ti(n,l);a.props=o;var c=a.context,f=n.contextType;r=as,typeof f=="object"&&f!==null&&(r=Le(f));var u=n.getDerivedStateFromProps;f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l||c!==r)&&Gd(e,a,i,r),Cn=!1;var h=e.memoizedState;a.state=h,Na(e,i,a,s),Oa(),c=e.memoizedState,l||h!==c||Cn?(typeof u=="function"&&(cc(e,n,u,i),c=e.memoizedState),(o=Cn||qd(e,n,o,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=r,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Tu(t,e),r=e.memoizedProps,f=Ti(n,r),a.props=f,u=e.pendingProps,h=a.context,c=n.contextType,o=as,typeof c=="object"&&c!==null&&(o=Le(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==u||h!==o)&&Gd(e,a,i,o),Cn=!1,h=e.memoizedState,a.state=h,Na(e,i,a,s),Oa();var p=e.memoizedState;r!==u||h!==p||Cn||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof l=="function"&&(cc(e,n,l,i),p=e.memoizedState),(f=Cn||qd(e,n,f,i,h,p,o)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),a.props=i,a.state=p,a.context=o,i=f):(typeof a.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return a=i,Aa(t,e),i=(e.flags&128)!==0,a||i?(a=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&i?(e.child=Si(e,t.child,null,s),e.child=Si(e,null,n,s)):Re(t,e,n,s),e.memoizedState=a.state,t=e.child):t=un(t,e,s),t}function $d(t,e,n,i){return pr(),e.flags|=256,Re(t,e,n,i),e.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function fc(t){return{baseLanes:t,cachePool:o_()}}function hc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=dt),t}function Q_(t,e,n){var i=e.pendingProps,s=!1,a=(e.flags&128)!==0,r;if((r=a)||(r=t!==null&&t.memoizedState===null?!1:(_e.current&2)!==0),r&&(s=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(q){if(s?wn(e):An(),q){var l=Oe,o;if(o=l){e:{for(o=l,l=Ot;o.nodeType!==8;){if(!l){l=null;break e}if(o=Tt(o.nextSibling),o===null){l=null;break e}}l=o}l!==null?(e.memoizedState={dehydrated:l,treeContext:mi!==null?{id:Wt,overflow:$t}:null,retryLane:536870912},o=ht(18,null,null,0),o.stateNode=l,o.return=e,e.child=o,je=e,Oe=null,o=!0):o=!1}o||Ei(e)}if(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null))return l.data==="$!"?e.lanes=16:e.lanes=536870912,null;Zt(e)}return l=i.children,i=i.fallback,s?(An(),s=e.mode,l=yu({mode:"hidden",children:l},s),i=_i(i,s,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,s=e.child,s.memoizedState=fc(n),s.childLanes=hc(t,r,n),e.memoizedState=uc,i):(wn(e),vu(e,l))}if(o=t.memoizedState,o!==null&&(l=o.dehydrated,l!==null)){if(a)e.flags&256?(wn(e),e.flags&=-257,e=dc(t,e,n)):e.memoizedState!==null?(An(),e.child=t.child,e.flags|=128,e=null):(An(),s=i.fallback,l=e.mode,i=yu({mode:"visible",children:i.children},l),s=_i(s,l,n,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,Si(e,t.child,null,n),i=e.child,i.memoizedState=fc(n),i.childLanes=hc(t,r,n),e.memoizedState=uc,e=s);else if(wn(e),l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(E(419)),i.stack="",i.digest=r,Ya({value:i,source:null,stack:null}),e=dc(t,e,n)}else if(we||_r(t,e,n,!1),r=(n&t.childLanes)!==0,we||r){if(r=$,r!==null){if(i=n&-n,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(r.suspendedLanes|n)?0:i,i!==0&&i!==o.retryLane)throw o.retryLane=i,Xn(t,i),He(r,t,i),F_}l.data==="$?"||Du(),e=dc(t,e,n)}else l.data==="$?"?(e.flags|=128,e.child=t.child,e=ib.bind(null,t),l._reactRetry=e,e=null):(t=o.treeContext,Oe=Tt(l.nextSibling),je=e,q=!0,Et=null,Ot=!1,t!==null&&(ot[ct++]=Wt,ot[ct++]=$t,ot[ct++]=mi,Wt=t.id,$t=t.overflow,mi=e),e=vu(e,i.children),e.flags|=4096);return e}return s?(An(),s=i.fallback,l=e.mode,o=t.child,c=o.sibling,i=Hn(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&31457280,c!==null?s=Hn(c,s):(s=_i(s,l,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,l=t.child.memoizedState,l===null?l=fc(n):(o=l.cachePool,o!==null?(c=ge._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=o_(),l={baseLanes:l.baseLanes|n,cachePool:o}),s.memoizedState=l,s.childLanes=hc(t,r,n),e.memoizedState=uc,i):(wn(e),n=t.child,t=n.sibling,n=Hn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function vu(t,e){return e=yu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yu(t,e){return _v(t,e,0,null)}function dc(t,e,n){return Si(e,t.child,null,n),t=vu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Su(t.return,e,n)}function pc(t,e,n,i,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s)}function W_(t,e,n){var i=e.pendingProps,s=i.revealOrder,a=i.tail;if(Re(t,e,i.children,n),i=_e.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zd(t,n,e);else if(t.tag===19)Zd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(se(_e,i),s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),pc(e,!1,s,n,a);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Nl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}pc(e,!0,n,null,a);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$n|=e.lanes,!(n&e.childLanes))if(t!==null){if(_r(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qf(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function qS(t,e,n){switch(e.tag){case 3:El(e,e.stateNode.containerInfo),Rn(e,ge,t.memoizedState.cache),pr();break;case 27:case 5:Jc(e);break;case 4:El(e,e.stateNode.containerInfo);break;case 10:Rn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(wn(e),e.flags|=128,null):n&e.child.childLanes?Q_(t,e,n):(wn(e),t=un(t,e,n),t!==null?t.sibling:null);wn(e);break;case 19:var s=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(_r(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return W_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),se(_e,_e.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n);case 24:Rn(e,ge,t.memoizedState.cache)}return un(t,e,n)}function $_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)we=!0;else{if(!Qf(t,n)&&!(e.flags&128))return we=!1,qS(t,e,n);we=!!(t.flags&131072)}else we=!1,q&&e.flags&1048576&&n_(e,Rl,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,s=i._init;if(i=s(i._payload),e.type=i,typeof i=="function")Jf(i)?(t=Ti(i,t),e.tag=1,e=Wd(null,e,i,t,n)):(e.tag=0,e=_u(null,e,i,t,n));else{if(i!=null){if(s=i.$$typeof,s===Ef){e.tag=11,e=Fd(null,e,i,t,n);break e}else if(s===Sf){e.tag=14,e=Kd(null,e,i,t,n);break e}}throw e=$c(i)||i,Error(E(306,e,""))}}return e;case 0:return _u(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=Ti(i,e.pendingProps),Wd(t,e,i,s,n);case 3:e:{if(El(e,e.stateNode.containerInfo),t===null)throw Error(E(387));var a=e.pendingProps;s=e.memoizedState,i=s.element,Tu(t,e),Na(e,a,null,n);var r=e.memoizedState;if(a=r.cache,Rn(e,ge,a),a!==s.cache&&bu(e,[ge],n,!0),Oa(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=$d(t,e,a,n);break e}else if(a!==i){i=ft(Error(E(424)),e),Ya(i),e=$d(t,e,a,n);break e}else for(Oe=Tt(e.stateNode.containerInfo.firstChild),je=e,q=!0,Et=null,Ot=!0,n=r_(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),a===i){e=un(t,e,n);break e}Re(t,e,a,n)}e=e.child}return e;case 26:return Aa(t,e),t===null?(n=gp(e.type,null,e.pendingProps,null))?e.memoizedState=n:q||(n=e.type,t=e.pendingProps,i=Pl(Un.current).createElement(n),i[ke]=e,i[Fe]=t,Ie(i,n,t),Te(i),e.stateNode=i):e.memoizedState=gp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jc(e),t===null&&q&&(i=e.stateNode=Lv(e.type,e.pendingProps,Un.current),je=e,Ot=!0,Oe=Tt(i.firstChild)),i=e.pendingProps.children,t!==null||q?Re(t,e,i,n):e.child=Si(e,null,i,n),Aa(t,e),e.child;case 5:return t===null&&q&&((s=i=Oe)&&(i=yb(i,e.type,e.pendingProps,Ot),i!==null?(e.stateNode=i,je=e,Oe=Tt(i.firstChild),Ot=!1,s=!0):s=!1),s||Ei(e)),Jc(e),s=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,i=a.children,Uu(s,a)?i=null:r!==null&&Uu(s,r)&&(e.flags|=32),e.memoizedState!==null&&(s=zf(t,e,US,null,null,n),$a._currentValue=s),Aa(t,e),Re(t,e,i,n),e.child;case 6:return t===null&&q&&((t=n=Oe)&&(n=Eb(n,e.pendingProps,Ot),n!==null?(e.stateNode=n,je=e,Oe=null,t=!0):t=!1),t||Ei(e)),null;case 13:return Q_(t,e,n);case 4:return El(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Si(e,null,i,n):Re(t,e,i,n),e.child;case 11:return Fd(t,e,e.type,e.pendingProps,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Rn(e,e.type,i.value),Re(t,e,i.children,n),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,Ci(e),s=Le(s),i=i(s),e.flags|=1,Re(t,e,i,n),e.child;case 14:return Kd(t,e,e.type,e.pendingProps,n);case 15:return K_(t,e,e.type,e.pendingProps,n);case 19:return W_(t,e,n);case 22:return X_(t,e,n);case 24:return Ci(e),i=Le(ge),t===null?(s=Uf(),s===null&&(s=$,a=Lf(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),e.memoizedState={parent:i,cache:s},Wf(e),Rn(e,ge,s)):(t.lanes&n&&(Tu(t,e),Na(e,null,null,n),Oa()),s=t.memoizedState,a=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Rn(e,ge,i)):(i=a.cache,Rn(e,ge,i),i!==s.cache&&bu(e,[ge],n,!0))),Re(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(E(156,e.tag))}var Eu=Ht(null),ji=null,Jt=null;function Rn(t,e,n){se(Eu,e._currentValue),e._currentValue=n}function an(t){t._currentValue=Eu.current,Ae(Eu)}function Su(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bu(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;e:for(;a!==null;){var l=a;a=s;for(var o=0;o<e.length;o++)if(l.context===e[o]){a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Su(a.return,n,t),i||(r=null);break e}a=l.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(E(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Su(r,n,t),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===t){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function _r(t,e,n,i){t=null;for(var s=e,a=!1;s!==null;){if(!a){if(s.flags&524288)a=!0;else if(s.flags&262144)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(E(387));if(r=r.memoizedProps,r!==null){var l=s.type;it(s.pendingProps.value,r.value)||(t!==null?t.push(l):t=[l])}}else if(s===yl.current){if(r=s.alternate,r===null)throw Error(E(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push($a):t=[$a])}s=s.return}t!==null&&bu(e,t,n,i),e.flags|=262144}function kl(t){for(t=t.firstContext;t!==null;){if(!it(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ci(t){ji=t,Jt=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Le(t){return Z_(ji,t)}function Fr(t,e){return ji===null&&Ci(t),Z_(t,e)}function Z_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Jt===null){if(t===null)throw Error(E(308));Jt=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Jt=Jt.next=e;return n}var Cn=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function jn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,le&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=wl(t),t_(t,null,n),e}return To(t,i,e,n),wl(t)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Og(t,n)}}function mc(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Cu=!1;function Oa(){if(Cu){var t=gs;if(t!==null)throw t}}function Na(t,e,n,i){Cu=!1;var s=t.updateQueue;Cn=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var o=l,c=o.next;o.next=null,r===null?a=c:r.next=c,r=o;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==r&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=o))}if(a!==null){var u=s.baseState;r=0,f=c=o=null,l=a;do{var h=l.lane&-536870913,p=h!==l.lane;if(p?(V&h)===h:(i&h)===h){h!==0&&h===Ns&&(Cu=!0),f!==null&&(f=f.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var v=t,S=l;h=e;var T=n;switch(S.tag){case 1:if(v=S.payload,typeof v=="function"){u=v.call(T,u,h);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(T,u,h):v,h==null)break e;u=ne({},u,h);break e;case 2:Cn=!0}}h=l.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=p,o=u):f=f.next=p,r|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(o=u),s.baseState=o,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),$n|=r,t.lanes=r,t.memoizedState=u}}function J_(t,e){if(typeof t!="function")throw Error(E(191,t));t.call(e)}function ev(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)J_(n[t],e)}function vr(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(l){Q(e,e.return,l)}}function Wn(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&t)===t){var r=i.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,s=e;var o=n;try{l()}catch(c){Q(s,o,c)}}}i=i.next}while(i!==a)}}catch(c){Q(e,e.return,c)}}function tv(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{ev(e,n)}catch(i){Q(t,t.return,i)}}}function nv(t,e,n){n.props=Ti(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Q(t,e,i)}}function fi(t,e){try{var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=i;break;default:s=i}typeof n=="function"?t.refCleanup=n(s):n.current=s}}catch(a){Q(t,e,a)}}function $e(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Q(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Q(t,e,s)}else n.current=null}function iv(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Q(t,t.return,s)}}function Jd(t,e,n){try{var i=t.stateNode;pb(i,t.type,n,e),i[Fe]=e}catch(s){Q(t,t.return,s)}}function sv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function gc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Io));else if(i!==4&&i!==27&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function Ll(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&i!==27&&(t=t.child,t!==null))for(Ll(t,e,n),t=t.sibling;t!==null;)Ll(t,e,n),t=t.sibling}var Ft=!1,oe=!1,_c=!1,ep=typeof WeakSet=="function"?WeakSet:Set,Se=null,tp=!1;function GS(t,e){if(t=t.containerInfo,ku=Yl,t=Xg(t),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,l=-1,o=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==n||s!==0&&u.nodeType!==3||(l=r+s),u!==a||i!==0&&u.nodeType!==3||(o=r+i),u.nodeType===3&&(r+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===s&&(l=r),h===a&&++f===i&&(o=r),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},Yl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){switch(e=Se,a=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&a!==null){t=void 0,n=e,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=Ti(n.type,s,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=t}catch(S){Q(n,n.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ju(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ju(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(E(163))}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=tp,tp=!1,v}function av(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Gt(t,n),i&4&&vr(5,n);break;case 1:if(Gt(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(l){Q(n,n.return,l)}else{var s=Ti(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(l){Q(n,n.return,l)}}i&64&&tv(n),i&512&&fi(n,n.return);break;case 3:if(Gt(t,n),i&64&&(i=n.updateQueue,i!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ev(i,t)}catch(l){Q(n,n.return,l)}}break;case 26:Gt(t,n),i&512&&fi(n,n.return);break;case 27:case 5:Gt(t,n),e===null&&i&4&&iv(n),i&512&&fi(n,n.return);break;case 12:Gt(t,n);break;case 13:Gt(t,n),i&4&&ov(t,n);break;case 22:if(s=n.memoizedState!==null||Ft,!s){e=e!==null&&e.memoizedState!==null||oe;var a=Ft,r=oe;Ft=s,(oe=e)&&!r?Sn(t,n,(n.subtreeFlags&8772)!==0):Gt(t,n),Ft=a,oe=r}i&512&&(n.memoizedProps.mode==="manual"?fi(n,n.return):$e(n,n.return));break;default:Gt(t,n)}}function rv(t){var e=t.alternate;e!==null&&(t.alternate=null,rv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Tf(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var he=null,Qe=!1;function qt(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ur,n)}catch{}switch(n.tag){case 26:oe||$e(n,e),qt(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:oe||$e(n,e);var i=he,s=Qe;for(he=n.stateNode,qt(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Tf(n),he=i,Qe=s;break;case 5:oe||$e(n,e);case 6:s=he;var a=Qe;if(he=null,qt(t,e,n),he=s,Qe=a,he!==null)if(Qe)try{t=he,i=n.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)}catch(r){Q(n,e,r)}else try{he.removeChild(n.stateNode)}catch(r){Q(n,e,r)}break;case 18:he!==null&&(Qe?(e=he,n=n.stateNode,e.nodeType===8?Nc(e.parentNode,n):e.nodeType===1&&Nc(e,n),er(e)):Nc(he,n.stateNode));break;case 4:i=he,s=Qe,he=n.stateNode.containerInfo,Qe=!0,qt(t,e,n),he=i,Qe=s;break;case 0:case 11:case 14:case 15:oe||Wn(2,n,e),oe||Wn(4,n,e),qt(t,e,n);break;case 1:oe||($e(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&nv(n,e,i)),qt(t,e,n);break;case 21:qt(t,e,n);break;case 22:oe||$e(n,e),oe=(i=oe)||n.memoizedState!==null,qt(t,e,n),oe=i;break;default:qt(t,e,n)}}function ov(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{er(t)}catch(n){Q(e,e.return,n)}}function YS(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ep),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ep),e;default:throw Error(E(435,t.tag))}}function vc(t,e){var n=YS(t);e.forEach(function(i){var s=sb.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}function st(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=t,r=e,l=r;e:for(;l!==null;){switch(l.tag){case 27:case 5:he=l.stateNode,Qe=!1;break e;case 3:he=l.stateNode.containerInfo,Qe=!0;break e;case 4:he=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(he===null)throw Error(E(160));lv(a,r,s),he=null,Qe=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)cv(e,t),e=e.sibling}var yt=null;function cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:st(e,t),at(t),i&4&&(Wn(3,t,t.return),vr(3,t),Wn(5,t,t.return));break;case 1:st(e,t),at(t),i&512&&(oe||n===null||$e(n,n.return)),i&64&&Ft&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=yt;if(st(e,t),at(t),i&512&&(oe||n===null||$e(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Pa]||a[ke]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Ie(a,i,n),a[ke]=t,Te(a),i=a;break e;case"link":var r=vp("link","href",s).get(i+(n.href||""));if(r){for(var l=0;l<r.length;l++)if(a=r[l],a.getAttribute("href")===(n.href==null?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(l,1);break t}}a=s.createElement(i),Ie(a,i,n),s.head.appendChild(a);break;case"meta":if(r=vp("meta","content",s).get(i+(n.content||""))){for(l=0;l<r.length;l++)if(a=r[l],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(l,1);break t}}a=s.createElement(i),Ie(a,i,n),s.head.appendChild(a);break;default:throw Error(E(468,i))}a[ke]=t,Te(a),i=a}t.stateNode=i}else yp(s,t.type,t.stateNode);else t.stateNode=_p(s,i,t.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?yp(s,t.type,t.stateNode):_p(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Jd(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&t.alternate===null){s=t.stateNode,a=t.memoizedProps;try{for(var o=s.firstChild;o;){var c=o.nextSibling,f=o.nodeName;o[Pa]||f==="HEAD"||f==="BODY"||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&o.rel.toLowerCase()==="stylesheet"||s.removeChild(o),o=c}for(var u=t.type,h=s.attributes;h.length;)s.removeAttributeNode(h[0]);Ie(s,u,a),s[ke]=t,s[Fe]=a}catch(v){Q(t,t.return,v)}}case 5:if(st(e,t),at(t),i&512&&(oe||n===null||$e(n,n.return)),t.flags&32){s=t.stateNode;try{Rs(s,"")}catch(v){Q(t,t.return,v)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,Jd(t,s,n!==null?n.memoizedProps:s)),i&1024&&(_c=!0);break;case 6:if(st(e,t),at(t),i&4){if(t.stateNode===null)throw Error(E(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(v){Q(t,t.return,v)}}break;case 3:if(hl=null,s=yt,yt=Vl(e.containerInfo),st(e,t),yt=s,at(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{er(e.containerInfo)}catch(v){Q(t,t.return,v)}_c&&(_c=!1,uv(t));break;case 4:i=yt,yt=Vl(t.stateNode.containerInfo),st(e,t),at(t),yt=i;break;case 12:st(e,t),at(t);break;case 13:st(e,t),at(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nh=xt()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vc(t,i)));break;case 22:if(i&512&&(oe||n===null||$e(n,n.return)),o=t.memoizedState!==null,c=n!==null&&n.memoizedState!==null,f=Ft,u=oe,Ft=f||o,oe=u||c,st(e,t),oe=u,Ft=f,at(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,i&8192&&(e._visibility=o?e._visibility&-2:e._visibility|1,o&&(e=Ft||oe,n===null||c||e||Qi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){c=n=e;try{if(s=c.stateNode,o)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{r=c.stateNode,l=c.memoizedProps.style;var p=l!=null&&l.hasOwnProperty("display")?l.display:null;r.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(v){Q(c,c.return,v)}}}else if(e.tag===6){if(n===null){c=e;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(v){Q(c,c.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,vc(t,n))));break;case 19:st(e,t),at(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vc(t,i)));break;case 21:break;default:st(e,t),at(t)}}function at(t){var e=t.flags;if(e&2){try{if(t.tag!==27){e:{for(var n=t.return;n!==null;){if(sv(n)){var i=n;break e}n=n.return}throw Error(E(160))}switch(i.tag){case 27:var s=i.stateNode,a=gc(t);Ll(t,a,s);break;case 5:var r=i.stateNode;i.flags&32&&(Rs(r,""),i.flags&=-33);var l=gc(t);Ll(t,l,r);break;case 3:case 4:var o=i.stateNode.containerInfo,c=gc(t);wu(t,c,o);break;default:throw Error(E(161))}}}catch(f){Q(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;uv(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Gt(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)av(t,e.alternate,e),e=e.sibling}function Qi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Wn(4,e,e.return),Qi(e);break;case 1:$e(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&nv(e,e.return,n),Qi(e);break;case 26:case 27:case 5:$e(e,e.return),Qi(e);break;case 22:$e(e,e.return),e.memoizedState===null&&Qi(e);break;default:Qi(e)}t=t.sibling}}function Sn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,a=e,r=a.flags;switch(a.tag){case 0:case 11:case 15:Sn(s,a,n),vr(4,a);break;case 1:if(Sn(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){Q(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var o=s.shared.hiddenCallbacks;if(o!==null)for(s.shared.hiddenCallbacks=null,s=0;s<o.length;s++)J_(o[s],l)}catch(c){Q(i,i.return,c)}}n&&r&64&&tv(a),fi(a,a.return);break;case 26:case 27:case 5:Sn(s,a,n),n&&i===null&&r&4&&iv(a),fi(a,a.return);break;case 12:Sn(s,a,n);break;case 13:Sn(s,a,n),n&&r&4&&ov(s,a);break;case 22:a.memoizedState===null&&Sn(s,a,n),fi(a,a.return);break;default:Sn(s,a,n)}e=e.sibling}}function $f(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&mr(n))}function Zf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&mr(t))}function yn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fv(t,e,n,i),e=e.sibling}function fv(t,e,n,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:yn(t,e,n,i),s&2048&&vr(9,e);break;case 3:yn(t,e,n,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&mr(t)));break;case 12:if(s&2048){yn(t,e,n,i),t=e.stateNode;try{var a=e.memoizedProps,r=a.id,l=a.onPostCommit;typeof l=="function"&&l(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){Q(e,e.return,o)}}else yn(t,e,n,i);break;case 23:break;case 22:a=e.stateNode,e.memoizedState!==null?a._visibility&4?yn(t,e,n,i):Ia(t,e):a._visibility&4?yn(t,e,n,i):(a._visibility|=4,Wi(t,e,n,i,(e.subtreeFlags&10256)!==0)),s&2048&&$f(e.alternate,e);break;case 24:yn(t,e,n,i),s&2048&&Zf(e.alternate,e);break;default:yn(t,e,n,i)}}function Wi(t,e,n,i,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var a=t,r=e,l=n,o=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Wi(a,r,l,o,s),vr(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&4?Wi(a,r,l,o,s):Ia(a,r):(f._visibility|=4,Wi(a,r,l,o,s)),s&&c&2048&&$f(r.alternate,r);break;case 24:Wi(a,r,l,o,s),s&&c&2048&&Zf(r.alternate,r);break;default:Wi(a,r,l,o,s)}e=e.sibling}}function Ia(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:Ia(n,i),s&2048&&$f(i.alternate,i);break;case 24:Ia(n,i),s&2048&&Zf(i.alternate,i);break;default:Ia(n,i)}e=e.sibling}}var ma=8192;function Yi(t){if(t.subtreeFlags&ma)for(t=t.child;t!==null;)hv(t),t=t.sibling}function hv(t){switch(t.tag){case 26:Yi(t),t.flags&ma&&t.memoizedState!==null&&xb(yt,t.memoizedState,t.memoizedProps);break;case 5:Yi(t);break;case 3:case 4:var e=yt;yt=Vl(t.stateNode.containerInfo),Yi(t),yt=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ma,ma=16777216,Yi(t),ma=e):Yi(t));break;default:Yi(t)}}function dv(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function sa(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Se=i,mv(i,t)}dv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pv(t),t=t.sibling}function pv(t){switch(t.tag){case 0:case 11:case 15:sa(t),t.flags&2048&&Wn(9,t,t.return);break;case 3:sa(t);break;case 12:sa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,cl(t)):sa(t);break;default:sa(t)}}function cl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Se=i,mv(i,t)}dv(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Wn(8,e,e.return),cl(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,cl(e));break;default:cl(e)}t=t.sibling}}function mv(t,e){for(;Se!==null;){var n=Se;switch(n.tag){case 0:case 11:case 15:Wn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:mr(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Se=i;else e:for(n=t;Se!==null;){i=Se;var s=i.sibling,a=i.return;if(rv(i),i===n){Se=null;break e}if(s!==null){s.return=a,Se=s;break e}Se=a}}}function FS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,i){return new FS(t,e,n,i)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hn(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function gv(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ul(t,e,n,i,s,a){var r=0;if(i=t,typeof t=="function")Jf(t)&&(r=1);else if(typeof t=="string")r=Db(t,n,Mt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Zi:return _i(n.children,s,a,e);case _g:r=8,s|=24;break;case Xc:return t=ht(12,n,e,s|2),t.elementType=Xc,t.lanes=a,t;case Qc:return t=ht(13,n,e,s),t.elementType=Qc,t.lanes=a,t;case Wc:return t=ht(19,n,e,s),t.elementType=Wc,t.lanes=a,t;case yg:return _v(n,s,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _E:case Qt:r=10;break e;case vg:r=9;break e;case Ef:r=11;break e;case Sf:r=14;break e;case Tn:r=16,i=null;break e}r=29,n=Error(E(130,t===null?"null":typeof t,"")),i=null}return e=ht(r,n,e,s),e.elementType=t,e.type=i,e.lanes=a,e}function _i(t,e,n,i){return t=ht(7,t,i,e),t.lanes=n,t}function _v(t,e,n,i){t=ht(22,t,i,e),t.elementType=yg,t.lanes=n;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var a=s._current;if(a===null)throw Error(E(456));if(!(s._pendingVisibility&2)){var r=Xn(a,2);r!==null&&(s._pendingVisibility|=2,He(r,a,2))}},attach:function(){var a=s._current;if(a===null)throw Error(E(456));if(s._pendingVisibility&2){var r=Xn(a,2);r!==null&&(s._pendingVisibility&=-3,He(r,a,2))}}};return t.stateNode=s,t}function yc(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yt(t){t.flags|=4}function np(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!zv(e)){if(e=gt.current,e!==null&&((V&4194176)===V?kt!==null:(V&62914560)!==V&&!(V&536870912)||e!==kt))throw Ta=cu,i_;t.flags|=8192}}function Kr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ag():536870912,t.lanes|=e,Ds|=e)}function aa(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&31457280,i|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KS(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return ae(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),an(ge),ws(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(na(e)?Yt(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(Iu(Et),Et=null))),ae(e),null;case 26:return n=e.memoizedState,t===null?(Yt(e),n!==null?(ae(e),np(e,n)):(ae(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Yt(e),ae(e),np(e,n)):(ae(e),e.flags&=-16777217):(t.memoizedProps!==i&&Yt(e),ae(e),e.flags&=-16777217),null;case 27:Sl(e),n=Un.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Yt(e);else{if(!i){if(e.stateNode===null)throw Error(E(166));return ae(e),null}t=Mt.current,na(e)?Md(e):(t=Lv(s,i,n),e.stateNode=t,Yt(e))}return ae(e),null;case 5:if(Sl(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Yt(e);else{if(!i){if(e.stateNode===null)throw Error(E(166));return ae(e),null}if(t=Mt.current,na(e))Md(e);else{switch(s=Pl(Un.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?s.createElement(n,{is:i.is}):s.createElement(n)}}t[ke]=e,t[Fe]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;e:switch(Ie(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yt(e)}}return ae(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Yt(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(E(166));if(t=Un.current,na(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=je,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[ke]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Mv(t.nodeValue,n)),t||Ei(e)}else t=Pl(t).createTextNode(i),t[ke]=e,e.stateNode=t}return ae(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ke]=e}else pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),s=!1}else Et!==null&&(Iu(Et),Et=null),s=!0;if(!s)return e.flags&256?(Zt(e),e):(Zt(e),null)}if(Zt(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Kr(e,e.updateQueue),ae(e),null;case 4:return ws(),t===null&&ah(e.stateNode.containerInfo),ae(e),null;case 10:return an(e.type),ae(e),null;case 19:if(Ae(_e),s=e.memoizedState,s===null)return ae(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)aa(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Nl(t),a!==null){for(e.flags|=128,aa(s,!1),t=a.updateQueue,e.updateQueue=t,Kr(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)gv(n,t),n=n.sibling;return se(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ul&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(a),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Kr(e,t),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!q)return ae(e),null}else 2*xt()-s.renderingStartTime>Ul&&n!==536870912&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,t=_e.current,se(_e,i?t&1|2:t&1),e):(ae(e),null);case 22:case 23:return Zt(e),kf(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),n=e.updateQueue,n!==null&&Kr(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Ae(gi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),an(ge),ae(e),null;case 25:return null}throw Error(E(156,e.tag))}function XS(t,e){switch(xf(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return an(ge),ws(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Sl(e),null;case 13:if(Zt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(_e),null;case 4:return ws(),null;case 10:return an(e.type),null;case 22:case 23:return Zt(e),kf(),t!==null&&Ae(gi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return an(ge),null;case 25:return null;default:return null}}function vv(t,e){switch(xf(e),e.tag){case 3:an(ge),ws();break;case 26:case 27:case 5:Sl(e);break;case 4:ws();break;case 13:Zt(e);break;case 19:Ae(_e);break;case 10:an(e.type);break;case 22:case 23:Zt(e),kf(),t!==null&&Ae(gi);break;case 24:an(ge)}}var QS={getCacheForType:function(t){var e=Le(ge),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},WS=typeof WeakMap=="function"?WeakMap:Map,le=0,$=null,j=null,V=0,W=0,We=null,Kt=!1,Vs=!1,eh=!1,fn=0,ce=0,$n=0,vi=0,th=0,dt=0,Ds=0,Da=null,Nt=null,Au=!1,nh=0,Ul=1/0,jl=null,Bn=null,Xr=!1,ci=null,Ma=0,Ru=0,Ou=null,xa=0,Nu=null;function et(){if(le&2&&V!==0)return V&-V;if(D.T!==null){var t=Ns;return t!==0?t:sh()}return Ig()}function yv(){dt===0&&(dt=!(V&536870912)||q?wg():536870912);var t=gt.current;return t!==null&&(t.flags|=32),dt}function He(t,e,n){(t===$&&W===2||t.cancelPendingCommit!==null)&&(Ms(t,0),Xt(t,V,dt,!1)),hr(t,n),(!(le&2)||t!==$)&&(t===$&&(!(le&2)&&(vi|=n),ce===4&&Xt(t,V,dt,!1)),Bt(t))}function Ev(t,e,n){if(le&6)throw Error(E(327));var i=!n&&(e&60)===0&&(e&t.expiredLanes)===0||fr(t,e),s=i?JS(t,e):Sc(t,e,!0),a=i;do{if(s===0){Vs&&!i&&Xt(t,e,0,!1);break}else if(s===6)Xt(t,e,0,!Kt);else{if(n=t.current.alternate,a&&!$S(n)){s=Sc(t,e,!1),a=!1;continue}if(s===2){if(a=e,t.errorRecoveryDisabledLanes&a)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var l=t;s=Da;var o=l.current.memoizedState.isDehydrated;if(o&&(Ms(l,r).flags|=256),r=Sc(l,r,!1),r!==2){if(eh&&!o){l.errorRecoveryDisabledLanes|=a,vi|=a,s=4;break e}a=Nt,Nt=s,a!==null&&Iu(a)}s=r}if(a=!1,s!==2)continue}}if(s===1){Ms(t,0),Xt(t,e,0,!0);break}e:{switch(i=t,s){case 0:case 1:throw Error(E(345));case 4:if((e&4194176)===e){Xt(i,e,dt,!Kt);break e}break;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(E(329))}if(i.finishedWork=n,i.finishedLanes=e,(e&62914560)===e&&(a=nh+300-xt(),10<a)){if(Xt(i,e,dt,!Kt),vo(i,0)!==0)break e;i.timeoutHandle=kv(ip.bind(null,i,n,Nt,jl,Au,e,dt,vi,Ds,Kt,2,-0,0),a);break e}ip(i,n,Nt,jl,Au,e,dt,vi,Ds,Kt,0,-0,0)}}break}while(!0);Bt(t)}function Iu(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function ip(t,e,n,i,s,a,r,l,o,c,f,u,h){var p=e.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(Wa={stylesheets:null,count:0,unsuspend:Mb},hv(e),e=kb(),e!==null)){t.cancelPendingCommit=e(ap.bind(null,t,n,i,s,r,l,o,1,u,h)),Xt(t,a,r,!c);return}ap(t,n,i,s,r,l,o,f,u,h)}function $S(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!it(a(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(t,e,n,i){e&=~th,e&=~vi,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var a=31-Je(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Rg(t,n,e)}function Oo(){return le&6?!0:(yr(0),!1)}function ih(){if(j!==null){if(W===0)var t=j.return;else t=j,Jt=ji=null,Pf(t),ms=null,Fa=0,t=j;for(;t!==null;)vv(t.alternate,t),t=t.return;j=null}}function Ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,gb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ih(),$=t,j=n=Hn(t.current,null),V=e,W=0,We=null,Kt=!1,Vs=fr(t,e),eh=!1,Ds=dt=th=vi=$n=ce=0,Nt=Da=null,Au=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-Je(i),a=1<<s;e|=t[s],i&=~a}return fn=e,bo(),n}function Sv(t,e){x=null,D.H=jt,e===ba?(e=Ld(),W=3):e===i_?(e=Ld(),W=4):W=e===F_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,We=e,j===null&&(ce=1,xl(t,ft(e,t.current)))}function bv(){var t=D.H;return D.H=jt,t===null?jt:t}function Tv(){var t=D.A;return D.A=QS,t}function Du(){ce=4,Kt||(V&4194176)!==V&&gt.current!==null||(Vs=!0),!($n&134217727)&&!(vi&134217727)||$===null||Xt($,V,dt,!1)}function Sc(t,e,n){var i=le;le|=2;var s=bv(),a=Tv();($!==t||V!==e)&&(jl=null,Ms(t,e)),e=!1;var r=ce;e:do try{if(W!==0&&j!==null){var l=j,o=We;switch(W){case 8:ih(),r=6;break e;case 3:case 2:case 6:gt.current===null&&(e=!0);var c=W;if(W=0,We=null,os(t,l,o,c),n&&Vs){r=0;break e}break;default:c=W,W=0,We=null,os(t,l,o,c)}}ZS(),r=ce;break}catch(f){Sv(t,f)}while(!0);return e&&t.shellSuspendCounter++,Jt=ji=null,le=i,D.H=s,D.A=a,j===null&&($=null,V=0,bo()),r}function ZS(){for(;j!==null;)Cv(j)}function JS(t,e){var n=le;le|=2;var i=bv(),s=Tv();$!==t||V!==e?(jl=null,Ul=xt()+500,Ms(t,e)):Vs=fr(t,e);e:do try{if(W!==0&&j!==null){e=j;var a=We;t:switch(W){case 1:W=0,We=null,os(t,e,a,1);break;case 2:if(kd(a)){W=0,We=null,sp(e);break}e=function(){W===2&&$===t&&(W=7),Bt(t)},a.then(e,e);break e;case 3:W=7;break e;case 4:W=5;break e;case 7:kd(a)?(W=0,We=null,sp(e)):(W=0,We=null,os(t,e,a,7));break;case 5:var r=null;switch(j.tag){case 26:r=j.memoizedState;case 5:case 27:var l=j;if(!r||zv(r)){W=0,We=null;var o=l.sibling;if(o!==null)j=o;else{var c=l.return;c!==null?(j=c,No(c)):j=null}break t}}W=0,We=null,os(t,e,a,5);break;case 6:W=0,We=null,os(t,e,a,6);break;case 8:ih(),ce=6;break e;default:throw Error(E(462))}}eb();break}catch(f){Sv(t,f)}while(!0);return Jt=ji=null,D.H=i,D.A=s,le=n,j!==null?0:($=null,V=0,bo(),ce)}function eb(){for(;j!==null&&!bE();)Cv(j)}function Cv(t){var e=$_(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?No(t):j=e}function sp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Qd(n,e,e.pendingProps,e.type,void 0,V);break;case 11:e=Qd(n,e,e.pendingProps,e.type.render,e.ref,V);break;case 5:Pf(e);default:vv(n,e),e=j=gv(e,fn),e=$_(n,e,fn)}t.memoizedProps=t.pendingProps,e===null?No(t):j=e}function os(t,e,n,i){Jt=ji=null,Pf(e),ms=null,Fa=0;var s=e.return;try{if(VS(t,s,e,n,V)){ce=1,xl(t,ft(n,t.current)),j=null;return}}catch(a){if(s!==null)throw j=s,a;ce=1,xl(t,ft(n,t.current)),j=null;return}e.flags&32768?(q||i===1?t=!0:Vs||V&536870912?t=!1:(Kt=t=!0,(i===2||i===3||i===6)&&(i=gt.current,i!==null&&i.tag===13&&(i.flags|=16384))),wv(e,t)):No(e)}function No(t){var e=t;do{if(e.flags&32768){wv(e,Kt);return}t=e.return;var n=KS(e.alternate,e,fn);if(n!==null){j=n;return}if(e=e.sibling,e!==null){j=e;return}j=e=t}while(e!==null);ce===0&&(ce=5)}function wv(t,e){do{var n=XS(t.alternate,t);if(n!==null){n.flags&=32767,j=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){j=t;return}j=t=n}while(t!==null);ce=6,j=null}function ap(t,e,n,i,s,a,r,l,o,c){var f=D.T,u=te.p;try{te.p=2,D.T=null,tb(t,e,n,i,u,s,a,r,l,o,c)}finally{D.T=f,te.p=u}}function tb(t,e,n,i,s,a,r,l){do ys();while(ci!==null);if(le&6)throw Error(E(327));var o=t.finishedWork;if(i=t.finishedLanes,o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var c=o.lanes|o.childLanes;if(c|=If,xE(t,i,c,a,r,l),t===$&&(j=$=null,V=0),!(o.subtreeFlags&10256)&&!(o.flags&10256)||Xr||(Xr=!0,Ru=c,Ou=n,ab(bl,function(){return ys(),null})),n=(o.flags&15990)!==0,o.subtreeFlags&15990||n?(n=D.T,D.T=null,a=te.p,te.p=2,r=le,le|=4,GS(t,o),cv(o,t),wS(Lu,t.containerInfo),Yl=!!ku,Lu=ku=null,t.current=o,av(t,o.alternate,o),TE(),le=r,te.p=a,D.T=n):t.current=o,Xr?(Xr=!1,ci=t,Ma=i):Av(t,c),c=t.pendingLanes,c===0&&(Bn=null),OE(o.stateNode),Bt(t),e!==null)for(s=t.onRecoverableError,o=0;o<e.length;o++)c=e[o],s(c.value,{componentStack:c.stack});return Ma&3&&ys(),c=t.pendingLanes,i&4194218&&c&42?t===Nu?xa++:(xa=0,Nu=t):xa=0,yr(0),null}function Av(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,mr(e)))}function ys(){if(ci!==null){var t=ci,e=Ru;Ru=0;var n=Ng(Ma),i=D.T,s=te.p;try{if(te.p=32>n?32:n,D.T=null,ci===null)var a=!1;else{n=Ou,Ou=null;var r=ci,l=Ma;if(ci=null,Ma=0,le&6)throw Error(E(331));var o=le;if(le|=4,pv(r.current),fv(r,r.current,l,n),le=o,yr(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ur,r)}catch{}a=!0}return a}finally{te.p=s,D.T=i,Av(t,e)}}return!1}function rp(t,e,n){e=ft(n,e),e=gu(t.stateNode,e,2),t=zn(t,e,2),t!==null&&(hr(t,2),Bt(t))}function Q(t,e,n){if(t.tag===3)rp(t,t,n);else for(;e!==null;){if(e.tag===3){rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bn===null||!Bn.has(i))){t=ft(n,t),n=G_(2),i=zn(e,n,2),i!==null&&(Y_(n,i,e,t),hr(i,2),Bt(i));break}}e=e.return}}function bc(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new WS;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(eh=!0,s.add(n),t=nb.bind(null,t,e,n),e.then(t,t))}function nb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,$===t&&(V&n)===n&&(ce===4||ce===3&&(V&62914560)===V&&300>xt()-nh?!(le&2)&&Ms(t,0):th|=n,Ds===V&&(Ds=0)),Bt(t)}function Rv(t,e){e===0&&(e=Ag()),t=Xn(t,e),t!==null&&(hr(t,e),Bt(t))}function ib(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function sb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(E(314))}i!==null&&i.delete(e),Rv(t,n)}function ab(t,e){return bf(t,e)}var zl=null,$i=null,Mu=!1,Hl=!1,Tc=!1,yi=0;function Bt(t){t!==$i&&t.next===null&&($i===null?zl=$i=t:$i=$i.next=t),Hl=!0,Mu||(Mu=!0,lb(rb))}function yr(t,e){if(!Tc&&Hl){Tc=!0;do for(var n=!1,i=zl;i!==null;){if(t!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,l=i.pingedLanes;a=(1<<31-Je(42|t)+1)-1,a&=s&~(r&~l),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(n=!0,lp(i,a))}else a=V,a=vo(i,i===$?a:0),!(a&3)||fr(i,a)||(n=!0,lp(i,a));i=i.next}while(n);Tc=!1}}function rb(){Hl=Mu=!1;var t=0;yi!==0&&(mb()&&(t=yi),yi=0);for(var e=xt(),n=null,i=zl;i!==null;){var s=i.next,a=Ov(i,e);a===0?(i.next=null,n===null?zl=s:n.next=s,s===null&&($i=n)):(n=i,(t!==0||a&3)&&(Hl=!0)),i=s}yr(t)}function Ov(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var r=31-Je(a),l=1<<r,o=s[r];o===-1?(!(l&n)||l&i)&&(s[r]=ME(l,e)):o<=e&&(t.expiredLanes|=l),a&=~l}if(e=$,n=V,n=vo(t,t===e?n:0),i=t.callbackNode,n===0||t===e&&W===2||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Jo(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||fr(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Jo(i),Ng(n)){case 2:case 8:n=Tg;break;case 32:n=bl;break;case 268435456:n=Cg;break;default:n=bl}return i=Nv.bind(null,t),n=bf(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Jo(i),t.callbackPriority=2,t.callbackNode=null,2}function Nv(t,e){var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=V;return i=vo(t,t===$?i:0),i===0?null:(Ev(t,i,e),Ov(t,xt()),t.callbackNode!=null&&t.callbackNode===n?Nv.bind(null,t):null)}function lp(t,e){if(ys())return null;Ev(t,e,!0)}function lb(t){_b(function(){le&6?bf(bg,t):t()})}function sh(){return yi===0&&(yi=wg()),yi}function op(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function cp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ob(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var a=op((s[Fe]||null).action),r=i.submitter;r&&(e=(e=r[Fe]||null)?op(e.formAction):r.getAttribute("formAction"),e!==null&&(a=e,r=null));var l=new yo("action","action",null,i,s);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(yi!==0){var o=r?cp(s,r):new FormData(s);pu(n,{pending:!0,data:o,method:s.method,action:a},null,o)}}else typeof a=="function"&&(l.preventDefault(),o=r?cp(s,r):new FormData(s),pu(n,{pending:!0,data:o,method:s.method,action:a},a,o))},currentTarget:s}]})}}for(var Cc=0;Cc<Id.length;Cc++){var wc=Id[Cc],cb=wc.toLowerCase(),ub=wc[0].toUpperCase()+wc.slice(1);Rt(cb,"on"+ub)}Rt(Wg,"onAnimationEnd");Rt($g,"onAnimationIteration");Rt(Zg,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(RS,"onTransitionRun");Rt(OS,"onTransitionStart");Rt(NS,"onTransitionCancel");Rt(Jg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var r=i.length-1;0<=r;r--){var l=i[r],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==a&&s.isPropagationStopped())break e;a=l,s.currentTarget=c;try{a(s)}catch(f){Ml(f)}s.currentTarget=null,a=o}else for(r=0;r<i.length;r++){if(l=i[r],o=l.instance,c=l.currentTarget,l=l.listener,o!==a&&s.isPropagationStopped())break e;a=l,s.currentTarget=c;try{a(s)}catch(f){Ml(f)}s.currentTarget=null,a=o}}}}function z(t,e){var n=e[tu];n===void 0&&(n=e[tu]=new Set);var i=t+"__bubble";n.has(i)||(Dv(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),Dv(n,t,i,e)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function ah(t){if(!t[Qr]){t[Qr]=!0,Dg.forEach(function(n){n!=="selectionchange"&&(fb.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qr]||(e[Qr]=!0,Ac("selectionchange",!1,e))}}function Dv(t,e,n,i){switch(qv(e)){case 2:var s=jb;break;case 8:s=zb;break;default:s=ch}n=s.bind(null,e,n,t),s=void 0,!au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,s){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(r===4)for(r=i.return;r!==null;){var o=r.tag;if((o===3||o===4)&&(o=r.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;r=r.return}for(;l!==null;){if(r=ui(l),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){i=a=r;continue e}l=l.parentNode}}i=i.return}Hg(function(){var c=a,f=wf(n),u=[];e:{var h=e_.get(t);if(h!==void 0){var p=yo,v=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":p=sS;break;case"focusin":v="focus",p=sc;break;case"focusout":v="blur",p=sc;break;case"beforeblur":case"afterblur":p=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lS;break;case Wg:case $g:case Zg:p=QE;break;case Jg:p=cS;break;case"scroll":case"scrollend":p=GE;break;case"wheel":p=fS;break;case"copy":case"cut":case"paste":p=$E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ed;break;case"toggle":case"beforetoggle":p=dS}var S=(e&4)!==0,T=!S&&(t==="scroll"||t==="scrollend"),m=S?h!==null?h+"Capture":null:h;S=[];for(var d=c,_;d!==null;){var y=d;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||m===null||(y=Va(d,m),y!=null&&S.push(Qa(d,y,_))),T)break;d=d.return}0<S.length&&(h=new p(h,v,null,n,f),u.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==su&&(v=n.relatedTarget||n.fromElement)&&(ui(v)||v[Bs]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ui(v):null,v!==null&&(T=Hs(v),S=v.tag,v!==T||S!==5&&S!==27&&S!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=vd,y="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(S=Ed,y="onPointerLeave",m="onPointerEnter",d="pointer"),T=p==null?h:pa(p),_=v==null?h:pa(v),h=new S(y,d+"leave",p,n,f),h.target=T,h.relatedTarget=_,y=null,ui(f)===c&&(S=new S(m,d+"enter",v,n,f),S.target=_,S.relatedTarget=T,y=S),T=y,p&&v)t:{for(S=p,m=v,d=0,_=S;_;_=Fi(_))d++;for(_=0,y=m;y;y=Fi(y))_++;for(;0<d-_;)S=Fi(S),d--;for(;0<_-d;)m=Fi(m),_--;for(;d--;){if(S===m||m!==null&&S===m.alternate)break t;S=Fi(S),m=Fi(m)}S=null}else S=null;p!==null&&up(u,h,p,S,!1),v!==null&&T!==null&&up(u,T,v,S,!0)}}e:{if(h=c?pa(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Cd;else if(Td(h))if(Yg)C=TS;else{C=SS;var N=ES}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Cf(c.elementType)&&(C=Cd):C=bS;if(C&&(C=C(t,c))){Gg(u,C,n,f);break e}N&&N(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&iu(h,"number",h.value)}switch(N=c?pa(c):window,t){case"focusin":(Td(N)||N.contentEditable==="true")&&(ns=N,ru=c,Sa=null);break;case"focusout":Sa=ru=ns=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Nd(u,n,f);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Nd(u,n,f)}var R;if(Of)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ts?Vg(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Pg&&n.locale!=="ko"&&(ts||O!=="onCompositionStart"?O==="onCompositionEnd"&&ts&&(R=Bg()):(kn=f,Af="value"in kn?kn.value:kn.textContent,ts=!0)),N=Bl(c,O),0<N.length&&(O=new yd(O,t,null,n,f),u.push({event:O,listeners:N}),R?O.data=R:(R=qg(n),R!==null&&(O.data=R)))),(R=mS?gS(t,n):_S(t,n))&&(O=Bl(c,"onBeforeInput"),0<O.length&&(N=new yd("onBeforeInput","beforeinput",null,n,f),u.push({event:N,listeners:O}),N.data=R)),ob(u,t,c,n,f)}Iv(u,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,a=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Va(t,n),s!=null&&i.unshift(Qa(t,s,a)),s=Va(t,e),s!=null&&i.push(Qa(t,s,a))),t=t.return}return i}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function up(t,e,n,i,s){for(var a=e._reactName,r=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||c===null||(o=c,s?(c=Va(n,a),c!=null&&r.unshift(Qa(n,c,o))):s||(c=Va(n,a),c!=null&&r.push(Qa(n,c,o)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var hb=/\r\n?/g,db=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(db,"")}function Mv(t,e){return e=fp(e),fp(t)===e}function Io(){}function Y(t,e,n,i,s,a){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Rs(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Rs(t,""+i);break;case"className":Pr(t,"class",i);break;case"tabIndex":Pr(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pr(t,n,i);break;case"style":zg(t,i,a);break;case"data":if(e!=="object"){Pr(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=il(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&Y(t,e,"name",s.name,s,null),Y(t,e,"formEncType",s.formEncType,s,null),Y(t,e,"formMethod",s.formMethod,s,null),Y(t,e,"formTarget",s.formTarget,s,null)):(Y(t,e,"encType",s.encType,s,null),Y(t,e,"method",s.method,s,null),Y(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=il(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Io);break;case"onScroll":i!=null&&z("scroll",t);break;case"onScrollEnd":i!=null&&z("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(E(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(E(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=il(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":z("beforetoggle",t),z("toggle",t),nl(t,"popover",i);break;case"xlinkActuate":Vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Vt(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Vt(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Vt(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Vt(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":nl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=VE.get(n)||n,nl(t,n,i))}}function xu(t,e,n,i,s,a){switch(n){case"style":zg(t,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(E(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(E(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Rs(t,i):(typeof i=="number"||typeof i=="bigint")&&Rs(t,""+i);break;case"onScroll":i!=null&&z("scroll",t);break;case"onScrollEnd":i!=null&&z("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Io);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mg.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),a=t[Fe]||null,a=a!=null?a[n]:null,typeof a=="function"&&t.removeEventListener(e,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,s);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):nl(t,n,i)}}}function Ie(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":z("error",t),z("load",t);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:Y(t,e,a,r,n,null)}}s&&Y(t,e,"srcSet",n.srcSet,n,null),i&&Y(t,e,"src",n.src,n,null);return;case"input":z("invalid",t);var l=a=r=s=null,o=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":o=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(E(137,e));break;default:Y(t,e,i,f,n,null)}}Lg(t,a,l,o,c,r,s,!1),Tl(t);return;case"select":z("invalid",t),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":a=l;break;case"defaultValue":r=l;break;case"multiple":i=l;default:Y(t,e,s,l,n,null)}e=a,n=r,t.multiple=!!i,e!=null?ds(t,!!i,e,!1):n!=null&&ds(t,!!i,n,!0);return;case"textarea":z("invalid",t),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":i=l;break;case"defaultValue":s=l;break;case"children":a=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(E(91));break;default:Y(t,e,r,l,n,null)}jg(t,i,s,a),Tl(t);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Y(t,e,o,i,n,null)}return;case"dialog":z("cancel",t),z("close",t);break;case"iframe":case"object":z("load",t);break;case"video":case"audio":for(i=0;i<Xa.length;i++)z(Xa[i],t);break;case"image":z("error",t),z("load",t);break;case"details":z("toggle",t);break;case"embed":case"source":case"link":z("error",t),z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:Y(t,e,c,i,n,null)}return;default:if(Cf(e)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&xu(t,e,f,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&Y(t,e,l,i,n,null))}function pb(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,l=null,o=null,c=null,f=null;for(p in n){var u=n[p];if(n.hasOwnProperty(p)&&u!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=u;default:i.hasOwnProperty(p)||Y(t,e,p,null,i,u)}}for(var h in i){var p=i[h];if(u=n[h],i.hasOwnProperty(h)&&(p!=null||u!=null))switch(h){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(E(137,e));break;default:p!==u&&Y(t,e,h,p,i,u)}}nu(t,r,l,o,c,f,a,s);return;case"select":p=r=l=h=null;for(a in n)if(o=n[a],n.hasOwnProperty(a)&&o!=null)switch(a){case"value":break;case"multiple":p=o;default:i.hasOwnProperty(a)||Y(t,e,a,null,i,o)}for(s in i)if(a=i[s],o=n[s],i.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case"value":h=a;break;case"defaultValue":l=a;break;case"multiple":r=a;default:a!==o&&Y(t,e,s,a,i,o)}e=l,n=r,i=p,h!=null?ds(t,!!n,h,!1):!!i!=!!n&&(e!=null?ds(t,!!n,e,!0):ds(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(l in n)if(s=n[l],n.hasOwnProperty(l)&&s!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Y(t,e,l,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(E(91));break;default:s!==a&&Y(t,e,r,s,i,a)}Ug(t,h,p);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v))switch(v){case"selected":t.selected=!1;break;default:Y(t,e,v,null,i,h)}for(o in i)if(h=i[o],p=n[o],i.hasOwnProperty(o)&&h!==p&&(h!=null||p!=null))switch(o){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Y(t,e,o,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!i.hasOwnProperty(S)&&Y(t,e,S,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,e));break;default:Y(t,e,c,h,i,p)}return;default:if(Cf(e)){for(var T in n)h=n[T],n.hasOwnProperty(T)&&h!==void 0&&!i.hasOwnProperty(T)&&xu(t,e,T,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||xu(t,e,f,h,i,p);return}}for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!=null&&!i.hasOwnProperty(m)&&Y(t,e,m,null,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h==null&&p==null||Y(t,e,u,h,i,p)}var ku=null,Lu=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function hp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=null;function mb(){var t=window.event;return t&&t.type==="popstate"?t===Oc?!1:(Oc=t,!0):(Oc=null,!1)}var kv=typeof setTimeout=="function"?setTimeout:void 0,gb=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(vb)}:kv;function vb(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),er(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);er(e)}function ju(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ju(n),Tf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function yb(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Pa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Tt(t.nextSibling),t===null)break}return null}function Eb(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Tt(t.nextSibling),t===null))return null;return t}function Tt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Lv(t,e,n){switch(e=Pl(n),t){case"html":if(t=e.documentElement,!t)throw Error(E(452));return t;case"head":if(t=e.head,!t)throw Error(E(453));return t;case"body":if(t=e.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}var _t=new Map,mp=new Set;function Vl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var mn=te.d;te.d={f:Sb,r:bb,D:Tb,C:Cb,L:wb,m:Ab,X:Ob,S:Rb,M:Nb};function Sb(){var t=mn.f(),e=Oo();return t||e}function bb(t){var e=Ps(t);e!==null&&e.tag===5&&e.type==="form"?L_(e):mn.r(t)}var qs=typeof document>"u"?null:document;function Uv(t,e,n){var i=qs;if(i&&typeof e=="string"&&e){var s=ut(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),mp.has(s)||(mp.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),Ie(e,"link",t),Te(e),i.head.appendChild(e)))}}function Tb(t){mn.D(t),Uv("dns-prefetch",t,null)}function Cb(t,e){mn.C(t,e),Uv("preconnect",t,e)}function wb(t,e,n){mn.L(t,e,n);var i=qs;if(i&&t&&e){var s='link[rel="preload"][as="'+ut(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ut(n.imageSizes)+'"]')):s+='[href="'+ut(t)+'"]';var a=s;switch(e){case"style":a=xs(t);break;case"script":a=Gs(t)}_t.has(a)||(t=ne({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),_t.set(a,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(Er(a))||e==="script"&&i.querySelector(Sr(a))||(e=i.createElement("link"),Ie(e,"link",t),Te(e),i.head.appendChild(e)))}}function Ab(t,e){mn.m(t,e);var n=qs;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+ut(i)+'"][href="'+ut(t)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Gs(t)}if(!_t.has(a)&&(t=ne({rel:"modulepreload",href:t},e),_t.set(a,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sr(a)))return}i=n.createElement("link"),Ie(i,"link",t),Te(i),n.head.appendChild(i)}}}function Rb(t,e,n){mn.S(t,e,n);var i=qs;if(i&&t){var s=hs(i).hoistableStyles,a=xs(t);e=e||"default";var r=s.get(a);if(!r){var l={loading:0,preload:null};if(r=i.querySelector(Er(a)))l.loading=5;else{t=ne({rel:"stylesheet",href:t,"data-precedence":e},n),(n=_t.get(a))&&rh(t,n);var o=r=i.createElement("link");Te(o),Ie(o,"link",t),o._p=new Promise(function(c,f){o.onload=c,o.onerror=f}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,fl(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:l},s.set(a,r)}}}function Ob(t,e){mn.X(t,e);var n=qs;if(n&&t){var i=hs(n).hoistableScripts,s=Gs(t),a=i.get(s);a||(a=n.querySelector(Sr(s)),a||(t=ne({src:t,async:!0},e),(e=_t.get(s))&&lh(t,e),a=n.createElement("script"),Te(a),Ie(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Nb(t,e){mn.M(t,e);var n=qs;if(n&&t){var i=hs(n).hoistableScripts,s=Gs(t),a=i.get(s);a||(a=n.querySelector(Sr(s)),a||(t=ne({src:t,async:!0,type:"module"},e),(e=_t.get(s))&&lh(t,e),a=n.createElement("script"),Te(a),Ie(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function gp(t,e,n,i){var s=(s=Un.current)?Vl(s):null;if(!s)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=xs(n.href),n=hs(s).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=xs(n.href);var a=hs(s).hoistableStyles,r=a.get(t);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,r),(a=s.querySelector(Er(t)))&&!a._p&&(r.instance=a,r.state.loading=5),_t.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_t.set(t,n),a||Ib(s,t,n,r.state))),e&&i===null)throw Error(E(528,""));return r}if(e&&i!==null)throw Error(E(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Gs(n),n=hs(s).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function xs(t){return'href="'+ut(t)+'"'}function Er(t){return'link[rel="stylesheet"]['+t+"]"}function jv(t){return ne({},t,{"data-precedence":t.precedence,precedence:null})}function Ib(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Ie(e,"link",n),Te(e),t.head.appendChild(e))}function Gs(t){return'[src="'+ut(t)+'"]'}function Sr(t){return"script[async]"+t}function _p(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ut(n.href)+'"]');if(i)return e.instance=i,Te(i),i;var s=ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Te(i),Ie(i,"style",s),fl(i,n.precedence,t),e.instance=i;case"stylesheet":s=xs(n.href);var a=t.querySelector(Er(s));if(a)return e.state.loading|=4,e.instance=a,Te(a),a;i=jv(n),(s=_t.get(s))&&rh(i,s),a=(t.ownerDocument||t).createElement("link"),Te(a);var r=a;return r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),Ie(a,"link",i),e.state.loading|=4,fl(a,n.precedence,t),e.instance=a;case"script":return a=Gs(n.src),(s=t.querySelector(Sr(a)))?(e.instance=s,Te(s),s):(i=n,(s=_t.get(a))&&(i=ne({},n),lh(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),Te(s),Ie(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(E(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,fl(i,n.precedence,t));return e.instance}function fl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var l=i[r];if(l.dataset.precedence===e)a=l;else if(a!==s)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function rh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function lh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var hl=null;function vp(t,e,n){if(hl===null){var i=new Map,s=hl=new Map;s.set(n,i)}else s=hl,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var a=n[s];if(!(a[Pa]||a[ke]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(e)||"";r=t+r;var l=i.get(r);l?l.push(a):i.set(r,[a])}}return i}function yp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Db(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function zv(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Wa=null;function Mb(){}function xb(t,e,n){if(Wa===null)throw Error(E(475));var i=Wa;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var s=xs(n.href),a=t.querySelector(Er(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=ql.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=a,Te(a);return}a=t.ownerDocument||t,n=jv(n),(s=_t.get(s))&&rh(n,s),a=a.createElement("link"),Te(a);var r=a;r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),Ie(a,"link",n),e.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=ql.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function kb(){if(Wa===null)throw Error(E(475));var t=Wa;return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function ql(){if(this.count--,this.count===0){if(this.stylesheets)zu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gl=null;function zu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gl=new Map,e.forEach(Lb,t),Gl=null,ql.call(t))}function Lb(t,e){if(!(e.state.loading&4)){var n=Gl.get(t);if(n)var i=n.get(null);else{n=new Map,Gl.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=e.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=ql.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var $a={$$typeof:Qt,Provider:null,Consumer:null,_currentValue:pi,_currentValue2:pi,_threadCount:0};function Ub(t,e,n,i,s,a,r,l){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ec(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.hiddenUpdates=ec(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Hv(t,e,n,i,s,a,r,l,o,c,f,u){return t=new Ub(t,e,n,r,l,o,c,u),e=1,a===!0&&(e|=24),a=ht(3,null,null,e),t.current=a,a.stateNode=t,e=Lf(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:e},Wf(a),t}function Bv(t){return t?(t=as,t):as}function Pv(t,e,n,i,s,a){s=Bv(s),i.context===null?i.context=s:i.pendingContext=s,i=jn(e),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=zn(t,i,e),n!==null&&(He(n,t,e),Ra(n,t,e))}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oh(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function Vv(t){if(t.tag===13){var e=Xn(t,67108864);e!==null&&He(e,t,67108864),oh(t,67108864)}}var Yl=!0;function jb(t,e,n,i){var s=D.T;D.T=null;var a=te.p;try{te.p=2,ch(t,e,n,i)}finally{te.p=a,D.T=s}}function zb(t,e,n,i){var s=D.T;D.T=null;var a=te.p;try{te.p=8,ch(t,e,n,i)}finally{te.p=a,D.T=s}}function ch(t,e,n,i){if(Yl){var s=Hu(i);if(s===null)Rc(t,e,i,Fl,n),Sp(t,i);else if(Bb(s,t,e,n,i))i.stopPropagation();else if(Sp(t,i),e&4&&-1<Hb.indexOf(t)){for(;s!==null;){var a=Ps(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ai(a.pendingLanes);if(r!==0){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var o=1<<31-Je(r);l.entanglements[1]|=o,r&=~o}Bt(a),!(le&6)&&(Ul=xt()+500,yr(0))}}break;case 13:l=Xn(a,2),l!==null&&He(l,a,2),Oo(),oh(a,2)}if(a=Hu(i),a===null&&Rc(t,e,i,Fl,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}function Hu(t){return t=wf(t),uh(t)}var Fl=null;function uh(t){if(Fl=null,t=ui(t),t!==null){var e=Hs(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fl=t,null}function qv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(CE()){case bg:return 2;case Tg:return 8;case bl:case wE:return 32;case Cg:return 268435456;default:return 32}default:return 32}}var Bu=!1,Pn=null,Vn=null,qn=null,Za=new Map,Ja=new Map,On=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(e.pointerId)}}function ra(t,e,n,i,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},e!==null&&(e=Ps(e),e!==null&&Vv(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Bb(t,e,n,i,s){switch(e){case"focusin":return Pn=ra(Pn,t,e,n,i,s),!0;case"dragenter":return Vn=ra(Vn,t,e,n,i,s),!0;case"mouseover":return qn=ra(qn,t,e,n,i,s),!0;case"pointerover":var a=s.pointerId;return Za.set(a,ra(Za.get(a)||null,t,e,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ja.set(a,ra(Ja.get(a)||null,t,e,n,i,s)),!0}return!1}function Gv(t){var e=ui(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,kE(t.priority,function(){if(n.tag===13){var i=et(),s=Xn(n,i);s!==null&&He(s,n,i),oh(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);su=i,n.target.dispatchEvent(i),su=null}else return e=Ps(n),e!==null&&Vv(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){dl(t)&&n.delete(e)}function Pb(){Bu=!1,Pn!==null&&dl(Pn)&&(Pn=null),Vn!==null&&dl(Vn)&&(Vn=null),qn!==null&&dl(qn)&&(qn=null),Za.forEach(bp),Ja.forEach(bp)}function Wr(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Pb)))}var $r=null;function Tp(t){$r!==t&&($r=t,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,function(){$r===t&&($r=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(uh(i||n)===null)continue;break}var a=Ps(n);a!==null&&(t.splice(e,3),e-=3,pu(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function er(t){function e(o){return Wr(o,t)}Pn!==null&&Wr(Pn,t),Vn!==null&&Wr(Vn,t),qn!==null&&Wr(qn,t),Za.forEach(e),Ja.forEach(e);for(var n=0;n<On.length;n++){var i=On[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<On.length&&(n=On[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&On.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Fe]||null;if(typeof a=="function")r||Tp(n);else if(r){var l=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Fe]||null)l=r.formAction;else if(uh(s)!==null)continue}else l=r.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),Tp(n)}}}function fh(t){this._internalRoot=t}Do.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));var n=e.current,i=et();Pv(n,i,t,e,null,null)};Do.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&ys(),Pv(t.current,2,null,t,null,null),Oo(),e[Bs]=null}};function Do(t){this._internalRoot=t}Do.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&Gv(t)}};var Cp=mg.version;if(Cp!=="19.0.0")throw Error(E(527,Cp,"19.0.0"));te.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=SE(e),t=t!==null?Sg(t):null,t=t===null?null:t.stateNode,t};var Vb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:ui,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{ur=Zr.inject(Vb),Ze=Zr}catch{}}go.createRoot=function(t,e){if(!gg(t))throw Error(E(299));var n=!1,i="",s=P_,a=V_,r=q_,l=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(l=e.unstable_transitionCallbacks)),e=Hv(t,1,!1,null,null,n,i,s,a,r,l,null),t[Bs]=e.current,ah(t.nodeType===8?t.parentNode:t),new fh(e)};go.hydrateRoot=function(t,e,n){if(!gg(t))throw Error(E(299));var i=!1,s="",a=P_,r=V_,l=q_,o=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(o=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=Hv(t,1,!0,e,n??null,i,s,a,r,l,o,c),e.context=Bv(null),n=e.current,i=et(),s=jn(i),s.callback=null,zn(n,s,i),e.current.lanes=i,hr(e,i),Bt(e),t[Bs]=e.current,ah(t),new Do(e)};go.version="19.0.0";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(t){console.error(t)}}Yv(),cg.exports=go;var qb=cg.exports;const Gb=pf(qb);var Fv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var a="",r=0;r<arguments.length;r++){var l=arguments[r];l&&(a=s(a,i(l)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var r="";for(var l in a)e.call(a,l)&&a[l]&&(r=s(r,l));return r}function s(a,r){return r?a?a+" "+r:a+r:a}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Fv);var Yb=Fv.exports;const Kv=pf(Yb),Fb=["xxl","xl","lg","md","sm","xs"],Kb="xs",hh=b.createContext({prefixes:{},breakpoints:Fb,minBreakpoint:Kb});function Xv(t,e){const{prefixes:n}=b.useContext(hh);return t||n[e]||e}function Xb(){const{breakpoints:t}=b.useContext(hh);return t}function Qb(){const{minBreakpoint:t}=b.useContext(hh);return t}const ti=b.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:i,...s},a)=>{const r=Xv(t,"container"),l=typeof e=="string"?`-${e}`:"-fluid";return g.jsx(n,{ref:a,...s,className:Kv(i,e?`${r}${l}`:r)})});ti.displayName="Container";const Qv=b.forwardRef(({bsPrefix:t,className:e,as:n="div",...i},s)=>{const a=Xv(t,"row"),r=Xb(),l=Qb(),o=`${a}-cols`,c=[];return r.forEach(f=>{const u=i[f];delete i[f];let h;u!=null&&typeof u=="object"?{cols:h}=u:h=u;const p=f!==l?`-${f}`:"";h!=null&&c.push(`${o}${p}-${h}`)}),g.jsx(n,{ref:s,...i,className:Kv(e,a,...c)})});Qv.displayName="Row";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tr.apply(this,arguments)}var Ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ln||(Ln={}));const wp="popstate";function Wb(t){t===void 0&&(t={});function e(i,s){let{pathname:a,search:r,hash:l}=i.location;return Pu("",{pathname:a,search:r,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Kl(s)}return Zb(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function Ap(t,e){return{usr:t.state,key:t.key,idx:e}}function Pu(t,e,n,i){return n===void 0&&(n=null),tr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ys(e):e,{state:n,key:e&&e.key||i||$b()})}function Kl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Zb(t,e,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,r=s.history,l=Ln.Pop,o=null,c=f();c==null&&(c=0,r.replaceState(tr({},r.state,{idx:c}),""));function f(){return(r.state||{idx:null}).idx}function u(){l=Ln.Pop;let T=f(),m=T==null?null:T-c;c=T,o&&o({action:l,location:S.location,delta:m})}function h(T,m){l=Ln.Push;let d=Pu(S.location,T,m);c=f()+1;let _=Ap(d,c),y=S.createHref(d);try{r.pushState(_,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(y)}a&&o&&o({action:l,location:S.location,delta:1})}function p(T,m){l=Ln.Replace;let d=Pu(S.location,T,m);c=f();let _=Ap(d,c),y=S.createHref(d);r.replaceState(_,"",y),a&&o&&o({action:l,location:S.location,delta:0})}function v(T){let m=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof T=="string"?T:Kl(T);return d=d.replace(/ $/,"%20"),me(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let S={get action(){return l},get location(){return t(s,r)},listen(T){if(o)throw new Error("A history only accepts one active listener");return s.addEventListener(wp,u),o=T,()=>{s.removeEventListener(wp,u),o=null}},createHref(T){return e(s,T)},createURL:v,encodeLocation(T){let m=v(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(T){return r.go(T)}};return S}var Rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rp||(Rp={}));function Jb(t,e,n){return n===void 0&&(n="/"),eT(t,e,n,!1)}function eT(t,e,n,i){let s=typeof e=="string"?Ys(e):e,a=dh(s.pathname||"/",n);if(a==null)return null;let r=$v(t);tT(r);let l=null;for(let o=0;l==null&&o<r.length;++o){let c=hT(a);l=uT(r[o],c,i)}return l}function $v(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(a,r,l)=>{let o={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:r,route:a};o.relativePath.startsWith("/")&&(me(o.relativePath.startsWith(i),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(i.length));let c=Gn([i,o.relativePath]),f=n.concat(o);a.children&&a.children.length>0&&(me(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$v(a.children,e,f,c)),!(a.path==null&&!a.index)&&e.push({path:c,score:oT(c,a.index),routesMeta:f})};return t.forEach((a,r)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,r);else for(let o of Zv(a.path))s(a,r,o)}),e}function Zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let r=Zv(i.join("/")),l=[];return l.push(...r.map(o=>o===""?a:[a,o].join("/"))),s&&l.push(...r),l.map(o=>t.startsWith("/")&&o===""?"/":o)}function tT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nT=/^:[\w-]+$/,iT=3,sT=2,aT=1,rT=10,lT=-2,Op=t=>t==="*";function oT(t,e){let n=t.split("/"),i=n.length;return n.some(Op)&&(i+=lT),e&&(i+=sT),n.filter(s=>!Op(s)).reduce((s,a)=>s+(nT.test(a)?iT:a===""?aT:rT),i)}function cT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function uT(t,e,n){let{routesMeta:i}=t,s={},a="/",r=[];for(let l=0;l<i.length;++l){let o=i[l],c=l===i.length-1,f=a==="/"?e:e.slice(a.length)||"/",u=Np({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},f),h=o.route;if(!u&&c&&n&&!i[i.length-1].route.index&&(u=Np({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},f)),!u)return null;Object.assign(s,u.params),r.push({params:s,pathname:Gn([a,u.pathname]),pathnameBase:gT(Gn([a,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(a=Gn([a,u.pathnameBase]))}return r}function Np(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fT(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],r=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((c,f,u)=>{let{paramName:h,isOptional:p}=f;if(h==="*"){let S=l[u]||"";r=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const v=l[u];return p&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:r,pattern:t}}function fT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,l,o)=>(i.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function hT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function dh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function dT(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?Ys(t):t;return{pathname:n?n.startsWith("/")?n:pT(n,e):e,search:_T(i),hash:vT(s)}}function pT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ic(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jv(t,e){let n=mT(t);return e?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ey(t,e,n,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=Ys(t):(s=tr({},t),me(!s.pathname||!s.pathname.includes("?"),Ic("?","pathname","search",s)),me(!s.pathname||!s.pathname.includes("#"),Ic("#","pathname","hash",s)),me(!s.search||!s.search.includes("#"),Ic("#","search","hash",s)));let a=t===""||s.pathname==="",r=a?"/":s.pathname,l;if(r==null)l=n;else{let u=e.length-1;if(!i&&r.startsWith("..")){let h=r.split("/");for(;h[0]==="..";)h.shift(),u-=1;s.pathname=h.join("/")}l=u>=0?e[u]:"/"}let o=dT(s,l),c=r&&r!=="/"&&r.endsWith("/"),f=(a||r===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||f)&&(o.pathname+="/"),o}const Gn=t=>t.join("/").replace(/\/\/+/g,"/"),gT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ty=["post","put","patch","delete"];new Set(ty);const ET=["get",...ty];new Set(ET);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nr.apply(this,arguments)}const ph=b.createContext(null),ST=b.createContext(null),zi=b.createContext(null),Mo=b.createContext(null),Hi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=b.createContext(null);function bT(t,e){let{relative:n}=e===void 0?{}:e;br()||me(!1);let{basename:i,navigator:s}=b.useContext(zi),{hash:a,pathname:r,search:l}=sy(t,{relative:n}),o=r;return i!=="/"&&(o=r==="/"?i:Gn([i,r])),s.createHref({pathname:o,search:l,hash:a})}function br(){return b.useContext(Mo)!=null}function Tr(){return br()||me(!1),b.useContext(Mo).location}function iy(t){b.useContext(zi).static||b.useLayoutEffect(t)}function xo(){let{isDataRoute:t}=b.useContext(Hi);return t?LT():TT()}function TT(){br()||me(!1);let t=b.useContext(ph),{basename:e,future:n,navigator:i}=b.useContext(zi),{matches:s}=b.useContext(Hi),{pathname:a}=Tr(),r=JSON.stringify(Jv(s,n.v7_relativeSplatPath)),l=b.useRef(!1);return iy(()=>{l.current=!0}),b.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){i.go(c);return}let u=ey(c,JSON.parse(r),a,f.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Gn([e,u.pathname])),(f.replace?i.replace:i.push)(u,f.state,f)},[e,i,r,a,t])}function sy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=b.useContext(zi),{matches:s}=b.useContext(Hi),{pathname:a}=Tr(),r=JSON.stringify(Jv(s,i.v7_relativeSplatPath));return b.useMemo(()=>ey(t,JSON.parse(r),a,n==="path"),[t,r,a,n])}function CT(t,e){return wT(t,e)}function wT(t,e,n,i){br()||me(!1);let{navigator:s}=b.useContext(zi),{matches:a}=b.useContext(Hi),r=a[a.length-1],l=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let c=Tr(),f;if(e){var u;let T=typeof e=="string"?Ys(e):e;o==="/"||(u=T.pathname)!=null&&u.startsWith(o)||me(!1),f=T}else f=c;let h=f.pathname||"/",p=h;if(o!=="/"){let T=o.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(T.length).join("/")}let v=Jb(t,{pathname:p}),S=IT(v&&v.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:Gn([o,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?o:Gn([o,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),a,n,i);return e&&S?b.createElement(Mo.Provider,{value:{location:nr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ln.Pop}},S):S}function AT(){let t=kT(),e=yT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:s},n):null,null)}const RT=b.createElement(AT,null);class OT extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Hi.Provider,{value:this.props.routeContext},b.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NT(t){let{routeContext:e,match:n,children:i}=t,s=b.useContext(ph);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Hi.Provider,{value:e},i)}function IT(t,e,n,i){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=r.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);f>=0||me(!1),r=r.slice(0,Math.min(r.length,f+1))}let o=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<r.length;f++){let u=r[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=f),u.route.id){let{loaderData:h,errors:p}=n,v=u.route.loader&&h[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||v){o=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((f,u,h)=>{let p,v=!1,S=null,T=null;n&&(p=l&&u.route.id?l[u.route.id]:void 0,S=u.route.errorElement||RT,o&&(c<0&&h===0?(v=!0,T=null):c===h&&(v=!0,T=u.route.hydrateFallbackElement||null)));let m=e.concat(r.slice(0,h+1)),d=()=>{let _;return p?_=S:v?_=T:u.route.Component?_=b.createElement(u.route.Component,null):u.route.element?_=u.route.element:_=f,b.createElement(NT,{match:u,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:_})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?b.createElement(OT,{location:n.location,revalidation:n.revalidation,component:S,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var ay=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ay||{}),Xl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xl||{});function DT(t){let e=b.useContext(ph);return e||me(!1),e}function MT(t){let e=b.useContext(ST);return e||me(!1),e}function xT(t){let e=b.useContext(Hi);return e||me(!1),e}function ry(t){let e=xT(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function kT(){var t;let e=b.useContext(ny),n=MT(Xl.UseRouteError),i=ry(Xl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function LT(){let{router:t}=DT(ay.UseNavigateStable),e=ry(Xl.UseNavigateStable),n=b.useRef(!1);return iy(()=>{n.current=!0}),b.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,nr({fromRouteId:e},a)))},[t,e])}const Ip={};function UT(t,e){Ip[e]||(Ip[e]=!0,console.warn(e))}const Dp=(t,e,n)=>UT(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function jT(t,e){t!=null&&t.v7_startTransition||Dp("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Dp("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function bn(t){me(!1)}function zT(t){let{basename:e="/",children:n=null,location:i,navigationType:s=Ln.Pop,navigator:a,static:r=!1,future:l}=t;br()&&me(!1);let o=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:o,navigator:a,static:r,future:nr({v7_relativeSplatPath:!1},l)}),[o,l,a,r]);typeof i=="string"&&(i=Ys(i));let{pathname:f="/",search:u="",hash:h="",state:p=null,key:v="default"}=i,S=b.useMemo(()=>{let T=dh(f,o);return T==null?null:{location:{pathname:T,search:u,hash:h,state:p,key:v},navigationType:s}},[o,f,u,h,p,v,s]);return S==null?null:b.createElement(zi.Provider,{value:c},b.createElement(Mo.Provider,{children:n,value:S}))}function HT(t){let{children:e,location:n}=t;return CT(Vu(e),n)}new Promise(()=>{});function Vu(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(i,s)=>{if(!b.isValidElement(i))return;let a=[...e,s];if(i.type===b.Fragment){n.push.apply(n,Vu(i.props.children,a));return}i.type!==bn&&me(!1),!i.props.index||!i.props.children||me(!1);let r={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=Vu(i.props.children,a)),n.push(r)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qu.apply(this,arguments)}function BT(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,a;for(a=0;a<i.length;a++)s=i[a],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function PT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VT(t,e){return t.button===0&&(!e||e==="_self")&&!PT(t)}const qT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],GT="6";try{window.__reactRouterVersion=GT}catch{}const YT="startTransition",Mp=cE[YT];function FT(t){let{basename:e,children:n,future:i,window:s}=t,a=b.useRef();a.current==null&&(a.current=Wb({window:s,v5Compat:!0}));let r=a.current,[l,o]=b.useState({action:r.action,location:r.location}),{v7_startTransition:c}=i||{},f=b.useCallback(u=>{c&&Mp?Mp(()=>o(u)):o(u)},[o,c]);return b.useLayoutEffect(()=>r.listen(f),[r,f]),b.useEffect(()=>jT(i),[i]),b.createElement(zT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:r,future:i})}const KT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=b.forwardRef(function(e,n){let{onClick:i,relative:s,reloadDocument:a,replace:r,state:l,target:o,to:c,preventScrollReset:f,viewTransition:u}=e,h=BT(e,qT),{basename:p}=b.useContext(zi),v,S=!1;if(typeof c=="string"&&XT.test(c)&&(v=c,KT))try{let _=new URL(window.location.href),y=c.startsWith("//")?new URL(_.protocol+c):new URL(c),C=dh(y.pathname,p);y.origin===_.origin&&C!=null?c=C+y.search+y.hash:S=!0}catch{}let T=bT(c,{relative:s}),m=QT(c,{replace:r,state:l,target:o,preventScrollReset:f,relative:s,viewTransition:u});function d(_){i&&i(_),_.defaultPrevented||m(_)}return b.createElement("a",qu({},h,{href:v||T,onClick:S||a?i:d,ref:n,target:o}))});var xp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xp||(xp={}));var kp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kp||(kp={}));function QT(t,e){let{target:n,replace:i,state:s,preventScrollReset:a,relative:r,viewTransition:l}=e===void 0?{}:e,o=xo(),c=Tr(),f=sy(t,{relative:r});return b.useCallback(u=>{if(VT(u,n)){u.preventDefault();let h=i!==void 0?i:Kl(c)===Kl(f);o(t,{replace:h,state:s,preventScrollReset:a,relative:r,viewTransition:l})}},[c,o,f,i,s,n,t,a,r,l])}const WT=()=>{const[t,e]=b.useState(!1),n=()=>{e(!t)},i=()=>{e(!1)},s=a=>{a.target.classList.contains("blur-background")&&e(!1)};return g.jsxs("div",{className:"burger_menu",children:[g.jsx("button",{id:"burger__btn",type:"button",onClick:n,children:g.jsx("span",{id:"burgerSpan",className:t?"btn-open-animation":""})}),g.jsx("aside",{className:`burger__container ${t?"open":""}`,children:g.jsx("div",{className:"burger__content",children:g.jsx("nav",{className:"burger__nav",children:g.jsxs("ol",{className:"burgerMenu_list",children:[g.jsx(De,{to:"/",onClick:i,children:g.jsx("li",{children:"home"})}),g.jsx(De,{to:"/new-featured",onClick:i,children:g.jsx("li",{children:"new & Featured"})}),g.jsx(De,{to:"/men",onClick:i,children:g.jsx("li",{children:"men"})}),g.jsx(De,{to:"/women",onClick:i,children:g.jsx("li",{children:"women"})}),g.jsx(De,{to:"/aboutus",onClick:i,children:g.jsx("li",{children:"About us"})}),g.jsxs("div",{className:"header__navIc burger_menu__bavIcon",children:[g.jsx(De,{to:"/Log",onClick:i,children:g.jsx("div",{className:"header__navIcon",children:g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(255,254,254,1)",children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",children:[g.jsx("stop",{offset:"0%",style:{stopColor:"rgb(6, 193, 252)",stopOpacity:1}}),g.jsx("stop",{offset:"33%",style:{stopColor:"rgb(172, 66, 255)",stopOpacity:1}}),g.jsx("stop",{offset:"57%",style:{stopColor:"rgb(255, 0, 214)",stopOpacity:1}}),g.jsx("stop",{offset:"90%",style:{stopColor:"rgb(255, 0, 61)",stopOpacity:1}})]})}),g.jsx("path",{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"})]})})}),g.jsx(De,{to:"/basket",onClick:i,children:g.jsx("div",{className:"header__navIcon",children:g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(255,255,255,1)",children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",children:[g.jsx("stop",{offset:"0%",style:{stopColor:"rgb(6, 193, 252)",stopOpacity:1}}),g.jsx("stop",{offset:"33%",style:{stopColor:"rgb(172, 66, 255)",stopOpacity:1}}),g.jsx("stop",{offset:"57%",style:{stopColor:"rgb(255, 0, 214)",stopOpacity:1}}),g.jsx("stop",{offset:"90%",style:{stopColor:"rgb(255, 0, 61)",stopOpacity:1}})]})}),g.jsx("path",{d:"M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"})]})})})]})]})})})}),g.jsx("div",{className:`blur-background ${t?"show":""}`,onClick:s})]})};var Lp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw Fs(e)},Fs=function(t){return new Error("Firebase Database ("+ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$T=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],r=t[n++],l=t[n++],o=((s&7)<<18|(a&63)<<12|(r&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(o&1023))}else{const a=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|r&63)}}return e.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const a=t[s],r=s+1<t.length,l=r?t[s+1]:0,o=s+2<t.length,c=o?t[s+2]:0,f=a>>2,u=(a&3)<<4|l>>4;let h=(l&15)<<2|c>>6,p=c&63;o||(p=64,r||(h=64)),i.push(n[f],n[u],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$T(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||l==null||c==null||u==null)throw new ZT;const h=a<<2|l>>4;if(i.push(h),c!==64){const p=l<<4&240|c>>2;if(i.push(p),u!==64){const v=c<<6&192|u;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(t){const e=oy(t);return mh.encodeByteArray(e,!0)},Ql=function(t){return cy(t).replace(/\./g,"")},Wl=function(t){try{return mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){return uy(void 0,t)}function uy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eC(n)||(t[n]=uy(t[n],e[n]));return t}function eC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,iC=()=>{if(typeof process>"u"||typeof Lp>"u")return;const t=Lp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wl(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return nC()||iC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fy=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aC=t=>{const e=fy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},hy=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},dy=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ql(JSON.stringify(n)),Ql(JSON.stringify(r)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function lC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function py(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oC(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gy(){return ly.NODE_ADMIN===!0}function _y(){try{return typeof indexedDB=="object"}catch{return!1}}function vy(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function cC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="FirebaseError";class Pt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=uC,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],r=a?fC(a,i):"Error",l=`${this.serviceName}: ${r} (${s}).`;return new Pt(s,l,i)}}function fC(t,e){return t.replace(hC,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const hC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=function(t){let e={},n={},i={},s="";try{const a=t.split(".");e=ir(Wl(a[0])||""),n=ir(Wl(a[1])||""),s=a[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},dC=function(t){const e=yy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pC=function(t){const e=yy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const a=t[s],r=e[s];if(Up(a)&&Up(r)){if(!sr(a,r))return!1}else if(a!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,a]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function _a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],r=this.chain_[2],l=this.chain_[3],o=this.chain_[4],c,f;for(let u=0;u<80;u++){u<40?u<20?(c=l^a&(r^l),f=1518500249):(c=a^r^l,f=1859775393):u<60?(c=a&r|l&(a|r),f=2400959708):(c=a^r^l,f=3395469782);const h=(s<<5|s>>>27)+c+o+f+i[u]&4294967295;o=l,l=r,r=(a<<30|a>>>2)&4294967295,a=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+r&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const a=this.buf_;let r=this.inbuf_;for(;s<n;){if(r===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(a[r]=e.charCodeAt(s),++r,++s,r===this.blockSize){this.compress_(a),r=0;break}}else for(;s<n;)if(a[r]=e[s],++r,++s,r===this.blockSize){this.compress_(a),r=0;break}}this.inbuf_=r,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[s]>>a&255,++i;return e}}function gC(t,e){const n=new _C(t,e);return n.subscribe.bind(n)}class _C{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");vC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Dc),s.error===void 0&&(s.error=Dc),s.complete===void 0&&(s.complete=Dc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}function yC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const a=s-55296;i++,w(i<t.length,"Surrogate pair missing trail surrogate.");const r=t.charCodeAt(i)-56320;s=65536+(a<<10)+r}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ko=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=1e3,bC=2,TC=4*60*60*1e3,CC=.5;function jp(t,e=SC,n=bC){const i=e*Math.pow(n,t),s=Math.round(CC*i*(Math.random()-.5)*2);return Math.min(TC,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _h;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,r]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);i===l&&r.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const r=this.instances.get(s);return r&&e(r,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AC(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AC(t){return t===li?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const NC={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},IC=F.INFO,DC={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},MC=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=DC[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=IC,this._logHandler=MC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const xC=(t,e)=>e.some(n=>t instanceof n);let zp,Hp;function kC(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LC(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ey=new WeakMap,Yu=new WeakMap,Sy=new WeakMap,Mc=new WeakMap,yh=new WeakMap;function UC(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",r)},a=()=>{n(Yn(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Ey.set(n,t)}).catch(()=>{}),yh.set(e,t),e}function jC(t){if(Yu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",r),t.removeEventListener("abort",r)},a=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",r),t.addEventListener("abort",r)});Yu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zC(t){Fu=t(Fu)}function HC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(xc(this),e,...n);return Sy.set(i,e.sort?e.sort():[e]),Yn(i)}:LC().includes(t)?function(...e){return t.apply(xc(this),e),Yn(Ey.get(this))}:function(...e){return Yn(t.apply(xc(this),e))}}function BC(t){return typeof t=="function"?HC(t):(t instanceof IDBTransaction&&jC(t),xC(t,kC())?new Proxy(t,Fu):t)}function Yn(t){if(t instanceof IDBRequest)return UC(t);if(Mc.has(t))return Mc.get(t);const e=BC(t);return e!==t&&(Mc.set(t,e),yh.set(e,t)),e}const xc=t=>yh.get(t);function by(t,e,{blocked:n,upgrade:i,blocking:s,terminated:a}={}){const r=indexedDB.open(t,e),l=Yn(r);return i&&r.addEventListener("upgradeneeded",o=>{i(Yn(r.result),o.oldVersion,o.newVersion,Yn(r.transaction),o)}),n&&r.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),l.then(o=>{a&&o.addEventListener("close",()=>a()),s&&o.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const PC=["get","getKey","getAll","getAllKeys","count"],VC=["put","add","delete","clear"],kc=new Map;function Bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=VC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||PC.includes(n)))return;const a=async function(r,...l){const o=this.transaction(r,s?"readwrite":"readonly");let c=o.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&o.done]))[0]};return kc.set(e,a),a}zC(t=>({...t,get:(e,n,i)=>Bp(e,n)||t.get(e,n,i),has:(e,n)=>!!Bp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function GC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ku="@firebase/app",Pp="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Lo("@firebase/app"),YC="@firebase/app-compat",FC="@firebase/analytics-compat",KC="@firebase/analytics",XC="@firebase/app-check-compat",QC="@firebase/app-check",WC="@firebase/auth",$C="@firebase/auth-compat",ZC="@firebase/database",JC="@firebase/data-connect",ew="@firebase/database-compat",tw="@firebase/functions",nw="@firebase/functions-compat",iw="@firebase/installations",sw="@firebase/installations-compat",aw="@firebase/messaging",rw="@firebase/messaging-compat",lw="@firebase/performance",ow="@firebase/performance-compat",cw="@firebase/remote-config",uw="@firebase/remote-config-compat",fw="@firebase/storage",hw="@firebase/storage-compat",dw="@firebase/firestore",pw="@firebase/vertexai",mw="@firebase/firestore-compat",gw="firebase",_w="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="[DEFAULT]",vw={[Ku]:"fire-core",[YC]:"fire-core-compat",[KC]:"fire-analytics",[FC]:"fire-analytics-compat",[QC]:"fire-app-check",[XC]:"fire-app-check-compat",[WC]:"fire-auth",[$C]:"fire-auth-compat",[ZC]:"fire-rtdb",[JC]:"fire-data-connect",[ew]:"fire-rtdb-compat",[tw]:"fire-fn",[nw]:"fire-fn-compat",[iw]:"fire-iid",[sw]:"fire-iid-compat",[aw]:"fire-fcm",[rw]:"fire-fcm-compat",[lw]:"fire-perf",[ow]:"fire-perf-compat",[cw]:"fire-rc",[uw]:"fire-rc-compat",[fw]:"fire-gcs",[hw]:"fire-gcs-compat",[dw]:"fire-fst",[mw]:"fire-fst-compat",[pw]:"fire-vertex","fire-js":"fire-js",[gw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map,yw=new Map,Qu=new Map;function Vp(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(Qu.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Qu.set(e,t);for(const n of Zl.values())Vp(n,t);for(const n of yw.values())Vp(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Bi("app","Firebase",Ew);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=_w;function Ty(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=hy()),!n)throw Fn.create("no-options");const a=Zl.get(s);if(a){if(sr(n,a.options)&&sr(i,a.config))return a;throw Fn.create("duplicate-app",{appName:s})}const r=new OC(s);for(const o of Qu.values())r.addComponent(o);const l=new Sw(n,i,r);return Zl.set(s,l),l}function Eh(t=Xu){const e=Zl.get(t);if(!e&&t===Xu&&hy())return Ty();if(!e)throw Fn.create("no-app",{appName:t});return e}function mt(t,e,n){var i;let s=(i=vw[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),r=e.match(/\s|\//);if(a||r){const l=[`Unable to register library "${s}" with version "${e}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&r&&l.push("and"),r&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(l.join(" "));return}zt(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="firebase-heartbeat-database",Tw=1,ar="firebase-heartbeat-store";let Lc=null;function Cy(){return Lc||(Lc=by(bw,Tw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function Cw(t){try{const n=(await Cy()).transaction(ar),i=await n.objectStore(ar).get(wy(t));return await n.done,i}catch(e){if(e instanceof Pt)hn.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function qp(t,e){try{const i=(await Cy()).transaction(ar,"readwrite");await i.objectStore(ar).put(e,wy(t)),await i.done}catch(n){if(n instanceof Pt)hn.warn(n.message);else{const i=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(i.message)}}}function wy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=1024,Aw=30*24*60*60*1e3;class Rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Gp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const l=new Date(r.date).valueOf();return Date.now()-l<=Aw}),this._storage.overwrite(this._heartbeatsCache))}catch(i){hn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:i,unsentEntries:s}=Ow(this._heartbeatsCache.heartbeats),a=Ql(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return hn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function Ow(t,e=ww){const n=[];let i=t.slice();for(const s of t){const a=n.find(r=>r.agent===s.agent);if(a){if(a.dates.push(s.date),Yp(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _y()?vy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yp(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){zt(new wt("platform-logger",e=>new qC(e),"PRIVATE")),zt(new wt("heartbeat",e=>new Rw(e),"PRIVATE")),mt(Ku,Pp,t),mt(Ku,Pp,"esm2017"),mt("fire-js","")}Iw("");var Dw="firebase",Mw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(Dw,Mw,"app");function Sh(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xw=Ay,Ry=new Bi("auth","Firebase",Ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Lo("@firebase/auth");function kw(t,...e){Jl.logLevel<=F.WARN&&Jl.warn(`Auth (${Xs}): ${t}`,...e)}function pl(t,...e){Jl.logLevel<=F.ERROR&&Jl.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw bh(t,...e)}function Lt(t,...e){return bh(t,...e)}function Oy(t,e,n){const i=Object.assign(Object.assign({},xw()),{[e]:n});return new Bi("auth","Firebase",i).create(e,{appName:t.name})}function rn(t){return Oy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ry.create(t,...e)}function I(t,e,...n){if(!t)throw bh(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function dn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lw(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lw()||py()||"connection"in navigator)?navigator.onLine:!0}function jw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=vh()||my()}get(){return Uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Cr(3e4,6e4);function ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,i,s={}){return Iy(t,s,async()=>{let a={},r={};i&&(e==="GET"?r=i:a={body:JSON.stringify(i)});const l=Ks(Object.assign({key:t.config.apiKey},r)).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:o},a);return lC()||(c.referrerPolicy="no-referrer"),Ny.fetch()(Dy(t,t.config.apiHost,n,l),c)})}async function Iy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},zw),e);try{const s=new Pw(t),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await a.json();if("needConfirmation"in r)throw Jr(t,"account-exists-with-different-credential",r);if(a.ok&&!("errorMessage"in r))return r;{const l=a.ok?r.errorMessage:r.error.message,[o,c]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(t,"credential-already-in-use",r);if(o==="EMAIL_EXISTS")throw Jr(t,"email-already-in-use",r);if(o==="USER_DISABLED")throw Jr(t,"user-disabled",r);const f=i[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Oy(t,f,c);At(t,f)}}catch(s){if(s instanceof Pt)throw s;At(t,"network-request-failed",{message:String(s)})}}async function wr(t,e,n,i,s={}){const a=await _n(t,e,n,i,s);return"mfaPendingCredential"in a&&At(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Dy(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`}function Bw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Lt(this.auth,"network-request-failed")),Hw.get())})}}function Jr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Lt(t,e,i);return s.customData._tokenResponse=n,s}function Kp(t){return t!==void 0&&t.enterprise!==void 0}class Vw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qw(t,e){return _n(t,"GET","/v2/recaptchaConfig",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function My(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yw(t,e=!1){const n=Xe(t),i=await n.getIdToken(e),s=Ch(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,r=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:ka(Uc(s.auth_time)),issuedAtTime:ka(Uc(s.iat)),expirationTime:ka(Uc(s.exp)),signInProvider:r||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function Ch(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wl(n);return s?JSON.parse(s):(pl("Failed to decode base64 JWT payload"),null)}catch(s){return pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xp(t){const e=Ch(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Pt&&Fw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Fw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ls(t,My(n,{idToken:i}));I(s==null?void 0:s.users.length,n,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const r=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?xy(a.providerUserInfo):[],l=Qw(t.providerData,r),o=t.isAnonymous,c=!(t.email&&a.passwordHash)&&!(l!=null&&l.length),f=o?c:!1,u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new $u(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Xw(t){const e=Xe(t);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xy(t){return t.map(e=>{var{providerId:n}=e,i=Sh(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(t,e){const n=await Iy(t,{},async()=>{const i=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,r=Dy(t,s,"/v1/token",`key=${a}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(r,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $w(t,e){return _n(t,"POST","/v2/accounts:revokeToken",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){I(e.length!==0,"internal-error");const n=Xp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:a}=await Ww(e,n);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:a}=n,r=new Es;return i&&(I(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(I(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),a&&(I(typeof a=="number","internal-error",{appName:e}),r.expirationTime=a),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,a=Sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new $u(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yw(this,e)}reload(){return Xw(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await Ls(this,Gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,a,r,l,o,c,f;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,p=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,v=(r=n.photoURL)!==null&&r!==void 0?r:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:y,isAnonymous:C,providerData:N,stsTokenManager:R}=n;I(_&&R,e,"internal-error");const O=Es.fromJSON(this.name,R);I(typeof _=="string",e,"internal-error"),En(u,e.name),En(h,e.name),I(typeof y=="boolean",e,"internal-error"),I(typeof C=="boolean",e,"internal-error"),En(p,e.name),En(v,e.name),En(S,e.name),En(T,e.name),En(m,e.name),En(d,e.name);const Z=new tn({uid:_,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:C,photoURL:v,phoneNumber:p,tenantId:S,stsTokenManager:O,createdAt:m,lastLoginAt:d});return N&&Array.isArray(N)&&(Z.providerData=N.map(k=>Object.assign({},k))),T&&(Z._redirectEventId=T),Z}static async _fromIdTokenResponse(e,n,i=!1){const s=new Es;s.updateFromServerResponse(n);const a=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await eo(a),a}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];I(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?xy(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),l=new Es;l.updateFromIdToken(i);const o=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:r}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $u(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(o,c),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Map;function nn(t){dn(t instanceof Function,"Expected a class definition");let e=Qp.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ky.type="NONE";const Wp=ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=ml(this.userKey,s.apiKey,a),this.fullPersistenceKey=ml("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ss(nn(Wp),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=s[0]||nn(Wp);const r=ml(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(r);if(f){const u=tn._fromJSON(e,f);c!==a&&(l=u),a=c;break}}catch{}const o=s.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new Ss(a,e,i):(a=o[0],l&&await a._set(r,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==a)try{await c._remove(r)}catch{}})),new Ss(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(By(e))return"Blackberry";if(Py(e))return"Webos";if(Uy(e))return"Safari";if((e.includes("chrome/")||jy(e))&&!e.includes("edge/"))return"Chrome";if(Hy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ly(t=Be()){return/firefox\//i.test(t)}function Uy(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jy(t=Be()){return/crios\//i.test(t)}function zy(t=Be()){return/iemobile/i.test(t)}function Hy(t=Be()){return/android/i.test(t)}function By(t=Be()){return/blackberry/i.test(t)}function Py(t=Be()){return/webos/i.test(t)}function wh(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zw(t=Be()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jw(){return oC()&&document.documentMode===10}function Vy(t=Be()){return wh(t)||Hy(t)||Py(t)||By(t)||/windows phone/i.test(t)||zy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e=[]){let n;switch(t){case"Browser":n=$p(Be());break;case"Worker":n=`${$p(Be())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=a=>new Promise((r,l)=>{try{const o=e(a);r(o)}catch(o){l(o)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e={}){return _n(t,"GET","/v2/passwordPolicy",ni(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=6;class iA{constructor(e){var n,i,s,a;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=r.minPasswordLength)!==null&&n!==void 0?n:nA,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,a,r,l;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(n=o.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(a=o.containsUppercaseLetter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(r=o.containsNumericCharacter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(l=o.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),o}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new eA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await My(this,{idToken:e}),i=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===l)&&(o!=null&&o.user)&&(s=o.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(rn(this));const n=e?Xe(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tA(this),n=new iA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await $w(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let r=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(l,this,"internal-error"),l.then(()=>{r||a(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,i,s);return()=>{r=!0,o()}}else{const o=e.addObserver(n);return()=>{r=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return Xe(t)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(t){Uo=t}function Gy(t){return Uo.loadJS(t)}function rA(){return Uo.recaptchaEnterpriseScript}function lA(){return Uo.gapiScript}function oA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cA{constructor(){this.enterprise=new uA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fA="recaptcha-enterprise",Yy="NO_RECAPTCHA";class hA{constructor(e){this.type=fA,this.auth=Vi(e)}async verify(e="verify",n=!1){async function i(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(r,l)=>{qw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Vw(o);return a.tenantId==null?a._agentRecaptchaConfig=c:a._tenantRecaptchaConfigs[a.tenantId]=c,r(c.siteKey)}}).catch(o=>{l(o)})})}function s(a,r,l){const o=window.grecaptcha;Kp(o)?o.enterprise.ready(()=>{o.enterprise.execute(a,{action:e}).then(c=>{r(c)}).catch(()=>{r(Yy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cA().execute("siteKey",{action:"verify"}):new Promise((a,r)=>{i(this.auth).then(l=>{if(!n&&Kp(window.grecaptcha))s(l,a,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let o=rA();o.length!==0&&(o+=l),Gy(o).then(()=>{s(l,a,r)}).catch(c=>{r(c)})}}).catch(l=>{r(l)})})}}async function Jp(t,e,n,i=!1,s=!1){const a=new hA(t);let r;if(s)r=Yy;else try{r=await a.verify(n)}catch{r=await a.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const o=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:c,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const o=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:o,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:r}):Object.assign(l,{captchaResponse:r}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zu(t,e,n,i,s){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Jp(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jp(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(sr(a,e??{}))return s;At(s,"already-initialized")}return n.initialize({options:e})}function pA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mA(t,e,n){const i=Vi(t);I(i._canInitEmulator,i,"emulator-config-failed"),I(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Fy(e),{host:r,port:l}=gA(e),o=l===null?"":`:${l}`;i.config.emulator={url:`${a}//${r}${o}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:r,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),_A()}function Fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gA(t){const e=Fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:em(i.substr(a.length+1))}}else{const[a,r]=i.split(":");return{host:a,port:em(r)}}}function em(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _A(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function vA(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,e))}async function SA(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ah{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new rr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new rr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,n,"signInWithPassword",yA);case"emailLink":return EA(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,i,"signUpPassword",vA);case"emailLink":return SA(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="http://localhost";class wi extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,a=Sh(n,["providerId","signInMethod"]);if(!i||!s)return null;const r=new wi(i,s);return r.idToken=a.idToken||void 0,r.accessToken=a.accessToken||void 0,r.secret=a.secret,r.nonce=a.nonce,r.pendingToken=a.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,bs(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:bA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CA(t){const e=ga(_a(t)).link,n=e?ga(_a(e)).deep_link_id:null,i=ga(_a(t)).deep_link_id;return(i?ga(_a(i)).link:null)||i||n||e||t}class Rh{constructor(e){var n,i,s,a,r,l;const o=ga(_a(e)),c=(n=o.apiKey)!==null&&n!==void 0?n:null,f=(i=o.oobCode)!==null&&i!==void 0?i:null,u=TA((s=o.mode)!==null&&s!==void 0?s:null);I(c&&f&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=f,this.continueUrl=(a=o.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(r=o.languageCode)!==null&&r!==void 0?r:null,this.tenantId=(l=o.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=CA(e);try{return new Rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return rr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Rh.parseLink(n);return I(i,"argument-error"),rr._fromEmailAndCode(e,i.code,i.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ky{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ar{constructor(){super("facebook.com")}static credential(e){return wi._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wi._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return In.credential(n,i)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ar{constructor(){super("github.com")}static credential(e){return wi._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ar{constructor(){super("twitter.com")}static credential(e,n){return wi._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Mn.credential(n,i)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return wr(t,"POST","/v1/accounts:signUp",ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const a=await tn._fromIdTokenResponse(e,i,s),r=tm(i);return new Ai({user:a,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=tm(i);return new Ai({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function tm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Pt{constructor(e,n,i,s){var a;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new to(e,n,i,s)}}function Xy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(t,a,e,i):a})}async function AA(t,e,n=!1){const i=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e,n=!1){const{auth:i}=t;if(It(i.app))return Promise.reject(rn(i));const s="reauthenticate";try{const a=await Ls(t,Xy(i,s,e,t),n);I(a.idToken,i,"internal-error");const r=Ch(a.idToken);I(r,i,"internal-error");const{sub:l}=r;return I(t.uid===l,i,"user-mismatch"),Ai._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&At(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(t,e,n=!1){if(It(t.app))return Promise.reject(rn(t));const i="signIn",s=await Xy(t,i,e),a=await Ai._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(a.user),a}async function OA(t,e){return Qy(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NA(t,e,n){if(It(t.app))return Promise.reject(rn(t));const i=Vi(t),r=await Zu(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wA).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&Wy(t),o}),l=await Ai._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(l.user),l}function IA(t,e,n){return It(t.app)?Promise.reject(rn(t)):OA(Xe(t),Qs.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Wy(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Xe(t),a={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await Ls(i,DA(i.auth,a));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const l=i.providerData.find(({providerId:o})=>o==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function xA(t,e,n,i){return Xe(t).onIdTokenChanged(e,n,i)}function kA(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function $y(t,e,n,i){return Xe(t).onAuthStateChanged(e,n,i)}function LA(t){return Xe(t).signOut()}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=1e3,jA=10;class Jy extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,l,o)=>{this.notifyListeners(r,o)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},a=this.storage.getItem(i);Jw()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jy.type="LOCAL";const zA=Jy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new jo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:a}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(r).map(async c=>c(n.origin,a)),o=await HA(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,r;return new Promise((l,o)=>{const c=Oh("",20);s.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(h.data.response);break;default:clearTimeout(f),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function PA(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function VA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GA(){return n0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",YA=1,io="firebaseLocalStorage",s0="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function FA(){const t=indexedDB.deleteDatabase(i0);return new Rr(t).toPromise()}function Ju(){const t=indexedDB.open(i0,YA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(io,{keyPath:s0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(io)?e(i):(i.close(),await FA(),e(await Ju()))})})}async function nm(t,e,n){const i=zo(t,!0).put({[s0]:e,value:n});return new Rr(i).toPromise()}async function KA(t,e){const n=zo(t,!1).get(e),i=await new Rr(n).toPromise();return i===void 0?null:i.value}function im(t,e){const n=zo(t,!0).delete(e);return new Rr(n).toPromise()}const XA=800,QA=3;class a0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>QA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(GA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VA(),!this.activeServiceWorker)return;this.sender=new BA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ju();return await nm(e,no,"1"),await im(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>KA(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=zo(s,!1).getAll();return new Rr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a0.type="LOCAL";const WA=a0;new Cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t,e){return e?nn(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZA(t){return Qy(t.auth,new Nh(t),t.bypassAuthState)}function JA(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),RA(n,new Nh(t),t.bypassAuthState)}async function eR(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),AA(n,new Nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:a,error:r,type:l}=e;if(r){this.reject(r);return}const o={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZA;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return JA;default:At(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Cr(2e3,1e4);class cs extends r0{constructor(e,n,i,s,a){super(e,n,s,a),this.provider=i,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="pendingRedirect",gl=new Map;class iR extends r0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const i=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(t,e){const n=lR(e),i=rR(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function aR(t,e){gl.set(t._key(),e)}function rR(t){return nn(t._redirectPersistence)}function lR(t){return ml(nR,t.config.apiKey,t.name)}async function oR(t,e,n=!1){if(It(t.app))return Promise.reject(rn(t));const i=Vi(t),s=$A(i,e),r=await new iR(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=10*60*1e3;class uR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!l0(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))}saveEventToCache(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()}}function sm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pR=/^https?/;async function mR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(gR(n))return}catch{}At(t,"unauthorized-domain")}function gR(t){const e=Wu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!pR.test(n))return!1;if(dR.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Cr(3e4,6e4);function am(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vR(t){return new Promise((e,n)=>{var i,s,a;function r(){am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{am(),n(Lt(t,"network-request-failed"))},timeout:_R.get()})}if(!((s=(i=Ut().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Ut().gapi)===null||a===void 0)&&a.load)r();else{const l=oA("iframefcb");return Ut()[l]=()=>{gapi.load?r():n(Lt(t,"network-request-failed"))},Gy(`${lA()}?onload=${l}`).catch(o=>n(o))}}).catch(e=>{throw _l=null,e})}let _l=null;function yR(t){return _l=_l||vR(t),_l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Cr(5e3,15e3),SR="__/auth/iframe",bR="emulator/auth/iframe",TR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,bR):`https://${t.config.authDomain}/${SR}`,i={apiKey:e.apiKey,appName:t.name,v:Xs},s=CR.get(t.config.apiHost);s&&(i.eid=s);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Ks(i).slice(1)}`}async function AR(t){const e=await yR(t),n=Ut().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TR,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const r=Lt(t,"network-request-failed"),l=Ut().setTimeout(()=>{a(r)},ER.get());function o(){Ut().clearTimeout(l),s(i)}i.ping(o).then(o,()=>{a(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OR=500,NR=600,IR="_blank",DR="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MR(t,e,n,i=OR,s=NR){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const o=Object.assign(Object.assign({},RR),{width:i.toString(),height:s.toString(),top:a,left:r}),c=Be().toLowerCase();n&&(l=jy(c)?IR:n),Ly(c)&&(e=e||DR,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[p,v])=>`${h}${p}=${v},`,"");if(Zw(c)&&l!=="_self")return xR(e||"",l),new rm(null);const u=window.open(e||"",l,f);I(u,t,"popup-blocked");try{u.focus()}catch{}return new rm(u)}function xR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="__/auth/handler",LR="emulator/auth/handler",UR=encodeURIComponent("fac");async function lm(t,e,n,i,s,a){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Xs,eventId:s};if(e instanceof Ky){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",Gu(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries({}))r[f]=u}if(e instanceof Ar){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(r.scopes=f.join(","))}t.tenantId&&(r.tid=t.tenantId);const l=r;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const o=await t._getAppCheckToken(),c=o?`#${UR}=${encodeURIComponent(o)}`:"";return`${jR(t)}?${Ks(l).slice(1)}${c}`}function jR({config:t}){return t.emulator?Th(t,LR):`https://${t.authDomain}/${kR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=oR,this._overrideRedirectResult=aR}async _openPopup(e,n,i,s){var a;dn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await lm(e,n,i,Wu(),s);return MR(e,r,Oh())}async _openRedirect(e,n,i,s){await this._originValidation(e);const a=await lm(e,n,i,Wu(),s);return PA(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(dn(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await AR(e),i=new uR(e);return n.register("authEvent",s=>(I(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var a;const r=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[jc];r!==void 0&&n(!!r),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vy()||Uy()||wh()}}const HR=zR;var om="@firebase/auth",cm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(t){zt(new wt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:r,authDomain:l}=i.options;I(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const o={apiKey:r,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(t)},c=new sA(i,s,a,o);return pA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),zt(new wt("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(i=>new BR(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(om,cm,PR(t)),mt(om,cm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=5*60,GR=dy("authIdTokenMaxAge")||qR;let um=null;const YR=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>GR)return;const s=n==null?void 0:n.token;um!==s&&(um=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FR(t=Eh()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dA(t,{popupRedirectResolver:HR,persistence:[WA,zA,t0]}),i=dy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const r=YR(a.toString());kA(n,r,()=>r(n.currentUser)),xA(n,l=>r(l))}}const s=fy("auth");return s&&mA(n,`http://${s}`),n}function KR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aA({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const a=Lt("internal-error");a.customData=s,n(a)},i.type="text/javascript",i.charset="UTF-8",KR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");var fm={};const hm="@firebase/database",dm="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0="";function XR(t){o0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QR(e)}}catch{}return new WR},hi=c0("localStorage"),$R=c0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Lo("@firebase/database"),ZR=function(){let t=1;return function(){return t++}}(),u0=function(t){const e=EC(t),n=new mC;n.update(e);const i=n.digest();return mh.encodeByteArray(i)},Or=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Or.apply(null,i):typeof i=="object"?e+=Ne(i):e+=i,e+=" "}return e};let La=null,pm=!0;const JR=function(t,e){w(!e,"Can't turn on custom loggers persistently."),Ts.logLevel=F.VERBOSE,La=Ts.log.bind(Ts)},Me=function(...t){if(pm===!0&&(pm=!1,La===null&&$R.get("logging_enabled")===!0&&JR()),La){const e=Or.apply(null,t);La(e)}},Nr=function(t){return function(...e){Me(t,...e)}},ef=function(...t){const e="FIREBASE INTERNAL ERROR: "+Or(...t);Ts.error(e)},pn=function(...t){const e=`FIREBASE FATAL ERROR: ${Or(...t)}`;throw Ts.error(e),new Error(e)},tt=function(...t){const e="FIREBASE WARNING: "+Or(...t);Ts.warn(e)},eO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},f0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Us="[MIN_NAME]",Ri="[MAX_NAME]",Ws=function(t,e){if(t===e)return 0;if(t===Us||e===Ri)return-1;if(e===Us||t===Ri)return 1;{const n=mm(t),i=mm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},nO=function(t,e){return t===e?0:t<e?-1:1},la=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},Ih=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ne(e[i]),n+=":",n+=Ih(t[e[i]]);return n+="}",n},h0=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const d0=function(t){w(!f0(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,a,r,l,o;t===0?(a=0,r=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),a=l+i,r=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(a=0,r=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(o=n;o;o-=1)c.push(r%2?1:0),r=Math.floor(r/2);for(o=e;o;o-=1)c.push(a%2?1:0),a=Math.floor(a/2);c.push(s?1:0),c.reverse();const f=c.join("");let u="";for(o=0;o<64;o+=8){let h=parseInt(f.substr(o,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},iO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},aO=new RegExp("^-?(0*)\\d{1,10}$"),rO=-2147483648,lO=2147483647,mm=function(t){if(aO.test(t)){const e=Number(t);if(e>=rO&&e<=lO)return e}return null},Ir=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},oO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tt(e)}}class vl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="5",p0="v",m0="s",g0="r",_0="f",v0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,y0="ls",E0="p",tf="ac",S0="websocket",b0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,i,s,a=!1,r="",l=!1,o=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=r,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function C0(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let i;if(e===S0)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===b0)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fO(t)&&(n.ns=t.namespace);const s=[];return vt(n,(a,r)=>{s.push(a+"="+r)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.counters_={}}incrementCounter(e,n=1){gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={},Hc={};function Mh(t){const e=t.toString();return zc[e]||(zc[e]=new hO),zc[e]}function dO(t,e){const n=t.toString();return Hc[n]||(Hc[n]=e()),Hc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ir(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="start",mO="close",gO="pLPCommand",_O="pRTLPCB",w0="id",A0="pw",R0="ser",vO="cb",yO="seg",EO="ts",SO="d",bO="dframe",O0=1870,N0=30,TO=O0-N0,CO=25e3,wO=3e4;class us{constructor(e,n,i,s,a,r,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.transportSessionId=r,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(e),this.stats_=Mh(n),this.urlFn=o=>(this.appCheckToken&&(o[tf]=this.appCheckToken),C0(n,b0,o))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wO)),tO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xh((...a)=>{const[r,l,o,c,f]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===gm)this.id=l,this.password=o;else if(r===mO)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...a)=>{const[r,l]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(r,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[gm]="t",i[R0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[vO]=this.scriptTagHolder.uniqueCallbackIdentifier),i[p0]=Dh,this.transportSessionId&&(i[m0]=this.transportSessionId),this.lastSessionId&&(i[y0]=this.lastSessionId),this.applicationId&&(i[E0]=this.applicationId),this.appCheckToken&&(i[tf]=this.appCheckToken),typeof location<"u"&&location.hostname&&v0.test(location.hostname)&&(i[g0]=_0);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){us.forceAllow_=!0}static forceDisallow(){us.forceDisallow_=!0}static isAvailable(){return us.forceAllow_?!0:!us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iO()&&!sO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=cy(n),s=h0(i,TO);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[bO]="t",i[w0]=e,i[A0]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xh{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZR(),window[gO+this.uniqueCallbackIdentifier]=e,window[_O+this.uniqueCallbackIdentifier]=n,this.myIFrame=xh.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const r="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w0]=this.myID,e[A0]=this.myPW,e[R0]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+N0+i.length<=O0;){const r=this.pendingSegs.shift();i=i+"&"+yO+s+"="+r.seg+"&"+EO+s+"="+r.ts+"&"+SO+s+"="+r.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(CO)),a=()=>{clearTimeout(s),i()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=16384,RO=45e3;let so=null;typeof MozWebSocket<"u"?so=MozWebSocket:typeof WebSocket<"u"&&(so=WebSocket);class St{constructor(e,n,i,s,a,r,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=Mh(n),this.connURL=St.connectionURL_(n,r,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,a){const r={};return r[p0]=Dh,typeof location<"u"&&location.hostname&&v0.test(location.hostname)&&(r[g0]=_0),n&&(r[m0]=n),i&&(r[y0]=i),s&&(r[tf]=s),a&&(r[E0]=a),C0(e,S0,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let i;gy(),this.mySock=new so(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&so!==null&&!St.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ir(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=h0(n,AO);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{static get ALL_TRANSPORTS(){return[us,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=St&&St.isAvailable();let i=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[St];else{const s=this.transports_=[];for(const a of lr.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);lr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=6e4,NO=5e3,IO=10*1024,DO=100*1024,Bc="t",_m="d",MO="s",vm="r",xO="e",ym="o",Em="a",Sm="n",bm="p",kO="h";class LO{constructor(e,n,i,s,a,r,l,o,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=r,this.onReady_=l,this.onDisconnect_=o,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new lr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bc in e){const n=e[Bc];n===Em?this.upgradeIfSecondaryHealthy_():n===vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=la("t",e),i=la("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Em,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=la("t",e),i=la("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=la(Bc,e);if(_m in e){const i=e[_m];if(n===kO){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Sm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MO?this.onConnectionShutdown_(i):n===vm?this.onReset_(i):n===xO?ef("Server Error: "+i):n===ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ef("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dh!==i&&tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===n&&(!i||i===s[a].context)){s.splice(a,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends D0{static getInstance(){return new ao}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=32,Cm=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ie("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function M0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function x0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function k0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function Ce(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ie(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function pt(t,e){const n=B(t),i=B(e);if(n===null)return e;if(n===i)return pt(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function L0(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function bt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class jO{constructor(e,n){this.errorPrefix_=n,this.parts_=x0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ko(this.parts_[i]);U0(this)}}function zO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ko(e),U0(t)}function HO(t){const e=t.parts_.pop();t.byteLength_-=ko(e),t.parts_.length>0&&(t.byteLength_-=1)}function U0(t){if(t.byteLength_>Cm)throw new Error(t.errorPrefix_+"has a key path longer than "+Cm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tm+") or object contains a cycle "+oi(t))}function oi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends D0{static getInstance(){return new kh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=1e3,BO=60*5*1e3,wm=30*1e3,PO=1.3,VO=3e4,qO="server_kill",Am=3;class ln extends I0{constructor(e,n,i,s,a,r,l,o){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=r,this.appCheckTokenProvider_=l,this.authOverride_=o,this.id=ln.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oa,this.maxReconnectDelay_=BO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!gy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,a={r:s,a:e,b:n};this.log_(Ne(a)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new _h,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:r=>{const l=r.d;r.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,i,s){this.initConnection_();const a=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+a),this.listens.has(r)||this.listens.set(r,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(r).has(a),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(r).set(a,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const a={p:i},r="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(r,a,l=>{const o=l.d,c=l.s;ln.warnOnListenWarnings_(o,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,o))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gn(e,"w")){const i=ks(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dC(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const a=s.s,r=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const a={p:e},r="n";s&&(a.q=i,a.t=s),this.sendRequest(r,a)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const a={p:n,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,r=>{s&&setTimeout(()=>{s(r.s,r.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,a){this.initConnection_();const r={p:n,d:i};a!==void 0&&(r.h=a),this.outstandingPuts_.push({action:e,request:r,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ef("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VO&&(this.reconnectDelay_=oa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ln.nextConnectionId_++,a=this.lastSessionId;let r=!1,l=null;const o=function(){l?l.close():(r=!0,i())},c=function(u){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:o,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);r?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new LO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{tt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(qO)},a))}catch(u){this.log_("Failed to get token: "+u),r||(this.repoInfo_.nodeAdmin&&tt(u),o())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gu(this.interruptReasons_)&&(this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(a=>Ih(a)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ie(e).toString();let s;if(this.listens.has(i)){const a=this.listens.get(i);s=a.get(n),a.delete(n),a.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Am&&(this.reconnectDelay_=wm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+o0.replace(/\./g,"-")]=1,vh()?e["framework.cordova"]=1:my()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ao.getInstance().currentlyOnline();return Gu(this.interruptReasons_)&&e}}ln.nextPersistentConnectionId_=0;ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new P(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new P(Us,e),s=new P(Us,n);return this.compare(i,s)!==0}minPost(){return P.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class j0 extends Ho{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return Ws(e.name,n.name)}isDefinedOn(e){throw Fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return P.MIN}maxPost(){return new P(Ri,el)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,el)}toString(){return".key"}}const Cs=new j0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,i,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=n?i(e.key,n):1,s&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,i,s,a){this.key=e,this.value=n,this.color=i??be.RED,this.left=s??Ge.EMPTY_NODE,this.right=a??Ge.EMPTY_NODE}copy(e,n,i,s,a){return new be(e??this.key,n??this.value,i??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const a=i(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):a===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class GO{copy(e,n,i,s,a){return this}insert(e,n,i){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new GO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t,e){return Ws(t.name,e.name)}function Lh(t,e){return Ws(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;function FO(t){nf=t}const z0=function(t){return typeof t=="number"?"number:"+d0(t):"string:"+t},H0=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gn(e,".sv"),"Priority must be a string or number.")}else w(t===nf||t.isEmpty(),"priority of unexpected type.");w(t===nf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm;class Ee{static set __childrenNodeConstructor(e){Rm=e}static get __childrenNodeConstructor(){return Rm}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),H0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:B(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=B(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+z0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=d0(this.value_):e+=this.value_,this.lazyHash_=u0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ee.VALUE_TYPE_ORDER.indexOf(n),a=Ee.VALUE_TYPE_ORDER.indexOf(i);return w(s>=0,"Unknown leaf type: "+n),w(a>=0,"Unknown leaf type: "+i),s===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B0,P0;function KO(t){B0=t}function XO(t){P0=t}class QO extends Ho{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),a=i.compareTo(s);return a===0?Ws(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return P.MIN}maxPost(){return new P(Ri,new Ee("[PRIORITY-POST]",P0))}makePost(e,n){const i=B0(e);return new P(n,new Ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ue=new QO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=Math.log(2);class $O{constructor(e){const n=a=>parseInt(Math.log(a)/WO,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ro=function(t,e,n,i){t.sort(e);const s=function(o,c){const f=c-o;let u,h;if(f===0)return null;if(f===1)return u=t[o],h=n?n(u):u,new be(h,u.node,be.BLACK,null,null);{const p=parseInt(f/2,10)+o,v=s(o,p),S=s(p+1,c);return u=t[p],h=n?n(u):u,new be(h,u.node,be.BLACK,v,S)}},a=function(o){let c=null,f=null,u=t.length;const h=function(v,S){const T=u-v,m=u;u-=v;const d=s(T+1,m),_=t[T],y=n?n(_):_;p(new be(y,_.node,S,null,d))},p=function(v){c?(c.left=v,c=v):(f=v,c=v)};for(let v=0;v<o.count;++v){const S=o.nextBitIsOne(),T=Math.pow(2,o.count-(v+1));S?h(T,be.BLACK):(h(T,be.BLACK),h(T,be.RED))}return f},r=new $O(t.length),l=a(r);return new Ge(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;const Ki={};class sn{static get Default(){return w(Ki&&Ue,"ChildrenNode.ts has not been loaded"),Pc=Pc||new sn({".priority":Ki},{".priority":Ue}),Pc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return gn(this.indexSet_,e.toString())}addIndex(e,n){w(e!==Cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const a=n.getIterator(P.Wrap);let r=a.getNext();for(;r;)s=s||e.isDefinedOn(r.node),i.push(r),r=a.getNext();let l;s?l=ro(i,e.getCompare()):l=Ki;const o=e.toString(),c=Object.assign({},this.indexSet_);c[o]=e;const f=Object.assign({},this.indexes_);return f[o]=l,new sn(f,c)}addToIndexes(e,n){const i=$l(this.indexes_,(s,a)=>{const r=ks(this.indexSet_,a);if(w(r,"Missing index implementation for "+a),s===Ki)if(r.isDefinedOn(e.node)){const l=[],o=n.getIterator(P.Wrap);let c=o.getNext();for(;c;)c.name!==e.name&&l.push(c),c=o.getNext();return l.push(e),ro(l,r.getCompare())}else return Ki;else{const l=n.get(e.name);let o=s;return l&&(o=o.remove(new P(e.name,l))),o.insert(e,e.node)}});return new sn(i,this.indexSet_)}removeFromIndexes(e,n){const i=$l(this.indexes_,s=>{if(s===Ki)return s;{const a=n.get(e.name);return a?s.remove(new P(e.name,a)):s}});return new sn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class G{static get EMPTY_NODE(){return ca||(ca=new G(new Ge(Lh),null,sn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&H0(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ca:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new P(e,n);let s,a;n.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(i,this.children_));const r=s.isEmpty()?ca:this.priorityNode_;return new G(s,r,a)}}updateChild(e,n){const i=B(e);if(i===null)return n;{w(B(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ee(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,a=!0;if(this.forEachChild(Ue,(r,l)=>{n[r]=l.val(e),i++,a&&G.INTEGER_REGEXP_.test(r)?s=Math.max(s,Number(r)):a=!1}),!e&&a&&s<2*i){const r=[];for(const l in n)r[l]=n[l];return r}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+z0(this.getPriority().val())+":"),this.forEachChild(Ue,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":u0(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const a=s.getPredecessorKey(new P(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new P(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new P(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,P.Wrap);let a=s.peek();for(;a!=null&&n.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let a=s.peek();for(;a!=null&&n.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===Cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ue),s=n.getIterator(Ue);let a=i.getNext(),r=s.getNext();for(;a&&r;){if(a.name!==r.name||!a.node.equals(r.node))return!1;a=i.getNext(),r=s.getNext()}return a===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===Cs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZO extends G{constructor(){super(new Ge(Lh),G.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Dr=new ZO;Object.defineProperties(P,{MIN:{value:new P(Us,G.EMPTY_NODE)},MAX:{value:new P(Ri,Dr)}});j0.__EMPTY_NODE=G.EMPTY_NODE;Ee.__childrenNodeConstructor=G;FO(Dr);XO(Dr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=!0;function xe(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,xe(e))}if(!(t instanceof Array)&&JO){const n=[];let i=!1;if(vt(t,(r,l)=>{if(r.substring(0,1)!=="."){const o=xe(l);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new P(r,o)))}}),n.length===0)return G.EMPTY_NODE;const a=ro(n,YO,r=>r.name,Lh);if(i){const r=ro(n,Ue.getCompare());return new G(a,xe(e),new sn({".priority":r},{".priority":Ue}))}else return new G(a,xe(e),sn.Default)}else{let n=G.EMPTY_NODE;return vt(t,(i,s)=>{if(gn(t,i)&&i.substring(0,1)!=="."){const a=xe(s);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(i,a))}}),n.updatePriority(xe(e))}}KO(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN extends Ho{constructor(e){super(),this.indexPath_=e,w(!H(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),a=i.compareTo(s);return a===0?Ws(e.name,n.name):a}makePost(e,n){const i=xe(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(n,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new P(Ri,e)}toString(){return x0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN extends Ho{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ws(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,n){const i=xe(e);return new P(n,i)}toString(){return".value"}}const nN=new tN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){return{type:"value",snapshotNode:t}}function sN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function aN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Om(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Uh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===nN?n="$value":t.index_===Cs?n="$key":(w(t.index_ instanceof eN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ne(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ne(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ne(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Im(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends I0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Nr("p:rest:"),this.listens_={}}listen(e,n,i,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const r=lo.getListenId_(e,i),l={};this.listens_[r]=l;const o=Nm(e._queryParams);this.restRequest_(a+".json",o,(c,f)=>{let u=f;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(a,u,!1,i),ks(this.listens_,r)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=lo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Nm(e._queryParams),i=e._path.toString(),s=new _h;return this.restRequest_(i+".json",n,(a,r)=>{let l=r;a===404&&(l=null,a=null),a===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(n.auth=s.accessToken),a&&a.token&&(n.ac=a.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ks(n);this.log_("Sending REST request for "+r);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+r+" received. status:",l.status,"response:",l.responseText);let o=null;if(l.status>=200&&l.status<300){try{o=ir(l.responseText)}catch{tt("Failed to parse JSON response for "+r+": "+l.responseText)}i(null,o)}else l.status!==401&&l.status!==404&&tt("Got unsuccessful REST response for "+r+" Status: "+l.status),i(l.status);i=null}},l.open("GET",r,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return{value:null,children:new Map}}function V0(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=B(e);t.children.has(i)||t.children.set(i,oo());const s=t.children.get(i);e=ee(e),V0(s,e,n)}}function sf(t,e,n){t.value!==null?n(e,t.value):oN(t,(i,s)=>{const a=new ie(e.toString()+"/"+i);sf(s,a,n)})}function oN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&vt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=10*1e3,uN=30*1e3,fN=5*60*1e3;class hN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cN(e);const i=Dm+(uN-Dm)*Math.random();Ua(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;vt(e,(s,a)=>{a>0&&gn(this.statsToReport_,s)&&(n[s]=a,i=!0)}),i&&this.server_.reportStats(n),Ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*fN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function q0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function G0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Y0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Dt.ACK_USER_WRITE,this.source=q0()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new co(X(),n,this.revert)}}else return w(B(this.path)===e,"operationForChild called for unrelated child."),new co(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Dt.OVERWRITE}operationForChild(e){return H(this.path)?new Oi(this.source,X(),this.snap.getImmediateChild(e)):new Oi(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Dt.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Oi(this.source,X(),n.value):new or(this.source,X(),n)}else return w(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new or(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function dN(t,e,n,i){const s=[],a=[];return e.forEach(r=>{r.type==="child_changed"&&t.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&a.push(rN(r.childName,r.snapshotNode))}),ua(t,s,"child_removed",e,i,n),ua(t,s,"child_added",e,i,n),ua(t,s,"child_moved",a,i,n),ua(t,s,"child_changed",e,i,n),ua(t,s,"value",e,i,n),s}function ua(t,e,n,i,s,a){const r=i.filter(l=>l.type===n);r.sort((l,o)=>mN(t,l,o)),r.forEach(l=>{const o=pN(t,l,a);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(o,t.query_))})})}function pN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mN(t,e,n){if(e.childName==null||n.childName==null)throw Fs("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),s=new P(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){return{eventCache:t,serverCache:e}}function ja(t,e,n,i){return F0(new jh(e,n,i),t.serverCache)}function K0(t,e,n,i){return F0(t.eventCache,new jh(e,n,i))}function af(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ni(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;const gN=()=>(Vc||(Vc=new Ge(nO)),Vc);class J{static fromObject(e){let n=new J(null);return vt(e,(i,s)=>{n=n.set(new ie(i),s)}),n}constructor(e,n=gN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(H(e))return null;{const i=B(e),s=this.children.get(i);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ee(e),n);return a!=null?{path:Ce(new ie(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=B(e),i=this.children.get(n);return i!==null?i.subtree(ee(e)):new J(null)}}set(e,n){if(H(e))return new J(n,this.children);{const i=B(e),a=(this.children.get(i)||new J(null)).set(ee(e),n),r=this.children.insert(i,a);return new J(this.value,r)}}remove(e){if(H(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=B(e),i=this.children.get(n);if(i){const s=i.remove(ee(e));let a;return s.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,s),this.value===null&&a.isEmpty()?new J(null):new J(this.value,a)}else return this}}get(e){if(H(e))return this.value;{const n=B(e),i=this.children.get(n);return i?i.get(ee(e)):null}}setTree(e,n){if(H(e))return n;{const i=B(e),a=(this.children.get(i)||new J(null)).setTree(ee(e),n);let r;return a.isEmpty()?r=this.children.remove(i):r=this.children.insert(i,a),new J(this.value,r)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,a)=>{i[s]=a.fold_(Ce(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(H(e))return null;{const a=B(e),r=this.children.get(a);return r?r.findOnPath_(ee(e),Ce(n,a),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,i){if(H(e))return this;{this.value&&i(n,this.value);const s=B(e),a=this.children.get(s);return a?a.foreachOnPath_(ee(e),Ce(n,s),i):new J(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ce(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new J(null))}}function za(t,e,n){if(H(e))return new Ct(new J(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let a=i.value;const r=pt(s,e);return a=a.updateChild(r,n),new Ct(t.writeTree_.set(s,a))}else{const s=new J(n),a=t.writeTree_.setTree(e,s);return new Ct(a)}}}function Mm(t,e,n){let i=t;return vt(n,(s,a)=>{i=za(i,Ce(e,s),a)}),i}function xm(t,e){if(H(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Ct(n)}}function rf(t,e){return qi(t,e)!=null}function qi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function km(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(i,s)=>{e.push(new P(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function Kn(t,e){if(H(e))return t;{const n=qi(t,e);return n!=null?new Ct(new J(n)):new Ct(t.writeTree_.subtree(e))}}function lf(t){return t.writeTree_.isEmpty()}function js(t,e){return X0(X(),t.writeTree_,e)}function X0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(w(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):n=X0(Ce(t,s),a,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ce(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e){return e1(e,t)}function _N(t,e,n,i,s){w(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=za(t.visibleWrites,e,n)),t.lastWriteId=i}function vN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function yN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,a=!1,r=t.allWrites.length-1;for(;s&&r>=0;){const l=t.allWrites[r];l.visible&&(r>=n&&EN(l,i.path)?s=!1:bt(i.path,l.path)&&(a=!0)),r--}if(s){if(a)return SN(t),!0;if(i.snap)t.visibleWrites=xm(t.visibleWrites,i.path);else{const l=i.children;vt(l,o=>{t.visibleWrites=xm(t.visibleWrites,Ce(i.path,o))})}return!0}else return!1}function EN(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Ce(t.path,n),e))return!0;return!1}function SN(t){t.visibleWrites=W0(t.allWrites,bN,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bN(t){return t.visible}function W0(t,e,n){let i=Ct.empty();for(let s=0;s<t.length;++s){const a=t[s];if(e(a)){const r=a.path;let l;if(a.snap)bt(n,r)?(l=pt(n,r),i=za(i,l,a.snap)):bt(r,n)&&(l=pt(r,n),i=za(i,X(),a.snap.getChild(l)));else if(a.children){if(bt(n,r))l=pt(n,r),i=Mm(i,l,a.children);else if(bt(r,n))if(l=pt(r,n),H(l))i=Mm(i,X(),a.children);else{const o=ks(a.children,B(l));if(o){const c=o.getChild(ee(l));i=za(i,X(),c)}}}else throw Fs("WriteRecord should have .snap or .children")}}return i}function $0(t,e,n,i,s){if(!i&&!s){const a=qi(t.visibleWrites,e);if(a!=null)return a;{const r=Kn(t.visibleWrites,e);if(lf(r))return n;if(n==null&&!rf(r,X()))return null;{const l=n||G.EMPTY_NODE;return js(r,l)}}}else{const a=Kn(t.visibleWrites,e);if(!s&&lf(a))return n;if(!s&&n==null&&!rf(a,X()))return null;{const r=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(bt(c.path,e)||bt(e,c.path))},l=W0(t.allWrites,r,e),o=n||G.EMPTY_NODE;return js(l,o)}}}function TN(t,e,n){let i=G.EMPTY_NODE;const s=qi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ue,(a,r)=>{i=i.updateImmediateChild(a,r)}),i;if(n){const a=Kn(t.visibleWrites,e);return n.forEachChild(Ue,(r,l)=>{const o=js(Kn(a,new ie(r)),l);i=i.updateImmediateChild(r,o)}),km(a).forEach(r=>{i=i.updateImmediateChild(r.name,r.node)}),i}else{const a=Kn(t.visibleWrites,e);return km(a).forEach(r=>{i=i.updateImmediateChild(r.name,r.node)}),i}}function CN(t,e,n,i,s){w(i||s,"Either existingEventSnap or existingServerSnap must exist");const a=Ce(e,n);if(rf(t.visibleWrites,a))return null;{const r=Kn(t.visibleWrites,a);return lf(r)?s.getChild(n):js(r,s.getChild(n))}}function wN(t,e,n,i){const s=Ce(e,n),a=qi(t.visibleWrites,s);if(a!=null)return a;if(i.isCompleteForChild(n)){const r=Kn(t.visibleWrites,s);return js(r,i.getNode().getImmediateChild(n))}else return null}function AN(t,e){return qi(t.visibleWrites,e)}function RN(t,e,n,i,s,a,r){let l;const o=Kn(t.visibleWrites,e),c=qi(o,X());if(c!=null)l=c;else if(n!=null)l=js(o,n);else return[];if(l=l.withIndex(r),!l.isEmpty()&&!l.isLeafNode()){const f=[],u=r.getCompare(),h=a?l.getReverseIteratorFrom(i,r):l.getIteratorFrom(i,r);let p=h.getNext();for(;p&&f.length<s;)u(p,i)!==0&&f.push(p),p=h.getNext();return f}else return[]}function ON(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function of(t,e,n,i){return $0(t.writeTree,t.treePath,e,n,i)}function Z0(t,e){return TN(t.writeTree,t.treePath,e)}function Lm(t,e,n,i){return CN(t.writeTree,t.treePath,e,n,i)}function uo(t,e){return AN(t.writeTree,Ce(t.treePath,e))}function NN(t,e,n,i,s,a){return RN(t.writeTree,t.treePath,e,n,i,s,a)}function zh(t,e,n){return wN(t.writeTree,t.treePath,e,n)}function J0(t,e){return e1(Ce(t.treePath,e),t.writeTree)}function e1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const a=s.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(i,Om(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(i,aN(i,s.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(i,sN(i,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(i,Om(i,e.snapshotNode,s.oldSnap));else throw Fs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const t1=new DN;class Hh{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new jh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zh(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ni(this.viewCache_),a=NN(this.writes_,s,n,1,i,e);return a.length===0?null:a[0]}}function MN(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xN(t,e,n,i,s){const a=new IN;let r,l;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?r=cf(t,e,c.path,c.snap,i,s,a):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),r=fo(t,e,c.path,c.snap,i,s,l,a))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?r=LN(t,e,c.path,c.children,i,s,a):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),r=uf(t,e,c.path,c.children,i,s,l,a))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?r=zN(t,e,c.path,i,s,a):r=UN(t,e,c.path,c.affectedTree,i,s,a)}else if(n.type===Dt.LISTEN_COMPLETE)r=jN(t,e,n.path,i,a);else throw Fs("Unknown operation type: "+n.type);const o=a.getChanges();return kN(e,r,o),{viewCache:r,changes:o}}function kN(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=af(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&n.push(iN(af(e)))}}function n1(t,e,n,i,s,a){const r=e.eventCache;if(uo(i,n)!=null)return e;{let l,o;if(H(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ni(e),f=c instanceof G?c:G.EMPTY_NODE,u=Z0(i,f);l=t.filter.updateFullNode(e.eventCache.getNode(),u,a)}else{const c=of(i,Ni(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,a)}else{const c=B(n);if(c===".priority"){w(Zn(n)===1,"Can't have a priority with additional path components");const f=r.getNode();o=e.serverCache.getNode();const u=Lm(i,n,f,o);u!=null?l=t.filter.updatePriority(f,u):l=r.getNode()}else{const f=ee(n);let u;if(r.isCompleteForChild(c)){o=e.serverCache.getNode();const h=Lm(i,n,r.getNode(),o);h!=null?u=r.getNode().getImmediateChild(c).updateChild(f,h):u=r.getNode().getImmediateChild(c)}else u=zh(i,c,e.serverCache);u!=null?l=t.filter.updateChild(r.getNode(),c,u,f,s,a):l=r.getNode()}}return ja(e,l,r.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function fo(t,e,n,i,s,a,r,l){const o=e.serverCache;let c;const f=r?t.filter:t.filter.getIndexedFilter();if(H(n))c=f.updateFullNode(o.getNode(),i,null);else if(f.filtersNodes()&&!o.isFiltered()){const p=o.getNode().updateChild(n,i);c=f.updateFullNode(o.getNode(),p,null)}else{const p=B(n);if(!o.isCompleteForPath(n)&&Zn(n)>1)return e;const v=ee(n),T=o.getNode().getImmediateChild(p).updateChild(v,i);p===".priority"?c=f.updatePriority(o.getNode(),T):c=f.updateChild(o.getNode(),p,T,v,t1,null)}const u=K0(e,c,o.isFullyInitialized()||H(n),f.filtersNodes()),h=new Hh(s,u,a);return n1(t,u,n,s,h,l)}function cf(t,e,n,i,s,a,r){const l=e.eventCache;let o,c;const f=new Hh(s,e,a);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,r),o=ja(e,c,!0,t.filter.filtersNodes());else{const u=B(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),o=ja(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=ee(n),p=l.getNode().getImmediateChild(u);let v;if(H(h))v=i;else{const S=f.getCompleteChild(u);S!=null?M0(h)===".priority"&&S.getChild(k0(h)).isEmpty()?v=S:v=S.updateChild(h,i):v=G.EMPTY_NODE}if(p.equals(v))o=e;else{const S=t.filter.updateChild(l.getNode(),u,v,h,f,r);o=ja(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function Um(t,e){return t.eventCache.isCompleteForChild(e)}function LN(t,e,n,i,s,a,r){let l=e;return i.foreach((o,c)=>{const f=Ce(n,o);Um(e,B(f))&&(l=cf(t,l,f,c,s,a,r))}),i.foreach((o,c)=>{const f=Ce(n,o);Um(e,B(f))||(l=cf(t,l,f,c,s,a,r))}),l}function jm(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function uf(t,e,n,i,s,a,r,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,c;H(n)?c=i:c=new J(null).setTree(n,i);const f=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(f.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),v=jm(t,p,h);o=fo(t,o,new ie(u),v,s,a,r,l)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!f.hasChild(u)&&!p){const v=e.serverCache.getNode().getImmediateChild(u),S=jm(t,v,h);o=fo(t,o,new ie(u),S,s,a,r,l)}}),o}function UN(t,e,n,i,s,a,r){if(uo(s,n)!=null)return e;const l=e.serverCache.isFiltered(),o=e.serverCache;if(i.value!=null){if(H(n)&&o.isFullyInitialized()||o.isCompleteForPath(n))return fo(t,e,n,o.getNode().getChild(n),s,a,l,r);if(H(n)){let c=new J(null);return o.getNode().forEachChild(Cs,(f,u)=>{c=c.set(new ie(f),u)}),uf(t,e,n,c,s,a,l,r)}else return e}else{let c=new J(null);return i.foreach((f,u)=>{const h=Ce(n,f);o.isCompleteForPath(h)&&(c=c.set(f,o.getNode().getChild(h)))}),uf(t,e,n,c,s,a,l,r)}}function jN(t,e,n,i,s){const a=e.serverCache,r=K0(e,a.getNode(),a.isFullyInitialized()||H(n),a.isFiltered());return n1(t,r,n,i,t1,s)}function zN(t,e,n,i,s,a){let r;if(uo(i,n)!=null)return e;{const l=new Hh(i,e,s),o=e.eventCache.getNode();let c;if(H(n)||B(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=of(i,Ni(e));else{const u=e.serverCache.getNode();w(u instanceof G,"serverChildren would be complete if leaf node"),f=Z0(i,u)}f=f,c=t.filter.updateFullNode(o,f,a)}else{const f=B(n);let u=zh(i,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=o.getImmediateChild(f)),u!=null?c=t.filter.updateChild(o,f,u,ee(n),l,a):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(o,f,G.EMPTY_NODE,ee(n),l,a):c=o,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=of(i,Ni(e)),r.isLeafNode()&&(c=t.filter.updateFullNode(c,r,a)))}return r=e.serverCache.isFullyInitialized()||uo(i,X())!=null,ja(e,c,r,t.filter.filtersNodes())}}function HN(t,e){const n=Ni(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function zm(t,e,n,i){e.type===Dt.MERGE&&e.source.queryId!==null&&(w(Ni(t.viewCache_),"We should always have a full cache before handling merges"),w(af(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,a=xN(t.processor_,s,e,n,i);return MN(t.processor_,a.viewCache),w(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=a.viewCache,BN(t,a.changes,a.viewCache.eventCache.getNode())}function BN(t,e,n,i){const s=t.eventRegistrations_;return dN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;function PN(t){w(!Hm,"__referenceConstructor has already been defined"),Hm=t}function Bh(t,e,n,i){const s=e.source.queryId;if(s!==null){const a=t.views.get(s);return w(a!=null,"SyncTree gave us an op for an invalid query."),zm(a,e,n,i)}else{let a=[];for(const r of t.views.values())a=a.concat(zm(r,e,n,i));return a}}function Ph(t,e){let n=null;for(const i of t.views.values())n=n||HN(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;function VN(t){w(!Bm,"__referenceConstructor has already been defined"),Bm=t}class Pm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=ON(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qN(t,e,n,i,s){return _N(t.pendingWriteTree_,e,n,i,s),s?Po(t,new Oi(q0(),e,n)):[]}function fs(t,e,n=!1){const i=vN(t.pendingWriteTree_,e);if(yN(t.pendingWriteTree_,e)){let a=new J(null);return i.snap!=null?a=a.set(X(),!0):vt(i.children,r=>{a=a.set(new ie(r),!0)}),Po(t,new co(i.path,a,n))}else return[]}function Bo(t,e,n){return Po(t,new Oi(G0(),e,n))}function GN(t,e,n){const i=J.fromObject(n);return Po(t,new or(G0(),e,i))}function YN(t,e,n,i){const s=r1(t,i);if(s!=null){const a=l1(s),r=a.path,l=a.queryId,o=pt(r,e),c=new Oi(Y0(l),o,n);return o1(t,r,c)}else return[]}function FN(t,e,n,i){const s=r1(t,i);if(s){const a=l1(s),r=a.path,l=a.queryId,o=pt(r,e),c=J.fromObject(n),f=new or(Y0(l),o,c);return o1(t,r,f)}else return[]}function i1(t,e,n){const s=t.pendingWriteTree_,a=t.syncPointTree_.findOnPath(e,(r,l)=>{const o=pt(r,e),c=Ph(l,o);if(c)return c});return $0(s,e,a,n,!0)}function Po(t,e){return s1(e,t.syncPointTree_,null,Q0(t.pendingWriteTree_,X()))}function s1(t,e,n,i){if(H(t.path))return a1(t,e,n,i);{const s=e.get(X());n==null&&s!=null&&(n=Ph(s,X()));let a=[];const r=B(t.path),l=t.operationForChild(r),o=e.children.get(r);if(o&&l){const c=n?n.getImmediateChild(r):null,f=J0(i,r);a=a.concat(s1(l,o,c,f))}return s&&(a=a.concat(Bh(s,t,i,n))),a}}function a1(t,e,n,i){const s=e.get(X());n==null&&s!=null&&(n=Ph(s,X()));let a=[];return e.children.inorderTraversal((r,l)=>{const o=n?n.getImmediateChild(r):null,c=J0(i,r),f=t.operationForChild(r);f&&(a=a.concat(a1(f,l,o,c)))}),s&&(a=a.concat(Bh(s,t,i,n))),a}function r1(t,e){return t.tagToQueryMap.get(e)}function l1(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function o1(t,e,n){const i=t.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const s=Q0(t.pendingWriteTree_,e);return Bh(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vh(n)}node(){return this.node_}}class qh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new qh(this.syncTree_,n)}node(){return i1(this.syncTree_,this.path_)}}const KN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vm=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QN(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},QN=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const s=e.node();if(w(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return typeof r!="number"?i:r+i},WN=function(t,e,n,i){return Gh(e,new qh(n,t),i)},$N=function(t,e,n){return Gh(t,new Vh(e),n)};function Gh(t,e,n){const i=t.getPriority().val(),s=Vm(i,e.getImmediateChild(".priority"),n);let a;if(t.isLeafNode()){const r=t,l=Vm(r.getValue(),e,n);return l!==r.getValue()||s!==r.getPriority().val()?new Ee(l,xe(s)):t}else{const r=t;return a=r,s!==r.getPriority().val()&&(a=a.updatePriority(new Ee(s))),r.forEachChild(Ue,(l,o)=>{const c=Gh(o,e.getImmediateChild(l),n);c!==o&&(a=a.updateImmediateChild(l,c))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Fh(t,e){let n=e instanceof ie?e:new ie(e),i=t,s=B(n);for(;s!==null;){const a=ks(i.node.children,s)||{children:{},childCount:0};i=new Yh(s,i,a),n=ee(n),s=B(n)}return i}function $s(t){return t.node.value}function c1(t,e){t.node.value=e,ff(t)}function u1(t){return t.node.childCount>0}function ZN(t){return $s(t)===void 0&&!u1(t)}function Vo(t,e){vt(t.node.children,(n,i)=>{e(new Yh(n,t,i))})}function f1(t,e,n,i){n&&!i&&e(t),Vo(t,s=>{f1(s,e,!0,i)}),n&&i&&e(t)}function JN(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Mr(t){return new ie(t.parent===null?t.name:Mr(t.parent)+"/"+t.name)}function ff(t){t.parent!==null&&e2(t.parent,t.name,t)}function e2(t,e,n){const i=ZN(n),s=gn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ff(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ff(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=/[\[\].#$\/\u0000-\u001F\u007F]/,n2=/[\[\].#$\u0000-\u001F\u007F]/,qc=10*1024*1024,h1=function(t){return typeof t=="string"&&t.length!==0&&!t2.test(t)},i2=function(t){return typeof t=="string"&&t.length!==0&&!n2.test(t)},s2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),i2(t)},d1=function(t,e,n){const i=n instanceof ie?new jO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+oi(i));if(typeof e=="function")throw new Error(t+"contains a function "+oi(i)+" with contents = "+e.toString());if(f0(e))throw new Error(t+"contains "+e.toString()+" "+oi(i));if(typeof e=="string"&&e.length>qc/3&&ko(e)>qc)throw new Error(t+"contains a string greater than "+qc+" utf8 bytes "+oi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(vt(e,(r,l)=>{if(r===".value")s=!0;else if(r!==".priority"&&r!==".sv"&&(a=!0,!h1(r)))throw new Error(t+" contains an invalid key ("+r+") "+oi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zO(i,r),d1(t,l,i),HO(i)}),s&&a)throw new Error(t+' contains ".value" child '+oi(i)+" in addition to actual children.")}},a2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!h1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!s2(n))throw new Error(yC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l2(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],a=s.getPath();n!==null&&!L0(a,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(s)}n&&t.eventLists_.push(n)}function Gi(t,e,n){l2(t,n),o2(t,i=>bt(i,e)||bt(e,i))}function o2(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const a=s.path;e(a)?(c2(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function c2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();La&&Me("event: "+n.toString()),Ir(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="repo_interrupt",f2=25;class h2{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oo(),this.transactionQueueTree_=new Yh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function d2(t,e,n){if(t.stats_=Mh(t.repoInfo_),t.forceRestClient_||oO())t.server_=new lo(t.repoInfo_,(i,s,a,r)=>{qm(t,i,s,a,r)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ln(t.repoInfo_,e,(i,s,a,r)=>{qm(t,i,s,a,r)},i=>{Gm(t,i)},i=>{m2(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=dO(t.repoInfo_,()=>new hN(t.stats_,t.server_)),t.infoData_=new lN,t.infoSyncTree_=new Pm({startListening:(i,s,a,r)=>{let l=[];const o=t.infoData_.getNode(i._path);return o.isEmpty()||(l=Bo(t.infoSyncTree_,i._path,o),setTimeout(()=>{r("ok")},0)),l},stopListening:()=>{}}),Kh(t,"connected",!1),t.serverSyncTree_=new Pm({startListening:(i,s,a,r)=>(t.server_.listen(i,a,s,(l,o)=>{const c=r(l,o);Gi(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function p2(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function p1(t){return KN({timestamp:p2(t)})}function qm(t,e,n,i,s){t.dataUpdateCount++;const a=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let r=[];if(s)if(i){const o=$l(n,c=>xe(c));r=FN(t.serverSyncTree_,a,o,s)}else{const o=xe(n);r=YN(t.serverSyncTree_,a,o,s)}else if(i){const o=$l(n,c=>xe(c));r=GN(t.serverSyncTree_,a,o)}else{const o=xe(n);r=Bo(t.serverSyncTree_,a,o)}let l=a;r.length>0&&(l=Qh(t,a)),Gi(t.eventQueue_,l,r)}function Gm(t,e){Kh(t,"connected",e),e===!1&&_2(t)}function m2(t,e){vt(e,(n,i)=>{Kh(t,n,i)})}function Kh(t,e,n){const i=new ie("/.info/"+e),s=xe(n);t.infoData_.updateSnapshot(i,s);const a=Bo(t.infoSyncTree_,i,s);Gi(t.eventQueue_,i,a)}function g2(t){return t.nextWriteId_++}function _2(t){m1(t,"onDisconnectEvents");const e=p1(t),n=oo();sf(t.onDisconnect_,X(),(s,a)=>{const r=WN(s,a,t.serverSyncTree_,e);V0(n,s,r)});let i=[];sf(n,X(),(s,a)=>{i=i.concat(Bo(t.serverSyncTree_,s,a));const r=S2(t,s);Qh(t,r)}),t.onDisconnect_=oo(),Gi(t.eventQueue_,X(),i)}function v2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(u2)}function m1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function g1(t,e,n){return i1(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function Xh(t,e=t.transactionQueueTree_){if(e||qo(t,e),$s(e)){const n=v1(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&y2(t,Mr(e),n)}else u1(e)&&Vo(e,n=>{Xh(t,n)})}function y2(t,e,n){const i=n.map(c=>c.currentWriteId),s=g1(t,e,i);let a=s;const r=s.hash();for(let c=0;c<n.length;c++){const f=n[c];w(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=pt(e,f.path);a=a.updateChild(u,f.currentOutputSnapshotRaw)}const l=a.val(!0),o=e;t.server_.put(o.toString(),l,c=>{m1(t,"transaction put response",{path:o.toString(),status:c});let f=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(fs(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();qo(t,Fh(t.transactionQueueTree_,e)),Xh(t,t.transactionQueueTree_),Gi(t.eventQueue_,e,f);for(let h=0;h<u.length;h++)Ir(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{tt("transaction at "+o.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Qh(t,e)}},r)}function Qh(t,e){const n=_1(t,e),i=Mr(n),s=v1(t,n);return E2(t,s,i),i}function E2(t,e,n){if(e.length===0)return;const i=[];let s=[];const r=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const o=e[l],c=pt(n,o.path);let f=!1,u;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,u=o.abortReason,s=s.concat(fs(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=f2)f=!0,u="maxretry",s=s.concat(fs(t.serverSyncTree_,o.currentWriteId,!0));else{const h=g1(t,o.path,r);o.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){d1("transaction failed: Data returned ",p,o.path);let v=xe(p);typeof p=="object"&&p!=null&&gn(p,".priority")||(v=v.updatePriority(h.getPriority()));const T=o.currentWriteId,m=p1(t),d=$N(v,h,m);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=d,o.currentWriteId=g2(t),r.splice(r.indexOf(T),1),s=s.concat(qN(t.serverSyncTree_,o.path,d,o.currentWriteId,o.applyLocally)),s=s.concat(fs(t.serverSyncTree_,T,!0))}else f=!0,u="nodata",s=s.concat(fs(t.serverSyncTree_,o.currentWriteId,!0))}Gi(t.eventQueue_,n,s),s=[],f&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(u),!1,null))))}qo(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)Ir(i[l]);Xh(t,t.transactionQueueTree_)}function _1(t,e){let n,i=t.transactionQueueTree_;for(n=B(e);n!==null&&$s(i)===void 0;)i=Fh(i,n),e=ee(e),n=B(e);return i}function v1(t,e){const n=[];return y1(t,e,n),n.sort((i,s)=>i.order-s.order),n}function y1(t,e,n){const i=$s(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Vo(e,s=>{y1(t,s,n)})}function qo(t,e){const n=$s(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,c1(e,n.length>0?n:void 0)}Vo(e,i=>{qo(t,i)})}function S2(t,e){const n=Mr(_1(t,e)),i=Fh(t.transactionQueueTree_,e);return JN(i,s=>{Gc(t,s)}),Gc(t,i),f1(i,s=>{Gc(t,s)}),n}function Gc(t,e){const n=$s(e);if(n){const i=[];let s=[],a=-1;for(let r=0;r<n.length;r++)n[r].status===3||(n[r].status===1?(w(a===r-1,"All SENT items should be at beginning of queue."),a=r,n[r].status=3,n[r].abortReason="set"):(w(n[r].status===0,"Unexpected transaction status in abort"),n[r].unwatcher(),s=s.concat(fs(t.serverSyncTree_,n[r].currentWriteId,!0)),n[r].onComplete&&i.push(n[r].onComplete.bind(null,new Error("set"),!1,null))));a===-1?c1(e,void 0):n.length=a+1,Gi(t.eventQueue_,Mr(e),s);for(let r=0;r<i.length;r++)Ir(i[r])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function T2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ym=function(t,e){const n=C2(t),i=n.namespace;n.domain==="firebase.com"&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new T0(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ie(n.pathString)}},C2=function(t){let e="",n="",i="",s="",a="",r=!0,l="https",o=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(s=b2(t.substring(f,u)));const h=T2(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(r=l==="https"||l==="wss",o=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");i=e.substring(0,v).toLowerCase(),n=e.substring(v+1),a=i}"ns"in h&&(a=h.ns)}return{host:e,port:o,domain:n,subdomain:i,secure:r,scheme:l,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return H(this._path)?null:M0(this._path)}get ref(){return new Zs(this._repo,this._path)}get _queryIdentifier(){const e=Im(this._queryParams),n=Ih(e);return n==="{}"?"default":n}get _queryObject(){return Im(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Wh))return!1;const n=this._repo===e._repo,i=L0(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+UO(this._path)}}class Zs extends Wh{constructor(e,n){super(e,n,new Uh,!1)}get parent(){const e=k0(this._path);return e===null?null:new Zs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}PN(Zs);VN(Zs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="FIREBASE_DATABASE_EMULATOR_HOST",hf={};let A2=!1;function R2(t,e,n,i){t.repoInfo_=new T0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function O2(t,e,n,i,s){let a=i||t.options.databaseURL;a===void 0&&(t.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),a=`${t.options.projectId}-default-rtdb.firebaseio.com`);let r=Ym(a,s),l=r.repoInfo,o;typeof process<"u"&&fm&&(o=fm[w2]),o?(a=`http://${o}?ns=${l.namespace}`,r=Ym(a,s),l=r.repoInfo):r.repoInfo.secure;const c=new uO(t.name,t.options,e);a2("Invalid Firebase Database URL",r),H(r.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=I2(l,t,c,new cO(t.name,n));return new D2(f,t)}function N2(t,e){const n=hf[e];(!n||n[t.key]!==t)&&pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),v2(t),delete n[t.key]}function I2(t,e,n,i){let s=hf[e.name];s||(s={},hf[e.name]=s);let a=s[t.toURLString()];return a&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new h2(t,A2,n,i),s[t.toURLString()]=a,a}class D2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(d2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zs(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(N2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pn("Cannot call "+e+" on a deleted database.")}}function M2(t=Eh(),e){const n=Pi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=aC("database");i&&x2(n,...i)}return n}function x2(t,e,n,i={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let a;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new vl(vl.OWNER);else if(i.mockUserToken){const r=typeof i.mockUserToken=="string"?i.mockUserToken:rC(i.mockUserToken,t.app.options.projectId);a=new vl(r)}R2(s,e,n,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){XR(Xs),zt(new wt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return O2(i,s,a,n)},"PUBLIC").setMultipleInstances(!0)),mt(hm,dm,t),mt(hm,dm,"esm2017")}ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};k2();const E1="@firebase/installations",$h="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=1e4,b1=`w:${$h}`,T1="FIS_v2",L2="https://firebaseinstallations.googleapis.com/v1",U2=60*60*1e3,j2="installations",z2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Bi(j2,z2,H2);function C1(t){return t instanceof Pt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1({projectId:t}){return`${L2}/projects/${t}/installations`}function A1(t){return{token:t.token,requestStatus:2,expiresIn:P2(t.expiresIn),creationTime:Date.now()}}async function R1(t,e){const i=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function O1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function B2(t,{refreshToken:e}){const n=O1(t);return n.append("Authorization",V2(e)),n}async function N1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P2(t){return Number(t.replace("s","000"))}function V2(t){return`${T1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=w1(t),s=O1(t),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const r={fid:n,authVersion:T1,appId:t.appId,sdkVersion:b1},l={method:"POST",headers:s,body:JSON.stringify(r)},o=await N1(()=>fetch(i,l));if(o.ok){const c=await o.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:A1(c.authToken)}}else throw await R1("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=/^[cdef][\w-]{21}$/,df="";function F2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=K2(t);return Y2.test(n)?n:df}catch{return df}}function K2(t){return G2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new Map;function M1(t,e){const n=Go(t);x1(n,e),X2(n,e)}function x1(t,e){const n=D1.get(t);if(n)for(const i of n)i(e)}function X2(t,e){const n=Q2();n&&n.postMessage({key:t,fid:e}),W2()}let di=null;function Q2(){return!di&&"BroadcastChannel"in self&&(di=new BroadcastChannel("[Firebase] FID Change"),di.onmessage=t=>{x1(t.data.key,t.data.fid)}),di}function W2(){D1.size===0&&di&&(di.close(),di=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="firebase-installations-database",Z2=1,Di="firebase-installations-store";let Yc=null;function Zh(){return Yc||(Yc=by($2,Z2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Di)}}})),Yc}async function ho(t,e){const n=Go(t),s=(await Zh()).transaction(Di,"readwrite"),a=s.objectStore(Di),r=await a.get(n);return await a.put(e,n),await s.done,(!r||r.fid!==e.fid)&&M1(t,e.fid),e}async function k1(t){const e=Go(t),i=(await Zh()).transaction(Di,"readwrite");await i.objectStore(Di).delete(e),await i.done}async function Yo(t,e){const n=Go(t),s=(await Zh()).transaction(Di,"readwrite"),a=s.objectStore(Di),r=await a.get(n),l=e(r);return l===void 0?await a.delete(n):await a.put(l,n),await s.done,l&&(!r||r.fid!==l.fid)&&M1(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t){let e;const n=await Yo(t.appConfig,i=>{const s=J2(i),a=eI(t,s);return e=a.registrationPromise,a.installationEntry});return n.fid===df?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J2(t){const e=t||{fid:F2(),registrationStatus:0};return L1(e)}function eI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=tI(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nI(t)}:{installationEntry:e}}async function tI(t,e){try{const n=await q2(t,e);return ho(t.appConfig,n)}catch(n){throw C1(n)&&n.customData.serverCode===409?await k1(t.appConfig):await ho(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nI(t){let e=await Fm(t.appConfig);for(;e.registrationStatus===1;)await I1(100),e=await Fm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Jh(t);return i||n}return e}function Fm(t){return Yo(t,e=>{if(!e)throw Ii.create("installation-not-found");return L1(e)})}function L1(t){return iI(t)?{fid:t.fid,registrationStatus:0}:t}function iI(t){return t.registrationStatus===1&&t.registrationTime+S1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI({appConfig:t,heartbeatServiceProvider:e},n){const i=aI(t,n),s=B2(t,n),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const r={installation:{sdkVersion:b1,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(r)},o=await N1(()=>fetch(i,l));if(o.ok){const c=await o.json();return A1(c)}else throw await R1("Generate Auth Token",o)}function aI(t,{fid:e}){return`${w1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(t,e=!1){let n;const i=await Yo(t.appConfig,a=>{if(!U1(a))throw Ii.create("not-registered");const r=a.authToken;if(!e&&oI(r))return a;if(r.requestStatus===1)return n=rI(t,e),a;{if(!navigator.onLine)throw Ii.create("app-offline");const l=uI(a);return n=lI(t,l),l}});return n?await n:i.authToken}async function rI(t,e){let n=await Km(t.appConfig);for(;n.authToken.requestStatus===1;)await I1(100),n=await Km(t.appConfig);const i=n.authToken;return i.requestStatus===0?ed(t,e):i}function Km(t){return Yo(t,e=>{if(!U1(e))throw Ii.create("not-registered");const n=e.authToken;return fI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lI(t,e){try{const n=await sI(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ho(t.appConfig,i),n}catch(n){if(C1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await k1(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ho(t.appConfig,i)}throw n}}function U1(t){return t!==void 0&&t.registrationStatus===2}function oI(t){return t.requestStatus===2&&!cI(t)}function cI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U2}function uI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fI(t){return t.requestStatus===1&&t.requestTime+S1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t){const e=t,{installationEntry:n,registrationPromise:i}=await Jh(e);return i?i.catch(console.error):ed(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e=!1){const n=t;return await pI(n),(await ed(n,e)).token}async function pI(t){const{registrationPromise:e}=await Jh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){if(!t||!t.options)throw Fc("App Configuration");if(!t.name)throw Fc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fc(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="installations",gI="installations-internal",_I=t=>{const e=t.getProvider("app").getImmediate(),n=mI(e),i=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},vI=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,j1).getImmediate();return{getId:()=>hI(n),getToken:s=>dI(n,s)}};function yI(){zt(new wt(j1,_I,"PUBLIC")),zt(new wt(gI,vI,"PRIVATE"))}yI();mt(E1,$h);mt(E1,$h,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="analytics",EI="firebase_id",SI="origin",bI=60*1e3,TI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",td="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Lo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Bi("analytics","Analytics",CI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){if(!t.startsWith(td)){const e=nt.create("invalid-gtag-resource",{gtagURL:t});return Ye.warn(e.message),""}return t}function z1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function AI(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function RI(t,e){const n=AI("firebase-js-sdk-policy",{createScriptURL:wI}),i=document.createElement("script"),s=`${td}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function OI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function NI(t,e,n,i,s,a){const r=i[s];try{if(r)await e[r];else{const o=(await z1(n)).find(c=>c.measurementId===s);o&&await e[o.appId]}}catch(l){Ye.error(l)}t("config",s,a)}async function II(t,e,n,i,s){try{let a=[];if(s&&s.send_to){let r=s.send_to;Array.isArray(r)||(r=[r]);const l=await z1(n);for(const o of r){const c=l.find(u=>u.measurementId===o),f=c&&e[c.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",i,s||{})}catch(a){Ye.error(a)}}function DI(t,e,n,i){async function s(a,...r){try{if(a==="event"){const[l,o]=r;await II(t,e,n,l,o)}else if(a==="config"){const[l,o]=r;await NI(t,e,n,i,l,o)}else if(a==="consent"){const[l,o]=r;t("consent",l,o)}else if(a==="get"){const[l,o,c]=r;t("get",l,o,c)}else if(a==="set"){const[l]=r;t("set",l)}else t(a,...r)}catch(l){Ye.error(l)}}return s}function MI(t,e,n,i,s){let a=function(...r){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=DI(a,t,e,n),{gtagCore:a,wrappedGtag:window[s]}}function xI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(td)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=30,LI=1e3;class UI{constructor(e={},n=LI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const H1=new UI;function jI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zI(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:jI(i)},a=TI.replace("{app-id}",n),r=await fetch(a,s);if(r.status!==200&&r.status!==304){let l="";try{const o=await r.json();!((e=o.error)===null||e===void 0)&&e.message&&(l=o.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:r.status,responseMessage:l})}return r.json()}async function HI(t,e=H1,n){const{appId:i,apiKey:s,measurementId:a}=t.options;if(!i)throw nt.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:i};throw nt.create("no-api-key")}const r=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new VI;return setTimeout(async()=>{l.abort()},bI),B1({appId:i,apiKey:s,measurementId:a},r,l,e)}async function B1(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=H1){var a;const{appId:r,measurementId:l}=t;try{await BI(i,e)}catch(o){if(l)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:r,measurementId:l};throw o}try{const o=await zI(t);return s.deleteThrottleMetadata(r),o}catch(o){const c=o;if(!PI(c)){if(s.deleteThrottleMetadata(r),l)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:r,measurementId:l};throw o}const f=Number((a=c==null?void 0:c.customData)===null||a===void 0?void 0:a.httpStatus)===503?jp(n,s.intervalMillis,kI):jp(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(r,u),Ye.debug(`Calling attemptFetch again in ${f} millis`),B1(t,u,i,s)}}function BI(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(a),i(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function PI(t){if(!(t instanceof Pt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class VI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qI(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const a=await e,r=Object.assign(Object.assign({},i),{send_to:a});t("event",n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(){if(_y())try{await vy()}catch(t){return Ye.warn(nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ye.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YI(t,e,n,i,s,a,r){var l;const o=HI(t);o.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ye.error(p)),e.push(o);const c=GI().then(p=>{if(p)return i.getId()}),[f,u]=await Promise.all([o,c]);xI(a)||RI(a,f.measurementId),s("js",new Date);const h=(l=r==null?void 0:r.config)!==null&&l!==void 0?l:{};return h[SI]="firebase",h.update=!0,u!=null&&(h[EI]=u),s("config",f.measurementId,h),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.app=e}_delete(){return delete Ha[this.app.options.appId],Promise.resolve()}}let Ha={},Xm=[];const Qm={};let Kc="dataLayer",KI="gtag",Wm,P1,$m=!1;function XI(){const t=[];if(py()&&t.push("This is a browser extension environment."),cC()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:e});Ye.warn(n.message)}}function QI(t,e,n){XI();const i=t.options.appId;if(!i)throw nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(Ha[i]!=null)throw nt.create("already-exists",{id:i});if(!$m){OI(Kc);const{wrappedGtag:a,gtagCore:r}=MI(Ha,Xm,Qm,Kc,KI);P1=a,Wm=r,$m=!0}return Ha[i]=YI(t,Xm,Qm,e,Wm,Kc,n),new FI(t)}function WI(t=Eh()){t=Xe(t);const e=Pi(t,po);return e.isInitialized()?e.getImmediate():$I(t)}function $I(t,e={}){const n=Pi(t,po);if(n.isInitialized()){const s=n.getImmediate();if(sr(e,n.getOptions()))return s;throw nt.create("already-initialized")}return n.initialize({options:e})}function ZI(t,e,n,i){t=Xe(t),qI(P1,Ha[t.app.options.appId],e,n,i).catch(s=>Ye.error(s))}const Zm="@firebase/analytics",Jm="0.10.10";function JI(){zt(new wt(po,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return QI(i,s,n)},"PUBLIC")),zt(new wt("analytics-internal",t,"PRIVATE")),mt(Zm,Jm),mt(Zm,Jm,"esm2017");function t(e){try{const n=e.getProvider(po).getImmediate();return{logEvent:(i,s,a)=>ZI(n,i,s,a)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}JI();const eD={apiKey:"AIzaSyAuiLOtzOrteTw9fQJx_Suf9ON7n-w5RLE",authDomain:"souvenirisland-29eda.firebaseapp.com",projectId:"souvenirisland-29eda",storageBucket:"souvenirisland-29eda.appspot.com",messagingSenderId:"1009894972082",appId:"1:1009894972082:web:3645d4424a4fe2ce6907ab",measurementId:"G-2QYYMKWX5Q",databaseURL:"https://souvenirisland-29eda-default-rtdb.firebaseio.com/"},nd=Ty(eD);WI(nd);const cr=FR(nd);M2(nd);function tD(){const[t,e]=b.useState(null);return b.useEffect(()=>{const n=$y(cr,i=>{e(i)});return()=>n()},[]),g.jsx(g.Fragment,{children:g.jsx(ti,{children:g.jsxs("div",{className:"header",children:[g.jsx(De,{to:"/",children:g.jsxs("div",{className:"header__logo",children:[g.jsx("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M6.20837 20.5H4.16671V36.8333C4.16671 37.9163 4.59691 38.9549 5.36269 39.7207C6.12846 40.4864 7.16707 40.9166 8.25004 40.9166H18.4584V20.5H6.20837ZM32.75 20.5H22.5417V40.9166H32.75C33.833 40.9166 34.8716 40.4864 35.6374 39.7207C36.4032 38.9549 36.8334 37.9163 36.8334 36.8333V20.5H32.75ZM34.365 10.2916C34.6644 9.29895 34.8084 8.26588 34.7917 7.22915C34.7917 3.28873 31.5863 0.083313 27.6459 0.083313C24.3343 0.083313 22.1232 3.10906 20.696 6.38185C19.2893 3.28873 16.9659 0.083313 13.3542 0.083313C9.41379 0.083313 6.20837 3.28873 6.20837 7.22915C6.20837 8.44598 6.36967 9.45252 6.63508 10.2916H0.083374V18.4583H18.4584V14.375H22.5417V18.4583H40.9167V10.2916H34.365ZM10.2917 7.22915C10.2917 5.54069 11.6657 4.16665 13.3542 4.16665C15.1672 4.16665 16.8536 7.28019 17.8418 10.2916H12.3334C11.5698 10.2916 10.2917 10.2916 10.2917 7.22915ZM27.6459 4.16665C29.3343 4.16665 30.7084 5.54069 30.7084 7.22915C30.7084 10.2916 29.4303 10.2916 28.6667 10.2916H23.6095C24.6507 7.07398 26.1636 4.16665 27.6459 4.16665Z",fill:"#7A876C"})}),g.jsxs("h1",{children:["Сувенирная ",g.jsx("br",{}),"лавка"]})]})}),g.jsx("div",{className:"header__linkList",children:g.jsxs("ol",{children:[g.jsx(De,{to:"/",children:g.jsx("li",{children:"Главная"})}),g.jsx(De,{to:"/cart",children:g.jsx("li",{children:"Каталог"})}),g.jsx(De,{to:"/about",children:g.jsx("li",{children:"О нас"})})]})}),g.jsxs("div",{className:"header__links",children:[g.jsx(De,{to:"/cart",children:g.jsx("div",{className:"header__basketIcon",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30",height:"30",fill:"rgba(122,135,108,1)",children:g.jsx("path",{d:"M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"})})})}),t?g.jsx(De,{to:`/user/${t.uid}`,children:g.jsx("div",{className:"header__profile",children:g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(255,254,254,1)",children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[g.jsx("stop",{offset:"0%",style:{stopColor:"rgb(6, 193, 252)",stopOpacity:1}}),g.jsx("stop",{offset:"33%",style:{stopColor:"rgb(172, 66, 255)",stopOpacity:1}}),g.jsx("stop",{offset:"57%",style:{stopColor:"rgb(255, 0, 214)",stopOpacity:1}}),g.jsx("stop",{offset:"90%",style:{stopColor:"rgb(255, 0, 61)",stopOpacity:1}})]})}),g.jsx("path",{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",fill:"#7a876c"})]})})}):g.jsx(De,{to:"/reg",children:g.jsx("div",{className:"header__regbtn",children:"Регистрация"})})]}),g.jsx(WT,{})]})})})}const nD="/assets/1-BF6folfD.png",iD="/assets/2-C6OXDz1B.png";function V1(){return g.jsxs("section",{className:"prom",children:[g.jsx("img",{src:nD,alt:"",className:"prom__img-left"}),g.jsxs("h2",{children:["Сувенирная ",g.jsx("br",{})," лавка"]}),g.jsx("img",{src:iD,alt:"",className:"prom__img-right"})]})}function sD({onSearch:t,onCategorySelect:e}){const[n,i]=b.useState(""),[s,a]=b.useState(""),r=o=>{const c=o.target.value;i(c),t(c)},l=o=>{s===o?(a(""),e("")):(a(o),e(o))};return g.jsxs("section",{className:"search",children:[g.jsx("input",{className:"search__input",type:"text",placeholder:"Поиск товара...",value:n,onChange:r}),g.jsxs("div",{className:"search__btns",children:[g.jsx("div",{className:`search__btn ${s==="Брелки"?"active":""}`,onClick:()=>l("Брелки"),children:"Брелки"}),g.jsx("div",{className:`search__btn ${s==="Подставки"?"active":""}`,onClick:()=>l("Подставки"),children:"Подставки"}),g.jsx("div",{className:`search__btn ${s==="Тарелки"?"active":""}`,onClick:()=>l("Тарелки"),children:"Тарелки"}),g.jsx("div",{className:`search__btn ${s==="Украшения"?"active":""}`,onClick:()=>l("Украшения"),children:"Украшения"})]})]})}function aD({name:t,price:e,image:n,category:i}){const s=()=>{const a={name:t,price:e,image:n,category:i};let r=JSON.parse(localStorage.getItem("cart"))||[];r.push(a),localStorage.setItem("cart",JSON.stringify(r)),alert(`${t} добавлен в корзину`)};return g.jsxs("section",{className:"card col-xxl-4 col-sm-6 col-md-9",children:[g.jsx("div",{className:"card__category",children:i}),g.jsx("img",{src:n,alt:t,className:"card__img"}),g.jsxs("div",{className:"card__textBlock",children:[g.jsx("h1",{children:t}),g.jsxs("div",{className:"card__textP",children:[g.jsxs("div",{className:"card__price",children:[e," ₽"]}),g.jsx("div",{className:"card__buyBtn",onClick:s,children:"Купить"})]})]})]})}const rD="/assets/product1-CxMwCeW0.jpg",lD="/assets/product2-Bn3J_B2B.jpg",oD="/assets/product3-CH02ZqjD.jpg",cD="/assets/product4-BRHVIcJL.jpg",uD="/assets/product5-DNABM6j8.jpg",fD="/assets/product6-CwLimfyF.jpg",hD="/assets/product7-CUkZk8YF.jpg",dD="/assets/product8-ChTDpsk3.jpg",pD="/assets/product9-Dsw5IOBz.jpg",mD="/assets/product10-BNN6Puhw.jpg",gD=[{id:1,name:"Тарелка ручной работы",price:500,image:rD,category:"Тарелки"},{id:2,name:"Подставка из дерева",price:500,image:lD,category:"Подставки"},{id:3,name:"Брелок для ключей",price:500,image:oD,category:"Брелки"},{id:4,name:"Брелки с котятами",price:500,image:cD,category:"Брелки"},{id:5,name:"Тарелка большая",price:500,image:uD,category:"Тарелки"},{id:6,name:"Салфетница",price:500,image:fD,category:"Подставки"},{id:7,name:"Брелок для сумки",price:500,image:hD,category:"Брелки"},{id:8,name:"Тарелка в виде кота",price:500,image:dD,category:"Тарелки"},{id:9,name:"Шпилька для волос",price:500,image:pD,category:"Украшения"},{id:10,name:"Подставка с надписью",price:500,image:mD,category:"Подставки"}];function _D(){const[t,e]=b.useState(""),[n,i]=b.useState(""),s=gD.filter(a=>{const r=a.name.toLowerCase().includes(t.toLowerCase()),l=n?a.category===n:!0;return r&&l});return g.jsx("div",{children:g.jsxs(ti,{children:[g.jsx(sD,{onSearch:e,onCategorySelect:i}),g.jsx(Qv,{className:"product_list",children:s.map(a=>g.jsx(aD,{name:a.name,price:a.price,image:a.image,category:a.category},a.id))})]})})}function vD(){return g.jsxs(g.Fragment,{children:[g.jsx(V1,{}),g.jsx(_D,{})]})}function yD(){return g.jsx(g.Fragment,{children:g.jsx(ti,{children:g.jsxs("section",{className:"about",children:[g.jsx("div",{className:"about__title",children:g.jsx("h1",{children:"О нас"})}),g.jsxs("div",{className:"about__text",children:[g.jsx("p",{children:"Добро пожаловать в сувенирную лавку, где каждый предмет является уникальным шедевром ручной работы. Мы предлагаем широкий выбор разнообразных сувениров, сделанных с любовью и мастерством наших талантливых ремесленников."}),g.jsx("p",{children:"В нашем ассортименте вы найдете преимущественно деревянные изделия, каждое из которых поражает красотой и оригинальностью исполнения. Мы уделяем особое внимание качеству материалов и деталям, чтобы каждый сувенир стал не просто предметом, а настоящим произведением искусства."}),g.jsx("p",{children:"Мы гордимся тем, что поддерживаем мастеров-ремесленников и поощряем традиции ручной работы. Приобретая сувениры у нас, вы не только приобретаете уникальный предмет, но и поддерживаете искусство и ремесленников."}),g.jsx("p",{children:"Добро пожаловать в нашу сувенирную лавку, где каждый предмет обладает историей и душой, и каждая покупка становится маленьким вкладом в сохранение уникальных ремесел."})]}),g.jsxs("section",{className:"about__contacts",children:[g.jsx("div",{className:"about__contactsTitle",children:"Найди нас на карте"}),g.jsx("iframe",{className:"about__contactsMap",src:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa35d09934e9a8b333767ae1bc083654665d8e26456c891a4b61c4c1660d21e8f&source=constructor",width:"100%",height:"296",frameborder:"0"}),g.jsxs("div",{className:"about__contactsUs",children:[g.jsx("div",{className:"about__contactsUsTitle",children:"Наши контакты"}),g.jsxs("div",{className:"about__contactsUsText",children:[g.jsx("p",{children:"Телефон: +79898221412"}),g.jsxs("p",{children:["Мы в телеграмме: ",g.jsx("a",{className:"url",href:"https://t.me/vceuzdereva2022 ",children:" https://t.me/vceuzdereva2022 "})]}),g.jsx("p",{children:"Пролетарская ул., 209, станица Брюховецкая "})]})]})]})]})})})}function ED(){const[t,e]=b.useState([]);b.useEffect(()=>{const i=JSON.parse(localStorage.getItem("cart"))||[];e(i)},[]);const n=i=>{const s=t.filter((a,r)=>r!==i);e(s),localStorage.setItem("cart",JSON.stringify(s))};return g.jsx(g.Fragment,{children:g.jsx("section",{className:"basket",children:g.jsxs(ti,{children:[g.jsx("h1",{className:"basket__title",children:"Ваша корзина"}),t.length>0?g.jsxs("ul",{children:[t.map((i,s)=>g.jsxs("div",{className:"basket__card",children:[g.jsxs("div",{className:"basket__cardCont",children:[g.jsx("img",{src:i.image,alt:i.name,className:"basket__img"}),g.jsxs("div",{className:"basket__cardText",children:[g.jsx("div",{className:"basket__cardTitle",children:i.name}),g.jsxs("div",{className:"basket__price",children:[i.price," ₽"]})]})]}),g.jsx("button",{onClick:()=>n(s),children:"X"})]},s)),g.jsx("button",{className:"basket__btn",children:"Оформить заказ"})]}):g.jsx("p",{children:"Корзина пуста"})]})})})}function SD(){const[t,e]=b.useState(""),[n,i]=b.useState(""),[s,a]=b.useState(""),[r,l]=b.useState(""),o=xo(),c=async f=>{f.preventDefault();try{const h=(await NA(cr,t,n)).user;await MA(h,{displayName:s}),console.log("Пользователь создан:",h),o(`/user/${h.uid}`),a(""),e(""),i(""),l("")}catch(u){console.error("Ошибка регистрации:",u.message),l(u.message)}};return g.jsx("section",{className:"reg",children:g.jsxs(ti,{className:"reg__container",children:[g.jsx("h1",{className:"reg__title",children:"Регистрация"}),g.jsxs("form",{onSubmit:c,className:"reg__form",children:[g.jsx("input",{type:"text",placeholder:"Имя",value:s,onChange:f=>a(f.target.value)}),g.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:f=>e(f.target.value)}),g.jsx("input",{type:"password",placeholder:"Пароль",value:n,onChange:f=>i(f.target.value)}),g.jsx("button",{type:"submit",className:"reg__btn",children:"Зарегистрироваться"}),g.jsxs("div",{className:"reg__underButton",children:["или"," ",g.jsx(De,{to:"/log",children:g.jsx("span",{children:"войти"})})," ","если есть аккаунт"]})]}),r&&g.jsx("p",{className:"reg__error",children:r})]})})}function bD(){const[t,e]=b.useState(null),[n,i]=b.useState(""),s=xo();b.useEffect(()=>{const r=$y(cr,l=>{l?(e(l),i(l.phoneNumber||"Не указан")):s("/log")});return()=>r()},[s]);const a=async()=>{try{await LA(cr),console.log("Пользователь вышел из аккаунта"),s("/log")}catch(r){console.error("Ошибка выхода:",r.message)}};return g.jsx("section",{className:"userProfile",children:g.jsxs(ti,{children:[g.jsx("h1",{className:"basket__title",children:"Профиль"}),t?g.jsxs("div",{className:"userProfile__info",children:[g.jsxs("div",{className:"userProfile__infoName",children:[" ",g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"23",height:"23",fill:"rgba(255,255,255,1)",children:g.jsx("path",{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"})})," ",t.displayName]}),g.jsxs("div",{className:"userProfile__infoName",children:[g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(254,252,252,1)",children:g.jsx("path",{d:"M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"})})," ",t.email]}),g.jsx("button",{onClick:a,className:"logout-btn",children:"Выйти"})]}):g.jsx("p",{children:"Загрузка..."})]})})}function TD(){const[t,e]=b.useState(""),[n,i]=b.useState(""),[s,a]=b.useState(""),r=xo(),l=async o=>{o.preventDefault();try{const c=await IA(cr,t,n);console.log("Пользователь вошел в систему:",c.user),r(`/user/${c.user.uid}`),e(""),i(""),a("")}catch(c){console.error("Ошибка входа:",c.message),a(c.message)}};return g.jsx("section",{className:"reg",children:g.jsxs(ti,{className:"reg__container",children:[g.jsx("h1",{className:"reg__title",children:"Вход в аккаунт"}),g.jsxs("form",{onSubmit:l,className:"reg__form",children:[g.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:o=>e(o.target.value)}),g.jsx("input",{type:"password",placeholder:"Пароль",value:n,onChange:o=>i(o.target.value)}),g.jsx("button",{className:"reg__btn",type:"submit",children:"Войти"}),g.jsxs("div",{className:"reg__underButton",children:["или"," ",g.jsx(De,{to:"/reg",children:g.jsx("span",{children:"зарегистрироваться"})})," ","если нет аккаунта"]})]}),s&&g.jsx("p",{className:"reg__error",children:s})]})})}function CD(){const t=Tr();return g.jsxs(g.Fragment,{children:[g.jsx(tD,{}),g.jsxs(HT,{location:t,children:[g.jsx(bn,{path:"/",element:g.jsx(vD,{})}),g.jsx(bn,{path:"/prom",element:g.jsx(V1,{})}),g.jsx(bn,{path:"/about",element:g.jsx(yD,{})}),g.jsx(bn,{path:"/cart",element:g.jsx(ED,{})}),g.jsx(bn,{path:"/reg",element:g.jsx(SD,{})}),g.jsx(bn,{path:"/log",element:g.jsx(TD,{})}),g.jsx(bn,{path:"/user/:userId",element:g.jsx(bD,{})})]},t.pathname)]})}Gb.createRoot(document.getElementById("root")).render(g.jsx(FT,{children:g.jsx(CD,{})}));
