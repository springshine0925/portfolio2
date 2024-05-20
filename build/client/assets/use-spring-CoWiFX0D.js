import{r as D}from"./jsx-runtime-CbkKSL4Y.js";import{g as $,h as q,i as kt,j as oe,k as ae,l as ce}from"./heading-DPggoKAw.js";const Bt=D.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),le={skipAnimations:!1,useManualTiming:!1},Ft=t=>!!(t&&t.getVelocity),Lt=t=>e=>typeof e=="string"&&e.startsWith(t),xn=Lt("--"),ue=Lt("var(--"),fe=t=>ue(t)&&he.test(t),he=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,N=(t,e,n)=>n>e?e:n<t?t:n,ut={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Gt={...ut,transform:t=>N(0,1,t)},Mn={...ut,default:1},G=t=>Math.round(t*1e5)/1e5,Ut=/(-)?([\d]*\.?[\d])+/g,pe=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,de=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function W(t){return typeof t=="string"}const j=t=>({test:e=>W(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),An=j("deg"),U=j("%"),Tn=j("px"),Fn=j("vh"),Sn=j("vw"),Vn={...U,parse:t=>U.parse(t)/100,transform:t=>U.transform(t*100)},me=(t,e)=>n=>e(t(n)),ft=(...t)=>t.reduce(me);let ot=$;const _t=t=>t*1e3,R=t=>t/1e3,qt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,ge=1e-7,be=12;function ye(t,e,n,s,r){let i,o,a=0;do o=e+(n-e)/2,i=qt(o,s,r)-t,i>0?n=o:e=o;while(Math.abs(i)>ge&&++a<be);return o}function z(t,e,n,s){if(t===e&&n===s)return $;const r=i=>ye(i,0,1,t,n);return i=>i===0||i===1?i:qt(r(i),e,s)}const ve=z(.42,0,1,1),xe=z(0,0,.58,1),Kt=z(.42,0,.58,1),Me=t=>Array.isArray(t)&&typeof t[0]!="number",Wt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,jt=t=>e=>1-t(1-e),ht=t=>1-Math.sin(Math.acos(t)),Ae=jt(ht),Te=Wt(ht),zt=z(.33,1.53,.69,.99),pt=jt(zt),Fe=Wt(pt),Se=t=>(t*=2)<1?.5*pt(t):.5*(2-Math.pow(2,-10*(t-1))),St={linear:$,easeIn:ve,easeInOut:Kt,easeOut:xe,circIn:ht,circInOut:Te,circOut:Ae,backIn:pt,backInOut:Fe,backOut:zt,anticipate:Se},Vt=t=>{if(Array.isArray(t)){ot(t.length===4);const[e,n,s,r]=t;return z(e,n,s,r)}else if(typeof t=="string")return ot(St[t]!==void 0),St[t];return t},Ht=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},Q=(t,e,n)=>t+(e-t)*n;function nt(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ve({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let r=0,i=0,o=0;if(!e)r=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;r=nt(c,a,t+1/3),i=nt(c,a,t),o=nt(c,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:s}}const dt=(t,e)=>n=>!!(W(n)&&de.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Jt=(t,e,n)=>s=>{if(!W(s))return s;const[r,i,o,a]=s.match(Ut);return{[t]:parseFloat(r),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Oe=t=>N(0,255,t),st={...ut,transform:t=>Math.round(Oe(t))},C={test:dt("rgb","red"),parse:Jt("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+st.transform(t)+", "+st.transform(e)+", "+st.transform(n)+", "+G(Gt.transform(s))+")"};function Ie(t){let e="",n="",s="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,s+=s,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const at={test:dt("#"),parse:Ie,transform:C.transform},P={test:dt("hsl","hue"),parse:Jt("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+U.transform(G(e))+", "+U.transform(G(n))+", "+G(Gt.transform(s))+")"},rt=(t,e,n)=>{const s=t*t,r=n*(e*e-s)+s;return r<0?0:Math.sqrt(r)},Ce=[at,C,P],De=t=>Ce.find(e=>e.test(t));function Ot(t){const e=De(t);let n=e.parse(t);return e===P&&(n=Ve(n)),n}const It=(t,e)=>{const n=Ot(t),s=Ot(e),r={...n};return i=>(r.red=rt(n.red,s.red,i),r.green=rt(n.green,s.green,i),r.blue=rt(n.blue,s.blue,i),r.alpha=Q(n.alpha,s.alpha,i),C.transform(r))},K={test:t=>C.test(t)||at.test(t)||P.test(t),parse:t=>C.test(t)?C.parse(t):P.test(t)?P.parse(t):at.parse(t),transform:t=>W(t)?t:t.hasOwnProperty("red")?C.transform(t):P.transform(t)};function we(t){var e,n;return isNaN(t)&&W(t)&&(((e=t.match(Ut))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(pe))===null||n===void 0?void 0:n.length)||0)>0}const Xt="number",Zt="color",Ee="var",Pe="var(",Ct="${}",Dt=/(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;function X(t){const e=t.toString(),n=e.match(Dt)||[],s=[],r={color:[],number:[],var:[]},i=[];for(let c=0;c<n.length;c++){const l=n[c];K.test(l)?(r.color.push(c),i.push(Zt),s.push(K.parse(l))):l.startsWith(Pe)?(r.var.push(c),i.push(Ee),s.push(l)):(r.number.push(c),i.push(Xt),s.push(parseFloat(l)))}const a=e.replace(Dt,Ct).split(Ct);return{values:s,split:a,indexes:r,types:i}}function $t(t){return X(t).values}function Qt(t){const{split:e,types:n}=X(t),s=e.length;return r=>{let i="";for(let o=0;o<s;o++)if(i+=e[o],r[o]!==void 0){const a=n[o];a===Xt?i+=G(r[o]):a===Zt?i+=K.transform(r[o]):i+=r[o]}return i}}const Re=t=>typeof t=="number"?0:t;function Ne(t){const e=$t(t);return Qt(t)(e.map(Re))}const ke={test:we,parse:$t,createTransformer:Qt,getAnimatableNone:Ne};function ct(t,e){return n=>n>0?e:t}function Be(t,e){return n=>Q(t,e,n)}function mt(t){return typeof t=="number"?Be:typeof t=="string"?fe(t)?ct:K.test(t)?It:Ue:Array.isArray(t)?Yt:typeof t=="object"?K.test(t)?It:Le:ct}function Yt(t,e){const n=[...t],s=n.length,r=t.map((i,o)=>mt(i)(i,e[o]));return i=>{for(let o=0;o<s;o++)n[o]=r[o](i);return n}}function Le(t,e){const n={...t,...e},s={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(s[r]=mt(t[r])(t[r],e[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}}function Ge(t,e){var n;const s=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const o=e.types[i],a=t.indexes[o][r[o]],c=(n=t.values[a])!==null&&n!==void 0?n:0;s[i]=c,r[o]++}return s}const Ue=(t,e)=>{const n=ke.createTransformer(e),s=X(t),r=X(e);return s.indexes.var.length===r.indexes.var.length&&s.indexes.color.length===r.indexes.color.length&&s.indexes.number.length>=r.indexes.number.length?ft(Yt(Ge(s,r),r.values),n):ct(t,e)};function te(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Q(t,e,n):mt(t)(t,e)}function _e(t,e,n){const s=[],r=n||te,i=t.length-1;for(let o=0;o<i;o++){let a=r(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]||$:e;a=ft(c,a)}s.push(a)}return s}function qe(t,e,{clamp:n=!0,ease:s,mixer:r}={}){const i=t.length;if(ot(i===e.length),i===1)return()=>e[0];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=_e(e,s,r),a=o.length,c=l=>{let p=0;if(a>1)for(;p<t.length-2&&!(l<t[p+1]);p++);const g=Ht(t[p],t[p+1],l);return o[p](g)};return n?l=>c(N(t[0],t[i-1],l)):c}function Ke(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const r=Ht(0,e,s);t.push(Q(n,1,r))}}function We(t){const e=[0];return Ke(e,t.length-1),e}function je(t,e){return t.map(n=>n*e)}function ze(t,e){return t.map(()=>e||Kt).splice(0,t.length-1)}function Z({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const r=Me(s)?s.map(Vt):Vt(s),i={done:!1,value:e[0]},o=je(n&&n.length===e.length?n:We(e),t),a=qe(o,e,{ease:Array.isArray(r)?r:ze(e,r)});return{calculatedDuration:t,next:c=>(i.value=a(c),i.done=c>=t,i)}}function ee(t,e){return e?t*(1e3/e):0}const He=5;function ne(t,e,n){const s=Math.max(e-He,0);return ee(n-t(s),e-s)}const it=.001,Je=.01,Xe=10,Ze=.05,$e=1;function Qe({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let r,i,o=1-e;o=N(Ze,$e,o),t=N(Je,Xe,R(t)),o<1?(r=l=>{const p=l*o,g=p*t,b=p-n,f=lt(l,o),y=Math.exp(-g);return it-b/f*y},i=l=>{const g=l*o*t,b=g*n+n,f=Math.pow(o,2)*Math.pow(l,2)*t,y=Math.exp(-g),A=lt(Math.pow(l,2),o);return(-r(l)+it>0?-1:1)*((b-f)*y)/A}):(r=l=>{const p=Math.exp(-l*t),g=(l-n)*t+1;return-it+p*g},i=l=>{const p=Math.exp(-l*t),g=(n-l)*(t*t);return p*g});const a=5/t,c=tn(r,i,a);if(t=_t(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*s;return{stiffness:l,damping:o*2*Math.sqrt(s*l),duration:t}}}const Ye=12;function tn(t,e,n){let s=n;for(let r=1;r<Ye;r++)s=s-t(s)/e(s);return s}function lt(t,e){return t*Math.sqrt(1-e*e)}const en=["duration","bounce"],nn=["stiffness","damping","mass"];function wt(t,e){return e.some(n=>t[n]!==void 0)}function sn(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!wt(t,nn)&&wt(t,en)){const n=Qe(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function se({keyframes:t,restDelta:e,restSpeed:n,...s}){const r=t[0],i=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:c,mass:l,duration:p,velocity:g,isResolvedFromDuration:b}=sn({...s,velocity:-R(s.velocity||0)}),f=g||0,y=c/(2*Math.sqrt(a*l)),A=i-r,F=R(Math.sqrt(a/l)),V=Math.abs(A)<5;n||(n=V?.01:2),e||(e=V?.005:.5);let v;if(y<1){const d=lt(F,y);v=T=>{const m=Math.exp(-y*F*T);return i-m*((f+y*F*A)/d*Math.sin(d*T)+A*Math.cos(d*T))}}else if(y===1)v=d=>i-Math.exp(-F*d)*(A+(f+F*A)*d);else{const d=F*Math.sqrt(y*y-1);v=T=>{const m=Math.exp(-y*F*T),O=Math.min(d*T,300);return i-m*((f+y*F*A)*Math.sinh(O)+d*A*Math.cosh(O))/d}}return{calculatedDuration:b&&p||null,next:d=>{const T=v(d);if(b)o.done=d>=p;else{let m=f;d!==0&&(y<1?m=ne(v,d,T):m=0);const O=Math.abs(m)<=n,x=Math.abs(i-T)<=e;o.done=O&&x}return o.value=o.done?i:T,o}}}function Et({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:r=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:c,restDelta:l=.5,restSpeed:p}){const g=t[0],b={done:!1,value:g},f=u=>a!==void 0&&u<a||c!==void 0&&u>c,y=u=>a===void 0?c:c===void 0||Math.abs(a-u)<Math.abs(c-u)?a:c;let A=n*e;const F=g+A,V=o===void 0?F:o(F);V!==F&&(A=V-g);const v=u=>-A*Math.exp(-u/s),d=u=>V+v(u),T=u=>{const M=v(u),w=d(u);b.done=Math.abs(M)<=l,b.value=b.done?V:w};let m,O;const x=u=>{f(b.value)&&(m=u,O=se({keyframes:[b.value,y(b.value)],velocity:ne(d,u,b.value),damping:r,stiffness:i,restDelta:l,restSpeed:p}))};return x(0),{calculatedDuration:null,next:u=>{let M=!1;return!O&&m===void 0&&(M=!0,T(u),x(u)),m!==void 0&&u>m?O.next(u-m):(!M&&T(u),b)}}}let J;function rn(){J=void 0}const _={now:()=>(J===void 0&&_.set(q.isProcessing||le.useManualTiming?q.timestamp:performance.now()),J),set:t=>{J=t,queueMicrotask(rn)}},on=t=>{const e=({timestamp:n})=>t(n);return{start:()=>kt.update(e,!0),stop:()=>oe(e),now:()=>q.isProcessing?q.timestamp:_.now()}},Pt=2e4;function Rt(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<Pt;)e+=n,s=t.next(e);return e>=Pt?1/0:e}const an={decay:Et,inertia:Et,tween:Z,keyframes:Z,spring:se},cn=t=>t/100;function ln({autoplay:t=!0,delay:e=0,driver:n=on,keyframes:s,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",onPlay:c,onStop:l,onComplete:p,onUpdate:g,...b}){let f=1,y=!1,A,F;const V=()=>{F=new Promise(h=>{A=h})};V();let v;const d=an[r]||Z;let T;d!==Z&&typeof s[0]!="number"&&(T=ft(cn,te(s[0],s[1])),s=[0,100]);const m=d({...b,keyframes:s});let O;a==="mirror"&&(O=d({...b,keyframes:[...s].reverse(),velocity:-(b.velocity||0)}));let x="idle",u=null,M=null,w=null;m.calculatedDuration===null&&i&&(m.calculatedDuration=Rt(m));const{calculatedDuration:Y}=m;let k=1/0,E=1/0;Y!==null&&(k=Y+o,E=k*(i+1)-o);let S=0;const tt=h=>{if(M===null)return;f>0&&(M=Math.min(M,h)),f<0&&(M=Math.min(h-E/f,M)),u!==null?S=u:S=Math.round(h-M)*f;const B=S-e*(f>=0?1:-1),xt=f>=0?B<0:B>E;S=Math.max(B,0),x==="finished"&&u===null&&(S=E);let Mt=S,At=m;if(i){const et=Math.min(S,E)/k;let H=Math.floor(et),I=et%1;!I&&et>=1&&(I=1),I===1&&H--,H=Math.min(H,i+1),!!(H%2)&&(a==="reverse"?(I=1-I,o&&(I-=o/k)):a==="mirror"&&(At=O)),Mt=N(0,1,I)*k}const L=xt?{done:!1,value:s[0]}:At.next(Mt);T&&(L.value=T(L.value));let{done:Tt}=L;!xt&&Y!==null&&(Tt=f>=0?S>=E:S<=0);const ie=u===null&&(x==="finished"||x==="running"&&Tt);return g&&g(L.value),ie&&re(),L},gt=()=>{v&&v.stop(),v=void 0},bt=()=>{x="idle",gt(),A(),V(),M=w=null},re=()=>{x="finished",p&&p(),gt(),A()},yt=()=>{if(y)return;v||(v=n(tt));const h=v.now();c&&c(),u!==null?M=h-u:(!M||x==="finished")&&(M=h),x==="finished"&&V(),w=M,u=null,x="running",v.start()};t&&yt();const vt={then(h,B){return F.then(h,B)},get time(){return R(S)},set time(h){h=_t(h),S=h,u!==null||!v||f===0?u=h:M=v.now()-h/f},get duration(){const h=m.calculatedDuration===null?Rt(m):m.calculatedDuration;return R(h)},get speed(){return f},set speed(h){h===f||!v||(f=h,vt.time=R(S))},get state(){return x},play:yt,pause:()=>{x="paused",u=S},stop:()=>{y=!0,x!=="idle"&&(x="idle",l&&l(),bt())},cancel:()=>{w!==null&&tt(w),bt()},complete:()=>{x="finished"},sample:h=>(M=0,tt(h))};return vt}function un(t,e){t.indexOf(e)===-1&&t.push(e)}function fn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class hn{constructor(){this.subscriptions=[]}add(e){return un(this.subscriptions,e),()=>fn(this.subscriptions,e)}notify(e,n,s){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,s);else for(let i=0;i<r;i++){const o=this.subscriptions[i];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nt=30,pn=t=>!isNaN(parseFloat(t));class dn{constructor(e,n={}){this.version="11.0.5",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,r=!0)=>{const i=_.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=pn(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=_.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new hn);const s=this.events[e].add(n);return e==="change"?()=>{s(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=_.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Nt)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Nt);return ee(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mn(t,e){return new dn(t,e)}function gn(t){const e=ae(()=>mn(t)),{isStatic:n}=D.useContext(Bt);if(n){const[,s]=D.useState(t);D.useEffect(()=>e.on("change",s),[])}return e}function On(t,e={}){const{isStatic:n}=D.useContext(Bt),s=D.useRef(null),r=gn(Ft(t)?t.get():t),i=()=>{s.current&&s.current.stop()};return D.useInsertionEffect(()=>r.attach((o,a)=>{if(n)return a(o);const c=s.current;return c&&c.time===0&&c.sample(q.delta),i(),s.current=ln({keyframes:[r.get(),o],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:a}),r.get()},i),[JSON.stringify(e)]),ce(()=>{if(Ft(t))return t.on("change",o=>r.set(parseFloat(o)))},[r]),r}export{fn as A,Ht as B,We as C,Ke as D,le as M,hn as S,Gt as a,Vn as b,Ft as c,An as d,ln as e,_t as f,ke as g,Ut as h,xn as i,K as j,U as k,Fn as l,R as m,ut as n,mn as o,Tn as p,fe as q,ot as r,Mn as s,se as t,On as u,Sn as v,Rt as w,Pt as x,Me as y,Q as z};
