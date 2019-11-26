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
                .progress-bar__item.now-step 3
                .progress-bar__item.now-step 4
            input(type="checkbox" v-model="isSet")
            .register-complete(v-if="isSet")
                .register-complete-wrapper
                    .register-complete__icon
                        img(src="~assets/images/success.png")
                    .register-complete__description 恭喜您註冊成功
                .confirm-btn
                    a(:href="successPage") 完成
            form#emergency-contact.form-style(v-else)
                .form-wrapper
                    .form-title 緊急聯絡人資料
                    .form-style__item
                        label(for="emergency-contact-name").form-style__item__label 緊急聯絡人姓名
                        input(type="text" name="emergency-contact-name" placeholder="請輸入緊急聯絡人姓名" v-model="eName")#emergency-contact-name.form-style__item__input
                    .form-style__item
                        label(for="emergency-contact-relation").form-style__item__label 緊急聯絡人關係
                        input(type="text" name="emergency-contact-relation" placeholder="請輸入緊急聯絡人關係" v-model="eRelation")#emergency-contact-relation.form-style__item__input
                    .form-style__item
                        label(for="emergency-contact-phone").form-style__item__label 緊急聯絡人電話
                        input(type="text" name="emergency-contact-phone" placeholder="請輸入緊急聯絡人電話" v-model="ePhone")#emergency-contact-phone.form-style__item__input
                .form-style__submit
                    input(type="submit" value="送出")#submit
</template>
</template>

<script>
export default {
    data(){
        return{
            prePage: "/",
            isSet: false,
            successPage: "#",
            eName: "",
            eRelation: "",
            ePhone: "",
        }
    }
}
</script>