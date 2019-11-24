<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 重設密碼
        .main
            .progress-bar
                .progress-bar__item.now-step 1
                .progress-bar__item.now-step 2
                .progress-bar__item.now-step 3
            .reset-complete(v-if="isSet")
                .reset-complete__icon
                .reset-complete__description 您的密碼已經重設
                .confirm-btn
                    a(:href="successPage") 確認
            form#reset-password.form-style(v-else)
                .form-title 輸入新密碼
                .form-style__item
                    label(for="password").form-style__item__label 即將完成，請設定新的密碼<span class="show-password">顯示密碼</span>
                    input(type="text" name="password" placeholder="8-16碼，數字、英文大小寫" v-model="password")#password.form-style__item__input
                .form-style__item
                    label(for="re-password").form-style__item__label 密碼確認
                    input(type="text" name="re-password" placeholder="8-16碼，數字、英文大小寫" v-model="rePassword")#re-password.form-style__item__input
                .form-style__submit
                    input(type="submit" value="送出")#submit
</template>

<script>
    export default {
        head: {},
        data () {
            return {
                prePage: "#",
                isSet: true,
                successPage: "",
                password: "",
                rePassword: "",
            }
        },
    }
</script>>