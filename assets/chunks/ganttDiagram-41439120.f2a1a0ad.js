import{ar as Tt,as as X,v as st,s as Ht,m as qt,R as Qt,S as Jt,q as Kt,p as $t,y as te,U as ee,E as ie,C as gt,B as ft,at as se,au as ne,av as re,D as ae,aw as ce,ax as oe,ay as le,az as At,aA as Mt,aB as Lt,aC as It,aD as Yt,aE as Ft,aF as ue,G as fe,T as de}from"../app.72c6b1ee.js";var Ot={exports:{}};(function(t,u){(function(s,i){t.exports=i()})(Tt,function(){var s="day";return function(i,r,h){var m=function(T){return T.add(4-T.isoWeekday(),s)},y=r.prototype;y.isoWeekYear=function(){return m(this).year()},y.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),s);var F,I,Y,_,P=m(this),g=(F=this.isoWeekYear(),I=this.$u,Y=(I?h.utc:h)().year(F).startOf("year"),_=4-Y.isoWeekday(),Y.isoWeekday()>4&&(_+=7),Y.add(_,s));return P.diff(g,"week")+1},y.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var L=y.startOf;y.startOf=function(T,F){var I=this.$utils(),Y=!!I.u(F)||F;return I.p(T)==="isoweek"?Y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):L.bind(this)(T,F)}}})})(Ot);const he=Ot.exports;var Vt={exports:{}};(function(t,u){(function(s,i){t.exports=i()})(Tt,function(){var s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,h=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,y={},L=function(g){return(g=+g)+(g>68?1900:2e3)},T=function(g){return function(D){this[g]=+D}},F=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var S=D.match(/([+-]|\d\d)/g),E=60*S[1]+(+S[2]||0);return E===0?0:S[0]==="+"?-E:E}(g)}],I=function(g){var D=y[g];return D&&(D.indexOf?D:D.s.concat(D.f))},Y=function(g,D){var S,E=y.meridiem;if(E){for(var R=1;R<=24;R+=1)if(g.indexOf(E(R,0,D))>-1){S=R>12;break}}else S=g===(D?"pm":"PM");return S},_={A:[m,function(g){this.afternoon=Y(g,!1)}],a:[m,function(g){this.afternoon=Y(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[r,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[h,T("seconds")],ss:[h,T("seconds")],m:[h,T("minutes")],mm:[h,T("minutes")],H:[h,T("hours")],h:[h,T("hours")],HH:[h,T("hours")],hh:[h,T("hours")],D:[h,T("day")],DD:[r,T("day")],Do:[m,function(g){var D=y.ordinal,S=g.match(/\d+/);if(this.day=S[0],D)for(var E=1;E<=31;E+=1)D(E).replace(/\[|\]/g,"")===g&&(this.day=E)}],M:[h,T("month")],MM:[r,T("month")],MMM:[m,function(g){var D=I("months"),S=(I("monthsShort")||D.map(function(E){return E.slice(0,3)})).indexOf(g)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[m,function(g){var D=I("months").indexOf(g)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,T("year")],YY:[r,function(g){this.year=L(g)}],YYYY:[/\d{4}/,T("year")],Z:F,ZZ:F};function P(g){var D,S;D=g,S=y&&y.formats;for(var E=(g=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(f,a,o){var c=o&&o.toUpperCase();return a||S[o]||s[o]||S[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(d,e,x){return e||x.slice(1)})})).match(i),R=E.length,G=0;G<R;G+=1){var j=E[G],Z=_[j],N=Z&&Z[0],z=Z&&Z[1];E[G]=z?{regex:N,parser:z}:j.replace(/^\[|\]$/g,"")}return function(f){for(var a={},o=0,c=0;o<R;o+=1){var d=E[o];if(typeof d=="string")c+=d.length;else{var e=d.regex,x=d.parser,n=f.slice(c),p=e.exec(n)[0];x.call(a,p),f=f.replace(p,"")}}return function(M){var O=M.afternoon;if(O!==void 0){var l=M.hours;O?l<12&&(M.hours+=12):l===12&&(M.hours=0),delete M.afternoon}}(a),a}}return function(g,D,S){S.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(L=g.parseTwoDigitYear);var E=D.prototype,R=E.parse;E.parse=function(G){var j=G.date,Z=G.utc,N=G.args;this.$u=Z;var z=N[1];if(typeof z=="string"){var f=N[2]===!0,a=N[3]===!0,o=f||a,c=N[2];a&&(c=N[2]),y=this.$locale(),!f&&c&&(y=S.Ls[c]),this.$d=function(n,p,M){try{if(["x","X"].indexOf(p)>-1)return new Date((p==="X"?1e3:1)*n);var O=P(p)(n),l=O.year,v=O.month,k=O.day,C=O.hours,A=O.minutes,b=O.seconds,w=O.milliseconds,et=O.zone,V=new Date,H=k||(l||v?1:V.getDate()),B=l||V.getFullYear(),$=0;l&&!v||($=v>0?v-1:V.getMonth());var q=C||0,tt=A||0,U=b||0,it=w||0;return et?new Date(Date.UTC(B,$,H,q,tt,U,it+60*et.offset*1e3)):M?new Date(Date.UTC(B,$,H,q,tt,U,it)):new Date(B,$,H,q,tt,U,it)}catch{return new Date("")}}(j,z,Z),this.init(),c&&c!==!0&&(this.$L=this.locale(c).$L),o&&j!=this.format(z)&&(this.$d=new Date("")),y={}}else if(z instanceof Array)for(var d=z.length,e=1;e<=d;e+=1){N[1]=z[e-1];var x=S.apply(this,N);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}e===d&&(this.$d=new Date(""))}else R.call(this,G)}}})})(Vt);const me=Vt.exports;var Wt={exports:{}};(function(t,u){(function(s,i){t.exports=i()})(Tt,function(){return function(s,i){var r=i.prototype,h=r.format;r.format=function(m){var y=this,L=this.$locale();if(!this.isValid())return h.bind(this)(m);var T=this.$utils(),F=(m||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(I){switch(I){case"Q":return Math.ceil((y.$M+1)/3);case"Do":return L.ordinal(y.$D);case"gggg":return y.weekYear();case"GGGG":return y.isoWeekYear();case"wo":return L.ordinal(y.week(),"W");case"w":case"ww":return T.s(y.week(),I==="w"?1:2,"0");case"W":case"WW":return T.s(y.isoWeek(),I==="W"?1:2,"0");case"k":case"kk":return T.s(String(y.$H===0?24:y.$H),I==="k"?1:2,"0");case"X":return Math.floor(y.$d.getTime()/1e3);case"x":return y.$d.getTime();case"z":return"["+y.offsetName()+"]";case"zzz":return"["+y.offsetName("long")+"]";default:return I}});return h.bind(this)(F)}}})})(Wt);const ke=Wt.exports;var yt=function(){var t=function(z,f,a,o){for(a=a||{},o=z.length;o--;a[z[o]]=f);return a},u=[1,3],s=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],r=[1,15],h=[1,16],m=[1,17],y=[1,18],L=[1,19],T=[1,20],F=[1,21],I=[1,22],Y=[1,23],_=[1,24],P=[1,25],g=[1,26],D=[1,27],S=[1,29],E=[1,31],R=[1,34],G=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],j={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(f,a,o,c,d,e,x){var n=e.length-1;switch(d){case 2:return e[n-1];case 3:this.$=[];break;case 4:e[n-1].push(e[n]),this.$=e[n-1];break;case 5:case 6:this.$=e[n];break;case 7:case 8:this.$=[];break;case 9:c.setDateFormat(e[n].substr(11)),this.$=e[n].substr(11);break;case 10:c.enableInclusiveEndDates(),this.$=e[n].substr(18);break;case 11:c.TopAxis(),this.$=e[n].substr(8);break;case 12:c.setAxisFormat(e[n].substr(11)),this.$=e[n].substr(11);break;case 13:c.setTickInterval(e[n].substr(13)),this.$=e[n].substr(13);break;case 14:c.setExcludes(e[n].substr(9)),this.$=e[n].substr(9);break;case 15:c.setIncludes(e[n].substr(9)),this.$=e[n].substr(9);break;case 16:c.setTodayMarker(e[n].substr(12)),this.$=e[n].substr(12);break;case 17:c.setDiagramTitle(e[n].substr(6)),this.$=e[n].substr(6);break;case 18:this.$=e[n].trim(),c.setAccTitle(this.$);break;case 19:case 20:this.$=e[n].trim(),c.setAccDescription(this.$);break;case 21:c.addSection(e[n].substr(8)),this.$=e[n].substr(8);break;case 23:c.addTask(e[n-1],e[n]),this.$="task";break;case 27:this.$=e[n-1],c.setClickEvent(e[n-1],e[n],null);break;case 28:this.$=e[n-2],c.setClickEvent(e[n-2],e[n-1],e[n]);break;case 29:this.$=e[n-2],c.setClickEvent(e[n-2],e[n-1],null),c.setLink(e[n-2],e[n]);break;case 30:this.$=e[n-3],c.setClickEvent(e[n-3],e[n-2],e[n-1]),c.setLink(e[n-3],e[n]);break;case 31:this.$=e[n-2],c.setClickEvent(e[n-2],e[n],null),c.setLink(e[n-2],e[n-1]);break;case 32:this.$=e[n-3],c.setClickEvent(e[n-3],e[n-1],e[n]),c.setLink(e[n-3],e[n-2]);break;case 33:this.$=e[n-1],c.setLink(e[n-1],e[n]);break;case 34:case 40:this.$=e[n-1]+" "+e[n];break;case 35:case 36:case 38:this.$=e[n-2]+" "+e[n-1]+" "+e[n];break;case 37:case 39:this.$=e[n-3]+" "+e[n-2]+" "+e[n-1]+" "+e[n];break;case 41:c.parseDirective("%%{","open_directive");break;case 42:c.parseDirective(e[n],"type_directive");break;case 43:e[n]=e[n].trim().replace(/'/g,'"'),c.parseDirective(e[n],"arg_directive");break;case 44:c.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:u,30:4,40:s},{1:[3]},{3:6,4:2,5:u,30:4,40:s},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:r,13:h,14:m,15:y,16:L,17:T,18:F,19:I,20:Y,21:_,23:P,25:g,26:D,27:28,28:S,30:4,35:E,40:s},{32:32,33:[1,33],43:R},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:r,13:h,14:m,15:y,16:L,17:T,18:F,19:I,20:Y,21:_,23:P,25:g,26:D,27:28,28:S,30:4,35:E,40:s},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(G,[2,25]),{32:47,43:R},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(G,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(f,a){if(a.recoverable)this.trace(f);else{var o=new Error(f);throw o.hash=a,o}},parse:function(f){var a=this,o=[0],c=[],d=[null],e=[],x=this.table,n="",p=0,M=0,O=2,l=1,v=e.slice.call(arguments,1),k=Object.create(this.lexer),C={yy:{}};for(var A in this.yy)Object.prototype.hasOwnProperty.call(this.yy,A)&&(C.yy[A]=this.yy[A]);k.setInput(f,C.yy),C.yy.lexer=k,C.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var b=k.yylloc;e.push(b);var w=k.options&&k.options.ranges;typeof C.yy.parseError=="function"?this.parseError=C.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function et(){var J;return J=c.pop()||k.lex()||l,typeof J!="number"&&(J instanceof Array&&(c=J,J=c.pop()),J=a.symbols_[J]||J),J}for(var V,H,B,$,q={},tt,U,it,ct;;){if(H=o[o.length-1],this.defaultActions[H]?B=this.defaultActions[H]:((V===null||typeof V>"u")&&(V=et()),B=x[H]&&x[H][V]),typeof B>"u"||!B.length||!B[0]){var kt="";ct=[];for(tt in x[H])this.terminals_[tt]&&tt>O&&ct.push("'"+this.terminals_[tt]+"'");k.showPosition?kt="Parse error on line "+(p+1)+`:
`+k.showPosition()+`
Expecting `+ct.join(", ")+", got '"+(this.terminals_[V]||V)+"'":kt="Parse error on line "+(p+1)+": Unexpected "+(V==l?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(kt,{text:k.match,token:this.terminals_[V]||V,line:k.yylineno,loc:b,expected:ct})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+H+", token: "+V);switch(B[0]){case 1:o.push(V),d.push(k.yytext),e.push(k.yylloc),o.push(B[1]),V=null,M=k.yyleng,n=k.yytext,p=k.yylineno,b=k.yylloc;break;case 2:if(U=this.productions_[B[1]][1],q.$=d[d.length-U],q._$={first_line:e[e.length-(U||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(U||1)].first_column,last_column:e[e.length-1].last_column},w&&(q._$.range=[e[e.length-(U||1)].range[0],e[e.length-1].range[1]]),$=this.performAction.apply(q,[n,M,p,C.yy,B[1],d,e].concat(v)),typeof $<"u")return $;U&&(o=o.slice(0,-1*U*2),d=d.slice(0,-1*U),e=e.slice(0,-1*U)),o.push(this.productions_[B[1]][0]),d.push(q.$),e.push(q._$),it=x[o[o.length-2]][o[o.length-1]],o.push(it);break;case 3:return!0}}return!0}},Z=function(){var z={EOF:1,parseError:function(a,o){if(this.yy.parser)this.yy.parser.parseError(a,o);else throw new Error(a)},setInput:function(f,a){return this.yy=a||this.yy||{},this._input=f,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var f=this._input[0];this.yytext+=f,this.yyleng++,this.offset++,this.match+=f,this.matched+=f;var a=f.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),f},unput:function(f){var a=f.length,o=f.split(/(?:\r\n?|\n)/g);this._input=f+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===c.length?this.yylloc.first_column:0)+c[c.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(f){this.unput(this.match.slice(f))},pastInput:function(){var f=this.matched.substr(0,this.matched.length-this.match.length);return(f.length>20?"...":"")+f.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var f=this.match;return f.length<20&&(f+=this._input.substr(0,20-f.length)),(f.substr(0,20)+(f.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var f=this.pastInput(),a=new Array(f.length+1).join("-");return f+this.upcomingInput()+`
`+a+"^"},test_match:function(f,a){var o,c,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),c=f[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+f[0].length},this.yytext+=f[0],this.match+=f[0],this.matches=f,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(f[0].length),this.matched+=f[0],o=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var e in d)this[e]=d[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var f,a,o,c;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),e=0;e<d.length;e++)if(o=this._input.match(this.rules[d[e]]),o&&(!a||o[0].length>a[0].length)){if(a=o,c=e,this.options.backtrack_lexer){if(f=this.test_match(o,d[e]),f!==!1)return f;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(f=this.test_match(a,d[c]),f!==!1?f:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,o,c,d){switch(c){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return z}();j.lexer=Z;function N(){this.yy={}}return N.prototype=j,j.Parser=N,new N}();yt.parser=yt;const ge=yt;X.extend(he);X.extend(me);X.extend(ke);let Q="",bt="",_t,wt="",ot=[],lt=[],Dt={},Ct=[],mt=[],rt="";const Pt=["active","done","crit","milestone"];let St=[],ut=!1,Et=!1,pt=0;const ye=function(t,u,s){te.parseDirective(this,t,u,s)},pe=function(){Ct=[],mt=[],rt="",St=[],dt=0,xt=void 0,ht=void 0,W=[],Q="",bt="",_t=void 0,wt="",ot=[],lt=[],ut=!1,Et=!1,pt=0,Dt={},ee()},ve=function(t){bt=t},xe=function(){return bt},Te=function(t){_t=t},be=function(){return _t},_e=function(t){wt=t},we=function(){return wt},De=function(t){Q=t},Ce=function(){ut=!0},Se=function(){return ut},Ee=function(){Et=!0},Ae=function(){return Et},Me=function(){return Q},Le=function(t){ot=t.toLowerCase().split(/[\s,]+/)},Ie=function(){return ot},Ye=function(t){lt=t.toLowerCase().split(/[\s,]+/)},Fe=function(){return lt},ze=function(){return Dt},Oe=function(t){rt=t,Ct.push(t)},Ve=function(){return Ct},We=function(){let t=zt();const u=10;let s=0;for(;!t&&s<u;)t=zt(),s++;return mt=W,mt},Bt=function(t,u,s,i){return i.includes(t.format(u.trim()))?!1:t.isoWeekday()>=6&&s.includes("weekends")||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(t.format(u.trim()))},Nt=function(t,u,s,i){if(!s.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=X(t.startTime):r=X(t.startTime,u,!0),r=r.add(1,"d");let h;t.endTime instanceof Date?h=X(t.endTime):h=X(t.endTime,u,!0);const[m,y]=Pe(r,h,u,s,i);t.endTime=m.toDate(),t.renderEndTime=y},Pe=function(t,u,s,i,r){let h=!1,m=null;for(;t<=u;)h||(m=u.toDate()),h=Bt(t,s,i,r),h&&(u=u.add(1,"d")),t=t.add(1,"d");return[u,m]},vt=function(t,u,s){s=s.trim();const r=/^after\s+([\d\w- ]+)/.exec(s.trim());if(r!==null){let m=null;if(r[1].split(" ").forEach(function(y){let L=at(y);L!==void 0&&(m?L.endTime>m.endTime&&(m=L):m=L)}),m)return m.endTime;{const y=new Date;return y.setHours(0,0,0,0),y}}let h=X(s,u.trim(),!0);if(h.isValid())return h.toDate();{gt.debug("Invalid date:"+s),gt.debug("With date format:"+u.trim());const m=new Date(s);if(m===void 0||isNaN(m.getTime()))throw new Error("Invalid date:"+s);return m}},Rt=function(t){const u=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return u!==null?[Number.parseFloat(u[1]),u[2]]:[NaN,"ms"]},Gt=function(t,u,s,i=!1){s=s.trim();let r=X(s,u.trim(),!0);if(r.isValid())return i&&(r=r.add(1,"d")),r.toDate();let h=X(t);const[m,y]=Rt(s);if(!Number.isNaN(m)){const L=h.add(m,y);L.isValid()&&(h=L)}return h.toDate()};let dt=0;const nt=function(t){return t===void 0?(dt=dt+1,"task"+dt):t},Be=function(t,u){let s;u.substr(0,1)===":"?s=u.substr(1,u.length):s=u;const i=s.split(","),r={};Zt(i,r,Pt);for(let m=0;m<i.length;m++)i[m]=i[m].trim();let h="";switch(i.length){case 1:r.id=nt(),r.startTime=t.endTime,h=i[0];break;case 2:r.id=nt(),r.startTime=vt(void 0,Q,i[0]),h=i[1];break;case 3:r.id=nt(i[0]),r.startTime=vt(void 0,Q,i[1]),h=i[2];break}return h&&(r.endTime=Gt(r.startTime,Q,h,ut),r.manualEndTime=X(h,"YYYY-MM-DD",!0).isValid(),Nt(r,Q,lt,ot)),r},Ne=function(t,u){let s;u.substr(0,1)===":"?s=u.substr(1,u.length):s=u;const i=s.split(","),r={};Zt(i,r,Pt);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:r.id=nt(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=nt(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=nt(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let xt,ht,W=[];const Ut={},Re=function(t,u){const s={section:rt,type:rt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:u},task:t,classes:[]},i=Ne(ht,u);s.raw.startTime=i.startTime,s.raw.endTime=i.endTime,s.id=i.id,s.prevTaskId=ht,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.order=pt,pt++;const r=W.push(s);ht=s.id,Ut[s.id]=r-1},at=function(t){const u=Ut[t];return W[u]},Ge=function(t,u){const s={section:rt,type:rt,description:t,task:t,classes:[]},i=Be(xt,u);s.startTime=i.startTime,s.endTime=i.endTime,s.id=i.id,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,xt=s,mt.push(s)},zt=function(){const t=function(s){const i=W[s];let r="";switch(W[s].raw.startTime.type){case"prevTaskEnd":{const h=at(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":r=vt(void 0,Q,W[s].raw.startTime.startData),r&&(W[s].startTime=r);break}return W[s].startTime&&(W[s].endTime=Gt(W[s].startTime,Q,W[s].raw.endTime.data,ut),W[s].endTime&&(W[s].processed=!0,W[s].manualEndTime=X(W[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Nt(W[s],Q,lt,ot))),W[s].processed};let u=!0;for(const[s,i]of W.entries())t(s),u=u&&i.processed;return u},Ue=function(t,u){let s=u;st().securityLevel!=="loose"&&(s=ie(u)),t.split(",").forEach(function(i){at(i)!==void 0&&(jt(i,()=>{window.open(s,"_self")}),Dt[i]=s)}),Xt(t,"clickable")},Xt=function(t,u){t.split(",").forEach(function(s){let i=at(s);i!==void 0&&i.classes.push(u)})},Xe=function(t,u,s){if(st().securityLevel!=="loose"||u===void 0)return;let i=[];if(typeof s=="string"){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let m=i[h].trim();m.charAt(0)==='"'&&m.charAt(m.length-1)==='"'&&(m=m.substr(1,m.length-2)),i[h]=m}}i.length===0&&i.push(t),at(t)!==void 0&&jt(t,()=>{de.runFunc(u,...i)})},jt=function(t,u){St.push(function(){const s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){u()})},function(){const s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){u()})})},je=function(t,u,s){t.split(",").forEach(function(i){Xe(i,u,s)}),Xt(t,"clickable")},Ze=function(t){St.forEach(function(u){u(t)})},He={parseDirective:ye,getConfig:()=>st().gantt,clear:pe,setDateFormat:De,getDateFormat:Me,enableInclusiveEndDates:Ce,endDatesAreInclusive:Se,enableTopAxis:Ee,topAxisEnabled:Ae,setAxisFormat:ve,getAxisFormat:xe,setTickInterval:Te,getTickInterval:be,setTodayMarker:_e,getTodayMarker:we,setAccTitle:Ht,getAccTitle:qt,setDiagramTitle:Qt,getDiagramTitle:Jt,setAccDescription:Kt,getAccDescription:$t,addSection:Oe,getSections:Ve,getTasks:We,addTask:Re,findTaskById:at,addTaskOrg:Ge,setIncludes:Le,getIncludes:Ie,setExcludes:Ye,getExcludes:Fe,setClickEvent:je,setLink:Ue,getLinks:ze,bindFunctions:Ze,parseDuration:Rt,isInvalidDate:Bt};function Zt(t,u,s){let i=!0;for(;i;)i=!1,s.forEach(function(r){const h="^\\s*"+r+"\\s*$",m=new RegExp(h);t[0].match(m)&&(u[r]=!0,t.shift(1),i=!0)})}const qe=function(){gt.debug("Something is calling, setConf, remove the call")};let K;const Qe=function(t,u,s,i){const r=st().gantt,h=st().securityLevel;let m;h==="sandbox"&&(m=ft("#i"+u));const y=h==="sandbox"?ft(m.nodes()[0].contentDocument.body):ft("body"),L=h==="sandbox"?m.nodes()[0].contentDocument:document,T=L.getElementById(u);K=T.parentElement.offsetWidth,K===void 0&&(K=1200),r.useWidth!==void 0&&(K=r.useWidth);const F=i.db.getTasks(),I=F.length*(r.barHeight+r.barGap)+2*r.topPadding;T.setAttribute("viewBox","0 0 "+K+" "+I);const Y=y.select(`[id="${u}"]`),_=se().domain([ne(F,function(a){return a.startTime}),re(F,function(a){return a.endTime})]).rangeRound([0,K-r.leftPadding-r.rightPadding]);let P=[];for(const a of F)P.push(a.type);const g=P;P=N(P);function D(a,o){const c=a.startTime,d=o.startTime;let e=0;return c>d?e=1:c<d&&(e=-1),e}F.sort(D),S(F,K,I),ae(Y,I,K,r.useMaxWidth),Y.append("text").text(i.db.getDiagramTitle()).attr("x",K/2).attr("y",r.titleTopMargin).attr("class","titleText");function S(a,o,c){const d=r.barHeight,e=d+r.barGap,x=r.topPadding,n=r.leftPadding,p=ce().domain([0,P.length]).range(["#00B9FA","#F95002"]).interpolate(oe);R(e,x,n,o,c,a,i.db.getExcludes(),i.db.getIncludes()),G(n,x,o,c),E(a,e,x,n,d,p,o),j(e,x),Z(n,x,o,c)}function E(a,o,c,d,e,x,n){Y.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(l,v){return v=l.order,v*o+c-2}).attr("width",function(){return n-r.rightPadding/2}).attr("height",o).attr("class",function(l){for(const[v,k]of P.entries())if(l.type===k)return"section section"+v%r.numberSectionStyles;return"section section0"});const p=Y.append("g").selectAll("rect").data(a).enter(),M=i.db.getLinks();if(p.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?_(l.startTime)+d+.5*(_(l.endTime)-_(l.startTime))-.5*e:_(l.startTime)+d}).attr("y",function(l,v){return v=l.order,v*o+c}).attr("width",function(l){return l.milestone?e:_(l.renderEndTime||l.endTime)-_(l.startTime)}).attr("height",e).attr("transform-origin",function(l,v){return v=l.order,(_(l.startTime)+d+.5*(_(l.endTime)-_(l.startTime))).toString()+"px "+(v*o+c+.5*e).toString()+"px"}).attr("class",function(l){const v="task";let k="";l.classes.length>0&&(k=l.classes.join(" "));let C=0;for(const[b,w]of P.entries())l.type===w&&(C=b%r.numberSectionStyles);let A="";return l.active?l.crit?A+=" activeCrit":A=" active":l.done?l.crit?A=" doneCrit":A=" done":l.crit&&(A+=" crit"),A.length===0&&(A=" task"),l.milestone&&(A=" milestone "+A),A+=C,A+=" "+k,v+A}),p.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",r.fontSize).attr("x",function(l){let v=_(l.startTime),k=_(l.renderEndTime||l.endTime);l.milestone&&(v+=.5*(_(l.endTime)-_(l.startTime))-.5*e),l.milestone&&(k=v+e);const C=this.getBBox().width;return C>k-v?k+C+1.5*r.leftPadding>n?v+d-5:k+d+5:(k-v)/2+v+d}).attr("y",function(l,v){return v=l.order,v*o+r.barHeight/2+(r.fontSize/2-2)+c}).attr("text-height",e).attr("class",function(l){const v=_(l.startTime);let k=_(l.endTime);l.milestone&&(k=v+e);const C=this.getBBox().width;let A="";l.classes.length>0&&(A=l.classes.join(" "));let b=0;for(const[et,V]of P.entries())l.type===V&&(b=et%r.numberSectionStyles);let w="";return l.active&&(l.crit?w="activeCritText"+b:w="activeText"+b),l.done?l.crit?w=w+" doneCritText"+b:w=w+" doneText"+b:l.crit&&(w=w+" critText"+b),l.milestone&&(w+=" milestoneText"),C>k-v?k+C+1.5*r.leftPadding>n?A+" taskTextOutsideLeft taskTextOutside"+b+" "+w:A+" taskTextOutsideRight taskTextOutside"+b+" "+w+" width-"+C:A+" taskText taskText"+b+" "+w+" width-"+C}),st().securityLevel==="sandbox"){let l;l=ft("#i"+u);const v=l.nodes()[0].contentDocument;p.filter(function(k){return M[k.id]!==void 0}).each(function(k){var C=v.querySelector("#"+k.id),A=v.querySelector("#"+k.id+"-text");const b=C.parentNode;var w=v.createElement("a");w.setAttribute("xlink:href",M[k.id]),w.setAttribute("target","_top"),b.appendChild(w),w.appendChild(C),w.appendChild(A)})}}function R(a,o,c,d,e,x,n,p){const M=x.reduce((b,{startTime:w})=>b?Math.min(b,w):w,0),O=x.reduce((b,{endTime:w})=>b?Math.max(b,w):w,0),l=i.db.getDateFormat();if(!M||!O)return;const v=[];let k=null,C=X(M);for(;C.valueOf()<=O;)i.db.isInvalidDate(C,l,n,p)?k?k.end=C:k={start:C,end:C}:k&&(v.push(k),k=null),C=C.add(1,"d");Y.append("g").selectAll("rect").data(v).enter().append("rect").attr("id",function(b){return"exclude-"+b.start.format("YYYY-MM-DD")}).attr("x",function(b){return _(b.start)+c}).attr("y",r.gridLineStartPadding).attr("width",function(b){const w=b.end.add(1,"day");return _(w)-_(b.start)}).attr("height",e-o-r.gridLineStartPadding).attr("transform-origin",function(b,w){return(_(b.start)+c+.5*(_(b.end)-_(b.start))).toString()+"px "+(w*a+.5*e).toString()+"px"}).attr("class","exclude-range")}function G(a,o,c,d){let e=le(_).tickSize(-d+o+r.gridLineStartPadding).tickFormat(At(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const n=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(n!==null){const p=n[1];switch(n[2]){case"minute":e.ticks(Ft.every(p));break;case"hour":e.ticks(Yt.every(p));break;case"day":e.ticks(It.every(p));break;case"week":e.ticks(Lt.every(p));break;case"month":e.ticks(Mt.every(p));break}}if(Y.append("g").attr("class","grid").attr("transform","translate("+a+", "+(d-50)+")").call(e).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let p=ue(_).tickSize(-d+o+r.gridLineStartPadding).tickFormat(At(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(n!==null){const M=n[1];switch(n[2]){case"minute":p.ticks(Ft.every(M));break;case"hour":p.ticks(Yt.every(M));break;case"day":p.ticks(It.every(M));break;case"week":p.ticks(Lt.every(M));break;case"month":p.ticks(Mt.every(M));break}}Y.append("g").attr("class","grid").attr("transform","translate("+a+", "+o+")").call(p).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function j(a,o){const c=[];let d=0;for(const[e,x]of P.entries())c[e]=[x,f(x,g)];Y.append("g").selectAll("text").data(c).enter().append(function(e){const x=e[0].split(fe.lineBreakRegex),n=-(x.length-1)/2,p=L.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("dy",n+"em");for(const[M,O]of x.entries()){const l=L.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttribute("alignment-baseline","central"),l.setAttribute("x","10"),M>0&&l.setAttribute("dy","1em"),l.textContent=O,p.appendChild(l)}return p}).attr("x",10).attr("y",function(e,x){if(x>0)for(let n=0;n<x;n++)return d+=c[x-1][1],e[1]*a/2+d*a+o;else return e[1]*a/2+o}).attr("font-size",r.sectionFontSize).attr("font-size",r.sectionFontSize).attr("class",function(e){for(const[x,n]of P.entries())if(e[0]===n)return"sectionTitle sectionTitle"+x%r.numberSectionStyles;return"sectionTitle"})}function Z(a,o,c,d){const e=i.db.getTodayMarker();if(e==="off")return;const x=Y.append("g").attr("class","today"),n=new Date,p=x.append("line");p.attr("x1",_(n)+a).attr("x2",_(n)+a).attr("y1",r.titleTopMargin).attr("y2",d-r.titleTopMargin).attr("class","today"),e!==""&&p.attr("style",e.replace(/,/g,";"))}function N(a){const o={},c=[];for(let d=0,e=a.length;d<e;++d)Object.prototype.hasOwnProperty.call(o,a[d])||(o[a[d]]=!0,c.push(a[d]));return c}function z(a){let o=a.length;const c={};for(;o;)c[a[--o]]=(c[a[o]]||0)+1;return c}function f(a,o){return z(o)[a]||0}},Je={setConf:qe,draw:Qe},Ke=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,$e=Ke,ei={parser:ge,db:He,renderer:Je,styles:$e};export{ei as diagram};
