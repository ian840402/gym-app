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
                .progress-bar__item 4
            form#register-advanced-info.form-style
                .form-wrapper
                    .form-title 詳細資料
                    .form-style__item
                        label(for="identity").form-style__item__label *身分證字號
                        input(type="text" name="identity" placeholder="請輸入身份證字號" v-model="identity" @change="verification")#identity.form-style__item__input
                    .form-style__item
                        label.form-style__item__label *國籍"
                        select(v-model="country" @change="verification" :class="{_chk:country !== ''}")#country.form-style__item__select
                            option(value="" selected disabled) 請選擇國籍
                            option(v-for="item in countryOption" :value="item.value") {{item.title}}
                    .form-style__item
                        label.form-style__item__label *職業
                        select(v-model="profession" @change="verification" :class="{_chk:profession !== ''}")#profession.form-style__item__select
                            option(value="" selected disabled) 請選擇職業
                            option(v-for="item in professionOption" :value="item.value") {{item.title}}
                    .form-style__item
                        label(for="tel").form-style__item__label 聯絡電話(市話)
                        input(type="text" name="tel" placeholder="請輸入電話號碼" v-model="tel" @change="verification")#tel.form-style__item__input
                    .form-style__item
                        label(for="email").form-style__item__label *email
                        input(type="text" name="email" placeholder="your@example.com" v-model="email" @change="verification")#email.form-style__item__input
                    .form-style__item
                        label.form-style__item__label *通訊地址
                        .form-style__item__subitem
                            select(v-model="maPostalCode" @change="verification" :class="{_chk:maPostalCode !== ''}")#ma-postal-code.form-style__item__select
                                option(value="" selected disabled) 郵遞區號
                                option(v-for="item in maPostalCodeOption" :value="item.value") {{item.title}}
                        .form-style__item__wrapper
                            .form-style__item__subitem
                                select(v-model="maCounty" @change="verification" :class="{_chk:maCounty !== ''}")#ma-county.form-style__item__select
                                    option(value="" selected disabled) 縣/市
                                    option(v-for="item in maCountyOption" :value="item.value") {{item.title}}
                            .form-style__item__subitem
                                select(v-model="maRegion" @change="verification" :class="{_chk:maRegion !== ''}")#ma-region.form-style__item__select
                                    option(value="" selected disabled) 鄉/鎮/區
                                    option(v-for="item in maRegionOption" :value="item.value") {{item.title}}
                        input(type="text" name="ma-street" placeholder="街道/門牌號碼" v-model="maStreet" @change="verification")#ma-street.form-style__item__input
                    .form-style__item
                        label.form-style__item__label *戶籍地址
                        .form-style__item__wrapper
                            .ratype
                                .ratype-item
                                    input(type="radio" value="same" v-model="raType" @change="sameAddress")#ratype-item__same.ratype-item__input
                                    label(for="ratype-item__same").ratype-item__label 同通訊地址
                                .ratype-item
                                    input(type="radio" value="other" v-model="raType" @change="sameAddress")#ratype-item__other.ratype-item__input
                                    label(for="ratype-item__other").ratype-item__label 其他地址
                        .ra-block(v-if="raType === 'other'")
                            .form-style__item__subitem
                                select(v-model="raPostalCode" @change="verification" :class="{_chk:raPostalCode !== ''}")#ra-postal-code.form-style__item__select
                                    option(value="" selected disabled) 郵遞區號
                                    option(v-for="item in raPostalCodeOption" :value="item.value") {{item.title}}
                            .form-style__item__wrapper
                                .form-style__item__subitem
                                    select(v-model="raCounty" @change="verification" :class="{_chk:raCounty !== ''}")#ra-county.form-style__item__select
                                        option(value="" selected disabled) 縣/市
                                        option(v-for="item in raCountyOption" :value="item.value") {{item.title}}
                                .form-style__item__subitem
                                    select(v-model="raRegion" @change="verification" :class="{_chk:raRegion !== ''}")#ra-region.form-style__item__select
                                        option(value="" selected disabled) 鄉/鎮/區
                                        option(v-for="item in raRegionOption" :value="item.value") {{item.title}}
                            input(type="text" name="ra-street" placeholder="街道/門牌號碼" v-model="raStreet" @change="verification")#ra-street.form-style__item__input
                .form-style__submit(:class="{unblock:formStatus}")
                    input(type="submit" value="送出")#submit
