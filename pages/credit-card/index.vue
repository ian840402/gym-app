<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 卡片
            .header__delete
                img(src="~/assets/images/delete-icon.png")
        .main
            .card-block-wrapper
                .card-block
                    .card-block-title 預設卡片
                    .card
                        a(:href="cardDefault.link")
                            .card-wrapper.default-card
                                .card__item
                                    .card__item__value 
                                        .value ****
                                        .value ****
                                        .value ****
                                        .value {{cardDefault.number}}
                                .crad-item-wrapper
                                    .card__item
                                        .card__item__title CARDHOLDER NAME
                                        .card__item__value {{cardDefault.name}}
                                    .card__item
                                        .card__item__title EXPIRE DATE
                                        .card__item__value {{cardDefault.date}}
                                .card__delete
                                    img(src="~assets/images/cross-icon.png")
                        .card-subscription(v-if="cardDefault.subscription") 定期定額扣款
                .card-block
                    .card-block-title 其他卡片
                    ul.card-list
                        li.card.card-list__item(v-for="item in card")
                            a(:href="item.link")
                                .card-wrapper
                                    .card__item
                                        .card__item__value 
                                            .value ****
                                            .value ****
                                            .value ****
                                            .value {{item.number}}
                                    .crad-item-wrapper
                                        .card__item
                                            .card__item__title CARDHOLDER NAME
                                            .card__item__value {{item.name}}
                                        .card__item
                                            .card__item__title EXPIRE DATE
                                            .card__item__value {{item.date}}
                                    .card__delete
                                        img(src="~assets/images/cross-icon.png")
                            .card-subscription(v-if="item.subscription") 定期定額扣款
                .card-add(v-if="cardAmount < 3")
                    a(:href="addCard")
                        .card-add__icon
                            img(src="~assets/images/newcard-icon.png")
                        .card-add__title 新增卡片
                        .card-add__description (最多可新增三張卡片)
</template>

<script>
export default {
    data(){
        return{
            prePage: "/",
            addCard: "/credit-card/add",
            cardAmount: 2,
            cardDefault: {
                number: "6578",
                name: "Wong Chia Chi",
                date: "02/2024",
                subscription: false,
                link: "credit-card/card",
            },
            card: [
                {
                    number: "6578",
                    name: "Wong Chia Chi",
                    date: "02/2024",
                    subscription: true,
                    link: "credit-card/card",
                },
            ]
        }
    }
}
</script>