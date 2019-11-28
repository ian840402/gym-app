<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title  {{ title }}
        .main.course-info
            .member-slideshow
                .member-slideshow__cover
                    img(src="~assets/images/member-cover.png")
                carousel(:perPage="1" :autoplay="true" :autoplayTimeout="2000" :loop="true" :paginationColor="'unset'" :paginationActiveColor="'#ffffff'" :paginationPadding="0" :paginationSize="6")
                    slide
                        img(src="~assets/images/member-img.png")
                    slide
                        img(src="~assets/images/member-img.png")
                    slide
                        img(src="~assets/images/member-img.png")
            .course-content.membercontent
                .course-content__id 課程代號：{{ cid }}
                .course-content__content {{ content }}
                .course-content__date
                    .course-content__date__title 可使用時間
                    ul.course-content__date__list
                        li.course-content__date__list__item(v-for="item in date")
                            .item-title {{ item.title }}
                            .item-time {{ item.time }}
                .course-content__time
                    .course-content__time__title 限制類別
                    ul.course-content__time__list
                        li.course-content__time__list__item(v-for="item in lesson" :class="item.type")
                            .item-title {{ item.title }}
                            .item-time {{ item.number }}
                .course-content__gift
                    .course-content__gift__title 贈送課程
                    .course-content__gift__list-wrapper
                        ul.course-content__gift__list
                            li.course-content__gift__list__item(v-for="item in gift")
                                .item-image
                                    img(src="~assets/images/gift-img1.png")
                                .item-title {{ item.title }}
                .course-content__price
                    .course-content__price__title 價格
                    .course-content__price__wrapper
                        .title 售價
                        .price
                            .price__original ${{ fakePrice }}
                            .price__discount ${{ price }}
                .confirm-btn
                    a(:href="buyPage") 立即購買
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    head: {
        title: "健康活力卡"
    },
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            prePage:"/",
            id: "1",
            cid: "#A0000",
            title: "健康活力卡",
            content: "不限次數使用健身、動感飛輪、團體課程適合剛開始接觸健身的新手",
            date: [
                {
                    title: "星期一",
                    time: "10:00-13:00",
                },
                {
                    title: "星期三",
                    time: "8:00-20:00",
                },
                {
                    title: "星期四",
                    time: "全天",
                },
            ],
            lesson: [
                {
                    title: "上課次數",
                    number: "3次/週",
                    type: "number"
                },
                {
                    title: "時間限制",
                    number: "30分鐘/次",
                    type: "date"
                }
            ],
            gift: [
                {
                    title: "BUNGEE/3堂課",
                    image: "/_nuxt/assets/images/gift-img1.png"
                },
                {
                    title: "皮拉提斯/2堂課",
                    image: "/_nuxt/assets/images/gift-img2.png"
                },
                {
                    title: "BUNGEE/3堂課",
                    image: "/_nuxt/assets/images/gift-img1.png"
                },
            ],
            slide: [
                {
                    image_1: "",
                },
                {
                    image_2: "",
                },
                {
                    image_3: "",
                },
            ],
            price: "1500",
            fakePrice: "2000",
            buyPage: "#",
        }
    }
}
</script>