function Gb(s,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const u=Object.getOwnPropertyDescriptor(r,o);u&&Object.defineProperty(s,o,u.get?u:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function ch(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hf={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Yb(){if(jg)return yr;jg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:u}}return yr.Fragment=e,yr.jsx=i,yr.jsxs=i,yr}var Hg;function Fb(){return Hg||(Hg=1,hf.exports=Yb()),hf.exports}var w=Fb(),df={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Kb(){if(Bg)return ee;Bg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.iterator;function R(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,V={};function j(S,k,X){this.props=S,this.context=k,this.refs=V,this.updater=X||x}j.prototype.isReactComponent={},j.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},j.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function le(){}le.prototype=j.prototype;function te(S,k,X){this.props=S,this.context=k,this.refs=V,this.updater=X||x}var se=te.prototype=new le;se.constructor=te,U(se,j.prototype),se.isPureReactComponent=!0;var De=Array.isArray,J={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function Ft(S,k,X,F,B,ue){return X=ue.ref,{$$typeof:s,type:S,key:k,ref:X!==void 0?X:null,props:ue}}function nn(S,k){return Ft(S.type,k,void 0,void 0,void 0,S.props)}function Y(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function pe(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(X){return k[X]})}var It=/\/+/g;function vn(S,k){return typeof S=="object"&&S!==null&&S.key!=null?pe(""+S.key):k.toString(36)}function sn(){}function yn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(sn,sn):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function dt(S,k,X,F,B){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var ne=!1;if(S===null)ne=!0;else switch(ue){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(S.$$typeof){case s:case e:ne=!0;break;case E:return ne=S._init,dt(ne(S._payload),k,X,F,B)}}if(ne)return B=B(S),ne=F===""?"."+vn(S,0):F,De(B)?(X="",ne!=null&&(X=ne.replace(It,"$&/")+"/"),dt(B,k,X,"",function(je){return je})):B!=null&&(Y(B)&&(B=nn(B,X+(B.key==null||S&&S.key===B.key?"":(""+B.key).replace(It,"$&/")+"/")+ne)),k.push(B)),1;ne=0;var ct=F===""?".":F+":";if(De(S))for(var _e=0;_e<S.length;_e++)F=S[_e],ue=ct+vn(F,_e),ne+=dt(F,k,X,ue,B);else if(_e=R(S),typeof _e=="function")for(S=_e.call(S),_e=0;!(F=S.next()).done;)F=F.value,ue=ct+vn(F,_e++),ne+=dt(F,k,X,ue,B);else if(ue==="object"){if(typeof S.then=="function")return dt(yn(S),k,X,F,B);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ne}function H(S,k,X){if(S==null)return S;var F=[],B=0;return dt(S,F,"","",function(ue){return k.call(X,ue,B++)}),F}function Z(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(X){(S._status===0||S._status===-1)&&(S._status=1,S._result=X)},function(X){(S._status===0||S._status===-1)&&(S._status=2,S._result=X)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var Q=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Ce(){}return ee.Children={map:H,forEach:function(S,k,X){H(S,function(){k.apply(this,arguments)},X)},count:function(S){var k=0;return H(S,function(){k++}),k},toArray:function(S){return H(S,function(k){return k})||[]},only:function(S){if(!Y(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ee.Component=j,ee.Fragment=i,ee.Profiler=o,ee.PureComponent=te,ee.StrictMode=r,ee.Suspense=p,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ee.act=function(){throw Error("act(...) is not supported in production builds of React.")},ee.cache=function(S){return function(){return S.apply(null,arguments)}},ee.cloneElement=function(S,k,X){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var F=U({},S.props),B=S.key,ue=void 0;if(k!=null)for(ne in k.ref!==void 0&&(ue=void 0),k.key!==void 0&&(B=""+k.key),k)!Ye.call(k,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&k.ref===void 0||(F[ne]=k[ne]);var ne=arguments.length-2;if(ne===1)F.children=X;else if(1<ne){for(var ct=Array(ne),_e=0;_e<ne;_e++)ct[_e]=arguments[_e+2];F.children=ct}return Ft(S.type,B,void 0,void 0,ue,F)},ee.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:u,_context:S},S},ee.createElement=function(S,k,X){var F,B={},ue=null;if(k!=null)for(F in k.key!==void 0&&(ue=""+k.key),k)Ye.call(k,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(B[F]=k[F]);var ne=arguments.length-2;if(ne===1)B.children=X;else if(1<ne){for(var ct=Array(ne),_e=0;_e<ne;_e++)ct[_e]=arguments[_e+2];B.children=ct}if(S&&S.defaultProps)for(F in ne=S.defaultProps,ne)B[F]===void 0&&(B[F]=ne[F]);return Ft(S,ue,void 0,void 0,null,B)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(S){return{$$typeof:d,render:S}},ee.isValidElement=Y,ee.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:Z}},ee.memo=function(S,k){return{$$typeof:g,type:S,compare:k===void 0?null:k}},ee.startTransition=function(S){var k=J.T,X={};J.T=X;try{var F=S(),B=J.S;B!==null&&B(X,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(Ce,Q)}catch(ue){Q(ue)}finally{J.T=k}},ee.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ee.use=function(S){return J.H.use(S)},ee.useActionState=function(S,k,X){return J.H.useActionState(S,k,X)},ee.useCallback=function(S,k){return J.H.useCallback(S,k)},ee.useContext=function(S){return J.H.useContext(S)},ee.useDebugValue=function(){},ee.useDeferredValue=function(S,k){return J.H.useDeferredValue(S,k)},ee.useEffect=function(S,k){return J.H.useEffect(S,k)},ee.useId=function(){return J.H.useId()},ee.useImperativeHandle=function(S,k,X){return J.H.useImperativeHandle(S,k,X)},ee.useInsertionEffect=function(S,k){return J.H.useInsertionEffect(S,k)},ee.useLayoutEffect=function(S,k){return J.H.useLayoutEffect(S,k)},ee.useMemo=function(S,k){return J.H.useMemo(S,k)},ee.useOptimistic=function(S,k){return J.H.useOptimistic(S,k)},ee.useReducer=function(S,k,X){return J.H.useReducer(S,k,X)},ee.useRef=function(S){return J.H.useRef(S)},ee.useState=function(S){return J.H.useState(S)},ee.useSyncExternalStore=function(S,k,X){return J.H.useSyncExternalStore(S,k,X)},ee.useTransition=function(){return J.H.useTransition()},ee.version="19.0.0",ee}var Pg;function uh(){return Pg||(Pg=1,df.exports=Kb()),df.exports}var L=uh();const Xb=ch(L),Qb=Gb({__proto__:null,default:Xb},[L]);var pf={exports:{}},Er={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Wb(){return qg||(qg=1,function(s){function e(H,Z){var Q=H.length;H.push(Z);e:for(;0<Q;){var Ce=Q-1>>>1,S=H[Ce];if(0<o(S,Z))H[Ce]=Z,H[Q]=S,Q=Ce;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],Q=H.pop();if(Q!==Z){H[0]=Q;e:for(var Ce=0,S=H.length,k=S>>>1;Ce<k;){var X=2*(Ce+1)-1,F=H[X],B=X+1,ue=H[B];if(0>o(F,Q))B<S&&0>o(ue,F)?(H[Ce]=ue,H[B]=Q,Ce=B):(H[Ce]=F,H[X]=Q,Ce=X);else if(B<S&&0>o(ue,Q))H[Ce]=ue,H[B]=Q,Ce=B;else break e}}return Z}function o(H,Z){var Q=H.sortIndex-Z.sortIndex;return Q!==0?Q:H.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],g=[],E=1,v=null,R=3,x=!1,U=!1,V=!1,j=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function se(H){for(var Z=i(g);Z!==null;){if(Z.callback===null)r(g);else if(Z.startTime<=H)r(g),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=i(g)}}function De(H){if(V=!1,se(H),!U)if(i(p)!==null)U=!0,yn();else{var Z=i(g);Z!==null&&dt(De,Z.startTime-H)}}var J=!1,Ye=-1,Ft=5,nn=-1;function Y(){return!(s.unstable_now()-nn<Ft)}function pe(){if(J){var H=s.unstable_now();nn=H;var Z=!0;try{e:{U=!1,V&&(V=!1,le(Ye),Ye=-1),x=!0;var Q=R;try{t:{for(se(H),v=i(p);v!==null&&!(v.expirationTime>H&&Y());){var Ce=v.callback;if(typeof Ce=="function"){v.callback=null,R=v.priorityLevel;var S=Ce(v.expirationTime<=H);if(H=s.unstable_now(),typeof S=="function"){v.callback=S,se(H),Z=!0;break t}v===i(p)&&r(p),se(H)}else r(p);v=i(p)}if(v!==null)Z=!0;else{var k=i(g);k!==null&&dt(De,k.startTime-H),Z=!1}}break e}finally{v=null,R=Q,x=!1}Z=void 0}}finally{Z?It():J=!1}}}var It;if(typeof te=="function")It=function(){te(pe)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,sn=vn.port2;vn.port1.onmessage=pe,It=function(){sn.postMessage(null)}}else It=function(){j(pe,0)};function yn(){J||(J=!0,It())}function dt(H,Z){Ye=j(function(){H(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){U||x||(U=!0,yn())},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ft=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return R},s.unstable_getFirstCallbackNode=function(){return i(p)},s.unstable_next=function(H){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var Q=R;R=Z;try{return H()}finally{R=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Q=R;R=H;try{return Z()}finally{R=Q}},s.unstable_scheduleCallback=function(H,Z,Q){var Ce=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ce+Q:Ce):Q=Ce,H){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=Q+S,H={id:E++,callback:Z,priorityLevel:H,startTime:Q,expirationTime:S,sortIndex:-1},Q>Ce?(H.sortIndex=Q,e(g,H),i(p)===null&&H===i(g)&&(V?(le(Ye),Ye=-1):V=!0,dt(De,Q-Ce))):(H.sortIndex=S,e(p,H),U||x||(U=!0,yn())),H},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(H){var Z=R;return function(){var Q=R;R=Z;try{return H.apply(this,arguments)}finally{R=Q}}}}(gf)),gf}var Vg;function $b(){return Vg||(Vg=1,mf.exports=Wb()),mf.exports}var _f={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Zb(){if(Gg)return at;Gg=1;var s=uh();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:g,implementation:E}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,at.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},at.flushSync=function(p){var g=h.T,E=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=g,r.p=E,r.d.f()}},at.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},at.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},at.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,v=d(E,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:R,fetchPriority:x}):E==="script"&&r.d.X(p,{crossOrigin:v,integrity:R,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},at.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=d(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},at.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,v=d(E,g.crossOrigin);r.d.L(p,E,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},at.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=d(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},at.requestFormReset=function(p){r.d.r(p)},at.unstable_batchedUpdates=function(p,g){return p(g)},at.useFormState=function(p,g,E){return h.H.useFormState(p,g,E)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.0.0",at}var Yg;function Cv(){if(Yg)return _f.exports;Yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_f.exports=Zb(),_f.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Jb(){if(Fg)return Er;Fg=1;var s=$b(),e=uh(),i=Cv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),x=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),De=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function Ye(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Symbol.for("react.client.reference");function nn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ft?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case E:return"Profiler";case g:return"StrictMode";case V:return"Suspense";case j:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:return(t.displayName||"Context")+".Provider";case R:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return n=t.displayName||null,n!==null?n:nn(t.type)||"Memo";case te:n=t._payload,t=t._init;try{return nn(t(n))}catch{}}return null}var Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=Object.assign,It,vn;function sn(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",vn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+vn}var yn=!1;function dt(t,n){if(!t||yn)return"";yn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var O=N}Reflect.construct(t,[],M)}else{try{M.call()}catch(N){O=N}t.call(M.prototype)}}else{try{throw Error()}catch(N){O=N}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&O&&typeof N.stack=="string")return[N.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),m=f[0],_=f[1];if(m&&_){var y=m.split(`
`),T=_.split(`
`);for(c=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;c<T.length&&!T[c].includes("DetermineComponentFrameRoot");)c++;if(l===y.length||c===T.length)for(l=y.length-1,c=T.length-1;1<=l&&0<=c&&y[l]!==T[c];)c--;for(;1<=l&&0<=c;l--,c--)if(y[l]!==T[c]){if(l!==1||c!==1)do if(l--,c--,0>c||y[l]!==T[c]){var I=`
`+y[l].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=l&&0<=c);break}}}finally{yn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?sn(a):""}function H(t){switch(t.tag){case 26:case 27:case 5:return sn(t.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return t=dt(t.type,!1),t;case 11:return t=dt(t.type.render,!1),t;case 1:return t=dt(t.type,!0),t;default:return""}}function Z(t){try{var n="";do n+=H(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Q(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Ce(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function S(t){if(Q(t)!==t)throw Error(r(188))}function k(t){var n=t.alternate;if(!n){if(n=Q(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,l=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return S(c),t;if(f===l)return S(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=c,l=f;else{for(var m=!1,_=c.child;_;){if(_===a){m=!0,a=c,l=f;break}if(_===l){m=!0,l=c,a=f;break}_=_.sibling}if(!m){for(_=f.child;_;){if(_===a){m=!0,a=f,l=c;break}if(_===l){m=!0,l=f,a=c;break}_=_.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=X(t),n!==null)return n;t=t.sibling}return null}var F=Array.isArray,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ne=[],ct=-1;function _e(t){return{current:t}}function je(t){0>ct||(t.current=ne[ct],ne[ct]=null,ct--)}function Ie(t,n){ct++,ne[ct]=t.current,t.current=n}var an=_e(null),ba=_e(null),Xn=_e(null),Zr=_e(null);function Jr(t,n){switch(Ie(Xn,n),Ie(ba,t),Ie(an,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?dg(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=dg(t),n=pg(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}je(an),Ie(an,n)}function vs(){je(an),je(ba),je(Xn)}function nc(t){t.memoizedState!==null&&Ie(Zr,t);var n=an.current,a=pg(n,t.type);n!==a&&(Ie(ba,t),Ie(an,a))}function el(t){ba.current===t&&(je(an),je(ba)),Zr.current===t&&(je(Zr),pr._currentValue=ue)}var ic=Object.prototype.hasOwnProperty,sc=s.unstable_scheduleCallback,ac=s.unstable_cancelCallback,bE=s.unstable_shouldYield,TE=s.unstable_requestPaint,rn=s.unstable_now,CE=s.unstable_getCurrentPriorityLevel,nd=s.unstable_ImmediatePriority,id=s.unstable_UserBlockingPriority,tl=s.unstable_NormalPriority,wE=s.unstable_LowPriority,sd=s.unstable_IdlePriority,AE=s.log,RE=s.unstable_setDisableYieldValue,Ta=null,Et=null;function OE(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}}function Qn(t){if(typeof AE=="function"&&RE(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Ta,t)}catch{}}var St=Math.clz32?Math.clz32:DE,NE=Math.log,IE=Math.LN2;function DE(t){return t>>>=0,t===0?32:31-(NE(t)/IE|0)|0}var nl=128,il=4194304;function Mi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function sl(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,c=t.suspendedLanes,f=t.pingedLanes,m=t.warmLanes;t=t.finishedLanes!==0;var _=a&134217727;return _!==0?(a=_&~c,a!==0?l=Mi(a):(f&=_,f!==0?l=Mi(f):t||(m=_&~m,m!==0&&(l=Mi(m))))):(_=a&~c,_!==0?l=Mi(_):f!==0?l=Mi(f):t||(m=a&~m,m!==0&&(l=Mi(m)))),l===0?0:n!==0&&n!==l&&!(n&c)&&(c=l&-l,m=n&-n,c>=m||c===32&&(m&4194176)!==0)?n:l}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ME(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var t=nl;return nl<<=1,!(nl&4194176)&&(nl=128),t}function rd(){var t=il;return il<<=1,!(il&62914560)&&(il=4194304),t}function rc(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wa(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xE(t,n,a,l,c,f){var m=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var _=t.entanglements,y=t.expirationTimes,T=t.hiddenUpdates;for(a=m&~a;0<a;){var I=31-St(a),M=1<<I;_[I]=0,y[I]=-1;var O=T[I];if(O!==null)for(T[I]=null,I=0;I<O.length;I++){var N=O[I];N!==null&&(N.lane&=-536870913)}a&=~M}l!==0&&ld(t,l,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(m&~n))}function ld(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-St(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function od(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-St(a),c=1<<l;c&n|t[l]&n&&(t[l]|=n),a&=~c}}function cd(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function ud(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Mg(t.type))}function kE(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Wn=Math.random().toString(36).slice(2),it="__reactFiber$"+Wn,pt="__reactProps$"+Wn,ys="__reactContainer$"+Wn,lc="__reactEvents$"+Wn,LE="__reactListeners$"+Wn,UE="__reactHandles$"+Wn,fd="__reactResources$"+Wn,Aa="__reactMarker$"+Wn;function oc(t){delete t[it],delete t[pt],delete t[lc],delete t[LE],delete t[UE]}function xi(t){var n=t[it];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ys]||a[it]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_g(t);t!==null;){if(a=t[it])return a;t=_g(t)}return n}t=a,a=t.parentNode}return null}function Es(t){if(t=t[it]||t[ys]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ra(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ss(t){var n=t[fd];return n||(n=t[fd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Fe(t){t[Aa]=!0}var hd=new Set,dd={};function ki(t,n){bs(t,n),bs(t+"Capture",n)}function bs(t,n){for(dd[t]=n,t=0;t<n.length;t++)hd.add(n[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pd={},md={};function jE(t){return ic.call(md,t)?!0:ic.call(pd,t)?!1:zE.test(t)?md[t]=!0:(pd[t]=!0,!1)}function al(t,n,a){if(jE(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function rl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Sn(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}function Dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gd(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function HE(t){var n=gd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(m){l=""+m,f.call(this,m)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ll(t){t._valueTracker||(t._valueTracker=HE(t))}function _d(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=gd(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var BE=/[\n"\\]/g;function Mt(t){return t.replace(BE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cc(t,n,a,l,c,f,m,_){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Dt(n)):t.value!==""+Dt(n)&&(t.value=""+Dt(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?uc(t,m,Dt(n)):a!=null?uc(t,m,Dt(a)):l!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+Dt(_):t.removeAttribute("name")}function vd(t,n,a,l,c,f,m,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Dt(a):"",n=n!=null?""+Dt(n):a,_||n===t.value||(t.value=n),t.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=_?t.checked:!!l,t.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function uc(t,n,a){n==="number"&&ol(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ts(t,n,a,l){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Dt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yd(t,n,a){if(n!=null&&(n=""+Dt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Dt(a):""}function Ed(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(F(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Dt(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Cs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var PE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sd(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||PE.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&a[c]!==l&&Sd(t,c,l)}else for(var f in n)n.hasOwnProperty(f)&&Sd(t,f,n[f])}function fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return VE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var hc=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ws=null,As=null;function Td(t){var n=Es(t);if(n&&(t=n.stateNode)){var a=t[pt]||null;e:switch(t=n.stateNode,n.type){case"input":if(cc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var c=l[pt]||null;if(!c)throw Error(r(90));cc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&_d(l)}break e;case"textarea":yd(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ts(t,!!a.multiple,n,!1)}}}var pc=!1;function Cd(t,n,a){if(pc)return t(n,a);pc=!0;try{var l=t(n);return l}finally{if(pc=!1,(ws!==null||As!==null)&&(Fl(),ws&&(n=ws,t=As,As=ws=null,Td(n),t)))for(n=0;n<t.length;n++)Td(t[n])}}function Oa(t,n){var a=t.stateNode;if(a===null)return null;var l=a[pt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var mc=!1;if(En)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{mc=!1}var $n=null,gc=null,ul=null;function wd(){if(ul)return ul;var t,n=gc,a=n.length,l,c="value"in $n?$n.value:$n.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var m=a-t;for(l=1;l<=m&&n[a-l]===c[f-l];l++);return ul=c.slice(t,1<l?1-l:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Ad(){return!1}function mt(t){function n(a,l,c,f,m){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(a=t[_],this[_]=a?a(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:Ad,this.isPropagationStopped=Ad,this}return pe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=mt(Li),Ia=pe({},Li,{view:0,detail:0}),GE=mt(Ia),_c,vc,Da,pl=pe({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(_c=t.screenX-Da.screenX,vc=t.screenY-Da.screenY):vc=_c=0,Da=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Rd=mt(pl),YE=pe({},pl,{dataTransfer:0}),FE=mt(YE),KE=pe({},Ia,{relatedTarget:0}),yc=mt(KE),XE=pe({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),QE=mt(XE),WE=pe({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$E=mt(WE),ZE=pe({},Li,{data:0}),Od=mt(ZE),JE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tS[t])?!!n[t]:!1}function Ec(){return nS}var iS=pe({},Ia,{key:function(t){if(t.key){var n=JE[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=mt(iS),aS=pe({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=mt(aS),rS=pe({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),lS=mt(rS),oS=pe({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=mt(oS),uS=pe({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=mt(uS),hS=pe({},Li,{newState:0,oldState:0}),dS=mt(hS),pS=[9,13,27,32],Sc=En&&"CompositionEvent"in window,Ma=null;En&&"documentMode"in document&&(Ma=document.documentMode);var mS=En&&"TextEvent"in window&&!Ma,Id=En&&(!Sc||Ma&&8<Ma&&11>=Ma),Dd=" ",Md=!1;function xd(t,n){switch(t){case"keyup":return pS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function gS(t,n){switch(t){case"compositionend":return kd(n);case"keypress":return n.which!==32?null:(Md=!0,Dd);case"textInput":return t=n.data,t===Dd&&Md?null:t;default:return null}}function _S(t,n){if(Rs)return t==="compositionend"||!Sc&&xd(t,n)?(t=wd(),ul=gc=$n=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vS[t.type]:n==="textarea"}function Ud(t,n,a,l){ws?As?As.push(l):As=[l]:ws=l,n=$l(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var xa=null,ka=null;function yS(t){og(t,0)}function ml(t){var n=Ra(t);if(_d(n))return t}function zd(t,n){if(t==="change")return n}var jd=!1;if(En){var bc;if(En){var Tc="oninput"in document;if(!Tc){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Tc=typeof Hd.oninput=="function"}bc=Tc}else bc=!1;jd=bc&&(!document.documentMode||9<document.documentMode)}function Bd(){xa&&(xa.detachEvent("onpropertychange",Pd),ka=xa=null)}function Pd(t){if(t.propertyName==="value"&&ml(ka)){var n=[];Ud(n,ka,t,dc(t)),Cd(yS,n)}}function ES(t,n,a){t==="focusin"?(Bd(),xa=n,ka=a,xa.attachEvent("onpropertychange",Pd)):t==="focusout"&&Bd()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(ka)}function bS(t,n){if(t==="click")return ml(n)}function TS(t,n){if(t==="input"||t==="change")return ml(n)}function CS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var bt=typeof Object.is=="function"?Object.is:CS;function La(t,n){if(bt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!ic.call(n,c)||!bt(t[c],n[c]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vd(t,n){var a=qd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qd(a)}}function Gd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ol(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ol(t.document)}return n}function Cc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function wS(t,n){var a=Yd(n);n=t.focusedElem;var l=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Gd(n.ownerDocument.documentElement,n)){if(l!==null&&Cc(n)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(l.start,c);l=l.end===void 0?f:Math.min(l.end,c),!a.extend&&f>l&&(c=l,l=f,f=c),c=Vd(n,f);var m=Vd(n,l);c&&m&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==m.node||a.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>l?(a.addRange(t),a.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var AS=En&&"documentMode"in document&&11>=document.documentMode,Os=null,wc=null,Ua=null,Ac=!1;function Fd(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||Os==null||Os!==ol(l)||(l=Os,"selectionStart"in l&&Cc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ua&&La(Ua,l)||(Ua=l,l=$l(wc,"onSelect"),0<l.length&&(n=new dl("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=Os)))}function Ui(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ns={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},Rc={},Kd={};En&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function zi(t){if(Rc[t])return Rc[t];if(!Ns[t])return t;var n=Ns[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kd)return Rc[t]=n[a];return t}var Xd=zi("animationend"),Qd=zi("animationiteration"),Wd=zi("animationstart"),RS=zi("transitionrun"),OS=zi("transitionstart"),NS=zi("transitioncancel"),$d=zi("transitionend"),Zd=new Map,Jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Kt(t,n){Zd.set(t,n),ki(n,[t])}var xt=[],Is=0,Oc=0;function gl(){for(var t=Is,n=Oc=Is=0;n<t;){var a=xt[n];xt[n++]=null;var l=xt[n];xt[n++]=null;var c=xt[n];xt[n++]=null;var f=xt[n];if(xt[n++]=null,l!==null&&c!==null){var m=l.pending;m===null?c.next=c:(c.next=m.next,m.next=c),l.pending=c}f!==0&&ep(a,c,f)}}function _l(t,n,a,l){xt[Is++]=t,xt[Is++]=n,xt[Is++]=a,xt[Is++]=l,Oc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Nc(t,n,a,l){return _l(t,n,a,l),vl(t)}function Zn(t,n){return _l(t,null,null,n),vl(t)}function ep(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-St(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function vl(t){if(50<lr)throw lr=0,Lu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ds={},tp=new WeakMap;function kt(t,n){if(typeof t=="object"&&t!==null){var a=tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Z(n)},tp.set(t,n),n)}return{value:t,source:n,stack:Z(n)}}var Ms=[],xs=0,yl=null,El=0,Lt=[],Ut=0,ji=null,bn=1,Tn="";function Hi(t,n){Ms[xs++]=El,Ms[xs++]=yl,yl=t,El=n}function np(t,n,a){Lt[Ut++]=bn,Lt[Ut++]=Tn,Lt[Ut++]=ji,ji=t;var l=bn;t=Tn;var c=32-St(l)-1;l&=~(1<<c),a+=1;var f=32-St(n)+c;if(30<f){var m=c-c%5;f=(l&(1<<m)-1).toString(32),l>>=m,c-=m,bn=1<<32-St(n)+c|a<<c|l,Tn=f+t}else bn=1<<f|a<<c|l,Tn=t}function Ic(t){t.return!==null&&(Hi(t,1),np(t,1,0))}function Dc(t){for(;t===yl;)yl=Ms[--xs],Ms[xs]=null,El=Ms[--xs],Ms[xs]=null;for(;t===ji;)ji=Lt[--Ut],Lt[Ut]=null,Tn=Lt[--Ut],Lt[Ut]=null,bn=Lt[--Ut],Lt[Ut]=null}var ut=null,Je=null,me=!1,Xt=null,ln=!1,Mc=Error(r(519));function Bi(t){var n=Error(r(418,""));throw Ha(kt(n,t)),Mc}function ip(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[it]=t,n[pt]=l,a){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(a=0;a<cr.length;a++)oe(cr[a],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":oe("invalid",n),vd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ll(n);break;case"select":oe("invalid",n);break;case"textarea":oe("invalid",n),Ed(n,l.value,l.defaultValue,l.children),ll(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||hg(n.textContent,a)?(l.popover!=null&&(oe("beforetoggle",n),oe("toggle",n)),l.onScroll!=null&&oe("scroll",n),l.onScrollEnd!=null&&oe("scrollend",n),l.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||Bi(t)}function sp(t){for(ut=t.return;ut;)switch(ut.tag){case 3:case 27:ln=!0;return;case 5:case 13:ln=!1;return;default:ut=ut.return}}function za(t){if(t!==ut)return!1;if(!me)return sp(t),me=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zu(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Je&&Bi(t),sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Je=Wt(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Je=null}}else Je=ut?Wt(t.stateNode.nextSibling):null;return!0}function ja(){Je=ut=null,me=!1}function Ha(t){Xt===null?Xt=[t]:Xt.push(t)}var Ba=Error(r(460)),ap=Error(r(474)),xc={then:function(){}};function rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sl(){}function lp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ba?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(t=we,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ba?Error(r(483)):t}throw Pa=n,Ba}}var Pa=null;function op(){if(Pa===null)throw Error(r(459));var t=Pa;return Pa=null,t}var ks=null,qa=0;function bl(t){var n=qa;return qa+=1,ks===null&&(ks=[]),lp(ks,t,n)}function Va(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function cp(t){var n=t._init;return n(t._payload)}function up(t){function n(C,b){if(t){var A=C.deletions;A===null?(C.deletions=[b],C.flags|=16):A.push(b)}}function a(C,b){if(!t)return null;for(;b!==null;)n(C,b),b=b.sibling;return null}function l(C){for(var b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function c(C,b){return C=ui(C,b),C.index=0,C.sibling=null,C}function f(C,b,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<b?(C.flags|=33554434,b):A):(C.flags|=33554434,b)):(C.flags|=1048576,b)}function m(C){return t&&C.alternate===null&&(C.flags|=33554434),C}function _(C,b,A,D){return b===null||b.tag!==6?(b=Ru(A,C.mode,D),b.return=C,b):(b=c(b,A),b.return=C,b)}function y(C,b,A,D){var P=A.type;return P===p?I(C,b,A.props.children,D,A.key):b!==null&&(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===te&&cp(P)===b.type)?(b=c(b,A.props),Va(b,A),b.return=C,b):(b=Pl(A.type,A.key,A.props,null,C.mode,D),Va(b,A),b.return=C,b)}function T(C,b,A,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=Ou(A,C.mode,D),b.return=C,b):(b=c(b,A.children||[]),b.return=C,b)}function I(C,b,A,D,P){return b===null||b.tag!==7?(b=Wi(A,C.mode,D,P),b.return=C,b):(b=c(b,A),b.return=C,b)}function M(C,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Ru(""+b,C.mode,A),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case h:return A=Pl(b.type,b.key,b.props,null,C.mode,A),Va(A,b),A.return=C,A;case d:return b=Ou(b,C.mode,A),b.return=C,b;case te:var D=b._init;return b=D(b._payload),M(C,b,A)}if(F(b)||Ye(b))return b=Wi(b,C.mode,A,null),b.return=C,b;if(typeof b.then=="function")return M(C,bl(b),A);if(b.$$typeof===x)return M(C,jl(C,b),A);Tl(C,b)}return null}function O(C,b,A,D){var P=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:_(C,b,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return A.key===P?y(C,b,A,D):null;case d:return A.key===P?T(C,b,A,D):null;case te:return P=A._init,A=P(A._payload),O(C,b,A,D)}if(F(A)||Ye(A))return P!==null?null:I(C,b,A,D,null);if(typeof A.then=="function")return O(C,b,bl(A),D);if(A.$$typeof===x)return O(C,b,jl(C,A),D);Tl(C,A)}return null}function N(C,b,A,D,P){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return C=C.get(A)||null,_(b,C,""+D,P);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case h:return C=C.get(D.key===null?A:D.key)||null,y(b,C,D,P);case d:return C=C.get(D.key===null?A:D.key)||null,T(b,C,D,P);case te:var ae=D._init;return D=ae(D._payload),N(C,b,A,D,P)}if(F(D)||Ye(D))return C=C.get(A)||null,I(b,C,D,P,null);if(typeof D.then=="function")return N(C,b,A,bl(D),P);if(D.$$typeof===x)return N(C,b,A,jl(b,D),P);Tl(b,D)}return null}function q(C,b,A,D){for(var P=null,ae=null,G=b,K=b=0,Qe=null;G!==null&&K<A.length;K++){G.index>K?(Qe=G,G=null):Qe=G.sibling;var ge=O(C,G,A[K],D);if(ge===null){G===null&&(G=Qe);break}t&&G&&ge.alternate===null&&n(C,G),b=f(ge,b,K),ae===null?P=ge:ae.sibling=ge,ae=ge,G=Qe}if(K===A.length)return a(C,G),me&&Hi(C,K),P;if(G===null){for(;K<A.length;K++)G=M(C,A[K],D),G!==null&&(b=f(G,b,K),ae===null?P=G:ae.sibling=G,ae=G);return me&&Hi(C,K),P}for(G=l(G);K<A.length;K++)Qe=N(G,C,K,A[K],D),Qe!==null&&(t&&Qe.alternate!==null&&G.delete(Qe.key===null?K:Qe.key),b=f(Qe,b,K),ae===null?P=Qe:ae.sibling=Qe,ae=Qe);return t&&G.forEach(function(_i){return n(C,_i)}),me&&Hi(C,K),P}function $(C,b,A,D){if(A==null)throw Error(r(151));for(var P=null,ae=null,G=b,K=b=0,Qe=null,ge=A.next();G!==null&&!ge.done;K++,ge=A.next()){G.index>K?(Qe=G,G=null):Qe=G.sibling;var _i=O(C,G,ge.value,D);if(_i===null){G===null&&(G=Qe);break}t&&G&&_i.alternate===null&&n(C,G),b=f(_i,b,K),ae===null?P=_i:ae.sibling=_i,ae=_i,G=Qe}if(ge.done)return a(C,G),me&&Hi(C,K),P;if(G===null){for(;!ge.done;K++,ge=A.next())ge=M(C,ge.value,D),ge!==null&&(b=f(ge,b,K),ae===null?P=ge:ae.sibling=ge,ae=ge);return me&&Hi(C,K),P}for(G=l(G);!ge.done;K++,ge=A.next())ge=N(G,C,K,ge.value,D),ge!==null&&(t&&ge.alternate!==null&&G.delete(ge.key===null?K:ge.key),b=f(ge,b,K),ae===null?P=ge:ae.sibling=ge,ae=ge);return t&&G.forEach(function(Vb){return n(C,Vb)}),me&&Hi(C,K),P}function Ue(C,b,A,D){if(typeof A=="object"&&A!==null&&A.type===p&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case h:e:{for(var P=A.key;b!==null;){if(b.key===P){if(P=A.type,P===p){if(b.tag===7){a(C,b.sibling),D=c(b,A.props.children),D.return=C,C=D;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===te&&cp(P)===b.type){a(C,b.sibling),D=c(b,A.props),Va(D,A),D.return=C,C=D;break e}a(C,b);break}else n(C,b);b=b.sibling}A.type===p?(D=Wi(A.props.children,C.mode,D,A.key),D.return=C,C=D):(D=Pl(A.type,A.key,A.props,null,C.mode,D),Va(D,A),D.return=C,C=D)}return m(C);case d:e:{for(P=A.key;b!==null;){if(b.key===P)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){a(C,b.sibling),D=c(b,A.children||[]),D.return=C,C=D;break e}else{a(C,b);break}else n(C,b);b=b.sibling}D=Ou(A,C.mode,D),D.return=C,C=D}return m(C);case te:return P=A._init,A=P(A._payload),Ue(C,b,A,D)}if(F(A))return q(C,b,A,D);if(Ye(A)){if(P=Ye(A),typeof P!="function")throw Error(r(150));return A=P.call(A),$(C,b,A,D)}if(typeof A.then=="function")return Ue(C,b,bl(A),D);if(A.$$typeof===x)return Ue(C,b,jl(C,A),D);Tl(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(a(C,b.sibling),D=c(b,A),D.return=C,C=D):(a(C,b),D=Ru(A,C.mode,D),D.return=C,C=D),m(C)):a(C,b)}return function(C,b,A,D){try{qa=0;var P=Ue(C,b,A,D);return ks=null,P}catch(G){if(G===Ba)throw G;var ae=Bt(29,G,null,C.mode);return ae.lanes=D,ae.return=C,ae}finally{}}}var Pi=up(!0),fp=up(!1),Ls=_e(null),Cl=_e(0);function hp(t,n){t=kn,Ie(Cl,t),Ie(Ls,n),kn=t|n.baseLanes}function kc(){Ie(Cl,kn),Ie(Ls,Ls.current)}function Lc(){kn=Cl.current,je(Ls),je(Cl)}var zt=_e(null),on=null;function Jn(t){var n=t.alternate;Ie(Ve,Ve.current&1),Ie(zt,t),on===null&&(n===null||Ls.current!==null||n.memoizedState!==null)&&(on=t)}function dp(t){if(t.tag===22){if(Ie(Ve,Ve.current),Ie(zt,t),on===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(on=t)}}else ei()}function ei(){Ie(Ve,Ve.current),Ie(zt,zt.current)}function Cn(t){je(zt),on===t&&(on=null),je(Ve)}var Ve=_e(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var IS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},DS=s.unstable_scheduleCallback,MS=s.unstable_NormalPriority,Ge={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new IS,data:new Map,refCount:0}}function Ga(t){t.refCount--,t.refCount===0&&DS(MS,function(){t.controller.abort()})}var Ya=null,zc=0,Us=0,zs=null;function xS(t,n){if(Ya===null){var a=Ya=[];zc=0,Us=Vu(),zs={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zc++,n.then(pp,pp),n}function pp(){if(--zc===0&&Ya!==null){zs!==null&&(zs.status="fulfilled");var t=Ya;Ya=null,Us=0,zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kS(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var mp=Y.S;Y.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xS(t,n),mp!==null&&mp(t,n)};var qi=_e(null);function jc(){var t=qi.current;return t!==null?t:we.pooledCache}function Al(t,n){n===null?Ie(qi,qi.current):Ie(qi,n.pool)}function gp(){var t=jc();return t===null?null:{parent:Ge._currentValue,pool:t}}var ti=0,ie=null,ye=null,He=null,Rl=!1,js=!1,Vi=!1,Ol=0,Fa=0,Hs=null,LS=0;function ze(){throw Error(r(321))}function Hc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!bt(t[a],n[a]))return!1;return!0}function Bc(t,n,a,l,c,f){return ti=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Y.H=t===null||t.memoizedState===null?Gi:ni,Vi=!1,f=a(l,c),Vi=!1,js&&(f=vp(n,a,l,c)),_p(t),f}function _p(t){Y.H=cn;var n=ye!==null&&ye.next!==null;if(ti=0,He=ye=ie=null,Rl=!1,Fa=0,Hs=null,n)throw Error(r(300));t===null||Ke||(t=t.dependencies,t!==null&&zl(t)&&(Ke=!0))}function vp(t,n,a,l){ie=t;var c=0;do{if(js&&(Hs=null),Fa=0,js=!1,25<=c)throw Error(r(301));if(c+=1,He=ye=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Y.H=Yi,f=n(a,l)}while(js);return f}function US(){var t=Y.H,n=t.useState()[0];return n=typeof n.then=="function"?Ka(n):n,t=t.useState()[0],(ye!==null?ye.memoizedState:null)!==t&&(ie.flags|=1024),n}function Pc(){var t=Ol!==0;return Ol=0,t}function qc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vc(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}ti=0,He=ye=ie=null,js=!1,Fa=Ol=0,Hs=null}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ie.memoizedState=He=t:He=He.next=t,He}function Be(){if(ye===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var n=He===null?ie.memoizedState:He.next;if(n!==null)He=n,ye=t;else{if(t===null)throw ie.alternate===null?Error(r(467)):Error(r(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},He===null?ie.memoizedState=He=t:He=He.next=t}return He}var Nl;Nl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ka(t){var n=Fa;return Fa+=1,Hs===null&&(Hs=[]),t=lp(Hs,t,n),n=ie,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,Y.H=n===null||n.memoizedState===null?Gi:ni),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ka(t);if(t.$$typeof===x)return st(t)}throw Error(r(438,String(t)))}function Gc(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=De;return n.index++,a}function wn(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=Be();return Yc(n,ye,t)}function Yc(t,n,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var c=t.baseQueue,f=l.pending;if(f!==null){if(c!==null){var m=c.next;c.next=f.next,f.next=m}n.baseQueue=c=f,l.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var _=m=null,y=null,T=n,I=!1;do{var M=T.lane&-536870913;if(M!==T.lane?(fe&M)===M:(ti&M)===M){var O=T.revertLane;if(O===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),M===Us&&(I=!0);else if((ti&O)===O){T=T.next,O===Us&&(I=!0);continue}else M={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(_=y=M,m=f):y=y.next=M,ie.lanes|=O,fi|=O;M=T.action,Vi&&a(f,M),f=T.hasEagerState?T.eagerState:a(f,M)}else O={lane:M,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(_=y=O,m=f):y=y.next=O,ie.lanes|=M,fi|=M;T=T.next}while(T!==null&&T!==n);if(y===null?m=f:y.next=_,!bt(f,t.memoizedState)&&(Ke=!0,I&&(a=zs,a!==null)))throw a;t.memoizedState=f,t.baseState=m,t.baseQueue=y,l.lastRenderedState=f}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Fc(t){var n=Be(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var m=c=c.next;do f=t(f,m.action),m=m.next;while(m!==c);bt(f,n.memoizedState)||(Ke=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function yp(t,n,a){var l=ie,c=Be(),f=me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var m=!bt((ye||c).memoizedState,a);if(m&&(c.memoizedState=a,Ke=!0),c=c.queue,Qc(bp.bind(null,l,c,t),[t]),c.getSnapshot!==n||m||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,Bs(9,Sp.bind(null,l,c,a,n),{destroy:void 0},null),we===null)throw Error(r(349));f||ti&60||Ep(l,n,a)}return a}function Ep(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=Nl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Sp(t,n,a,l){n.value=a,n.getSnapshot=l,Tp(n)&&Cp(t)}function bp(t,n,a){return a(function(){Tp(n)&&Cp(t)})}function Tp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!bt(t,a)}catch{return!0}}function Cp(t){var n=Zn(t,2);n!==null&&ft(n,t,2)}function Kc(t){var n=gt();if(typeof t=="function"){var a=t;if(t=a(),Vi){Qn(!0);try{a()}finally{Qn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:t},n}function wp(t,n,a,l){return t.baseState=a,Yc(t,ye,typeof l=="function"?l:wn)}function zS(t,n,a,l,c){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};Y.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Ap(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ap(t,n){var a=n.action,l=n.payload,c=t.state;if(n.isTransition){var f=Y.T,m={};Y.T=m;try{var _=a(c,l),y=Y.S;y!==null&&y(m,_),Rp(t,n,_)}catch(T){Xc(t,n,T)}finally{Y.T=f}}else try{f=a(c,l),Rp(t,n,f)}catch(T){Xc(t,n,T)}}function Rp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Op(t,n,l)},function(l){return Xc(t,n,l)}):Op(t,n,a)}function Op(t,n,a){n.status="fulfilled",n.value=a,Np(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ap(t,a)))}function Xc(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==l)}t.action=null}function Np(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ip(t,n){return n}function Dp(t,n){if(me){var a=we.formState;if(a!==null){e:{var l=ie;if(me){if(Je){t:{for(var c=Je,f=ln;c.nodeType!==8;){if(!f){c=null;break t}if(c=Wt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Wt(c.nextSibling),l=c.data==="F!";break e}}Bi(l)}l=!1}l&&(n=a[0])}}return a=gt(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=l,a=Qp.bind(null,ie,l),l.dispatch=a,l=Kc(!1),f=eu.bind(null,ie,!1,l.queue),l=gt(),c={state:n,dispatch:null,action:t,pending:null},l.queue=c,a=zS.bind(null,ie,c,f,a),c.dispatch=a,l.memoizedState=t,[n,a,!1]}function Mp(t){var n=Be();return xp(n,ye,t)}function xp(t,n,a){n=Yc(t,n,Ip)[0],t=Dl(wn)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ka(n):n;var l=Be(),c=l.queue,f=c.dispatch;return a!==l.memoizedState&&(ie.flags|=2048,Bs(9,jS.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function jS(t,n){t.action=n}function kp(t){var n=Be(),a=ye;if(a!==null)return xp(n,a,t);Be(),n=n.memoizedState,a=Be();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function Bs(t,n,a,l){return t={tag:t,create:n,inst:a,deps:l,next:null},n=ie.updateQueue,n===null&&(n=Nl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function Lp(){return Be().memoizedState}function Ml(t,n,a,l){var c=gt();ie.flags|=t,c.memoizedState=Bs(1|n,a,{destroy:void 0},l===void 0?null:l)}function xl(t,n,a,l){var c=Be();l=l===void 0?null:l;var f=c.memoizedState.inst;ye!==null&&l!==null&&Hc(l,ye.memoizedState.deps)?c.memoizedState=Bs(n,a,f,l):(ie.flags|=t,c.memoizedState=Bs(1|n,a,f,l))}function Up(t,n){Ml(8390656,8,t,n)}function Qc(t,n){xl(2048,8,t,n)}function zp(t,n){return xl(4,2,t,n)}function jp(t,n){return xl(4,4,t,n)}function Hp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bp(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,Hp.bind(null,n,t),a)}function Wc(){}function Pp(t,n){var a=Be();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Hc(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function qp(t,n){var a=Be();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Hc(n,l[1]))return l[0];if(l=t(),Vi){Qn(!0);try{t()}finally{Qn(!1)}}return a.memoizedState=[l,n],l}function $c(t,n,a){return a===void 0||ti&1073741824?t.memoizedState=n:(t.memoizedState=a,t=Gm(),ie.lanes|=t,fi|=t,a)}function Vp(t,n,a,l){return bt(a,n)?a:Ls.current!==null?(t=$c(t,a,l),bt(t,n)||(Ke=!0),t):ti&42?(t=Gm(),ie.lanes|=t,fi|=t,n):(Ke=!0,t.memoizedState=a)}function Gp(t,n,a,l,c){var f=B.p;B.p=f!==0&&8>f?f:8;var m=Y.T,_={};Y.T=_,eu(t,!1,n,a);try{var y=c(),T=Y.S;if(T!==null&&T(_,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var I=kS(y,l);Xa(t,n,I,At(t))}else Xa(t,n,l,At(t))}catch(M){Xa(t,n,{then:function(){},status:"rejected",reason:M},At())}finally{B.p=f,Y.T=m}}function HS(){}function Zc(t,n,a,l){if(t.tag!==5)throw Error(r(476));var c=Yp(t).queue;Gp(t,c,n,ue,a===null?HS:function(){return Fp(t),a(l)})}function Yp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:ue},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fp(t){var n=Yp(t).next.queue;Xa(t,n,{},At())}function Jc(){return st(pr)}function Kp(){return Be().memoizedState}function Xp(){return Be().memoizedState}function BS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=At();t=ai(a);var l=ri(n,t,a);l!==null&&(ft(l,n,a),$a(l,n,a)),n={cache:Uc()},t.payload=n;return}n=n.return}}function PS(t,n,a){var l=At();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?Wp(n,a):(a=Nc(t,n,a,l),a!==null&&(ft(a,t,l),$p(a,n,l)))}function Qp(t,n,a){var l=At();Xa(t,n,a,l)}function Xa(t,n,a,l){var c={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))Wp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var m=n.lastRenderedState,_=f(m,a);if(c.hasEagerState=!0,c.eagerState=_,bt(_,m))return _l(t,n,c,0),we===null&&gl(),!1}catch{}finally{}if(a=Nc(t,n,c,l),a!==null)return ft(a,t,l),$p(a,n,l),!0}return!1}function eu(t,n,a,l){if(l={lane:2,revertLane:Vu(),action:l,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Nc(t,a,l,2),n!==null&&ft(n,t,2)}function kl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function Wp(t,n){js=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $p(t,n,a){if(a&4194176){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,od(t,a)}}var cn={readContext:st,use:Il,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze};cn.useCacheRefresh=ze,cn.useMemoCache=ze,cn.useHostTransitionStatus=ze,cn.useFormState=ze,cn.useActionState=ze,cn.useOptimistic=ze;var Gi={readContext:st,use:Il,useCallback:function(t,n){return gt().memoizedState=[t,n===void 0?null:n],t},useContext:st,useEffect:Up,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ml(4194308,4,Hp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ml(4194308,4,t,n)},useInsertionEffect:function(t,n){Ml(4,2,t,n)},useMemo:function(t,n){var a=gt();n=n===void 0?null:n;var l=t();if(Vi){Qn(!0);try{t()}finally{Qn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=gt();if(a!==void 0){var c=a(n);if(Vi){Qn(!0);try{a(n)}finally{Qn(!1)}}}else c=n;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=PS.bind(null,ie,t),[l.memoizedState,t]},useRef:function(t){var n=gt();return t={current:t},n.memoizedState=t},useState:function(t){t=Kc(t);var n=t.queue,a=Qp.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wc,useDeferredValue:function(t,n){var a=gt();return $c(a,t,n)},useTransition:function(){var t=Kc(!1);return t=Gp.bind(null,ie,t.queue,!0,!1),gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=ie,c=gt();if(me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),we===null)throw Error(r(349));fe&60||Ep(l,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Up(bp.bind(null,l,f,t),[t]),l.flags|=2048,Bs(9,Sp.bind(null,l,f,a,n),{destroy:void 0},null),a},useId:function(){var t=gt(),n=we.identifierPrefix;if(me){var a=Tn,l=bn;a=(l&~(1<<32-St(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=LS++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return gt().memoizedState=BS.bind(null,ie)}};Gi.useMemoCache=Gc,Gi.useHostTransitionStatus=Jc,Gi.useFormState=Dp,Gi.useActionState=Dp,Gi.useOptimistic=function(t){var n=gt();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=eu.bind(null,ie,!0,a),a.dispatch=n,[t,n]};var ni={readContext:st,use:Il,useCallback:Pp,useContext:st,useEffect:Qc,useImperativeHandle:Bp,useInsertionEffect:zp,useLayoutEffect:jp,useMemo:qp,useReducer:Dl,useRef:Lp,useState:function(){return Dl(wn)},useDebugValue:Wc,useDeferredValue:function(t,n){var a=Be();return Vp(a,ye.memoizedState,t,n)},useTransition:function(){var t=Dl(wn)[0],n=Be().memoizedState;return[typeof t=="boolean"?t:Ka(t),n]},useSyncExternalStore:yp,useId:Kp};ni.useCacheRefresh=Xp,ni.useMemoCache=Gc,ni.useHostTransitionStatus=Jc,ni.useFormState=Mp,ni.useActionState=Mp,ni.useOptimistic=function(t,n){var a=Be();return wp(a,ye,t,n)};var Yi={readContext:st,use:Il,useCallback:Pp,useContext:st,useEffect:Qc,useImperativeHandle:Bp,useInsertionEffect:zp,useLayoutEffect:jp,useMemo:qp,useReducer:Fc,useRef:Lp,useState:function(){return Fc(wn)},useDebugValue:Wc,useDeferredValue:function(t,n){var a=Be();return ye===null?$c(a,t,n):Vp(a,ye.memoizedState,t,n)},useTransition:function(){var t=Fc(wn)[0],n=Be().memoizedState;return[typeof t=="boolean"?t:Ka(t),n]},useSyncExternalStore:yp,useId:Kp};Yi.useCacheRefresh=Xp,Yi.useMemoCache=Gc,Yi.useHostTransitionStatus=Jc,Yi.useFormState=kp,Yi.useActionState=kp,Yi.useOptimistic=function(t,n){var a=Be();return ye!==null?wp(a,ye,t,n):(a.baseState=t,[t,a.queue.dispatch])};function tu(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:pe({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nu={isMounted:function(t){return(t=t._reactInternals)?Q(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=At(),c=ai(l);c.payload=n,a!=null&&(c.callback=a),n=ri(t,c,l),n!==null&&(ft(n,t,l),$a(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=At(),c=ai(l);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ri(t,c,l),n!==null&&(ft(n,t,l),$a(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=At(),l=ai(a);l.tag=2,n!=null&&(l.callback=n),n=ri(t,l,a),n!==null&&(ft(n,t,a),$a(n,t,a))}};function Zp(t,n,a,l,c,f,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,m):n.prototype&&n.prototype.isPureReactComponent?!La(a,l)||!La(c,f):!0}function Jp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&nu.enqueueReplaceState(n,n.state,null)}function Fi(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=pe({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function em(t){Ll(t)}function tm(t){console.error(t)}function nm(t){Ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function im(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function iu(t,n,a){return a=ai(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function sm(t){return t=ai(t),t.tag=3,t}function am(t,n,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;t.payload=function(){return c(f)},t.callback=function(){im(n,a,l)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){im(n,a,l),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function qS(t,n,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Wa(n,a,c,!0),a=zt.current,a!==null){switch(a.tag){case 13:return on===null?ju():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===xc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Bu(t,l,c)),!1;case 22:return a.flags|=65536,l===xc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Bu(t,l,c)),!1}throw Error(r(435,a.tag))}return Bu(t,l,c),ju(),!1}if(me)return n=zt.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==Mc&&(t=Error(r(422),{cause:l}),Ha(kt(t,a)))):(l!==Mc&&(n=Error(r(423),{cause:l}),Ha(kt(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=kt(l,a),c=iu(t.stateNode,l,c),vu(t,c),Le!==4&&(Le=2)),!1;var f=Error(r(520),{cause:l});if(f=kt(f,a),ar===null?ar=[f]:ar.push(f),Le!==4&&(Le=2),n===null)return!0;l=kt(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=iu(a.stateNode,l,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hi===null||!hi.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=sm(c),am(c,t,a,l),vu(a,c),!1}a=a.return}while(a!==null);return!1}var rm=Error(r(461)),Ke=!1;function et(t,n,a,l){n.child=t===null?fp(n,null,a,l):Pi(n,t.child,a,l)}function lm(t,n,a,l,c){a=a.render;var f=n.ref;if("ref"in l){var m={};for(var _ in l)_!=="ref"&&(m[_]=l[_])}else m=l;return Xi(n),l=Bc(t,n,a,m,f,c),_=Pc(),t!==null&&!Ke?(qc(t,n,c),An(t,n,c)):(me&&_&&Ic(n),n.flags|=1,et(t,n,l,c),n.child)}function om(t,n,a,l,c){if(t===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cm(t,n,f,l,c)):(t=Pl(a.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hu(t,c)){var m=f.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(m,l)&&t.ref===n.ref)return An(t,n,c)}return n.flags|=1,t=ui(f,l),t.ref=n.ref,t.return=n,n.child=t}function cm(t,n,a,l,c){if(t!==null){var f=t.memoizedProps;if(La(f,l)&&t.ref===n.ref)if(Ke=!1,n.pendingProps=l=f,hu(t,c))t.flags&131072&&(Ke=!0);else return n.lanes=t.lanes,An(t,n,c)}return su(t,n,a,l,c)}function um(t,n,a){var l=n.pendingProps,c=l.children,f=(n.stateNode._pendingVisibility&2)!==0,m=t!==null?t.memoizedState:null;if(Qa(t,n),l.mode==="hidden"||f){if(n.flags&128){if(l=m!==null?m.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return fm(t,n,l,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,m!==null?m.cachePool:null),m!==null?hp(n,m):kc(),dp(n);else return n.lanes=n.childLanes=536870912,fm(t,n,m!==null?m.baseLanes|a:a,a)}else m!==null?(Al(n,m.cachePool),hp(n,m),ei(),n.memoizedState=null):(t!==null&&Al(n,null),kc(),ei());return et(t,n,c,a),n.child}function fm(t,n,a,l){var c=jc();return c=c===null?null:{parent:Ge._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Al(n,null),kc(),dp(n),t!==null&&Wa(t,n,l,!0),null}function Qa(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function su(t,n,a,l,c){return Xi(n),a=Bc(t,n,a,l,void 0,c),l=Pc(),t!==null&&!Ke?(qc(t,n,c),An(t,n,c)):(me&&l&&Ic(n),n.flags|=1,et(t,n,a,c),n.child)}function hm(t,n,a,l,c,f){return Xi(n),n.updateQueue=null,a=vp(n,l,a,c),_p(t),l=Pc(),t!==null&&!Ke?(qc(t,n,f),An(t,n,f)):(me&&l&&Ic(n),n.flags|=1,et(t,n,a,f),n.child)}function dm(t,n,a,l,c){if(Xi(n),n.stateNode===null){var f=Ds,m=a.contextType;typeof m=="object"&&m!==null&&(f=st(m)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},gu(n),m=a.contextType,f.context=typeof m=="object"&&m!==null?st(m):Ds,f.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(tu(n,a,m,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&nu.enqueueReplaceState(f,f.state,null),Ja(n,l,f,c),Za(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var _=n.memoizedProps,y=Fi(a,_);f.props=y;var T=f.context,I=a.contextType;m=Ds,typeof I=="object"&&I!==null&&(m=st(I));var M=a.getDerivedStateFromProps;I=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,I||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||T!==m)&&Jp(n,f,l,m),si=!1;var O=n.memoizedState;f.state=O,Ja(n,l,f,c),Za(),T=n.memoizedState,_||O!==T||si?(typeof M=="function"&&(tu(n,a,M,l),T=n.memoizedState),(y=si||Zp(n,a,y,l,O,T,m))?(I||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=T),f.props=l,f.state=T,f.context=m,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,_u(t,n),m=n.memoizedProps,I=Fi(a,m),f.props=I,M=n.pendingProps,O=f.context,T=a.contextType,y=Ds,typeof T=="object"&&T!==null&&(y=st(T)),_=a.getDerivedStateFromProps,(T=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==M||O!==y)&&Jp(n,f,l,y),si=!1,O=n.memoizedState,f.state=O,Ja(n,l,f,c),Za();var N=n.memoizedState;m!==M||O!==N||si||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof _=="function"&&(tu(n,a,_,l),N=n.memoizedState),(I=si||Zp(n,a,I,l,O,N,y)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?(T||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===t.memoizedProps&&O===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&O===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=I):(typeof f.componentDidUpdate!="function"||m===t.memoizedProps&&O===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&O===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,Qa(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=Pi(n,t.child,null,c),n.child=Pi(n,null,a,c)):et(t,n,a,c),n.memoizedState=f.state,t=n.child):t=An(t,n,c),t}function pm(t,n,a,l){return ja(),n.flags|=256,et(t,n,a,l),n.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:gp()}}function lu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Pt),t}function mm(t,n,a){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,m;if((m=f)||(m=t!==null&&t.memoizedState===null?!1:(Ve.current&2)!==0),m&&(c=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(me){if(c?Jn(n):ei(),me){var _=Je,y;if(y=_){e:{for(y=_,_=ln;y.nodeType!==8;){if(!_){_=null;break e}if(y=Wt(y.nextSibling),y===null){_=null;break e}}_=y}_!==null?(n.memoizedState={dehydrated:_,treeContext:ji!==null?{id:bn,overflow:Tn}:null,retryLane:536870912},y=Bt(18,null,null,0),y.stateNode=_,y.return=n,n.child=y,ut=n,Je=null,y=!0):y=!1}y||Bi(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return _.data==="$!"?n.lanes=16:n.lanes=536870912,null;Cn(n)}return _=l.children,l=l.fallback,c?(ei(),c=n.mode,_=cu({mode:"hidden",children:_},c),l=Wi(l,c,a,null),_.return=n,l.return=n,_.sibling=l,n.child=_,c=n.child,c.memoizedState=ru(a),c.childLanes=lu(t,m,a),n.memoizedState=au,l):(Jn(n),ou(n,_))}if(y=t.memoizedState,y!==null&&(_=y.dehydrated,_!==null)){if(f)n.flags&256?(Jn(n),n.flags&=-257,n=uu(t,n,a)):n.memoizedState!==null?(ei(),n.child=t.child,n.flags|=128,n=null):(ei(),c=l.fallback,_=n.mode,l=cu({mode:"visible",children:l.children},_),c=Wi(c,_,a,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Pi(n,t.child,null,a),l=n.child,l.memoizedState=ru(a),l.childLanes=lu(t,m,a),n.memoizedState=au,n=c);else if(Jn(n),_.data==="$!"){if(m=_.nextSibling&&_.nextSibling.dataset,m)var T=m.dgst;m=T,l=Error(r(419)),l.stack="",l.digest=m,Ha({value:l,source:null,stack:null}),n=uu(t,n,a)}else if(Ke||Wa(t,n,a,!1),m=(a&t.childLanes)!==0,Ke||m){if(m=we,m!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(m.suspendedLanes|a)?0:l,l!==0&&l!==y.retryLane)throw y.retryLane=l,Zn(t,l),ft(m,t,l),rm}_.data==="$?"||ju(),n=uu(t,n,a)}else _.data==="$?"?(n.flags|=128,n.child=t.child,n=ib.bind(null,t),_._reactRetry=n,n=null):(t=y.treeContext,Je=Wt(_.nextSibling),ut=n,me=!0,Xt=null,ln=!1,t!==null&&(Lt[Ut++]=bn,Lt[Ut++]=Tn,Lt[Ut++]=ji,bn=t.id,Tn=t.overflow,ji=n),n=ou(n,l.children),n.flags|=4096);return n}return c?(ei(),c=l.fallback,_=n.mode,y=t.child,T=y.sibling,l=ui(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&31457280,T!==null?c=ui(T,c):(c=Wi(c,_,a,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,_=t.child.memoizedState,_===null?_=ru(a):(y=_.cachePool,y!==null?(T=Ge._currentValue,y=y.parent!==T?{parent:T,pool:T}:y):y=gp(),_={baseLanes:_.baseLanes|a,cachePool:y}),c.memoizedState=_,c.childLanes=lu(t,m,a),n.memoizedState=au,l):(Jn(n),a=t.child,t=a.sibling,a=ui(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=a,n.memoizedState=null,a)}function ou(t,n){return n=cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function cu(t,n){return Pm(t,n,0,null)}function uu(t,n,a){return Pi(n,t.child,null,a),t=ou(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gm(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),pu(t.return,n,a)}function fu(t,n,a,l,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=c)}function _m(t,n,a){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(et(t,n,l.children,a),l=Ve.current,l&2)l=l&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,a,n);else if(t.tag===19)gm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ie(Ve,l),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),fu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&wl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}fu(n,!0,a,null,f);break;case"together":fu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function An(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),fi|=n.lanes,!(a&n.childLanes))if(t!==null){if(Wa(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ui(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ui(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function VS(t,n,a){switch(n.tag){case 3:Jr(n,n.stateNode.containerInfo),ii(n,Ge,t.memoizedState.cache),ja();break;case 27:case 5:nc(n);break;case 4:Jr(n,n.stateNode.containerInfo);break;case 10:ii(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(n),n.flags|=128,null):a&n.child.childLanes?mm(t,n,a):(Jn(n),t=An(t,n,a),t!==null?t.sibling:null);Jn(n);break;case 19:var c=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Wa(t,n,a,!1),l=(a&n.childLanes)!==0),c){if(l)return _m(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ie(Ve,Ve.current),l)break;return null;case 22:case 23:return n.lanes=0,um(t,n,a);case 24:ii(n,Ge,t.memoizedState.cache)}return An(t,n,a)}function vm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ke=!0;else{if(!hu(t,a)&&!(n.flags&128))return Ke=!1,VS(t,n,a);Ke=!!(t.flags&131072)}else Ke=!1,me&&n.flags&1048576&&np(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")Au(l)?(t=Fi(l,t),n.tag=1,n=dm(null,n,l,t,a)):(n.tag=0,n=su(null,n,l,t,a));else{if(l!=null){if(c=l.$$typeof,c===U){n.tag=11,n=lm(null,n,l,t,a);break e}else if(c===le){n.tag=14,n=om(null,n,l,t,a);break e}}throw n=nn(l)||l,Error(r(306,n,""))}}return n;case 0:return su(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,c=Fi(l,n.pendingProps),dm(t,n,l,c,a);case 3:e:{if(Jr(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,l=c.element,_u(t,n),Ja(n,f,null,a);var m=n.memoizedState;if(f=m.cache,ii(n,Ge,f),f!==c.cache&&mu(n,[Ge],a,!0),Za(),f=m.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=pm(t,n,f,a);break e}else if(f!==l){l=kt(Error(r(424)),n),Ha(l),n=pm(t,n,f,a);break e}else for(Je=Wt(n.stateNode.containerInfo.firstChild),ut=n,me=!0,Xt=null,ln=!0,a=fp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ja(),f===l){n=An(t,n,a);break e}et(t,n,f,a)}n=n.child}return n;case 26:return Qa(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:me||(a=n.type,t=n.pendingProps,l=Jl(Xn.current).createElement(a),l[it]=n,l[pt]=t,tt(l,a,t),Fe(l),n.stateNode=l):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nc(n),t===null&&me&&(l=n.stateNode=vg(n.type,n.pendingProps,Xn.current),ut=n,ln=!0,Je=Wt(l.firstChild)),l=n.pendingProps.children,t!==null||me?et(t,n,l,a):n.child=Pi(n,null,l,a),Qa(t,n),n.child;case 5:return t===null&&me&&((c=l=Je)&&(l=yb(l,n.type,n.pendingProps,ln),l!==null?(n.stateNode=l,ut=n,Je=Wt(l.firstChild),ln=!1,c=!0):c=!1),c||Bi(n)),nc(n),c=n.type,f=n.pendingProps,m=t!==null?t.memoizedProps:null,l=f.children,Zu(c,f)?l=null:m!==null&&Zu(c,m)&&(n.flags|=32),n.memoizedState!==null&&(c=Bc(t,n,US,null,null,a),pr._currentValue=c),Qa(t,n),et(t,n,l,a),n.child;case 6:return t===null&&me&&((t=a=Je)&&(a=Eb(a,n.pendingProps,ln),a!==null?(n.stateNode=a,ut=n,Je=null,t=!0):t=!1),t||Bi(n)),null;case 13:return mm(t,n,a);case 4:return Jr(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Pi(n,null,l,a):et(t,n,l,a),n.child;case 11:return lm(t,n,n.type,n.pendingProps,a);case 7:return et(t,n,n.pendingProps,a),n.child;case 8:return et(t,n,n.pendingProps.children,a),n.child;case 12:return et(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,ii(n,n.type,l.value),et(t,n,l.children,a),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Xi(n),c=st(c),l=l(c),n.flags|=1,et(t,n,l,a),n.child;case 14:return om(t,n,n.type,n.pendingProps,a);case 15:return cm(t,n,n.type,n.pendingProps,a);case 19:return _m(t,n,a);case 22:return um(t,n,a);case 24:return Xi(n),l=st(Ge),t===null?(c=jc(),c===null&&(c=we,f=Uc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:l,cache:c},gu(n),ii(n,Ge,c)):(t.lanes&a&&(_u(t,n),Ja(n,null,null,a),Za()),c=t.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ii(n,Ge,l)):(l=f.cache,ii(n,Ge,l),l!==c.cache&&mu(n,[Ge],a,!0))),et(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var du=_e(null),Ki=null,Rn=null;function ii(t,n,a){Ie(du,n._currentValue),n._currentValue=a}function On(t){t._currentValue=du.current,je(du)}function pu(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var m=c.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=c;for(var y=0;y<n.length;y++)if(_.context===n[y]){f.lanes|=a,_=f.alternate,_!==null&&(_.lanes|=a),pu(f.return,a,t),l||(m=null);break e}f=_.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(r(341));m.lanes|=a,f=m.alternate,f!==null&&(f.lanes|=a),pu(m,a,t),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function Wa(t,n,a,l){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var _=c.type;bt(c.pendingProps.value,m.value)||(t!==null?t.push(_):t=[_])}}else if(c===Zr.current){if(m=c.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(pr):t=[pr])}c=c.return}t!==null&&mu(n,t,a,l),n.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!bt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xi(t){Ki=t,Rn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function st(t){return ym(Ki,t)}function jl(t,n){return Ki===null&&Xi(t),ym(t,n)}function ym(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Rn===null){if(t===null)throw Error(r(308));Rn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Rn=Rn.next=n;return a}var si=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ai(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ri(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,xe&2){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=vl(t),ep(t,null,a),n}return _l(t,l,n,a),vl(t)}function $a(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,od(t,a)}}function vu(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=m:f=f.next=m,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function Za(){if(yu){var t=zs;if(t!==null)throw t}}function Ja(t,n,a,l){yu=!1;var c=t.updateQueue;si=!1;var f=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,T=y.next;y.next=null,m===null?f=T:m.next=T,m=y;var I=t.alternate;I!==null&&(I=I.updateQueue,_=I.lastBaseUpdate,_!==m&&(_===null?I.firstBaseUpdate=T:_.next=T,I.lastBaseUpdate=y))}if(f!==null){var M=c.baseState;m=0,I=T=y=null,_=f;do{var O=_.lane&-536870913,N=O!==_.lane;if(N?(fe&O)===O:(l&O)===O){O!==0&&O===Us&&(yu=!0),I!==null&&(I=I.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var q=t,$=_;O=n;var Ue=a;switch($.tag){case 1:if(q=$.payload,typeof q=="function"){M=q.call(Ue,M,O);break e}M=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=$.payload,O=typeof q=="function"?q.call(Ue,M,O):q,O==null)break e;M=pe({},M,O);break e;case 2:si=!0}}O=_.callback,O!==null&&(t.flags|=64,N&&(t.flags|=8192),N=c.callbacks,N===null?c.callbacks=[O]:N.push(O))}else N={lane:O,tag:_.tag,payload:_.payload,callback:_.callback,next:null},I===null?(T=I=N,y=M):I=I.next=N,m|=O;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);I===null&&(y=M),c.baseState=y,c.firstBaseUpdate=T,c.lastBaseUpdate=I,f===null&&(c.shared.lanes=0),fi|=m,t.lanes=m,t.memoizedState=M}}function Em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}function er(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&t)===t){l=void 0;var f=a.create,m=a.inst;l=f(),m.destroy=l}a=a.next}while(a!==c)}}catch(_){Te(n,n.return,_)}}function li(t,n,a){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&t)===t){var m=l.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,c=n;var y=a;try{_()}catch(T){Te(c,y,T)}}}l=l.next}while(l!==f)}}catch(T){Te(n,n.return,T)}}function bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sm(n,a)}catch(l){Te(t,t.return,l)}}}function Tm(t,n,a){a.props=Fi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Te(t,n,l)}}function Qi(t,n){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=l;break;default:c=l}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Te(t,n,f)}}function Tt(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){Te(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Te(t,n,c)}else a.current=null}function Cm(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){Te(t,t.return,c)}}function wm(t,n,a){try{var l=t.stateNode;pb(l,t.type,a,n),l[pt]=n}catch(c){Te(t,t.return,c)}}function Am(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Eu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Su(t,n,a),t=t.sibling;t!==null;)Su(t,n,a),t=t.sibling}function Hl(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}var Nn=!1,ke=!1,bu=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,Xe=null,Om=!1;function GS(t,n){if(t=t.containerInfo,Wu=ao,t=Yd(t),Cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var m=0,_=-1,y=-1,T=0,I=0,M=t,O=null;t:for(;;){for(var N;M!==a||c!==0&&M.nodeType!==3||(_=m+c),M!==f||l!==0&&M.nodeType!==3||(y=m+l),M.nodeType===3&&(m+=M.nodeValue.length),(N=M.firstChild)!==null;)O=M,M=N;for(;;){if(M===t)break t;if(O===a&&++T===c&&(_=m),O===f&&++I===l&&(y=m),(N=M.nextSibling)!==null)break;M=O,O=M.parentNode}M=N}a=_===-1||y===-1?null:{start:_,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for($u={focusedElem:t,selectionRange:a},ao=!1,Xe=n;Xe!==null;)if(n=Xe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Xe=t;else for(;Xe!==null;){switch(n=Xe,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var q=Fi(a.type,c,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(q,f),l.__reactInternalSnapshotBeforeUpdate=t}catch($){Te(a,a.return,$)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Xe=t;break}Xe=n.return}return q=Om,Om=!1,q}function Nm(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Dn(t,a),l&4&&er(5,a);break;case 1:if(Dn(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Te(a,a.return,_)}else{var c=Fi(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Te(a,a.return,_)}}l&64&&bm(a),l&512&&Qi(a,a.return);break;case 3:if(Dn(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Sm(l,t)}catch(_){Te(a,a.return,_)}}break;case 26:Dn(t,a),l&512&&Qi(a,a.return);break;case 27:case 5:Dn(t,a),n===null&&l&4&&Cm(a),l&512&&Qi(a,a.return);break;case 12:Dn(t,a);break;case 13:Dn(t,a),l&4&&Mm(t,a);break;case 22:if(c=a.memoizedState!==null||Nn,!c){n=n!==null&&n.memoizedState!==null||ke;var f=Nn,m=ke;Nn=c,(ke=n)&&!m?oi(t,a,(a.subtreeFlags&8772)!==0):Dn(t,a),Nn=f,ke=m}l&512&&(a.memoizedProps.mode==="manual"?Qi(a,a.return):Tt(a,a.return));break;default:Dn(t,a)}}function Im(t){var n=t.alternate;n!==null&&(t.alternate=null,Im(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pe=null,Ct=!1;function In(t,n,a){for(a=a.child;a!==null;)Dm(t,n,a),a=a.sibling}function Dm(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ta,a)}catch{}switch(a.tag){case 26:ke||Tt(a,n),In(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Tt(a,n);var l=Pe,c=Ct;for(Pe=a.stateNode,In(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);oc(a),Pe=l,Ct=c;break;case 5:ke||Tt(a,n);case 6:c=Pe;var f=Ct;if(Pe=null,In(t,n,a),Pe=c,Ct=f,Pe!==null)if(Ct)try{t=Pe,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(m){Te(a,n,m)}else try{Pe.removeChild(a.stateNode)}catch(m){Te(a,n,m)}break;case 18:Pe!==null&&(Ct?(n=Pe,a=a.stateNode,n.nodeType===8?ef(n.parentNode,a):n.nodeType===1&&ef(n,a),vr(n)):ef(Pe,a.stateNode));break;case 4:l=Pe,c=Ct,Pe=a.stateNode.containerInfo,Ct=!0,In(t,n,a),Pe=l,Ct=c;break;case 0:case 11:case 14:case 15:ke||li(2,a,n),ke||li(4,a,n),In(t,n,a);break;case 1:ke||(Tt(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Tm(a,n,l)),In(t,n,a);break;case 21:In(t,n,a);break;case 22:ke||Tt(a,n),ke=(l=ke)||a.memoizedState!==null,In(t,n,a),ke=l;break;default:In(t,n,a)}}function Mm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vr(t)}catch(a){Te(n,n.return,a)}}function YS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rm),n;default:throw Error(r(435,t.tag))}}function Tu(t,n){var a=YS(t);n.forEach(function(l){var c=sb.bind(null,t,l);a.has(l)||(a.add(l),l.then(c,c))})}function jt(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],f=t,m=n,_=m;e:for(;_!==null;){switch(_.tag){case 27:case 5:Pe=_.stateNode,Ct=!1;break e;case 3:Pe=_.stateNode.containerInfo,Ct=!0;break e;case 4:Pe=_.stateNode.containerInfo,Ct=!0;break e}_=_.return}if(Pe===null)throw Error(r(160));Dm(f,m,c),Pe=null,Ct=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)xm(n,t),n=n.sibling}var Qt=null;function xm(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jt(n,t),Ht(t),l&4&&(li(3,t,t.return),er(3,t),li(5,t,t.return));break;case 1:jt(n,t),Ht(t),l&512&&(ke||a===null||Tt(a,a.return)),l&64&&Nn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=Qt;if(jt(n,t),Ht(t),l&512&&(ke||a===null||Tt(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Aa]||f[it]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),tt(f,l,a),f[it]=t,Fe(f),l=f;break e;case"link":var m=Cg("link","href",c).get(l+(a.href||""));if(m){for(var _=0;_<m.length;_++)if(f=m[_],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(_,1);break t}}f=c.createElement(l),tt(f,l,a),c.head.appendChild(f);break;case"meta":if(m=Cg("meta","content",c).get(l+(a.content||""))){for(_=0;_<m.length;_++)if(f=m[_],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(_,1);break t}}f=c.createElement(l),tt(f,l,a),c.head.appendChild(f);break;default:throw Error(r(468,l))}f[it]=t,Fe(f),l=f}t.stateNode=l}else wg(c,t.type,t.stateNode);else t.stateNode=Tg(c,l,t.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?wg(c,t.type,t.stateNode):Tg(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&wm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var y=c.firstChild;y;){var T=y.nextSibling,I=y.nodeName;y[Aa]||I==="HEAD"||I==="BODY"||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&y.rel.toLowerCase()==="stylesheet"||c.removeChild(y),y=T}for(var M=t.type,O=c.attributes;O.length;)c.removeAttributeNode(O[0]);tt(c,M,f),c[it]=t,c[pt]=f}catch(q){Te(t,t.return,q)}}case 5:if(jt(n,t),Ht(t),l&512&&(ke||a===null||Tt(a,a.return)),t.flags&32){c=t.stateNode;try{Cs(c,"")}catch(q){Te(t,t.return,q)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,wm(t,c,a!==null?a.memoizedProps:c)),l&1024&&(bu=!0);break;case 6:if(jt(n,t),Ht(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){Te(t,t.return,q)}}break;case 3:if(no=null,c=Qt,Qt=eo(n.containerInfo),jt(n,t),Qt=c,Ht(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(q){Te(t,t.return,q)}bu&&(bu=!1,km(t));break;case 4:l=Qt,Qt=eo(t.stateNode.containerInfo),jt(n,t),Ht(t),Qt=l;break;case 12:jt(n,t),Ht(t);break;case 13:jt(n,t),Ht(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mu=rn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tu(t,l)));break;case 22:if(l&512&&(ke||a===null||Tt(a,a.return)),y=t.memoizedState!==null,T=a!==null&&a.memoizedState!==null,I=Nn,M=ke,Nn=I||y,ke=M||T,jt(n,t),ke=M,Nn=I,Ht(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,l&8192&&(n._visibility=y?n._visibility&-2:n._visibility|1,y&&(n=Nn||ke,a===null||T||n||Ps(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){T=a=n;try{if(c=T.stateNode,y)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=T.stateNode,_=T.memoizedProps.style;var N=_!=null&&_.hasOwnProperty("display")?_.display:null;m.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(q){Te(T,T.return,q)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=y?"":T.memoizedProps}catch(q){Te(T,T.return,q)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Tu(t,a))));break;case 19:jt(n,t),Ht(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tu(t,l)));break;case 21:break;default:jt(n,t),Ht(t)}}function Ht(t){var n=t.flags;if(n&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Am(a)){var l=a;break e}a=a.return}throw Error(r(160))}switch(l.tag){case 27:var c=l.stateNode,f=Eu(t);Hl(t,f,c);break;case 5:var m=l.stateNode;l.flags&32&&(Cs(m,""),l.flags&=-33);var _=Eu(t);Hl(t,_,m);break;case 3:case 4:var y=l.stateNode.containerInfo,T=Eu(t);Su(t,T,y);break;default:throw Error(r(161))}}}catch(I){Te(t,t.return,I)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Dn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(t,n.alternate,n),n=n.sibling}function Ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:li(4,n,n.return),Ps(n);break;case 1:Tt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tm(n,n.return,a),Ps(n);break;case 26:case 27:case 5:Tt(n,n.return),Ps(n);break;case 22:Tt(n,n.return),n.memoizedState===null&&Ps(n);break;default:Ps(n)}t=t.sibling}}function oi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=t,f=n,m=f.flags;switch(f.tag){case 0:case 11:case 15:oi(c,f,a),er(4,f);break;case 1:if(oi(c,f,a),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(T){Te(l,l.return,T)}if(l=f,c=l.updateQueue,c!==null){var _=l.stateNode;try{var y=c.shared.hiddenCallbacks;if(y!==null)for(c.shared.hiddenCallbacks=null,c=0;c<y.length;c++)Em(y[c],_)}catch(T){Te(l,l.return,T)}}a&&m&64&&bm(f),Qi(f,f.return);break;case 26:case 27:case 5:oi(c,f,a),a&&l===null&&m&4&&Cm(f),Qi(f,f.return);break;case 12:oi(c,f,a);break;case 13:oi(c,f,a),a&&m&4&&Mm(c,f);break;case 22:f.memoizedState===null&&oi(c,f,a),Qi(f,f.return);break;default:oi(c,f,a)}n=n.sibling}}function Cu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ga(a))}function wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ga(t))}function ci(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(t,n,a,l),n=n.sibling}function Lm(t,n,a,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ci(t,n,a,l),c&2048&&er(9,n);break;case 3:ci(t,n,a,l),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ga(t)));break;case 12:if(c&2048){ci(t,n,a,l),t=n.stateNode;try{var f=n.memoizedProps,m=f.id,_=f.onPostCommit;typeof _=="function"&&_(m,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){Te(n,n.return,y)}}else ci(t,n,a,l);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?ci(t,n,a,l):tr(t,n):f._visibility&4?ci(t,n,a,l):(f._visibility|=4,qs(t,n,a,l,(n.subtreeFlags&10256)!==0)),c&2048&&Cu(n.alternate,n);break;case 24:ci(t,n,a,l),c&2048&&wu(n.alternate,n);break;default:ci(t,n,a,l)}}function qs(t,n,a,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,m=n,_=a,y=l,T=m.flags;switch(m.tag){case 0:case 11:case 15:qs(f,m,_,y,c),er(8,m);break;case 23:break;case 22:var I=m.stateNode;m.memoizedState!==null?I._visibility&4?qs(f,m,_,y,c):tr(f,m):(I._visibility|=4,qs(f,m,_,y,c)),c&&T&2048&&Cu(m.alternate,m);break;case 24:qs(f,m,_,y,c),c&&T&2048&&wu(m.alternate,m);break;default:qs(f,m,_,y,c)}n=n.sibling}}function tr(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,c=l.flags;switch(l.tag){case 22:tr(a,l),c&2048&&Cu(l.alternate,l);break;case 24:tr(a,l),c&2048&&wu(l.alternate,l);break;default:tr(a,l)}n=n.sibling}}var nr=8192;function Vs(t){if(t.subtreeFlags&nr)for(t=t.child;t!==null;)Um(t),t=t.sibling}function Um(t){switch(t.tag){case 26:Vs(t),t.flags&nr&&t.memoizedState!==null&&xb(Qt,t.memoizedState,t.memoizedProps);break;case 5:Vs(t);break;case 3:case 4:var n=Qt;Qt=eo(t.stateNode.containerInfo),Vs(t),Qt=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=nr,nr=16777216,Vs(t),nr=n):Vs(t));break;default:Vs(t)}}function zm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ir(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Xe=l,Hm(l,t)}zm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(t),t=t.sibling}function jm(t){switch(t.tag){case 0:case 11:case 15:ir(t),t.flags&2048&&li(9,t,t.return);break;case 3:ir(t);break;case 12:ir(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,Bl(t)):ir(t);break;default:ir(t)}}function Bl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Xe=l,Hm(l,t)}zm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:li(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Bl(n));break;default:Bl(n)}t=t.sibling}}function Hm(t,n){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:li(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ga(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=t;Xe!==null;){l=Xe;var c=l.sibling,f=l.return;if(Im(l),l===a){Xe=null;break e}if(c!==null){c.return=f,Xe=c;break e}Xe=f}}}function FS(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,n,a,l){return new FS(t,n,a,l)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ui(t,n){var a=t.alternate;return a===null?(a=Bt(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Pl(t,n,a,l,c,f){var m=0;if(l=t,typeof t=="function")Au(t)&&(m=1);else if(typeof t=="string")m=Db(t,a,an.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return Wi(a.children,c,f,n);case g:m=8,c|=24;break;case E:return t=Bt(12,a,n,c|2),t.elementType=E,t.lanes=f,t;case V:return t=Bt(13,a,n,c),t.elementType=V,t.lanes=f,t;case j:return t=Bt(19,a,n,c),t.elementType=j,t.lanes=f,t;case se:return Pm(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case x:m=10;break e;case R:m=9;break e;case U:m=11;break e;case le:m=14;break e;case te:m=16,l=null;break e}m=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Bt(m,a,n,c),n.elementType=t,n.type=l,n.lanes=f,n}function Wi(t,n,a,l){return t=Bt(7,t,l,n),t.lanes=a,t}function Pm(t,n,a,l){t=Bt(22,t,l,n),t.elementType=se,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var m=Zn(f,2);m!==null&&(c._pendingVisibility|=2,ft(m,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var m=Zn(f,2);m!==null&&(c._pendingVisibility&=-3,ft(m,f,2))}}};return t.stateNode=c,t}function Ru(t,n,a){return t=Bt(6,t,null,n),t.lanes=a,t}function Ou(t,n,a){return n=Bt(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Mn(t){t.flags|=4}function qm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Ag(n)){if(n=zt.current,n!==null&&((fe&4194176)===fe?on!==null:(fe&62914560)!==fe&&!(fe&536870912)||n!==on))throw Pa=xc,ap;t.flags|=8192}}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?rd():536870912,t.lanes|=n,Ys|=n)}function sr(t,n){if(!me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Me(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&31457280,l|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function KS(t,n,a){var l=n.pendingProps;switch(Dc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(n),null;case 1:return Me(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),On(Ge),vs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(za(n)?Mn(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xt!==null&&(Uu(Xt),Xt=null))),Me(n),null;case 26:return a=n.memoizedState,t===null?(Mn(n),a!==null?(Me(n),qm(n,a)):(Me(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Mn(n),Me(n),qm(n,a)):(Me(n),n.flags&=-16777217):(t.memoizedProps!==l&&Mn(n),Me(n),n.flags&=-16777217),null;case 27:el(n),a=Xn.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Me(n),null}t=an.current,za(n)?ip(n):(t=vg(c,l,a),n.stateNode=t,Mn(n))}return Me(n),null;case 5:if(el(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Me(n),null}if(t=an.current,za(n))ip(n);else{switch(c=Jl(Xn.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(a,{is:l.is}):c.createElement(a)}}t[it]=n,t[pt]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(tt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Mn(n)}}return Me(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=Xn.current,za(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,c=ut,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[it]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hg(t.nodeValue,a)),t||Bi(n)}else t=Jl(t).createTextNode(l),t[it]=n,n.stateNode=t}return Me(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=za(n),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[it]=n}else ja(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Me(n),c=!1}else Xt!==null&&(Uu(Xt),Xt=null),c=!0;if(!c)return n.flags&256?(Cn(n),n):(Cn(n),null)}if(Cn(n),n.flags&128)return n.lanes=a,n;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Me(n),null;case 4:return vs(),t===null&&Ku(n.stateNode.containerInfo),Me(n),null;case 10:return On(n.type),Me(n),null;case 19:if(je(Ve),c=n.memoizedState,c===null)return Me(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)sr(c,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=wl(t),f!==null){for(n.flags|=128,sr(c,!1),t=f.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return Ie(Ve,Ve.current&1|2),n.child}t=t.sibling}c.tail!==null&&rn()>Vl&&(n.flags|=128,l=!0,sr(c,!1),n.lanes=4194304)}else{if(!l)if(t=wl(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),sr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!me)return Me(n),null}else 2*rn()-c.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,l=!0,sr(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=rn(),n.sibling=null,t=Ve.current,Ie(Ve,l?t&1|2:t&1),n):(Me(n),null);case 22:case 23:return Cn(n),Lc(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?a&536870912&&!(n.flags&128)&&(Me(n),n.subtreeFlags&6&&(n.flags|=8192)):Me(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&je(qi),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),On(Ge),Me(n),null;case 25:return null}throw Error(r(156,n.tag))}function XS(t,n){switch(Dc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return On(Ge),vs(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return el(n),null;case 13:if(Cn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return je(Ve),null;case 4:return vs(),null;case 10:return On(n.type),null;case 22:case 23:return Cn(n),Lc(),t!==null&&je(qi),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return On(Ge),null;case 25:return null;default:return null}}function Vm(t,n){switch(Dc(n),n.tag){case 3:On(Ge),vs();break;case 26:case 27:case 5:el(n);break;case 4:vs();break;case 13:Cn(n);break;case 19:je(Ve);break;case 10:On(n.type);break;case 22:case 23:Cn(n),Lc(),t!==null&&je(qi);break;case 24:On(Ge)}}var QS={getCacheForType:function(t){var n=st(Ge),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},WS=typeof WeakMap=="function"?WeakMap:Map,xe=0,we=null,re=null,fe=0,Ae=0,wt=null,xn=!1,Gs=!1,Nu=!1,kn=0,Le=0,fi=0,$i=0,Iu=0,Pt=0,Ys=0,ar=null,un=null,Du=!1,Mu=0,Vl=1/0,Gl=null,hi=null,Yl=!1,Zi=null,rr=0,xu=0,ku=null,lr=0,Lu=null;function At(){if(xe&2&&fe!==0)return fe&-fe;if(Y.T!==null){var t=Us;return t!==0?t:Vu()}return ud()}function Gm(){Pt===0&&(Pt=!(fe&536870912)||me?ad():536870912);var t=zt.current;return t!==null&&(t.flags|=32),Pt}function ft(t,n,a){(t===we&&Ae===2||t.cancelPendingCommit!==null)&&(Fs(t,0),Ln(t,fe,Pt,!1)),wa(t,a),(!(xe&2)||t!==we)&&(t===we&&(!(xe&2)&&($i|=a),Le===4&&Ln(t,fe,Pt,!1)),fn(t))}function Ym(t,n,a){if(xe&6)throw Error(r(327));var l=!a&&(n&60)===0&&(n&t.expiredLanes)===0||Ca(t,n),c=l?JS(t,n):Hu(t,n,!0),f=l;do{if(c===0){Gs&&!l&&Ln(t,n,0,!1);break}else if(c===6)Ln(t,n,0,!xn);else{if(a=t.current.alternate,f&&!$S(a)){c=Hu(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var _=t;c=ar;var y=_.current.memoizedState.isDehydrated;if(y&&(Fs(_,m).flags|=256),m=Hu(_,m,!1),m!==2){if(Nu&&!y){_.errorRecoveryDisabledLanes|=f,$i|=f,c=4;break e}f=un,un=c,f!==null&&Uu(f)}c=m}if(f=!1,c!==2)continue}}if(c===1){Fs(t,0),Ln(t,n,0,!0);break}e:{switch(l=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ln(l,n,Pt,!xn);break e}break;case 2:un=null;break;case 3:case 5:break;default:throw Error(r(329))}if(l.finishedWork=a,l.finishedLanes=n,(n&62914560)===n&&(f=Mu+300-rn(),10<f)){if(Ln(l,n,Pt,!xn),sl(l,0)!==0)break e;l.timeoutHandle=mg(Fm.bind(null,l,a,un,Gl,Du,n,Pt,$i,Ys,xn,2,-0,0),f);break e}Fm(l,a,un,Gl,Du,n,Pt,$i,Ys,xn,0,-0,0)}}break}while(!0);fn(t)}function Uu(t){un===null?un=t:un.push.apply(un,t)}function Fm(t,n,a,l,c,f,m,_,y,T,I,M,O){var N=n.subtreeFlags;if((N&8192||(N&16785408)===16785408)&&(dr={stylesheets:null,count:0,unsuspend:Mb},Um(n),n=kb(),n!==null)){t.cancelPendingCommit=n(Jm.bind(null,t,a,l,c,m,_,y,1,M,O)),Ln(t,f,m,!T);return}Jm(t,a,l,c,m,_,y,I,M,O)}function $S(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],f=c.getSnapshot;c=c.value;try{if(!bt(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(t,n,a,l){n&=~Iu,n&=~$i,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var c=n;0<c;){var f=31-St(c),m=1<<f;l[f]=-1,c&=~m}a!==0&&ld(t,a,n)}function Fl(){return xe&6?!0:(or(0),!1)}function zu(){if(re!==null){if(Ae===0)var t=re.return;else t=re,Rn=Ki=null,Vc(t),ks=null,qa=0,t=re;for(;t!==null;)Vm(t.alternate,t),t=t.return;re=null}}function Fs(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),zu(),we=t,re=a=ui(t.current,null),fe=n,Ae=0,wt=null,xn=!1,Gs=Ca(t,n),Nu=!1,Ys=Pt=Iu=$i=fi=Le=0,un=ar=null,Du=!1,n&8&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var c=31-St(l),f=1<<c;n|=t[c],l&=~f}return kn=n,gl(),a}function Km(t,n){ie=null,Y.H=cn,n===Ba?(n=op(),Ae=3):n===ap?(n=op(),Ae=4):Ae=n===rm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wt=n,re===null&&(Le=1,Ul(t,kt(n,t.current)))}function Xm(){var t=Y.H;return Y.H=cn,t===null?cn:t}function Qm(){var t=Y.A;return Y.A=QS,t}function ju(){Le=4,xn||(fe&4194176)!==fe&&zt.current!==null||(Gs=!0),!(fi&134217727)&&!($i&134217727)||we===null||Ln(we,fe,Pt,!1)}function Hu(t,n,a){var l=xe;xe|=2;var c=Xm(),f=Qm();(we!==t||fe!==n)&&(Gl=null,Fs(t,n)),n=!1;var m=Le;e:do try{if(Ae!==0&&re!==null){var _=re,y=wt;switch(Ae){case 8:zu(),m=6;break e;case 3:case 2:case 6:zt.current===null&&(n=!0);var T=Ae;if(Ae=0,wt=null,Ks(t,_,y,T),a&&Gs){m=0;break e}break;default:T=Ae,Ae=0,wt=null,Ks(t,_,y,T)}}ZS(),m=Le;break}catch(I){Km(t,I)}while(!0);return n&&t.shellSuspendCounter++,Rn=Ki=null,xe=l,Y.H=c,Y.A=f,re===null&&(we=null,fe=0,gl()),m}function ZS(){for(;re!==null;)Wm(re)}function JS(t,n){var a=xe;xe|=2;var l=Xm(),c=Qm();we!==t||fe!==n?(Gl=null,Vl=rn()+500,Fs(t,n)):Gs=Ca(t,n);e:do try{if(Ae!==0&&re!==null){n=re;var f=wt;t:switch(Ae){case 1:Ae=0,wt=null,Ks(t,n,f,1);break;case 2:if(rp(f)){Ae=0,wt=null,$m(n);break}n=function(){Ae===2&&we===t&&(Ae=7),fn(t)},f.then(n,n);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:rp(f)?(Ae=0,wt=null,$m(n)):(Ae=0,wt=null,Ks(t,n,f,7));break;case 5:var m=null;switch(re.tag){case 26:m=re.memoizedState;case 5:case 27:var _=re;if(!m||Ag(m)){Ae=0,wt=null;var y=_.sibling;if(y!==null)re=y;else{var T=_.return;T!==null?(re=T,Kl(T)):re=null}break t}}Ae=0,wt=null,Ks(t,n,f,5);break;case 6:Ae=0,wt=null,Ks(t,n,f,6);break;case 8:zu(),Le=6;break e;default:throw Error(r(462))}}eb();break}catch(I){Km(t,I)}while(!0);return Rn=Ki=null,Y.H=l,Y.A=c,xe=a,re!==null?0:(we=null,fe=0,gl(),Le)}function eb(){for(;re!==null&&!bE();)Wm(re)}function Wm(t){var n=vm(t.alternate,t,kn);t.memoizedProps=t.pendingProps,n===null?Kl(t):re=n}function $m(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,fe);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,fe);break;case 5:Vc(n);default:Vm(a,n),n=re=Bm(n,kn),n=vm(a,n,kn)}t.memoizedProps=t.pendingProps,n===null?Kl(t):re=n}function Ks(t,n,a,l){Rn=Ki=null,Vc(n),ks=null,qa=0;var c=n.return;try{if(qS(t,c,n,a,fe)){Le=1,Ul(t,kt(a,t.current)),re=null;return}}catch(f){if(c!==null)throw re=c,f;Le=1,Ul(t,kt(a,t.current)),re=null;return}n.flags&32768?(me||l===1?t=!0:Gs||fe&536870912?t=!1:(xn=t=!0,(l===2||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zm(n,t)):Kl(n)}function Kl(t){var n=t;do{if(n.flags&32768){Zm(n,xn);return}t=n.return;var a=KS(n.alternate,n,kn);if(a!==null){re=a;return}if(n=n.sibling,n!==null){re=n;return}re=n=t}while(n!==null);Le===0&&(Le=5)}function Zm(t,n){do{var a=XS(t.alternate,t);if(a!==null){a.flags&=32767,re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){re=t;return}re=t=a}while(t!==null);Le=6,re=null}function Jm(t,n,a,l,c,f,m,_,y,T){var I=Y.T,M=B.p;try{B.p=2,Y.T=null,tb(t,n,a,l,M,c,f,m,_,y,T)}finally{Y.T=I,B.p=M}}function tb(t,n,a,l,c,f,m,_){do Xs();while(Zi!==null);if(xe&6)throw Error(r(327));var y=t.finishedWork;if(l=t.finishedLanes,y===null)return null;if(t.finishedWork=null,t.finishedLanes=0,y===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var T=y.lanes|y.childLanes;if(T|=Oc,xE(t,l,T,f,m,_),t===we&&(re=we=null,fe=0),!(y.subtreeFlags&10256)&&!(y.flags&10256)||Yl||(Yl=!0,xu=T,ku=a,ab(tl,function(){return Xs(),null})),a=(y.flags&15990)!==0,y.subtreeFlags&15990||a?(a=Y.T,Y.T=null,f=B.p,B.p=2,m=xe,xe|=4,GS(t,y),xm(y,t),wS($u,t.containerInfo),ao=!!Wu,$u=Wu=null,t.current=y,Nm(t,y.alternate,y),TE(),xe=m,B.p=f,Y.T=a):t.current=y,Yl?(Yl=!1,Zi=t,rr=l):eg(t,T),T=t.pendingLanes,T===0&&(hi=null),OE(y.stateNode),fn(t),n!==null)for(c=t.onRecoverableError,y=0;y<n.length;y++)T=n[y],c(T.value,{componentStack:T.stack});return rr&3&&Xs(),T=t.pendingLanes,l&4194218&&T&42?t===Lu?lr++:(lr=0,Lu=t):lr=0,or(0),null}function eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ga(n)))}function Xs(){if(Zi!==null){var t=Zi,n=xu;xu=0;var a=cd(rr),l=Y.T,c=B.p;try{if(B.p=32>a?32:a,Y.T=null,Zi===null)var f=!1;else{a=ku,ku=null;var m=Zi,_=rr;if(Zi=null,rr=0,xe&6)throw Error(r(331));var y=xe;if(xe|=4,jm(m.current),Lm(m,m.current,_,a),xe=y,or(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ta,m)}catch{}f=!0}return f}finally{B.p=c,Y.T=l,eg(t,n)}}return!1}function tg(t,n,a){n=kt(a,n),n=iu(t.stateNode,n,2),t=ri(t,n,2),t!==null&&(wa(t,2),fn(t))}function Te(t,n,a){if(t.tag===3)tg(t,t,a);else for(;n!==null;){if(n.tag===3){tg(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hi===null||!hi.has(l))){t=kt(a,t),a=sm(2),l=ri(n,a,2),l!==null&&(am(a,l,n,t),wa(l,2),fn(l));break}}n=n.return}}function Bu(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new WS;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(a)||(Nu=!0,c.add(a),t=nb.bind(null,t,n,a),n.then(t,t))}function nb(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,we===t&&(fe&a)===a&&(Le===4||Le===3&&(fe&62914560)===fe&&300>rn()-Mu?!(xe&2)&&Fs(t,0):Iu|=a,Ys===fe&&(Ys=0)),fn(t)}function ng(t,n){n===0&&(n=rd()),t=Zn(t,n),t!==null&&(wa(t,n),fn(t))}function ib(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(t,a)}function sb(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),ng(t,a)}function ab(t,n){return sc(t,n)}var Xl=null,Qs=null,Pu=!1,Ql=!1,qu=!1,Ji=0;function fn(t){t!==Qs&&t.next===null&&(Qs===null?Xl=Qs=t:Qs=Qs.next=t),Ql=!0,Pu||(Pu=!0,lb(rb))}function or(t,n){if(!qu&&Ql){qu=!0;do for(var a=!1,l=Xl;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var m=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-St(42|t)+1)-1,f&=c&~(m&~_),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,ag(l,f))}else f=fe,f=sl(l,l===we?f:0),!(f&3)||Ca(l,f)||(a=!0,ag(l,f));l=l.next}while(a);qu=!1}}function rb(){Ql=Pu=!1;var t=0;Ji!==0&&(mb()&&(t=Ji),Ji=0);for(var n=rn(),a=null,l=Xl;l!==null;){var c=l.next,f=ig(l,n);f===0?(l.next=null,a===null?Xl=c:a.next=c,c===null&&(Qs=a)):(a=l,(t!==0||f&3)&&(Ql=!0)),l=c}or(t)}function ig(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var m=31-St(f),_=1<<m,y=c[m];y===-1?(!(_&a)||_&l)&&(c[m]=ME(_,n)):y<=n&&(t.expiredLanes|=_),f&=~_}if(n=we,a=fe,a=sl(t,t===n?a:0),l=t.callbackNode,a===0||t===n&&Ae===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ac(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Ca(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&ac(l),cd(a)){case 2:case 8:a=id;break;case 32:a=tl;break;case 268435456:a=sd;break;default:a=tl}return l=sg.bind(null,t),a=sc(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&ac(l),t.callbackPriority=2,t.callbackNode=null,2}function sg(t,n){var a=t.callbackNode;if(Xs()&&t.callbackNode!==a)return null;var l=fe;return l=sl(t,t===we?l:0),l===0?null:(Ym(t,l,n),ig(t,rn()),t.callbackNode!=null&&t.callbackNode===a?sg.bind(null,t):null)}function ag(t,n){if(Xs())return null;Ym(t,n,!0)}function lb(t){_b(function(){xe&6?sc(nd,t):t()})}function Vu(){return Ji===0&&(Ji=ad()),Ji}function rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ob(t,n,a,l,c){if(n==="submit"&&a&&a.stateNode===c){var f=rg((c[pt]||null).action),m=l.submitter;m&&(n=(n=m[pt]||null)?rg(n.formAction):m.getAttribute("formAction"),n!==null&&(f=n,m=null));var _=new dl("action","action",null,l,c);t.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ji!==0){var y=m?lg(c,m):new FormData(c);Zc(a,{pending:!0,data:y,method:c.method,action:f},null,y)}}else typeof f=="function"&&(_.preventDefault(),y=m?lg(c,m):new FormData(c),Zc(a,{pending:!0,data:y,method:c.method,action:f},f,y))},currentTarget:c}]})}}for(var Gu=0;Gu<Jd.length;Gu++){var Yu=Jd[Gu],cb=Yu.toLowerCase(),ub=Yu[0].toUpperCase()+Yu.slice(1);Kt(cb,"on"+ub)}Kt(Xd,"onAnimationEnd"),Kt(Qd,"onAnimationIteration"),Kt(Wd,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(RS,"onTransitionRun"),Kt(OS,"onTransitionStart"),Kt(NS,"onTransitionCancel"),Kt($d,"onTransitionEnd"),bs("onMouseEnter",["mouseout","mouseover"]),bs("onMouseLeave",["mouseout","mouseover"]),bs("onPointerEnter",["pointerout","pointerover"]),bs("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var m=l.length-1;0<=m;m--){var _=l[m],y=_.instance,T=_.currentTarget;if(_=_.listener,y!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=T;try{f(c)}catch(I){Ll(I)}c.currentTarget=null,f=y}else for(m=0;m<l.length;m++){if(_=l[m],y=_.instance,T=_.currentTarget,_=_.listener,y!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=T;try{f(c)}catch(I){Ll(I)}c.currentTarget=null,f=y}}}}function oe(t,n){var a=n[lc];a===void 0&&(a=n[lc]=new Set);var l=t+"__bubble";a.has(l)||(cg(n,t,2,!1),a.add(l))}function Fu(t,n,a){var l=0;n&&(l|=4),cg(a,t,l,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Ku(t){if(!t[Wl]){t[Wl]=!0,hd.forEach(function(a){a!=="selectionchange"&&(fb.has(a)||Fu(a,!1,t),Fu(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Fu("selectionchange",!1,n))}}function cg(t,n,a,l){switch(Mg(n)){case 2:var c=zb;break;case 8:c=jb;break;default:c=lf}a=c.bind(null,n,a,t),c=void 0,!mc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Xu(t,n,a,l,c){var f=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var _=l.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=l.return;m!==null;){var y=m.tag;if((y===3||y===4)&&(y=m.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;m=m.return}for(;_!==null;){if(m=xi(_),m===null)return;if(y=m.tag,y===5||y===6||y===26||y===27){l=f=m;continue e}_=_.parentNode}}l=l.return}Cd(function(){var T=f,I=dc(a),M=[];e:{var O=Zd.get(t);if(O!==void 0){var N=dl,q=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":N=sS;break;case"focusin":q="focus",N=yc;break;case"focusout":q="blur",N=yc;break;case"beforeblur":case"afterblur":N=yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=lS;break;case Xd:case Qd:case Wd:N=QE;break;case $d:N=cS;break;case"scroll":case"scrollend":N=GE;break;case"wheel":N=fS;break;case"copy":case"cut":case"paste":N=$E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Nd;break;case"toggle":case"beforetoggle":N=dS}var $=(n&4)!==0,Ue=!$&&(t==="scroll"||t==="scrollend"),C=$?O!==null?O+"Capture":null:O;$=[];for(var b=T,A;b!==null;){var D=b;if(A=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||A===null||C===null||(D=Oa(b,C),D!=null&&$.push(ur(b,D,A))),Ue)break;b=b.return}0<$.length&&(O=new N(O,q,null,a,I),M.push({event:O,listeners:$}))}}if(!(n&7)){e:{if(O=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",O&&a!==hc&&(q=a.relatedTarget||a.fromElement)&&(xi(q)||q[ys]))break e;if((N||O)&&(O=I.window===I?I:(O=I.ownerDocument)?O.defaultView||O.parentWindow:window,N?(q=a.relatedTarget||a.toElement,N=T,q=q?xi(q):null,q!==null&&(Ue=Q(q),$=q.tag,q!==Ue||$!==5&&$!==27&&$!==6)&&(q=null)):(N=null,q=T),N!==q)){if($=Rd,D="onMouseLeave",C="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&($=Nd,D="onPointerLeave",C="onPointerEnter",b="pointer"),Ue=N==null?O:Ra(N),A=q==null?O:Ra(q),O=new $(D,b+"leave",N,a,I),O.target=Ue,O.relatedTarget=A,D=null,xi(I)===T&&($=new $(C,b+"enter",q,a,I),$.target=A,$.relatedTarget=Ue,D=$),Ue=D,N&&q)t:{for($=N,C=q,b=0,A=$;A;A=Ws(A))b++;for(A=0,D=C;D;D=Ws(D))A++;for(;0<b-A;)$=Ws($),b--;for(;0<A-b;)C=Ws(C),A--;for(;b--;){if($===C||C!==null&&$===C.alternate)break t;$=Ws($),C=Ws(C)}$=null}else $=null;N!==null&&ug(M,O,N,$,!1),q!==null&&Ue!==null&&ug(M,Ue,q,$,!0)}}e:{if(O=T?Ra(T):window,N=O.nodeName&&O.nodeName.toLowerCase(),N==="select"||N==="input"&&O.type==="file")var P=zd;else if(Ld(O))if(jd)P=TS;else{P=SS;var ae=ES}else N=O.nodeName,!N||N.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?T&&fc(T.elementType)&&(P=zd):P=bS;if(P&&(P=P(t,T))){Ud(M,P,a,I);break e}ae&&ae(t,O,T),t==="focusout"&&T&&O.type==="number"&&T.memoizedProps.value!=null&&uc(O,"number",O.value)}switch(ae=T?Ra(T):window,t){case"focusin":(Ld(ae)||ae.contentEditable==="true")&&(Os=ae,wc=T,Ua=null);break;case"focusout":Ua=wc=Os=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Fd(M,a,I);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Fd(M,a,I)}var G;if(Sc)e:{switch(t){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Rs?xd(t,a)&&(K="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(Id&&a.locale!=="ko"&&(Rs||K!=="onCompositionStart"?K==="onCompositionEnd"&&Rs&&(G=wd()):($n=I,gc="value"in $n?$n.value:$n.textContent,Rs=!0)),ae=$l(T,K),0<ae.length&&(K=new Od(K,t,null,a,I),M.push({event:K,listeners:ae}),G?K.data=G:(G=kd(a),G!==null&&(K.data=G)))),(G=mS?gS(t,a):_S(t,a))&&(K=$l(T,"onBeforeInput"),0<K.length&&(ae=new Od("onBeforeInput","beforeinput",null,a,I),M.push({event:ae,listeners:K}),ae.data=G)),ob(M,t,T,a,I)}og(M,n)})}function ur(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",l=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Oa(t,a),c!=null&&l.unshift(ur(t,c,f)),c=Oa(t,n),c!=null&&l.push(ur(t,c,f))),t=t.return}return l}function Ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ug(t,n,a,l,c){for(var f=n._reactName,m=[];a!==null&&a!==l;){var _=a,y=_.alternate,T=_.stateNode;if(_=_.tag,y!==null&&y===l)break;_!==5&&_!==26&&_!==27||T===null||(y=T,c?(T=Oa(a,f),T!=null&&m.unshift(ur(a,T,y))):c||(T=Oa(a,f),T!=null&&m.push(ur(a,T,y)))),a=a.return}m.length!==0&&t.push({event:n,listeners:m})}var hb=/\r\n?/g,db=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(db,"")}function hg(t,n){return n=fg(n),fg(t)===n}function Zl(){}function Ee(t,n,a,l,c,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Cs(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Cs(t,""+l);break;case"className":rl(t,"class",l);break;case"tabIndex":rl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":rl(t,a,l);break;case"style":bd(t,l,f);break;case"data":if(n!=="object"){rl(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=cl(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ee(t,n,"name",c.name,c,null),Ee(t,n,"formEncType",c.formEncType,c,null),Ee(t,n,"formMethod",c.formMethod,c,null),Ee(t,n,"formTarget",c.formTarget,c,null)):(Ee(t,n,"encType",c.encType,c,null),Ee(t,n,"method",c.method,c,null),Ee(t,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=cl(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Zl);break;case"onScroll":l!=null&&oe("scroll",t);break;case"onScrollEnd":l!=null&&oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=cl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":oe("beforetoggle",t),oe("toggle",t),al(t,"popover",l);break;case"xlinkActuate":Sn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Sn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Sn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Sn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Sn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Sn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":al(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qE.get(a)||a,al(t,a,l))}}function Qu(t,n,a,l,c,f){switch(a){case"style":bd(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Cs(t,l):(typeof l=="number"||typeof l=="bigint")&&Cs(t,""+l);break;case"onScroll":l!=null&&oe("scroll",t);break;case"onScrollEnd":l!=null&&oe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,c);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):al(t,a,l)}}}function tt(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",t),oe("load",t);var l=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var m=a[f];if(m!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(t,n,f,m,a,null)}}c&&Ee(t,n,"srcSet",a.srcSet,a,null),l&&Ee(t,n,"src",a.src,a,null);return;case"input":oe("invalid",t);var _=f=m=c=null,y=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var I=a[l];if(I!=null)switch(l){case"name":c=I;break;case"type":m=I;break;case"checked":y=I;break;case"defaultChecked":T=I;break;case"value":f=I;break;case"defaultValue":_=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,n));break;default:Ee(t,n,l,I,a,null)}}vd(t,f,_,y,T,m,c,!1),ll(t);return;case"select":oe("invalid",t),l=m=f=null;for(c in a)if(a.hasOwnProperty(c)&&(_=a[c],_!=null))switch(c){case"value":f=_;break;case"defaultValue":m=_;break;case"multiple":l=_;default:Ee(t,n,c,_,a,null)}n=f,a=m,t.multiple=!!l,n!=null?Ts(t,!!l,n,!1):a!=null&&Ts(t,!!l,a,!0);return;case"textarea":oe("invalid",t),f=c=l=null;for(m in a)if(a.hasOwnProperty(m)&&(_=a[m],_!=null))switch(m){case"value":l=_;break;case"defaultValue":c=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:Ee(t,n,m,_,a,null)}Ed(t,l,c,f),ll(t);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ee(t,n,y,l,a,null)}return;case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":oe("load",t);break;case"video":case"audio":for(l=0;l<cr.length;l++)oe(cr[l],t);break;case"image":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"embed":case"source":case"link":oe("error",t),oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(t,n,T,l,a,null)}return;default:if(fc(n)){for(I in a)a.hasOwnProperty(I)&&(l=a[I],l!==void 0&&Qu(t,n,I,l,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!=null&&Ee(t,n,_,l,a,null))}function pb(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,m=null,_=null,y=null,T=null,I=null;for(N in a){var M=a[N];if(a.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=M;default:l.hasOwnProperty(N)||Ee(t,n,N,null,l,M)}}for(var O in l){var N=l[O];if(M=a[O],l.hasOwnProperty(O)&&(N!=null||M!=null))switch(O){case"type":f=N;break;case"name":c=N;break;case"checked":T=N;break;case"defaultChecked":I=N;break;case"value":m=N;break;case"defaultValue":_=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==M&&Ee(t,n,O,N,l,M)}}cc(t,m,_,y,T,I,f,c);return;case"select":N=m=_=O=null;for(f in a)if(y=a[f],a.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||Ee(t,n,f,null,l,y)}for(c in l)if(f=l[c],y=a[c],l.hasOwnProperty(c)&&(f!=null||y!=null))switch(c){case"value":O=f;break;case"defaultValue":_=f;break;case"multiple":m=f;default:f!==y&&Ee(t,n,c,f,l,y)}n=_,a=m,l=N,O!=null?Ts(t,!!a,O,!1):!!l!=!!a&&(n!=null?Ts(t,!!a,n,!0):Ts(t,!!a,a?[]:"",!1));return;case"textarea":N=O=null;for(_ in a)if(c=a[_],a.hasOwnProperty(_)&&c!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ee(t,n,_,null,l,c)}for(m in l)if(c=l[m],f=a[m],l.hasOwnProperty(m)&&(c!=null||f!=null))switch(m){case"value":O=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ee(t,n,m,c,l,f)}yd(t,O,N);return;case"option":for(var q in a)if(O=a[q],a.hasOwnProperty(q)&&O!=null&&!l.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:Ee(t,n,q,null,l,O)}for(y in l)if(O=l[y],N=a[y],l.hasOwnProperty(y)&&O!==N&&(O!=null||N!=null))switch(y){case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ee(t,n,y,O,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)O=a[$],a.hasOwnProperty($)&&O!=null&&!l.hasOwnProperty($)&&Ee(t,n,$,null,l,O);for(T in l)if(O=l[T],N=a[T],l.hasOwnProperty(T)&&O!==N&&(O!=null||N!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:Ee(t,n,T,O,l,N)}return;default:if(fc(n)){for(var Ue in a)O=a[Ue],a.hasOwnProperty(Ue)&&O!==void 0&&!l.hasOwnProperty(Ue)&&Qu(t,n,Ue,void 0,l,O);for(I in l)O=l[I],N=a[I],!l.hasOwnProperty(I)||O===N||O===void 0&&N===void 0||Qu(t,n,I,O,l,N);return}}for(var C in a)O=a[C],a.hasOwnProperty(C)&&O!=null&&!l.hasOwnProperty(C)&&Ee(t,n,C,null,l,O);for(M in l)O=l[M],N=a[M],!l.hasOwnProperty(M)||O===N||O==null&&N==null||Ee(t,n,M,O,l,N)}var Wu=null,$u=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ju=null;function mb(){var t=window.event;return t&&t.type==="popstate"?t===Ju?!1:(Ju=t,!0):(Ju=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,gb=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(vb)}:mg;function vb(t){setTimeout(function(){throw t})}function ef(t,n){var a=n,l=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(l===0){t.removeChild(c),vr(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=c}while(a);vr(n)}function tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":tf(a),oc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yb(t,n,a,l){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Wt(t.nextSibling),t===null)break}return null}function Eb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Wt(t.nextSibling),t===null))return null;return t}function Wt(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function vg(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var qt=new Map,yg=new Set;function eo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Un=B.d;B.d={f:Sb,r:bb,D:Tb,C:Cb,L:wb,m:Ab,X:Ob,S:Rb,M:Nb};function Sb(){var t=Un.f(),n=Fl();return t||n}function bb(t){var n=Es(t);n!==null&&n.tag===5&&n.type==="form"?Fp(n):Un.r(t)}var $s=typeof document>"u"?null:document;function Eg(t,n,a){var l=$s;if(l&&typeof n=="string"&&n){var c=Mt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),yg.has(c)||(yg.add(c),t={rel:t,crossOrigin:a,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),tt(n,"link",t),Fe(n),l.head.appendChild(n)))}}function Tb(t){Un.D(t),Eg("dns-prefetch",t,null)}function Cb(t,n){Un.C(t,n),Eg("preconnect",t,n)}function wb(t,n,a){Un.L(t,n,a);var l=$s;if(l&&t&&n){var c='link[rel="preload"][as="'+Mt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mt(a.imageSizes)+'"]')):c+='[href="'+Mt(t)+'"]';var f=c;switch(n){case"style":f=Zs(t);break;case"script":f=Js(t)}qt.has(f)||(t=pe({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),qt.set(f,t),l.querySelector(c)!==null||n==="style"&&l.querySelector(fr(f))||n==="script"&&l.querySelector(hr(f))||(n=l.createElement("link"),tt(n,"link",t),Fe(n),l.head.appendChild(n)))}}function Ab(t,n){Un.m(t,n);var a=$s;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mt(l)+'"][href="'+Mt(t)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Js(t)}if(!qt.has(f)&&(t=pe({rel:"modulepreload",href:t},n),qt.set(f,t),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hr(f)))return}l=a.createElement("link"),tt(l,"link",t),Fe(l),a.head.appendChild(l)}}}function Rb(t,n,a){Un.S(t,n,a);var l=$s;if(l&&t){var c=Ss(l).hoistableStyles,f=Zs(t);n=n||"default";var m=c.get(f);if(!m){var _={loading:0,preload:null};if(m=l.querySelector(fr(f)))_.loading=5;else{t=pe({rel:"stylesheet",href:t,"data-precedence":n},a),(a=qt.get(f))&&nf(t,a);var y=m=l.createElement("link");Fe(y),tt(y,"link",t),y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),y.addEventListener("load",function(){_.loading|=1}),y.addEventListener("error",function(){_.loading|=2}),_.loading|=4,to(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:_},c.set(f,m)}}}function Ob(t,n){Un.X(t,n);var a=$s;if(a&&t){var l=Ss(a).hoistableScripts,c=Js(t),f=l.get(c);f||(f=a.querySelector(hr(c)),f||(t=pe({src:t,async:!0},n),(n=qt.get(c))&&sf(t,n),f=a.createElement("script"),Fe(f),tt(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Nb(t,n){Un.M(t,n);var a=$s;if(a&&t){var l=Ss(a).hoistableScripts,c=Js(t),f=l.get(c);f||(f=a.querySelector(hr(c)),f||(t=pe({src:t,async:!0,type:"module"},n),(n=qt.get(c))&&sf(t,n),f=a.createElement("script"),Fe(f),tt(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Sg(t,n,a,l){var c=(c=Xn.current)?eo(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zs(a.href),a=Ss(c).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zs(a.href);var f=Ss(c).hoistableStyles,m=f.get(t);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,m),(f=c.querySelector(fr(t)))&&!f._p&&(m.instance=f,m.state.loading=5),qt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(t,a),f||Ib(c,t,a,m.state))),n&&l===null)throw Error(r(528,""));return m}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Js(a),a=Ss(c).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zs(t){return'href="'+Mt(t)+'"'}function fr(t){return'link[rel="stylesheet"]['+t+"]"}function bg(t){return pe({},t,{"data-precedence":t.precedence,precedence:null})}function Ib(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),tt(n,"link",a),Fe(n),t.head.appendChild(n))}function Js(t){return'[src="'+Mt(t)+'"]'}function hr(t){return"script[async]"+t}function Tg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(l)return n.instance=l,Fe(l),l;var c=pe({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Fe(l),tt(l,"style",c),to(l,a.precedence,t),n.instance=l;case"stylesheet":c=Zs(a.href);var f=t.querySelector(fr(c));if(f)return n.state.loading|=4,n.instance=f,Fe(f),f;l=bg(a),(c=qt.get(c))&&nf(l,c),f=(t.ownerDocument||t).createElement("link"),Fe(f);var m=f;return m._p=new Promise(function(_,y){m.onload=_,m.onerror=y}),tt(f,"link",l),n.state.loading|=4,to(f,a.precedence,t),n.instance=f;case"script":return f=Js(a.src),(c=t.querySelector(hr(f)))?(n.instance=c,Fe(c),c):(l=a,(c=qt.get(f))&&(l=pe({},a),sf(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),Fe(c),tt(c,"link",l),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(l=n.instance,n.state.loading|=4,to(l,a.precedence,t));return n.instance}function to(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,m=0;m<l.length;m++){var _=l[m];if(_.dataset.precedence===n)f=_;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function sf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var no=null;function Cg(t,n,a){if(no===null){var l=new Map,c=no=new Map;c.set(a,l)}else c=no,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Aa]||f[it]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(n)||"";m=t+m;var _=l.get(m);_?_.push(f):l.set(m,[f])}}return l}function wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Db(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var dr=null;function Mb(){}function xb(t,n,a){if(dr===null)throw Error(r(475));var l=dr;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Zs(a.href),f=t.querySelector(fr(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=io.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=f,Fe(f);return}f=t.ownerDocument||t,a=bg(a),(c=qt.get(c))&&nf(a,c),f=f.createElement("link"),Fe(f);var m=f;m._p=new Promise(function(_,y){m.onload=_,m.onerror=y}),tt(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(l.count++,n=io.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function kb(){if(dr===null)throw Error(r(475));var t=dr;return t.stylesheets&&t.count===0&&af(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&af(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function io(){if(this.count--,this.count===0){if(this.stylesheets)af(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var so=null;function af(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,so=new Map,n.forEach(Lb,t),so=null,io.call(t))}function Lb(t,n){if(!(n.state.loading&4)){var a=so.get(t);if(a)var l=a.get(null);else{a=new Map,so.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var m=c[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),l=m)}l&&a.set(null,l)}c=n.instance,m=c.getAttribute("data-precedence"),f=a.get(m)||l,f===l&&a.set(null,c),a.set(m,c),this.count++,l=io.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var pr={$$typeof:x,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Ub(t,n,a,l,c,f,m,_){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.hiddenUpdates=rc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Rg(t,n,a,l,c,f,m,_,y,T,I,M){return t=new Ub(t,n,a,m,_,y,T,M),n=1,f===!0&&(n|=24),f=Bt(3,null,null,n),t.current=f,f.stateNode=t,n=Uc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},gu(f),t}function Og(t){return t?(t=Ds,t):Ds}function Ng(t,n,a,l,c,f){c=Og(c),l.context===null?l.context=c:l.pendingContext=c,l=ai(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=ri(t,l,n),a!==null&&(ft(a,t,n),$a(a,t,n))}function Ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rf(t,n){Ig(t,n),(t=t.alternate)&&Ig(t,n)}function Dg(t){if(t.tag===13){var n=Zn(t,67108864);n!==null&&ft(n,t,67108864),rf(t,67108864)}}var ao=!0;function zb(t,n,a,l){var c=Y.T;Y.T=null;var f=B.p;try{B.p=2,lf(t,n,a,l)}finally{B.p=f,Y.T=c}}function jb(t,n,a,l){var c=Y.T;Y.T=null;var f=B.p;try{B.p=8,lf(t,n,a,l)}finally{B.p=f,Y.T=c}}function lf(t,n,a,l){if(ao){var c=of(l);if(c===null)Xu(t,n,l,ro,a),xg(t,l);else if(Bb(c,t,n,a,l))l.stopPropagation();else if(xg(t,l),n&4&&-1<Hb.indexOf(t)){for(;c!==null;){var f=Es(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=Mi(f.pendingLanes);if(m!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var y=1<<31-St(m);_.entanglements[1]|=y,m&=~y}fn(f),!(xe&6)&&(Vl=rn()+500,or(0))}}break;case 13:_=Zn(f,2),_!==null&&ft(_,f,2),Fl(),rf(f,2)}if(f=of(l),f===null&&Xu(t,n,l,ro,a),f===c)break;c=f}c!==null&&l.stopPropagation()}else Xu(t,n,l,null,a)}}function of(t){return t=dc(t),cf(t)}var ro=null;function cf(t){if(ro=null,t=xi(t),t!==null){var n=Q(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=Ce(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ro=t,null}function Mg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(CE()){case nd:return 2;case id:return 8;case tl:case wE:return 32;case sd:return 268435456;default:return 32}default:return 32}}var uf=!1,di=null,pi=null,mi=null,mr=new Map,gr=new Map,gi=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(n.pointerId)}}function _r(t,n,a,l,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Es(n),n!==null&&Dg(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Bb(t,n,a,l,c){switch(n){case"focusin":return di=_r(di,t,n,a,l,c),!0;case"dragenter":return pi=_r(pi,t,n,a,l,c),!0;case"mouseover":return mi=_r(mi,t,n,a,l,c),!0;case"pointerover":var f=c.pointerId;return mr.set(f,_r(mr.get(f)||null,t,n,a,l,c)),!0;case"gotpointercapture":return f=c.pointerId,gr.set(f,_r(gr.get(f)||null,t,n,a,l,c)),!0}return!1}function kg(t){var n=xi(t.target);if(n!==null){var a=Q(n);if(a!==null){if(n=a.tag,n===13){if(n=Ce(a),n!==null){t.blockedOn=n,kE(t.priority,function(){if(a.tag===13){var l=At(),c=Zn(a,l);c!==null&&ft(c,a,l),rf(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=of(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);hc=l,a.target.dispatchEvent(l),hc=null}else return n=Es(a),n!==null&&Dg(n),t.blockedOn=a,!1;n.shift()}return!0}function Lg(t,n,a){lo(t)&&a.delete(n)}function Pb(){uf=!1,di!==null&&lo(di)&&(di=null),pi!==null&&lo(pi)&&(pi=null),mi!==null&&lo(mi)&&(mi=null),mr.forEach(Lg),gr.forEach(Lg)}function oo(t,n){t.blockedOn===n&&(t.blockedOn=null,uf||(uf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Pb)))}var co=null;function Ug(t){co!==t&&(co=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){co===t&&(co=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],c=t[n+2];if(typeof l!="function"){if(cf(l||a)===null)continue;break}var f=Es(a);f!==null&&(t.splice(n,3),n-=3,Zc(f,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function vr(t){function n(y){return oo(y,t)}di!==null&&oo(di,t),pi!==null&&oo(pi,t),mi!==null&&oo(mi,t),mr.forEach(n),gr.forEach(n);for(var a=0;a<gi.length;a++){var l=gi[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<gi.length&&(a=gi[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&gi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],f=a[l+1],m=c[pt]||null;if(typeof f=="function")m||Ug(a);else if(m){var _=null;if(f&&f.hasAttribute("formAction")){if(c=f,m=f[pt]||null)_=m.formAction;else if(cf(c)!==null)continue}else _=m.action;typeof _=="function"?a[l+1]=_:(a.splice(l,3),l-=3),Ug(a)}}}function ff(t){this._internalRoot=t}uo.prototype.render=ff.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=At();Ng(a,l,t,n,null,null)},uo.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Xs(),Ng(t.current,2,null,t,null,null),Fl(),n[ys]=null}};function uo(t){this._internalRoot=t}uo.prototype.unstable_scheduleHydration=function(t){if(t){var n=ud();t={blockedOn:null,target:t,priority:n};for(var a=0;a<gi.length&&n!==0&&n<gi[a].priority;a++);gi.splice(a,0,t),a===0&&kg(t)}};var zg=e.version;if(zg!=="19.0.0")throw Error(r(527,zg,"19.0.0"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=k(n),t=t!==null?X(t):null,t=t===null?null:t.stateNode,t};var qb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,findFiberByHostInstance:xi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ta=fo.inject(qb),Et=fo}catch{}}return Er.createRoot=function(t,n){if(!o(t))throw Error(r(299));var a=!1,l="",c=em,f=tm,m=nm,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=Rg(t,1,!1,null,null,a,l,c,f,m,_,null),t[ys]=n.current,Ku(t.nodeType===8?t.parentNode:t),new ff(n)},Er.hydrateRoot=function(t,n,a){if(!o(t))throw Error(r(299));var l=!1,c="",f=em,m=tm,_=nm,y=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),n=Rg(t,1,!0,n,a??null,l,c,f,m,_,y,T),n.context=Og(null),a=n.current,l=At(),c=ai(l),c.callback=null,ri(a,c,l),n.current.lanes=l,wa(n,l),fn(n),t[ys]=n.current,Ku(t),new uo(n)},Er.version="19.0.0",Er}var Kg;function eT(){if(Kg)return pf.exports;Kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pf.exports=Jb(),pf.exports}var tT=eT();const nT=ch(tT);var vf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Xg;function iT(){return Xg||(Xg=1,function(s){(function(){var e={}.hasOwnProperty;function i(){for(var u="",h=0;h<arguments.length;h++){var d=arguments[h];d&&(u=o(u,r(d)))}return u}function r(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return i.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var h="";for(var d in u)e.call(u,d)&&u[d]&&(h=o(h,d));return h}function o(u,h){return h?u?u+" "+h:u+h:u}s.exports?(i.default=i,s.exports=i):window.classNames=i})()}(vf)),vf.exports}var sT=iT();const wv=ch(sT),aT=["xxl","xl","lg","md","sm","xs"],rT="xs",fh=L.createContext({prefixes:{},breakpoints:aT,minBreakpoint:rT});function Av(s,e){const{prefixes:i}=L.useContext(fh);return s||i[e]||e}function lT(){const{breakpoints:s}=L.useContext(fh);return s}function oT(){const{minBreakpoint:s}=L.useContext(fh);return s}Cv();const Ii=L.forwardRef(({bsPrefix:s,fluid:e=!1,as:i="div",className:r,...o},u)=>{const h=Av(s,"container"),d=typeof e=="string"?`-${e}`:"-fluid";return w.jsx(i,{ref:u,...o,className:wv(r,e?`${h}${d}`:h)})});Ii.displayName="Container";const Rv=L.forwardRef(({bsPrefix:s,className:e,as:i="div",...r},o)=>{const u=Av(s,"row"),h=lT(),d=oT(),p=`${u}-cols`,g=[];return h.forEach(E=>{const v=r[E];delete r[E];let R;v!=null&&typeof v=="object"?{cols:R}=v:R=v;const x=E!==d?`-${E}`:"";R!=null&&g.push(`${p}${x}-${R}`)}),w.jsx(i,{ref:o,...r,className:wv(e,u,...g)})});Rv.displayName="Row";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(){return xr=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},xr.apply(this,arguments)}var Ci;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Ci||(Ci={}));const Qg="popstate";function cT(s){s===void 0&&(s={});function e(r,o){let{pathname:u,search:h,hash:d}=r.location;return zf("",{pathname:u,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:So(o)}return fT(e,i,null,s)}function qe(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ov(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uT(){return Math.random().toString(36).substr(2,8)}function Wg(s,e){return{usr:s.state,key:s.key,idx:e}}function zf(s,e,i,r){return i===void 0&&(i=null),xr({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:i,key:e&&e.key||r||uT()})}function So(s){let{pathname:e="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pa(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function fT(s,e,i,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:u=!1}=r,h=o.history,d=Ci.Pop,p=null,g=E();g==null&&(g=0,h.replaceState(xr({},h.state,{idx:g}),""));function E(){return(h.state||{idx:null}).idx}function v(){d=Ci.Pop;let j=E(),le=j==null?null:j-g;g=j,p&&p({action:d,location:V.location,delta:le})}function R(j,le){d=Ci.Push;let te=zf(V.location,j,le);g=E()+1;let se=Wg(te,g),De=V.createHref(te);try{h.pushState(se,"",De)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(De)}u&&p&&p({action:d,location:V.location,delta:1})}function x(j,le){d=Ci.Replace;let te=zf(V.location,j,le);g=E();let se=Wg(te,g),De=V.createHref(te);h.replaceState(se,"",De),u&&p&&p({action:d,location:V.location,delta:0})}function U(j){let le=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof j=="string"?j:So(j);return te=te.replace(/ $/,"%20"),qe(le,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,le)}let V={get action(){return d},get location(){return s(o,h)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Qg,v),p=j,()=>{o.removeEventListener(Qg,v),p=null}},createHref(j){return e(o,j)},createURL:U,encodeLocation(j){let le=U(j);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:R,replace:x,go(j){return h.go(j)}};return V}var $g;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})($g||($g={}));function hT(s,e,i){return i===void 0&&(i="/"),dT(s,e,i,!1)}function dT(s,e,i,r){let o=typeof e=="string"?pa(e):e,u=hh(o.pathname||"/",i);if(u==null)return null;let h=Nv(s);pT(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let g=wT(u);d=TT(h[p],g,r)}return d}function Nv(s,e,i,r){e===void 0&&(e=[]),i===void 0&&(i=[]),r===void 0&&(r="");let o=(u,h,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(qe(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let g=wi([r,p.relativePath]),E=i.concat(p);u.children&&u.children.length>0&&(qe(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Nv(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:ST(g,u.index),routesMeta:E})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,h);else for(let p of Iv(u.path))o(u,h,p)}),e}function Iv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let h=Iv(r.join("/")),d=[];return d.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&d.push(...h),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function pT(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:bT(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const mT=/^:[\w-]+$/,gT=3,_T=2,vT=1,yT=10,ET=-2,Zg=s=>s==="*";function ST(s,e){let i=s.split("/"),r=i.length;return i.some(Zg)&&(r+=ET),e&&(r+=_T),i.filter(o=>!Zg(o)).reduce((o,u)=>o+(mT.test(u)?gT:u===""?vT:yT),r)}function bT(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function TT(s,e,i){let{routesMeta:r}=s,o={},u="/",h=[];for(let d=0;d<r.length;++d){let p=r[d],g=d===r.length-1,E=u==="/"?e:e.slice(u.length)||"/",v=Jg({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),R=p.route;if(!v&&g&&i&&!r[r.length-1].route.index&&(v=Jg({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!v)return null;Object.assign(o,v.params),h.push({params:o,pathname:wi([u,v.pathname]),pathnameBase:NT(wi([u,v.pathnameBase])),route:R}),v.pathnameBase!=="/"&&(u=wi([u,v.pathnameBase]))}return h}function Jg(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=CT(s.path,s.caseSensitive,s.end),o=e.match(i);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((g,E,v)=>{let{paramName:R,isOptional:x}=E;if(R==="*"){let V=d[v]||"";h=u.slice(0,u.length-V.length).replace(/(.)\/+$/,"$1")}const U=d[v];return x&&!U?g[R]=void 0:g[R]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:s}}function CT(s,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Ov(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function wT(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ov(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function hh(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function AT(s,e){e===void 0&&(e="/");let{pathname:i,search:r="",hash:o=""}=typeof s=="string"?pa(s):s;return{pathname:i?i.startsWith("/")?i:RT(i,e):e,search:IT(r),hash:DT(o)}}function RT(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function yf(s,e,i,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OT(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Dv(s,e){let i=OT(s);return e?i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function Mv(s,e,i,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=pa(s):(o=xr({},s),qe(!o.pathname||!o.pathname.includes("?"),yf("?","pathname","search",o)),qe(!o.pathname||!o.pathname.includes("#"),yf("#","pathname","hash",o)),qe(!o.search||!o.search.includes("#"),yf("#","search","hash",o)));let u=s===""||o.pathname==="",h=u?"/":o.pathname,d;if(h==null)d=i;else{let v=e.length-1;if(!r&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),v-=1;o.pathname=R.join("/")}d=v>=0?e[v]:"/"}let p=AT(o,d),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}const wi=s=>s.join("/").replace(/\/\/+/g,"/"),NT=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),IT=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,DT=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function MT(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const xv=["post","put","patch","delete"];new Set(xv);const xT=["get",...xv];new Set(xT);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},kr.apply(this,arguments)}const dh=L.createContext(null),kT=L.createContext(null),fs=L.createContext(null),qo=L.createContext(null),hs=L.createContext({outlet:null,matches:[],isDataRoute:!1}),kv=L.createContext(null);function LT(s,e){let{relative:i}=e===void 0?{}:e;Pr()||qe(!1);let{basename:r,navigator:o}=L.useContext(fs),{hash:u,pathname:h,search:d}=Uv(s,{relative:i}),p=h;return r!=="/"&&(p=h==="/"?r:wi([r,h])),o.createHref({pathname:p,search:d,hash:u})}function Pr(){return L.useContext(qo)!=null}function qr(){return Pr()||qe(!1),L.useContext(qo).location}function Lv(s){L.useContext(fs).static||L.useLayoutEffect(s)}function Vo(){let{isDataRoute:s}=L.useContext(hs);return s?XT():UT()}function UT(){Pr()||qe(!1);let s=L.useContext(dh),{basename:e,future:i,navigator:r}=L.useContext(fs),{matches:o}=L.useContext(hs),{pathname:u}=qr(),h=JSON.stringify(Dv(o,i.v7_relativeSplatPath)),d=L.useRef(!1);return Lv(()=>{d.current=!0}),L.useCallback(function(g,E){if(E===void 0&&(E={}),!d.current)return;if(typeof g=="number"){r.go(g);return}let v=Mv(g,JSON.parse(h),u,E.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:wi([e,v.pathname])),(E.replace?r.replace:r.push)(v,E.state,E)},[e,r,h,u,s])}function Uv(s,e){let{relative:i}=e===void 0?{}:e,{future:r}=L.useContext(fs),{matches:o}=L.useContext(hs),{pathname:u}=qr(),h=JSON.stringify(Dv(o,r.v7_relativeSplatPath));return L.useMemo(()=>Mv(s,JSON.parse(h),u,i==="path"),[s,h,u,i])}function zT(s,e){return jT(s,e)}function jT(s,e,i,r){Pr()||qe(!1);let{navigator:o}=L.useContext(fs),{matches:u}=L.useContext(hs),h=u[u.length-1],d=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let g=qr(),E;if(e){var v;let j=typeof e=="string"?pa(e):e;p==="/"||(v=j.pathname)!=null&&v.startsWith(p)||qe(!1),E=j}else E=g;let R=E.pathname||"/",x=R;if(p!=="/"){let j=p.replace(/^\//,"").split("/");x="/"+R.replace(/^\//,"").split("/").slice(j.length).join("/")}let U=hT(s,{pathname:x}),V=VT(U&&U.map(j=>Object.assign({},j,{params:Object.assign({},d,j.params),pathname:wi([p,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?p:wi([p,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),u,i,r);return e&&V?L.createElement(qo.Provider,{value:{location:kr({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Ci.Pop}},V):V}function HT(){let s=KT(),e=MT(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),i?L.createElement("pre",{style:o},i):null,null)}const BT=L.createElement(HT,null);class PT extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?L.createElement(hs.Provider,{value:this.props.routeContext},L.createElement(kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qT(s){let{routeContext:e,match:i,children:r}=s,o=L.useContext(dh);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),L.createElement(hs.Provider,{value:e},r)}function VT(s,e,i,r){var o;if(e===void 0&&(e=[]),i===void 0&&(i=null),r===void 0&&(r=null),s==null){var u;if(!i)return null;if(i.errors)s=i.matches;else if((u=r)!=null&&u.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let h=s,d=(o=i)==null?void 0:o.errors;if(d!=null){let E=h.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);E>=0||qe(!1),h=h.slice(0,Math.min(h.length,E+1))}let p=!1,g=-1;if(i&&r&&r.v7_partialHydration)for(let E=0;E<h.length;E++){let v=h[E];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=E),v.route.id){let{loaderData:R,errors:x}=i,U=v.route.loader&&R[v.route.id]===void 0&&(!x||x[v.route.id]===void 0);if(v.route.lazy||U){p=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((E,v,R)=>{let x,U=!1,V=null,j=null;i&&(x=d&&v.route.id?d[v.route.id]:void 0,V=v.route.errorElement||BT,p&&(g<0&&R===0?(U=!0,j=null):g===R&&(U=!0,j=v.route.hydrateFallbackElement||null)));let le=e.concat(h.slice(0,R+1)),te=()=>{let se;return x?se=V:U?se=j:v.route.Component?se=L.createElement(v.route.Component,null):v.route.element?se=v.route.element:se=E,L.createElement(qT,{match:v,routeContext:{outlet:E,matches:le,isDataRoute:i!=null},children:se})};return i&&(v.route.ErrorBoundary||v.route.errorElement||R===0)?L.createElement(PT,{location:i.location,revalidation:i.revalidation,component:V,error:x,children:te(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):te()},null)}var zv=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(zv||{}),bo=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(bo||{});function GT(s){let e=L.useContext(dh);return e||qe(!1),e}function YT(s){let e=L.useContext(kT);return e||qe(!1),e}function FT(s){let e=L.useContext(hs);return e||qe(!1),e}function jv(s){let e=FT(),i=e.matches[e.matches.length-1];return i.route.id||qe(!1),i.route.id}function KT(){var s;let e=L.useContext(kv),i=YT(bo.UseRouteError),r=jv(bo.UseRouteError);return e!==void 0?e:(s=i.errors)==null?void 0:s[r]}function XT(){let{router:s}=GT(zv.UseNavigateStable),e=jv(bo.UseNavigateStable),i=L.useRef(!1);return Lv(()=>{i.current=!0}),L.useCallback(function(o,u){u===void 0&&(u={}),i.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,kr({fromRouteId:e},u)))},[s,e])}const e_={};function QT(s,e){e_[e]||(e_[e]=!0,console.warn(e))}const t_=(s,e,i)=>QT(s,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+s+"` future flag to opt-in early. ")+("For more information, see "+i+"."));function WT(s,e){s!=null&&s.v7_startTransition||t_("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(s!=null&&s.v7_relativeSplatPath)&&!e&&t_("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function yi(s){qe(!1)}function $T(s){let{basename:e="/",children:i=null,location:r,navigationType:o=Ci.Pop,navigator:u,static:h=!1,future:d}=s;Pr()&&qe(!1);let p=e.replace(/^\/*/,"/"),g=L.useMemo(()=>({basename:p,navigator:u,static:h,future:kr({v7_relativeSplatPath:!1},d)}),[p,d,u,h]);typeof r=="string"&&(r=pa(r));let{pathname:E="/",search:v="",hash:R="",state:x=null,key:U="default"}=r,V=L.useMemo(()=>{let j=hh(E,p);return j==null?null:{location:{pathname:j,search:v,hash:R,state:x,key:U},navigationType:o}},[p,E,v,R,x,U,o]);return V==null?null:L.createElement(fs.Provider,{value:g},L.createElement(qo.Provider,{children:i,value:V}))}function ZT(s){let{children:e,location:i}=s;return zT(jf(e),i)}new Promise(()=>{});function jf(s,e){e===void 0&&(e=[]);let i=[];return L.Children.forEach(s,(r,o)=>{if(!L.isValidElement(r))return;let u=[...e,o];if(r.type===L.Fragment){i.push.apply(i,jf(r.props.children,u));return}r.type!==yi&&qe(!1),!r.props.index||!r.props.children||qe(!1);let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=jf(r.props.children,u)),i.push(h)}),i}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Hf.apply(this,arguments)}function JT(s,e){if(s==null)return{};var i={},r=Object.keys(s),o,u;for(u=0;u<r.length;u++)o=r[u],!(e.indexOf(o)>=0)&&(i[o]=s[o]);return i}function e1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function t1(s,e){return s.button===0&&(!e||e==="_self")&&!e1(s)}const n1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],i1="6";try{window.__reactRouterVersion=i1}catch{}const s1="startTransition",n_=Qb[s1];function a1(s){let{basename:e,children:i,future:r,window:o}=s,u=L.useRef();u.current==null&&(u.current=cT({window:o,v5Compat:!0}));let h=u.current,[d,p]=L.useState({action:h.action,location:h.location}),{v7_startTransition:g}=r||{},E=L.useCallback(v=>{g&&n_?n_(()=>p(v)):p(v)},[p,g]);return L.useLayoutEffect(()=>h.listen(E),[h,E]),L.useEffect(()=>WT(r),[r]),L.createElement($T,{basename:e,children:i,location:d.location,navigationType:d.action,navigator:h,future:r})}const r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=L.forwardRef(function(e,i){let{onClick:r,relative:o,reloadDocument:u,replace:h,state:d,target:p,to:g,preventScrollReset:E,viewTransition:v}=e,R=JT(e,n1),{basename:x}=L.useContext(fs),U,V=!1;if(typeof g=="string"&&l1.test(g)&&(U=g,r1))try{let se=new URL(window.location.href),De=g.startsWith("//")?new URL(se.protocol+g):new URL(g),J=hh(De.pathname,x);De.origin===se.origin&&J!=null?g=J+De.search+De.hash:V=!0}catch{}let j=LT(g,{relative:o}),le=o1(g,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:v});function te(se){r&&r(se),se.defaultPrevented||le(se)}return L.createElement("a",Hf({},R,{href:U||j,onClick:V||u?r:te,ref:i,target:p}))});var i_;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(i_||(i_={}));var s_;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(s_||(s_={}));function o1(s,e){let{target:i,replace:r,state:o,preventScrollReset:u,relative:h,viewTransition:d}=e===void 0?{}:e,p=Vo(),g=qr(),E=Uv(s,{relative:h});return L.useCallback(v=>{if(t1(v,i)){v.preventDefault();let R=r!==void 0?r:So(g)===So(E);p(s,{replace:R,state:o,preventScrollReset:u,relative:h,viewTransition:d})}},[g,p,E,r,o,i,s,u,h,d])}const c1=({user:s,onLogout:e})=>{const[i,r]=L.useState(!1),o=()=>{r(!i)},u=()=>{r(!1)},h=d=>{d.target.classList.contains("blur-background")&&r(!1)};return w.jsxs("div",{className:"burger_menu",children:[w.jsx("button",{id:"burger__btn",type:"button",onClick:o,children:w.jsx("span",{id:"burgerSpan",className:i?"btn-open-animation":""})}),w.jsx("aside",{className:`burger__container ${i?"open":""}`,children:w.jsx("div",{className:"burger__content",children:w.jsx("nav",{className:"burger__nav",children:w.jsxs("ol",{className:"burgerMenu_list",children:[w.jsx(Rt,{to:"/",onClick:u,children:w.jsx("li",{children:"Главная"})}),w.jsx(Rt,{to:"/aboutus",onClick:u,children:w.jsx("li",{children:"О нас"})}),s?w.jsx(Rt,{to:`/user/${s.uid}`,onClick:u,children:w.jsx("li",{children:"Профиль"})}):w.jsx(Rt,{to:"/reg",onClick:u,children:w.jsx("li",{children:"Регистрация"})}),s&&w.jsx("li",{onClick:e,className:"burgerMenu__logout",children:"Выйти"})]})})})}),w.jsx("div",{className:`blur-background ${i?"show":""}`,onClick:h})]})};var a_={};/**
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
 */const Hv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(s,e){if(!s)throw ma(e)},ma=function(s){return new Error("Firebase Database ("+Hv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const Bv=function(s){const e=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},u1=function(s){const e=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[i++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[i++],h=s[i++],d=s[i++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const u=s[i++],h=s[i++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],h=o+1<s.length,d=h?s[o+1]:0,p=o+2<s.length,g=p?s[o+2]:0,E=u>>2,v=(u&3)<<4|d>>4;let R=(d&15)<<2|g>>6,x=g&63;p||(x=64,h||(R=64)),r.push(i[E],i[v],i[R],i[x])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Bv(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):u1(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const v=o<s.length?i[s.charAt(o)]:64;if(++o,u==null||d==null||g==null||v==null)throw new f1;const R=u<<2|d>>4;if(r.push(R),g!==64){const x=d<<4&240|g>>2;if(r.push(x),v!==64){const U=g<<6&192|v;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class f1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pv=function(s){const e=Bv(s);return ph.encodeByteArray(e,!0)},To=function(s){return Pv(s).replace(/\./g,"")},Co=function(s){try{return ph.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h1(s){return qv(void 0,s)}function qv(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!d1(i)||(s[i]=qv(s[i],e[i]));return s}function d1(s){return s!=="__proto__"}/**
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
 */function p1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const m1=()=>p1().__FIREBASE_DEFAULTS__,g1=()=>{if(typeof process>"u"||typeof a_>"u")return;const s=a_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},_1=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Co(s[1]);return e&&JSON.parse(e)},mh=()=>{try{return m1()||g1()||_1()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Vv=s=>{var e,i;return(i=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[s]},v1=s=>{const e=Vv(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},Gv=()=>{var s;return(s=mh())===null||s===void 0?void 0:s.config},Yv=s=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${s}`]};/**
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
 */class gh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function y1(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},s);return[To(JSON.stringify(i)),To(JSON.stringify(h)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _h(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function E1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fv(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S1(){const s=ht();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Xv(){return Hv.NODE_ADMIN===!0}function Qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((s,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(i){e(i)}})}function b1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const T1="FirebaseError";class _n extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=T1,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?C1(u,r):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new _n(o,d,r)}}function C1(s,e){return s.replace(w1,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;/**
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
 */function Lr(s){return JSON.parse(s)}function nt(s){return JSON.stringify(s)}/**
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
 */const $v=function(s){let e={},i={},r={},o="";try{const u=s.split(".");e=Lr(Co(u[0])||""),i=Lr(Co(u[1])||""),o=u[2],r=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:r,signature:o}},A1=function(s){const e=$v(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},R1=function(s){const e=$v(s).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Fn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function ca(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Bf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function wo(s,e,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=e.call(i,s[o],o,s));return r}function Ur(s,e){if(s===e)return!0;const i=Object.keys(s),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const u=s[o],h=e[o];if(r_(u)&&r_(h)){if(!Ur(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function r_(s){return s!==null&&typeof s=="object"}/**
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
 */function ga(s){const e=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wr(s){const e={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ar(s){const e=s.indexOf("?");if(!e)return"";const i=s.indexOf("#",e);return s.substring(e,i>0?i:void 0)}/**
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
 */class O1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let v=0;v<16;v++)r[v]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let v=16;v<80;v++){const R=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(R<<1|R>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,E;for(let v=0;v<80;v++){v<40?v<20?(g=d^u&(h^d),E=1518500249):(g=u^h^d,E=1859775393):v<60?(g=u&h|d&(u|h),E=2400959708):(g=u^h^d,E=3395469782);const R=(o<<5|o>>>27)+g+p+E+r[v]&4294967295;p=d,d=h,h=(u<<30|u>>>2)&4294967295,u=o,o=R}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const r=i-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(u[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<i;)if(u[h]=e[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[r]=this.chain_[o]>>u&255,++r;return e}}function N1(s,e){const i=new I1(s,e);return i.subscribe.bind(i)}class I1{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");D1(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Ef),o.error===void 0&&(o.error=Ef),o.complete===void 0&&(o.complete=Ef);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D1(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Ef(){}function M1(s,e){return`${s} failed: ${e} argument `}/**
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
 */const x1=function(s){const e=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,z(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(u<<10)+h}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Go=function(s){let e=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,i++):e+=3}return e};/**
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
 */const k1=1e3,L1=2,U1=4*60*60*1e3,z1=.5;function l_(s,e=k1,i=L1){const r=e*Math.pow(i,s),o=Math.round(z1*r*(Math.random()-.5)*2);return Math.min(U1,r+o)}/**
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
 */function yt(s){return s&&s._delegate?s._delegate:s}class en{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class j1{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new gh;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B1(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);r===d&&h.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H1(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H1(s){return s===es?void 0:s}function B1(s){return s.instantiationMode==="EAGER"}/**
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
 */class P1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new j1(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Se||(Se={}));const q1={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},V1=Se.INFO,G1={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Y1=(s,e,...i)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=G1[e];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=V1,this._logHandler=Y1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const F1=(s,e)=>e.some(i=>s instanceof i);let o_,c_;function K1(){return o_||(o_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X1(){return c_||(c_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zv=new WeakMap,Pf=new WeakMap,Jv=new WeakMap,Sf=new WeakMap,vh=new WeakMap;function Q1(s){const e=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",h)},u=()=>{i(Ai(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&Zv.set(i,s)}).catch(()=>{}),vh.set(e,s),e}function W1(s){if(Pf.has(s))return;const e=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",h),s.removeEventListener("abort",h)},u=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",h),s.addEventListener("abort",h)});Pf.set(s,e)}let qf={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return Pf.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Jv.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ai(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function $1(s){qf=s(qf)}function Z1(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=s.call(bf(this),e,...i);return Jv.set(r,e.sort?e.sort():[e]),Ai(r)}:X1().includes(s)?function(...e){return s.apply(bf(this),e),Ai(Zv.get(this))}:function(...e){return Ai(s.apply(bf(this),e))}}function J1(s){return typeof s=="function"?Z1(s):(s instanceof IDBTransaction&&W1(s),F1(s,K1())?new Proxy(s,qf):s)}function Ai(s){if(s instanceof IDBRequest)return Q1(s);if(Sf.has(s))return Sf.get(s);const e=J1(s);return e!==s&&(Sf.set(s,e),vh.set(e,s)),e}const bf=s=>vh.get(s);function ey(s,e,{blocked:i,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(s,e),d=Ai(h);return r&&h.addEventListener("upgradeneeded",p=>{r(Ai(h.result),p.oldVersion,p.newVersion,Ai(h.transaction),p)}),i&&h.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),d.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],Tf=new Map;function u_(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=tC.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||eC.includes(i)))return;const u=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&p.done]))[0]};return Tf.set(e,u),u}$1(s=>({...s,get:(e,i,r)=>u_(e,i)||s.get(e,i,r),has:(e,i)=>!!u_(e,i)||s.has(e,i)}));/**
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
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(iC(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function iC(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",f_="0.10.17";/**
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
 */const Vn=new Yo("@firebase/app"),sC="@firebase/app-compat",aC="@firebase/analytics-compat",rC="@firebase/analytics",lC="@firebase/app-check-compat",oC="@firebase/app-check",cC="@firebase/auth",uC="@firebase/auth-compat",fC="@firebase/database",hC="@firebase/data-connect",dC="@firebase/database-compat",pC="@firebase/functions",mC="@firebase/functions-compat",gC="@firebase/installations",_C="@firebase/installations-compat",vC="@firebase/messaging",yC="@firebase/messaging-compat",EC="@firebase/performance",SC="@firebase/performance-compat",bC="@firebase/remote-config",TC="@firebase/remote-config-compat",CC="@firebase/storage",wC="@firebase/storage-compat",AC="@firebase/firestore",RC="@firebase/vertexai",OC="@firebase/firestore-compat",NC="firebase",IC="11.1.0";/**
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
 */const Gf="[DEFAULT]",DC={[Vf]:"fire-core",[sC]:"fire-core-compat",[rC]:"fire-analytics",[aC]:"fire-analytics-compat",[oC]:"fire-app-check",[lC]:"fire-app-check-compat",[cC]:"fire-auth",[uC]:"fire-auth-compat",[fC]:"fire-rtdb",[hC]:"fire-data-connect",[dC]:"fire-rtdb-compat",[pC]:"fire-fn",[mC]:"fire-fn-compat",[gC]:"fire-iid",[_C]:"fire-iid-compat",[vC]:"fire-fcm",[yC]:"fire-fcm-compat",[EC]:"fire-perf",[SC]:"fire-perf-compat",[bC]:"fire-rc",[TC]:"fire-rc-compat",[CC]:"fire-gcs",[wC]:"fire-gcs-compat",[AC]:"fire-fst",[OC]:"fire-fst-compat",[RC]:"fire-vertex","fire-js":"fire-js",[NC]:"fire-js-all"};/**
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
 */const Ao=new Map,MC=new Map,Yf=new Map;function h_(s,e){try{s.container.addComponent(e)}catch(i){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function gn(s){const e=s.name;if(Yf.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,s);for(const i of Ao.values())h_(i,s);for(const i of MC.values())h_(i,s);return!0}function ps(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function hn(s){return s.settings!==void 0}/**
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
 */const xC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new ds("app","Firebase",xC);/**
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
 */class kC{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const _a=IC;function ty(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Ri.create("bad-app-name",{appName:String(o)});if(i||(i=Gv()),!i)throw Ri.create("no-options");const u=Ao.get(o);if(u){if(Ur(i,u.options)&&Ur(r,u.config))return u;throw Ri.create("duplicate-app",{appName:o})}const h=new P1(o);for(const p of Yf.values())h.addComponent(p);const d=new kC(i,r,h);return Ao.set(o,d),d}function yh(s=Gf){const e=Ao.get(s);if(!e&&s===Gf&&Gv())return ty();if(!e)throw Ri.create("no-app",{appName:s});return e}function Gt(s,e,i){var r;let o=(r=DC[s])!==null&&r!==void 0?r:s;i&&(o+=`-${i}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const d=[`Unable to register library "${o}" with version "${e}":`];u&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(d.join(" "));return}gn(new en(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const LC="firebase-heartbeat-database",UC=1,zr="firebase-heartbeat-store";let Cf=null;function ny(){return Cf||(Cf=ey(LC,UC,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(zr)}catch(i){console.warn(i)}}}}).catch(s=>{throw Ri.create("idb-open",{originalErrorMessage:s.message})})),Cf}async function zC(s){try{const i=(await ny()).transaction(zr),r=await i.objectStore(zr).get(iy(s));return await i.done,r}catch(e){if(e instanceof _n)Vn.warn(e.message);else{const i=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(i.message)}}}async function d_(s,e){try{const r=(await ny()).transaction(zr,"readwrite");await r.objectStore(zr).put(e,iy(s)),await r.done}catch(i){if(i instanceof _n)Vn.warn(i.message);else{const r=Ri.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Vn.warn(r.message)}}}function iy(s){return`${s.name}!${s.options.appId}`}/**
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
 */const jC=1024,HC=30*24*60*60*1e3;class BC{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new qC(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=p_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=HC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=p_(),{heartbeatsToSend:r,unsentEntries:o}=PC(this._heartbeatsCache.heartbeats),u=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return Vn.warn(i),""}}}function p_(){return new Date().toISOString().substring(0,10)}function PC(s,e=jC){const i=[];let r=s.slice();for(const o of s){const u=i.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),m_(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),m_(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class qC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await zC(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return d_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return d_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function m_(s){return To(JSON.stringify({version:2,heartbeats:s})).length}/**
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
 */function VC(s){gn(new en("platform-logger",e=>new nC(e),"PRIVATE")),gn(new en("heartbeat",e=>new BC(e),"PRIVATE")),Gt(Vf,f_,s),Gt(Vf,f_,"esm2017"),Gt("fire-js","")}VC("");var GC="firebase",YC="11.1.0";/**
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
 */Gt(GC,YC,"app");function Eh(s,e){var i={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(i[r[o]]=s[r[o]]);return i}function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FC=sy,ay=new ds("auth","Firebase",sy());/**
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
 */const Ro=new Yo("@firebase/auth");function KC(s,...e){Ro.logLevel<=Se.WARN&&Ro.warn(`Auth (${_a}): ${s}`,...e)}function go(s,...e){Ro.logLevel<=Se.ERROR&&Ro.error(`Auth (${_a}): ${s}`,...e)}/**
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
 */function tn(s,...e){throw Sh(s,...e)}function pn(s,...e){return Sh(s,...e)}function ry(s,e,i){const r=Object.assign(Object.assign({},FC()),{[e]:i});return new ds("auth","Firebase",r).create(e,{appName:s.name})}function Pn(s){return ry(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sh(s,...e){if(typeof s!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return ay.create(s,...e)}function W(s,e,...i){if(!s)throw Sh(e,...i)}function zn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw go(e),new Error(e)}function Gn(s,e){s||zn(e)}/**
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
 */function Ff(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function XC(){return g_()==="http:"||g_()==="https:"}function g_(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function QC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XC()||Fv()||"connection"in navigator)?navigator.onLine:!0}function WC(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Vr{constructor(e,i){this.shortDelay=e,this.longDelay=i,Gn(i>e,"Short delay should be less than long delay!"),this.isMobile=_h()||Kv()}get(){return QC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bh(s,e){Gn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class ly{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZC=new Vr(3e4,6e4);function Di(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Kn(s,e,i,r,o={}){return oy(s,o,async()=>{let u={},h={};r&&(e==="GET"?h=r:u={body:JSON.stringify(r)});const d=ga(Object.assign({key:s.config.apiKey},h)).slice(1),p=await s._getAdditionalHeaders();p["Content-Type"]="application/json",s.languageCode&&(p["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:e,headers:p},u);return E1()||(g.referrerPolicy="no-referrer"),ly.fetch()(cy(s,s.config.apiHost,i,d),g)})}async function oy(s,e,i){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},$C),e);try{const o=new ew(s),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ho(s,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(s,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ho(s,"email-already-in-use",h);if(p==="USER_DISABLED")throw ho(s,"user-disabled",h);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ry(s,E,g);tn(s,E)}}catch(o){if(o instanceof _n)throw o;tn(s,"network-request-failed",{message:String(o)})}}async function Gr(s,e,i,r,o={}){const u=await Kn(s,e,i,r,o);return"mfaPendingCredential"in u&&tn(s,"multi-factor-auth-required",{_serverResponse:u}),u}function cy(s,e,i,r){const o=`${e}${i}?${r}`;return s.config.emulator?bh(s.config,o):`${s.config.apiScheme}://${o}`}function JC(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ew{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),ZC.get())})}}function ho(s,e,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=pn(s,e,r);return o.customData._tokenResponse=i,o}function __(s){return s!==void 0&&s.enterprise!==void 0}class tw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return JC(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nw(s,e){return Kn(s,"GET","/v2/recaptchaConfig",Di(s,e))}/**
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
 */async function iw(s,e){return Kn(s,"POST","/v1/accounts:delete",e)}async function uy(s,e){return Kn(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rr(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sw(s,e=!1){const i=yt(s),r=await i.getIdToken(e),o=Th(r);W(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:Rr(wf(o.auth_time)),issuedAtTime:Rr(wf(o.iat)),expirationTime:Rr(wf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function wf(s){return Number(s)*1e3}function Th(s){const[e,i,r]=s.split(".");if(e===void 0||i===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const o=Co(i);return o?JSON.parse(o):(go("Failed to decode base64 JWT payload"),null)}catch(o){return go("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function v_(s){const e=Th(s);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ua(s,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof _n&&aw(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function aw({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class rw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kf{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oo(s){var e;const i=s.auth,r=await s.getIdToken(),o=await ua(s,uy(i,{idToken:r}));W(o==null?void 0:o.users.length,i,"internal-error");const u=o.users[0];s._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?fy(u.providerUserInfo):[],d=ow(s.providerData,h),p=s.isAnonymous,g=!(s.email&&u.passwordHash)&&!(d!=null&&d.length),E=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:d,metadata:new Kf(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(s,v)}async function lw(s){const e=yt(s);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ow(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function fy(s){return s.map(e=>{var{providerId:i}=e,r=Eh(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cw(s,e){const i=await oy(s,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,h=cy(s,o,"/v1/token",`key=${u}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(h,{method:"POST",headers:d,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function uw(s,e){return Kn(s,"POST","/v2/accounts:revokeToken",Di(s,e))}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){W(e.length!==0,"internal-error");const i=v_(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:u}=await cw(e,i);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:u}=i,h=new sa;return r&&(W(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(W(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(W(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function vi(s,e){W(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,u=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Kf(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const i=await ua(this,this.stsTokenManager.getToken(this.auth,e));return W(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return sw(this,e)}reload(){return lw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await ua(this,iw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,u,h,d,p,g,E;const v=(r=i.displayName)!==null&&r!==void 0?r:void 0,R=(o=i.email)!==null&&o!==void 0?o:void 0,x=(u=i.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=i.photoURL)!==null&&h!==void 0?h:void 0,V=(d=i.tenantId)!==null&&d!==void 0?d:void 0,j=(p=i._redirectEventId)!==null&&p!==void 0?p:void 0,le=(g=i.createdAt)!==null&&g!==void 0?g:void 0,te=(E=i.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:se,emailVerified:De,isAnonymous:J,providerData:Ye,stsTokenManager:Ft}=i;W(se&&Ft,e,"internal-error");const nn=sa.fromJSON(this.name,Ft);W(typeof se=="string",e,"internal-error"),vi(v,e.name),vi(R,e.name),W(typeof De=="boolean",e,"internal-error"),W(typeof J=="boolean",e,"internal-error"),vi(x,e.name),vi(U,e.name),vi(V,e.name),vi(j,e.name),vi(le,e.name),vi(te,e.name);const Y=new jn({uid:se,auth:e,email:R,emailVerified:De,displayName:v,isAnonymous:J,photoURL:U,phoneNumber:x,tenantId:V,stsTokenManager:nn,createdAt:le,lastLoginAt:te});return Ye&&Array.isArray(Ye)&&(Y.providerData=Ye.map(pe=>Object.assign({},pe))),j&&(Y._redirectEventId=j),Y}static async _fromIdTokenResponse(e,i,r=!1){const o=new sa;o.updateFromServerResponse(i);const u=new jn({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Oo(u),u}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];W(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?fy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),d=new sa;d.updateFromIdToken(r);const p=new jn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Kf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const y_=new Map;function Hn(s){Gn(s instanceof Function,"Expected a class definition");let e=y_.get(s);return e?(Gn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,y_.set(s,e),e)}/**
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
 */class hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}hy.type="NONE";const E_=hy;/**
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
 */function _o(s,e,i){return`firebase:${s}:${e}:${i}`}class aa{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=_o(this.userKey,o.apiKey,u),this.fullPersistenceKey=_o("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new aa(Hn(E_),e,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Hn(E_);const h=_o(r,e.config.apiKey,e.name);let d=null;for(const g of i)try{const E=await g._get(h);if(E){const v=jn._fromJSON(e,E);g!==u&&(d=v),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new aa(u,e,r):(u=p[0],d&&await u._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new aa(u,e,r))}}/**
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
 */function S_(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(yy(e))return"Webos";if(py(e))return"Safari";if((e.includes("chrome/")||my(e))&&!e.includes("edge/"))return"Chrome";if(_y(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dy(s=ht()){return/firefox\//i.test(s)}function py(s=ht()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function my(s=ht()){return/crios\//i.test(s)}function gy(s=ht()){return/iemobile/i.test(s)}function _y(s=ht()){return/android/i.test(s)}function vy(s=ht()){return/blackberry/i.test(s)}function yy(s=ht()){return/webos/i.test(s)}function Ch(s=ht()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function fw(s=ht()){var e;return Ch(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hw(){return S1()&&document.documentMode===10}function Ey(s=ht()){return Ch(s)||_y(s)||yy(s)||vy(s)||/windows phone/i.test(s)||gy(s)}/**
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
 */function Sy(s,e=[]){let i;switch(s){case"Browser":i=S_(ht());break;case"Worker":i=`${S_(ht())}-${s}`;break;default:i=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${_a}/${r}`}/**
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
 */class dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=u=>new Promise((h,d)=>{try{const p=e(u);h(p)}catch(p){d(p)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pw(s,e={}){return Kn(s,"GET","/v2/passwordPolicy",Di(s,e))}/**
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
 */const mw=6;class gw{constructor(e){var i,r,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:mw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,u,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(i=p.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class _w{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Hn(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await aa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await uy(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(hn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Pn(this));const i=e?yt(e):null;return i&&W(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pw(this),i=new gw(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await uw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Hn(e)||this._popupRedirectResolver;W(i,this,"argument-error"),this.redirectPersistenceManager=await aa.create(this,[Hn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof i=="function"){const p=e.addObserver(i,r,o);return()=>{h=!0,p()}}else{const p=e.addObserver(i);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&KC(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function ms(s){return yt(s)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=N1(i=>this.observer=i)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vw(s){Fo=s}function by(s){return Fo.loadJS(s)}function yw(){return Fo.recaptchaEnterpriseScript}function Ew(){return Fo.gapiScript}function Sw(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class bw{constructor(){this.enterprise=new Tw}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class Tw{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const Cw="recaptcha-enterprise",Ty="NO_RECAPTCHA";class ww{constructor(e){this.type=Cw,this.auth=ms(e)}async verify(e="verify",i=!1){async function r(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,d)=>{nw(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new tw(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(p=>{d(p)})})}function o(u,h,d){const p=window.grecaptcha;__(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(Ty)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bw().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{r(this.auth).then(d=>{if(!i&&__(window.grecaptcha))o(d,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yw();p.length!==0&&(p+=d),by(p).then(()=>{o(d,u,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function T_(s,e,i,r=!1,o=!1){const u=new ww(s);let h;if(o)h=Ty;else try{h=await u.verify(i)}catch{h=await u.verify(i,!0)}const d=Object.assign({},e);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Xf(s,e,i,r,o){var u;if(!((u=s._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await T_(s,e,i,i==="getOobCode");return r(s,h)}else return r(s,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await T_(s,e,i,i==="getOobCode");return r(s,d)}else return Promise.reject(h)})}/**
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
 */function Aw(s,e){const i=ps(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(Ur(u,e??{}))return o;tn(o,"already-initialized")}return i.initialize({options:e})}function Rw(s,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Hn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ow(s,e,i){const r=ms(s);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=Cy(e),{host:h,port:d}=Nw(e),p=d===null?"":`:${d}`;r.config.emulator={url:`${u}//${h}${p}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),Iw()}function Cy(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Nw(s){const e=Cy(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:C_(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:C_(h)}}}function C_(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Iw(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class wh{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,i){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function Dw(s,e){return Kn(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Mw(s,e){return Gr(s,"POST","/v1/accounts:signInWithPassword",Di(s,e))}/**
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
 */async function xw(s,e){return Gr(s,"POST","/v1/accounts:signInWithEmailLink",Di(s,e))}async function kw(s,e){return Gr(s,"POST","/v1/accounts:signInWithEmailLink",Di(s,e))}/**
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
 */class jr extends wh{constructor(e,i,r,o=null){super("password",r),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new jr(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new jr(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,i,"signInWithPassword",Mw);case"emailLink":return xw(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,r,"signUpPassword",Dw);case"emailLink":return kw(e,{idToken:i,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ra(s,e){return Gr(s,"POST","/v1/accounts:signInWithIdp",Di(s,e))}/**
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
 */const Lw="http://localhost";class ss extends wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):tn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,u=Eh(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new ss(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return ra(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,ra(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,ra(e,i)}buildRequest(){const e={requestUri:Lw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=ga(i)}return e}}/**
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
 */function Uw(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zw(s){const e=wr(Ar(s)).link,i=e?wr(Ar(e)).deep_link_id:null,r=wr(Ar(s)).deep_link_id;return(r?wr(Ar(r)).link:null)||r||i||e||s}class Ah{constructor(e){var i,r,o,u,h,d;const p=wr(Ar(e)),g=(i=p.apiKey)!==null&&i!==void 0?i:null,E=(r=p.oobCode)!==null&&r!==void 0?r:null,v=Uw((o=p.mode)!==null&&o!==void 0?o:null);W(g&&E&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const i=zw(e);try{return new Ah(i)}catch{return null}}}/**
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
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,i){return jr._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=Ah.parseLink(i);return W(r,"argument-error"),jr._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yr extends wy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends Yr{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class Si extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return ss._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Si.credential(i,r)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class bi extends Yr{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
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
 */class Ti extends Yr{constructor(){super("twitter.com")}static credential(e,i){return ss._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ti.credential(i,r)}catch{return null}}}Ti.TWITTER_SIGN_IN_METHOD="twitter.com";Ti.PROVIDER_ID="twitter.com";/**
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
 */async function jw(s,e){return Gr(s,"POST","/v1/accounts:signUp",Di(s,e))}/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const u=await jn._fromIdTokenResponse(e,r,o),h=w_(r);return new as({user:u,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=w_(r);return new as({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function w_(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class No extends _n{constructor(e,i,r,o){var u;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new No(e,i,r,o)}}function Ay(s,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(s,u,e,r):u})}async function Hw(s,e,i=!1){const r=await ua(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return as._forOperation(s,"link",r)}/**
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
 */async function Bw(s,e,i=!1){const{auth:r}=s;if(hn(r.app))return Promise.reject(Pn(r));const o="reauthenticate";try{const u=await ua(s,Ay(r,o,e,s),i);W(u.idToken,r,"internal-error");const h=Th(u.idToken);W(h,r,"internal-error");const{sub:d}=h;return W(s.uid===d,r,"user-mismatch"),as._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),u}}/**
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
 */async function Ry(s,e,i=!1){if(hn(s.app))return Promise.reject(Pn(s));const r="signIn",o=await Ay(s,r,e),u=await as._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(u.user),u}async function Pw(s,e){return Ry(ms(s),e)}/**
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
 */async function Oy(s){const e=ms(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qw(s,e,i){if(hn(s.app))return Promise.reject(Pn(s));const r=ms(s),h=await Xf(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jw).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Oy(s),p}),d=await as._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(d.user),d}function Vw(s,e,i){return hn(s.app)?Promise.reject(Pn(s)):Pw(yt(s),va.credential(e,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Oy(s),r})}/**
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
 */async function Gw(s,e){return Kn(s,"POST","/v1/accounts:update",e)}/**
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
 */async function Yw(s,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const r=yt(s),u={idToken:await r.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},h=await ua(r,Gw(r.auth,u));r.displayName=h.displayName||null,r.photoURL=h.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(h)}function Fw(s,e,i,r){return yt(s).onIdTokenChanged(e,i,r)}function Kw(s,e,i){return yt(s).beforeAuthStateChanged(e,i)}function Ny(s,e,i,r){return yt(s).onAuthStateChanged(e,i,r)}function Iy(s){return yt(s).signOut()}const Io="__sak";/**
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
 */class Dy{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xw=1e3,Qw=10;class My extends Dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ey(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);hw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Qw):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const Ww=My;/**
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
 */class xy extends Dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}xy.type="SESSION";const ky=xy;/**
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
 */function $w(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new Ko(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:u}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,u)),p=await $w(d);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ko.receivers=[];/**
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
 */function Rh(s="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class Zw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,p)=>{const g=Rh("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(v){const R=v;if(R.data.eventId===g)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(R.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function mn(){return window}function Jw(s){mn().location.href=s}/**
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
 */function Ly(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function eA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tA(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function nA(){return Ly()?self:null}/**
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
 */const Uy="firebaseLocalStorageDb",iA=1,Do="firebaseLocalStorage",zy="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Xo(s,e){return s.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function sA(){const s=indexedDB.deleteDatabase(Uy);return new Fr(s).toPromise()}function Qf(){const s=indexedDB.open(Uy,iA);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Do,{keyPath:zy})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await sA(),e(await Qf()))})})}async function A_(s,e,i){const r=Xo(s,!0).put({[zy]:e,value:i});return new Fr(r).toPromise()}async function aA(s,e){const i=Xo(s,!1).get(e),r=await new Fr(i).toPromise();return r===void 0?null:r.value}function R_(s,e){const i=Xo(s,!0).delete(e);return new Fr(i).toPromise()}const rA=800,lA=3;class jy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qf(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>lA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ko._getInstance(nA()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await eA(),!this.activeServiceWorker)return;this.sender=new Zw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qf();return await A_(e,Io,"1"),await R_(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>A_(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>aA(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>R_(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Xo(o,!1).getAll();return new Fr(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jy.type="LOCAL";const oA=jy;new Vr(3e4,6e4);/**
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
 */function cA(s,e){return e?Hn(e):(W(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Oh extends wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ra(e,this._buildIdpRequest())}_linkToIdToken(e,i){return ra(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return ra(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function uA(s){return Ry(s.auth,new Oh(s),s.bypassAuthState)}function fA(s){const{auth:e,user:i}=s;return W(i,e,"internal-error"),Bw(i,new Oh(s),s.bypassAuthState)}async function hA(s){const{auth:e,user:i}=s;return W(i,e,"internal-error"),Hw(i,new Oh(s),s.bypassAuthState)}/**
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
 */class Hy{constructor(e,i,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:i,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uA;case"linkViaPopup":case"linkViaRedirect":return hA;case"reauthViaPopup":case"reauthViaRedirect":return fA;default:tn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dA=new Vr(2e3,1e4);class ta extends Hy{constructor(e,i,r,o,u){super(e,i,o,u),this.provider=r,this.authWindow=null,this.pollId=null,ta.currentPopupAction&&ta.currentPopupAction.cancel(),ta.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ta.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}ta.currentPopupAction=null;/**
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
 */const pA="pendingRedirect",vo=new Map;class mA extends Hy{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(s,e){const i=yA(e),r=vA(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function _A(s,e){vo.set(s._key(),e)}function vA(s){return Hn(s._redirectPersistence)}function yA(s){return _o(pA,s.config.apiKey,s.name)}async function EA(s,e,i=!1){if(hn(s.app))return Promise.reject(Pn(s));const r=ms(s),o=cA(r,e),h=await new mA(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const SA=10*60*1e3;class bA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TA(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!By(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(pn(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SA&&this.cachedEventUids.clear(),this.cachedEventUids.has(O_(e))}saveEventToCache(e){this.cachedEventUids.add(O_(e)),this.lastProcessedEventTime=Date.now()}}function O_(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function By({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TA(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(s);default:return!1}}/**
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
 */async function CA(s,e={}){return Kn(s,"GET","/v1/projects",e)}/**
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
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AA=/^https?/;async function RA(s){if(s.config.emulator)return;const{authorizedDomains:e}=await CA(s);for(const i of e)try{if(OA(i))return}catch{}tn(s,"unauthorized-domain")}function OA(s){const e=Ff(),{protocol:i,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!AA.test(i))return!1;if(wA.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const NA=new Vr(3e4,6e4);function N_(){const s=mn().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function IA(s){return new Promise((e,i)=>{var r,o,u;function h(){N_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{N_(),i(pn(s,"network-request-failed"))},timeout:NA.get()})}if(!((o=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=mn().gapi)===null||u===void 0)&&u.load)h();else{const d=Sw("iframefcb");return mn()[d]=()=>{gapi.load?h():i(pn(s,"network-request-failed"))},by(`${Ew()}?onload=${d}`).catch(p=>i(p))}}).catch(e=>{throw yo=null,e})}let yo=null;function DA(s){return yo=yo||IA(s),yo}/**
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
 */const MA=new Vr(5e3,15e3),xA="__/auth/iframe",kA="emulator/auth/iframe",LA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zA(s){const e=s.config;W(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?bh(e,kA):`https://${s.config.authDomain}/${xA}`,r={apiKey:e.apiKey,appName:s.name,v:_a},o=UA.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${i}?${ga(r).slice(1)}`}async function jA(s){const e=await DA(s),i=mn().gapi;return W(i,s,"internal-error"),e.open({where:document.body,url:zA(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LA,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=pn(s,"network-request-failed"),d=mn().setTimeout(()=>{u(h)},MA.get());function p(){mn().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{u(h)})}))}/**
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
 */const HA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,PA=600,qA="_blank",VA="http://localhost";class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GA(s,e,i,r=BA,o=PA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},HA),{width:r.toString(),height:o.toString(),top:u,left:h}),g=ht().toLowerCase();i&&(d=my(g)?qA:i),dy(g)&&(e=e||VA,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[x,U])=>`${R}${x}=${U},`,"");if(fw(g)&&d!=="_self")return YA(e||"",d),new I_(null);const v=window.open(e||"",d,E);W(v,s,"popup-blocked");try{v.focus()}catch{}return new I_(v)}function YA(s,e){const i=document.createElement("a");i.href=s,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const FA="__/auth/handler",KA="emulator/auth/handler",XA=encodeURIComponent("fac");async function D_(s,e,i,r,o,u){W(s.config.authDomain,s,"auth-domain-config-required"),W(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:_a,eventId:o};if(e instanceof wy){e.setDefaultLanguage(s.languageCode),h.providerId=e.providerId||"",Bf(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,v]of Object.entries({}))h[E]=v}if(e instanceof Yr){const E=e.getScopes().filter(v=>v!=="");E.length>0&&(h.scopes=E.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await s._getAppCheckToken(),g=p?`#${XA}=${encodeURIComponent(p)}`:"";return`${QA(s)}?${ga(d).slice(1)}${g}`}function QA({config:s}){return s.emulator?bh(s,KA):`https://${s.authDomain}/${FA}`}/**
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
 */const Af="webStorageSupport";class WA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ky,this._completeRedirectFn=EA,this._overrideRedirectResult=_A}async _openPopup(e,i,r,o){var u;Gn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await D_(e,i,r,Ff(),o);return GA(e,h,Rh())}async _openRedirect(e,i,r,o){await this._originValidation(e);const u=await D_(e,i,r,Ff(),o);return Jw(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(Gn(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await jA(e),r=new bA(e);return i.register("authEvent",o=>(W(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Af,{type:Af},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Af];h!==void 0&&i(!!h),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=RA(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Ey()||py()||Ch()}}const $A=WA;var M_="@firebase/auth",x_="1.8.1";/**
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
 */class ZA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eR(s){gn(new en("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=r.options;W(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sy(s)},g=new _w(r,o,u,p);return Rw(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),gn(new en("auth-internal",e=>{const i=ms(e.getProvider("auth").getImmediate());return(r=>new ZA(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(M_,x_,JA(s)),Gt(M_,x_,"esm2017")}/**
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
 */const tR=5*60,nR=Yv("authIdTokenMaxAge")||tR;let k_=null;const iR=s=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>nR)return;const o=i==null?void 0:i.token;k_!==o&&(k_=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sR(s=yh()){const e=ps(s,"auth");if(e.isInitialized())return e.getImmediate();const i=Aw(s,{popupRedirectResolver:$A,persistence:[oA,Ww,ky]}),r=Yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=iR(u.toString());Kw(i,h,()=>h(i.currentUser)),Fw(i,d=>h(d))}}const o=Vv("auth");return o&&Ow(i,`http://${o}`),i}function aR(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}vw({loadJS(s){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const u=pn("internal-error");u.customData=o,i(u)},r.type="text/javascript",r.charset="UTF-8",aR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eR("Browser");var L_={};const U_="@firebase/database",z_="1.0.10";/**
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
 */let Py="";function rR(s){Py=s}/**
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
 */class lR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:Lr(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const qy=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lR(e)}}catch{}return new oR},ns=qy("localStorage"),cR=qy("sessionStorage");/**
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
 */const la=new Yo("@firebase/database"),uR=function(){let s=1;return function(){return s++}}(),Vy=function(s){const e=x1(s),i=new O1;i.update(e);const r=i.digest();return ph.encodeByteArray(r)},Kr=function(...s){let e="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Kr.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Or=null,j_=!0;const fR=function(s,e){z(!e,"Can't turn on custom loggers persistently."),la.logLevel=Se.VERBOSE,Or=la.log.bind(la)},rt=function(...s){if(j_===!0&&(j_=!1,Or===null&&cR.get("logging_enabled")===!0&&fR()),Or){const e=Kr.apply(null,s);Or(e)}},Xr=function(s){return function(...e){rt(s,...e)}},Wf=function(...s){const e="FIREBASE INTERNAL ERROR: "+Kr(...s);la.error(e)},Yn=function(...s){const e=`FIREBASE FATAL ERROR: ${Kr(...s)}`;throw la.error(e),new Error(e)},Ot=function(...s){const e="FIREBASE WARNING: "+Kr(...s);la.warn(e)},hR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gy=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},dR=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},fa="[MIN_NAME]",rs="[MAX_NAME]",ya=function(s,e){if(s===e)return 0;if(s===fa||e===rs)return-1;if(e===fa||s===rs)return 1;{const i=H_(s),r=H_(e);return i!==null?r!==null?i-r===0?s.length-e.length:i-r:-1:r!==null?1:s<e?-1:1}},pR=function(s,e){return s===e?0:s<e?-1:1},Sr=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+nt(e))},Nh=function(s){if(typeof s!="object"||s===null)return nt(s);const e=[];for(const r in s)e.push(r);e.sort();let i="{";for(let r=0;r<e.length;r++)r!==0&&(i+=","),i+=nt(e[r]),i+=":",i+=Nh(s[e[r]]);return i+="}",i},Yy=function(s,e){const i=s.length;if(i<=e)return[s];const r=[];for(let o=0;o<i;o+=e)o+e>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+e));return r};function Yt(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const Fy=function(s){z(!Gy(s),"Invalid JSON number");const e=11,i=52,r=(1<<e-1)-1;let o,u,h,d,p;s===0?(u=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),r),u=d+r,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(u=0,h=Math.round(s/Math.pow(2,1-r-i))));const g=[];for(p=i;p;p-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(o?1:0),g.reverse();const E=g.join("");let v="";for(p=0;p<64;p+=8){let R=parseInt(E.substr(p,8),2).toString(16);R.length===1&&(R="0"+R),v=v+R}return v.toLowerCase()},mR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},_R=new RegExp("^-?(0*)\\d{1,10}$"),vR=-2147483648,yR=2147483647,H_=function(s){if(_R.test(s)){const e=Number(s);if(e>=vR&&e<=yR)return e}return null},Qr=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw Ot("Exception was thrown by user callback.",i),e},Math.floor(0))}},ER=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nr=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class SR{constructor(e,i){this.appName_=e,this.appCheckProvider=i,this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bR{constructor(e,i,r){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eo.OWNER="owner";/**
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
 */const Ih="5",Ky="v",Xy="s",Qy="r",Wy="f",$y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zy="ls",Jy="p",$f="ac",e0="websocket",t0="long_polling";/**
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
 */class n0{constructor(e,i,r,o,u=!1,h="",d=!1,p=!1){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function TR(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function i0(s,e,i){z(typeof e=="string","typeof type must == string"),z(typeof i=="object","typeof params must == object");let r;if(e===e0)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===t0)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TR(s)&&(i.ns=s.namespace);const o=[];return Yt(i,(u,h)=>{o.push(u+"="+h)}),r+o.join("&")}/**
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
 */class CR{constructor(){this.counters_={}}incrementCounter(e,i=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return h1(this.counters_)}}/**
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
 */const Rf={},Of={};function Dh(s){const e=s.toString();return Rf[e]||(Rf[e]=new CR),Rf[e]}function wR(s,e){const i=s.toString();return Of[i]||(Of[i]=e()),Of[i]}/**
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
 */class AR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Qr(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const B_="start",RR="close",OR="pLPCommand",NR="pRTLPCB",s0="id",a0="pw",r0="ser",IR="cb",DR="seg",MR="ts",xR="d",kR="dframe",l0=1870,o0=30,LR=l0-o0,UR=25e3,zR=3e4;class na{constructor(e,i,r,o,u,h,d){this.connId=e,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xr(e),this.stats_=Dh(i),this.urlFn=p=>(this.appCheckToken&&(p[$f]=this.appCheckToken),i0(i,t0,p))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new AR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zR)),dR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mh((...u)=>{const[h,d,p,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===B_)this.id=d,this.password=p;else if(h===RR)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,d]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[B_]="t",r[r0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[IR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ky]=Ih,this.transportSessionId&&(r[Xy]=this.transportSessionId),this.lastSessionId&&(r[Zy]=this.lastSessionId),this.applicationId&&(r[Jy]=this.applicationId),this.appCheckToken&&(r[$f]=this.appCheckToken),typeof location<"u"&&location.hostname&&$y.test(location.hostname)&&(r[Qy]=Wy);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){na.forceAllow_=!0}static forceDisallow(){na.forceDisallow_=!0}static isAvailable(){return na.forceAllow_?!0:!na.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mR()&&!gR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=nt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Pv(i),o=Yy(r,LR);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[kR]="t",r[s0]=e,r[a0]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=nt(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Mh{constructor(e,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uR(),window[OR+this.uniqueCallbackIdentifier]=e,window[NR+this.uniqueCallbackIdentifier]=i,this.myIFrame=Mh.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){rt("frame writing exception"),d.stack&&rt(d.stack),rt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[s0]=this.myID,e[a0]=this.myPW,e[r0]=this.currentSerial;let i=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o0+r.length<=l0;){const h=this.pendingSegs.shift();r=r+"&"+DR+o+"="+h.seg+"&"+MR+o+"="+h.ts+"&"+xR+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,r){this.pendingSegs.push({seg:e,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(UR)),u=()=>{clearTimeout(o),r()};this.addTag(e,u)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const jR=16384,HR=45e3;let Mo=null;typeof MozWebSocket<"u"?Mo=MozWebSocket:typeof WebSocket<"u"&&(Mo=WebSocket);class $t{constructor(e,i,r,o,u,h,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xr(this.connId),this.stats_=Dh(i),this.connURL=$t.connectionURL_(i,h,d,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,r,o,u){const h={};return h[Ky]=Ih,typeof location<"u"&&location.hostname&&$y.test(location.hostname)&&(h[Qy]=Wy),i&&(h[Xy]=i),r&&(h[Zy]=r),o&&(h[$f]=o),u&&(h[Jy]=u),i0(e,e0,h)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ns.set("previous_websocket_failure",!0);try{let r;Xv(),this.mySock=new Mo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Mo!==null&&!$t.forceDisallow_}static previouslyFailed(){return ns.isInMemoryStorage||ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=Lr(i);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const i=nt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Yy(i,jR);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HR))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Hr{static get ALL_TRANSPORTS(){return[na,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=$t&&$t.isAvailable();let r=i&&!$t.previouslyFailed();if(e.webSocketOnly&&(i||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const o=this.transports_=[];for(const u of Hr.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Hr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hr.globalTransportInitialized_=!1;/**
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
 */const BR=6e4,PR=5e3,qR=10*1024,VR=100*1024,Nf="t",P_="d",GR="s",q_="r",YR="e",V_="o",G_="a",Y_="n",F_="p",FR="h";class KR{constructor(e,i,r,o,u,h,d,p,g,E){this.id=e,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xr("c:"+this.id+":"),this.transportManager_=new Hr(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Nr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nf in e){const i=e[Nf];i===G_?this.upgradeIfSecondaryHealthy_():i===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===V_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=Sr("t",e),r=Sr("d",e);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:F_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:G_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Y_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=Sr("t",e),r=Sr("d",e);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=Sr(Nf,e);if(P_ in e){const r=e[P_];if(i===FR){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Y_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===GR?this.onConnectionShutdown_(r):i===q_?this.onReset_(r):i===YR?Wf("Server Error: "+r):i===V_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wf("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Ih!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),Nr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:F_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class c0{put(e,i,r,o){}merge(e,i,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,r){}onDisconnectMerge(e,i,r){}onDisconnectCancel(e,i){}reportStats(e){}}/**
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
 */class u0{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(e,i,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:r});const o=this.getInitialEvent(e);o&&i.apply(r,o)}off(e,i,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(e){z(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
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
 */class xo extends u0{static getInstance(){return new xo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_h()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const K_=32,X_=768;class Ne{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function be(){return new Ne("")}function he(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ni(s){return s.pieces_.length-s.pieceNum_}function Oe(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Ne(s.pieces_,e)}function f0(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function XR(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function h0(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function d0(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new Ne(e,0)}function Ze(s,e){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(e instanceof Ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Ne(i,0)}function ce(s){return s.pieceNum_>=s.pieces_.length}function Vt(s,e){const i=he(s),r=he(e);if(i===null)return e;if(i===r)return Vt(Oe(s),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function p0(s,e){if(Ni(s)!==Ni(e))return!1;for(let i=s.pieceNum_,r=e.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==e.pieces_[r])return!1;return!0}function Zt(s,e){let i=s.pieceNum_,r=e.pieceNum_;if(Ni(s)>Ni(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[r])return!1;++i,++r}return!0}class QR{constructor(e,i){this.errorPrefix_=i,this.parts_=h0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Go(this.parts_[r]);m0(this)}}function WR(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Go(e),m0(s)}function $R(s){const e=s.parts_.pop();s.byteLength_-=Go(e),s.parts_.length>0&&(s.byteLength_-=1)}function m0(s){if(s.byteLength_>X_)throw new Error(s.errorPrefix_+"has a key path longer than "+X_+" bytes ("+s.byteLength_+").");if(s.parts_.length>K_)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K_+") or object contains a cycle "+ts(s))}function ts(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class xh extends u0{static getInstance(){return new xh}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const br=1e3,ZR=60*5*1e3,Q_=30*1e3,JR=1.3,eO=3e4,tO="server_kill",W_=3;class qn extends c0{constructor(e,i,r,o,u,h,d,p){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=qn.nextPersistentConnectionId_++,this.log_=Xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=br,this.maxReconnectDelay_=ZR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Xv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,r){const o=++this.requestNumber_,u={r:o,a:e,b:i};this.log_(nt(u)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const i=new gh,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(e,i,r,o){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:e,tag:r};this.listens.get(h).set(u,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(e){const i=e.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},h="q";e.tag&&(u.q=i._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,d=>{const p=d.d,g=d.s;qn.warnOnListenWarnings_(p,i),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&Fn(e,"w")){const r=ca(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||R1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Q_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=A1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const u=o.s,h=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,r=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(e,i){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,i)}sendUnlisten_(e,i,r,o){this.log_("Unlisten on "+e+" for "+i);const u={p:e},h="n";o&&(u.q=r,u.t=o),this.sendRequest(h,u)}onDisconnectPut(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:r})}onDisconnectMerge(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:r})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,r,o){const u={p:i,d:r};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,i,r,o){this.putInternal("p",e,i,r,o)}merge(e,i,r,o){this.putInternal("m",e,i,r,o)}putInternal(e,i,r,o,u){this.initConnection_();const h={p:i,d:r};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,r,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const i=e.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):Wf("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eO&&(this.reconnectDelay_=br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+qn.nextConnectionId_++,u=this.lastSessionId;let h=!1,d=null;const p=function(){d?d.close():(h=!0,r())},g=function(v){z(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,R]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=R&&R.token,d=new KR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,r,x=>{Ot(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(tO)},u))}catch(v){this.log_("Failed to get token: "+v),h||(this.repoInfo_.nodeAdmin&&Ot(v),p())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bf(this.interruptReasons_)&&(this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let r;i?r=i.map(u=>Nh(u)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const r=new Ne(e).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,i){rt("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=W_&&(this.reconnectDelay_=Q_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){rt("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=W_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+Py.replace(/\./g,"-")]=1,_h()?e["framework.cordova"]=1:Kv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return Bf(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
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
 */class de{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new de(e,i)}}/**
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
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const r=new de(fa,e),o=new de(fa,i);return this.compare(r,o)!==0}minPost(){return de.MIN}}/**
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
 */let po;class g0 extends Qo{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,i){return ya(e.name,i.name)}isDefinedOn(e){throw ma("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return de.MIN}maxPost(){return new de(rs,po)}makePost(e,i){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,po)}toString(){return".key"}}const oa=new g0;/**
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
 */class mo{constructor(e,i,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=i?r(e.key,i):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,i,r,o,u){this.key=e,this.value=i,this.color=r??$e.RED,this.left=o??_t.EMPTY_NODE,this.right=u??_t.EMPTY_NODE}copy(e,i,r,o,u){return new $e(e??this.key,i??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let o=this;const u=r(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,i,r),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let r,o;if(r=this,i(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class nO{copy(e,i,r,o,u){return this}insert(e,i,r){return new $e(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,i=_t.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new _t(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(e,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(e){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(e,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new mo(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new mo(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new nO;/**
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
 */function iO(s,e){return ya(s.name,e.name)}function kh(s,e){return ya(s,e)}/**
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
 */let Zf;function sO(s){Zf=s}const _0=function(s){return typeof s=="number"?"number:"+Fy(s):"string:"+s},v0=function(s){if(s.isLeafNode()){const e=s.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else z(s===Zf||s.isEmpty(),"priority of unexpected type.");z(s===Zf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $_;class We{static set __childrenNodeConstructor(e){$_=e}static get __childrenNodeConstructor(){return $_}constructor(e,i=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),v0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:he(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const r=he(e);return r===null?i:i.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||Ni(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_0(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=Fy(this.value_):e+=this.value_,this.lazyHash_=Vy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,r=typeof this.value_,o=We.VALUE_TYPE_ORDER.indexOf(i),u=We.VALUE_TYPE_ORDER.indexOf(r);return z(o>=0,"Unknown leaf type: "+i),z(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let y0,E0;function aO(s){y0=s}function rO(s){E0=s}class lO extends Qo{compare(e,i){const r=e.node.getPriority(),o=i.node.getPriority(),u=r.compareTo(o);return u===0?ya(e.name,i.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return de.MIN}maxPost(){return new de(rs,new We("[PRIORITY-POST]",E0))}makePost(e,i){const r=y0(e);return new de(i,new We("[PRIORITY-POST]",r))}toString(){return".priority"}}const ot=new lO;/**
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
 */const oO=Math.log(2);class cO{constructor(e){const i=u=>parseInt(Math.log(u)/oO,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ko=function(s,e,i,r){s.sort(e);const o=function(p,g){const E=g-p;let v,R;if(E===0)return null;if(E===1)return v=s[p],R=i?i(v):v,new $e(R,v.node,$e.BLACK,null,null);{const x=parseInt(E/2,10)+p,U=o(p,x),V=o(x+1,g);return v=s[x],R=i?i(v):v,new $e(R,v.node,$e.BLACK,U,V)}},u=function(p){let g=null,E=null,v=s.length;const R=function(U,V){const j=v-U,le=v;v-=U;const te=o(j+1,le),se=s[j],De=i?i(se):se;x(new $e(De,se.node,V,null,te))},x=function(U){g?(g.left=U,g=U):(E=U,g=U)};for(let U=0;U<p.count;++U){const V=p.nextBitIsOne(),j=Math.pow(2,p.count-(U+1));V?R(j,$e.BLACK):(R(j,$e.BLACK),R(j,$e.RED))}return E},h=new cO(s.length),d=u(h);return new _t(r||e,d)};/**
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
 */let If;const ea={};class Bn{static get Default(){return z(ea&&ot,"ChildrenNode.ts has not been loaded"),If=If||new Bn({".priority":ea},{".priority":ot}),If}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=ca(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof _t?i:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,i){z(e!==oa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=i.getIterator(de.Wrap);let h=u.getNext();for(;h;)o=o||e.isDefinedOn(h.node),r.push(h),h=u.getNext();let d;o?d=ko(r,e.getCompare()):d=ea;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const E=Object.assign({},this.indexes_);return E[p]=d,new Bn(E,g)}addToIndexes(e,i){const r=wo(this.indexes_,(o,u)=>{const h=ca(this.indexSet_,u);if(z(h,"Missing index implementation for "+u),o===ea)if(h.isDefinedOn(e.node)){const d=[],p=i.getIterator(de.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),ko(d,h.getCompare())}else return ea;else{const d=i.get(e.name);let p=o;return d&&(p=p.remove(new de(e.name,d))),p.insert(e,e.node)}});return new Bn(r,this.indexSet_)}removeFromIndexes(e,i){const r=wo(this.indexes_,o=>{if(o===ea)return o;{const u=i.get(e.name);return u?o.remove(new de(e.name,u)):o}});return new Bn(r,this.indexSet_)}}/**
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
 */let Tr;class ve{static get EMPTY_NODE(){return Tr||(Tr=new ve(new _t(kh),null,Bn.Default))}constructor(e,i,r){this.children_=e,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&v0(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?Tr:i}}getChild(e){const i=he(e);return i===null?this:this.getImmediateChild(i).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(z(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const r=new de(e,i);let o,u;i.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,i),u=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?Tr:this.priorityNode_;return new ve(o,h,u)}}updateChild(e,i){const r=he(e);if(r===null)return i;{z(he(e)!==".priority"||Ni(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Oe(e),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let r=0,o=0,u=!0;if(this.forEachChild(ot,(h,d)=>{i[h]=d.val(e),r++,u&&ve.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!e&&u&&o<2*r){const h=[];for(const d in i)h[d]=i[d];return h}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_0(this.getPriority().val())+":"),this.forEachChild(ot,(i,r)=>{const o=r.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":Vy(e)}return this.lazyHash_}getPredecessorChildName(e,i,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new de(e,i));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new de(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new de(i,this.children_.get(i)):null}forEachChild(e,i){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,de.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wr?-1:0}withIndex(e){if(e===oa||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===oa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(ot),o=i.getIterator(ot);let u=r.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=r.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===oa?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uO extends ve{constructor(){super(new _t(kh),ve.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const Wr=new uO;Object.defineProperties(de,{MIN:{value:new de(fa,ve.EMPTY_NODE)},MAX:{value:new de(rs,Wr)}});g0.__EMPTY_NODE=ve.EMPTY_NODE;We.__childrenNodeConstructor=ve;sO(Wr);rO(Wr);/**
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
 */const fO=!0;function lt(s,e=null){if(s===null)return ve.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new We(i,lt(e))}if(!(s instanceof Array)&&fO){const i=[];let r=!1;if(Yt(s,(h,d)=>{if(h.substring(0,1)!=="."){const p=lt(d);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),i.push(new de(h,p)))}}),i.length===0)return ve.EMPTY_NODE;const u=ko(i,iO,h=>h.name,kh);if(r){const h=ko(i,ot.getCompare());return new ve(u,lt(e),new Bn({".priority":h},{".priority":ot}))}else return new ve(u,lt(e),Bn.Default)}else{let i=ve.EMPTY_NODE;return Yt(s,(r,o)=>{if(Fn(s,r)&&r.substring(0,1)!=="."){const u=lt(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(r,u))}}),i.updatePriority(lt(e))}}aO(lt);/**
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
 */class hO extends Qo{constructor(e){super(),this.indexPath_=e,z(!ce(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const r=this.extractChild(e.node),o=this.extractChild(i.node),u=r.compareTo(o);return u===0?ya(e.name,i.name):u}makePost(e,i){const r=lt(e),o=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new de(i,o)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,Wr);return new de(rs,e)}toString(){return h0(this.indexPath_,0).join("/")}}/**
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
 */class dO extends Qo{compare(e,i){const r=e.node.compareTo(i.node);return r===0?ya(e.name,i.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,i){const r=lt(e);return new de(i,r)}toString(){return".value"}}const pO=new dO;/**
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
 */function mO(s){return{type:"value",snapshotNode:s}}function gO(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function _O(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Z_(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function vO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
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
 */class Lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fa}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ot}copy(){const e=new Lh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J_(s){const e={};if(s.isDefault())return e;let i;if(s.index_===ot?i="$priority":s.index_===pO?i="$value":s.index_===oa?i="$key":(z(s.index_ instanceof hO,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=nt(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";e[r]=nt(s.indexStartValue_),s.startNameSet_&&(e[r]+=","+nt(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";e[r]=nt(s.indexEndValue_),s.endNameSet_&&(e[r]+=","+nt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function ev(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==ot&&(e.i=s.index_.toString()),e}/**
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
 */class Lo extends c0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Xr("p:rest:"),this.listens_={}}listen(e,i,r,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=Lo.getListenId_(e,r),d={};this.listens_[h]=d;const p=J_(e._queryParams);this.restRequest_(u+".json",p,(g,E)=>{let v=E;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,r),ca(this.listens_,h)===d){let R;g?g===401?R="permission_denied":R="rest_error:"+g:R="ok",o(R,null)}})}unlisten(e,i){const r=Lo.getListenId_(e,i);delete this.listens_[r]}get(e){const i=J_(e._queryParams),r=e._path.toString(),o=new gh;return this.restRequest_(r+".json",i,(u,h)=>{let d=h;u===404&&(d=null,u=null),u===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ga(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Lr(d.responseText)}catch{Ot("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,p)}else d.status!==401&&d.status!==404&&Ot("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()})}}/**
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
 */class yO{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
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
 */function Uo(){return{value:null,children:new Map}}function S0(s,e,i){if(ce(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const r=he(e);s.children.has(r)||s.children.set(r,Uo());const o=s.children.get(r);e=Oe(e),S0(o,e,i)}}function Jf(s,e,i){s.value!==null?i(e,s.value):EO(s,(r,o)=>{const u=new Ne(e.toString()+"/"+r);Jf(o,u,i)})}function EO(s,e){s.children.forEach((i,r)=>{e(r,i)})}/**
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
 */class SO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i=Object.assign({},e);return this.last_&&Yt(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=e,i}}/**
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
 */const tv=10*1e3,bO=30*1e3,TO=5*60*1e3;class CO{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new SO(e);const r=tv+(bO-tv)*Math.random();Nr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),i={};let r=!1;Yt(e,(o,u)=>{u>0&&Fn(this.statsToReport_,o)&&(i[o]=u,r=!0)}),r&&this.server_.reportStats(i),Nr(this.reportStats_.bind(this),Math.floor(Math.random()*2*TO))}}/**
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
 */var dn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function b0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function T0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function C0(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class zo{constructor(e,i,r){this.path=e,this.affectedTree=i,this.revert=r,this.type=dn.ACK_USER_WRITE,this.source=b0()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ne(e));return new zo(be(),i,this.revert)}}else return z(he(this.path)===e,"operationForChild called for unrelated child."),new zo(Oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ls{constructor(e,i,r){this.source=e,this.path=i,this.snap=r,this.type=dn.OVERWRITE}operationForChild(e){return ce(this.path)?new ls(this.source,be(),this.snap.getImmediateChild(e)):new ls(this.source,Oe(this.path),this.snap)}}/**
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
 */class Br{constructor(e,i,r){this.source=e,this.path=i,this.children=r,this.type=dn.MERGE}operationForChild(e){if(ce(this.path)){const i=this.children.subtree(new Ne(e));return i.isEmpty()?null:i.value?new ls(this.source,be(),i.value):new Br(this.source,be(),i)}else return z(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Uh{constructor(e,i,r){this.node_=e,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const i=he(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function wO(s,e,i,r){const o=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(vO(h.childName,h.snapshotNode))}),Cr(s,o,"child_removed",e,r,i),Cr(s,o,"child_added",e,r,i),Cr(s,o,"child_moved",u,r,i),Cr(s,o,"child_changed",e,r,i),Cr(s,o,"value",e,r,i),o}function Cr(s,e,i,r,o,u){const h=r.filter(d=>d.type===i);h.sort((d,p)=>RO(s,d,p)),h.forEach(d=>{const p=AO(s,d,u);o.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,s.query_))})})}function AO(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function RO(s,e,i){if(e.childName==null||i.childName==null)throw ma("Should only compare child_ events.");const r=new de(e.childName,e.snapshotNode),o=new de(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function w0(s,e){return{eventCache:s,serverCache:e}}function Ir(s,e,i,r){return w0(new Uh(e,i,r),s.serverCache)}function A0(s,e,i,r){return w0(s.eventCache,new Uh(e,i,r))}function eh(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function os(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Df;const OO=()=>(Df||(Df=new _t(pR)),Df);class Re{static fromObject(e){let i=new Re(null);return Yt(e,(r,o)=>{i=i.set(new Ne(r),o)}),i}constructor(e,i=OO()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:be(),value:this.value};if(ce(e))return null;{const r=he(e),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Oe(e),i);return u!=null?{path:Ze(new Ne(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const i=he(e),r=this.children.get(i);return r!==null?r.subtree(Oe(e)):new Re(null)}}set(e,i){if(ce(e))return new Re(i,this.children);{const r=he(e),u=(this.children.get(r)||new Re(null)).set(Oe(e),i),h=this.children.insert(r,u);return new Re(this.value,h)}}remove(e){if(ce(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const i=he(e),r=this.children.get(i);if(r){const o=r.remove(Oe(e));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new Re(null):new Re(this.value,u)}else return this}}get(e){if(ce(e))return this.value;{const i=he(e),r=this.children.get(i);return r?r.get(Oe(e)):null}}setTree(e,i){if(ce(e))return i;{const r=he(e),u=(this.children.get(r)||new Re(null)).setTree(Oe(e),i);let h;return u.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,u),new Re(this.value,h)}}fold(e){return this.fold_(be(),e)}fold_(e,i){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(Ze(e,o),i)}),i(e,this.value,r)}findOnPath(e,i){return this.findOnPath_(e,be(),i)}findOnPath_(e,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(ce(e))return null;{const u=he(e),h=this.children.get(u);return h?h.findOnPath_(Oe(e),Ze(i,u),r):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,be(),i)}foreachOnPath_(e,i,r){if(ce(e))return this;{this.value&&r(i,this.value);const o=he(e),u=this.children.get(o);return u?u.foreachOnPath_(Oe(e),Ze(i,o),r):new Re(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,i){this.children.inorderTraversal((r,o)=>{o.foreach_(Ze(e,r),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,r)=>{r.value&&e(i,r.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Re(null))}}function Dr(s,e,i){if(ce(e))return new Jt(new Re(i));{const r=s.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let u=r.value;const h=Vt(o,e);return u=u.updateChild(h,i),new Jt(s.writeTree_.set(o,u))}else{const o=new Re(i),u=s.writeTree_.setTree(e,o);return new Jt(u)}}}function nv(s,e,i){let r=s;return Yt(i,(o,u)=>{r=Dr(r,Ze(e,o),u)}),r}function iv(s,e){if(ce(e))return Jt.empty();{const i=s.writeTree_.setTree(e,new Re(null));return new Jt(i)}}function th(s,e){return gs(s,e)!=null}function gs(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(Vt(i.path,e)):null}function sv(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(ot,(r,o)=>{e.push(new de(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new de(r,o.value))}),e}function Oi(s,e){if(ce(e))return s;{const i=gs(s,e);return i!=null?new Jt(new Re(i)):new Jt(s.writeTree_.subtree(e))}}function nh(s){return s.writeTree_.isEmpty()}function ha(s,e){return R0(be(),s.writeTree_,e)}function R0(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let r=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(z(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):i=R0(Ze(s,o),u,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(Ze(s,".priority"),r)),i}}/**
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
 */function O0(s,e){return x0(e,s)}function NO(s,e,i,r,o){z(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=Dr(s.visibleWrites,e,i)),s.lastWriteId=r}function IO(s,e){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===e)return r}return null}function DO(s,e){const i=s.allWrites.findIndex(d=>d.writeId===e);z(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,u=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&MO(d,r.path)?o=!1:Zt(r.path,d.path)&&(u=!0)),h--}if(o){if(u)return xO(s),!0;if(r.snap)s.visibleWrites=iv(s.visibleWrites,r.path);else{const d=r.children;Yt(d,p=>{s.visibleWrites=iv(s.visibleWrites,Ze(r.path,p))})}return!0}else return!1}function MO(s,e){if(s.snap)return Zt(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Zt(Ze(s.path,i),e))return!0;return!1}function xO(s){s.visibleWrites=N0(s.allWrites,kO,be()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function kO(s){return s.visible}function N0(s,e,i){let r=Jt.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const h=u.path;let d;if(u.snap)Zt(i,h)?(d=Vt(i,h),r=Dr(r,d,u.snap)):Zt(h,i)&&(d=Vt(h,i),r=Dr(r,be(),u.snap.getChild(d)));else if(u.children){if(Zt(i,h))d=Vt(i,h),r=nv(r,d,u.children);else if(Zt(h,i))if(d=Vt(h,i),ce(d))r=nv(r,be(),u.children);else{const p=ca(u.children,he(d));if(p){const g=p.getChild(Oe(d));r=Dr(r,be(),g)}}}else throw ma("WriteRecord should have .snap or .children")}}return r}function I0(s,e,i,r,o){if(!r&&!o){const u=gs(s.visibleWrites,e);if(u!=null)return u;{const h=Oi(s.visibleWrites,e);if(nh(h))return i;if(i==null&&!th(h,be()))return null;{const d=i||ve.EMPTY_NODE;return ha(h,d)}}}else{const u=Oi(s.visibleWrites,e);if(!o&&nh(u))return i;if(!o&&i==null&&!th(u,be()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(Zt(g.path,e)||Zt(e,g.path))},d=N0(s.allWrites,h,e),p=i||ve.EMPTY_NODE;return ha(d,p)}}}function LO(s,e,i){let r=ve.EMPTY_NODE;const o=gs(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(ot,(u,h)=>{r=r.updateImmediateChild(u,h)}),r;if(i){const u=Oi(s.visibleWrites,e);return i.forEachChild(ot,(h,d)=>{const p=ha(Oi(u,new Ne(h)),d);r=r.updateImmediateChild(h,p)}),sv(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const u=Oi(s.visibleWrites,e);return sv(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function UO(s,e,i,r,o){z(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=Ze(e,i);if(th(s.visibleWrites,u))return null;{const h=Oi(s.visibleWrites,u);return nh(h)?o.getChild(i):ha(h,o.getChild(i))}}function zO(s,e,i,r){const o=Ze(e,i),u=gs(s.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(i)){const h=Oi(s.visibleWrites,o);return ha(h,r.getNode().getImmediateChild(i))}else return null}function jO(s,e){return gs(s.visibleWrites,e)}function HO(s,e,i,r,o,u,h){let d;const p=Oi(s.visibleWrites,e),g=gs(p,be());if(g!=null)d=g;else if(i!=null)d=ha(p,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const E=[],v=h.getCompare(),R=u?d.getReverseIteratorFrom(r,h):d.getIteratorFrom(r,h);let x=R.getNext();for(;x&&E.length<o;)v(x,r)!==0&&E.push(x),x=R.getNext();return E}else return[]}function BO(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function ih(s,e,i,r){return I0(s.writeTree,s.treePath,e,i,r)}function D0(s,e){return LO(s.writeTree,s.treePath,e)}function av(s,e,i,r){return UO(s.writeTree,s.treePath,e,i,r)}function jo(s,e){return jO(s.writeTree,Ze(s.treePath,e))}function PO(s,e,i,r,o,u){return HO(s.writeTree,s.treePath,e,i,r,o,u)}function zh(s,e,i){return zO(s.writeTree,s.treePath,e,i)}function M0(s,e){return x0(Ze(s.treePath,e),s.writeTree)}function x0(s,e){return{treePath:s,writeTree:e}}/**
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
 */class qO{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,r=e.childName;z(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(r,Z_(r,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(r,_O(r,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(r,gO(r,e.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(r,Z_(r,e.snapshotNode,o.oldSnap));else throw ma("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class VO{getCompleteChild(e){return null}getChildAfterChild(e,i,r){return null}}const k0=new VO;class jh{constructor(e,i,r=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Uh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zh(this.writes_,e,r)}}getChildAfterChild(e,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:os(this.viewCache_),u=PO(this.writes_,o,i,1,r,e);return u.length===0?null:u[0]}}function GO(s,e){z(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function YO(s,e,i,r,o){const u=new qO;let h,d;if(i.type===dn.OVERWRITE){const g=i;g.source.fromUser?h=sh(s,e,g.path,g.snap,r,o,u):(z(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!ce(g.path),h=Ho(s,e,g.path,g.snap,r,o,d,u))}else if(i.type===dn.MERGE){const g=i;g.source.fromUser?h=KO(s,e,g.path,g.children,r,o,u):(z(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),h=ah(s,e,g.path,g.children,r,o,d,u))}else if(i.type===dn.ACK_USER_WRITE){const g=i;g.revert?h=WO(s,e,g.path,r,o,u):h=XO(s,e,g.path,g.affectedTree,r,o,u)}else if(i.type===dn.LISTEN_COMPLETE)h=QO(s,e,i.path,r,u);else throw ma("Unknown operation type: "+i.type);const p=u.getChanges();return FO(e,h,p),{viewCache:h,changes:p}}function FO(s,e,i){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=eh(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&i.push(mO(eh(e)))}}function L0(s,e,i,r,o,u){const h=e.eventCache;if(jo(r,i)!=null)return e;{let d,p;if(ce(i))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=os(e),E=g instanceof ve?g:ve.EMPTY_NODE,v=D0(r,E);d=s.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=ih(r,os(e));d=s.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=he(i);if(g===".priority"){z(Ni(i)===1,"Can't have a priority with additional path components");const E=h.getNode();p=e.serverCache.getNode();const v=av(r,i,E,p);v!=null?d=s.filter.updatePriority(E,v):d=h.getNode()}else{const E=Oe(i);let v;if(h.isCompleteForChild(g)){p=e.serverCache.getNode();const R=av(r,i,h.getNode(),p);R!=null?v=h.getNode().getImmediateChild(g).updateChild(E,R):v=h.getNode().getImmediateChild(g)}else v=zh(r,g,e.serverCache);v!=null?d=s.filter.updateChild(h.getNode(),g,v,E,o,u):d=h.getNode()}}return Ir(e,d,h.isFullyInitialized()||ce(i),s.filter.filtersNodes())}}function Ho(s,e,i,r,o,u,h,d){const p=e.serverCache;let g;const E=h?s.filter:s.filter.getIndexedFilter();if(ce(i))g=E.updateFullNode(p.getNode(),r,null);else if(E.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(i,r);g=E.updateFullNode(p.getNode(),x,null)}else{const x=he(i);if(!p.isCompleteForPath(i)&&Ni(i)>1)return e;const U=Oe(i),j=p.getNode().getImmediateChild(x).updateChild(U,r);x===".priority"?g=E.updatePriority(p.getNode(),j):g=E.updateChild(p.getNode(),x,j,U,k0,null)}const v=A0(e,g,p.isFullyInitialized()||ce(i),E.filtersNodes()),R=new jh(o,v,u);return L0(s,v,i,o,R,d)}function sh(s,e,i,r,o,u,h){const d=e.eventCache;let p,g;const E=new jh(o,e,u);if(ce(i))g=s.filter.updateFullNode(e.eventCache.getNode(),r,h),p=Ir(e,g,!0,s.filter.filtersNodes());else{const v=he(i);if(v===".priority")g=s.filter.updatePriority(e.eventCache.getNode(),r),p=Ir(e,g,d.isFullyInitialized(),d.isFiltered());else{const R=Oe(i),x=d.getNode().getImmediateChild(v);let U;if(ce(R))U=r;else{const V=E.getCompleteChild(v);V!=null?f0(R)===".priority"&&V.getChild(d0(R)).isEmpty()?U=V:U=V.updateChild(R,r):U=ve.EMPTY_NODE}if(x.equals(U))p=e;else{const V=s.filter.updateChild(d.getNode(),v,U,R,E,h);p=Ir(e,V,d.isFullyInitialized(),s.filter.filtersNodes())}}}return p}function rv(s,e){return s.eventCache.isCompleteForChild(e)}function KO(s,e,i,r,o,u,h){let d=e;return r.foreach((p,g)=>{const E=Ze(i,p);rv(e,he(E))&&(d=sh(s,d,E,g,o,u,h))}),r.foreach((p,g)=>{const E=Ze(i,p);rv(e,he(E))||(d=sh(s,d,E,g,o,u,h))}),d}function lv(s,e,i){return i.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function ah(s,e,i,r,o,u,h,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ce(i)?g=r:g=new Re(null).setTree(i,r);const E=e.serverCache.getNode();return g.children.inorderTraversal((v,R)=>{if(E.hasChild(v)){const x=e.serverCache.getNode().getImmediateChild(v),U=lv(s,x,R);p=Ho(s,p,new Ne(v),U,o,u,h,d)}}),g.children.inorderTraversal((v,R)=>{const x=!e.serverCache.isCompleteForChild(v)&&R.value===null;if(!E.hasChild(v)&&!x){const U=e.serverCache.getNode().getImmediateChild(v),V=lv(s,U,R);p=Ho(s,p,new Ne(v),V,o,u,h,d)}}),p}function XO(s,e,i,r,o,u,h){if(jo(o,i)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(ce(i)&&p.isFullyInitialized()||p.isCompleteForPath(i))return Ho(s,e,i,p.getNode().getChild(i),o,u,d,h);if(ce(i)){let g=new Re(null);return p.getNode().forEachChild(oa,(E,v)=>{g=g.set(new Ne(E),v)}),ah(s,e,i,g,o,u,d,h)}else return e}else{let g=new Re(null);return r.foreach((E,v)=>{const R=Ze(i,E);p.isCompleteForPath(R)&&(g=g.set(E,p.getNode().getChild(R)))}),ah(s,e,i,g,o,u,d,h)}}function QO(s,e,i,r,o){const u=e.serverCache,h=A0(e,u.getNode(),u.isFullyInitialized()||ce(i),u.isFiltered());return L0(s,h,i,r,k0,o)}function WO(s,e,i,r,o,u){let h;if(jo(r,i)!=null)return e;{const d=new jh(r,e,o),p=e.eventCache.getNode();let g;if(ce(i)||he(i)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=ih(r,os(e));else{const v=e.serverCache.getNode();z(v instanceof ve,"serverChildren would be complete if leaf node"),E=D0(r,v)}E=E,g=s.filter.updateFullNode(p,E,u)}else{const E=he(i);let v=zh(r,E,e.serverCache);v==null&&e.serverCache.isCompleteForChild(E)&&(v=p.getImmediateChild(E)),v!=null?g=s.filter.updateChild(p,E,v,Oe(i),d,u):e.eventCache.getNode().hasChild(E)?g=s.filter.updateChild(p,E,ve.EMPTY_NODE,Oe(i),d,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=ih(r,os(e)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,u)))}return h=e.serverCache.isFullyInitialized()||jo(r,be())!=null,Ir(e,g,h,s.filter.filtersNodes())}}function $O(s,e){const i=os(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!ce(e)&&!i.getImmediateChild(he(e)).isEmpty())?i.getChild(e):null}function ov(s,e,i,r){e.type===dn.MERGE&&e.source.queryId!==null&&(z(os(s.viewCache_),"We should always have a full cache before handling merges"),z(eh(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=YO(s.processor_,o,e,i,r);return GO(s.processor_,u.viewCache),z(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,ZO(s,u.changes,u.viewCache.eventCache.getNode())}function ZO(s,e,i,r){const o=s.eventRegistrations_;return wO(s.eventGenerator_,e,i,o)}/**
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
 */let cv;function JO(s){z(!cv,"__referenceConstructor has already been defined"),cv=s}function Hh(s,e,i,r){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return z(u!=null,"SyncTree gave us an op for an invalid query."),ov(u,e,i,r)}else{let u=[];for(const h of s.views.values())u=u.concat(ov(h,e,i,r));return u}}function Bh(s,e){let i=null;for(const r of s.views.values())i=i||$O(r,e);return i}/**
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
 */let uv;function eN(s){z(!uv,"__referenceConstructor has already been defined"),uv=s}class fv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=BO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tN(s,e,i,r,o){return NO(s.pendingWriteTree_,e,i,r,o),o?$o(s,new ls(b0(),e,i)):[]}function ia(s,e,i=!1){const r=IO(s.pendingWriteTree_,e);if(DO(s.pendingWriteTree_,e)){let u=new Re(null);return r.snap!=null?u=u.set(be(),!0):Yt(r.children,h=>{u=u.set(new Ne(h),!0)}),$o(s,new zo(r.path,u,i))}else return[]}function Wo(s,e,i){return $o(s,new ls(T0(),e,i))}function nN(s,e,i){const r=Re.fromObject(i);return $o(s,new Br(T0(),e,r))}function iN(s,e,i,r){const o=H0(s,r);if(o!=null){const u=B0(o),h=u.path,d=u.queryId,p=Vt(h,e),g=new ls(C0(d),p,i);return P0(s,h,g)}else return[]}function sN(s,e,i,r){const o=H0(s,r);if(o){const u=B0(o),h=u.path,d=u.queryId,p=Vt(h,e),g=Re.fromObject(i),E=new Br(C0(d),p,g);return P0(s,h,E)}else return[]}function U0(s,e,i){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(h,d)=>{const p=Vt(h,e),g=Bh(d,p);if(g)return g});return I0(o,e,u,i,!0)}function $o(s,e){return z0(e,s.syncPointTree_,null,O0(s.pendingWriteTree_,be()))}function z0(s,e,i,r){if(ce(s.path))return j0(s,e,i,r);{const o=e.get(be());i==null&&o!=null&&(i=Bh(o,be()));let u=[];const h=he(s.path),d=s.operationForChild(h),p=e.children.get(h);if(p&&d){const g=i?i.getImmediateChild(h):null,E=M0(r,h);u=u.concat(z0(d,p,g,E))}return o&&(u=u.concat(Hh(o,s,r,i))),u}}function j0(s,e,i,r){const o=e.get(be());i==null&&o!=null&&(i=Bh(o,be()));let u=[];return e.children.inorderTraversal((h,d)=>{const p=i?i.getImmediateChild(h):null,g=M0(r,h),E=s.operationForChild(h);E&&(u=u.concat(j0(E,d,p,g)))}),o&&(u=u.concat(Hh(o,s,r,i))),u}function H0(s,e){return s.tagToQueryMap.get(e)}function B0(s){const e=s.indexOf("$");return z(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Ne(s.substr(0,e))}}function P0(s,e,i){const r=s.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const o=O0(s.pendingWriteTree_,e);return Hh(r,i,o,null)}/**
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
 */class Ph{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new Ph(i)}node(){return this.node_}}class qh{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=Ze(this.path_,e);return new qh(this.syncTree_,i)}node(){return U0(this.syncTree_,this.path_)}}const aN=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},hv=function(s,e,i){if(!s||typeof s!="object")return s;if(z(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return rN(s[".sv"],e,i);if(typeof s[".sv"]=="object")return lN(s[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},rN=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:z(!1,"Unexpected server value: "+s)}},lN=function(s,e,i){s.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const o=e.node();if(z(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},oN=function(s,e,i,r){return Vh(e,new qh(i,s),r)},cN=function(s,e,i){return Vh(s,new Ph(e),i)};function Vh(s,e,i){const r=s.getPriority().val(),o=hv(r,e.getImmediateChild(".priority"),i);let u;if(s.isLeafNode()){const h=s,d=hv(h.getValue(),e,i);return d!==h.getValue()||o!==h.getPriority().val()?new We(d,lt(o)):s}else{const h=s;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new We(o))),h.forEachChild(ot,(d,p)=>{const g=Vh(p,e.getImmediateChild(d),i);g!==p&&(u=u.updateImmediateChild(d,g))}),u}}/**
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
 */class Gh{constructor(e="",i=null,r={children:{},childCount:0}){this.name=e,this.parent=i,this.node=r}}function Yh(s,e){let i=e instanceof Ne?e:new Ne(e),r=s,o=he(i);for(;o!==null;){const u=ca(r.node.children,o)||{children:{},childCount:0};r=new Gh(o,r,u),i=Oe(i),o=he(i)}return r}function Ea(s){return s.node.value}function q0(s,e){s.node.value=e,rh(s)}function V0(s){return s.node.childCount>0}function uN(s){return Ea(s)===void 0&&!V0(s)}function Zo(s,e){Yt(s.node.children,(i,r)=>{e(new Gh(i,s,r))})}function G0(s,e,i,r){i&&!r&&e(s),Zo(s,o=>{G0(o,e,!0,r)}),i&&r&&e(s)}function fN(s,e,i){let r=s.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $r(s){return new Ne(s.parent===null?s.name:$r(s.parent)+"/"+s.name)}function rh(s){s.parent!==null&&hN(s.parent,s.name,s)}function hN(s,e,i){const r=uN(i),o=Fn(s.node.children,e);r&&o?(delete s.node.children[e],s.node.childCount--,rh(s)):!r&&!o&&(s.node.children[e]=i.node,s.node.childCount++,rh(s))}/**
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
 */const dN=/[\[\].#$\/\u0000-\u001F\u007F]/,pN=/[\[\].#$\u0000-\u001F\u007F]/,Mf=10*1024*1024,Y0=function(s){return typeof s=="string"&&s.length!==0&&!dN.test(s)},mN=function(s){return typeof s=="string"&&s.length!==0&&!pN.test(s)},gN=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),mN(s)},F0=function(s,e,i){const r=i instanceof Ne?new QR(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+ts(r));if(typeof e=="function")throw new Error(s+"contains a function "+ts(r)+" with contents = "+e.toString());if(Gy(e))throw new Error(s+"contains "+e.toString()+" "+ts(r));if(typeof e=="string"&&e.length>Mf/3&&Go(e)>Mf)throw new Error(s+"contains a string greater than "+Mf+" utf8 bytes "+ts(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(Yt(e,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!Y0(h)))throw new Error(s+" contains an invalid key ("+h+") "+ts(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WR(r,h),F0(s,d,r),$R(r)}),o&&u)throw new Error(s+' contains ".value" child '+ts(r)+" in addition to actual children.")}},_N=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Y0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!gN(i))throw new Error(M1(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class vN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yN(s,e){let i=null;for(let r=0;r<e.length;r++){const o=e[r],u=o.getPath();i!==null&&!p0(u,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&s.eventLists_.push(i)}function _s(s,e,i){yN(s,i),EN(s,r=>Zt(r,e)||Zt(e,r))}function EN(s,e){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const u=o.path;e(u)?(SN(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function SN(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const r=i.getEventRunner();Or&&rt("event: "+i.toString()),Qr(r)}}}/**
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
 */const bN="repo_interrupt",TN=25;class CN{constructor(e,i,r,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uo(),this.transactionQueueTree_=new Gh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wN(s,e,i){if(s.stats_=Dh(s.repoInfo_),s.forceRestClient_||ER())s.server_=new Lo(s.repoInfo_,(r,o,u,h)=>{dv(s,r,o,u,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>pv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new qn(s.repoInfo_,e,(r,o,u,h)=>{dv(s,r,o,u,h)},r=>{pv(s,r)},r=>{RN(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=wR(s.repoInfo_,()=>new CO(s.stats_,s.server_)),s.infoData_=new yO,s.infoSyncTree_=new fv({startListening:(r,o,u,h)=>{let d=[];const p=s.infoData_.getNode(r._path);return p.isEmpty()||(d=Wo(s.infoSyncTree_,r._path,p),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),Fh(s,"connected",!1),s.serverSyncTree_=new fv({startListening:(r,o,u,h)=>(s.server_.listen(r,u,o,(d,p)=>{const g=h(d,p);_s(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function AN(s){const i=s.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function K0(s){return aN({timestamp:AN(s)})}function dv(s,e,i,r,o){s.dataUpdateCount++;const u=new Ne(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let h=[];if(o)if(r){const p=wo(i,g=>lt(g));h=sN(s.serverSyncTree_,u,p,o)}else{const p=lt(i);h=iN(s.serverSyncTree_,u,p,o)}else if(r){const p=wo(i,g=>lt(g));h=nN(s.serverSyncTree_,u,p)}else{const p=lt(i);h=Wo(s.serverSyncTree_,u,p)}let d=u;h.length>0&&(d=Xh(s,u)),_s(s.eventQueue_,d,h)}function pv(s,e){Fh(s,"connected",e),e===!1&&NN(s)}function RN(s,e){Yt(e,(i,r)=>{Fh(s,i,r)})}function Fh(s,e,i){const r=new Ne("/.info/"+e),o=lt(i);s.infoData_.updateSnapshot(r,o);const u=Wo(s.infoSyncTree_,r,o);_s(s.eventQueue_,r,u)}function ON(s){return s.nextWriteId_++}function NN(s){X0(s,"onDisconnectEvents");const e=K0(s),i=Uo();Jf(s.onDisconnect_,be(),(o,u)=>{const h=oN(o,u,s.serverSyncTree_,e);S0(i,o,h)});let r=[];Jf(i,be(),(o,u)=>{r=r.concat(Wo(s.serverSyncTree_,o,u));const h=xN(s,o);Xh(s,h)}),s.onDisconnect_=Uo(),_s(s.eventQueue_,be(),r)}function IN(s){s.persistentConnection_&&s.persistentConnection_.interrupt(bN)}function X0(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),rt(i,...e)}function Q0(s,e,i){return U0(s.serverSyncTree_,e,i)||ve.EMPTY_NODE}function Kh(s,e=s.transactionQueueTree_){if(e||Jo(s,e),Ea(e)){const i=$0(s,e);z(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&DN(s,$r(e),i)}else V0(e)&&Zo(e,i=>{Kh(s,i)})}function DN(s,e,i){const r=i.map(g=>g.currentWriteId),o=Q0(s,e,r);let u=o;const h=o.hash();for(let g=0;g<i.length;g++){const E=i[g];z(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const v=Vt(e,E.path);u=u.updateChild(v,E.currentOutputSnapshotRaw)}const d=u.val(!0),p=e;s.server_.put(p.toString(),d,g=>{X0(s,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const v=[];for(let R=0;R<i.length;R++)i[R].status=2,E=E.concat(ia(s.serverSyncTree_,i[R].currentWriteId)),i[R].onComplete&&v.push(()=>i[R].onComplete(null,!0,i[R].currentOutputSnapshotResolved)),i[R].unwatcher();Jo(s,Yh(s.transactionQueueTree_,e)),Kh(s,s.transactionQueueTree_),_s(s.eventQueue_,e,E);for(let R=0;R<v.length;R++)Qr(v[R])}else{if(g==="datastale")for(let v=0;v<i.length;v++)i[v].status===3?i[v].status=4:i[v].status=0;else{Ot("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<i.length;v++)i[v].status=4,i[v].abortReason=g}Xh(s,e)}},h)}function Xh(s,e){const i=W0(s,e),r=$r(i),o=$0(s,i);return MN(s,o,r),r}function MN(s,e,i){if(e.length===0)return;const r=[];let o=[];const h=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Vt(i,p.path);let E=!1,v;if(z(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,v=p.abortReason,o=o.concat(ia(s.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=TN)E=!0,v="maxretry",o=o.concat(ia(s.serverSyncTree_,p.currentWriteId,!0));else{const R=Q0(s,p.path,h);p.currentInputSnapshot=R;const x=e[d].update(R.val());if(x!==void 0){F0("transaction failed: Data returned ",x,p.path);let U=lt(x);typeof x=="object"&&x!=null&&Fn(x,".priority")||(U=U.updatePriority(R.getPriority()));const j=p.currentWriteId,le=K0(s),te=cN(U,R,le);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=te,p.currentWriteId=ON(s),h.splice(h.indexOf(j),1),o=o.concat(tN(s.serverSyncTree_,p.path,te,p.currentWriteId,p.applyLocally)),o=o.concat(ia(s.serverSyncTree_,j,!0))}else E=!0,v="nodata",o=o.concat(ia(s.serverSyncTree_,p.currentWriteId,!0))}_s(s.eventQueue_,i,o),o=[],E&&(e[d].status=2,function(R){setTimeout(R,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(v==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(v),!1,null))))}Jo(s,s.transactionQueueTree_);for(let d=0;d<r.length;d++)Qr(r[d]);Kh(s,s.transactionQueueTree_)}function W0(s,e){let i,r=s.transactionQueueTree_;for(i=he(e);i!==null&&Ea(r)===void 0;)r=Yh(r,i),e=Oe(e),i=he(e);return r}function $0(s,e){const i=[];return Z0(s,e,i),i.sort((r,o)=>r.order-o.order),i}function Z0(s,e,i){const r=Ea(e);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Zo(e,o=>{Z0(s,o,i)})}function Jo(s,e){const i=Ea(e);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,q0(e,i.length>0?i:void 0)}Zo(e,r=>{Jo(s,r)})}function xN(s,e){const i=$r(W0(s,e)),r=Yh(s.transactionQueueTree_,e);return fN(r,o=>{xf(s,o)}),xf(s,r),G0(r,o=>{xf(s,o)}),i}function xf(s,e){const i=Ea(e);if(i){const r=[];let o=[],u=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(z(u===h-1,"All SENT items should be at beginning of queue."),u=h,i[h].status=3,i[h].abortReason="set"):(z(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(ia(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?q0(e,void 0):i.length=u+1,_s(s.eventQueue_,$r(e),o);for(let h=0;h<r.length;h++)Qr(r[h])}}/**
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
 */function kN(s){let e="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function LN(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${i}' in query '${s}'`)}return e}const mv=function(s,e){const i=UN(s),r=i.namespace;i.domain==="firebase.com"&&Yn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&Yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||hR();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new n0(i.host,i.secure,r,o,e,"",r!==i.subdomain),path:new Ne(i.pathString)}},UN=function(s){let e="",i="",r="",o="",u="",h=!0,d="https",p=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let E=s.indexOf("/");E===-1&&(E=s.length);let v=s.indexOf("?");v===-1&&(v=s.length),e=s.substring(0,Math.min(E,v)),E<v&&(o=kN(s.substring(E,v)));const R=LN(s.substring(Math.min(s.length,v)));g=e.indexOf(":"),g>=0?(h=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")i="localhost";else if(x.split(".").length<=2)i=x;else{const U=e.indexOf(".");r=e.substring(0,U).toLowerCase(),i=e.substring(U+1),u=r}"ns"in R&&(u=R.ns)}return{host:e,port:p,domain:i,subdomain:r,secure:h,scheme:d,pathString:o,namespace:u}};/**
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
 */class Qh{constructor(e,i,r,o){this._repo=e,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return ce(this._path)?null:f0(this._path)}get ref(){return new Sa(this._repo,this._path)}get _queryIdentifier(){const e=ev(this._queryParams),i=Nh(e);return i==="{}"?"default":i}get _queryObject(){return ev(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Qh))return!1;const i=this._repo===e._repo,r=p0(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+XR(this._path)}}class Sa extends Qh{constructor(e,i){super(e,i,new Lh,!1)}get parent(){const e=d0(this._path);return e===null?null:new Sa(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JO(Sa);eN(Sa);/**
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
 */const zN="FIREBASE_DATABASE_EMULATOR_HOST",lh={};let jN=!1;function HN(s,e,i,r){s.repoInfo_=new n0(`${e}:${i}`,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0),r&&(s.authTokenProvider_=r)}function BN(s,e,i,r,o){let u=r||s.options.databaseURL;u===void 0&&(s.options.projectId||Yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=mv(u,o),d=h.repoInfo,p;typeof process<"u"&&L_&&(p=L_[zN]),p?(u=`http://${p}?ns=${d.namespace}`,h=mv(u,o),d=h.repoInfo):h.repoInfo.secure;const g=new bR(s.name,s.options,e);_N("Invalid Firebase Database URL",h),ce(h.path)||Yn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=qN(d,s,g,new SR(s.name,i));return new VN(E,s)}function PN(s,e){const i=lh[e];(!i||i[s.key]!==s)&&Yn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),IN(s),delete i[s.key]}function qN(s,e,i,r){let o=lh[e.name];o||(o={},lh[e.name]=o);let u=o[s.toURLString()];return u&&Yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new CN(s,jN,i,r),o[s.toURLString()]=u,u}class VN{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sa(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yn("Cannot call "+e+" on a deleted database.")}}function GN(s=yh(),e){const i=ps(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const r=v1("database");r&&YN(i,...r)}return i}function YN(s,e,i,r={}){s=yt(s),s._checkNotDeleted("useEmulator"),s._instanceStarted&&Yn("Cannot call useEmulator() after instance has already been initialized.");const o=s._repoInternal;let u;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&Yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Eo(Eo.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:y1(r.mockUserToken,s.app.options.projectId);u=new Eo(h)}HN(o,e,i,u)}/**
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
 */function FN(s){rR(_a),gn(new en("database",(e,{instanceIdentifier:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return BN(r,o,u,i)},"PUBLIC").setMultipleInstances(!0)),Gt(U_,z_,s),Gt(U_,z_,"esm2017")}qn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};qn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};FN();const J0="@firebase/installations",Wh="0.6.11";/**
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
 */const eE=1e4,tE=`w:${Wh}`,nE="FIS_v2",KN="https://firebaseinstallations.googleapis.com/v1",XN=60*60*1e3,QN="installations",WN="Installations";/**
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
 */const $N={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ds(QN,WN,$N);function iE(s){return s instanceof _n&&s.code.includes("request-failed")}/**
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
 */function sE({projectId:s}){return`${KN}/projects/${s}/installations`}function aE(s){return{token:s.token,requestStatus:2,expiresIn:JN(s.expiresIn),creationTime:Date.now()}}async function rE(s,e){const r=(await e.json()).error;return cs.create("request-failed",{requestName:s,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lE({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function ZN(s,{refreshToken:e}){const i=lE(s);return i.append("Authorization",eI(e)),i}async function oE(s){const e=await s();return e.status>=500&&e.status<600?s():e}function JN(s){return Number(s.replace("s","000"))}function eI(s){return`${nE} ${s}`}/**
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
 */async function tI({appConfig:s,heartbeatServiceProvider:e},{fid:i}){const r=sE(s),o=lE(s),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:i,authVersion:nE,appId:s.appId,sdkVersion:tE},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await oE(()=>fetch(r,d));if(p.ok){const g=await p.json();return{fid:g.fid||i,registrationStatus:2,refreshToken:g.refreshToken,authToken:aE(g.authToken)}}else throw await rE("Create Installation",p)}/**
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
 */function cE(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */function nI(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iI=/^[cdef][\w-]{21}$/,oh="";function sI(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=aI(s);return iI.test(i)?i:oh}catch{return oh}}function aI(s){return nI(s).substr(0,22)}/**
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
 */function ec(s){return`${s.appName}!${s.appId}`}/**
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
 */const uE=new Map;function fE(s,e){const i=ec(s);hE(i,e),rI(i,e)}function hE(s,e){const i=uE.get(s);if(i)for(const r of i)r(e)}function rI(s,e){const i=lI();i&&i.postMessage({key:s,fid:e}),oI()}let is=null;function lI(){return!is&&"BroadcastChannel"in self&&(is=new BroadcastChannel("[Firebase] FID Change"),is.onmessage=s=>{hE(s.data.key,s.data.fid)}),is}function oI(){uE.size===0&&is&&(is.close(),is=null)}/**
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
 */const cI="firebase-installations-database",uI=1,us="firebase-installations-store";let kf=null;function $h(){return kf||(kf=ey(cI,uI,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(us)}}})),kf}async function Bo(s,e){const i=ec(s),o=(await $h()).transaction(us,"readwrite"),u=o.objectStore(us),h=await u.get(i);return await u.put(e,i),await o.done,(!h||h.fid!==e.fid)&&fE(s,e.fid),e}async function dE(s){const e=ec(s),r=(await $h()).transaction(us,"readwrite");await r.objectStore(us).delete(e),await r.done}async function tc(s,e){const i=ec(s),o=(await $h()).transaction(us,"readwrite"),u=o.objectStore(us),h=await u.get(i),d=e(h);return d===void 0?await u.delete(i):await u.put(d,i),await o.done,d&&(!h||h.fid!==d.fid)&&fE(s,d.fid),d}/**
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
 */async function Zh(s){let e;const i=await tc(s.appConfig,r=>{const o=fI(r),u=hI(s,o);return e=u.registrationPromise,u.installationEntry});return i.fid===oh?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function fI(s){const e=s||{fid:sI(),registrationStatus:0};return pE(e)}function hI(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dI(s,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pI(s)}:{installationEntry:e}}async function dI(s,e){try{const i=await tI(s,e);return Bo(s.appConfig,i)}catch(i){throw iE(i)&&i.customData.serverCode===409?await dE(s.appConfig):await Bo(s.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function pI(s){let e=await gv(s.appConfig);for(;e.registrationStatus===1;)await cE(100),e=await gv(s.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await Zh(s);return r||i}return e}function gv(s){return tc(s,e=>{if(!e)throw cs.create("installation-not-found");return pE(e)})}function pE(s){return mI(s)?{fid:s.fid,registrationStatus:0}:s}function mI(s){return s.registrationStatus===1&&s.registrationTime+eE<Date.now()}/**
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
 */async function gI({appConfig:s,heartbeatServiceProvider:e},i){const r=_I(s,i),o=ZN(s,i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:tE,appId:s.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await oE(()=>fetch(r,d));if(p.ok){const g=await p.json();return aE(g)}else throw await rE("Generate Auth Token",p)}function _I(s,{fid:e}){return`${sE(s)}/${e}/authTokens:generate`}/**
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
 */async function Jh(s,e=!1){let i;const r=await tc(s.appConfig,u=>{if(!mE(u))throw cs.create("not-registered");const h=u.authToken;if(!e&&EI(h))return u;if(h.requestStatus===1)return i=vI(s,e),u;{if(!navigator.onLine)throw cs.create("app-offline");const d=bI(u);return i=yI(s,d),d}});return i?await i:r.authToken}async function vI(s,e){let i=await _v(s.appConfig);for(;i.authToken.requestStatus===1;)await cE(100),i=await _v(s.appConfig);const r=i.authToken;return r.requestStatus===0?Jh(s,e):r}function _v(s){return tc(s,e=>{if(!mE(e))throw cs.create("not-registered");const i=e.authToken;return TI(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yI(s,e){try{const i=await gI(s,e),r=Object.assign(Object.assign({},e),{authToken:i});return await Bo(s.appConfig,r),i}catch(i){if(iE(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await dE(s.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bo(s.appConfig,r)}throw i}}function mE(s){return s!==void 0&&s.registrationStatus===2}function EI(s){return s.requestStatus===2&&!SI(s)}function SI(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+XN}function bI(s){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},s),{authToken:e})}function TI(s){return s.requestStatus===1&&s.requestTime+eE<Date.now()}/**
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
 */async function CI(s){const e=s,{installationEntry:i,registrationPromise:r}=await Zh(e);return r?r.catch(console.error):Jh(e).catch(console.error),i.fid}/**
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
 */async function wI(s,e=!1){const i=s;return await AI(i),(await Jh(i,e)).token}async function AI(s){const{registrationPromise:e}=await Zh(s);e&&await e}/**
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
 */function RI(s){if(!s||!s.options)throw Lf("App Configuration");if(!s.name)throw Lf("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!s.options[i])throw Lf(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function Lf(s){return cs.create("missing-app-config-values",{valueName:s})}/**
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
 */const gE="installations",OI="installations-internal",NI=s=>{const e=s.getProvider("app").getImmediate(),i=RI(e),r=ps(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},II=s=>{const e=s.getProvider("app").getImmediate(),i=ps(e,gE).getImmediate();return{getId:()=>CI(i),getToken:o=>wI(i,o)}};function DI(){gn(new en(gE,NI,"PUBLIC")),gn(new en(OI,II,"PRIVATE"))}DI();Gt(J0,Wh);Gt(J0,Wh,"esm2017");/**
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
 */const Po="analytics",MI="firebase_id",xI="origin",kI=60*1e3,LI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ed="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new Yo("@firebase/analytics");/**
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
 */const UI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ds("analytics","Analytics",UI);/**
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
 */function zI(s){if(!s.startsWith(ed)){const e=Nt.create("invalid-gtag-resource",{gtagURL:s});return vt.warn(e.message),""}return s}function _E(s){return Promise.all(s.map(e=>e.catch(i=>i)))}function jI(s,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,e)),i}function HI(s,e){const i=jI("firebase-js-sdk-policy",{createScriptURL:zI}),r=document.createElement("script"),o=`${ed}?l=${s}&id=${e}`;r.src=i?i==null?void 0:i.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function BI(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function PI(s,e,i,r,o,u){const h=r[o];try{if(h)await e[h];else{const p=(await _E(i)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(d){vt.error(d)}s("config",o,u)}async function qI(s,e,i,r,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await _E(i);for(const p of h){const g=d.find(v=>v.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),s("event",r,o||{})}catch(u){vt.error(u)}}function VI(s,e,i,r){async function o(u,...h){try{if(u==="event"){const[d,p]=h;await qI(s,e,i,d,p)}else if(u==="config"){const[d,p]=h;await PI(s,e,i,r,d,p)}else if(u==="consent"){const[d,p]=h;s("consent",d,p)}else if(u==="get"){const[d,p,g]=h;s("get",d,p,g)}else if(u==="set"){const[d]=h;s("set",d)}else s(u,...h)}catch(d){vt.error(d)}}return o}function GI(s,e,i,r,o){let u=function(...h){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=VI(u,s,e,i),{gtagCore:u,wrappedGtag:window[o]}}function YI(s){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(ed)&&i.src.includes(s))return i;return null}/**
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
 */const FI=30,KI=1e3;class XI{constructor(e={},i=KI){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vE=new XI;function QI(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function WI(s){var e;const{appId:i,apiKey:r}=s,o={method:"GET",headers:QI(r)},u=LI.replace("{app-id}",i),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function $I(s,e=vE,i){const{appId:r,apiKey:o,measurementId:u}=s.options;if(!r)throw Nt.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw Nt.create("no-api-key")}const h=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new eD;return setTimeout(async()=>{d.abort()},kI),yE({appId:r,apiKey:o,measurementId:u},h,d,e)}async function yE(s,{throttleEndTimeMillis:e,backoffCount:i},r,o=vE){var u;const{appId:h,measurementId:d}=s;try{await ZI(r,e)}catch(p){if(d)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await WI(s);return o.deleteThrottleMetadata(h),p}catch(p){const g=p;if(!JI(g)){if(o.deleteThrottleMetadata(h),d)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:d};throw p}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?l_(i,o.intervalMillis,FI):l_(i,o.intervalMillis),v={throttleEndTimeMillis:Date.now()+E,backoffCount:i+1};return o.setThrottleMetadata(h,v),vt.debug(`Calling attemptFetch again in ${E} millis`),yE(s,v,r,o)}}function ZI(s,e){return new Promise((i,r)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(i,o);s.addEventListener(()=>{clearTimeout(u),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JI(s){if(!(s instanceof _n)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class eD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tD(s,e,i,r,o){if(o&&o.global){s("event",i,r);return}else{const u=await e,h=Object.assign(Object.assign({},r),{send_to:u});s("event",i,h)}}/**
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
 */async function nD(){if(Qv())try{await Wv()}catch(s){return vt.warn(Nt.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return vt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iD(s,e,i,r,o,u,h){var d;const p=$I(s);p.then(x=>{i[x.measurementId]=x.appId,s.options.measurementId&&x.measurementId!==s.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>vt.error(x)),e.push(p);const g=nD().then(x=>{if(x)return r.getId()}),[E,v]=await Promise.all([p,g]);YI(u)||HI(u,E.measurementId),o("js",new Date);const R=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return R[xI]="firebase",R.update=!0,v!=null&&(R[MI]=v),o("config",E.measurementId,R),E.measurementId}/**
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
 */class sD{constructor(e){this.app=e}_delete(){return delete Mr[this.app.options.appId],Promise.resolve()}}let Mr={},vv=[];const yv={};let Uf="dataLayer",aD="gtag",Ev,EE,Sv=!1;function rD(){const s=[];if(Fv()&&s.push("This is a browser extension environment."),b1()||s.push("Cookies are not available."),s.length>0){const e=s.map((r,o)=>`(${o+1}) ${r}`).join(" "),i=Nt.create("invalid-analytics-context",{errorInfo:e});vt.warn(i.message)}}function lD(s,e,i){rD();const r=s.options.appId;if(!r)throw Nt.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Mr[r]!=null)throw Nt.create("already-exists",{id:r});if(!Sv){BI(Uf);const{wrappedGtag:u,gtagCore:h}=GI(Mr,vv,yv,Uf,aD);EE=u,Ev=h,Sv=!0}return Mr[r]=iD(s,vv,yv,e,Ev,Uf,i),new sD(s)}function oD(s=yh()){s=yt(s);const e=ps(s,Po);return e.isInitialized()?e.getImmediate():cD(s)}function cD(s,e={}){const i=ps(s,Po);if(i.isInitialized()){const o=i.getImmediate();if(Ur(e,i.getOptions()))return o;throw Nt.create("already-initialized")}return i.initialize({options:e})}function uD(s,e,i,r){s=yt(s),tD(EE,Mr[s.app.options.appId],e,i,r).catch(o=>vt.error(o))}const bv="@firebase/analytics",Tv="0.10.10";function fD(){gn(new en(Po,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return lD(r,o,i)},"PUBLIC")),gn(new en("analytics-internal",s,"PRIVATE")),Gt(bv,Tv),Gt(bv,Tv,"esm2017");function s(e){try{const i=e.getProvider(Po).getImmediate();return{logEvent:(r,o,u)=>uD(i,r,o,u)}}catch(i){throw Nt.create("interop-component-reg-failed",{reason:i})}}}fD();const hD={apiKey:"AIzaSyAuiLOtzOrteTw9fQJx_Suf9ON7n-w5RLE",authDomain:"souvenirisland-29eda.firebaseapp.com",projectId:"souvenirisland-29eda",storageBucket:"souvenirisland-29eda.appspot.com",messagingSenderId:"1009894972082",appId:"1:1009894972082:web:3645d4424a4fe2ce6907ab",measurementId:"G-2QYYMKWX5Q",databaseURL:"https://souvenirisland-29eda-default-rtdb.firebaseio.com/"},td=ty(hD);oD(td);const da=sR(td);GN(td);function dD(){const[s,e]=L.useState(null);L.useEffect(()=>{const r=Ny(da,o=>{e(o)});return()=>r()},[]);const i=async()=>{try{await Iy(da),console.log("Пользователь вышел из аккаунта")}catch(r){console.error("Ошибка выхода:",r.message)}};return w.jsx(Ii,{children:w.jsxs("div",{className:"header",children:[w.jsx(Rt,{to:"/",children:w.jsx("div",{className:"header__logo",children:w.jsxs("h1",{children:["Cувенирный ",w.jsx("br",{}),"островок"]})})}),w.jsx("div",{className:"header__linkList",children:w.jsxs("ol",{children:[w.jsx(Rt,{to:"/",children:w.jsx("li",{children:"Главная"})}),w.jsx(Rt,{to:"/cart",children:w.jsx("li",{children:"Каталог"})}),w.jsx(Rt,{to:"/about",children:w.jsx("li",{children:"О нас"})})]})}),w.jsxs("div",{className:"header__links",children:[w.jsx(Rt,{to:"/cart",children:w.jsx("div",{className:"header__basketIcon",children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30",height:"30",fill:"rgba(122,135,108,1)",children:w.jsx("path",{d:"M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"})})})}),s?w.jsx(Rt,{to:`/user/${s.uid}`,children:w.jsx("div",{className:"header__profile",children:w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(255,254,254,1)",children:[w.jsx("defs",{children:w.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[w.jsx("stop",{offset:"0%",style:{stopColor:"rgb(6, 193, 252)",stopOpacity:1}}),w.jsx("stop",{offset:"33%",style:{stopColor:"rgb(172, 66, 255)",stopOpacity:1}}),w.jsx("stop",{offset:"57%",style:{stopColor:"rgb(255, 0, 214)",stopOpacity:1}}),w.jsx("stop",{offset:"90%",style:{stopColor:"rgb(255, 0, 61)",stopOpacity:1}})]})}),w.jsx("path",{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",fill:"#7a876c"})]})})}):w.jsx(Rt,{to:"/reg",children:w.jsx("div",{className:"header__regbtn",children:"Регистрация"})})]}),w.jsx(c1,{user:s,onLogout:i})]})})}const pD="/assets/1-BF6folfD.png",mD="/assets/2-C6OXDz1B.png";function SE(){return w.jsxs("section",{className:"prom",children:[w.jsx("img",{src:pD,alt:"",className:"prom__img-left"}),w.jsxs("h2",{children:[" Cувенирный ",w.jsx("br",{})," островок"]}),w.jsx("img",{src:mD,alt:"",className:"prom__img-right"})]})}function gD({onSearch:s,onCategorySelect:e}){const[i,r]=L.useState(""),[o,u]=L.useState(""),h=p=>{const g=p.target.value;r(g),s(g)},d=p=>{o===p?(u(""),e("")):(u(p),e(p))};return w.jsxs("section",{className:"search",children:[w.jsx("input",{className:"search__input",type:"text",placeholder:"Поиск товара...",value:i,onChange:h}),w.jsxs("div",{className:"search__btns",children:[w.jsx("div",{className:`search__btn ${o==="Брелки"?"active":""}`,onClick:()=>d("Брелки"),children:"Брелки"}),w.jsx("div",{className:`search__btn ${o==="Подставки"?"active":""}`,onClick:()=>d("Подставки"),children:"Подставки"}),w.jsx("div",{className:`search__btn ${o==="Тарелки"?"active":""}`,onClick:()=>d("Тарелки"),children:"Тарелки"}),w.jsx("div",{className:`search__btn ${o==="Украшения"?"active":""}`,onClick:()=>d("Украшения"),children:"Украшения"})]})]})}function _D({name:s,price:e,image:i,category:r}){const o=()=>{const u={name:s,price:e,image:i,category:r};let h=JSON.parse(localStorage.getItem("cart"))||[];h.push(u),localStorage.setItem("cart",JSON.stringify(h)),alert(`${s} добавлен в корзину`)};return w.jsxs("section",{className:"card col-xxl-4 col-sm-6 col-md-9",children:[w.jsx("div",{className:"card__category",children:r}),w.jsx("img",{src:i,alt:s,className:"card__img"}),w.jsxs("div",{className:"card__textBlock",children:[w.jsx("h1",{children:s}),w.jsxs("div",{className:"card__textP",children:[w.jsxs("div",{className:"card__price",children:[e," ₽"]}),w.jsx("div",{className:"card__buyBtn",onClick:o,children:"Купить"})]})]})]})}const vD="/assets/product1-CxMwCeW0.jpg",yD="/assets/product2-Bn3J_B2B.jpg",ED="/assets/product3-CH02ZqjD.jpg",SD="/assets/product4-BRHVIcJL.jpg",bD="/assets/product5-DNABM6j8.jpg",TD="/assets/product6-CwLimfyF.jpg",CD="/assets/product7-CUkZk8YF.jpg",wD="/assets/product8-ChTDpsk3.jpg",AD="/assets/product9-Dsw5IOBz.jpg",RD="/assets/product10-BNN6Puhw.jpg",OD=[{id:1,name:"Тарелка ручной работы",price:500,image:vD,category:"Тарелки"},{id:2,name:"Подставка из дерева",price:500,image:yD,category:"Подставки"},{id:3,name:"Брелок для ключей",price:500,image:ED,category:"Брелки"},{id:4,name:"Брелки с котятами",price:500,image:SD,category:"Брелки"},{id:5,name:"Тарелка большая",price:500,image:bD,category:"Тарелки"},{id:6,name:"Салфетница",price:500,image:TD,category:"Подставки"},{id:7,name:"Брелок для сумки",price:500,image:CD,category:"Брелки"},{id:8,name:"Тарелка в виде кота",price:500,image:wD,category:"Тарелки"},{id:9,name:"Шпилька для волос",price:500,image:AD,category:"Украшения"},{id:10,name:"Подставка с надписью",price:500,image:RD,category:"Подставки"}];function ND(){const[s,e]=L.useState(""),[i,r]=L.useState(""),o=OD.filter(u=>{const h=u.name.toLowerCase().includes(s.toLowerCase()),d=i?u.category===i:!0;return h&&d});return w.jsx("div",{children:w.jsxs(Ii,{children:[w.jsx(gD,{onSearch:e,onCategorySelect:r}),w.jsx(Rv,{className:"product_list",children:o.map(u=>w.jsx(_D,{name:u.name,price:u.price,image:u.image,category:u.category},u.id))})]})})}function ID(){return w.jsxs(w.Fragment,{children:[w.jsx(SE,{}),w.jsx(ND,{})]})}function DD(){return w.jsx(w.Fragment,{children:w.jsx(Ii,{children:w.jsxs("section",{className:"about",children:[w.jsx("div",{className:"about__title",children:w.jsx("h1",{children:"О нас"})}),w.jsxs("div",{className:"about__text",children:[w.jsx("p",{children:"Добро пожаловать в сувенирный островок, где каждый предмет является уникальным шедевром ручной работы. Мы предлагаем широкий выбор разнообразных сувениров, сделанных с любовью и мастерством наших талантливых ремесленников."}),w.jsx("p",{children:"В нашем ассортименте вы найдете преимущественно деревянные изделия, каждое из которых поражает красотой и оригинальностью исполнения. Мы уделяем особое внимание качеству материалов и деталям, чтобы каждый сувенир стал не просто предметом, а настоящим произведением искусства."}),w.jsx("p",{children:"Мы гордимся тем, что поддерживаем мастеров-ремесленников и поощряем традиции ручной работы. Приобретая сувениры у нас, вы не только приобретаете уникальный предмет, но и поддерживаете искусство и ремесленников."}),w.jsx("p",{children:"Добро пожаловать в сувенирный островок, где каждый предмет обладает историей и душой, и каждая покупка становится маленьким вкладом в сохранение уникальных ремесел."})]}),w.jsxs("section",{className:"about__contacts",children:[w.jsx("div",{className:"about__contactsTitle",children:"Найди нас на карте"}),w.jsx("iframe",{className:"about__contactsMap",src:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa35d09934e9a8b333767ae1bc083654665d8e26456c891a4b61c4c1660d21e8f&source=constructor",width:"100%",height:"296",frameborder:"0"}),w.jsxs("div",{className:"about__contactsUs",children:[w.jsx("div",{className:"about__contactsUsTitle",children:"Наши контакты"}),w.jsxs("div",{className:"about__contactsUsText",children:[w.jsx("p",{children:"Телефон: +79898221412"}),w.jsxs("p",{children:["Мы в телеграмме: ",w.jsx("a",{className:"url",href:"https://t.me/vceuzdereva2022 ",children:" https://t.me/vceuzdereva2022 "})]}),w.jsx("p",{children:"Пролетарская ул., 209, станица Брюховецкая "})]})]})]})]})})})}function MD(){const[s,e]=L.useState([]);L.useEffect(()=>{const r=JSON.parse(localStorage.getItem("cart"))||[];e(r)},[]);const i=r=>{const o=s.filter((u,h)=>h!==r);e(o),localStorage.setItem("cart",JSON.stringify(o))};return w.jsx(w.Fragment,{children:w.jsx("section",{className:"basket",children:w.jsxs(Ii,{children:[w.jsx("h1",{className:"basket__title",children:"Ваша корзина"}),s.length>0?w.jsxs("ul",{children:[s.map((r,o)=>w.jsxs("div",{className:"basket__card",children:[w.jsxs("div",{className:"basket__cardCont",children:[w.jsx("img",{src:r.image,alt:r.name,className:"basket__img"}),w.jsxs("div",{className:"basket__cardText",children:[w.jsx("div",{className:"basket__cardTitle",children:r.name}),w.jsxs("div",{className:"basket__price",children:[r.price," ₽"]})]})]}),w.jsx("button",{onClick:()=>i(o),children:"X"})]},o)),w.jsx("button",{className:"basket__btn",children:"Оформить заказ"})]}):w.jsx("p",{children:"Корзина пуста"})]})})})}function xD(){const[s,e]=L.useState(""),[i,r]=L.useState(""),[o,u]=L.useState(""),[h,d]=L.useState(""),p=Vo(),g=async E=>{E.preventDefault();try{const R=(await qw(da,s,i)).user;await Yw(R,{displayName:o}),console.log("Пользователь создан:",R),p(`/user/${R.uid}`),u(""),e(""),r(""),d("")}catch(v){console.error("Ошибка регистрации:",v.message),d(v.message)}};return w.jsx("section",{className:"reg",children:w.jsxs(Ii,{className:"reg__container",children:[w.jsx("h1",{className:"reg__title",children:"Регистрация"}),w.jsxs("form",{onSubmit:g,className:"reg__form",children:[w.jsx("input",{type:"text",placeholder:"Имя",value:o,onChange:E=>u(E.target.value)}),w.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:E=>e(E.target.value)}),w.jsx("input",{type:"password",placeholder:"Пароль",value:i,onChange:E=>r(E.target.value)}),w.jsx("button",{type:"submit",className:"reg__btn",children:"Зарегистрироваться"}),w.jsxs("div",{className:"reg__underButton",children:["или"," ",w.jsx(Rt,{to:"/log",children:w.jsx("span",{children:"войти"})})," ","если есть аккаунт"]})]}),h&&w.jsx("p",{className:"reg__error",children:h})]})})}function kD(){const[s,e]=L.useState(null),[i,r]=L.useState(""),o=Vo();L.useEffect(()=>{const h=Ny(da,d=>{d?(e(d),r(d.phoneNumber||"Не указан")):o("/log")});return()=>h()},[o]);const u=async()=>{try{await Iy(da),console.log("Пользователь вышел из аккаунта"),o("/log")}catch(h){console.error("Ошибка выхода:",h.message)}};return w.jsx("section",{className:"userProfile",children:w.jsxs(Ii,{children:[w.jsx("h1",{className:"basket__title",children:"Профиль"}),s?w.jsxs("div",{className:"userProfile__info",children:[w.jsxs("div",{className:"userProfile__infoName",children:[" ",w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"23",height:"23",fill:"rgba(255,255,255,1)",children:w.jsx("path",{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"})})," ",s.displayName]}),w.jsxs("div",{className:"userProfile__infoName",children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"rgba(254,252,252,1)",children:w.jsx("path",{d:"M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"})})," ",s.email]}),w.jsx("button",{onClick:u,className:"logout-btn",children:"Выйти"})]}):w.jsx("p",{children:"Загрузка..."})]})})}function LD(){const[s,e]=L.useState(""),[i,r]=L.useState(""),[o,u]=L.useState(""),h=Vo(),d=async p=>{p.preventDefault();try{const g=await Vw(da,s,i);console.log("Пользователь вошел в систему:",g.user),h(`/user/${g.user.uid}`),e(""),r(""),u("")}catch(g){console.error("Ошибка входа:",g.message),u(g.message)}};return w.jsx("section",{className:"reg",children:w.jsxs(Ii,{className:"reg__container",children:[w.jsx("h1",{className:"reg__title",children:"Вход в аккаунт"}),w.jsxs("form",{onSubmit:d,className:"reg__form",children:[w.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:p=>e(p.target.value)}),w.jsx("input",{type:"password",placeholder:"Пароль",value:i,onChange:p=>r(p.target.value)}),w.jsx("button",{className:"reg__btn",type:"submit",children:"Войти"}),w.jsxs("div",{className:"reg__underButton",children:["или"," ",w.jsx(Rt,{to:"/reg",children:w.jsx("span",{children:"зарегистрироваться"})})," ","если нет аккаунта"]})]}),o&&w.jsx("p",{className:"reg__error",children:o})]})})}function UD(){const s=qr();return w.jsxs(w.Fragment,{children:[w.jsx(dD,{}),w.jsxs(ZT,{location:s,children:[w.jsx(yi,{path:"/",element:w.jsx(ID,{})}),w.jsx(yi,{path:"/prom",element:w.jsx(SE,{})}),w.jsx(yi,{path:"/about",element:w.jsx(DD,{})}),w.jsx(yi,{path:"/cart",element:w.jsx(MD,{})}),w.jsx(yi,{path:"/reg",element:w.jsx(xD,{})}),w.jsx(yi,{path:"/log",element:w.jsx(LD,{})}),w.jsx(yi,{path:"/user/:userId",element:w.jsx(kD,{})})]},s.pathname)]})}nT.createRoot(document.getElementById("root")).render(w.jsx(a1,{children:w.jsx(UD,{})}));
