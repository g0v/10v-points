var Ke=Object.defineProperty;var Je=(r,e,n)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var fe=(r,e,n)=>(Je(r,typeof e!="symbol"?e+"":e,n),n);import{n as ue,s as qe,S as We,i as He,a as Fe,e as I,c as Ge,b as V,g as F,t as j,d as G,f as T,h as D,j as Ye,k as xe,o as _e,l as Me,m as Xe,p as Ze,q as de,r as K,u as Qe,v as et,w as tt,x as q,y as Q,z,A as B,B as Ae}from"./chunks/index-94e3cdb6.js";const x=[];function we(r,e=ue){let n;const i=new Set;function a(s){if(qe(r,s)&&(r=s,n)){const c=!x.length;for(const l of i)l[1](),x.push(l,r);if(c){for(let l=0;l<x.length;l+=2)x[l][0](x[l+1]);x.length=0}}}function u(s){a(s(r))}function t(s,c=ue){const l=[s,c];return i.add(l),i.size===1&&(n=e(a)||ue),s(r),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:a,update:u,subscribe:t}}class ne{constructor(e,n){fe(this,"name","HttpError");fe(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Oe{constructor(e,n){this.status=e,this.location=n}}function nt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function rt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Pe="",ze="";function st(r){Pe=r.base,ze=r.assets||Pe}function Ie(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function me(){return{x:pageXOffset,y:pageYOffset}}function je(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Te(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ne(r){const e=we(r);let n=!0;function i(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function u(t){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&t(s=c)})}return{notify:i,set:a,subscribe:u}}function it(){const{set:r,subscribe:e}=we(!1);let n;async function i(){clearTimeout(n);const a=await fetch(`${ze}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:u}=await a.json(),t=u!=="1660900234420";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:i}}function ot(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const ge=window.fetch;function ct(r,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${ot(e.body)}"]`);const a=document.querySelector(i);if(a&&a.textContent){const{body:u,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(u,t))}return ge(r,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ft(r){const e=[],n=[];let i=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,s)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),n.push(c[2]),"(?:/(.*))?";const l=t===s.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,L)=>{if(L%2){const U=lt.exec(m);if(!U)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=U;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return l&&m.includes(".")&&(i=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function ut(r,e,n,i){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],s=n[u],c=r[u+1]||"";if(s){const l=i[s];if(!l)throw new Error(`Missing "${s}" param matcher`);if(!l(c))return}a[t]=c}return a}function dt(r,e,n){return Object.entries(e).map(([i,[a,u,t,s]])=>{const{pattern:c,names:l,types:m}=ft(i),L={id:i,exec:U=>{const E=c.exec(U);if(E)return ut(E,l,m,n)},errors:a.map(U=>r[U]),layouts:u.map(U=>r[U]),leaf:r[t],uses_server_data:!!s};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L})}function pt(r,e){return new ne(r,e)}function ht(r){let e,n,i;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,s){e&&z(e,t,s),V(t,n,s),i=!0},p(t,s){const c={};if(s&2&&(c.data=t[1]),s&16&&(c.errors=t[4]),a!==(a=t[0][0])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,i;var a=r[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[bt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,s){e&&z(e,t,s),V(t,n,s),i=!0},p(t,s){const c={};if(s&2&&(c.data=t[1]),s&1053&&(c.$$scope={dirty:s,ctx:t}),a!==(a=t[0][0])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,i;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,s){e&&z(e,t,s),V(t,n,s),i=!0},p(t,s){const c={};if(s&4&&(c.data=t[2]),s&16&&(c.errors=t[4]),a!==(a=t[0][1])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,i;var a=r[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[wt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,s){e&&z(e,t,s),V(t,n,s),i=!0},p(t,s){const c={};if(s&4&&(c.data=t[2]),s&1033&&(c.$$scope={dirty:s,ctx:t}),a!==(a=t[0][1])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&D(n),e&&B(e,t)}}}function wt(r){let e,n,i;var a=r[0][2];function u(t){return{props:{data:t[3]}}}return a&&(e=new a(u(r))),{c(){e&&q(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,s){e&&z(e,t,s),V(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),a!==(a=t[0][2])){if(e){F();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),G()}a?(e=new a(u(t)),q(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&D(n),e&&B(e,t)}}}function bt(r){let e,n,i,a;const u=[gt,mt],t=[];function s(c,l){return c[0][2]?0:1}return e=s(r),n=t[e]=u[e](r),{c(){n.c(),i=I()},l(c){n.l(c),i=I()},m(c,l){t[e].m(c,l),V(c,i,l),a=!0},p(c,l){let m=e;e=s(c),e===m?t[e].p(c,l):(F(),j(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(c,l):(n=t[e]=u[e](c),n.c()),T(n,1),n.m(i.parentNode,i))},i(c){a||(T(n),a=!0)},o(c){j(n),a=!1},d(c){t[e].d(c),c&&D(i)}}}function Ce(r){let e,n=r[6]&&De(r);return{c(){e=Me("div"),n&&n.c(),this.h()},l(i){e=Xe(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Ze(e);n&&n.l(a),a.forEach(D),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(i,a){V(i,e,a),n&&n.m(e,null)},p(i,a){i[6]?n?n.p(i,a):(n=De(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&D(e),n&&n.d()}}}function De(r){let e;return{c(){e=Qe(r[7])},l(n){e=et(n,r[7])},m(n,i){V(n,e,i)},p(n,i){i&128&&tt(e,n[7])},d(n){n&&D(e)}}}function vt(r){let e,n,i,a,u;const t=[_t,ht],s=[];function c(m,L){return m[0][1]?0:1}e=c(r),n=s[e]=t[e](r);let l=r[5]&&Ce(r);return{c(){n.c(),i=Fe(),l&&l.c(),a=I()},l(m){n.l(m),i=Ge(m),l&&l.l(m),a=I()},m(m,L){s[e].m(m,L),V(m,i,L),l&&l.m(m,L),V(m,a,L),u=!0},p(m,[L]){let U=e;e=c(m),e===U?s[e].p(m,L):(F(),j(s[U],1,1,()=>{s[U]=null}),G(),n=s[e],n?n.p(m,L):(n=s[e]=t[e](m),n.c()),T(n,1),n.m(i.parentNode,i)),m[5]?l?l.p(m,L):(l=Ce(m),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i(m){u||(T(n),u=!0)},o(m){j(n),u=!1},d(m){s[e].d(m),m&&D(i),l&&l.d(m),m&&D(a)}}}function yt(r,e,n){let{stores:i}=e,{page:a}=e,{components:u}=e,{data_0:t=null}=e,{data_1:s=null}=e,{data_2:c=null}=e,{errors:l}=e;Ye("__svelte__",i),xe(i.page.notify);let m=!1,L=!1,U=null;return _e(()=>{const E=i.page.subscribe(()=>{m&&(n(6,L=!0),n(7,U=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,i=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,u=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,s=E.data_1),"data_2"in E&&n(3,c=E.data_2),"errors"in E&&n(4,l=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(a)},[u,t,s,c,l,m,L,U,i,a]}class kt extends We{constructor(e){super(),He(this,e,yt,vt,qe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const $t=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Et=function(r){return"/10v-points/"+r},Ve={},H=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=Et(a),a in Ve)return;Ve[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":$t,u||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),u)return new Promise((c,l)=>{s.addEventListener("load",c),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Rt={},re=[()=>H(()=>import("./chunks/0-07ae2d07.js"),["_app/immutable/chunks/0-07ae2d07.js","_app/immutable/components/pages/_layout.svelte-85e59c7a.js","_app/immutable/assets/+layout-bd17d1e8.css","_app/immutable/chunks/index-94e3cdb6.js"]),()=>H(()=>import("./chunks/1-aff220b7.js"),["_app/immutable/chunks/1-aff220b7.js","_app/immutable/components/error.svelte-366f2e5c.js","_app/immutable/chunks/index-94e3cdb6.js","_app/immutable/chunks/stores-5880b10d.js"]),()=>H(()=>import("./chunks/2-57b90fef.js"),["_app/immutable/chunks/2-57b90fef.js","_app/immutable/components/pages/_page.svelte-efbbce76.js","_app/immutable/assets/+page-adea95e3.css","_app/immutable/chunks/index-94e3cdb6.js","_app/immutable/chunks/partners-8f92eea3.js"]),()=>H(()=>import("./chunks/3-40e5e779.js"),["_app/immutable/chunks/3-40e5e779.js","_app/immutable/components/pages/example/one-way/_page.svelte-7d3e061a.js","_app/immutable/chunks/index-94e3cdb6.js"]),()=>H(()=>import("./chunks/4-2cfcb659.js"),["_app/immutable/chunks/4-2cfcb659.js","_app/immutable/components/pages/example/one-way-live/_page.svelte-f1b3e9aa.js","_app/immutable/chunks/index-94e3cdb6.js"]),()=>H(()=>import("./chunks/5-ba366323.js"),["_app/immutable/chunks/5-ba366323.js","_app/immutable/components/pages/example/round-trip/_page.svelte-9b75981e.js","_app/immutable/chunks/index-94e3cdb6.js"]),()=>H(()=>import("./chunks/6-bf248610.js"),["_app/immutable/chunks/6-bf248610.js","_app/immutable/components/pages/partner/_partner_/_page.svelte-f03c802f.js","_app/immutable/chunks/index-94e3cdb6.js","_app/immutable/chunks/stores-5880b10d.js","_app/immutable/chunks/partners-8f92eea3.js"])],Lt={"":[[1],[0],2],"example/one-way":[[1],[0],3],"example/one-way-live":[[1],[0],4],"example/round-trip":[[1],[0],5],"partner/[partner]":[[1],[0],6]},Be="sveltekit:scroll",W="sveltekit:index",pe=dt(re,Lt,Rt),St=re[0](),Ut=re[1]();let Z={};try{Z=JSON.parse(sessionStorage[Be])}catch{}function he(r){Z[r]=me()}function At({target:r,base:e,trailing_slash:n}){var Le;const i=[],a={url:Ne({}),page:Ne({}),navigating:we(null),updated:it()},u={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let s={branch:[],error:null,session_id:0,url:null},c=!1,l=!0,m=!1,L=1,U=null,E,J=!0,O=(Le=history.state)==null?void 0:Le[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ae=Z[O];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let se=!1,ie,be;async function ve(o,{noscroll:h=!1,replaceState:g=!1,keepfocus:f=!1,state:d={}},$){if(typeof o=="string"&&(o=new URL(o,Ie(document))),J)return ce({url:o,scroll:h?me():null,keepfocus:f,redirect_chain:$,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(o)}async function ye(o){const h=Re(o);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return u.promise=Ee(h),u.id=h.id,u.promise}async function ke(o,h,g,f){var b,A,S;const d=Re(o),$=be={};let _=d&&await Ee(d);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await te({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await M(o),!1;if(o=(d==null?void 0:d.url)||o,be!==$)return!1;if(i.length=0,_.type==="redirect")if(h.length>10||h.includes(o.pathname))_=await te({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?ve(new URL(_.location,o).href,{},[...h,o.pathname]):await M(new URL(_.location,location.href)),!1;else((A=(b=_.props)==null?void 0:b.page)==null?void 0:A.status)>=400&&await a.updated.check()&&await M(o);if(m=!0,g&&g.details){const{details:R}=g,v=R.replaceState?0:1;R.state[W]=O+=v,history[R.replaceState?"replaceState":"pushState"](R.state,"",o)}if(c?(s=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):$e(_),g){const{scroll:R,keepfocus:v}=g;if(!v){const w=document.body,p=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),p!==null?w.setAttribute("tabindex",p):w.removeAttribute("tabindex")}if(await Ae(),l){const w=o.hash&&document.getElementById(o.hash.slice(1));R?scrollTo(R.x,R.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ae();u.promise=null,u.id=null,l=!0,_.props.page&&(ie=_.props.page);const k=_.state.branch.at(-1);J=((S=k==null?void 0:k.node.shared)==null?void 0:S.router)!==!1,f&&f(),m=!1}function $e(o){s=o.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),ie=o.props.page,E=new kt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(f=>f(g))}c=!0}async function ee({url:o,params:h,branch:g,status:f,error:d,routeId:$,validation_errors:_}){const k=g.filter(Boolean),b={type:"loaded",state:{url:o,params:h,branch:g,error:d,session_id:L},props:{components:k.map(v=>v.node.component),errors:_}};let A={},S=!1;for(let v=0;v<k.length;v+=1)Object.assign(A,k[v].data),s.branch.some(w=>w===k[v])||(b.props[`data_${v}`]=k[v].data,S=!0);if(!s.url||o.href!==s.url.href||s.error!==d||S){b.props.page={error:d,params:h,routeId:$,status:f,url:o,data:A};const v=(w,p)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${p}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function oe({node:o,parent:h,url:g,params:f,routeId:d,server_data:$}){var R,v;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function k(...w){for(const p of w){const{href:y}=new URL(p,g);_.dependencies.add(y)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const A={};for(const w in f)Object.defineProperty(A,w,{get(){return _.params.add(w),f[w]},enumerable:!0});const S=new at(g);if((R=o.shared)!=null&&R.load){const w={routeId:d,params:A,data:$,get url(){return _.url=!0,S},async fetch(p,y){let P;typeof p=="string"?P=p:(P=p.url,y={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...y});const N=new URL(P,g).href;return k(N),c?ge(N,y):ct(P,y)},setHeaders:()=>{},depends:k,get parent(){return _.parent=!0,h},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await o.shared.load.call(null,w))!=null?v:null}return{node:o,data:b||$,uses:_}}async function Ee({id:o,url:h,params:g,route:f}){if(u.id===o&&u.promise)return u.promise;const{errors:d,layouts:$,leaf:_}=f,k=s.url&&{url:o!==s.url.pathname+s.url.search,params:Object.keys(g).filter(p=>s.params[p]!==g[p])};[...d,...$,_].forEach(p=>p==null?void 0:p().catch(()=>{}));const b=[...$,_],A=[];for(let p=0;p<b.length;p++)if(!b[p])A.push(!1);else{const y=s.branch[p],P=!y||k.url&&y.uses.url||k.params.some(N=>y.uses.params.has(N))||Array.from(y.uses.dependencies).some(N=>i.some(X=>X(N)))||y.uses.parent&&A.includes(!0);A.push(P)}let S=null;if(f.uses_server_data){try{const p=await ge(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`);if(S=await p.json(),!p.ok)throw S}catch{throw new Error("TODO render fallback error page")}if(S.type==="redirect")return S}const R=S==null?void 0:S.nodes,v=b.map(async(p,y)=>Promise.resolve().then(async()=>{var Y;if(!p)return;const P=await p(),N=s.branch[y];if(A[y]||!N||P!==N.node){const C=R==null?void 0:R[y];if(C!=null&&C.status)throw pt(C.status,C.message);if(C!=null&&C.error)throw C.error;return await oe({node:P,url:h,params:g,routeId:f.id,parent:async()=>{var Ue;const Se={};for(let le=0;le<y;le+=1)Object.assign(Se,(Ue=await v[le])==null?void 0:Ue.data);return Se},server_data:(Y=C==null?void 0:C.data)!=null?Y:null})}else return N}));for(const p of v)p.catch(()=>{});const w=[];for(let p=0;p<b.length;p+=1)if(b[p])try{w.push(await v[p])}catch(y){const P=y;if(P instanceof Oe)return{type:"redirect",location:P.location};const N=y instanceof ne?y.status:500;for(;p--;)if(d[p]){let X,Y=p;for(;!w[Y];)Y-=1;try{return X={node:await d[p](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await ee({url:h,params:g,branch:w.slice(0,Y+1).concat(X),status:N,error:P,routeId:f.id})}catch{continue}}return await te({status:N,error:P,url:h,routeId:f.id})}else w.push(void 0);return await ee({url:h,params:g,branch:w,status:200,error:null,routeId:f.id})}async function te({status:o,error:h,url:g,routeId:f}){const d={},$=await oe({node:await St,url:g,params:d,routeId:f,parent:()=>Promise.resolve({}),server_data:null}),_={node:await Ut,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await ee({url:g,params:d,branch:[$,_],status:o,error:h,routeId:f})}function Re(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const h=decodeURI(o.pathname.slice(e.length)||"/");for(const g of pe){const f=g.exec(h);if(f){const d=new URL(o.origin+nt(o.pathname,n)+o.search+o.hash);return{id:d.pathname+d.search,route:g,params:rt(f),url:d}}}}async function ce({url:o,scroll:h,keepfocus:g,redirect_chain:f,details:d,accepted:$,blocked:_}){const k=s.url;let b=!1;const A={from:k,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(S=>S(A)),b){_();return}he(O),$(),c&&a.navigating.set({from:s.url,to:o}),await ke(o,f,{scroll:h,keepfocus:g,details:d},()=>{const S={from:k,to:o};t.after_navigate.forEach(R=>R(S)),a.navigating.set(null)})}function M(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{_e(()=>(t.after_navigate.push(o),()=>{const h=t.after_navigate.indexOf(o);t.after_navigate.splice(h,1)}))},before_navigate:o=>{_e(()=>(t.before_navigate.push(o),()=>{const h=t.before_navigate.indexOf(o);t.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{(m||!c)&&(l=!1)},goto:(o,h={})=>ve(o,h,[]),invalidate:o=>{if(o===void 0){for(const h of s.branch)h==null||h.uses.dependencies.add("");i.push(()=>!0)}else if(typeof o=="function")i.push(o);else{const{href:h}=new URL(o,location.href);i.push(g=>g===h)}return U||(U=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),U=null})),U},prefetch:async o=>{const h=new URL(o,Ie(document));await ye(h)},prefetch_routes:async o=>{const g=(o?pe.filter(f=>o.some(d=>f.exec(d))):pe).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let d=!1;const $={from:s.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(_=>_($)),d?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(O);try{sessionStorage[Be]=JSON.stringify(Z)}catch{}}});const o=f=>{const d=je(f);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&ye(Te(d))};let h;const g=f=>{clearTimeout(h),h=setTimeout(()=>{var d;(d=f.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!J||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const d=je(f);if(!d||!d.href)return;const $=d instanceof SVGAElement,_=Te(d);if(!$&&!(_.protocol==="https:"||_.protocol==="http:"))return;const k=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||k.includes("external")||d.hasAttribute("sveltekit:reload")||($?d.target.baseVal:d.target))return;const[b,A]=_.href.split("#");if(A!==void 0&&b===location.href.split("#")[0]){se=!0,he(O),a.page.set({...ie,url:_}),a.page.notify();return}ce({url:_,scroll:d.hasAttribute("sveltekit:noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&J){if(f.state[W]===O)return;ce({url:new URL(location.href),scroll:Z[f.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=f.state[W]},blocked:()=>{const d=O-f.state[W];history.go(d)}})}}),addEventListener("hashchange",()=>{se&&(se=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const f of document.querySelectorAll("link"))f.rel==="icon"&&(f.href=f.href);addEventListener("pageshow",f=>{f.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:h,node_ids:g,params:f,routeId:d})=>{const $=new URL(location.href);let _;try{const k=(R,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${R}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=k("server_data",[]),A=k("validation_errors",void 0),S=g.map(async(R,v)=>{var w;return oe({node:await re[R](),url:$,params:f,routeId:d,parent:async()=>{const p={};for(let y=0;y<v;y+=1)Object.assign(p,(await S[y]).data);return p},server_data:(w=b[v])!=null?w:null})});_=await ee({url:$,params:f,branch:await Promise.all(S),status:o,error:h!=null&&h.__is_http_error?new ne(h.status,h.message):h,validation_errors:A,routeId:d})}catch(k){const b=k;if(b instanceof Oe){await M(new URL(k.location,location.href));return}_=await te({status:b instanceof ne?b.status:500,error:b,url:$,routeId:d})}$e(_)}}}function Ot(r){r.client}function jt(r){}async function Tt({paths:r,target:e,route:n,spa:i,trailing_slash:a,hydrate:u}){const t=At({target:e,base:r.base,trailing_slash:a});Ot({client:t}),st(r),u&&await t._hydrate(u),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{jt as set_public_env,Tt as start};
