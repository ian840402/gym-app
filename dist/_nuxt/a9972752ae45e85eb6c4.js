(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(t,r,e){"use strict";function c(t){for(var r=!1,i=0;i<t.length;i++){if(""===t[i]){r=!1;break}r=!0}return r}e.d(r,"a",(function(){return c}))},206:function(t,r,e){t.exports=e.p+"img/4c164c3.png"},207:function(t,r,e){t.exports=e.p+"img/6abd4f8.png"},208:function(t,r,e){t.exports=e.p+"img/d2a2ca8.png"},227:function(t,r,e){"use strict";e.r(r);var c=[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"card-description"},[r("div",{staticClass:"card-description__title"},[this._v("可接受之信用卡")]),r("div",{staticClass:"card-description__icon"},[r("div",{staticClass:"card-description__icon__item icon-visa"},[r("img",{attrs:{src:e(206)}})]),r("div",{staticClass:"card-description__icon__item icon-master-card"},[r("img",{attrs:{src:e(207)}})]),r("div",{staticClass:"card-description__icon__item icon-jcb"},[r("img",{attrs:{src:e(208)}})])])])}],d=(e(107),e(189)),l={data:function(){return{prePage:"/credit-card",isFill:!1,errorStatus:!1,cardNumber_1:"",cardNumber_2:"",cardNumber_3:"",cardNumber_4:"",cardDate:"",cardCvc:"",cardName:"",cardDefault:!1,cardSubscription:!1,formStatus:!1}},methods:{verification:function(){var t=[this.cardNumber_1,this.cardNumber_2,this.cardNumber_3,this.cardNumber_4,this.cardDate,this.cardCvc,this.cardName];this.formStatus=Object(d.a)(t)},creditCardNum:function(t){this.isFill=!0;var r=t.target.nextElementSibling,e=t.target.value,c=t.target.value.split(""),d=t.target.maxLength;/[1-9]/g.test(e)?(this.errorStatus=!1,c.length===d&&null!==r&&r.focus()):this.errorStatus=""!==e,""==this.cardNumber_1&&""==this.cardNumber_2&&""==this.cardNumber_3&&""==this.cardNumber_4&&(this.isFill=!1)},creditCardNumFirst:function(){""===this.$refs.cardNumberFirst.value&&this.$refs.cardNumberFirst.focus()}}},n=e(18),component=Object(n.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header__link"},[e("a",{attrs:{href:t.prePage}})]),e("div",{staticClass:"header__title"},[t._v("新增卡片")])]),e("div",{staticClass:"main"},[e("form",{staticClass:"card-form-style",attrs:{id:"add-credit-card"}},[e("div",{staticClass:"form-wrapper"},[t._m(0),e("div",{staticClass:"card-form-style__item"},[e("label",{staticClass:"card-form-style__item__label",attrs:{for:"card-number-1"}},[t._v("卡號")]),e("div",{staticClass:"card-number-placeholder",class:{_wright:t.isFill}},[t._v("請輸入您的信用卡號")]),e("div",{staticClass:"card-form-style__item__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber_1,expression:"cardNumber_1"}],ref:"cardNumberFirst",staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-number-1",maxlength:"4",id:"card-number-1"},domProps:{value:t.cardNumber_1},on:{keyup:t.creditCardNum,change:t.verification,input:function(r){r.target.composing||(t.cardNumber_1=r.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber_2,expression:"cardNumber_2"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-number-2",maxlength:"4",id:"card-number-2"},domProps:{value:t.cardNumber_2},on:{keyup:t.creditCardNum,click:t.creditCardNumFirst,change:t.verification,input:function(r){r.target.composing||(t.cardNumber_2=r.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber_3,expression:"cardNumber_3"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-number-3",maxlength:"4",id:"card-number-3"},domProps:{value:t.cardNumber_3},on:{keyup:t.creditCardNum,click:t.creditCardNumFirst,change:t.verification,input:function(r){r.target.composing||(t.cardNumber_3=r.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber_4,expression:"cardNumber_4"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-number-4",maxlength:"4",id:"card-number-4"},domProps:{value:t.cardNumber_4},on:{keyup:t.creditCardNum,click:t.creditCardNumFirst,change:t.verification,input:function(r){r.target.composing||(t.cardNumber_4=r.target.value)}}})]),t.errorStatus?e("div",{staticClass:"card-number-error"},[t._v("請輸入數字!")]):t._e()]),e("div",{staticClass:"card-form-style__wrapper"},[e("div",{staticClass:"card-form-style__item"},[e("label",{staticClass:"card-form-style__item__label",attrs:{for:"card-date-MM"}},[t._v("有效期限")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardDate,expression:"cardDate"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-date",placeholder:"MM/YY",id:"card-date"},domProps:{value:t.cardDate},on:{change:t.verification,input:function(r){r.target.composing||(t.cardDate=r.target.value)}}})]),e("div",{staticClass:"card-form-style__item"},[e("label",{staticClass:"card-form-style__item__label",attrs:{for:"card-cvc"}},[t._v("CVC")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardCvc,expression:"cardCvc"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-cvc",placeholder:"3-4位數字",id:"card-cvc"},domProps:{value:t.cardCvc},on:{change:t.verification,input:function(r){r.target.composing||(t.cardCvc=r.target.value)}}})])]),e("div",{staticClass:"card-form-style__item"},[e("label",{staticClass:"card-form-style__item__label",attrs:{for:"card-name"}},[t._v("英文姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardName,expression:"cardName"}],staticClass:"card-form-style__item__input",attrs:{type:"text",name:"card-name",placeholder:"請輸入卡片上英文姓名",id:"card-name"},domProps:{value:t.cardName},on:{change:t.verification,input:function(r){r.target.composing||(t.cardName=r.target.value)}}})]),e("div",{staticClass:"card-form-style__global"},[e("div",{staticClass:"card-form-style__global__item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardDefault,expression:"cardDefault"}],staticClass:"card-form-style__global__item__checkbox",attrs:{type:"checkbox",name:"card-default",placeholder:"請輸入卡片上英文姓名",id:"card-default"},domProps:{checked:Array.isArray(t.cardDefault)?t._i(t.cardDefault,null)>-1:t.cardDefault},on:{change:function(r){var e=t.cardDefault,c=r.target,d=!!c.checked;if(Array.isArray(e)){var l=t._i(e,null);c.checked?l<0&&(t.cardDefault=e.concat([null])):l>-1&&(t.cardDefault=e.slice(0,l).concat(e.slice(l+1)))}else t.cardDefault=d}}}),e("label",{staticClass:"card-form-style__global__item__label",attrs:{for:"card-default"}},[t._v("設為預設卡")])]),e("div",{staticClass:"card-form-style__global__item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardSubscription,expression:"cardSubscription"}],staticClass:"card-form-style__global__item__checkbox",attrs:{type:"checkbox",name:"card-subscription",placeholder:"請輸入卡片上英文姓名",id:"card-subscription"},domProps:{checked:Array.isArray(t.cardSubscription)?t._i(t.cardSubscription,null)>-1:t.cardSubscription},on:{change:function(r){var e=t.cardSubscription,c=r.target,d=!!c.checked;if(Array.isArray(e)){var l=t._i(e,null);c.checked?l<0&&(t.cardSubscription=e.concat([null])):l>-1&&(t.cardSubscription=e.slice(0,l).concat(e.slice(l+1)))}else t.cardSubscription=d}}}),e("label",{staticClass:"card-form-style__global__item__label",attrs:{for:"card-subscription"}},[t._v("設為定期定額扣款")])])])]),e("div",{staticClass:"card-form-style__submit",class:{unblock:t.formStatus}},[e("input",{attrs:{type:"submit",value:"確定新增",id:"submit"}})])])])])}),c,!1,null,null,null);r.default=component.exports}}]);