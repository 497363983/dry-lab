import{aO as bt,aP as vt,U as kt,v as wt,C as I,B as Q,P as St,aQ as Et,aR as Tt,aS as It,aI as it}from"../app.72c6b1ee.js";var D=function(){var n=function(_,r,a,h){for(a=a||{},h=_.length;h--;a[_[h]]=r);return a},t=[1,2],e=[1,5],s=[6,9,11,17,18,20,22,23,26,27,28],i=[1,15],o=[1,16],l=[1,17],y=[1,18],d=[1,19],p=[1,23],m=[1,24],S=[1,27],w=[4,6,9,11,17,18,20,22,23,26,27,28],x={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(r,a,h,u,g,c,T){var f=c.length-1;switch(g){case 1:return c[f-1];case 3:this.$=[];break;case 4:c[f-1].push(c[f]),this.$=c[f-1];break;case 5:case 6:this.$=c[f];break;case 7:case 8:this.$=[];break;case 11:u.getCommonDb().setDiagramTitle(c[f].substr(6)),this.$=c[f].substr(6);break;case 12:this.$=c[f].trim(),u.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=c[f].trim(),u.getCommonDb().setAccDescription(this.$);break;case 15:u.addSection(c[f].substr(8)),this.$=c[f].substr(8);break;case 19:u.addTask(c[f],0,""),this.$=c[f];break;case 20:u.addEvent(c[f].substr(2)),this.$=c[f];break;case 21:u.parseDirective("%%{","open_directive");break;case 22:u.parseDirective(c[f],"type_directive");break;case 23:c[f]=c[f].trim().replace(/'/g,'"'),u.parseDirective(c[f],"arg_directive");break;case 24:u.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},n(s,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:o,20:l,22:y,23:d,24:20,25:21,26:p,27:m,28:e},{1:[2,2]},{14:25,15:[1,26],31:S},n([15,31],[2,22]),n(s,[2,8],{1:[2,1]}),n(s,[2,4]),{7:22,10:28,12:4,17:i,18:o,20:l,22:y,23:d,24:20,25:21,26:p,27:m,28:e},n(s,[2,6]),n(s,[2,7]),n(s,[2,11]),{19:[1,29]},{21:[1,30]},n(s,[2,14]),n(s,[2,15]),n(s,[2,16]),n(s,[2,17]),n(s,[2,18]),n(s,[2,19]),n(s,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},n(s,[2,5]),n(s,[2,12]),n(s,[2,13]),n(w,[2,9]),{14:34,31:S},{31:[2,23]},{11:[1,35]},n(w,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(r,a){if(a.recoverable)this.trace(r);else{var h=new Error(r);throw h.hash=a,h}},parse:function(r){var a=this,h=[0],u=[],g=[null],c=[],T=this.table,f="",A=0,z=0,j=2,X=1,U=c.slice.call(arguments,1),b=Object.create(this.lexer),L={yy:{}};for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy,P)&&(L.yy[P]=this.yy[P]);b.setInput(r,L.yy),L.yy.lexer=b,L.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var k=b.yylloc;c.push(k);var H=b.options&&b.options.ranges;typeof L.yy.parseError=="function"?this.parseError=L.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function R(){var V;return V=u.pop()||b.lex()||X,typeof V!="number"&&(V instanceof Array&&(u=V,V=u.pop()),V=a.symbols_[V]||V),V}for(var v,N,$,G,W={},q,C,nt,Z;;){if(N=h[h.length-1],this.defaultActions[N]?$=this.defaultActions[N]:((v===null||typeof v>"u")&&(v=R()),$=T[N]&&T[N][v]),typeof $>"u"||!$.length||!$[0]){var Y="";Z=[];for(q in T[N])this.terminals_[q]&&q>j&&Z.push("'"+this.terminals_[q]+"'");b.showPosition?Y="Parse error on line "+(A+1)+`:
`+b.showPosition()+`
Expecting `+Z.join(", ")+", got '"+(this.terminals_[v]||v)+"'":Y="Parse error on line "+(A+1)+": Unexpected "+(v==X?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(Y,{text:b.match,token:this.terminals_[v]||v,line:b.yylineno,loc:k,expected:Z})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+N+", token: "+v);switch($[0]){case 1:h.push(v),g.push(b.yytext),c.push(b.yylloc),h.push($[1]),v=null,z=b.yyleng,f=b.yytext,A=b.yylineno,k=b.yylloc;break;case 2:if(C=this.productions_[$[1]][1],W.$=g[g.length-C],W._$={first_line:c[c.length-(C||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(C||1)].first_column,last_column:c[c.length-1].last_column},H&&(W._$.range=[c[c.length-(C||1)].range[0],c[c.length-1].range[1]]),G=this.performAction.apply(W,[f,z,A,L.yy,$[1],g,c].concat(U)),typeof G<"u")return G;C&&(h=h.slice(0,-1*C*2),g=g.slice(0,-1*C),c=c.slice(0,-1*C)),h.push(this.productions_[$[1]][0]),g.push(W.$),c.push(W._$),nt=T[h[h.length-2]][h[h.length-1]],h.push(nt);break;case 3:return!0}}return!0}},E=function(){var _={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var a=r.length,h=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},test_match:function(r,a){var h,u,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var c in g)this[c]=g[c];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,h,u;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),c=0;c<g.length;c++)if(h=this._input.match(this.rules[g[c]]),h&&(!a||h[0].length>a[0].length)){if(a=h,u=c,this.options.backtrack_lexer){if(r=this.test_match(h,g[c]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,g[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,u,g){switch(u){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return _}();x.lexer=E;function M(){this.yy={}}return M.prototype=x,x.Parser=M,new M}();D.parser=D;const Nt=D;let B="",ct=0;const tt=[],J=[],O=[],lt=()=>bt,ot=(n,t,e)=>{vt(globalThis,n,t,e)},ht=function(){tt.length=0,J.length=0,B="",O.length=0,kt()},dt=function(n){B=n,tt.push(n)},ut=function(){return tt},pt=function(){let n=st();const t=100;let e=0;for(;!n&&e<t;)n=st(),e++;return J.push(...O),J},yt=function(n,t,e){const s={id:ct++,section:B,type:B,task:n,score:t||0,events:e?[e]:[]};O.push(s)},gt=function(n){O.find(e=>e.id===ct-1).events.push(n)},ft=function(n){const t={section:B,type:B,description:n,task:n,classes:[]};J.push(t)},st=function(){const n=function(e){return O[e].processed};let t=!0;for(const[e,s]of O.entries())n(e),t=t&&s.processed;return t},$t={clear:ht,getCommonDb:lt,addSection:dt,getSections:ut,getTasks:pt,addTask:yt,addTaskOrg:ft,addEvent:gt,parseDirective:ot},Mt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:gt,addSection:dt,addTask:yt,addTaskOrg:ft,clear:ht,default:$t,getCommonDb:lt,getSections:ut,getTasks:pt,parseDirective:ot},Symbol.toStringTag,{value:"Module"})),Lt=12,K=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},Pt=function(n,t){const s=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=n.append("g");i.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function o(d){const p=it().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(d){const p=it().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function y(d){d.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?o(i):t.score<3?l(i):y(i),s},At=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},mt=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),s=n.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);const i=s.append("tspan");return i.attr("x",t.x+t.textMargin*2),i.text(e),s},Ht=function(n,t){function e(i,o,l,y,d){return i+","+o+" "+(i+l)+","+o+" "+(i+l)+","+(o+y-d)+" "+(i+l-d*1.2)+","+(o+y)+" "+i+","+(o+y)}const s=n.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,mt(n,t)},Ct=function(n,t,e){const s=n.append("g"),i=et();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=e.width,i.height=e.height,i.class="journey-section section-type-"+t.num,i.rx=3,i.ry=3,K(s,i),xt(e)(t.text,s,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let rt=-1;const Vt=function(n,t,e){const s=t.x+e.width/2,i=n.append("g");rt++;const o=300+5*30;i.append("line").attr("id","task"+rt).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",o).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Pt(i,{cx:s,cy:300+(5-t.score)*30,score:t.score});const l=et();l.x=t.x,l.y=t.y,l.fill=t.fill,l.width=e.width,l.height=e.height,l.class="task task-type-"+t.num,l.rx=3,l.ry=3,K(i,l),t.x+14,xt(e)(t.task,i,l.x,l.y,l.width,l.height,{class:"task"},e,t.colour)},zt=function(n,t){K(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Rt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},et=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},xt=function(){function n(i,o,l,y,d,p,m,S){const w=o.append("text").attr("x",l+d/2).attr("y",y+p/2+5).style("font-color",S).style("text-anchor","middle").text(i);s(w,m)}function t(i,o,l,y,d,p,m,S,w){const{taskFontSize:x,taskFontFamily:E}=S,M=i.split(/<br\s*\/?>/gi);for(let _=0;_<M.length;_++){const r=_*x-x*(M.length-1)/2,a=o.append("text").attr("x",l+d/2).attr("y",y).attr("fill",w).style("text-anchor","middle").style("font-size",x).style("font-family",E);a.append("tspan").attr("x",l+d/2).attr("dy",r).text(M[_]),a.attr("y",y+p/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(a,m)}}function e(i,o,l,y,d,p,m,S){const w=o.append("switch"),E=w.append("foreignObject").attr("x",l).attr("y",y).attr("width",d).attr("height",p).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");E.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),t(i,w,l,y,d,p,m,S),s(E,m)}function s(i,o){for(const l in o)l in o&&i.attr(l,o[l])}return function(i){return i.textPlacement==="fo"?e:i.textPlacement==="old"?n:t}}(),Ft=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function _t(n,t){n.each(function(){var e=Q(this),s=e.text().split(/(\s+|<br>)/).reverse(),i,o=[],l=1.1,y=e.attr("y"),d=parseFloat(e.attr("dy")),p=e.text(null).append("tspan").attr("x",0).attr("y",y).attr("dy",d+"em");for(let m=0;m<s.length;m++)i=s[s.length-1-m],o.push(i),p.text(o.join(" ").trim()),(p.node().getComputedTextLength()>t||i==="<br>")&&(o.pop(),p.text(o.join(" ").trim()),i==="<br>"?o=[""]:o=[i],p=e.append("tspan").attr("x",0).attr("y",y).attr("dy",l+"em").text(i))})}const Wt=function(n,t,e,s){const i=e%Lt-1,o=n.append("g");t.section=i,o.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+i));const l=o.append("g"),y=o.append("g"),p=y.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(_t,t.width).node().getBBox(),m=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=p.height+m*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,y.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ot(l,t,i),t},Bt=function(n,t,e){const s=n.append("g"),o=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(_t,t.width).node().getBBox(),l=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),o.height+l*1.1*.5+t.padding},Ot=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},F={drawRect:K,drawCircle:At,drawSection:Ct,drawText:mt,drawLabel:Ht,drawTask:Vt,drawBackgroundRect:zt,getTextObj:Rt,getNoteRect:et,initGraphics:Ft,drawNode:Wt,getVirtualNodeHeight:Bt},jt=function(n,t,e,s){var U,b,L;var i,o,l,y;const d=wt(),p=(U=d.leftMargin)!=null?U:50;(o=(i=s.db).clear)==null||o.call(i),s.parser.parse(n+`
`),I.debug("timeline",s.db);const m=d.securityLevel;let S;m==="sandbox"&&(S=Q("#i"+t));const x=(m==="sandbox"?Q(S.nodes()[0].contentDocument.body):Q("body")).select("#"+t);x.append("g");const E=s.db.getTasks(),M=s.db.getCommonDb().getDiagramTitle();I.debug("task",E),F.initGraphics(x);const _=s.db.getSections();I.debug("sections",_);let r=0,a=0,h=0,u=0,g=50+p,c=50;u=50;let T=0,f=!0;_.forEach(function(P){const k={number:T,descr:P,section:T,width:150,padding:20,maxHeight:r},H=F.getVirtualNodeHeight(x,k,d);I.debug("sectionHeight before draw",H),r=Math.max(r,H+20)});let A=0,z=0;I.debug("tasks.length",E.length);for(const[P,k]of E.entries()){const H={number:P,descr:k,section:k.section,width:150,padding:20,maxHeight:a},R=F.getVirtualNodeHeight(x,H,d);I.debug("taskHeight before draw",R),a=Math.max(a,R+20),A=Math.max(A,k.events.length);let v=0;for(let N=0;N<k.events.length;N++){const G={descr:k.events[N],section:k.section,number:k.section,width:150,padding:20,maxHeight:50};v+=F.getVirtualNodeHeight(x,G,d)}z=Math.max(z,v)}I.debug("maxSectionHeight before draw",r),I.debug("maxTaskHeight before draw",a),_&&_.length>0?_.forEach(P=>{const k=E.filter(N=>N.section===P),H={number:T,descr:P,section:T,width:200*Math.max(k.length,1)-50,padding:20,maxHeight:r};I.debug("sectionNode",H);const R=x.append("g"),v=F.drawNode(R,H,T,d);I.debug("sectionNode output",v),R.attr("transform",`translate(${g}, ${u})`),c+=r+50,k.length>0&&at(x,k,T,g,c,a,d,A,z,r,!1),g+=200*Math.max(k.length,1),c=u,T++}):(f=!1,at(x,E,T,g,c,a,d,A,z,r,!0));const j=x.node().getBBox();I.debug("bounds",j),M&&x.append("text").text(M).attr("x",j.width/2-p).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),h=f?r+a+150:a+100,x.append("g").attr("class","lineWrapper").append("line").attr("x1",p).attr("y1",h).attr("x2",j.width+3*p).attr("y2",h).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),St(void 0,x,(b=(l=d.timeline)==null?void 0:l.padding)!=null?b:50,(L=(y=d.timeline)==null?void 0:y.useMaxWidth)!=null?L:!1)},at=function(n,t,e,s,i,o,l,y,d,p,m){var S;for(const w of t){const x={descr:w.task,section:e,number:e,width:150,padding:20,maxHeight:o};I.debug("taskNode",x);const E=n.append("g").attr("class","taskWrapper"),_=F.drawNode(E,x,e,l).height;if(I.debug("taskHeight after draw",_),E.attr("transform",`translate(${s}, ${i})`),o=Math.max(o,_),w.events){const r=n.append("g").attr("class","lineWrapper");let a=o;i+=100,a=a+Gt(n,w.events,e,s,i,l),i-=100,r.append("line").attr("x1",s+190/2).attr("y1",i+o).attr("x2",s+190/2).attr("y2",i+o+(m?o:p)+d+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,m&&!((S=l.timeline)!=null&&S.disableMulticolor)&&e++}i=i-10},Gt=function(n,t,e,s,i,o){let l=0;const y=i;i=i+100;for(const d of t){const p={descr:d,section:e,number:e,width:150,padding:20,maxHeight:50};I.debug("eventNode",p);const m=n.append("g").attr("class","eventWrapper"),w=F.drawNode(m,p,e,o).height;l=l+w,m.attr("transform",`translate(${s}, ${i})`),i=i+10+w}return i=y,l},Ut={setConf:()=>{},draw:jt},qt=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],Et(n["lineColor"+e])?n["lineColor"+e]=Tt(n["lineColor"+e],20):n["lineColor"+e]=It(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Zt=n=>`
  .edge {
    stroke-width: 3;
  }
  ${qt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Qt=Zt,Kt={db:Mt,renderer:Ut,parser:Nt,styles:Qt};export{Kt as diagram};
