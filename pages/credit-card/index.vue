<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 卡片
            .header__delete
        .main
            .card-block
                .card-default
                    .card-default__title 預設卡片
                    .card
                        .card__item
                            .card__item__value {{cardDefault.number}}
                        .card__item
                            .card__item__title CARDHOLDER NAME
                            .card__item__value {{cardDefault.name}}
                        .card__item
                            .card__item__title EXPIRE DATE
                            .card__item__value {{cardDefault.date}}
                        .card__delete
                .card-other
                    .card-other__title 其他卡片
                    ul.card-list
                        li.cart(v-for="item in card")
                            .card__item
                                .card__item__value {{item.number}}
                            .card__item
                                .card__item__title CARDHOLDER NAME
                                .card__item__value {{item.name}}
                            .card__item
                                .card__item__title EXPIRE DATE
                                .card__item__value {{item.date}}
                            .card__delete
                .card-add
                    a(:href="addCard")
                        .card-add__icon
                        .card-add__title 新增卡片
                        .card-add__description (最多可新增三張卡片)
</template>

<script>
export default {
    data(){
        return{
            prePage: "#",
            addCard: "/credit-card/add",
            cardDefault: {
                number: "6578",
                name: "Wong Chia Chi",
                date: "02/2024",
            },
            card: [
                {
                    number: "6578",
                    name: "Wong Chia Chi",
                    date: "02/2024",
                },
            ]
        }
    }
}
</script>