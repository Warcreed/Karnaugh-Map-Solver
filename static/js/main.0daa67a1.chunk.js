(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),s=a.n(o),l=(a(13),a(2)),i=a(3),u=a(5),c=a(4),p=(a(14),a(15),a(1)),h=a.n(p),d=(a(16),a(17),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.className}," ",this.props.value)}}]),a}(n.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"selectionButton"},n.a.createElement("button",{className:"btn btn-Tab",onClick:this.props.onClick},this.props.value))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"mapSquare",onClick:this.props.onClick},n.a.createElement("button",{className:"btnMap"},this.props.value,n.a.createElement("div",{className:"",id:""+this.props.i+this.props.j})))}}]),a}(n.a.Component),m=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"renderSquare",value:function(e,t){var a=this;return n.a.createElement(f,{value:this.props.squares[e][t][0],i:e,j:t,onClick:function(){return a.props.onClick(e,t)},key:e+t})}},{key:"generateMapRow",value:function(e){var t=this.props.typeMap,a=[],r=t;3===t&&(r=4);for(var n=0;n<r;n++)a.push(this.renderSquare(e,n));return a}},{key:"renderMapRow",value:function(e){return n.a.createElement("div",{className:"board-row",key:e},this.generateMapRow(e))}},{key:"renderMap",value:function(){var e=this.props.typeMap,t=[],a=e;3===e&&(a=2);for(var r=0;r<a;r++)t.push(this.renderMapRow(r));return t}},{key:"renderMapHead",value:function(e,t,a){var r=this.props.typeMap;if(e)return n.a.createElement(d,{value:t,key:t,className:a});for(var o=[],s=["A","B","C","D"],l=!1,i=0;i<r;i++)(2!==r&&2===i||2===r&&1===i)&&(o.push(n.a.createElement("hr",{key:"hr"})),l=!0),l?o.push(n.a.createElement("div",{className:"mapVariableBot",key:i},s[i])):o.push(n.a.createElement("div",{className:"mapVariableTop",key:i},s[i]));return n.a.createElement(d,{value:o,key:++i,className:a})}},{key:"renderHeader",value:function(){var e=this.props.typeMap,t=["00","01","11","10"],a=e,r=[];3===e&&(a=4),2===e&&(t=["0","1"]),r.push(this.renderMapHead(0,"","headerSquare"));for(var n=0;n<a;n++)r.push(this.renderMapHead(1,t[n],"headerSquare"));return r}},{key:"renderMapHeaderRow",value:function(e){return n.a.createElement("div",{className:"board-row",key:e}," ",this.renderHeader()," ")}},{key:"renderCol",value:function(){var e=this.props.typeMap,t=["00","01","11","10"],a=e,r=[];2!==e&&3!==e||(t=["0","1"],a=2);for(var n=0;n<a;n++)r.push(this.renderMapHead(1,t[n],"headerSquare"));return r}},{key:"rendeMapReaderCol",value:function(e){return n.a.createElement("div",{className:"map-col",key:e}," ",this.renderCol()," ")}},{key:"render",value:function(){var e=0;return n.a.createElement("div",{key:e++},this.renderMapHeaderRow(e++),this.rendeMapReaderCol(e++),n.a.createElement("div",{className:"map"},this.renderMap()))}}]),a}(n.a.Component),y=(a(18),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.squares,a=this.props.typeMap,r=this.props.perm,o=0;return n.a.createElement("div",{key:o++},n.a.createElement(b,{typeMap:a,key:o++}),n.a.createElement("div",{className:"bodyTruthTable",key:o++},n.a.createElement(g,{key:o++,typeMap:a,perm:r}),n.a.createElement(k,{squares:t,typeMap:a,perm:r,key:o++,onClick:function(t,a){return e.props.onClick(t,a)},setRowOrColCell:function(t,a,r,n){return e.props.setRowOrColCell(t,a,r,n)}})))}}]),a}(n.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"renderTableSquare",value:function(e,t){return n.a.createElement(d,{value:e,key:t,className:"square tableFont"})}},{key:"renderTableCol2",value:function(e,t){for(var a=this.props.typeMap,r=[],n=Math.pow(2,a),o=0;o<n;o++)r.push(this.renderTableSquare(t[o][e],o));return r}},{key:"renderTableCol",value:function(e,t){return n.a.createElement("div",{className:"table-col",key:e},this.renderTableCol2(e,t))}},{key:"renderTablePermutation",value:function(e){for(var t=this.props.typeMap,a=[],r=0;r<t;r++)a.push(this.renderTableCol(r,e));return a}},{key:"render",value:function(){var e=this.props.perm;return this.renderTablePermutation(e)}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"renderTableHead",value:function(e,t){return n.a.createElement(d,{value:e,key:t,k:t,className:"square tableFont"})}},{key:"renderTableRow",value:function(){for(var e=this.props.typeMap,t=["A","B","C","D"],a=[],r=0;r<e;r++)a.push(this.renderTableHead(t[r],r));return a.push(this.renderTableHead("R",r+1)),a}},{key:"render",value:function(){return n.a.createElement("div",{className:"tableHead",key:-1}," ",this.renderTableRow()," ")}}]),a}(n.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"renderSelectionButton",value:function(e,t,a){var r=this;return n.a.createElement(v,{value:this.props.squares[e][t][0],onClick:function(){return r.props.onClick(e,t)},key:a})}},{key:"renderTableCol",value:function(){var e=this.props.typeMap,t=[],a=e,r=e;3===e&&(r=4,a=2);for(var n=0,o=0;o<r;o++){var s=void 0;s=2===o?3:3===o?2:o;for(var l=0;l<a;l++){var i=void 0;i=l%a===2?3:l%a===3?2:l,t.push(this.renderSelectionButton(i,s,n++))}}return t}},{key:"render",value:function(){return n.a.createElement("div",{className:"table-col-selButton"}," ",this.renderTableCol()," ")}}]),a}(n.a.Component),C=(a(19),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"optionChoice"},n.a.createElement("div",{className:"mapType"},n.a.createElement("p",null," Choose map type to display (variables number): "),n.a.createElement("div",null,n.a.createElement("div",{className:"buttonType"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setTypeMap(2)}},"2")),n.a.createElement("div",{className:"buttonType"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setTypeMap(3)}},"3")),n.a.createElement("div",{className:"buttonType"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setTypeMap(4)}},"4"))),n.a.createElement("div",null,n.a.createElement("p",null,"Form: ",this.props.typeSol),n.a.createElement("div",null,n.a.createElement("div",{className:"buttonSettings"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setTypeSol("SOP")}},"SOP")),n.a.createElement("div",{className:"buttonSettings"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setTypeSol("POS")}},"POS")))),n.a.createElement("div",null,n.a.createElement("p",null,"Set map to all: "),n.a.createElement("div",null,n.a.createElement("div",{className:"buttonSettings"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setMatrixSquare(0)}}," 0")),n.a.createElement("div",{className:"buttonSettings"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setMatrixSquare(1)}}," 1")),n.a.createElement("div",{className:"buttonSettings"},n.a.createElement("button",{className:"btn-type",onClick:function(){return e.props.setMatrixSquare("X")}}," X")))),n.a.createElement("div",null,n.a.createElement("p",null,"Get the result: "),n.a.createElement("div",null,n.a.createElement("div",{className:"elaborate"},n.a.createElement("button",{className:"btn-elaborate",id:"elabora",onClick:function(t){return e.props.onClick(t)}},"Process")))))))}}]),a}(n.a.Component)),E=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(l.a)(this,a);var n=(r=t.call(this,e)).getMatrixSquare(4),o=r.getMatrixPerm(4),s=r.setCoord(n,o,4);return r.state={squares:s,typeMap:4,perm:o,typeSol:"SOP"},r}return Object(i.a)(a,[{key:"getMatrixPerm",value:function(e){for(var t=e,a=Math.pow(2,e),r=[],n=0;n<a;n++){for(var o=[],s=0;s<t;s++)o[s]=0;r[n]=o}for(var l=0;l<t;l++){for(var i=Math.pow(2,e)/2,u=0;u<a;u++){var c=u%(2*i)<i?0:1;r[u][l]=""+c}e--}return r}},{key:"getMatrixSquare",value:function(e){var t=e,a=e;3===e&&(t=2,a=4);for(var r=[],n=0;n<t;n++){for(var o=[],s=0;s<a;s++){for(var l=[],i=0;i<2;i++)l[i]=0;o[s]=l}r[n]=o}return r}},{key:"setMatrixSquare",value:function(e){var t=this.state.squares,a=this.state.typeMap,r=a,n=a;3===a&&(r=2,n=4);for(var o=0;o<r;o++)for(var s=0;s<n;s++)t[o][s][0]=e;this.reset(),this.setState({squares:t})}},{key:"reset",value:function(){var e=this.state.typeMap,t=e,a=e;3===e&&(t=2,a=4),h()("#elabora").prop("disabled",!1);for(var r=0;r<t;r++)for(var n=0;n<a;n++){h()("#"+r+n).removeClass(),h()("#"+r+n).html("");for(var o=0;o<10;o++)h()("#"+r+n+o).remove()}h()("#sol").html(""),h()("#costo").html(""),h()(".Solution").hide(),h()(".Solution").css("left","720px")}},{key:"setCoord",value:function(e,t,a){var r=a,n=a;3===a&&(n=4,r=2);for(var o=0;o<n;o++){var s=void 0;s=2===o?3:3===o?2:o;for(var l=0;l<r;l++){var i=void 0;i=l%r===2?3:l%r===3?2:l;var u="",c=a,p=0;do{u+=t[o*r+l][p],p++}while(p<c/2);e[i][s][1]=u,u="",p=Math.floor(c/2),3===a&&(c=2,p=Math.floor(c/2+1));do{u+=t[o*r+l][p],p++}while(p<c);e[i][s][2]=u}}return e}},{key:"setTypeMap",value:function(e){var t=this.getMatrixSquare(e),a=this.getMatrixPerm(e),r=this.setCoord(t,a,e);this.reset(),this.setState({typeMap:e,squares:r,perm:a})}},{key:"setTypeSol",value:function(e){this.reset(),this.setState({typeSol:e})}},{key:"handleClick",value:function(e,t){var a=this.state.squares;"X"===a[e][t][0]?a[e][t][0]=0:0===a[e][t][0]?a[e][t][0]=1:a[e][t][0]="X",this.reset(),this.setState({squares:a})}},{key:"Algorithm",value:function(e){var t,a;h()("#elabora").prop("disabled",!0);var r="SOP"===this.state.typeSol?1:0;4===this.state.typeMap?(t=4,a=4):3===this.state.typeMap?(t=4,a=2):(t=2,a=2);for(var n=new Array(a),o=0;o<a;o++){n[o]=new Array(t);for(var s=0;s<t;s++)n[o][s]=[]}for(var l=0,i=0;i<a;i++)for(var u=0;u<t;u++){var c=0;if(e[i][u][0]===r){var p,d=i,v=u;if(u===t-1){for(var f=!0,m=0,y=i;y<a&&f;y++)e[y][t-1][0]===r&&e[y][0][0]===r?(n[y][0].push(l),n[y][t-1].push(l),m++):f=!1;m>0&&(l++,M(2,m)||(n[i+m-1][0].pop(),n[i+m-1][t-1].pop()))}if(i===a-1){for(var g=!0,b=0,k=u;k<t&&g;k++)e[a-1][k][0]===r&&e[0][k][0]===r?(n[a-1][k].push(l),n[0][k].push(l),b++):g=!1;b>0&&(l++,M(2,b)||(n[a-1][u+b-1].pop(),n[0][u+b-1].pop()))}do{n[d][v].push(l),c++,v++}while(v<t&&e[d][v][0]===r);M(2,c)||(n[d][v-1].pop(),c--);for(var C=100,E=!0,S=0;S<c;S++){for(d=i+1,v=u+S,p=1;d<a&&p<C;){if(e[d][v][0]!==r){if(0!==S&&p!==C){var O=d;if(!M(2,S)){for(M(2,p)||O--,n[d][v].push(l),d>=C?C=d:C--;O<=C;O++)for(var N=v-1;N<=S;N++)n[O][N].pop();E=!1}}break}n[d][v].push(l),d++,p++}p<C&&(C=p),!M(2,p)&&E&&(n[d-1][v].pop(),C--)}l++}}console.log("Algorithm:"),console.log(n),this.GroupUp(e,h.a.extend(!0,[],n))}},{key:"GroupUp",value:function(e,t){var a,r,n,o,s=[],l=[],i=[],u="SOP"===this.state.typeSol?1:0;4===this.state.typeMap?(n=4,o=4):3===this.state.typeMap?(n=4,o=2):(n=2,o=2),e[0][0][0]===u&&e[0][n-1][0]===u&&e[o-1][0][0]===u&&e[o-1][n-1][0]===u&&(a={riga:0,col:0},l.push(a),a={riga:0,col:n-1},l.push(a),a={riga:o-1,col:0},l.push(a),a={riga:o-1,col:n-1},l.push(a),s.push(l),l=[]);for(var c=0;c<o;c++)for(var p=0;p<n;p++)if(e[c][p][0]===u){var d=t[c][p][0],v=c,f=p;if(p===n-1){for(;v<o&&t[v][p][0]===d&&t[v][0][0]===d;)a={riga:v,col:0},r={riga:v,col:p},t[v][p].shift(),t[v][0].shift(),l.push(a),l.push(r),v++;l.length>0&&(s.push(l),l=[],d=t[c][p][0]),v=c,f=p}if(c===o-1){for(;f<n&&t[c][f][0]===d&&t[0][f][0]===d;)a={riga:c,col:f},r={riga:0,col:f},t[0][f].shift(),t[c][f].shift(),l.push(a),l.push(r),f++;l.length>0&&(l.sort((function(e,t){return e.riga-t.riga})),s.push(l),l=[],d=t[c][p][0]),v=c,f=p}for(;f<n&&t[v][f][0]===d;)f++;for(;v<o&&t[v][f-1][0]===d;)v++;for(var m=c;m<v;m++)for(var y=p;y<f;y++)a={riga:m,col:y},l.push(a);for(s.push(l),v=c,f=p;v<o&&t[v][f][0]===d;)v++;for(;f<n&&t[v-1][f][0]===d;)f++;for(var g=c;g<v;g++)for(var b=p;b<f;b++)a={riga:g,col:b},i.push(a);var k=!0;if(l.length===i.length)for(var C=0;C<l.length&&k;C++)l[C].riga!==i[C].riga&&l[C].col!==i[C].col&&(k=!1);else s.push(i);k||s.push(i),l=[],i=[];for(var E=0;E<o;E++)for(var M=0;M<n;M++)t[E][M][0]===d&&t[E][M].shift()}console.log("GroupUp:"),console.log(s),this.CleanAlgorithm(h.a.extend(!0,[],s))}},{key:"CleanAlgorithm",value:function(e){e.sort((function(e,t){return e.length-t.length})),e.reverse(),console.log("CleanAlgorithm:"),console.log(e);for(var t,a,r,n=h.a.extend(!0,[],e),o=0;o<n.length;o++)for(var s=o+1;s<n.length;s++){if(n[o].length<n[s].length)for(var l=o;n[l].length<n[l+1].length;){var i=n[l];n[l]=n[l+1],n[l+1]=i,i=e[l],e[l]=e[l+1],e[l+1]=i}for(var u=0;u<n[o].length;u++)for(var c=0;c<n[s].length;c++)if(n[o][u].riga===n[s][c].riga&&n[o][u].col===n[s][c].col){for(var p=c;p<n[s].length-1;p++)n[s][p]=n[s][p+1];delete n[s][n[s].length-1],n[s].length--}}for(var d=0;d<e.length;d++){if(a=!0,n[d].length>0)for(var v=0;v<e[d].length&&a;v++){r=e[d][v],t=!1;for(var f=0;f<e.length&&!t;f++)d!==f&&n[f].length>0&&-1!==e[f].findIndex((function(e){return r.riga===e.riga&&r.col===e.col}))&&(t=!0);!1===t&&(a=!1)}!0===a&&(n[d]=[])}console.log(n),this.Solution(n,e),this.drawGroup(n,e)}},{key:"Solution",value:function(e,t){for(var a,r,n,o,s,l,i,u,c=this.state.squares,p=["A","B","C","D"],h="",d=[],v=this.state.typeSol,f=0;f<e.length;f++)if(e[f].length>0){for(a=0,o=t[f][0].riga,s=t[f][0].col,u=0;u<t[f].length&&t[f][u].riga===o;)u++;for(n=0,i=c[o][s][1];n<i.length;){for(r=1,l=!0;r<t[f].length&&t[f][r].riga===o;){if(i.charAt(n)!==c[o][t[f][r].col][1].charAt(n)){l=!1;break}r++}l&&("SOP"===v?"0"===i.charAt(n)?h+="'"+p[a]:h+=p[a]:("0"===i.charAt(n)?h+=p[a]:h+="'"+p[a],h+="+")),a++,n++}for(n=0,i=c[o][s][2];n<i.length;){for(r=u,l=!0;r<t[f].length&&t[f][r].col===s;){if(i.charAt(n)!==c[t[f][r].riga][s][2].charAt(n)){l=!1;break}r+=u}l&&("SOP"===v?"0"===i.charAt(n)?h+="'"+p[a]:h+=p[a]:("0"===i.charAt(n)?h+=p[a]:h+="'"+p[a],h+="+")),a++,n++}"POS"===v&&(h=h.substr(0,h.length-1)),d.push(h),h=""}""!==d[0]&&d[0]||(0===c[0][0][0]?d[0]="0":d[0]="1"),this.drawSolution(d)}},{key:"drawGroup",value:function(e,t){for(var a=["red","blue","green","orange","#50C878","lightblue","#CD7F32","#ff6699"],r=-1,n=0;n<e.length;n++)if(e[n].length>0&&t[n].length!==Math.pow(2,this.state.typeMap)){r++;for(var o=0,s=t[n][0].col,l=t[n][0].riga;o<t[n].length;){var i=h()("#"+t[n][o].riga+t[n][o].col);i.attr("class")&&h()("#"+i.attr("id")+r)&&(i.after("<div id="+i.attr("id")+r+"></div>"),i=h()("#"+t[n][o].riga+t[n][o].col+r)),i.css("border-color",a[r]),i.append("<div class='backgr' style='background-color: "+a[r]+"'></div>");var u=this.checkElInGroups(o,t[n],"destra"),c=this.checkElInGroups(o,t[n],"sotto"),p=this.checkElInGroups(o,t[n],"sinistra"),d=this.checkElInGroups(o,t[n],"sopra");u?c?p?t[n][o].col===s?i.addClass("TopLeft"):o===t[n].length/2-1||o===t[n].length-1?i.addClass("TopRig"):i.addClass("top"):d?o===t[n].length-2||o===t[n].length-1?i.addClass("BotLeft"):t[n][o].riga===l?i.addClass("TopLeft"):i.addClass("left"):i.addClass("TopLeft"):d?p?t[n][o].col===s?i.addClass("BotLeft"):o===t[n].length-1||o===t[n].length/2-1?i.addClass("BotRig"):i.addClass("bot"):i.addClass("BotLeft"):p?0===o?i.addClass("ClosedLeft"):o===t[n].length-1?i.addClass("ClosedRig"):i.addClass("top-bot"):i.addClass("ClosedLeft"):d?p?c?t[n][o].riga===l?i.addClass("TopRig"):o===t[n].length-1||o===t[n].length-2?i.addClass("BotRig"):i.addClass("right"):i.addClass("BotRig"):c?0===o?i.addClass("ClosedTop"):o===t[n].length-1?i.addClass("ClosedBot"):i.addClass("left-right"):i.addClass("ClosedBot"):p?c?i.addClass("TopRig"):i.addClass("ClosedRig"):c?i.addClass("ClosedTop"):i.addClass("monoGroup"),o++}}}},{key:"checkElInGroups",value:function(e,t,a){var r=this.state.squares,n=r[0].length,o=r[0].length;3===this.state.typeMap&&(n=2,o=4);for(var s=0;s<t.length;s++){if("destra"===a&&t[s].col===(t[e].col+1)%o&&t[s].riga===t[e].riga%n)return!0;if("sotto"===a&&t[s].col===t[e].col%o&&t[s].riga===(t[e].riga+1)%n)return!0;if("sinistra"===a){var l=t[e].col-1;if(l<0&&(l=o-1),t[s].col===l%o&&t[s].riga===t[e].riga%n)return!0}if("sopra"===a){var i=t[e].riga-1;if(i<0&&(i=n-1),t[s].col===t[e].col%o&&t[s].riga===i%n)return!0}}return!1}},{key:"drawSolution",value:function(e){h()(".Solution").show();var t=0;if("0"===e[0]||"1"===e[0])h()("#sol").append("<div>"+e[0]+"</div>");else for(var a=this.state.typeSol,r="SOP"===a?"+":"\xb7",n="SOP"===a?"groupSop":"groupPos",o=["red","blue","green","orange","#50C878","lightblue","#CD7F32","#ff6699"],s=0;s<e.length;s++){h()("#sol").append("<div id='sol"+s+"' class='"+n+"' style='background-color: "+o[s]+"'></div>");for(var l=0;l<e[s].length;l++)"'"!==e[s][l]?h()("#sol"+s).append(e[s][l]+" "):h()("#sol"+s).append("<span style='text-decoration: overline'>"+e[s][++l]+"</span> "),"+"!==e[s][l]&&t++;s!==e.length-1&&h()("#sol").append("<div class='plus'> "+r+" </div>")}h()("#costo").html("Literal Cost: "+t),h()(".Solution").css("left",parseInt(h()(".Solution").css("left"))-parseInt(h()(".Solution").css("width"))/2)}},{key:"render",value:function(){var e=this,t=this.state.squares,a=this.state.typeMap,r=this.state.perm,o=this.state.typeSol,s=0;return n.a.createElement("div",{key:s++},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null," Karnaugh Map Solver ")),n.a.createElement("div",{className:"bodyPage",key:s++},n.a.createElement("p",{className:"nameTab"}," Truth Table "),n.a.createElement("div",{className:"truthTable",key:s++},n.a.createElement(y,{squares:t,typeMap:a,perm:r,key:s++,onClick:function(t,a){return e.handleClick(t,a)},setRowOrColCell:function(t,a,r,n){return e.setRowOrColCell(t,a,r,n)}})),n.a.createElement("div",{className:"kMap"},n.a.createElement(m,{squares:t,typeMap:a,onClick:function(t,a){return e.handleClick(t,a)}})),n.a.createElement(C,{squares:t,typeMap:a,typeSol:o,onClick:function(){return e.Algorithm(t)},setTypeSol:function(t){return e.setTypeSol(t)},setMatrixSquare:function(t){return e.setMatrixSquare(t)},setTypeMap:function(t){return e.setTypeMap(t)}}),n.a.createElement("div",{className:"Solution"},n.a.createElement("div",null,o," form:"),n.a.createElement("div",{className:"sol",id:"sol"}),n.a.createElement("div",{id:"costo"}))))}}]),a}(n.a.Component);function M(e,t){if(1===e)return 1===t;for(var a=1;a<t;)a*=e;return a===t}s.a.render(n.a.createElement(E,{key:0}),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0daa67a1.chunk.js.map