import{o as a,c as o,x as f,u as b,e as s,f as P,h as x,E as h,b as t,C as m,t as u,A as v}from"./framework.ef367be7.js";import{_ as E}from"./person16.0f7204c1.js";const w={style:{display:"inline-block"},viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},A=f("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0"},null,-1),D=[A];function V(g,l){return a(),o("svg",w,D)}const B={name:"octicon-clock16",render:V},N=JSON.parse("{}"),T={class:"flex gap-4",style:{"margin-top":"1.5rem"}},$={key:0,class:"flex gap-2",style:{opacity:"50%"},title:"author"},C=["href"],I={key:1},L={key:1,class:"flex gap-2",style:{opacity:"50%"},title:"Publish time"},S={__name:"articleInformation",setup(g){const{page:l}=b(),n=s(()=>l.value.frontmatter),c=P([]);console.log(l,N);const r=s(()=>c.value.find(e=>e.docPath===l.value.relativePath)),i=s(()=>{var e;return n.value.author||((e=r.value)==null?void 0:e.author)}),p=s(()=>{var e,_;return(e=r.value)!=null&&e.publishTime?new Date((_=r.value)==null?void 0:_.publishTime).toLocaleString():null}),d=s(()=>n.value.link?n.value.link:n.value.username?`https://github.com/${n.value.username}`:null);return x(async()=>{localePath.value==="/dry-lab/"?c.value=(await h(()=>import("./index.76b776be.js"),[])).default:localePath.value==="/dry-lab/zh-cn/"&&(c.value=(await h(()=>import("./index.598ab6eb.js"),[])).default)}),(e,_)=>{const y=E,k=B;return a(),o("div",T,[t(i)?(a(),o("div",$,[m(y),t(d)?(a(),o("a",{key:0,class:"doc-link",href:t(d),target:"_blank"},u(t(i)),9,C)):(a(),o("span",I,u(t(i)),1))])):v("",!0),t(p)?(a(),o("div",L,[m(k),f("span",null,u(t(p)),1)])):v("",!0)])}}};export{S as _};
