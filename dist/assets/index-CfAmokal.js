var v2=Object.defineProperty;var Q1=n=>{throw TypeError(n)};var x2=(n,e,t)=>e in n?v2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>x2(n,typeof e!="symbol"?e+"":e,t),T1=(n,e,t)=>e.has(n)||Q1("Cannot "+t);var s=(n,e,t)=>(T1(n,e,"read from private field"),t?t.call(n):e.get(n)),a=(n,e,t)=>e.has(n)?Q1("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),w=(n,e,t,i)=>(T1(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),g=(n,e,t)=>(T1(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const H of l.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&i(H)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();const U1=100,I1=(n,e=U1)=>{let t=null;return(...i)=>{window.clearTimeout(t),t=window.setTimeout(()=>n(...i),e)}},y2=(n,e=U1)=>{let t=null;return(...i)=>{t||(t=setTimeout(()=>{n(...i),clearTimeout(t),t=null},e))}};let K=[];const $={emit:(n,e)=>{K.push({name:n,cb:e})},on:({target:n,name:e,props:t,type:i})=>{n.addEventListener(i??"click",y2(()=>{K.filter(r=>r.name===e).forEach(({cb:r})=>r(t??null))}))},off:n=>{K=K.filter(e=>e.name!==n)}},H2="text-golos font-medium transition flex justify-center items-center cursor-pointer",W1={"a-severity":{contrast:["text-white hover:text-black disabled:text-white","bg-black hover:bg-yellow disabled:bg-secondary-800","border-black hover:border-yellow disabled:border-secondary-800"],secondary:["text-black hover:text-white disabled:text-secondary-800","bg-white/50 md:bg-transparent hover:bg-black disabled:bg-transparent","md:border-black hover:border-black disabled:border-secondary-800"],info:["text-blue hover:text-white disabled:text-secondary-800","bg-transparent hover:bg-blue disabled:bg-transparent","border-blue hover:border-blue disabled:border-secondary-800"]},"a-size":{sm:"h-9 rounded-4.5 border-1 leading-120",lg:"h-18 rounded-9 border-2 leading-130 p-5"},"a-icon":{false:"",true:"size-9 rounded-full"},"a-disabled":{false:"",true:"pointer-events-none"}};var t1,I,e1,N,s1;class Y1 extends HTMLButtonElement{constructor(){super();a(this,t1);a(this,I);a(this,e1,()=>{$.on({target:this,type:this.getAttribute("a-type"),name:this.getAttribute("a-name"),props:this.getAttribute("a-props")})});a(this,N,()=>{let t=[];Object.entries(W1).forEach(([i,r])=>{const l=this.getAttribute(i)===""||this.getAttribute(i),[H,p]=Object.entries(r).find(([b])=>b===String(l))||Object.entries(r)[0];p&&[p].flat(1/0).join(" ").split(" ").forEach(b=>t.push(b))}),this.className=[H2,s(this,I),t.join(" ")].join(" ")});a(this,s1,(t,i)=>{t==="a-disabled"&&(i==="true"?this.setAttribute("disabled",""):this.removeAttribute("disabled"))});w(this,t1,Math.random()),w(this,I,this.className),s(this,e1).call(this),s(this,N).call(this)}attributeChangedCallback(t,i,r){s(this,s1).call(this,t,r),s(this,N).call(this)}disconnectedCallback(){$.off(this.getAttribute("a-name"))}}t1=new WeakMap,I=new WeakMap,e1=new WeakMap,N=new WeakMap,s1=new WeakMap,c(Y1,"observedAttributes",Object.keys(W1));customElements.define("a-button",Y1,{extends:"button"});class w2 extends HTMLElement{constructor(){super(),this.classList.add("md:px-18"),this.classList.add("sm:px-8"),this.classList.add("px-5"),this.classList.add("block")}}customElements.define("a-container",w2);class D2 extends HTMLAnchorElement{constructor(){super(),this.classList.add("text-blue"),this.classList.add("decoration-none"),this.classList.add("leading-120"),this.classList.add("text-golos")}}customElements.define("a-link",D2,{extends:"a"});var n1,i1,a1,t2;class V2 extends HTMLElement{constructor(){super();a(this,a1);a(this,n1,()=>{$.emit("participant-goTo",s(this,i1))});a(this,i1,t=>{window.open(t,"_blank")});g(this,a1,t2).call(this),s(this,n1).call(this)}}n1=new WeakMap,i1=new WeakMap,a1=new WeakSet,t2=function(){this.innerHTML=`
<div class="px-4 grid justify-center gap-1">
	<div class="bg-surface rounded-full overflow-hidden">
		<image class="w-full" src="${this.getAttribute("image")??"icons/participant.svg"}">
	</div>
	<div class="h-4"></div>
	<div class="text-center leading-120 text-golos font-semibold text-xl">${this.getAttribute("name")}</div>
	<div class="text-center leading-120 text-golos text-secondary-400">${this.getAttribute("title")}</div>
	<div class="h-2"></div>
	<button
		is="a-button"
		a-severity="info"
		a-size="sm"
		a-name="participant-goTo"
		a-props="${this.getAttribute("href")}"
	>
		Подробнее
	</button>
</div>`};customElements.define("a-participant",V2);const x=()=>'<link href="styles/a-tailwind.css" rel="stylesheet">',y=function(n){!this.shadowRoot&&this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=n};var B,q1,S1;class $2 extends HTMLElement{constructor(){super();a(this,B);g(this,B,S1).call(this),window.addEventListener("resize",I1(g(this,B,S1).bind(this)))}}B=new WeakSet,q1=function(t=!1){return`<div ${t?'aria-hidden="true"':""} class="marquee-items flex justify-start items-center gap-3">`+[...this.children].reduce((i,r)=>`
${i}
<div class="marquee-item">${r.innerHTML}</div>
<div class="marquee-item size-1.5 rounded-1.5 bg-white"></div>
`,"")+"</div>"},S1=function(){y.call(this,`
<div class="marquee py-2.5 flex overflow-hidden gap-3 bg-primary text-white leading-110 text-xs md:text-lg whitespace-nowrap">
	${g(this,B,q1).call(this)}
	${[...Array(+this.getAttribute("copy")).keys()].map(()=>g(this,B,q1).call(this,!0)).join("")}
</div>

${x()}

<style>
.marquee-item {
  transition: all var(--animation-duration) ease-in-out;
}
.marquee-items {
  animation: marquee ${this.getAttribute("duration")}s linear infinite;
}
.marquee:hover .marquee-items {
  animation-play-state: paused;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 100px));
  }
}
</style>`)};customElements.define("a-running-line",$2);const X1=(n=100)=>new Promise((e,t)=>{setTimeout(()=>void e(),n)}),N1=async function(n=[],e=[],t=null){const i=e?[e].flat().map(p=>I1(p.bind(this))):[],r=()=>{i.forEach(p=>{window.removeEventListener("resize",p)})},l={quantity:0,max:10},H=async function(){return l.quantity++,l.quantity>l.max?console.error("Превышено время ожидания компонента: ",this):(t?!t.call(this):!this.querySelector("*"))?(await X1(),await H.call(this)):(n&&[n].flat().forEach(p=>{p.call(this)}),i.forEach(p=>{p.call(this),window.addEventListener("resize",p)}),r)};return await X1(),await H.call(this)},B2=n=>Object.entries(n).reduce((e,[t,i])=>(e[t]=i/16+"rem",e),{}),E2=n=>{if(!n.startsWith("#"))return n;const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)}`:console.error(`don't correct hex color: ${n}`)},M2=n=>Object.entries(n).reduce((e,[t,i])=>(e[t]=E2(i),e),{}),Y={screens:{xs:0,sm:640,md:768,lg:1024,xl:1280},sizes:{quantity:140},grid:{cols:12},font:{bold:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},sizes:B2({xs:16,sm:18,base:20,lg:22,xl:24,"2xl":28,"3xl":36,"4xl":54,"5xl":60}),leadings:{min:50,max:150,step:5}},colors:M2({transparent:"transparent",white:"#ffffff",black:"#313131",red:"#f54932",yellow:"#fbce51",blue:"#3057a2",primary:"#f54932",surface:"#e9ded4","secondary-200":"#585653","secondary-300":"#6f6f6f","secondary-400":"#7b7672","secondary-500":"#838383","secondary-600":"#8b8b8b","secondary-700":"#d0d0d0","secondary-800":"#d5d5d5","secondary-900":"#e9ded4"}),animations:{vars:{"animation-duration":{value:100,measurement:"ms"}},durations:{max:4e3,step:100}},content:["./index.html","./src/main.js","./src/components","./src/templates","./src/composables"],safeList:[...Array(12).keys()].map(n=>[`md:grid-cols-${n+1}`,`grid-cols-${n+1}`,`col-span-${n+1}`,`row-span-${n+1}`]).flat()},j1=(n,e=0)=>{[n].flat().forEach((t,i)=>setTimeout(t,10*i+e))},V={id:"a-id"},O=(n,e,t={})=>{if(!n)return console.error("don't correct target: ",n);const i=n.getAttribute(e);return!i||i===""?t:JSON.parse(n.getAttribute(e)??null)||t},F1=new Map().set("",!0).set("true",!0).set("false",!1).set(null,!1),e2=(n,e)=>{if(!n)return console.error("don't correct target: ",n);const t=n.getAttribute(e);return F1.has(t)?F1.get(t):console.error("don't correct props: ",e)},A2=(n,e,t)=>n?n.getAttribute(e)??t:console.error("don't correct target: ",n),u={props:{},state:{},cbs:{}};var r1,o1;class k2{constructor(){c(this,"props",e=>u.props[e]);c(this,"state",e=>u.state[e]);c(this,"cbs",e=>u.cbs[e]);c(this,"off",e=>{u.cbs[e]=[]});a(this,r1,e=>{u.props[e]=null,u.state[e]=null,u.cbs[e]=[]});a(this,o1,(e,t)=>{u.props[e]={"controls-variant":t.getAttribute("controls-variant")??"dots",infinity:e2(t,"infinity"),"auto-change":+t.getAttribute("auto-change"),slides:O(t,"slides",{xs:1,sm:2,md:3,xl:4})}});c(this,"defineState",(e,t)=>{if(u.props[e].infinity){u.state[e]={slide:{current:0,quantity:t.children.length,min:-1,max:t.children.length},ctx:t};return}u.state[e]={slide:{current:0,quantity:t.children.length,min:0,max:t.children.length-1},ctx:t}})}define(e,t){s(this,r1).call(this,e),s(this,o1).call(this,e,t),this.defineState(e,t)}update(e){u.state[e].disabled={prev:!u.props[e].infinity&&u.state[e].slide.current===u.state[e].slide.min,next:!u.props[e].infinity&&u.state[e].slide.current===u.state[e].slide.max}}}r1=new WeakMap,o1=new WeakMap;const f=new k2,P1=n=>Y.screens[n]===void 0?console.error(`don't correct screen key: ${n}`):document.documentElement.clientWidth>=Y.screens[n],R=n=>Object.entries(n).reduce((e,[t,i])=>P1(t)?i:e,1);var m,d1,k,P,Q,T,l1;class T2{constructor(e,t){a(this,m);a(this,d1);c(this,"updateQuantity",e=>{f.state(s(this,m)).slide.quantity=e,s(this,k).call(this)});a(this,k,()=>{this.state.slide.current<0&&j1(()=>{this.state.slide.current=this.state.slide.quantity+this.state.slide.current,this.on("force-update")}),this.state.slide.current>this.state.slide.quantity-1&&j1(()=>{this.state.slide.current=this.state.slide.current-this.state.slide.quantity,this.on("force-update")})});c(this,"emit",(e,t)=>{f.cbs(s(this,m)).push({name:e,cb:t})});c(this,"on",e=>{f.cbs(s(this,m)).filter(({name:t})=>t===e).forEach(({cb:t})=>t())});c(this,"off",()=>{f.off(s(this,m))});c(this,"prev",()=>{s(this,Q).call(this),this.state.slide.current--,f.update(s(this,m)),s(this,k).call(this)});c(this,"next",()=>{s(this,Q).call(this),s(this,P).call(this)});a(this,P,()=>{this.state.slide.current++,f.update(s(this,m)),s(this,k).call(this)});a(this,Q,()=>{this.props["auto-change"]&&(clearTimeout(this.state.timeout),s(this,T).call(this))});a(this,T,()=>{this.state.timeout=setTimeout(()=>{s(this,P).call(this),this.on("update"),s(this,T).call(this)},1e3*this.props["auto-change"])});a(this,l1,()=>{if(this.props["auto-change"]){if(!this.props.infinity)return console.error("Auto-сhange можно применять только вместе с infinity");s(this,T).call(this)}});w(this,m,e),t&&(w(this,d1,t),f.define(e,t),f.update(e),s(this,l1).call(this,e))}get state(){return f.state(s(this,m))}get props(){return f.props(s(this,m))}get cbs(){return f.cbs(s(this,m))}get cols(){return R(this.props.slides)}}m=new WeakMap,d1=new WeakMap,k=new WeakMap,P=new WeakMap,Q=new WeakMap,T=new WeakMap,l1=new WeakMap;const _1={},s2=(n,e)=>(_1[n]||(_1[n]=new T2(n,e)),_1[n]),n2=n=>typeof n=="function";var L,_,c1,C1,u1,o,E,M,h1,q,i2,p1,a2,z1,U,Z1,r2,o2,m1,S,W,g1,f1;class _2 extends HTMLElement{constructor(){super();a(this,o);a(this,L);a(this,_);a(this,c1,async()=>{s(this,C1).call(this),w(this,_,await N1.call(this,s(this,p1),[s(this,m1),s(this,S)])),s(this,u1).call(this),s(this,W).call(this)});a(this,C1,()=>{w(this,L,s2(this.getAttribute(V.id),this))});a(this,u1,()=>{s(this,L).emit("update",s(this,S)),s(this,L).emit("force-update",s(this,f1))});a(this,h1,(t,i)=>`
<div
	class="child flex flex-col items-center h-full" 
	style="${s(this,o,z1)}"
>
	${t.innerHTML}
</div>`);a(this,q,(t=0)=>s(this,o,E).reduce((i,r,l)=>`
${i}
${s(this,h1).call(this,r,l+t)}`,""));a(this,p1,()=>{y.call(this,`
<div class="overflow-hidden">
	<div id="slider" class="grid flex-start gap-5">
			${s(this,o,i2)}
	</div>
</div>

${x()}`)});a(this,m1,()=>{s(this,L).updateQuantity(s(this,o,M).slider.children.length/3)});a(this,S,()=>{s(this,o,M).slider.setAttribute("style",s(this,o,o2)),s(this,o,M).children.forEach(t=>t.setAttribute("style",s(this,o,z1)))});a(this,W,()=>{s(this,o,M).slider.classList.add("transition")});a(this,g1,()=>{s(this,o,M).slider.classList.remove("transition")});a(this,f1,()=>{j1([s(this,g1),s(this,S),s(this,W)],Y.vars["animation-duration"].value)});s(this,c1).call(this)}disconnectedCallback(){n2(s(this,_))&&s(this,_).call(this)}}L=new WeakMap,_=new WeakMap,c1=new WeakMap,C1=new WeakMap,u1=new WeakMap,o=new WeakSet,E=function(){return[...this.children]},M=function(){return{slider:this.shadowRoot.getElementById("slider"),children:this.shadowRoot.querySelectorAll(".child")}},h1=new WeakMap,q=new WeakMap,i2=function(){return s(this,q).call(this,-s(this,o,E).length)+s(this,q).call(this)+s(this,q).call(this,s(this,o,E).length)},p1=new WeakMap,a2=function(){return s(this,o,E).reduce((t,i)=>Math.max(t,i.clientHeight),0)},z1=function(){return`
min-width: ${s(this,o,U)}px;
max-width: ${s(this,o,U)}px;
min-height: ${s(this,o,a2)}px;`},U=function(){return s(this,o,Z1)/s(this,L).cols-20*(s(this,L).cols-1)/s(this,L).cols},Z1=function(){const t=document.body.querySelector("a-container"),i=getComputedStyle(t)["padding-left"].replace("px","");return t.offsetWidth-2*i},r2=function(){return-s(this,L).state.slide.current*(s(this,o,U)+20)},o2=function(){return`
max-width: ${s(this,o,Z1)}px;
transform: translate(${s(this,o,r2)}px, 0);
grid-template-columns: repeat(${3*s(this,o,E).length}, 1fr);`},m1=new WeakMap,S=new WeakMap,W=new WeakMap,g1=new WeakMap,f1=new WeakMap;customElements.define("a-slider",_2);var d,j,L1,b1,h,A,v1,x1,y1,z,O1,H1,d2,l2,w1,D1,V1,$1,B1,X;class q2 extends HTMLElement{constructor(){super();a(this,h);a(this,d);a(this,j);a(this,L1,async()=>{s(this,b1).call(this),w(this,j,await N1.call(this,s(this,w1),s(this,X),()=>!0)),s(this,v1).call(this)});a(this,b1,()=>{w(this,d,s2(this.getAttribute(V.id)))});a(this,v1,()=>{$.emit(`${this.getAttribute(V.id)}-prev`,s(this,D1)),$.emit(`${this.getAttribute(V.id)}-next`,s(this,V1)),s(this,d).emit("update",s(this,X))});a(this,x1,()=>`
<div class="relative">
	<div class="js__dot hidden">
			<div class="absolute animate-ping size-full rounded-full bg-black/85"></div>
			<div class="absolute size-full rounded-full bg-black"></div>
	</div>
	<div class="size-2.5 rounded-full bg-secondary-800"></div>
</div>`);a(this,y1,()=>`
<div class="flex justify-center items-center gap-1.5 text-golos transition">
	${[...Array(s(this,d).state.slide.quantity).keys()].map(s(this,x1)).join("")}
</div>`);a(this,z,t=>t<0?s(this,z).call(this,t+s(this,d).state.slide.quantity):t>s(this,d).state.slide.quantity-1?s(this,z).call(this,t-s(this,d).state.slide.quantity):t+1);a(this,H1,()=>`
<div class="flex justify-center items-center gap-1 text-golos">
	<span id="decimal-current" class="transition">${s(this,h,O1)}</span>
	<span class="text-secondary-500">/</span>
	<span id='decimal-quantity' class="text-secondary-500">${s(this,d).state.slide.quantity}</span>
</div>`);a(this,w1,()=>{y.call(this,`
<div class="min-h-9 flex justify-center md:justify-end items-center gap-4">
	${s(this,h,l2)}
</div>

${x()}`)});a(this,D1,()=>{s(this,d).prev(),s(this,d).on("update")});a(this,V1,()=>{s(this,d).next(),s(this,d).on("update")});a(this,$1,()=>{s(this,d).props["controls-variant"]==="decimal"&&(s(this,h,A)["decimal-current"].innerHTML=s(this,h,O1),s(this,h,A)["decimal-quantity"].innerHTML=s(this,d).state.slide.quantity)});a(this,B1,()=>{s(this,h,A).dots.forEach((t,i)=>{i===s(this,d).state.slide.current?t.classList.remove("hidden"):t.classList.add("hidden")})});a(this,X,()=>{s(this,h,A).prev.setAttribute("a-disabled",s(this,d).state.disabled.prev),s(this,h,A).next.setAttribute("a-disabled",s(this,d).state.disabled.next),s(this,$1).call(this),s(this,B1).call(this)});s(this,L1).call(this)}disconnectedCallback(){n2(s(this,j))&&s(this,j).call(this),$.off(`${this.getAttribute(V.id)}-prev`),$.off(`${this.getAttribute(V.id)}-next`)}}d=new WeakMap,j=new WeakMap,L1=new WeakMap,b1=new WeakMap,h=new WeakSet,A=function(){return{prev:this.shadowRoot.getElementById("prev"),next:this.shadowRoot.getElementById("next"),"decimal-current":this.shadowRoot.getElementById("decimal-current"),"decimal-quantity":this.shadowRoot.getElementById("decimal-quantity"),dots:this.shadowRoot.querySelectorAll(".js__dot"),"dot-animates":this.shadowRoot.querySelectorAll(".js__dot-animate")}},v1=new WeakMap,x1=new WeakMap,y1=new WeakMap,z=new WeakMap,O1=function(){return s(this,z).call(this,s(this,d).state.slide.current+s(this,d).cols-1)},H1=new WeakMap,d2=function(){return{dots:s(this,y1),decimal:s(this,H1)}[s(this,d).props["controls-variant"]]()??""},l2=function(){return`
<div class="flex items-center gap-4">
	<button
		is="a-button"
		id="prev"
		a-icon
		a-name="${this.getAttribute(V.id)}-prev"
		class="!text-white"
	>
		<a-icon
			a-icon="chevron-right"
			class="size-4 rotate-180"
		></a-icon>
	</button>
	${s(this,h,d2)}
	<button
		is="a-button"
		id="next"
		a-icon
		a-name="${this.getAttribute(V.id)}-next"
		class="!text-white"
	>
		<a-icon
			a-icon="chevron-right"
			class="size-4"
		></a-icon>
	</button>
</div>`},w1=new WeakMap,D1=new WeakMap,V1=new WeakMap,$1=new WeakMap,B1=new WeakMap,X=new WeakMap;customElements.define("a-slider-controls",q2);var E1,c2;class S2 extends HTMLElement{constructor(){super();a(this,E1);g(this,E1,c2).call(this)}}E1=new WeakSet,c2=function(){this.classList.add("flex"),this.classList.add("h-full"),this.classList.add("w-full"),y.call(this,`
<a-surface>
	<div class="flex flex-col items-start gap-7 p-5 max-md:pt-15 h-full">
	${this.innerHTML}
	</div>
</a-surface>

${x()}`)};customElements.define("a-stage-group",S2);var M1,C2;class j2 extends HTMLElement{constructor(){super();a(this,M1);g(this,M1,C2).call(this)}}M1=new WeakSet,C2=function(){y.call(this,`
<div class="flex justify-start items-start gap-4">
	<div>
		<div class="size-9 bg-white rounded-1.5 font-semibold flex justify-center items-center">
			<span>${this.getAttribute("a-idx")||""}</span>
		</div>
	</div>

	<div class="leading-120 font-medium">${this.innerHTML}</div>
</div>

${x()}`)};customElements.define("a-stage",j2);var C,D,u2,h2,R1,p2;class z2 extends HTMLElement{constructor(){super();a(this,C);c(this,"cols",t=>s(this,C,D)[t]?R(O(s(this,C,D)[t],"cols",{xs:1})):{xs:1});c(this,"rows",t=>s(this,C,D)[t]?R(O(s(this,C,D)[t],"rows",{xs:1})):{xs:1});c(this,"stageQuantities",t=>{const i=this.cols(t)===1?0:this.cols(t),r=this.rows(t)===1?0:this.rows(t);return!i&&!r?1:i+r});c(this,"groupClass",t=>`col-span-${this.cols(t)} row-span-${this.rows(t)}`);N1.call(this,null,g(this,C,p2))}}C=new WeakSet,D=function(){return[...this.children]},u2=function(){return R(O(this,"a-cols",12))},h2=function(){return R(O(this,"a-stages-group",1))},R1=function(){let t=`<div class="${this.groupClass(0)}"><a-stage-group>`,i=0;for(let r=0;r<s(this,C,D).length;r++)t+=`
<a-stage a-idx="${r+1}" class="${s(this,C,D)[r].className}">
	${s(this,C,D)[r].innerHTML}
</a-stage>`,i+=this.stageQuantities(r),i+this.stageQuantities(r+1)>s(this,C,h2)&&r!==s(this,C,D).length-1&&(t+=`</a-stage-group></div><div class="${this.groupClass(r+1)}"><a-stage-group>`,i=0);return t+="</a-stage-group></div>",t},p2=function(){y.call(this,`
<div class="max-md:hidden grid grid-cols-${s(this,C,u2)} gap-5">
	${s(this,C,R1)}
</div>

<div class="md:hidden">
	<div class="h-23"></div>
	<div class="grid gap-7">
		<a-slider
		 a-id="stages"
		 slides='{"xs": 1}'
		>
		 ${s(this,C,R1)}
		</a-slider>
		<a-slider-controls
		 a-id="stages"
		></a-slider-controls>
	</div>
</div>

${x()}`)};customElements.define("a-stages",z2);var A1,m2;class Z2 extends HTMLElement{constructor(){super();a(this,A1);g(this,A1,m2).call(this)}}A1=new WeakSet,m2=function(){this.classList.add("flex"),this.classList.add("overflow-hidden"),this.classList.add("w-full"),y.call(this,`
<div class="surface flex w-full h-full">
	<div class="w-full">
		<slot></slot>
	</div>
</div>

${x()}
<style>
.surface {
  position: relative;
	
	background-image: url("images/surface.png");
	background-position: center;
	background-repeat: repeat;
	background-size: auto auto;
	
	&::before {
		position: absolute;
		content: "";
		
		inset: 0;
		background-color: rgb(var(--surface));
		opacity: 0.8;
		z-index: 1;
	}
	
	&  > * {
		position: relative;
		z-index: 2;
	}
}
</style>`)};customElements.define("a-surface",Z2);var v,g2,f2,L2,b2,F;class O2 extends HTMLElement{constructor(){super();a(this,v);a(this,F,()=>{y.call(this,`
<div class="grid md:grid-cols-${s(this,v,b2)}">
	${s(this,v,L2)}
</div>

${x()}`)});s(this,F).call(this),window.addEventListener("resize",I1(s(this,F).bind(this)))}}v=new WeakSet,g2=function(t,i){return P1("md")?t:`<div class="flex justify-start items-center gap-3 py-4 ${i?"border-secondary-800 border-t-2 ":""}">${t}</div>`},f2=function(t,i,r){return[...t.children].reduce((l,H,p)=>{const b=["flex justify-start items-center md:border-secondary-800"];return p||b.push("md:py-4 md:pr-4 text-secondary-300"),p&&b.push("md:p-4 md:border-l-2"),r&&b.push("md:border-t-2"),r||b.push("md:!pt-0"),i-1===r&&b.push("md:!pb-0"),l+`<div class="${b.join(" ")}"><span class="grid"><span>${H.innerHTML}</span></span></div>`},"")},L2=function(){return[...this.children].reduce((t,i,r)=>`${t}${g(this,v,g2).call(this,g(this,v,f2).call(this,i,this.children.length,r),!!r)}`,"")},b2=function(){var t;return((t=[...this.children][0])==null?void 0:t.children.length)??2},F=new WeakMap;customElements.define("a-table",O2);const R2=`<svg viewBox="0 0 246 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.8163 31.9437H20.2534C20.2534 31.9377 20.2506 31.9318 20.2495 31.9261L20.2341 31.8573C20.2242 31.812 20.2135 31.7671 20.2025 31.7226C20.1978 31.7016 20.1926 31.6806 20.1875 31.6597C20.1729 31.6009 20.1575 31.5422 20.1417 31.4834L20.137 31.4666C20.1196 31.4029 20.1014 31.3396 20.0825 31.2765L20.0635 31.2155C20.0505 31.172 20.0367 31.129 20.0241 31.086C20.0166 31.0624 20.0087 31.0392 20.0012 31.016C19.9874 30.9744 19.9731 30.9329 19.9585 30.8917C19.951 30.87 19.9431 30.8479 19.9356 30.8266C19.9172 30.775 19.8983 30.7237 19.8788 30.6728C19.8745 30.6619 19.8709 30.6515 19.8666 30.6406C19.8437 30.5807 19.8196 30.5212 19.7951 30.4617C19.7864 30.44 19.7773 30.4187 19.7683 30.3974C19.7517 30.3599 19.7351 30.3188 19.7181 30.2798L19.6862 30.2076C19.6696 30.1702 19.6526 30.1328 19.6352 30.0953C19.6246 30.0721 19.6135 30.0486 19.6025 30.0254C19.5823 29.9823 19.563 29.9397 19.5405 29.8974C19.5322 29.8813 19.5247 29.8648 19.5164 29.8483C19.4884 29.7926 19.4596 29.7361 19.4304 29.6822L19.3909 29.6122L19.3352 29.5108L19.2918 29.4359C19.2736 29.4045 19.2555 29.373 19.2369 29.3416C19.2223 29.3162 19.2073 29.2907 19.1923 29.2668C19.1718 29.2327 19.1529 29.1994 19.1304 29.1657L19.0735 29.0744C19.0467 29.0325 19.0198 28.9902 18.9922 28.9487C18.9748 28.9225 18.9575 28.8966 18.9397 28.8708C18.9219 28.845 18.9026 28.8154 18.8836 28.7881C18.8647 28.7608 18.8442 28.7335 18.8268 28.7065C18.8094 28.6796 18.7905 28.6553 18.7719 28.6317C18.7534 28.6081 18.7324 28.5767 18.7123 28.5493L18.6567 28.4745C18.6172 28.4247 18.5809 28.3749 18.5422 28.3248L18.4881 28.2563C18.4652 28.2275 18.4415 28.199 18.4182 28.1706L18.3661 28.1077C18.342 28.0789 18.3176 28.0505 18.2931 28.0217L18.2418 27.9625L18.1652 27.8757L18.1198 27.8256C18.0254 27.7219 17.9287 27.6197 17.8297 27.5202L17.7862 27.4764L17.6954 27.3877L17.6508 27.345C17.6192 27.3147 17.5877 27.2848 17.5557 27.2552L17.5229 27.2253C17.4112 27.1224 17.2963 27.0221 17.1795 26.9259L17.1475 26.8993C17.1115 26.8694 17.0752 26.8398 17.0386 26.8106L17.0023 26.7814C16.9628 26.7515 16.9269 26.7219 16.8886 26.6923L16.8692 26.6777C16.7401 26.5789 16.6079 26.4828 16.4745 26.3903L16.4559 26.3772C16.4137 26.3484 16.3714 26.32 16.3288 26.2919L16.3008 26.2736C16.2574 26.2447 16.2135 26.2167 16.1697 26.1886L16.1622 26.1841C16.017 26.0921 15.8689 26.0039 15.7181 25.9195L15.7122 25.9158C15.6645 25.8892 15.6167 25.8634 15.5689 25.8376L15.548 25.8263C15.2938 25.6904 15.0327 25.5656 14.7648 25.4521L14.7482 25.445C14.6776 25.415 14.6065 25.3862 14.5347 25.3578H15.9475C16.1776 25.3578 16.3643 25.1067 16.3643 24.7964C16.3643 24.4862 16.1776 24.2351 15.9475 24.2351H15.5267C15.5527 24.1722 15.5816 24.1011 15.6127 24.021C16.0106 23.786 16.7109 23.2852 17.4057 22.3653L17.4112 22.3582C17.4639 22.2894 17.5156 22.2181 17.5664 22.1445L17.5766 22.1299C17.6271 22.0577 17.6777 21.9832 17.7274 21.9054L17.7408 21.8848C17.7645 21.8474 17.7882 21.81 17.8119 21.7725C17.8119 21.7725 17.8119 21.7695 17.8147 21.7677C17.8391 21.7302 17.8632 21.6891 17.8873 21.649L17.9027 21.6232C17.9232 21.5888 17.9441 21.5536 17.9643 21.5181C17.9682 21.5117 17.9722 21.5053 17.9757 21.4986C17.999 21.4582 18.0223 21.417 18.0452 21.3755L18.061 21.3466C18.0799 21.3122 18.0985 21.2774 18.117 21.2422C18.1226 21.2325 18.1281 21.2224 18.1332 21.2123C18.1553 21.17 18.1774 21.1273 18.1995 21.0839L18.2149 21.0536C18.2323 21.0184 18.2501 20.9825 18.2674 20.9466L18.2864 20.9092C18.3077 20.865 18.3286 20.8201 18.3495 20.7748L18.3626 20.746C18.3799 20.7086 18.3969 20.6711 18.4139 20.6337L18.434 20.5888C18.4537 20.5435 18.4735 20.4979 18.4924 20.4518C18.496 20.4436 18.4995 20.435 18.5027 20.4268C18.5205 20.3845 18.5378 20.3414 18.5552 20.298L18.5749 20.2486C18.5911 20.2074 18.6073 20.1659 18.6231 20.1244L18.6349 20.0929C18.6535 20.0435 18.6716 19.993 18.6898 19.9432L18.7088 19.8901C18.723 19.8504 18.7368 19.81 18.7506 19.7696C18.7557 19.7546 18.7609 19.7396 18.7656 19.7247C18.783 19.673 18.8003 19.6203 18.8173 19.5675C18.8228 19.5492 18.8288 19.5301 18.8343 19.5128L18.8738 19.3897C18.8789 19.3718 18.8844 19.3523 18.8896 19.3362C18.9057 19.2819 18.9219 19.2266 18.9373 19.1708C18.9424 19.1532 18.9472 19.1352 18.9519 19.1173C18.9638 19.0742 18.9756 19.0312 18.9871 18.9874C18.9922 18.9676 18.9973 18.9477 19.0028 18.9279C19.0175 18.8703 19.0321 18.8123 19.0463 18.7535L19.0581 18.7045C19.0692 18.6577 19.0802 18.6105 19.0909 18.563L19.1051 18.4994C19.1185 18.4384 19.1319 18.3774 19.1446 18.3153C19.1473 18.3033 19.1497 18.2909 19.1521 18.2778C19.1631 18.2243 19.1738 18.1701 19.184 18.1158C19.1884 18.0937 19.1923 18.0716 19.1967 18.0496C19.2069 17.9938 19.2168 17.9373 19.2267 17.8815C19.2286 17.8695 19.231 17.8579 19.233 17.8463C19.244 17.7805 19.2548 17.7141 19.2654 17.6472C19.2689 17.6248 19.2725 17.6023 19.2756 17.5795C19.2839 17.5252 19.2918 17.4706 19.2997 17.4152L19.3068 17.3643C19.3163 17.2955 19.3254 17.2262 19.334 17.1559C19.3368 17.1338 19.3392 17.1117 19.3419 17.0892C19.3488 17.0334 19.3551 16.9772 19.3609 16.9208C19.3633 16.9006 19.3656 16.8808 19.3676 16.8606C19.3752 16.7882 19.3823 16.7153 19.3889 16.6417C19.3889 16.6211 19.3925 16.6005 19.394 16.5795C19.3992 16.5204 19.4043 16.4609 19.4086 16.401C19.4086 16.3789 19.4122 16.3569 19.4138 16.3348C19.4193 16.2584 19.4244 16.1816 19.4292 16.1042C19.4292 16.0867 19.4292 16.0668 19.4319 16.0511C19.4355 15.9867 19.439 15.922 19.4418 15.8569C19.4418 15.8333 19.4418 15.8097 19.445 15.7861C19.4481 15.7057 19.4513 15.6248 19.4537 15.5429C19.4537 15.5316 19.4537 15.52 19.4537 15.5084C19.4558 15.4356 19.4573 15.362 19.4584 15.2876C19.4584 15.2633 19.4584 15.239 19.4584 15.2147C19.4584 15.1348 19.4584 15.0545 19.4584 14.9737V14.9549C19.4584 14.8689 19.4584 14.7817 19.4584 14.693V14.6181C19.4584 14.5433 19.4552 14.4647 19.4533 14.3868V14.3445C19.4505 14.2547 19.4469 14.1638 19.4434 14.0725C19.4434 14.0489 19.441 14.0249 19.4402 14.0014C19.4368 13.9245 19.4329 13.8472 19.4284 13.7693C19.4284 13.7502 19.4284 13.7319 19.4252 13.7113C19.4197 13.6178 19.4136 13.5235 19.4071 13.4284L19.4023 13.3622C19.3964 13.2828 19.3905 13.2031 19.3838 13.1226C19.3838 13.0994 19.3802 13.0762 19.3783 13.053C19.37 12.9557 19.3609 12.8573 19.3514 12.7585C19.3514 12.7398 19.3475 12.7211 19.3459 12.702C19.3376 12.6178 19.3285 12.5328 19.3194 12.4471C19.3167 12.4213 19.3139 12.3959 19.3108 12.37C19.2997 12.2682 19.2879 12.1661 19.2752 12.0624C19.2752 12.0497 19.2717 12.037 19.2701 12.025C19.2588 11.9322 19.2468 11.8389 19.2342 11.7451C19.2302 11.7174 19.2267 11.6897 19.2227 11.662C19.208 11.5557 19.1929 11.4485 19.1773 11.3405C17.5983 0.684277 6.40876 2.41366 6.40876 2.41366L6.76719 4.70328L0 11.4808L0.295667 14.0979L2.85917 15.5949C2.97345 15.3195 3.12017 15.0573 3.29655 14.8131C4.95055 13.0044 8.15947 11.5845 9.07805 11.29C9.26201 11.2312 9.36662 11.2016 9.36662 11.2016C4.97266 16.593 5.47241 22.7695 5.66821 24.2418C5.46452 24.2792 5.30701 24.5124 5.30701 24.7968C5.30701 25.1067 5.49373 25.3582 5.72387 25.3582H7.13668C4.78699 26.2906 2.92185 28.0665 1.94848 30.2982C1.94734 30.3012 1.94602 30.3042 1.94454 30.3072C1.87269 30.4728 1.80585 30.6409 1.74401 30.8113C1.74411 30.813 1.74411 30.8148 1.74401 30.8165C1.72743 30.8629 1.71124 30.9093 1.69545 30.9561C1.68953 30.9729 1.68361 30.9898 1.67808 31.007C1.66387 31.0489 1.65071 31.0912 1.63861 31.1339C1.6315 31.1556 1.62479 31.1777 1.61808 31.1994C1.60545 31.2394 1.59321 31.2798 1.58137 31.3202L1.56005 31.3951C1.549 31.4325 1.53795 31.4726 1.52768 31.5115C1.52018 31.5392 1.51308 31.5665 1.50597 31.5942C1.4965 31.6316 1.48663 31.669 1.47755 31.7065C1.46847 31.7439 1.45978 31.7813 1.4511 31.821C1.44241 31.8606 1.43136 31.9071 1.42189 31.9505H0.85858C0.750258 31.9482 0.642551 31.9665 0.541778 32.0042C0.441006 32.0419 0.3492 32.0984 0.271747 32.1702C0.194294 32.242 0.13275 32.3278 0.0907365 32.4225C0.0487226 32.5172 0.0270812 32.6189 0.0270812 32.7216C0.0270812 32.8243 0.0487226 32.926 0.0907365 33.0207C0.13275 33.1154 0.194294 33.2011 0.271747 33.273C0.3492 33.3448 0.441006 33.4012 0.541778 33.439C0.642551 33.4767 0.750258 33.495 0.85858 33.4927H20.8234C20.9318 33.495 21.0395 33.4767 21.1402 33.439C21.241 33.4012 21.3328 33.3448 21.4103 33.273C21.4877 33.2011 21.5493 33.1154 21.5913 33.0207C21.6333 32.926 21.6549 32.8243 21.6549 32.7216C21.6549 32.6189 21.6333 32.5172 21.5913 32.4225C21.5493 32.3278 21.4877 32.242 21.4103 32.1702C21.3328 32.0984 21.241 32.0419 21.1402 32.0042C21.0395 31.9665 20.9318 31.9482 20.8234 31.9505L20.8163 31.9437Z" />
    <path d="M44.2035 31.9437H43.6406C43.6406 31.9377 43.6379 31.9318 43.6367 31.9261L43.6213 31.8573C43.6114 31.812 43.6007 31.7671 43.5897 31.7226C43.585 31.7016 43.5798 31.6806 43.5747 31.6597C43.5601 31.6009 43.5447 31.5422 43.5289 31.4834L43.5242 31.4666C43.5068 31.4029 43.4886 31.3396 43.4697 31.2765L43.4507 31.2155C43.4377 31.172 43.4239 31.129 43.4113 31.086C43.4038 31.0624 43.3959 31.0392 43.3884 31.016C43.3746 30.9744 43.3603 30.9329 43.3457 30.8917C43.3382 30.87 43.3303 30.8479 43.3228 30.8266C43.3044 30.775 43.2855 30.7237 43.266 30.6728C43.2617 30.6619 43.2581 30.6515 43.2538 30.6406C43.2309 30.5807 43.2068 30.5212 43.1823 30.4617C43.1736 30.44 43.1646 30.4187 43.1555 30.3974C43.1389 30.3599 43.1223 30.3188 43.1053 30.2798L43.0734 30.2076C43.0568 30.1702 43.0398 30.1328 43.0224 30.0953C43.0118 30.0721 43.0007 30.0486 42.9897 30.0254C42.9695 29.9823 42.9502 29.9397 42.9277 29.8974C42.9194 29.8813 42.9119 29.8648 42.9036 29.8483C42.8756 29.7926 42.8468 29.7361 42.8176 29.6822L42.7781 29.6122L42.7224 29.5108L42.679 29.4359C42.6609 29.4045 42.6427 29.373 42.6241 29.3416C42.6095 29.3162 42.5945 29.2907 42.5795 29.2668C42.559 29.2327 42.5401 29.1994 42.5176 29.1657L42.4607 29.0744C42.4339 29.0325 42.407 28.9902 42.3794 28.9487C42.362 28.9225 42.3447 28.8966 42.3269 28.8708C42.3091 28.845 42.2898 28.8154 42.2708 28.7881C42.2519 28.7608 42.2314 28.7335 42.214 28.7065C42.1966 28.6796 42.1777 28.6553 42.1591 28.6317C42.1406 28.6081 42.1196 28.5767 42.0995 28.5493L42.0439 28.4745C42.0044 28.4247 41.9681 28.3749 41.9294 28.3248L41.8753 28.2563C41.8524 28.2275 41.8287 28.199 41.8054 28.1706L41.7533 28.1077C41.7292 28.0789 41.7048 28.0505 41.6803 28.0217L41.629 27.9625L41.5524 27.8757L41.507 27.8256C41.4127 27.7219 41.3159 27.6197 41.2169 27.5202L41.1734 27.4764L41.0826 27.3877L41.038 27.345C41.0065 27.3147 40.9749 27.2848 40.9429 27.2552L40.9101 27.2253C40.7984 27.1224 40.6836 27.0221 40.5667 26.9259L40.5347 26.8993C40.4987 26.8694 40.4624 26.8398 40.4258 26.8106L40.3895 26.7814C40.35 26.7515 40.3141 26.7219 40.2758 26.6923L40.2564 26.6777C40.1273 26.5789 39.9951 26.4828 39.8617 26.3903L39.8431 26.3772C39.8009 26.3484 39.7587 26.32 39.716 26.2919L39.688 26.2736C39.6446 26.2447 39.6008 26.2167 39.5569 26.1886L39.5494 26.1841C39.4042 26.0921 39.2561 26.0039 39.1053 25.9195L39.0994 25.9158C39.0517 25.8892 39.0039 25.8634 38.9561 25.8376L38.9352 25.8263C38.681 25.6904 38.4199 25.5656 38.152 25.4521L38.1354 25.445C38.0648 25.415 37.9937 25.3862 37.9219 25.3578H39.3347C39.5648 25.3578 39.7515 25.1067 39.7515 24.7964C39.7515 24.4862 39.5648 24.2351 39.3347 24.2351H38.9139C38.9399 24.1722 38.9688 24.1011 38.9999 24.021C39.3979 23.786 40.0981 23.2852 40.7929 22.3653L40.7984 22.3582C40.8511 22.2894 40.9028 22.2181 40.9536 22.1445L40.9638 22.1299C41.0144 22.0577 41.0649 21.9832 41.1146 21.9054L41.128 21.8848C41.1517 21.8474 41.1754 21.81 41.1991 21.7725C41.1991 21.7725 41.1991 21.7695 41.2019 21.7677C41.2263 21.7302 41.2504 21.6891 41.2745 21.649L41.2899 21.6232C41.3104 21.5888 41.3313 21.5536 41.3515 21.5181C41.3554 21.5117 41.3594 21.5053 41.3629 21.4986C41.3862 21.4582 41.4095 21.417 41.4324 21.3755L41.4482 21.3466C41.4671 21.3122 41.4857 21.2774 41.5042 21.2422C41.5098 21.2325 41.5153 21.2224 41.5204 21.2123C41.5425 21.17 41.5646 21.1273 41.5867 21.0839L41.6021 21.0536C41.6195 21.0184 41.6373 20.9825 41.6546 20.9466L41.6736 20.9092C41.6949 20.865 41.7158 20.8201 41.7367 20.7748L41.7498 20.746C41.7671 20.7086 41.7841 20.6711 41.8011 20.6337L41.8212 20.5888C41.841 20.5435 41.8607 20.4979 41.8796 20.4518C41.8832 20.4436 41.8867 20.435 41.8899 20.4268C41.9077 20.3845 41.925 20.3414 41.9424 20.298L41.9621 20.2486C41.9783 20.2074 41.9945 20.1659 42.0103 20.1244L42.0221 20.0929C42.0407 20.0435 42.0589 19.993 42.077 19.9432L42.096 19.8901C42.1102 19.8504 42.124 19.81 42.1378 19.7696C42.1429 19.7546 42.1481 19.7396 42.1528 19.7247C42.1702 19.673 42.1875 19.6203 42.2045 19.5675C42.21 19.5492 42.216 19.5301 42.2215 19.5128L42.261 19.3897C42.2661 19.3718 42.2716 19.3523 42.2768 19.3362C42.2929 19.2819 42.3091 19.2266 42.3245 19.1708C42.3297 19.1532 42.3344 19.1352 42.3391 19.1173C42.351 19.0742 42.3628 19.0312 42.3743 18.9874C42.3794 18.9676 42.3845 18.9477 42.3901 18.9279C42.4047 18.8703 42.4193 18.8123 42.4335 18.7535L42.4453 18.7045C42.4564 18.6577 42.4674 18.6105 42.4781 18.563L42.4923 18.4994C42.5057 18.4384 42.5191 18.3774 42.5318 18.3153C42.5345 18.3033 42.5369 18.2909 42.5393 18.2778C42.5503 18.2243 42.561 18.1701 42.5712 18.1158C42.5756 18.0937 42.5795 18.0716 42.5839 18.0496C42.5941 17.9938 42.604 17.9373 42.6139 17.8815C42.6159 17.8695 42.6182 17.8579 42.6202 17.8463C42.6312 17.7805 42.642 17.7141 42.6526 17.6472C42.6561 17.6248 42.6597 17.6023 42.6628 17.5795C42.6711 17.5252 42.679 17.4706 42.6869 17.4152L42.694 17.3643C42.7035 17.2955 42.7126 17.2262 42.7212 17.1559C42.724 17.1338 42.7264 17.1117 42.7291 17.0892C42.736 17.0334 42.7423 16.9772 42.7481 16.9208C42.7505 16.9006 42.7528 16.8808 42.7548 16.8606C42.7624 16.7882 42.7695 16.7153 42.7761 16.6417C42.7761 16.6211 42.7797 16.6005 42.7813 16.5795C42.7864 16.5204 42.7915 16.4609 42.7959 16.401C42.7959 16.3789 42.7994 16.3569 42.801 16.3348C42.8065 16.2584 42.8116 16.1816 42.8164 16.1042C42.8164 16.0866 42.8164 16.0668 42.8191 16.0511C42.8227 15.9867 42.8263 15.922 42.829 15.8569C42.829 15.8333 42.829 15.8097 42.8322 15.7861C42.8353 15.7057 42.8385 15.6248 42.8409 15.5429C42.8409 15.5316 42.8409 15.52 42.8409 15.5084C42.843 15.4356 42.8445 15.362 42.8456 15.2876C42.8456 15.2633 42.8456 15.239 42.8456 15.2147C42.8456 15.1348 42.8456 15.0545 42.8456 14.9737V14.9549C42.8456 14.8689 42.8456 14.7817 42.8456 14.693V14.6181C42.8456 14.5433 42.8424 14.4647 42.8405 14.3868V14.3445C42.8377 14.2547 42.8341 14.1638 42.8306 14.0725C42.8306 14.0489 42.8282 14.0249 42.8274 14.0014C42.824 13.9245 42.8201 13.8472 42.8156 13.7693C42.8156 13.7502 42.8156 13.7319 42.8124 13.7113C42.8069 13.6178 42.8009 13.5235 42.7943 13.4284L42.7895 13.3622C42.7836 13.2828 42.7777 13.2031 42.771 13.1226C42.771 13.0994 42.7674 13.0762 42.7655 13.053C42.7572 12.9557 42.7481 12.8573 42.7386 12.7585C42.7386 12.7398 42.7347 12.7211 42.7331 12.702C42.7248 12.6178 42.7157 12.5328 42.7066 12.4471C42.7039 12.4213 42.7011 12.3959 42.698 12.37C42.6869 12.2682 42.6751 12.1661 42.6624 12.0624C42.6624 12.0497 42.6589 12.037 42.6573 12.025C42.646 11.9322 42.634 11.8389 42.6214 11.7451C42.6174 11.7174 42.6139 11.6897 42.6099 11.662C42.5952 11.5557 42.5801 11.4485 42.5645 11.3405C40.9855 0.684278 29.796 2.41366 29.796 2.41366L30.1544 4.70328L23.3872 11.4808L23.6829 14.0979L26.2464 15.5949C26.3607 15.3195 26.5074 15.0573 26.6838 14.8131C28.3378 13.0044 31.5467 11.5845 32.4653 11.29C32.6492 11.2312 32.7538 11.2016 32.7538 11.2016C28.3599 16.593 28.8596 22.7695 29.0554 24.2418C28.8517 24.2792 28.6942 24.5124 28.6942 24.7968C28.6942 25.1067 28.8809 25.3582 29.1111 25.3582H30.5239C28.1742 26.2906 26.3091 28.0665 25.3357 30.2982C25.3345 30.3012 25.3332 30.3042 25.3317 30.3072C25.2599 30.4728 25.1931 30.6409 25.1312 30.8113V30.8165C25.1146 30.8629 25.0984 30.9093 25.0827 30.9561C25.0767 30.9729 25.0708 30.9898 25.0653 31.007C25.0511 31.0489 25.0379 31.0912 25.0258 31.1339C25.0187 31.1556 25.012 31.1777 25.0053 31.1994C24.9927 31.2394 24.9804 31.2798 24.9686 31.3202L24.9473 31.3951C24.9362 31.4325 24.9252 31.4726 24.9149 31.5115C24.9074 31.5392 24.9003 31.5665 24.8932 31.5942C24.8837 31.6316 24.8738 31.669 24.8648 31.7065C24.8557 31.7439 24.847 31.7813 24.8383 31.821C24.8296 31.8606 24.8186 31.9071 24.8091 31.9505H24.2458C24.1375 31.9482 24.0298 31.9665 23.929 32.0042C23.8282 32.0419 23.7364 32.0984 23.659 32.1702C23.5815 32.242 23.52 32.3278 23.4779 32.4225C23.4359 32.5172 23.4143 32.6189 23.4143 32.7216C23.4143 32.8243 23.4359 32.926 23.4779 33.0207C23.52 33.1154 23.5815 33.2011 23.659 33.273C23.7364 33.3448 23.8282 33.4012 23.929 33.439C24.0298 33.4767 24.1375 33.495 24.2458 33.4927H44.2106C44.319 33.495 44.4267 33.4767 44.5274 33.439C44.6282 33.4012 44.72 33.3448 44.7975 33.273C44.8749 33.2011 44.9365 33.1154 44.9785 33.0207C45.0205 32.926 45.0421 32.8243 45.0421 32.7216C45.0421 32.6189 45.0205 32.5172 44.9785 32.4225C44.9365 32.3278 44.8749 32.242 44.7975 32.1702C44.72 32.0984 44.6282 32.0419 44.5274 32.0042C44.4267 31.9665 44.319 31.9482 44.2106 31.9505L44.2035 31.9437Z" />
    <path d="M67.5912 31.9437H67.0283C67.0283 31.9377 67.0256 31.9318 67.0244 31.9261L67.009 31.8573C66.9991 31.812 66.9884 31.7671 66.9774 31.7226C66.9727 31.7016 66.9675 31.6806 66.9624 31.6597C66.9478 31.6009 66.9324 31.5422 66.9166 31.4834L66.9119 31.4666C66.8945 31.4029 66.8763 31.3396 66.8574 31.2765L66.8384 31.2155C66.8254 31.172 66.8116 31.129 66.799 31.086C66.7915 31.0624 66.7836 31.0392 66.7761 31.016C66.7623 30.9744 66.748 30.9329 66.7334 30.8917C66.7259 30.87 66.718 30.8479 66.7105 30.8266C66.6921 30.775 66.6732 30.7237 66.6537 30.6728C66.6494 30.6619 66.6458 30.6515 66.6415 30.6406C66.6186 30.5807 66.5945 30.5212 66.57 30.4617C66.5613 30.44 66.5522 30.4187 66.5432 30.3974C66.5266 30.3599 66.51 30.3188 66.493 30.2798L66.4611 30.2076C66.4445 30.1702 66.4275 30.1328 66.4101 30.0953C66.3995 30.0721 66.3884 30.0486 66.3774 30.0254C66.3572 29.9823 66.3379 29.9397 66.3154 29.8974C66.3071 29.8813 66.2996 29.8648 66.2913 29.8483C66.2633 29.7926 66.2345 29.7361 66.2053 29.6822L66.1658 29.6122L66.1101 29.5108L66.0667 29.4359C66.0485 29.4045 66.0304 29.373 66.0118 29.3416C65.9972 29.3162 65.9822 29.2907 65.9672 29.2668C65.9467 29.2327 65.9278 29.1994 65.9053 29.1657L65.8484 29.0744C65.8216 29.0325 65.7947 28.9902 65.7671 28.9487C65.7497 28.9225 65.7324 28.8966 65.7146 28.8708C65.6968 28.845 65.6775 28.8154 65.6585 28.7881C65.6396 28.7608 65.6191 28.7335 65.6017 28.7065C65.5843 28.6796 65.5654 28.6553 65.5468 28.6317C65.5283 28.6081 65.5073 28.5767 65.4872 28.5493L65.4316 28.4745C65.3921 28.4247 65.3558 28.3749 65.3171 28.3248L65.263 28.2563C65.2401 28.2275 65.2164 28.199 65.1931 28.1706L65.141 28.1077C65.1169 28.0789 65.0925 28.0505 65.068 28.0217L65.0167 27.9625L64.9401 27.8757L64.8947 27.8256C64.8003 27.7219 64.7036 27.6197 64.6046 27.5202L64.5611 27.4764L64.4703 27.3877L64.4257 27.345C64.3942 27.3147 64.3626 27.2848 64.3306 27.2552L64.2978 27.2253C64.1861 27.1224 64.0712 27.0221 63.9544 26.9259L63.9224 26.8993C63.8864 26.8694 63.8501 26.8398 63.8135 26.8106L63.7772 26.7814C63.7377 26.7515 63.7018 26.7219 63.6635 26.6923L63.6441 26.6777C63.515 26.5789 63.3828 26.4828 63.2494 26.3903L63.2308 26.3772C63.1886 26.3484 63.1463 26.32 63.1037 26.2919L63.0757 26.2736C63.0323 26.2447 62.9884 26.2167 62.9446 26.1886L62.9371 26.1841C62.7919 26.0921 62.6438 26.0039 62.493 25.9195L62.4871 25.9158C62.4394 25.8892 62.3916 25.8634 62.3438 25.8376L62.3229 25.8263C62.0687 25.6904 61.8076 25.5656 61.5397 25.4521L61.5231 25.445C61.4525 25.415 61.3814 25.3862 61.3096 25.3578H62.7224C62.9525 25.3578 63.1392 25.1067 63.1392 24.7964C63.1392 24.4862 62.9525 24.2351 62.7224 24.2351H62.3016C62.3276 24.1722 62.3565 24.1011 62.3876 24.021C62.7855 23.786 63.4858 23.2852 64.1806 22.3653L64.1861 22.3582C64.2388 22.2894 64.2905 22.2181 64.3413 22.1445L64.3515 22.1299C64.402 22.0577 64.4526 21.9832 64.5023 21.9054L64.5157 21.8848C64.5394 21.8474 64.5631 21.81 64.5868 21.7725C64.5868 21.7725 64.5868 21.7695 64.5896 21.7677C64.614 21.7302 64.6381 21.6891 64.6622 21.649L64.6776 21.6232C64.6981 21.5888 64.719 21.5536 64.7392 21.5181C64.7431 21.5117 64.7471 21.5053 64.7506 21.4986C64.7739 21.4582 64.7972 21.417 64.8201 21.3755L64.8359 21.3466C64.8548 21.3122 64.8734 21.2774 64.8919 21.2422C64.8975 21.2325 64.903 21.2224 64.9081 21.2123C64.9302 21.17 64.9523 21.1273 64.9744 21.0839L64.9898 21.0536C65.0072 21.0184 65.025 20.9825 65.0423 20.9466L65.0613 20.9092C65.0826 20.865 65.1035 20.8201 65.1244 20.7748L65.1375 20.746C65.1548 20.7086 65.1718 20.6711 65.1888 20.6337L65.2089 20.5888C65.2287 20.5435 65.2484 20.4979 65.2673 20.4518C65.2709 20.4436 65.2744 20.435 65.2776 20.4268C65.2954 20.3845 65.3127 20.3414 65.3301 20.298L65.3498 20.2486C65.366 20.2074 65.3822 20.1659 65.398 20.1244L65.4098 20.0929C65.4284 20.0435 65.4466 19.993 65.4647 19.9432L65.4837 19.8901C65.4979 19.8504 65.5117 19.81 65.5255 19.7696C65.5306 19.7546 65.5358 19.7396 65.5405 19.7247C65.5579 19.673 65.5752 19.6203 65.5922 19.5675C65.5977 19.5492 65.6037 19.5301 65.6092 19.5128L65.6487 19.3897C65.6538 19.3718 65.6593 19.3523 65.6645 19.3362C65.6806 19.2819 65.6968 19.2266 65.7122 19.1708C65.7174 19.1532 65.7221 19.1352 65.7268 19.1173C65.7387 19.0742 65.7505 19.0312 65.762 18.9874C65.7671 18.9676 65.7722 18.9477 65.7777 18.9279C65.7924 18.8703 65.807 18.8123 65.8212 18.7535L65.833 18.7045C65.8441 18.6577 65.8551 18.6105 65.8658 18.563L65.88 18.4994C65.8934 18.4384 65.9068 18.3774 65.9195 18.3153C65.9222 18.3033 65.9246 18.2909 65.927 18.2778C65.938 18.2243 65.9487 18.1701 65.9589 18.1158C65.9633 18.0937 65.9672 18.0716 65.9716 18.0496C65.9818 17.9938 65.9917 17.9373 66.0016 17.8815C66.0035 17.8695 66.0059 17.8579 66.0079 17.8463C66.0189 17.7805 66.0297 17.7141 66.0403 17.6472C66.0438 17.6248 66.0474 17.6023 66.0505 17.5795C66.0588 17.5252 66.0667 17.4706 66.0746 17.4152L66.0817 17.3643C66.0912 17.2955 66.1003 17.2262 66.1089 17.1559C66.1117 17.1338 66.1141 17.1117 66.1168 17.0892C66.1237 17.0334 66.13 16.9772 66.1358 16.9208C66.1382 16.9006 66.1405 16.8808 66.1425 16.8606C66.1501 16.7882 66.1572 16.7153 66.1638 16.6417C66.1638 16.6211 66.1674 16.6005 66.1689 16.5795C66.1741 16.5204 66.1792 16.4609 66.1836 16.401C66.1836 16.3789 66.1871 16.3569 66.1887 16.3348C66.1942 16.2584 66.1993 16.1816 66.2041 16.1042C66.2041 16.0867 66.2041 16.0668 66.2068 16.0511C66.2104 15.9867 66.2139 15.922 66.2167 15.8569C66.2167 15.8333 66.2167 15.8097 66.2199 15.7861C66.223 15.7057 66.2262 15.6248 66.2286 15.5429C66.2286 15.5316 66.2286 15.52 66.2286 15.5084C66.2307 15.4356 66.2322 15.362 66.2333 15.2876C66.2333 15.2633 66.2333 15.239 66.2333 15.2147C66.2333 15.1348 66.2333 15.0545 66.2333 14.9737V14.9549C66.2333 14.8689 66.2333 14.7817 66.2333 14.693V14.6181C66.2333 14.5433 66.2301 14.4647 66.2282 14.3868V14.3445C66.2254 14.2547 66.2218 14.1638 66.2183 14.0725C66.2183 14.0489 66.2159 14.0249 66.2151 14.0014C66.2117 13.9245 66.2078 13.8472 66.2033 13.7693C66.2033 13.7502 66.2033 13.7319 66.2001 13.7113C66.1946 13.6178 66.1886 13.5235 66.182 13.4284L66.1772 13.3622C66.1713 13.2828 66.1654 13.2031 66.1587 13.1226C66.1587 13.0994 66.1551 13.0762 66.1532 13.053C66.1449 12.9557 66.1358 12.8573 66.1263 12.7585C66.1263 12.7398 66.1224 12.7211 66.1208 12.702C66.1125 12.6178 66.1034 12.5328 66.0943 12.4471C66.0916 12.4213 66.0888 12.3959 66.0857 12.37C66.0746 12.2682 66.0628 12.1661 66.0501 12.0624C66.0501 12.0497 66.0466 12.037 66.045 12.025C66.0337 11.9322 66.0217 11.8389 66.0091 11.7451C66.0051 11.7174 66.0016 11.6897 65.9976 11.662C65.9829 11.5557 65.9678 11.4485 65.9522 11.3405C64.3732 0.684277 53.1837 2.41366 53.1837 2.41366L53.5421 4.70328L46.7749 11.4808L47.0706 14.0979L49.6341 15.5949C49.7484 15.3195 49.8951 15.0573 50.0715 14.8131C51.7255 13.0044 54.9344 11.5845 55.853 11.29C56.0369 11.2312 56.1415 11.2016 56.1415 11.2016C51.7476 16.593 52.2473 22.7695 52.4431 24.2418C52.2394 24.2792 52.0819 24.5124 52.0819 24.7968C52.0819 25.1067 52.2686 25.3582 52.4988 25.3582H53.9116C51.5619 26.2906 49.6968 28.0665 48.7234 30.2982C48.7222 30.3012 48.7209 30.3042 48.7194 30.3072C48.6476 30.4728 48.5808 30.6409 48.5189 30.8113C48.519 30.813 48.519 30.8148 48.5189 30.8165C48.5023 30.8629 48.4861 30.9093 48.4704 30.9561C48.4644 30.9729 48.4585 30.9898 48.453 31.007C48.4388 31.0489 48.4256 31.0912 48.4135 31.1339C48.4064 31.1556 48.3997 31.1777 48.393 31.1994C48.3803 31.2394 48.3681 31.2798 48.3563 31.3202L48.335 31.3951C48.3239 31.4325 48.3128 31.4726 48.3026 31.5115C48.2951 31.5392 48.288 31.5665 48.2809 31.5942C48.2714 31.6316 48.2615 31.669 48.2525 31.7065C48.2434 31.7439 48.2347 31.7813 48.226 31.821C48.2173 31.8606 48.2063 31.9071 48.1968 31.9505H47.6335C47.5252 31.9482 47.4175 31.9665 47.3167 32.0042C47.2159 32.0419 47.1241 32.0984 47.0466 32.1702C46.9692 32.242 46.9077 32.3278 46.8656 32.4225C46.8236 32.5172 46.802 32.6189 46.802 32.7216C46.802 32.8243 46.8236 32.926 46.8656 33.0207C46.9077 33.1154 46.9692 33.2011 47.0466 33.273C47.1241 33.3448 47.2159 33.4012 47.3167 33.439C47.4175 33.4767 47.5252 33.495 47.6335 33.4927H67.5983C67.7067 33.495 67.8144 33.4767 67.9151 33.439C68.0159 33.4012 68.1077 33.3448 68.1852 33.273C68.2626 33.2011 68.3242 33.1154 68.3662 33.0207C68.4082 32.926 68.4298 32.8243 68.4298 32.7216C68.4298 32.6189 68.4082 32.5172 68.3662 32.4225C68.3242 32.3278 68.2626 32.242 68.1852 32.1702C68.1077 32.0984 68.0159 32.0419 67.9151 32.0042C67.8144 31.9665 67.7067 31.9482 67.5983 31.9505L67.5912 31.9437Z" />
    <path d="M90.9784 31.9437H90.4155C90.4155 31.9377 90.4128 31.9318 90.4116 31.9261L90.3962 31.8573C90.3863 31.812 90.3757 31.7671 90.3646 31.7226C90.3599 31.7016 90.3547 31.6806 90.3496 31.6597C90.335 31.6009 90.3196 31.5422 90.3038 31.4834L90.2991 31.4666C90.2817 31.4029 90.2635 31.3396 90.2446 31.2765L90.2256 31.2155C90.2126 31.172 90.1988 31.129 90.1862 31.086C90.1787 31.0624 90.1708 31.0392 90.1633 31.016C90.1495 30.9744 90.1352 30.9329 90.1206 30.8917C90.1131 30.87 90.1052 30.8479 90.0977 30.8266C90.0793 30.775 90.0604 30.7237 90.0409 30.6728C90.0366 30.6619 90.033 30.6515 90.0287 30.6406C90.0058 30.5807 89.9817 30.5212 89.9572 30.4617C89.9485 30.44 89.9395 30.4187 89.9304 30.3974C89.9138 30.3599 89.8972 30.3188 89.8802 30.2798L89.8483 30.2076C89.8317 30.1702 89.8147 30.1328 89.7973 30.0953C89.7867 30.0721 89.7756 30.0486 89.7646 30.0254C89.7444 29.9823 89.7251 29.9397 89.7026 29.8974C89.6943 29.8813 89.6868 29.8648 89.6785 29.8483C89.6505 29.7926 89.6217 29.7361 89.5925 29.6822L89.553 29.6122L89.4973 29.5108L89.4539 29.4359C89.4358 29.4045 89.4176 29.373 89.399 29.3416C89.3844 29.3162 89.3694 29.2907 89.3544 29.2668C89.3339 29.2327 89.315 29.1994 89.2925 29.1657L89.2356 29.0744C89.2088 29.0325 89.1819 28.9902 89.1543 28.9487C89.1369 28.9225 89.1196 28.8966 89.1018 28.8708C89.084 28.845 89.0647 28.8154 89.0457 28.7881C89.0268 28.7608 89.0063 28.7335 88.9889 28.7065C88.9715 28.6796 88.9526 28.6553 88.934 28.6317C88.9155 28.6081 88.8946 28.5767 88.8744 28.5493L88.8188 28.4745C88.7793 28.4247 88.743 28.3749 88.7043 28.3248L88.6502 28.2563C88.6273 28.2275 88.6036 28.199 88.5803 28.1706L88.5282 28.1077C88.5041 28.0789 88.4797 28.0505 88.4552 28.0217L88.4039 27.9625L88.3273 27.8757L88.2819 27.8256C88.1876 27.7219 88.0908 27.6197 87.9918 27.5202L87.9483 27.4764L87.8575 27.3877L87.8129 27.345C87.7814 27.3147 87.7498 27.2848 87.7178 27.2552L87.685 27.2253C87.5733 27.1224 87.4585 27.0221 87.3416 26.9259L87.3096 26.8993C87.2736 26.8694 87.2373 26.8398 87.2007 26.8106L87.1644 26.7814C87.1249 26.7515 87.089 26.7219 87.0507 26.6923L87.0313 26.6777C86.9023 26.5789 86.77 26.4828 86.6366 26.3903L86.618 26.3772C86.5758 26.3484 86.5336 26.32 86.4909 26.2919L86.4629 26.2736C86.4195 26.2447 86.3757 26.2167 86.3318 26.1886L86.3243 26.1841C86.1791 26.0921 86.031 26.0039 85.8802 25.9195L85.8743 25.9158C85.8266 25.8892 85.7788 25.8634 85.731 25.8376L85.7101 25.8263C85.4559 25.6904 85.1948 25.5656 84.9269 25.4521L84.9103 25.445C84.8397 25.415 84.7686 25.3862 84.6968 25.3578H86.1096C86.3397 25.3578 86.5265 25.1067 86.5265 24.7964C86.5265 24.4862 86.3397 24.2351 86.1096 24.2351H85.6888C85.7148 24.1722 85.7437 24.1011 85.7748 24.021C86.1728 23.786 86.873 23.2852 87.5678 22.3653L87.5733 22.3582C87.626 22.2894 87.6777 22.2181 87.7285 22.1445L87.7387 22.1299C87.7893 22.0577 87.8398 21.9832 87.8895 21.9054L87.9029 21.8848C87.9266 21.8474 87.9503 21.81 87.974 21.7725C87.974 21.7725 87.974 21.7695 87.9768 21.7677C88.0012 21.7302 88.0253 21.6891 88.0494 21.649L88.0648 21.6232C88.0853 21.5888 88.1062 21.5536 88.1264 21.5181C88.1303 21.5117 88.1343 21.5053 88.1378 21.4986C88.1611 21.4582 88.1844 21.417 88.2073 21.3755L88.2231 21.3466C88.242 21.3122 88.2606 21.2774 88.2791 21.2422C88.2847 21.2325 88.2902 21.2224 88.2953 21.2123C88.3174 21.17 88.3395 21.1273 88.3616 21.0839L88.377 21.0536C88.3944 21.0184 88.4122 20.9825 88.4295 20.9466L88.4485 20.9092C88.4698 20.865 88.4907 20.8201 88.5116 20.7748L88.5247 20.746C88.542 20.7086 88.559 20.6711 88.576 20.6337L88.5961 20.5888C88.6159 20.5435 88.6356 20.4979 88.6545 20.4518C88.6581 20.4436 88.6616 20.435 88.6648 20.4268C88.6826 20.3845 88.6999 20.3414 88.7173 20.298L88.737 20.2486C88.7532 20.2074 88.7694 20.1659 88.7852 20.1244L88.7971 20.0929C88.8156 20.0435 88.8338 19.993 88.8519 19.9432L88.8709 19.8901C88.8851 19.8504 88.8989 19.81 88.9127 19.7696C88.9178 19.7546 88.923 19.7396 88.9277 19.7247C88.9451 19.673 88.9625 19.6203 88.9794 19.5675C88.985 19.5492 88.9909 19.5301 88.9964 19.5128L89.0359 19.3897C89.041 19.3718 89.0465 19.3523 89.0517 19.3362C89.0678 19.2819 89.084 19.2266 89.0994 19.1708C89.1046 19.1532 89.1093 19.1352 89.114 19.1173C89.1259 19.0742 89.1377 19.0312 89.1492 18.9874C89.1543 18.9676 89.1594 18.9477 89.165 18.9279C89.1796 18.8703 89.1942 18.8123 89.2084 18.7535L89.2202 18.7045C89.2313 18.6577 89.2423 18.6105 89.253 18.563L89.2672 18.4994C89.2806 18.4384 89.294 18.3774 89.3067 18.3153C89.3094 18.3033 89.3118 18.2909 89.3142 18.2778C89.3252 18.2243 89.3359 18.1701 89.3461 18.1158C89.3505 18.0937 89.3544 18.0716 89.3588 18.0496C89.369 17.9938 89.3789 17.9373 89.3888 17.8815C89.3908 17.8695 89.3931 17.8579 89.3951 17.8463C89.4061 17.7805 89.4169 17.7141 89.4275 17.6472C89.431 17.6248 89.4346 17.6023 89.4377 17.5795C89.446 17.5252 89.4539 17.4706 89.4618 17.4152L89.4689 17.3643C89.4784 17.2955 89.4875 17.2262 89.4962 17.1559C89.4989 17.1338 89.5013 17.1117 89.504 17.0892C89.5109 17.0334 89.5172 16.9772 89.523 16.9208C89.5254 16.9006 89.5277 16.8808 89.5297 16.8606C89.5373 16.7882 89.5444 16.7153 89.551 16.6417C89.551 16.6211 89.5546 16.6005 89.5562 16.5795C89.5613 16.5204 89.5664 16.4609 89.5708 16.401C89.5708 16.3789 89.5743 16.3569 89.5759 16.3348C89.5814 16.2584 89.5865 16.1816 89.5913 16.1042C89.5913 16.0867 89.5913 16.0668 89.594 16.0511C89.5976 15.9867 89.6012 15.922 89.6039 15.8569C89.6039 15.8333 89.6039 15.8097 89.6071 15.7861C89.6102 15.7057 89.6134 15.6248 89.6158 15.5429C89.6158 15.5316 89.6158 15.52 89.6158 15.5084C89.6179 15.4356 89.6194 15.362 89.6205 15.2876C89.6205 15.2633 89.6205 15.239 89.6205 15.2147C89.6205 15.1348 89.6205 15.0545 89.6205 14.9737V14.9549C89.6205 14.8689 89.6205 14.7817 89.6205 14.693V14.6181C89.6205 14.5433 89.6173 14.4647 89.6154 14.3868V14.3445C89.6126 14.2547 89.6091 14.1638 89.6055 14.0725C89.6055 14.0489 89.6031 14.0249 89.6023 14.0014C89.5989 13.9245 89.595 13.8472 89.5905 13.7693C89.5905 13.7502 89.5905 13.7319 89.5873 13.7113C89.5818 13.6178 89.5758 13.5235 89.5692 13.4284L89.5644 13.3622C89.5585 13.2828 89.5526 13.2031 89.5459 13.1226C89.5459 13.0994 89.5423 13.0762 89.5404 13.053C89.5321 12.9557 89.523 12.8573 89.5135 12.7585C89.5135 12.7398 89.5096 12.7211 89.508 12.702C89.4997 12.6178 89.4906 12.5328 89.4815 12.4471C89.4788 12.4213 89.476 12.3959 89.4729 12.37C89.4618 12.2682 89.45 12.1661 89.4373 12.0624C89.4373 12.0497 89.4338 12.037 89.4322 12.025C89.4209 11.9322 89.4089 11.8389 89.3963 11.7451C89.3923 11.7174 89.3888 11.6897 89.3848 11.662C89.3701 11.5557 89.355 11.4485 89.3394 11.3405C87.7604 0.684277 76.5709 2.41366 76.5709 2.41366L76.9293 4.70328L70.1621 11.4808L70.4578 14.0979L73.0213 15.5949C73.1356 15.3195 73.2823 15.0573 73.4587 14.8131C75.1127 13.0044 78.3216 11.5845 79.2402 11.29C79.4241 11.2312 79.5287 11.2016 79.5287 11.2016C75.1348 16.593 75.6345 22.7695 75.8303 24.2418C75.6266 24.2792 75.4691 24.5124 75.4691 24.7968C75.4691 25.1067 75.6558 25.3582 75.886 25.3582H77.2988C74.9491 26.2906 73.084 28.0665 72.1106 30.2982C72.1094 30.3012 72.1081 30.3042 72.1066 30.3072C72.0348 30.4728 71.968 30.6409 71.9061 30.8113C71.9062 30.813 71.9062 30.8148 71.9061 30.8165C71.8895 30.8629 71.8734 30.9093 71.8576 30.9561C71.8516 30.9729 71.8457 30.9898 71.8402 31.007C71.826 31.0489 71.8128 31.0912 71.8007 31.1339C71.7936 31.1556 71.7869 31.1777 71.7802 31.1994C71.7676 31.2394 71.7553 31.2798 71.7435 31.3202L71.7222 31.3951C71.7111 31.4325 71.7001 31.4726 71.6898 31.5115C71.6823 31.5392 71.6752 31.5665 71.6681 31.5942C71.6586 31.6316 71.6487 31.669 71.6397 31.7065C71.6306 31.7439 71.6219 31.7813 71.6132 31.821C71.6045 31.8606 71.5935 31.9071 71.584 31.9505H71.0207C70.9124 31.9482 70.8047 31.9665 70.7039 32.0042C70.6031 32.0419 70.5113 32.0984 70.4339 32.1702C70.3564 32.242 70.2949 32.3278 70.2528 32.4225C70.2108 32.5172 70.1892 32.6189 70.1892 32.7216C70.1892 32.8243 70.2108 32.926 70.2528 33.0207C70.2949 33.1154 70.3564 33.2011 70.4339 33.273C70.5113 33.3448 70.6031 33.4012 70.7039 33.439C70.8047 33.4767 70.9124 33.495 71.0207 33.4927H90.9855C91.0939 33.495 91.2016 33.4767 91.3023 33.439C91.4031 33.4012 91.4949 33.3448 91.5724 33.273C91.6498 33.2011 91.7114 33.1154 91.7534 33.0207C91.7954 32.926 91.817 32.8243 91.817 32.7216C91.817 32.6189 91.7954 32.5172 91.7534 32.4225C91.7114 32.3278 91.6498 32.242 91.5724 32.1702C91.4949 32.0984 91.4031 32.0419 91.3023 32.0042C91.2016 31.9665 91.0939 31.9482 90.9855 31.9505L90.9784 31.9437Z" />
    <path d="M99.3346 15V3.34411H102.332V7.95652H103.164L106.728 3.34411H109.991L105.496 8.78908L110.158 15H106.661L103.164 10.0546H102.332V15H99.3346ZM111.823 15.2165C111.734 15.2165 111.607 15.2109 111.44 15.1998C111.285 15.1998 111.163 15.1887 111.074 15.1665V12.5356C111.107 12.5467 111.19 12.5523 111.324 12.5523C111.546 12.5523 111.734 12.5245 111.89 12.469C112.056 12.4024 112.195 12.2692 112.306 12.0694C112.417 11.8585 112.511 11.5532 112.589 11.1536C112.678 10.7539 112.739 10.2211 112.772 9.55504C112.805 8.87788 112.822 8.02867 112.822 7.00739V3.34411H121.647V15H118.633V5.79185H115.62V7.34042C115.62 8.72802 115.564 9.89361 115.453 10.8372C115.342 11.7697 115.175 12.5245 114.953 13.1018C114.743 13.679 114.482 14.123 114.171 14.4339C113.86 14.7336 113.505 14.9389 113.105 15.05C112.717 15.161 112.289 15.2165 111.823 15.2165ZM126.285 15.2165C126.163 15.2165 126.041 15.2109 125.919 15.1998C125.808 15.1887 125.708 15.1665 125.619 15.1332V12.6688C125.708 12.6799 125.796 12.691 125.885 12.7021C125.974 12.7132 126.08 12.7188 126.202 12.7188C126.524 12.7188 126.773 12.6966 126.951 12.6522C127.129 12.5967 127.267 12.5079 127.367 12.3858C127.467 12.2525 127.55 12.0749 127.617 11.8529L122.938 3.34411H125.985L129.082 9.25531L131.513 3.34411H134.444L130.548 12.1526C130.292 12.7299 130.037 13.2128 129.782 13.6013C129.537 13.9898 129.254 14.3062 128.932 14.5504C128.622 14.7835 128.25 14.95 127.817 15.05C127.395 15.161 126.884 15.2165 126.285 15.2165ZM135.775 15V3.34411H144.351V5.8085H138.773V7.54023H140.688C142.308 7.54023 143.502 7.87326 144.268 8.53931C145.045 9.19426 145.433 10.0768 145.433 11.1869C145.433 12.3858 145.045 13.3238 144.268 14.0009C143.502 14.667 142.308 15 140.688 15H135.775ZM138.773 12.5356H140.355C141.076 12.5356 141.587 12.4191 141.887 12.1859C142.186 11.9417 142.336 11.6087 142.336 11.1869C142.336 10.765 142.186 10.4376 141.887 10.2044C141.587 9.96022 141.076 9.83811 140.355 9.83811H138.773V12.5356ZM105.396 33V28.3543C105.107 28.543 104.724 28.7151 104.247 28.8705C103.78 29.0148 103.225 29.087 102.582 29.087C101.372 29.087 100.456 28.7872 99.8341 28.1878C99.2236 27.5772 98.9183 26.6004 98.9183 25.2572V21.3441H101.916V24.7576C101.916 25.4126 102.054 25.8844 102.332 26.173C102.609 26.4505 102.998 26.5893 103.497 26.5893C103.953 26.5893 104.336 26.5393 104.646 26.4394C104.957 26.3284 105.207 26.2118 105.396 26.0897V21.3441H108.41V33H105.396ZM110.734 33V21.3441H119.226V23.642H113.731V25.9232H118.726V28.0879H113.731V30.7021H119.226V33H110.734ZM124.197 33V23.8085H120.617V21.3441H130.774V23.8085H127.194V33H124.197ZM132.279 33V21.3441H135.277V25.2072H136.692C138.313 25.2072 139.506 25.5569 140.272 26.2562C141.049 26.9556 141.438 27.9047 141.438 29.1036C141.438 30.3025 141.049 31.2516 140.272 31.951C139.506 32.6503 138.313 33 136.692 33H132.279ZM135.277 30.5356H136.359C137.058 30.5356 137.563 30.4024 137.874 30.136C138.185 29.8696 138.34 29.5254 138.34 29.1036C138.34 28.6818 138.185 28.3376 137.874 28.0712C137.563 27.8048 137.058 27.6716 136.359 27.6716H135.277V30.5356ZM142.27 33V21.3441H145.267V33H142.27ZM147.597 33V21.3441H152.343C153.431 21.3441 154.324 21.5051 155.024 21.827C155.723 22.1378 156.239 22.593 156.572 23.1924C156.916 23.7807 157.088 24.4912 157.088 25.3238C157.088 26.1452 156.916 26.8557 156.572 27.4551C156.239 28.0546 155.723 28.5153 155.024 28.8372C154.324 29.148 153.431 29.3034 152.343 29.3034H150.594V33H147.597ZM150.594 26.839H152.01C152.776 26.839 153.314 26.7114 153.625 26.4561C153.936 26.2007 154.091 25.8233 154.091 25.3238C154.091 24.8242 153.936 24.4468 153.625 24.1915C153.314 23.9362 152.776 23.8085 152.01 23.8085H150.594V26.839ZM158.752 33V21.3441H167.244V23.642H161.75V25.9232H166.745V28.0879H161.75V30.7021H167.244V33H158.752ZM168.39 33L172.186 26.9223L168.556 21.3441H171.87L174.151 24.8742L176.466 21.3441H179.713L176.099 26.889L179.879 33H176.532L174.101 28.9204L171.67 33H168.39ZM185.619 33V21.3441H188.617V25.9565H189.449L193.013 21.3441H196.276L191.78 26.7891L196.443 33H192.946L189.449 28.0546H188.617V33H185.619ZM202.963 33.2165C202.197 33.2165 201.47 33.1055 200.781 32.8834C200.104 32.6614 199.505 32.3117 198.983 31.8344C198.461 31.3571 198.051 30.741 197.751 29.9861C197.451 29.2202 197.301 28.3099 197.301 27.2553V26.9223C197.301 25.901 197.451 25.024 197.751 24.2914C198.051 23.5587 198.461 22.9593 198.983 22.4931C199.505 22.0268 200.104 21.6827 200.781 21.4607C201.47 21.2387 202.197 21.1276 202.963 21.1276C203.74 21.1276 204.467 21.2387 205.144 21.4607C205.821 21.6827 206.421 22.0268 206.942 22.4931C207.464 22.9593 207.875 23.5587 208.175 24.2914C208.474 25.024 208.624 25.901 208.624 26.9223V27.2553C208.624 28.3099 208.474 29.2202 208.175 29.9861C207.875 30.741 207.464 31.3571 206.942 31.8344C206.421 32.3117 205.821 32.6614 205.144 32.8834C204.467 33.1055 203.74 33.2165 202.963 33.2165ZM202.946 30.7188C203.401 30.7188 203.823 30.6189 204.212 30.4191C204.6 30.2081 204.911 29.8585 205.144 29.37C205.388 28.8705 205.51 28.1656 205.51 27.2553V26.9223C205.51 26.0564 205.388 25.3848 205.144 24.9075C204.911 24.4301 204.6 24.0971 204.212 23.9084C203.823 23.7197 203.401 23.6253 202.946 23.6253C202.513 23.6253 202.102 23.7197 201.714 23.9084C201.325 24.0971 201.009 24.4301 200.765 24.9075C200.521 25.3848 200.398 26.0564 200.398 26.9223V27.2553C200.398 28.1656 200.521 28.8705 200.765 29.37C201.009 29.8585 201.325 30.2081 201.714 30.4191C202.102 30.6189 202.513 30.7188 202.946 30.7188ZM210.531 33V21.3441H213.528V25.7734H217.858V21.3441H220.855V33H217.858V28.2377H213.528V33H210.531ZM223.182 33V21.3441H231.674V23.642H226.18V25.9232H231.175V28.0879H226.18V30.7021H231.674V33H223.182ZM233.573 33V21.3441H236.57V28.3376L241.149 21.3441H243.897V33H240.9V26.0065L236.321 33H233.573ZM238.735 20.6947C237.958 20.6947 237.32 20.5893 236.82 20.3783C236.332 20.1563 235.971 19.8344 235.738 19.4126C235.516 18.9907 235.405 18.4634 235.405 17.8307H237.836C237.836 18.2969 237.902 18.6133 238.036 18.7798C238.18 18.9352 238.413 19.0129 238.735 19.0129C239.057 19.0129 239.284 18.9352 239.418 18.7798C239.562 18.6133 239.634 18.2969 239.634 17.8307H242.065C242.065 18.4634 241.949 18.9907 241.716 19.4126C241.494 19.8344 241.138 20.1563 240.65 20.3783C240.161 20.5893 239.523 20.6947 238.735 20.6947Z" />
</svg>
`,I2=`<svg viewBox="-4 0 16 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.4618 1.53839L9.92334 9.99993L1.4618 18.4615" stroke-width="2" stroke-linecap="square"/>
</svg>
`,N2={"chevron-right":I2,logo:R2};class P2 extends HTMLElement{constructor(){super(),this.classList.add("flex"),this.classList.add("justify-center"),this.classList.add("items-center");const e=N2[this.getAttribute("a-icon")];y.call(this,`
${e}

${x()}
<style>
svg {
	display: block;
	max-width: 100%;
	max-height: 100%;
}
</style>
		`)}}customElements.define("a-icon",P2);var k1;class Q2 extends HTMLElement{constructor(){super();a(this,k1,()=>{document.querySelectorAll(`[a-teleport-id=${this.getAttribute("a-id")}]`).forEach(i=>i.innerHTML=this.innerHTML)});this.classList.add("hidden"),window.addEventListener("load",s(this,k1).bind(this))}}k1=new WeakMap;customElements.define("a-teleport",Q2);class W2 extends HTMLElement{constructor(){super(),y.call(this,"<slot></slot>")}}customElements.define("a-shadow",W2);var G,J;class X2{constructor(){a(this,G,[]);a(this,J,[]);c(this,"use",e=>(s(this,J).push(e),this));c(this,"template",e=>(s(this,G).push(e),this));c(this,"mount",e=>{const t=document.querySelector(e);if(!t)throw new Error(`Body not have ${e}`);t.setAttribute("a-mount",""),s(this,G).forEach(i=>t.appendChild(i)),s(this,J).forEach(i=>i())})}}G=new WeakMap,J=new WeakMap;const F2=()=>new X2,Z=n=>`<div class="${n}" ></div>`,G2=function(n){n.split(" ").forEach(e=>this.classList.add(e))},J2=function([n,e]){if(n==="class")return G2.call(this,e);this[n]=e},K2=(n,e)=>n+e,G1=(n,e,t)=>{const i=document.createElement(n);return e&&Object.entries(e).forEach(J2,i),i.innerHTML=[t].flat().reduce(K2,""),i},J1=()=>{Object.entries(Y.screens).forEach(([n])=>P1(n)?document.body.classList.add(n):document.body.classList.remove(n))},U2=()=>{J1(),window.addEventListener("resize",J1)},Y2=`<a-surface>
	<section
		id="header"
		class="header min-h-screen flex flex-col justify-start items-start p-4.5 md:py-6 md:px-18"
	>
		<a-icon
			a-icon="logo"
			class="w-50 text-secondary-200"
		></a-icon>

		<div class="h-10 md:h-15"></div>

		<div class="max-w-88 md:max-w-136">
			<div class="text-2xl md:text-3xl md:text-5xl leading-110 uppercase">
				<div>Превратите</div>
				<div>уездный город</div>
				<div class="text-center">в столицу</div>
				<div class="text-center">земного шара</div>
			</div>

			<div class="h-6"></div>
			<div class="text-golos text-sm md:text-center leading-130">
				Оплатите взнос на телеграммы для организации Международного васюкинского
				турнира по шахматам
			</div>
			<div class="h-8 md:h-10"></div>
			<div class="flex max-md:flex-col justify-start items-center gap-4">
				<button
					is="a-button"
					class="w-full md:w-53"
					a-size="lg"
					a-name="scroll-to"
					a-props="#support"
				>
					Поддержать шахматную мысль
				</button>
				<button
					is="a-button"
					class="w-full md:w-53"
					a-severity="secondary"
					a-size="lg"
					a-name="scroll-to"
					a-props="#about"
				>
					Подробнее о турнире
				</button>
			</div>
			<div class="max-md:h-70"></div>
		</div>
	</section>
</a-surface>

<style>
	body:not(.md) {
		#header.header {
			background-image: url('/images/banner-mobile.png');
			background-position: 100% bottom;
			background-size: 100% auto;
			background-repeat: no-repeat;
		}
	}
	body.md {
		#header.header {
			background-image: url('/images/banner-desktop.png');
			background-position: center center;
			background-size: auto 100%;
			background-repeat: no-repeat;
		}
	}
</style>
`,tt=`<a-teleport a-id="support__header-title">
	<span class="uppercase text-2xl md:text-3xl leading-135">
		Чтобы&nbsp;поддержать Международный васюкинский турнир
	</span>
</a-teleport>
<a-teleport a-id="support__footer-title">
	<span class="uppercase text-2xl md:text-3xl leading-135">
		<span> посетите лекцию на&nbsp;тему: </span>
		<span class="text-primary"> «Плодотворная дебютная идея» </span>
	</span>
</a-teleport>

<section
	id="support"
	a-animation="from-left"
	a-animation-infinity
>
	<a-container>
		<!-- mobile -->
		<div class="md:hidden">
			<div class="grid gap-6">
				<div a-teleport-id="support__header-title"></div>
				<div class="support__image"></div>
				<div a-teleport-id="support__footer-title"></div>
			</div>
		</div>
		<!-- /mobile -->

		<!-- desktop -->
		<div class="max-md:hidden">
			<div class="grid grid-cols-12 gap-16">
				<div class="col-span-7 py-4">
					<span a-teleport-id="support__header-title"> </span>
					<span a-teleport-id="support__footer-title"> </span>
				</div>
				<div class="support__image col-span-5"></div>
			</div>
		</div>
		<!-- /desktop -->
	</a-container>
</section>

<style>
	#support {
		.support__image {
			background-image: url('/images/support.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			min-height: 210px;
		}
	}
</style>
`,et=`<section
	id="about"
	class="about"
	a-animation="from-right"
>
	<a-container class="grid grid-cols-12 gap-6">
		<div class="about__image col-span-12 md:col-span-5"></div>

		<div class="col-span-12 md:col-span-7 md:py-4">
			<div class="grid gap-10 md:gap-12">
				<div class="grid gap-11 md:gap-15">
					<div class="uppercase text-2xl md:text-3xl leading-135">
						<span> И сеанс </span>
						<span class="text-primary">
							одновременной игры в шахматы на 160 досках
						</span>
						<span> гроссмейстера О. Бендера </span>
					</div>

					<a-table>
						<div>
							<span>Место проведения:</span>
							<span>Клуб «Картонажник»</span>
						</div>

						<div>
							<span>Дата и время мероприятия:</span>
							<span>22 июня 1927 г. в 18:00</span>
						</div>

						<div>
							<span>Стоимость входных билетов:</span>
							<span>20 коп.</span>
						</div>

						<div>
							<span>Плата за игру:</span>
							<span>50 коп.</span>
						</div>

						<div>
							<span>Взнос на телеграммы:</span>
							<span>
								<span class="line-through decoration-red">100 руб.</span>
								<span>21 руб. 16 коп.</span>
							</span>
						</div>
					</a-table>
				</div>

				<div class="text-golos text-blue leading-120">
					По всем вопросам обращаться в администрацию к К. Михельсону
				</div>
			</div>
		</div>
	</a-container>
</section>

<style>
	#about.about {
		.about__image {
			background-image: url('/images/about.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			min-height: 400px;
		}
	}
</style>
`,st=`<section
	id="stages"
	a-animation="from-left"
>
	<a-container class="grid gap-5 md:gap-13">
		<!-- title -->
		<div class="grid grid-cols-12">
			<div
				class="uppercase text-3xl md:text-4xl leading-120 col-span-12 md:col-span-9 flex flex-wrap items-center gap-y-0 gap-x-2"
			>
				<span>Этапы</span>
				<span>преображения</span>
				<span>Васюков</span>
				<span
					class="normalcase text-base max-w-70 max-md:py-3 text-blue leading-120 text-golos"
				>
					Будущие источники обогащения васюкинцев
				</span>
			</div>
		</div>
		<!-- !title -->

		<div class="airplane">
			<a-stages
				a-cols='{ "xs":2, "lg": 3 }'
				a-stages-group='{ "xs":2, "md": 1 }'
			>
				<div>Строительство железнодорожной магистрали Москва-Васюки</div>
				<div>
					Открытие фешенебельной гостиницы «Проходная пешка» и других
					небоскрёбов
				</div>
				<div rows='{ "xs": 2 }'>
					Поднятие сельского хозяйства в радиусе на тысячу километров:
					производство овощей, фруктов, икры, шоколадных конфет
				</div>
				<div>Строительство дворца для турнира</div>
				<div>Размещение гаражей для гостевого автотранспорта</div>
				<div rows='{ "xs": 2, "lg": 1 }'>
					Постройка сверхмощной радиостанции для передачи всему миру
					сенсационных результатов
				</div>
				<div
					rows='{ "xs": 2, "lg": 1 }'
					cols='{ "xs": 1, "lg": 2 }'
					class="lg:pr-50"
				>
					Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых
					самолётов и дирижаблей во все концы света, включая Лос-Анжелос
					и Мельбурн
				</div>
			</a-stages>
		</div>
	</a-container>
</section>

<style>
	#stages {
		.airplane {
			position: relative;
			z-index: 0;

			&:before {
				position: absolute;
				content: '';

				z-index: 10;
				inset: 0;

				background-image: url('images/airplane.png');
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center right;
			}
		}
	}

	body:not(.md) {
		#stages {
			.airplane:before {
				top: 0;
				left: 0;
				right: 0;
				bottom: 40%;
				background-position: top right;
			}
		}
	}
	body.md {
		#stages {
			.airplane:before {
				top: -40%;
				left: 60%;
				right: -50px;
				bottom: 80%;
				background-position: center right;
			}
		}
	}
	body.lg {
		#stages {
			.airplane:before {
				top: 40%;
				left: 60%;
				right: -50px;
				bottom: 0%;
				background-position: center right;
			}
		}
	}
</style>
`,nt=`<section a-animation="from-bottom">
	<a-container
		class="bg-surface pt-20 pb-15 md:pt-10 md:pb-15 leading-120 text-secondary-400"
	>
		Все персонажи, события и цитаты являются вымышленными и не принадлежат
		создателям сайта. С подробностями можно познакомиться в главе XXXIV романа
		Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
	</a-container>
</section>
`,K1=`<section a-animation="from-bottom">
	<a-running-line
		copy="10"
		duration="30"
	>
		<span>
			Шахматы двигают вперёд не&nbsp;только культуру, но&nbsp;и&nbsp;экономику!
		</span>
		<span> Дело помощи утопающим&nbsp;— дело рук&nbsp;самих утопающих! </span>
		<span> Лёд&nbsp;тронулся, господа присяжные заседатели! </span>
	</a-running-line>
</section>
`,it=`<section
	id="participants"
	a-animation="from-right"
>
	<a-container class="participants">
		<div class="participants__title uppercase text-3xl md:text-4xl leading-120">
			Участники турнира
		</div>

		<a-slider
			a-id="participants"
			controls-variant="decimal"
			infinity
			auto-change="4"
			class="participants__slider-content"
		>
			<a-participant
				name="Хозе-Рауль Капабланка"
				title="Чемпион мира по шахматам"
				href="https://ya.ru/search/?text=%D0%A5%D0%BE%D0%B7%D0%B5-%D0%A0%D0%B0%D1%83%D0%BB%D1%8C+%D0%9A%D0%B0%D0%BF%D0%B0%D0%B1%D0%BB%D0%B0%D0%BD%D0%BA%D0%B0&lr=30"
			></a-participant>
			<a-participant
				name="Эммануил Ласкер"
				title="Чемпион мира по шахматам"
				href="https://ya.ru/search/?text=%D0%AD%D0%BC%D0%BC%D0%B0%D0%BD%D1%83%D0%B8%D0%BB+%D0%9B%D0%B0%D1%81%D0%BA%D0%B5%D1%80&lr=30"
			></a-participant>
			<a-participant
				name="Александр Алехин"
				title="Чемпион мира по шахматам"
				href="https://ya.ru/search/?text=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80+%D0%90%D0%BB%D0%B5%D1%85%D0%B8%D0%BD&lr=30"
			></a-participant>
			<a-participant
				name="Арон Нимцович"
				title="Чемпион мира по шахматам"
				href="https://ya.ru/search/?text=%D0%90%D1%80%D0%BE%D0%BD+%D0%9D%D0%B8%D0%BC%D1%86%D0%BE%D0%B2%D0%B8%D1%87&lr=30"
			></a-participant>
			<a-participant
				name="Рихард Рети"
				title="Чемпион мира по шахматам"
				href="https://ya.ru/search/?text=%D0%A0%D0%B8%D1%85%D0%B0%D1%80%D0%B4+%D0%A0%D0%B5%D1%82%D0%B8&lr=30"
			></a-participant>
			<a-participant
				name="Остап Бендер"
				title="Гроссмейстер"
				href="https://ya.ru/search/?text=%D0%9E%D1%81%D1%82%D0%B0%D0%BF+%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80&lr=30"
			></a-participant>
		</a-slider>

		<a-slider-controls
			a-id="participants"
			class="participants__slider-controls"
		></a-slider-controls>
	</a-container>
</section>

<style>
	#participants {
		.participants {
			display: grid;
			gap: 2.5rem;
			.participants__title {
				grid-area: title;
			}
			.participants__slider-controls {
				grid-area: slider-controls;
			}
			.participants__slider-content {
				grid-area: slider-content;
			}
		}
	}

	body:not(.md) {
		#participants {
			.participants {
				grid-template-areas:
					'title'
					'slider-content'
					'slider-controls';
			}
		}
	}
	body.md {
		#participants {
			.participants {
				grid-template-areas:
					'title title title slider-controls'
					'slider-content slider-content slider-content slider-content';
			}
			.participants__slider-controls {
				justify-items: center;
				align-items: center;
				align-content: center;
			}
		}
	}
</style>
`,at=n=>{var e;(e=document.querySelector(n))==null||e.scrollIntoView({behavior:"smooth",block:"start"})},rt=()=>{$.emit("scroll-to",at)},ot={spin:"animate-spin",bounce:"animate-bounce",pulse:"animate-pulse",ping:"animate-ping","from-left":"animate-from-left","from-right":"animate-from-right","from-bottom":"animate-from-bottom","from-top":"animate-from-top"},dt=()=>{document.querySelectorAll("[a-animation]").forEach(n=>{n.classList.add("invisible");const e={name:A2(n,"a-animation","pulse"),infinity:e2(n,"a-animation-infinity")};new IntersectionObserver((t,i)=>{t[0].isIntersecting&&(n.classList.remove("invisible"),n.classList.add(ot[e.name]),i.unobserve(n))},{threshold:.25}).observe(n)})};F2().use(U2).use(rt).use(dt).template(G1("div",null,x())).template(G1("div",{id:"main",class:"bg-white text-black text-merriweather"},[Y2,K1,Z("h-14 md:h-24"),tt,Z("h-6 md:h-16"),et,Z("h-30 md:h-50"),st,Z("h-30 md:h-50"),it,Z("h-25 md:h-35"),K1,nt])).mount("#app");
