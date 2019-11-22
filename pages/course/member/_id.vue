<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title  {{ title }}
        .main
            .course-slideshow
            .course-content
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
                    ul.course-content__gift__list
                        li.course-content__gift__list__item(v-for="item in gift")
                            .item-title {{ item.title }}
                .course-content__price
                    .course-content__price__title 價格
                    .course-content__price__wrapper
                        .title 售價
                        .price
                            .price__original {{ fakePrice }}
                            .price__discount {{ price }}
            .buy-course-btn
                a(:href="buyPage") 立即購買
</template>

<script>
export default {
    data() {
        return {
            prePage:"#",
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
                    image: ""
                },
                {
                    title: "皮拉提斯/2堂課",
                    image: ""
                },
                {
                    title: "BUNGEE/3堂課",
                    image: ""
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