(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],h=0,p=[];h<o.length;h++)s=o[h],a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={0:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,1]),r()})({"/C2I":function(t,e,r){"use strict";var n=r("RxlZ"),a=r.n(n);a.a},0:function(t,e,r){t.exports=r("Vtdi")},QcLJ:function(t,e,r){"use strict";var n=r("m0EA"),a=r.n(n);a.a},RxlZ:function(t,e,r){},"To4/":function(t,e,r){},Vtdi:function(t,e,r){"use strict";r.r(e);r("yt8O"),r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("bar-chart-example"),r("div",{staticClass:"menu-container"},[r("div",{staticClass:"menu"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.app.name))]),r("h2",{staticClass:"subtitle"},[t._v(t._s(t.app.des))])])])]),r("ul",{staticClass:"links"},[r("li",[r("a",{attrs:{href:t.app.repo}},[r("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icons.gitHub)}})])])])],1)},i=[],s=r("uI5x"),o=r.n(s),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chart"},[r("d3-barchart",{attrs:{data:t.chartData,options:t.options}}),r("d3-barchart",{attrs:{data:t.chartData2,options:t.options}})],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.bars.length?r("svg",{staticClass:"d3-bar-chart",attrs:{width:t.w,height:t.h}},[t.renderGradient?r("defs",[r("linearGradient",{attrs:{id:t.gradientId,x1:"0",x2:"100%",y1:"0",y2:"0"}},t._l(t.bars,function(t,e){return r("stop",{key:e,attrs:{offset:t.percentX+"%","stop-color":t.color}})}))],1):t._e(),t.opts.axis.linesY?r("g",{staticClass:"lines"},t._l(t.axisY,function(e,n){return r("line",{staticClass:"line-y",attrs:{x1:t.margin,x2:t.w,y1:e.y,y2:e.y}})})):t._e(),t.opts.axis?r("g",{staticClass:"axis"},[r("line",{staticClass:"x-axis",attrs:{x1:t.oX,x2:t.w,y1:t.hh,y2:t.hh}}),r("line",{staticClass:"y-axis",attrs:{x1:t.oX,x2:t.oX,y1:"0",y2:t.hh}}),r("g",{staticClass:"axis-labels"},[t._l(t.axisY,function(e,n){return[t.opts.axis.valuesY?r("text",{staticClass:"axis-label",attrs:{x:"0",y:e.y}},[t._v(t._s(e.value))]):t._e()]})],2)]):t._e(),t.opts.curveBack?r("g",{staticClass:"curve-back"},[r("path",{style:t.curveBackStyle,attrs:{d:t.curve(t.opts.curveBack),stroke:t.curveBackStyle.stroke,fill:t.curveBackStyle.fill}})]):t._e(),r("g",{staticClass:"bars"},[t._l(t.bars,function(e,n){return[t.opts.bars?r("rect",{staticClass:"bar",style:t.barStyle(e),attrs:{width:e.w,height:e.y,x:t.barX(e),y:t.barY(e)},on:{click:function(r){t.barClick(r,e)}}}):t._e()]})],2),t.opts.curve?r("g",{staticClass:"curve"},[r("path",{style:t.curveStyle,attrs:{d:t.curve(t.opts.curve),stroke:t.curveStyle.stroke,fill:t.curveStyle.fill}})]):t._e(),r("g",{staticClass:"dummies"},[t._l(t.bars,function(e,n){return[(t.opts.tip||t.opts.line)&&e.yv>0?r("rect",{staticClass:"dummy-bar",class:t.opts.bars?"has-bars":"",attrs:{width:e.w,height:t.h,x:t.barX(e),y:"0"},on:{mouseover:function(r){r.preventDefault(),t.startMove(r,e)},mouseleave:function(r){t.stopMove(r,e)},click:function(r){t.barClick(r,e)},touchstart:function(r){t.barClick(r,e)}}}):t._e()]})],2),t.opts.marks?r("g",{staticClass:"marks"},[t._l(t.bars,function(e,n){return"square"===t.opts.marks.type?r("rect",{key:n,staticClass:"mark",style:t.markStyle(e),attrs:{x:t.barX(e)+t.barW/2-t.markSize/2,y:t.barY(e)-t.markSize/2,width:t.markSize,height:t.markSize}}):t._e()}),t._l(t.bars,function(e,n){return"square"!==t.opts.marks.type?r("circle",{key:n,staticClass:"mark",style:t.markStyle(e),attrs:{r:t.markSize/2,cx:t.barX(e)+t.barW/2,cy:t.barY(e)}}):t._e()})],2):t._e(),t.opts.line?r("g",{directives:[{name:"show",rawName:"v-show",value:t.over,expression:"over"}],staticClass:"chart-line"},[r("line",{staticClass:"line",attrs:{x1:t.lineX,x2:t.lineX,y1:0,y2:t.h-t.margin}})]):t._e(),t.opts.tip&&t.over?r("g",{staticClass:"chart-tip"},[t.opts.tipBack?r("rect",{staticClass:"chart-tip-back",attrs:{x:t.lineX+t.fontSize/2,y:0,width:t.labelW+"ex",height:t.label.length+.25+"em",rx:t.labelW/5,ry:t.label.lenght},on:{touchstart:function(e){t.barClick(t.over)}}}):t._e(),r("text",{staticClass:"label",attrs:{x:t.lineX+t.fontSize,y:"0","font-size":t.fontSize}},t._l(t.label,function(e,n){return r("tspan",{key:n,staticClass:"label-line",class:"l-"+n,attrs:{x:t.lineX+t.fontSize,dy:"1.2em"}},[t._v(t._s(e))])}))]):t._e()]):t._e()},h=[],p=(r("bHtr"),r("f3/d"),r("a1Th"),r("RW0V"),r("rGqo"),r("hhXQ"),r("a94B")),f=(r("91GP"),r("3Fae")),d=r("4jaM"),m=r("DBpu"),v=Object.assign({},f,d,m),y={labels:{x:!1,y:!1},axis:!1,padding:.1,colors:["orangered","lightgreen"],colorInterpol:null,getY:null,getX:null,line:!0,xUnits:"",yUnits:"",domain:{min:null,max:null},marks:{type:"point",size:10,style:null},curve:null,debug:!1,axisTicks:5,bars:{gradient:!1},tip:!0,fontSize:10,tipBack:!0,autoSize:{w:180,h:60}},b={name:"D3-bar-chart",props:{data:{type:Array},options:{type:Object,default:function(){return Object.assign({},y)}}},data:function(){return{w:800,h:500,colorInterpol:null,mouseX:30,mouseOffset:{x:0,y:0},over:!1,getY:Math.abs,gradientId:"svgGradient",colorScale:v.scaleLinear,curveBack:null,curveBackStyle:{},curveStyle:{},formatLabel:function(t,e,r){return["y: "+r(t.yv),"x: "+e(t.xv)]},formatX:function(t){return t},formatY:function(t){return t},opts:Object.assign({},y)}},created:function(){this.init()},mounted:function(){this.onResize()},watch:{options:function(t){this.init(),this.onResize()}},computed:{scaleX:function(){return v.scaleBand().domain(v.range(this.mappedData.length)).paddingInner(this.opts.padding).rangeRound([0,this.ww])},scaleY:function(){return v.scaleLinear().domain([this.min,this.max]).rangeRound([0,this.hh])},percentX:function(){return v.scaleLinear().domain([0,this.mappedData.length-1]).range([0,100])},percentY:function(){return v.scaleLinear().domain([this.min,this.max]).range([0,100])},renderGradient:function(){var t=this.opts.curve,e=this.opts.bars,r=this.opts.curveBack;return e&&e.gradient||t&&t.gradient||r&&r.gradient},colors:function(){if(this.opts.colorFunc)return this.opts.colorFunc;var t=function(t){return"red"};if(this.colorInterpol)t=v.scaleSequential().domain([this.max,this.min]).interpolator(this.colorInterpol);else if(this.opts.colors){var e,r=this.opts.colors,n=[this.max,this.min];Array.isArray(r)?e=r:"object"===Object(p["a"])(r)&&(e=Object.values(r),n=Object.keys(r)),t=this.colorScale().domain(n).range(e)}return t},axisY:function(){var t=this.opts.axisTicks;t=t<=this.max?t:this.max;for(var e=[],r=v.scaleLinear().domain([0,t]).rangeRound([this.min,this.max]),n=v.scaleLinear().domain([0,t]).rangeRound([this.hh,0]),a=0;a<=t;a++){var i=r(a);e.push({v:i,value:this.formatY(i),y:n(a)})}return e},bars:function(){var t=this;return this.mappedData.map(function(e,r){return{xv:r,yv:e,x:t.scaleX(r),y:t.scaleY(e)+1,color:t.colors(e),percentX:parseInt(t.percentX(r)),percentY:parseInt(t.percentY(e)),w:t.scaleX.bandwidth(),d:t.data[r]}})},oX:function(){return this.margin+this.barW/2},oY:function(){return this.margin/2},hh:function(){return this.h-this.margin/2},ww:function(){return this.w-this.margin},barW:function(){return this.scaleX.bandwidth()},barStep:function(){return this.scaleX.step()},barPad:function(){return this.scaleX.padding()},markSize:function(){return this.opts.marks&&this.opts.marks.size?this.opts.marks.size:this.barW?this.barW/10:5},min:function(){var t=this.opts.domain,e=this.mappedData;return null===t.min?v.min(e):t.min},max:function(){var t=this.opts.domain,e=this.mappedData;return null===t.max?v.max(e):t.max},mappedData:function(){var t=this,e=this.data.map(function(e){return t.getY(e)});return e},fontSize:function(){return this.opts.fontSize},fontSizeComp:function(){var t=v.max(this.data.map(function(t){return String(t).length}));return this.w/(t*this.data.length*2)},margin:function(){return this.opts.margin||this.h/10},lineX:function(){var t=this.over;return t?t.x+this.margin+t.w/2:0},label:function(){return this.createLabel(this.over)},labelW:function(){var t=v.max(this.label.map(function(t){return t.toString().length}));return t?t+1:0}},methods:{curve:function(t){var e=this.mappedData,r=this.barW,n=this.hh,a=v.scaleLinear().range([this.barX(this.bars[0])+r/2,this.barX(this.bars[this.bars.length-1])+r/2]),i=v.scaleLinear().range([n,0]),s=v.line().x(function(t,e){return a(e)}).y(function(t){return i(t)});t.type&&s.curve(this.curveType(t.type)),a.domain(v.extent(e,function(t,e){return e})),i.domain(v.extent(e,function(t){return t}));var o=s(e);return t.close&&(o+=this.closeCurve()),o},closeCurve:function(){var t=this.bars[0],e=this.bars[this.bars.length-1],r=this.barX(t)+t.w/2,n=this.barX(e)+e.w/2,a=[" L"+n,this.hh,"L"+r,this.hh,"Z"];return a.join(" ")},createLabel:function(t){return this.formatLabel(t,this.formatX,this.formatY)},init:function(){var t=this.opts,e=this.options;for(var r in e)t[r]=e[r];for(var n=["formatLabel","formatX","formatY"],a=0;a<n.length;a++){var i=n[a];e[i]&&(this[i]=e[i])}e.marks||(t.marks=null),this.setFucntion("colorInterpol"),this.setFucntion("colorScale");var s=e.getY;s&&"function"===typeof s&&(this.getY=s);var o=e.getX;o&&"function"===typeof o&&(this.getX=o),this.gradientId=this.randomName("svgGrad-");var c=this.opts.curve,u=this.opts.curveBack;u&&(u.type=c.type||null),this.curveStyle=this.gradientStyle("curve"),this.curveBackStyle=this.gradientStyle("curveBack")},setFucntion:function(t,e){var r=this.opts[t];r&&("function"===typeof r?this[t]=r:"function"===typeof v[r]&&(this[t]=v[r]))},onResize:function(){var t,e;this.options.size?(t=this.options.size.w,e=this.options.size.h):(t=this.$el.clientWidth,e=this.$el.clientHeight),this.w=t>0?t:this.opts.autoSize.w,this.h=e>0?e:this.opts.autoSize.h},gradientStyle:function(t){var e={},r=this.opts[t];if(r){e=r.style||{};var n="url(#"+this.gradientId+")";r.gradient&&(r.gradient.stroke&&(e.stroke=n),r.gradient.fill&&(e.fill=n))}return e},barX:function(t){var e=t.x+this.margin;return e},barY:function(t){var e=this.h-t.y-this.margin/2;return e},txtX:function(t){return t.x+t.w/2-String(t.x).length*this.fontSize/2+this.margin},barStyle:function(t){var e=this.gradientStyle("bars");return e.fill||(e.fill=this.opts.colors?t.color:""),e},markStyle:function(t){return this.opts.marks.style||this.barStyle(t)},curveType:function(t){if(t){if("function"===typeof t)return t;var e=v["curve"+t];if("function"===typeof e)return e;if(e=v[t],"function"===typeof e)return e}return v.curveMonotoneX},startMove:function(t,e){var r=0,n=0;t&&e&&(r=t.pageX-this.barX(e),n=t.pageY-this.barY(e)),this.mouseOffset={x:r,y:n},this.over=e},moveLine:function(t){this.mouseX=t.pageX-this.mouseOffset.x},stopMove:function(t,e){this.over=!1},randomName:function(t){var e=t||"";return e+=Math.random().toString(36).substring(7),e},barClick:function(t,e){this.over=this.over!==e&&e,this.$emit("barClick",{bar:e,event:t})}}},x=b,g=(r("/C2I"),r("KHd+")),k=Object(g["a"])(x,l,h,!1,null,null,null),S=k.exports,w={name:"bar-chart-example",components:{d3Barchart:S},data:function(){return{chartData:[{x:1,y:50},{x:2,y:4},{x:3,y:22},{x:4,y:11},{x:5,y:13},{x:6,y:15},{x:7,y:13},{x:8,y:50},{x:9,y:5},{x:10,y:13},{x:11,y:15},{x:12,y:28},{x:13,y:30},{x:15,y:17},{x:16,y:3},{x:17,y:11},{x:18,y:22},{x:19,y:2}],chartData2:[{x:10,y:13},{x:11,y:15},{x:12,y:28},{x:1,y:5},{x:13,y:30},{x:15,y:17},{x:16,y:3},{x:17,y:11},{x:2,y:4},{x:3,y:22},{x:4,y:11},{x:5,y:13},{x:6,y:90},{x:7,y:13},{x:8,y:12},{x:9,y:5},{x:18,y:22},{x:19,y:2}],options:{rules:!0,axis:!0,labels:!0,padding:.3,line:!0,points:!1,value:!1,gradient:{stroke:!0},curve:{},getX:function(t){return t.x},getY:function(t){return t.y}}}}},X=w,_=(r("p264"),Object(g["a"])(X,c,u,!1,null,null,null)),C=_.exports,z={name:"example",components:{BarChartExample:C},data:function(){return{icons:{gitHub:o.a},app:Object(
//{name:"vue-d3-barchart",des:"Vue component to draw bar charts using d3 ",
{version:"0.0.18",repo:"https://github.com/emiliorizzo/vue-d3-barchart"})}}},Y=z,O=(r("QcLJ"),Object(g["a"])(Y,a,i,!1,null,null,null)),j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},m0EA:function(t,e,r){},p264:function(t,e,r){"use strict";var n=r("To4/"),a=r.n(n);a.a},uI5x:function(t,e){t.exports='<svg height="128" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="128" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>'}});
//# sourceMappingURL=app.252c7abd.js.map