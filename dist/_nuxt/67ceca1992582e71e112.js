(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{194:function(t,e,r){"use strict";function n(t){for(var e=!1,i=0;i<t.length;i++){if(""===t[i]){e=!1;break}e=!0}return e}r.d(e,"a",(function(){return n}))},231:function(t,e,r){"use strict";r.r(e);r(107);var n=r(196),o=r(194),l={components:{Datepicker:n.a},head:{},data:function(){return{prePage:"/",tel:"",birth:"",errorStatus:{phone:!1,phoneLen:!1},formStatus:!1}},methods:{verification:function(t){var e=[this.tel,this.birth];this.formStatus=Object(o.a)(e)},phoneCheck:function(){var t=event.target.value;/[0-9]/g.test(t)?this.errorStatus.phone=!1:this.errorStatus.phone=""!==t},phoneCheckLen:function(t){var e=t.target.value.split(""),r=t.target.maxLength;e.length!==r&&0!==e.length?this.errorStatus.phoneLen=!0:this.errorStatus.phoneLen=!1;var n=[this.tel,this.birth];this.formStatus=Object(o.a)(n)}}},c=r(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"header"},[r("div",{staticClass:"header__link"},[r("a",{attrs:{href:t.prePage}})]),r("div",{staticClass:"header__title"},[t._v(" 重設密碼")])]),t._m(0),r("form",{staticClass:"form-style",attrs:{id:"user-verification"}},[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"form-title"},[t._v("輸入驗證資料")]),r("div",{staticClass:"form-style__item"},[r("label",{staticClass:"form-style__item__label",attrs:{for:"user-verification-tel"}},[t._v("手機號碼"),t.errorStatus.phone?r("span",{staticClass:"format-error"},[t._v("格式錯誤，請輸入數字!")]):t._e(),t.errorStatus.phoneLen?r("span",{staticClass:"format-error"},[t._v("號碼長度不正確!")]):t._e()]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"form-style__item__input",attrs:{type:"text",name:"user-verification-tel",placeholder:"請輸入手機號碼",maxlength:"10",id:"user-verification-tel"},domProps:{value:t.tel},on:{keyup:t.phoneCheck,change:t.phoneCheckLen,input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),r("div",{staticClass:"form-style__item"},[r("label",{staticClass:"form-style__item__label",attrs:{for:"user-verification-birth"}},[t._v("生日")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.birth,expression:"birth"}],staticClass:"form-style__item__input",attrs:{type:"text",name:"user-verification-birth",placeholder:"xxxx/xx/xx",id:"user-verification-birth"},domProps:{value:t.birth},on:{change:t.verification,input:function(e){e.target.composing||(t.birth=e.target.value)}}})])]),r("div",{staticClass:"form-style__submit",class:{unblock:t.formStatus}},[r("input",{attrs:{type:"submit",value:"下一步",id:"user-verification-submit"}})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bar__item now-step"},[this._v("1")]),e("div",{staticClass:"progress-bar__item"},[this._v("2")]),e("div",{staticClass:"progress-bar__item"},[this._v("3")])])])}],!1,null,null,null);e.default=component.exports}}]);