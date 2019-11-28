<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 卡片資料
        .main
            .card-info-block
                .card-info
                    .card-info__item
                        .card-info__item__title 卡號
                        .card-info__item__value
                            .value-1 ****
                            .value-2 ****
                            .value-3 ****
                            .value-4 {{cardNumber}}
                    .card-info__wrapper
                        .card-info__item
                            .card-info__item__title 有效期限
                            .card-info__item__value {{cardDate}}
                        .card-info__item
                            .card-info__item__title CVC
                            .card-info__item__value ***
                    .card-info__item
                        .card-info__item__title 姓名(英文字母)
                        .card-info__item__value {{cardName}}
            form#edit-credit-card.card-form-style
                .card-form-style__global
                    .card-form-style__global__item
                        input(type="checkbox" name="card-default" placeholder="請輸入卡片上英文姓名" v-model="cardDefault")#card-default.card-form-style__global__item__checkbox
                        label(for="card-default").card-form-style__global__item__label 設為預設卡
                    .card-form-style__global__item
                        input(type="checkbox" name="card-subscription" placeholder="請輸入卡片上英文姓名" v-model="cardSubscription")#card-subscription.card-form-style__global__item__checkbox
                        label(for="card-subscription").card-form-style__global__item__label 設為定期定額扣款
                .card-form-style__submit(:class="{unblock:formStatus}")
                    input(type="submit" value="儲存設定")#submit
</template>

<script>
export default {
    data(){
        return{
            prePage: "/credit-card",
            cardNumber: "6578",
            cardDate: "02/24",
            cardName: "Wong Chia Chi",
            cardDefault: true,
            cardSubscription: true,
            formStatus: true,
        }
    }
}
</script>