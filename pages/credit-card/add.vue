<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 新增卡片
        .main
            form#add-credit-card.card-form-style
                .form-wrapper
                    .card-description
                        .card-description__title 可接受之信用卡
                        .card-description__icon
                            .card-description__icon__item.icon-visa
                                img(src="~/assets/images/visa-icon.png")
                            .card-description__icon__item.icon-master-card
                                img(src="~/assets/images/master-icon.png")
                            .card-description__icon__item.icon-jcb
                                img(src="~/assets/images/jcb-icon.png")
                    .card-form-style__item
                        label(for="card-number-1").card-form-style__item__label 卡號
                        .card-number-placeholder(:class="{_wright:isFill.cNum}") 請輸入您的信用卡號
                        .card-form-style__item__wrapper
                            input(type="text" name="card-number-1" maxlength="4" v-model="cardNumber_1" ref="cardNumberFirst" @keyup="creditCardNum" @change="verification")#card-number-1.card-form-style__item__input
                            input(type="text" name="card-number-2" maxlength="4" v-model="cardNumber_2" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-2.card-form-style__item__input
                            input(type="text" name="card-number-3" maxlength="4" v-model="cardNumber_3" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-3.card-form-style__item__input
                            input(type="text" name="card-number-4" maxlength="4" v-model="cardNumber_4" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-4.card-form-style__item__input
                        .card-number-error(v-if="errorStatus.cNum") 請輸入數字!
                    .card-form-style__wrapper
                        .card-form-style__item
                            label(for="card-date-mm").card-form-style__item__label 有效期限
                            .card-form-date-wrapper(@click="creditCardDateFirst")
                                input(type="text" name="card-date-mm" maxlength="2" placeholder="MM" ref="cardDateFirst" v-model="cardDateMM" @keyup="creditCardDate" @change="verification")#card-date-mm.card-form-style__item__date-input
                                .card-date-separate(:class="{isfill:isFill.cDate}") /
                                input(type="text" name="card-date-yy" maxlength="2" placeholder="YY" ref="inputDateContinu" v-model="cardDateYY"  @keyup="creditCardDate" @click="creditCardDateFirst" @change="verification")#card-date-yy.card-form-style__item__date-input
                            .card-number-error(v-if="errorStatus.cDate") 請輸入數字!
                        .card-form-style__item
                            label(for="card-cvc").card-form-style__item__label CVC
                            input(type="text" name="card-cvc" maxlength="4" placeholder="3-4位數字" v-model="cardCvc" @keyup="creditCardCvcCheck" @change="verification")#card-cvc.card-form-style__item__input
                            .card-number-error(v-if="errorStatus.cCvc") 請輸入數字!
                    .card-form-style__item
                        label(for="card-name").card-form-style__item__label 英文姓名
                        input(type="text" name="card-name" placeholder="請輸入卡片上英文姓名" v-model="cardName" @change="verification")#card-name.card-form-style__item__input
                    .card-form-style__global
                        .card-form-style__global__item
                            input(type="checkbox" name="card-default" placeholder="請輸入卡片上英文姓名" v-model="cardDefault")#card-default.card-form-style__global__item__checkbox
                            label(for="card-default").card-form-style__global__item__label 設為預設卡
                        .card-form-style__global__item
                            input(type="checkbox" name="card-subscription" placeholder="請輸入卡片上英文姓名" v-model="cardSubscription")#card-subscription.card-form-style__global__item__checkbox
                            label(for="card-subscription").card-form-style__global__item__label 設為定期定額扣款
                .card-form-style__submit(:class="{unblock: formStatus}")
                    input(type="submit" value="確定新增")#submit
</template>

<script>
import { formVerification } from '~/assets/js/form-verification.js'

export default {
    data(){
        return{
            prePage: "/credit-card",
            errorStatus: {
                cNum: false,
                cDate: false,
                cCvc: false,
            },
            isFill: {
                cNum: false,
                cDate: false,
            },
            cardNumber_1: "",
            cardNumber_2: "",
            cardNumber_3: "",
            cardNumber_4: "",
            cardDateMM: "",
            cardDateYY: "",
            cardCvc: "",
            cardName: "",
            cardDefault: false,
            cardSubscription: false,
            formStatus: false,
        }
    },
    methods:{
            verification(){
                let Arr = [
                    this.cardNumber_1,
                    this.cardNumber_2,
                    this.cardNumber_3,
                    this.cardNumber_4,
                    this.cardDateMM,
                    this.cardDateYY,
                    this.cardCvc,
                    this.cardName,
                ];
                
                this.formStatus = formVerification(Arr);

            },
            // 信用卡卡號自動跳格並檢視格式
            creditCardNum(event){
                this.isFill.cNum = true;

                let nextDom = event.target.nextElementSibling;
                let value = event.target.value;
                let valueArr = event.target.value.split("");
                let valueReg = /[1-9]/g;
                let maxlength = event.target.maxLength;

                if (valueReg.test(value)) {
                    this.errorStatus.cNum = false;
                    if (valueArr.length === maxlength && nextDom !== null) {
                        nextDom.focus();
                    }
                } else {
                    if (value !== "") {
                        this.errorStatus.cNum = true;
                    } else {
                        this.errorStatus.cNum = false;
                    }
                }

                if (this.cardNumber_1 == "" && this.cardNumber_2 == "" && this.cardNumber_3 == "" && this.cardNumber_4 == "") {
                    this.isFill.cNum = false;
                }
            },
            // 強制從第一格開始填寫信用卡號
            creditCardNumFirst(){
                if (this.$refs.cardNumberFirst.value === "") {
                    this.$refs.cardNumberFirst.focus();
                }
            },
            // 信用卡有效期限自動跳格並檢視格式
            creditCardDate(event){
                let nextDom = event.target.nextElementSibling;
                let value = event.target.value;
                let valueArr = event.target.value.split("");
                let valueReg = /[1-9]/g;
                let maxlength = event.target.maxLength;

                if (valueReg.test(value)) {
                    this.errorStatus.cDate = false;
                    if (valueArr.length === maxlength && nextDom !== null) {
                        if (nextDom.tagName === "INPUT") {
                            nextDom.focus();
                        } else {
                            this.$refs.inputDateContinu.focus();
                        }
                    }
                } else {
                    if (value !== "") {
                        this.errorStatus.cDate = true;
                    } else {
                        this.errorStatus.cDate = false;
                    }
                }
                if (this.cardDateMM == "" && this.cardDateYY == "") {
                    this.isFill.cDate = false;
                } else {
                    this.isFill.cDate = true;
                }
            },
            // 強制從第一格開始填寫信用有效日期
            creditCardDateFirst(){
                if (this.$refs.cardDateFirst.value === "") {
                    this.$refs.cardDateFirst.focus();
                }
            },
            // 信用卡授權碼檢視格式
            creditCardCvcCheck(){
                let value = event.target.value;
                let valueReg = /[1-9]/g;

                if (valueReg.test(value)) {
                    this.errorStatus.cCvc = false;
                } else {
                    if (value !== "") {
                        this.errorStatus.cCvc = true;
                    } else {
                        this.errorStatus.cCvc = false;
                    }
                }
            }
        }
}
</script>