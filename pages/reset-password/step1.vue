<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title  重設密碼
        .main
            .progress-bar
                .progress-bar__item.now-step 1
                .progress-bar__item 2
                .progress-bar__item 3
        form#user-verification.form-style
                .form-title 輸入驗證資料
                .form-style__item
                    label(for="user-verification-tel").form-style__item__label 手機號碼
                    input(type="text" name="user-verification-tel" placeholder="請輸入手機號碼" v-model="tel")#user-verification-tel.form-style__item__input
                .form-style__item
                    label(for="user-verification-birth").form-style__item__label 生日
                    input(type="text" name="user-verification-birth" placeholder="xxxx/xx/xx" v-model="birth")#user-verification-birth.form-style__item__input
                .form-style__submit
                    input(type="submit" value="下一步")#user-verification-submit
</template>

<script>
    export default {
        head: {},
        data () {
            return {
                prePage: "/",
                tel: "",
                birth: ""
            }
        },
    }
</script>>