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
                .form-wrapper
                    .form-title 輸入驗證資料
                    .form-style__item
                        label(for="user-verification-tel").form-style__item__label 手機號碼<span class="format-error" v-if="errorStatus.phone">格式錯誤，請輸入數字!</span><span class="format-error" v-if="errorStatus.phoneLen">號碼長度不正確!</span>
                        input(type="text" name="user-verification-tel" placeholder="請輸入手機號碼" maxlength="10" v-model="tel" @keyup="phoneCheck" @change="phoneCheckLen")#user-verification-tel.form-style__item__input
                    .form-style__item
                        label(for="user-verification-birth").form-style__item__label 生日
                        input(type="text" name="user-verification-birth" placeholder="xxxx/xx/xx" v-model="birth" @change="verification")#user-verification-birth.form-style__item__input
                        //- datepicker(placeholder="xxxx/xx/xx" v-model="filter.start" format="yyyy/MM/dd")
                .form-style__submit(:class="{unblock: formStatus}")
                    input(type="submit" value="下一步")#user-verification-submit
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { formVerification } from '~/assets/js/form-verification.js'

    export default {
        components: {
            Datepicker
        },
        head: {},
        data () {
            return {
                prePage: "/",
                tel: "",
                birth: "",
                errorStatus: {
                    phone: false,
                    phoneLen: false,
                },
                    formStatus: false,
                }
        },
        methods:{
            verification(event){
                let Arr = [
                    this.tel,
                    this.birth
                ];
                
                this.formStatus = formVerification(Arr);
            },
            // 信用卡授權碼檢視格式
            phoneCheck(){
                let value = event.target.value;
                let valueReg = /[0-9]/g;

                if (valueReg.test(value)) {
                    this.errorStatus.phone = false;
                } else {
                    if (value !== "") {
                        this.errorStatus.phone = true;
                    } else {
                        this.errorStatus.phone = false;
                    }
                }
            },
            phoneCheckLen(event){
                let valueArr = event.target.value.split("");
                let maxlength = event.target.maxLength;

                if (valueArr.length !== maxlength && valueArr.length !== 0) {
                    this.errorStatus.phoneLen = true;
                } else {
                    this.errorStatus.phoneLen = false;
                }

                let Arr = [
                    this.tel,
                    this.birth
                ];

                this.formStatus = formVerification(Arr);
            }
        }
    }
</script>>