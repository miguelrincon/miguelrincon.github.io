(function(t){function a(a){for(var n,i,c=a[0],s=a[1],u=a[2],p=0,f=[];p<c.length;p++)i=c[p],r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(a);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var l=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._v("\n  Using Echarts and VueJS to display pollution data from Twitter\n  "),e("Chart",{staticClass:"chart",attrs:{"chart-data":t.chartData}}),e("p",[t._v(t._s(t.status))]),e("p",[e("a",{attrs:{href:"#"},on:{click:function(a){return t.fetchData("beijingair")}}},[t._v("Load Beijing Data")]),t._v(" | \n    "),e("a",{attrs:{href:"#"},on:{click:function(a){return t.fetchData("cgshanghaiair")}}},[t._v("Load Shangai data")])])],1)},o=[],i=e("e814"),c=e.n(i),s=(e("28a5"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-chart",{attrs:{options:t.options}})}),u=[],l=e("9ca8"),p=(e("313e"),{name:"Chart",components:{"v-chart":l["a"]},props:{chartData:{type:Array,default:function(){return[]}}},watch:{chartData:function(t,a){this.options.xAxis.data=this.chartData.map(function(t){return t[0]}),this.options.series.data=this.chartData.map(function(t){return t[1]})}},data:function(){return{options:{tooltip:{trigger:"axis"},xAxis:{data:this.chartData.map(function(t){return t[0]})},yAxis:{min:0,max:400,splitLine:{show:!1}},toolbox:{left:"center",feature:{saveAsImage:{title:"Save as .png"}}},visualMap:{top:10,right:10,pieces:[{gt:0,lte:50,color:"#096"},{gt:50,lte:100,color:"#ffde33"},{gt:100,lte:150,color:"#ff9933"},{gt:150,lte:200,color:"#cc0033"},{gt:200,lte:300,color:"#660099"},{gt:300,color:"#7e0023"}],outOfRange:{color:"#999"}},series:{name:"Air Quality Index",type:"line",data:this.chartData.map(function(t){return t[1]}),markLine:{silent:!0,data:[{yAxis:50},{yAxis:100},{yAxis:150},{yAxis:200},{yAxis:300}]}}}}}}),f=p,h=(e("7988"),e("2877")),d=Object(h["a"])(f,s,u,!1,null,"e0c2c6d4",null),g=d.exports,v=e("bc3a"),m=e.n(v),y=function(){var t="VmYyltpbNNBlBExlduz06rj9o",a="bdth5ApuOhzquiJMOi3MuoIPd5gSSif6FtWoNBfgG83jXLTnYT",e=new URLSearchParams;return e.append("grant_type","client_credentials"),m.a.post("https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token",e,{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},auth:{username:t,password:a}})},b=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cgshanghaiair",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return m.a.get("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json",{params:{screen_name:a,count:e},headers:{Authorization:"Bearer ".concat(t)}})},x={name:"app",components:{Chart:g},data:function(){return{chartData:[["",0],[""],0,[""],0],status:"",screenName:"",time:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cgshanghaiair";this.status="Authenticating to Twitter API...",y().then(function(e){var n=e.data.access_token;return t.status="Loading data from @".concat(a,"..."),b(n,a,100).then(function(e){var n=e.data.reverse().map(function(t){var a=t.text.split("; "),e=a[0],n=c()(a[2]);return[e,n]}),r=new Date;t.status="Data loaded from @".concat(a," at ").concat(r.getHours(),":").concat(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes()),t.chartData=n})}).catch(function(a){t.status="Error loading the data! Please try later..."})}}},w=x,_=(e("034f"),Object(h["a"])(w,r,o,!1,null,null,null)),D=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,a,e){},7988:function(t,a,e){"use strict";var n=e("aafa"),r=e.n(n);r.a},aafa:function(t,a,e){}});
//# sourceMappingURL=app.3702ee27.js.map