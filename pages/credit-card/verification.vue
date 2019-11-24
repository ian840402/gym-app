<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 密碼驗證
        .main
            form#password-verification.form-style
                .form-style__item
                    label(for="password").form-style__item__label 請輸入您的密碼已開啟付款資訊
                    input(type="text" name="password" placeholder="8-16碼，數字、英文大小寫" v-model="password")#password.form-style__item__input
                .form-style__submit
                    input(type="submit" value="開啟")#submit
</template>

<script>
export default {
    data(){
        return{
            prePage: "#",
            password: "",
        }
    }
}
</script>