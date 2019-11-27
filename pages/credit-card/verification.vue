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
                    input(type="password" name="password" placeholder="8-16碼，數字、英文大小寫" v-model="password" @change="verification")#password.form-style__item__input
                .form-style__submit(:class="{unblock:formStatus}")
                    input(type="submit" value="開啟")#submit
</template>

<script>
import { formVerification } from '~/assets/js/form-verification.js'

export default {
    data(){
        return{
            prePage: "/",
            password: "",
            formStatus: false,
        }
    },
    methods:{
        verification(event){
            let Arr = [
                this.password,
            ];        
            this.formStatus = formVerification(Arr);
        },
    }
}
</script>