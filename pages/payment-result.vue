<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 付款結果
        .main
            #payment-result
                .success-msg(v-if="status")
                    .success-msg__icon
                    .success-msg__description 恭喜您付款成功！
                .fail-msg(v-else="status")
                    .fail-msg__icon
                    .fail-msg__description 購買失敗</br>請重新操作一次
        .confirm-btn
            a(:href="successConfirmPage" v-if="status") 確認
            a(:href="failConfirmPage" v-else="status") 確認
</template>

<script>

/**
 * 
 * status：boolen，是否成功付款
 * prePage：上一步的位置
 * successConfirmPage：成功後導向的位置
 * failConfirmPage：失敗後導向的位置
 */

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