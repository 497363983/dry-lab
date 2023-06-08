import{p as Q,d as B,s as X,D as H,a as Z,S as j,b as F,c as I}from"./styles-29b137c7.d7dff016.js";import{G as tt}from"./layout-db328a38.32861599.js";import{l,c as g,h as x,v as et,i as ot,j as w}from"../app.401822a4.js";import{r as st}from"./index-714fe675.c8feef48.js";import"./framework.ef367be7.js";import"./theme.2cd50a65.js";import"./person16.78d49157.js";import"./edges-e08b4480.fdecae92.js";import"./createText-d34e51c6.eb90a0c9.js";import"./svgDraw-591e3474.33c72f9e.js";import"./line-9ed8ba8b.ecb864f8.js";import"./array-b7dcf730.9f3ba611.js";import"./constant-b644328d.6af51708.js";const A="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,U="transition",St="note",pt="note-edge",Tt=`${U} ${pt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,ft="cluster-alt",bt=`${_}-${ft}`,V="parent",Y="note",ht="state",N="----",At=`${N}${Y}`,M=`${N}${V}`,W="fill:none",m="fill: #333",z="c",q="text",K="normal";let y={},E=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){l.trace("Extracting classes"),n.db.clear();try{return n.parser.parse(t),n.db.extract(n.db.getRootDocV2()),n.db.getClasses()}catch(e){return e}};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${ht}-${t}${i}-${n}`}const h=(t,n,e,c,i,r)=>{const o=e.id,u=$t(c[o]);if(o!=="root"){let p=A;e.start===!0&&(p=nt),e.start===!1&&(p=ct),e.type!==H&&(p=e.type),y[o]||(y[o]={id:o,shape:p,description:w.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=A,s.description=e.description),s.description=w.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=A),!s.type&&e.doc&&(l.info("Setting cluster for ",o,G(e)),s.type="group",s.dir=G(e),s.shape=e.type===Z?it:rt,s.classes=s.classes+" "+Dt+" "+(r?bt:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,E),type:s.type,padding:15};if(T.centerLabel=!0,e.note){const a={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:o+At+"-"+E,domId:R(o,E,Y),type:s.type,padding:15},d={labelStyle:"",shape:at,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,E,V),type:"group",padding:0};E++;const D=o+M;t.setNode(D,d),t.setNode(a.id,a),t.setNode(o,T),t.setParent(o,D),t.setParent(a.id,D);let S=o,f=a.id;e.note.position==="left of"&&(S=a.id,f=o),t.setEdge(S,f,{arrowhead:"none",arrowType:"",style:W,labelStyle:"",classes:Tt,arrowheadStyle:m,labelpos:z,labelType:q,thickness:K})}else t.setNode(o,T)}n&&n.id!=="root"&&(l.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(l.trace("Adding nodes children "),xt(t,e,e.doc,c,i,!r))},xt=(t,n,e,c,i,r)=>{l.trace("items",e),e.forEach(o=>{switch(o.stmt){case F:h(t,n,o,c,i,r);break;case H:h(t,n,o,c,i,r);break;case j:{h(t,n,o.state1,c,i,r),h(t,n,o.state2,c,i,r);const u={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:W,labelStyle:"",label:w.sanitizeText(o.description,g()),arrowheadStyle:m,labelpos:z,labelType:q,thickness:K,classes:U};t.setEdge(o.state1.id,o.state2.id,u,E),E++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=async function(t,n,e,c){l.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),l.info(c.db.getRootDocV2());const p=c.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(c.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});h(s,void 0,c.db.getRootDocV2(),p,c.db,!0);let T;i==="sandbox"&&(T=x("#i"+n));const a=i==="sandbox"?x(T.nodes()[0].contentDocument.body):x("body"),d=a.select(`[id="${n}"]`),D=a.select("#"+n+" g");await st(D,s,["barb"],_,n);const S=8;et.insertTitle(d,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const f=d.node().getBBox(),L=f.width+S*2,P=f.height+S*2;d.attr("class",_);const v=d.node().getBBox();ot(d,P,L,r.useMaxWidth);const k=`${v.x-S} ${v.y-S} ${L} ${P}`;l.debug(`viewBox ${k}`),d.attr("viewBox",k);const J=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of J){const O=$.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",A);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",O.width),b.setAttribute("height",O.height),$.insertBefore(b,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Yt={parser:Q,db:B,renderer:Rt,styles:X,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Yt as diagram};
