(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4336:function(e,t,n){Promise.resolve().then(n.t.bind(n,1034,23)),Promise.resolve().then(n.bind(n,8126)),Promise.resolve().then(n.t.bind(n,3054,23))},8126:function(e,t,n){"use strict";let o;n.d(t,{ThemeSwitcher:function(){return h}});var a=n(7437),s=n(2887),r=n.n(s),l=n(2265);let c="nextjs-blog-starter-theme",i=["system","dark","light"],d=e=>{let[t,n,o]=["system","dark","light"],a=()=>{let e=document.createElement("style");return e.textContent="*,*:after,*:before{transition:none !important;}",document.head.appendChild(e),()=>{getComputedStyle(document.body),setTimeout(()=>document.head.removeChild(e),1)}},s=matchMedia("(prefers-color-scheme: ".concat(n,")"));window.updateDOM=()=>{var r;let l=a(),c=null!==(r=localStorage.getItem(e))&&void 0!==r?r:t,i=s.matches?n:o,d=c===t?i:c,u=document.documentElement.classList;d===n?u.add(n):u.remove(n),document.documentElement.setAttribute("data-mode",c),l()},window.updateDOM(),s.addEventListener("change",window.updateDOM)},u=()=>{let[e,t]=(0,l.useState)(()=>{var e;return null!==(e="undefined"!=typeof localStorage&&localStorage.getItem(c))&&void 0!==e?e:"system"});return(0,l.useEffect)(()=>{o=window.updateDOM,addEventListener("storage",e=>{e.key===c&&t(e.newValue)})},[]),(0,l.useEffect)(()=>{localStorage.setItem(c,e),o()},[e]),(0,a.jsx)("button",{suppressHydrationWarning:!0,className:r().switch,onClick:()=>{let n=i.indexOf(e);t(i[(n+1)%i.length])}})},m=(0,l.memo)(()=>(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(".concat(d.toString(),")('").concat(c,"')")}})),h=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{}),(0,a.jsx)(u,{})]})},3054:function(){},2887:function(e){e.exports={switch:"switch_switch__v3CFJ",n:"switch_n__Jl1Sp"}},1034:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[867,971,23,744],function(){return e(e.s=4336)}),_N_E=e.O()}]);