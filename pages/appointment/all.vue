//TODO: 只做到一半

<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title
                ul.page-tab
                    li.page-tab__item(v-for="(item,index) in course" @click="tabChange(index)") {{item.title}}
        .main
            .page-content
                .page-content__item
                    calendar(v-on:choseDay="clickDay" v-on:changeMonth="changeDate" :markDate="dateArr" :sundayStart="true" :textTop="topArr")
                    .today-lesson-block
                .page-content__item
</template>

<script>

/**
 * 使用vue-calendar-component來完成行事曆
 * 
 * https://github.com/zwhGithub/vue-calendar
 */
import Calendar from 'vue-calendar-component';

export default {
    components: {
        Calendar
    },
    data(){
        return{
            prePage: "/",
            selected: 0,
            topArr: [ '日','一', '二', '三', '四', '五', '六' ],
            dateArr: ['2019/11/12'],
            course: [
                {
                    title: "30天內已預約",
                    lesson: [],
                },
                {
                    title: "全部紀錄",
                    lesson: [],
                },
            ],
        }
    },
    methods: {
        tabChange(index) {
            this.selected = index;
        },
        clickDay(data) {
            console.log(data); //選中某天
        },
        changeDate(data) {
            console.log(data); //左右点击切换月份
        },
    },
    mounted: function () {
        // let dom = document.getElementsByClassName("wh_content_li")[0];
        // console.log(dom);
    },
}
</script>