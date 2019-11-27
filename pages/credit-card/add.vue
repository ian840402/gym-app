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
                        .card-number-placeholder(:class="{_wright:isFill}") 請輸入您的信用卡號
                        .card-form-style__item__wrapper
                            input(type="text" name="card-number-1" maxlength="4" v-model="cardNumber_1" ref="cardNumberFirst" @keyup="creditCardNum" @change="verification")#card-number-1.card-form-style__item__input
                            input(type="text" name="card-number-2" maxlength="4" v-model="cardNumber_2" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-2.card-form-style__item__input
                            input(type="text" name="card-number-3" maxlength="4" v-model="cardNumber_3" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-3.card-form-style__item__input
                            input(type="text" name="card-number-4" maxlength="4" v-model="cardNumber_4" @keyup="creditCardNum" @click="creditCardNumFirst" @change="verification")#card-number-4.card-form-style__item__input
                        .card-number-error(v-if="errorStatus") 請輸入數字!
                    .card-form-style__wrapper
                        .card-form-style__item
                            label(for="card-date-MM").card-form-style__item__label 有效期限
                            input(type="text" name="card-date" placeholder="MM/YY" v-model="cardDate" @change="verification")#card-date.card-form-style__item__input
                        .card-form-style__item
                            label(for="card-cvc").card-form-style__item__label CVC
                            input(type="text" name="card-cvc" placeholder="3-4位數字" v-model="cardCvc" @change="verification")#card-cvc.card-form-style__item__input
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
            isFill: false,
            errorStatus: false,
            cardNumber_1: "",
            cardNumber_2: "",
            cardNumber_3: "",
            cardNumber_4: "",
            cardDate: "",
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
                    this.cardDate,
                    this.cardCvc,
                    this.cardName,
                ];
                
                this.formStatus = formVerification(Arr);

            },
            creditCardNum(event){
                this.isFill = true;

                let nextDom = event.target.nextElementSibling;
                let value = event.target.value;
                let valueArr = event.target.value.split("");
                let valueReg = /[1-9]/g;
                let maxlength = event.target.maxLength;

                if (valueReg.test(value)) {
                    this.errorStatus = false;
                    if (valueArr.length === maxlength && nextDom !== null) {
                        nextDom.focus();
                    }
                } else {
                    if (value !== "") {
                        this.errorStatus = true;
                    } else {
                        this.errorStatus = false;
                    }
                }

                if (this.cardNumber_1 == "" && this.cardNumber_2 == "" && this.cardNumber_3 == "" && this.cardNumber_4 == "") {
                    this.isFill = false;
                }
            },
            creditCardNumFirst(){
                if (this.$refs.cardNumberFirst.value === "") {
                    this.$refs.cardNumberFirst.focus();
                }
            }
        }
}
</script>