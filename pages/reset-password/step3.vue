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
                    img(src="~assets/images/password-reset.png")
                .reset-complete__description 您的密碼已經重設
                .confirm-btn
                    a(:href="successPage") 確認
            form#reset-password.form-style(v-else)
                .form-wrapper
                    .form-title 輸入新密碼
                    .form-style__item
                        label(for="password").form-style__item__label 即將完成，請設定新的密碼
                            .show-password
                                input(type="checkbox" name="show-password" v-model="isShow" @change="showPassword")#show-password.show-password__checkbox
                                label(for="show-password").show-password__label 顯示密碼
                        input(type="password" name="password" placeholder="8-16碼，數字、英文大小寫" ref="password" v-model="password" @change="verification")#password.form-style__item__input
                    .form-style__item
                        label(for="re-password").form-style__item__label 密碼確認<span class="rp-error" v-if="rpStatus">密碼確認錯誤</span>
                        input(type="password" name="re-password" placeholder="8-16碼，數字、英文大小寫" v-model="rePassword" @change="verification")#re-password.form-style__item__input
                .form-style__submit(:class="{unblock: formStatus}")
                    input(type="submit" value="送出")#submit
</template>

<script>
import { formVerification } from '~/assets/js/form-verification.js'

    export default {
        head: {},
        data () {
            return {
                prePage: "/",
                isSet: false,
                isShow: false,
                successPage: "",
                password: "",
                rePassword: "",
                rpStatus: false,
                formStatus: false,
            }
        },
        methods:{
            // 表單驗證是否有值
            verification(event){
                let Arr = [
                    this.password,
                    this.rePassword,
                ];

                this.rpStatus = false;

                if (this.rePassword !== "") {
                    if (this.password === this.rePassword) {
                        this.formStatus = formVerification(Arr);
                    } else {
                        this.rpStatus = true;
                    }   
                }
            },
            // 顯示密碼
            showPassword(){
                let status = this.isShow;
                if (status) {
                    this.$refs.password.type = "text";
                } else {
                    this.$refs.password.type = "password";
                }
            }
        }
    }
</script>>