</template>

<script>
import { formVerification } from '~/assets/js/form-verification.js'

export default {
    data(){
        return{
            prePage: "/",
            identity: "",
            country: "",
            profession: "",
            tel: "",
            email: "",
            mailingAddress: "",
            maPostalCode: "",
            maCounty: "",
            maRegion: "",
            maStreet: "",
            raType: "other",
            residenceAddress: "",
            raPostalCode: "",
            raCounty: "",
            raRegion: "",
            raStreet: "",
            countryOption: [
                {
                    value: "1",
                    title: "台北市"
                },
                {
                    value: "2",
                    title: "新北市"
                },
                {
                    value: "3",
                    title: "台中市"
                },
                {
                    value: "4",
                    title: "台南市"
                },
                {
                    value: "5",
                    title: "高雄市"
                },
                
            ],
            professionOption: [
                {
                    value: "1",
                    title: "醫師"
                },
                {
                    value: "2",
                    title: "律師"
                },
                {
                    value: "3",
                    title: "老師"
                },
                {
                    value: "4",
                    title: "其他"
                },
            ],
            maPostalCodeOption: [
                {
                    value: "1",
                    title: "103"
                },
                {
                    value: "2",
                    title: "104"
                },
                {
                    value: "3",
                    title: "105"
                },
            ],
            maCountyOption: [
                {
                    value: "1",
                    title: "台北市"
                },
                {
                    value: "2",
                    title: "新北市"
                },
                {
                    value: "3",
                    title: "台中市"
                },
                {
                    value: "4",
                    title: "台南市"
                },
                {
                    value: "5",
                    title: "高雄市"
                },
            ],
            maRegionOption: [
                {
                    value: "1",
                    title: "中正區"
                },
                {
                    value: "2",
                    title: "大同區"
                },
                {
                    value: "3",
                    title: "中山區"
                },
            ],
            raPostalCodeOption: [
                {
                    value: "1",
                    title: "103"
                },
                {
                    value: "2",
                    title: "104"
                },
                {
                    value: "3",
                    title: "105"
                },
            ],
            raCountyOption: [
                {
                    value: "1",
                    title: "台北市"
                },
                {
                    value: "2",
                    title: "新北市"
                },
                {
                    value: "3",
                    title: "台中市"
                },
                {
                    value: "4",
                    title: "台南市"
                },
                {
                    value: "5",
                    title: "高雄市"
                },
            ],
            raRegionOption: [
                {
                    value: "1",
                    title: "中正區"
                },
                {
                    value: "2",
                    title: "大同區"
                },
                {
                    value: "3",
                    title: "中山區"
                },
            ],
            formStatus: false,
        }
    },
    methods:{
        verification(event){
            let Arr = [
                this.identity,
                this.country,
                this.profession,
                this.email,
                this.maPostalCode,
                this.maCounty,
                this.maRegion,
                this.maStreet,
                this.raPostalCode,
                this.raCounty,
                this.raRegion,
                this.raStreet,
            ];        
            this.formStatus = formVerification(Arr);
        },
        sameAddress(){
            if (this.raType === 'same') {
                this.raPostalCode = this.maPostalCode;
                this.raCounty = this.maCounty;
                this.raRegion = this.maRegion;
                this.raStreet = this.maStreet;
            } else {
                this.raPostalCode = "";
                this.raCounty = "";
                this.raRegion = "";
                this.raStreet = "";
            }

            let Arr = [
                this.identity,
                this.country,
                this.profession,
                this.email,
                this.maPostalCode,
                this.maCounty,
                this.maRegion,
                this.maStreet,
                this.raPostalCode,
                this.raCounty,
                this.raRegion,
                this.raStreet,
            ];

            this.formStatus = formVerification(Arr);
        }
    }
}
</script>