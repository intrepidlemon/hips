webpackJsonp([1],{"6NUz":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},a,!1,function(t){i("mGSF")},null,null).exports,r=i("/ocq"),s=i("Gu7T"),u=i.n(s),c=i("0BPL"),l=function(){var t=0;return function(){return 1/(t+=1)}},m=function t(e,i,n,a){var o=i.dislocation,r=i.failure,s=i.success,u=n.dislocation,c=n.failure,l=u(),m=c(),v=1-l-m,f=0;return f+=l*o(),f+=m*r(),f+=v*s(),f*=a(),e>0?f+.97*t(e-1,i,n,a):f},v=function(t,e){var i=t,n=function(t){var e=t.years,i=6/(e*(e+1)*(2*e+1));return function(t){return Math.pow(t,2)*i}}({years:e}),a=0;return function(){return i-=t*n(a),a+=1,Math.max(0,i)}},f=function(t){var e,i=t.success,n=void 0===i?100:i,a=t.dislocation,o=void 0===a?5:a,r=t.failure,s=void 0===r?0:r,u=t.years;return{success:v(n,void 0===u?10:u),dislocation:(e=o,function(){return e}),failure:function(t){return function(){return t}}(s)}},d=function(t){var e=t.years,i=t.percent,n=function(t){var e=t.years,i=6*(1-t.percent)/(e*(e+1)*(2*e+1));return function(t){return Math.pow(t,2)*i}}({years:e,percent:i}),a=n(e),o=0;return function(){return(o+=1)<e?n(o):a}},p=function(t,e,i,n,a,o){var r=i.totalUtils,s=i.hemiUtils,u=n.totalLongetivity,v=n.hemiLongetivity,p=a.totalDislocationRate,h=a.hemiDislocationRate;t=function(t){var e=t.mean,i=t.std,n=void 0===i?.5:i;return c.jStat.normal.sample(e,n)}({mean:t,std:e});var g,y,_,$=function(t){var e,i=t.total,n=t.hemi;return{total:(e=i,function(){return e}),hemi:function(t){return function(){return t}}(n)}}({total:p,hemi:h}),b=$.total,L=$.hemi,R=(y=(g={total:u,hemi:v}).total,_=g.hemi,{total:d(y),hemi:d(_)}),P=R.total,x=R.hemi,w=o?l():function(){return 1},D=o?l():function(){return 1};return{total:m(t,f(r),{dislocation:b,failure:P},w),hemi:m(t,f(s),{dislocation:L,failure:x},D)}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"parameters"}},[i("div",{staticClass:"section"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.useIncrementalGain,expression:"useIncrementalGain"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useIncrementalGain)?t._i(t.useIncrementalGain,null)>-1:t.useIncrementalGain},on:{change:function(e){var i=t.useIncrementalGain,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=t._i(i,null);n.checked?o<0&&(t.useIncrementalGain=i.concat([null])):o>-1&&(t.useIncrementalGain=i.slice(0,o).concat(i.slice(o+1)))}else t.useIncrementalGain=a}}}),t._v(" "),i("label",[t._v("use incremental gain")])]),t._v(" "),i("label",[t._v("trials")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.trials,expression:"trials",modifiers:{number:!0}}],domProps:{value:t.trials},on:{input:function(e){e.target.composing||(t.trials=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("years")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.years,expression:"years",modifiers:{number:!0}}],domProps:{value:t.years},on:{input:function(e){e.target.composing||(t.years=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("total success utility")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.totalSuccess,expression:"totalSuccess",modifiers:{number:!0}}],domProps:{value:t.totalSuccess},on:{input:function(e){e.target.composing||(t.totalSuccess=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("hemi success utility")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hemiSuccess,expression:"hemiSuccess",modifiers:{number:!0}}],domProps:{value:t.hemiSuccess},on:{input:function(e){e.target.composing||(t.hemiSuccess=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("dislocation utility")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.dislocation,expression:"dislocation",modifiers:{number:!0}}],domProps:{value:t.dislocation},on:{input:function(e){e.target.composing||(t.dislocation=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("total longetivity in years")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.totalLongetivityYears,expression:"totalLongetivityYears",modifiers:{number:!0}}],domProps:{value:t.totalLongetivityYears},on:{input:function(e){e.target.composing||(t.totalLongetivityYears=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("hemi longetivity in years")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hemiLongetivityYears,expression:"hemiLongetivityYears",modifiers:{number:!0}}],domProps:{value:t.hemiLongetivityYears},on:{input:function(e){e.target.composing||(t.hemiLongetivityYears=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("total longetivity percent survive")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.totalLongetivityPercent,expression:"totalLongetivityPercent",modifiers:{number:!0}}],domProps:{value:t.totalLongetivityPercent},on:{input:function(e){e.target.composing||(t.totalLongetivityPercent=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("hemi longetivity percent survive")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hemiLongetivityPercent,expression:"hemiLongetivityPercent",modifiers:{number:!0}}],domProps:{value:t.hemiLongetivityPercent},on:{input:function(e){e.target.composing||(t.hemiLongetivityPercent=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("total dislocation rate")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.totalDislocationRate,expression:"totalDislocationRate",modifiers:{number:!0}}],domProps:{value:t.totalDislocationRate},on:{input:function(e){e.target.composing||(t.totalDislocationRate=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("hemi dislocation rate")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hemiDislocationRate,expression:"hemiDislocationRate",modifiers:{number:!0}}],domProps:{value:t.hemiDislocationRate},on:{input:function(e){e.target.composing||(t.hemiDislocationRate=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("label",[t._v("failure utility")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.failure,expression:"failure",modifiers:{number:!0}}],domProps:{value:t.failure},on:{input:function(e){e.target.composing||(t.failure=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},staticRenderFns:[]};var g=i("VU/8")({name:"Parameters",computed:{years:{get:function(){return this.$store.state.parameters.years},set:function(t){this.$store.commit("updateYears",t)}},relativeValueOfHemi:{get:function(){return this.$store.state.parameters.relativeValueOfHemi},set:function(t){this.$store.commit("updateRelativeValueOfHemi",t)}},totalSuccess:{get:function(){return this.$store.state.parameters.totalSuccess},set:function(t){this.$store.commit("updateTotalSuccess",t)}},hemiSuccess:{get:function(){return this.$store.state.parameters.hemiSuccess},set:function(t){this.$store.commit("updateHemiSuccess",t)}},failure:{get:function(){return this.$store.state.parameters.failure},set:function(t){this.$store.commit("updateFailure",t)}},dislocation:{get:function(){return this.$store.state.parameters.dislocation},set:function(t){this.$store.commit("updateDislocation",t)}},totalLongetivityYears:{get:function(){return this.$store.state.parameters.totalLongetivityYears},set:function(t){this.$store.commit("updateTotalLongetivityYears",t)}},totalLongetivityPercent:{get:function(){return this.$store.state.parameters.totalLongetivityPercent},set:function(t){this.$store.commit("updateTotalLongetivityPercent",t)}},hemiLongetivityYears:{get:function(){return this.$store.state.parameters.hemiLongetivityYears},set:function(t){this.$store.commit("updateHemiLongetivityYears",t)}},hemiLongetivityPercent:{get:function(){return this.$store.state.parameters.hemiLongetivityPercent},set:function(t){this.$store.commit("updateHemiLongetivityPercent",t)}},hemiDislocationRate:{get:function(){return this.$store.state.parameters.hemiDislocationRate},set:function(t){this.$store.commit("updateHemiDislocationRate",t)}},totalDislocationRate:{get:function(){return this.$store.state.parameters.totalDislocationRate},set:function(t){this.$store.commit("updateTotalDislocationRate",t)}},trials:{get:function(){return this.$store.state.parameters.trials},set:function(t){this.$store.commit("updateTrials",t)}},useIncrementalGain:{get:function(){return this.$store.state.parameters.useIncrementalGain},set:function(t){this.$store.commit("updateUseIncrementalGain",t)}}}},h,!1,function(t){i("nLTe")},"data-v-0d5866c4",null).exports,y=function(t){return 0===t.length?null:t.reduce(function(t,e){return t+e},0)/t.length},_=function(t){return Math.min.apply(Math,u()(t))},$=function(t){return Math.max.apply(Math,u()(t))},b={name:"Points",computed:{total:function(){return this.$store.state.results.total},hemi:function(){return this.$store.state.results.hemi},points:function(){return t=this.total,e=this.hemi,i=Math.min(_(t),_(e)),n=Math.max($(t),$(e)),a=n-i,o=function(t){return(t-i)/a},{min:i,max:n,half:(i+n)/2,total:t.map(o),hemi:e.map(o)};var t,e,i,n,a,o},jitter:function(){return[].concat(u()(Array(this.$store.state.parameters.trials))).map(function(){return Math.random()})}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100",height:"100",viewBox:"-2 0 102 101"}},[t._l(t.points.total,function(e,n){return i("circle",{key:e+"-"+n,attrs:{r:"0.3",cx:2+45*t.jitter[n],cy:98-95*e}})}),t._v(" "),t._l(t.points.hemi,function(e,n){return i("circle",{key:e+"-"+n,attrs:{r:"0.3",cx:53+45*t.jitter[n],cy:98-95*e}})})],2)},staticRenderFns:[]};var R={name:"Visualize",components:{Points:i("VU/8")(b,L,!1,function(t){i("logp")},"data-v-4886ef17",null).exports},computed:{total:function(){return this.$store.state.results.total},hemi:function(){return this.$store.state.results.hemi},min:function(){return Math.min(_(this.total),_(this.hemi))},max:function(){return Math.max($(this.total),$(this.hemi))},half:function(){return(this.max+this.min)/2},averageTotal:function(){return this.$store.getters.averageTotal},averageHemi:function(){return this.$store.getters.averageHemi}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"visualize"}},[i("div",{staticClass:"y"},[i("div",[t._v(" "+t._s(t.max.toFixed(2))+" ")]),t._v(" "),i("div",[t._v(" "+t._s(t.half.toFixed(2))+" ")]),t._v(" "),i("div",[t._v(" "+t._s(t.min.toFixed(2))+" ")])]),t._v(" "),i("div",{staticClass:"main"},[i("Points"),t._v(" "),i("div",{staticClass:"x"},[i("div",[i("strong",[t._v("total")]),t._v(": "+t._s(t.averageTotal.toFixed(2))+" average")]),t._v(" "),i("div",[i("strong",[t._v("hemi")]),t._v(": "+t._s(t.averageHemi.toFixed(2))+" average")])])],1)])},staticRenderFns:[]};var x={name:"Results",components:{Visualize:i("VU/8")(R,P,!1,function(t){i("6NUz")},"data-v-6a3e0e21",null).exports},methods:{close:function(){this.$store.commit("updateResults",!1)}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"results"},on:{click:this.close}},[e("div",{staticClass:"interior"},[e("h1",[this._v("Utility")]),this._v(" "),e("Visualize")],1)])},staticRenderFns:[]};var D={name:"Calculator",components:{Parameters:g,Results:i("VU/8")(x,w,!1,function(t){i("wOmr")},"data-v-619e53f6",null).exports},computed:{showResults:{get:function(){return this.$store.state.ui.showResults},set:function(t){this.$store.commit("updateResults",t)}}},methods:{single:function(){var t=this.$store.state.parameters,e=t.years,i=t.totalSuccess,n=t.hemiSuccess,a=t.failure,o=t.dislocation,r=t.totalLongetivityYears,s=t.hemiLongetivityYears,u=t.totalLongetivityPercent,c=t.hemiLongetivityPercent,l=t.totalDislocationRate,m=t.hemiDislocationRate,v=t.useIncrementalGain,f=p(e,e/2,{totalUtils:{success:i,failure:a,dislocation:o,years:r},hemiUtils:{success:n,failure:a,dislocation:o,years:s}},{totalLongetivity:{years:r,percent:u},hemiLongetivity:{years:s,percent:c}},{totalDislocationRate:l,hemiDislocationRate:m},v);this.$store.commit("pushTotal",f.total),this.$store.commit("pushHemi",f.hemi)},all:function(){var t=this;this.showResults=!0,this.$store.commit("clear"),[].concat(u()(Array(this.$store.state.parameters.trials))).forEach(function(e,i){return setTimeout(t.single,3*i)})}}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"calculator"}},[i("h1",[t._v("Calculator 💃")]),t._v(" "),i("Parameters"),t._v(" "),i("button",{on:{click:t.all}},[t._v("Calculate")]),t._v(" "),t.showResults?i("Results"):t._e()],1)},staticRenderFns:[]};var S=i("VU/8")(D,U,!1,function(t){i("daF0")},"data-v-29b83ac0",null).exports;n.a.use(r.a);var Y=new r.a({routes:[{path:"/",name:"Calculator",component:S}]}),H=i("NYxO"),T={state:{years:5,relativeValueOfHemi:.5,totalSuccess:100,hemiSuccess:100,failure:0,dislocation:5,totalLongetivityYears:12,totalLongetivityPercent:.8,hemiLongetivityYears:6,hemiLongetivityPercent:.8,hemiDislocationRate:.1,totalDislocationRate:.14,trials:1e3,useIncrementalGain:!1},mutations:{updateYears:function(t,e){t.years=e},updateRelativeValueOfHemi:function(t,e){t.relativeValueOfHemi=e},updateTotalSuccess:function(t,e){t.totalSuccess=e},updateHemiSuccess:function(t,e){t.hemiSuccess=e},updateFailure:function(t,e){t.failure=e},updateDislocation:function(t,e){t.dislocation=e},updateTotalLongetivityYears:function(t,e){t.totalLongetivityYears=e},updateTotalLogetivityPercent:function(t,e){t.totalLongetivityPercent=e},updateHemiLongetivityYears:function(t,e){t.hemiLongetivityYears=e},updateHemiLongetivityPercent:function(t,e){t.hemiLongetivityPercent=e},updateHemiDislocationRate:function(t,e){t.hemiDislocationRate=e},updateTotalDislocationRate:function(t,e){t.totalDislocationRate=e},updateTrials:function(t,e){t.trials=e},updateUseIncrementalGain:function(t,e){t.useIncrementalGain=e}}},G={state:{total:[],hemi:[]},mutations:{clear:function(t){t.total=[],t.hemi=[]},pushTotal:function(t,e){t.total.push(e)},pushHemi:function(t,e){t.hemi.push(e)}},getters:{averageTotal:function(t){return y(t.total)},averageHemi:function(t){return y(t.hemi)}}},N={state:{showResults:!1},mutations:{updateResults:function(t,e){t.showResults=e}}};n.a.use(H.a);var F=new H.a.Store({modules:{parameters:T,results:G,ui:N},strict:!1});n.a.config.productionTip=!1,new n.a({el:"#app",router:Y,store:F,components:{App:o},template:"<App/>"})},daF0:function(t,e){},logp:function(t,e){},mGSF:function(t,e){},nLTe:function(t,e){},wOmr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9647d28663741254fb61.js.map