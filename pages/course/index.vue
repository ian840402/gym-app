<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title
                ul.page-tab
                    li.page-tab__item(v-for="(courseType,index) in course" :class="{active:selected==index}" @click="tabChange(index)") {{ courseType.title }}
        .main
            ul.page-content
                li.page-content__item(v-for="(courseType,index) in course" :class="{active:selected==index}")
                    .course-wrapper
                        ul.course-list
                            li.course-list__item(v-for="(course,cIndex) in courseType.lesson" :class="[`course-item-${cIndex+1}`]")
                                a(:href="'course/'+courseType.type+'/'+course.id")
                                    .course-list__item__wrapper
                                        .item-image
                                            img(src="~assets/images/course-list.png")
                                        .item-content-wrapper
                                            .item-content
                                                .item-content__title {{ course.title }}
                                                .item-content__id {{ course.cid }}
                                                .item-content__type {{ course.type }}
                                            .item-price ${{ course.price }}
                                
</template>

<script>

export default {
    head: {
        title: "課程方案"
    },
    data () {
        return {
            prePage: "/",
            selected: 0,
            course: [
                {
                    type: "standard",
                    title: "課程方案",
                    lesson: [
                        {
                            id: "1",
                            cid: "#A0000",
                            title: "BUNGEE",
                            image: "",
                            type: "小試身手",
                            price: "3500"
                        },
                        {
                            id: "2",
                            cid: "#B0000",
                            title: "BUNGEE",
                            image: "",
                            type: "小試身手",
                            price: "2500"
                        },
                        {
                            id: "3",
                            cid: "#C0000",
                            title: "BUNGEE",
                            image: "",
                            type: "小試身手",
                            price: "1500"
                        }
                    ]
                },
                {
                    type: "member",
                    title: "會員方案",
                    lesson: [
                        {
                            id: "1",
                            cid: "#A0000",
                            title: "尊爵金卡",
                            image: "",
                            type: "重訓達人",
                            price: "3500"
                        },
                        {
                            id: "2",
                            cid: "#B0000",
                            title: "優等銀卡",
                            image: "",
                            type: "進階健身",
                            price: "2500"
                        },
                        {
                            id: "3",
                            cid: "#C0000",
                            title: "健康活力卡",
                            image: "",
                            type: "小試身手",
                            price: "1500"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        tabChange(index) {
            this.selected = index;
        }
    }
}

</script>>