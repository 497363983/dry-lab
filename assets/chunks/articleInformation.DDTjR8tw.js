import{o as t,c as a,a as h,u as k,j as l,s as P,y as b,W as v,I as p,t as r,f as m}from"./framework.Gpj11Xjj.js";import{_ as w}from"./theme.CJ-JwlvT.js";const x={style:{display:"inline-block"},viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},V=h("path",{fill:"currentColor","fill-rule":"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75z"},null,-1),D=[V];function E(f,n){return t(),a("svg",x,[...D])}const z={name:"octicon-clock16",render:E},B=JSON.parse("{}"),I={class:"flex gap-4",style:{"margin-top":"1.5rem"}},L={key:0,class:"flex gap-2",style:{opacity:"50%"},title:"author"},N=["href"],T={key:1},$={key:1,class:"flex gap-2",style:{opacity:"50%"},title:"Publish time"},O={__name:"articleInformation",setup(f){const{page:n}=k(),o=l(()=>n.value.frontmatter),s=P([]);console.log(n,B);const c=l(()=>s.value.find(e=>e.docPath===n.value.relativePath)),u=l(()=>{var e;return o.value.author||((e=c.value)==null?void 0:e.author)}),i=l(()=>{var e,_;return(e=c.value)!=null&&e.publishTime?new Date((_=c.value)==null?void 0:_.publishTime).toLocaleString():null}),d=l(()=>o.value.link?o.value.link:o.value.username?`https://github.com/${o.value.username}`:null);return b(async()=>{localePath.value==="/dry-lab/"?s.value=(await v(async()=>{const{default:e}=await import("./index.BoN3XHMs.js");return{default:e}},[])).default:localePath.value==="/dry-lab/zh-cn/"&&(s.value=(await v(async()=>{const{default:e}=await import("./index.BZDRrFKy.js");return{default:e}},[])).default)}),(e,_)=>{const y=w,g=z;return t(),a("div",I,[u.value?(t(),a("div",L,[p(y),d.value?(t(),a("a",{key:0,class:"doc-link",href:d.value,target:"_blank"},r(u.value),9,N)):(t(),a("span",T,r(u.value),1))])):m("",!0),i.value?(t(),a("div",$,[p(g),h("span",null,r(i.value),1)])):m("",!0)])}}};export{O as _};
