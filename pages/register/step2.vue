<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title
                .add-member
                    .add-member__icon
                        img(src="~assets/images/member-icon.png")
                    .add-member__text 加入會員
        .main
            .progress-bar
                .progress-bar__item.now-step 1
                .progress-bar__item.now-step 2
                .progress-bar__item 3
                .progress-bar__item 4
            form#tel-verification.form-style
                .form-wrapper
                    .form-title 手機驗證
                    .form-description 以傳送六位數驗證碼至{{ tel }}，請收取並驗證
                    .form-style__wrapper
                        .form-style__item
                            .form-style__item__wrapper
                                input(type="text" name="tel-verification-code-1" maxlength="1" v-model="verification_code_1" @keyup="verification")#tel-verification__code-1.form-style__item__code-input
                                input(type="text" name="tel-verification-code-2" maxlength="1" v-model="verification_code_2" @keyup="verification")#tel-verification__code-2.form-style__item__code-input
                                input(type="text" name="tel-verification-code-3" maxlength="1" v-model="verification_code_3" @keyup="verification")#tel-verification__code-3.form-style__item__code-input
                                .form-style__item__separate -
                                input(type="text" name="tel-verification-code-4" maxlength="1" v-model="verification_code_4" ref="inputContinu" @keyup="verification")#tel-verification__code-4.form-style__item__code-input
                                input(type="text" name="tel-verification-code-5" maxlength="1" v-model="verification_code_5" @keyup="verification")#tel-verification__code-5.form-style__item__code-input
                                input(type="text" name="tel-verification-code-6" maxlength="1" v-model="verification_code_6" @keyup="verification")#tel-verification__code-6.form-style__item__code-input
                    .form-style__change-tel
                        a.descrition(:href="lastPage") 修正手機號碼
                .form-btn
                    .form-style__resend(:class="{unblock:isTimeUp}")
                        .resend-time-up(v-if="isTimeUp") 重新寄出
                        .resend-countdown(v-else)
                            .resend-countdown__time {{time}}
                            .resend-countdown__title 秒後可重新寄出
                    .form-style__submit(:class="{unblock:formStatus}")
                        input(type="submit" value="下一步")#user-verification-submit
</template>

<script>
import { formVerification } from '~/assets/js/form-verification.js'

export default {
    data(){
        return{
            prePage: "/",
            lastPage: "/",
            isTimeUp: false,
            time: 60,
            tel: "0974372628",
            verification_code: "",
            verification_code_1: "",
            verification_code_2: "",
            verification_code_3: "",
            verification_code_4: "",
            verification_code_5: "",
            verification_code_6: "",
            formStatus: false,
        }
    },
    mounted() {
        const countDown = () => {
            if (this.time !== 0) {
                this.time--;
            } else {
                this.isTimeUp = true;
                clearInterval(timer);
            }
        }
        
        const timer = setInterval(function(){countDown()},1000);
    },
    methods:{
        verification(event){
            let Arr = [
                this.verification_code_1,
                this.verification_code_2,
                this.verification_code_3,
                this.verification_code_4,
                this.verification_code_5,
                this.verification_code_6,
            ];

            let dom = event.target.nextElementSibling;
            let value = event.target.value;
            let valueReg = /[1-9]/g;
            
            if (valueReg.test(value) && dom !== null) {
                if (dom.localName === "input") {
                    dom.focus();
                } else {
                    this.$refs.inputContinu.focus();
                }
                
            }
            
            this.formStatus = formVerification(Arr);

        }
    }
}
</script>