(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(t,e,c){t.exports=c.p+"img/ffa4baa.png"},204:function(t,e,c){"use strict";c.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-image"},[e("img",{attrs:{src:c(184)}})])}],n={head:{title:"課程方案"},data:function(){return{prePage:"/",selected:0,course:[{type:"standard",title:"課程方案",lesson:[{id:"1",cid:"#A0000",title:"BUNGEE",image:"",type:"小試身手",price:"3500"},{id:"2",cid:"#B0000",title:"BUNGEE",image:"",type:"小試身手",price:"2500"},{id:"3",cid:"#C0000",title:"BUNGEE",image:"",type:"小試身手",price:"1500"}]},{type:"member",title:"會員方案",lesson:[{id:"1",cid:"#A0000",title:"尊爵金卡",image:"",type:"重訓達人",price:"3500"},{id:"2",cid:"#B0000",title:"優等銀卡",image:"",type:"進階健身",price:"2500"},{id:"3",cid:"#C0000",title:"健康活力卡",image:"",type:"小試身手",price:"1500"}]}]}},methods:{tabChange:function(t){this.selected=t}}},r=c(18),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[c("div",{staticClass:"header"},[c("div",{staticClass:"header__link"},[c("a",{attrs:{href:t.prePage}})]),c("div",{staticClass:"header__title"},[c("ul",{staticClass:"page-tab"},t._l(t.course,(function(e,l){return c("li",{staticClass:"page-tab__item",class:{active:t.selected==l},on:{click:function(e){return t.tabChange(l)}}},[t._v(t._s(e.title))])})),0)])]),c("div",{staticClass:"main"},[c("ul",{staticClass:"page-content"},t._l(t.course,(function(e,l){return c("li",{staticClass:"page-content__item",class:{active:t.selected==l}},[c("div",{staticClass:"course-wrapper"},[c("ul",{staticClass:"course-list"},t._l(e.lesson,(function(l,n){return c("li",{staticClass:"course-list__item",class:["course-item-"+(n+1)]},[c("a",{attrs:{href:"course/"+e.type+"/"+l.id}},[c("div",{staticClass:"course-list__item__wrapper"},[t._m(0,!0),c("div",{staticClass:"item-content-wrapper"},[c("div",{staticClass:"item-content"},[c("div",{staticClass:"item-content__title"},[t._v(t._s(l.title))]),c("div",{staticClass:"item-content__id"},[t._v(t._s(l.cid))]),c("div",{staticClass:"item-content__type"},[t._v(t._s(l.type))])]),c("div",{staticClass:"item-price"},[t._v("$"+t._s(l.price))])])])])])})),0)])])})),0)])])}),l,!1,null,null,null);e.default=component.exports}}]);