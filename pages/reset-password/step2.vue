<template lang="pug">
    .test password-step2
</template><template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 重設密碼
        .main
            .progress-bar
                .progress-bar__item.now-step 1
                .progress-bar__item.now-step 2
                .progress-bar__item 3
            form#tel-verification.form-style
                .form-title 手機驗證
                .form-description 以傳送六位數驗證碼至{{ tel }}，請收取並驗證
                .form-style__wrapper
                    .form-style__item
                        input(type="text" name="tel-verification-code-1" maxlength="1" v-model="verification_code_1")#tel-verification__code-1.form-style__item__input
                    .form-style__item
                        input(type="text" name="tel-verification-code-2" maxlength="1" v-model="verification_code_2")#tel-verification__code-2.form-style__item__input
                    .form-style__item
                        input(type="text" name="tel-verification-code-3" maxlength="1" v-model="verification_code_3")#tel-verification__code-3.form-style__item__input
                    .form-style__item
                        input(type="text" name="tel-verification-code-4" maxlength="1" v-model="verification_code_4")#tel-verification__code-4.form-style__item__input
                    .form-style__item
                        input(type="text" name="tel-verification-code-5" maxlength="1" v-model="verification_code_5")#tel-verification__code-5.form-style__item__input
                    .form-style__item
                        input(type="text" name="tel-verification-code-6" maxlength="1" v-model="verification_code_6")#tel-verification__code-6.form-style__item__input
                .form-style__change-tel
                    .descrition 修正手機號碼
                .form-style__resend
                    .resend-time
                    .resend-title
                        .resend-title__time-up(v-if="isTimeUp") 重新寄出
                        .resend-title__countdown(v-else) 60秒後可重新寄出
                .form-style__submit
                    input(type="submit" value="下一步")#user-verification-submit
</template>

<script>
    export default {
        head: {},
        data () {
            return {
                prePage: "#",
                isTimeUp: false,
                tel: "0974372628",
                verification_code: "",
                verification_code_1: "",
                verification_code_2: "",
                verification_code_3: "",
                verification_code_4: "",
                verification_code_5: "",
                verification_code_6: "",
            }
        },
    }
</script>>