import{o as t,c as a,k as m,u as y,g as l,h as P,j as b,W as p,I as v,t as i,e as h}from"./framework.N5iwQ_lR.js";import{_ as x}from"./person16.A-lUwJ30.js";const V={style:{display:"inline-block"},viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},w=m("path",{fill:"currentColor","fill-rule":"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75z"},null,-1),D=[w];function E(f,n){return t(),a("svg",V,[...D])}const z={name:"octicon-clock16",render:E},B=JSON.parse("{}"),I={class:"flex gap-4",style:{"margin-top":"1.5rem"}},L={key:0,class:"flex gap-2",style:{opacity:"50%"},title:"author"},N=["href"],T={key:1},$={key:1,class:"flex gap-2",style:{opacity:"50%"},title:"Publish time"},O={__name:"articleInformation",setup(f){const{page:n}=y(),o=l(()=>n.value.frontmatter),s=P([]);console.log(n,B);const c=l(()=>s.value.find(e=>e.docPath===n.value.relativePath)),r=l(()=>{var e;return o.value.author||((e=c.value)==null?void 0:e.author)}),_=l(()=>{var e,u;return(e=c.value)!=null&&e.publishTime?new Date((u=c.value)==null?void 0:u.publishTime).toLocaleString():null}),d=l(()=>o.value.link?o.value.link:o.value.username?`https://github.com/${o.value.username}`:null);return b(async()=>{localePath.value==="/dry-lab/"?s.value=(await p(()=>import("./index.cB1roiMX.js"),__vite__mapDeps([]))).default:localePath.value==="/dry-lab/zh-cn/"&&(s.value=(await p(()=>import("./index.gPIKUiRL.js"),__vite__mapDeps([]))).default)}),(e,u)=>{const g=x,k=z;return t(),a("div",I,[r.value?(t(),a("div",L,[v(g),d.value?(t(),a("a",{key:0,class:"doc-link",href:d.value,target:"_blank"},i(r.value),9,N)):(t(),a("span",T,i(r.value),1))])):h("",!0),_.value?(t(),a("div",$,[v(k),m("span",null,i(_.value),1)])):h("",!0)])}}};export{O as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}