(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(t,e,c){t.exports=c.p+"img/f5257c0.png"},187:function(t,e,c){t.exports=c.p+"img/3e8201e.png"},203:function(t,e,c){"use strict";c.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"payment-result__msg__icon success-msg__icon"},[e("img",{attrs:{src:c(180)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"payment-result__msg__icon fail-msg__icon"},[e("img",{attrs:{src:c(187)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"payment-result__msg__description fail-msg__description"},[this._v("購買失敗"),e("br"),this._v("請重新操作一次")])}],n={data:function(){return{status:!0,prePage:"/",successConfirmPage:"#",failConfirmPage:"#"}}},l=c(18),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[c("div",{staticClass:"header"},[c("div",{staticClass:"header__link"},[c("a",{attrs:{href:t.prePage}})]),c("div",{staticClass:"header__title"},[t._v("付款結果")])]),c("div",{staticClass:"main"},[c("div",{staticClass:"payment-result"},[t.status?c("div",{staticClass:"payment-result__msg success-msg"},[t._m(0),c("div",{staticClass:"payment-result__msg__description success-msg__description"},[t._v("恭喜您付款成功！")])]):c("div",{staticClass:"payment-result__msg fail-msg"},[t._m(1),t._m(2)]),c("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.status)?t._i(t.status,null)>-1:t.status},on:{change:function(e){var c=t.status,r=e.target,n=!!r.checked;if(Array.isArray(c)){var l=t._i(c,null);r.checked?l<0&&(t.status=c.concat([null])):l>-1&&(t.status=c.slice(0,l).concat(c.slice(l+1)))}else t.status=n}}}),c("div",{staticClass:"confirm-btn"},[t.status?c("a",{attrs:{href:t.successConfirmPage}},[t._v("確認")]):c("a",{attrs:{href:t.failConfirmPage}},[t._v("確認")])])])])])}),r,!1,null,null,null);e.default=component.exports}}]);