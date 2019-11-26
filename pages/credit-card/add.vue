<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 新增卡片
        .main
            .card-description
                .card-description__title 可接受之信用卡
                .card-description__icon
                    .icon-visa
                    .icon-master-card
                    .icon-jcb
            form#add-credit-card.form-style
                .form-style__item
                    label(for="card-number-1").form-style__item__label 卡號
                    .card-number-placeholder(v-show="isFill") 請輸入您的信用卡號
                    .form-style__item__wrapper
                        input(type="text" name="card-number-1" maxlength="4" v-model="cardNumber_1")#card-number-1.form-style__item__input
                        input(type="text" name="card-number-2" maxlength="4" v-model="cardNumber_2")#card-number-2.form-style__item__input
                        input(type="text" name="card-number-3" maxlength="4" v-model="cardNumber_3")#card-number-3.form-style__item__input
                        input(type="text" name="card-number-4" maxlength="4" v-model="cardNumber_4")#card-number-4.form-style__item__input
                .form-style__wrapper
                    .form-style__item
                        label(for="card-date-MM").form-style__item__label 有效期限
                        .form-style__item__wrapper
                            input(type="text" name="card-date-MM" placeholder="MM" v-model="cardDate_MM")#card-date-MM.form-style__item__input
                            .form-style__item__separate /
                            input(type="text" name="card-date-YY" placeholder="YY" v-model="cardDate_YY")#card-date-YY.form-style__item__input
                    .form-style__item
                        label(for="card-cvc").form-style__item__label cvc
                        input(type="text" name="card-cvc" placeholder="3-4位數字" v-model="cardCvc")#card-cvc.form-style__item__input
                .form-style__item
                    label(for="card-name").form-style__item__label 英文姓名
                    input(type="text" name="card-name" placeholder="請輸入卡片上英文姓名" v-model="cardName")#card-name.form-style__item__input
                .form-style__item
                    input(type="checkbox" name="card-default" placeholder="請輸入卡片上英文姓名" v-model="cardDefault")#card-default.form-style__item__checkbox
                    label(for="card-default").form-style__item__label 設為預設卡
                .form-style__item
                    input(type="checkbox" name="card-subscription" placeholder="請輸入卡片上英文姓名" v-model="cardSubscription")#card-subscription.form-style__item__checkbox
                    label(for="card-subscription").form-style__item__label 設為定期定額扣款
                .form-style__submit
                    input(type="submit" value="確定新增")#submit
</template>

<script>
export default {
    data(){
        return{
            prePage: "/",
            isFill: true,
            cardNumber: "",
            cardNumber_1: "",
            cardNumber_2: "",
            cardNumber_3: "",
            cardNumber_4: "",
            cardDate: "",
            cardDate_MM: "",
            cardDate_YY: "",
            cardCvc: "",
            cardName: "",
            cardDefault: false,
            cardSubscription: false,
        }
    }
}
</script>