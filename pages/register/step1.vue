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
                .progress-bar__item 2
                .progress-bar__item 3
                .progress-bar__item 4
            form#register-basic-info.form-style
                .form-wrapper
                    .form-title 基本資料
                    .form-style__item
                        label(for="name").form-style__item__label *姓名
                        input(type="text" name="name" placeholder="請輸入姓名" v-model="name")#name.form-style__item__input
                    .form-style__item
                        label(for="nickname").form-style__item__label 暱稱
                        input(type="text" name="nickname" placeholder="請輸入暱稱" v-model="nickname")#nickname.form-style__item__input
                    .form-style__item
                        label.form-style__item__label *性別
                        .form-style__item__wrapper
                            .gender
                                .gender-item
                                    input(type="radio" value="male" v-model="gender")#gender-item__male.gender-item__input
                                    label(for="gender-item__male").gender-item__label 男
                                .gender-item
                                    input(type="radio" value="female" v-model="gender")#gender-item__female.gender-item__input
                                    label(for="gender-item__female").gender-item__label 女
                    .form-style__item
                        label(for="birth").form-style__item__label *生日
                        input(type="text" name="birth" placeholder="xxxx/xx/xx" v-model="birth")#birth.form-style__item__input
                    .form-style__item
                        label(for="account").form-style__item__label *帳號(手機號碼)
                        input(type="text" name="account" placeholder="請輸入手機號碼" v-model="account")#account.form-style__item__input
                    .form-style__item
                        label(for="password").form-style__item__label *密碼
                            .show-password
                                input(type="checkbox" name="show-password" v-model="showPassword")#show-password.show-password__checkbox
                                label(for="show-password").show-password__label 顯示密碼
                        input(type="text" name="password" placeholder="請輸入8-16碼，數字、英文大小寫" v-model="password")#password.form-style__item__input
                    .form-style__item
                        label(for="re-password").form-style__item__label *密碼確認
                        input(type="text" name="re-password" placeholder="請輸入8-16碼，數字、英文大小寫" v-model="rePassword")#re-password.form-style__item__input
                .form-style__submit
                    input(type="submit" value="下一步")#submit
</template>

<script>
export default {
    data(){
        return{
            prePage: "/",
            name: "",
            nickname: "",
            gender: "",
            birth: "",
            account: "",
            showPassword: false,
            password: "",
            rePassword: "",
        }
    }
}
</script>