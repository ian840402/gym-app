<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 付款結果
        .main
            .payment-result
                .payment-result__msg.success-msg(v-if="status")
                    .payment-result__msg__icon.success-msg__icon
                        img(src="~assets/images/success.png")
                    .payment-result__msg__description.success-msg__description 恭喜您付款成功！
                .payment-result__msg.fail-msg(v-else)
                    .payment-result__msg__icon.fail-msg__icon
                        img(src="~assets/images/fail.png")
                    .payment-result__msg__description.fail-msg__description 購買失敗</br>請重新操作一次
        .confirm-btn
            a(:href="successConfirmPage" v-if="status") 確認
            a(:href="failConfirmPage" v-else) 確認
</template>

<script>

export default {
    data () {
        return {
            status: true,
            prePage: "#",
            successConfirmPage: "#",
            failConfirmPage: "#",
        }
    },
}

</script>