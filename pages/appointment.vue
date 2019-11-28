<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title
                ul.page-tab
                    li.page-tab__item(v-for="(item,index) in pageTab" :class="{active:selected==index}" @click="tabChange(index)") {{item.title}}
        .main
            .page-content
                .page-content__item(:class="{active:selected==0}")
                    .during-appointment
                        .calender-block
                            .calender-description 有預約的日期
                            .calender
                                Calendar(v-on:choseDay="clickDay" :sundayStart="true" :textTop="dateArr" :markDate="markDate")
                        .course-block
                            .course-date {{cdate}}
                            ul.course-list 
                                li.course-list__item(v-for="item in course" v-if="item.date == isDate")
                                    .items
                                        .items__item.title
                                            .items__item__wrapper
                                                .items__item__icon
                                                    img(src="~assets/images/info-icon.png")
                                                .wrapper
                                                    .items__item__title 預約內容
                                                    .items__item__content {{item.title}}
                                        .items__item.time
                                            .items__item__wrapper
                                                .items__item__icon
                                                    img(src="~assets/images/time-icon-2.png")
                                                .wrapper
                                                    .items__item__title 預約時間
                                                    .items__item__content {{item.time}}
                                        .items__item.location
                                            .items__item__wrapper
                                                .items__item__icon
                                                    img(src="~assets/images/location-icon.png")
                                                .wrapper
                                                    .items__item__title 預約地點
                                                    .items__item__content {{item.location}}
                                        .items__item.status
                                            .items__item__wrapper
                                                .items__item__icon
                                                    img(src="~assets/images/check-info.png")
                                                .wrapper
                                                    .items__item__title 預約狀態
                                                    .items__item__content {{item.status}}
                .page-content__item(:class="{active:selected==1}")
                    .all-appointment
                        .filter-block
                            .filter-block__input
                                input(type="text" placeholder="2020/10/10" v-model="filter.start")
                                .filter-block__input__icon
                            .filter-block-separate -
                            .filter-block__input
                                input(type="text" placeholder="2020/10/10" v-model="filter.end")
                                .filter-block__input__icon
                        .course-block
                            ul.course-list
                                li.course-list__item(v-for="item in course")
                                    .item
                                        .item__title {{item.title}}
                                        .item__content
                                            .item__content__date {{item.date}}
                                            .item__content__time {{item.time}}
                                            .item__content__location {{item.location}}
</template>

<script>
import Calendar from 'vue-calendar-component';

export default {
    components: {
        Calendar
    },
    data(){
        return{
            prePage: "/",
            selected: 0,
            pageTab: [
                { title:"30天內已預約" },
                { title:"全部紀錄" },
            ],
            dateArr: [ '日','一', '二', '三', '四', '五', '六'],
            markDate: ['2019/11/11','2019/11/26'],
            isDate: "2019/11/11",
            cdate: "11/11",
            filter: {
                start: "",
                end: "",
            },
            course: [
                {
                    title: "半小時水中單車＋半小時游泳課程",
                    date: "2019/11/11",
                    time: "12:30",
                    location: "TR館",
                    status: "成功",
                },
                {
                    title: "半小時水中單車＋半小時游泳課程",
                    date: "2019/11/11",
                    time: "12:30",
                    location: "TR館",
                    status: "成功",
                },
                {
                    title: "半小時水中單車＋半小時游泳課程",
                    date: "2019/11/26",
                    time: "12:30",
                    location: "TR館",
                    status: "成功",
                },
            ],
        }
    },
    methods: {
        tabChange(index) {
            this.selected = index;
        },
        clickDay(data) {
            this.isDate = data;
            this.cdate = data.substr(5);
            console.log(data);
        },
    },
}
</script>