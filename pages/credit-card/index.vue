<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 卡片
            .header__delete
                input(type="checkbox" name="card-delete" v-model="isDelete")#card-delete.header__delete__input
                label(for="card-delete").header__delete__label
        .main
            .card-block-wrapper
                transition-group(name="fade")
                    .card-block(v-if="hasDefault" key="cardDefualt")
                        .card-block-title 預設卡片
                        .card
                            .card-wrapper.default-card(:class="{delete: isDelete}")
                                a(:href="cardDefault.link")
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
                                .card__delete(v-if="isDelete" @click="defaultDelete")
                                    img(src="~assets/images/cross-icon.png")
                            .card-subscription(v-if="cardDefault.subscription") 定期定額扣款
                    .card-block(v-if="hasCard" key="cardOthet")
                        .card-block-title 其他卡片
                        ul.card-list
                            li.card.card-list__item(v-for="(item,index) in card" key="card")
                                .card-wrapper(:class="{delete: isDelete}")
                                    a(:href="item.link")
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
                                    .card__delete(v-if="isDelete" @click="cardDelete(index)")
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
            hasDefault: true,
            hasCard: true,
            isDelete: false,
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
    },
    methods:{
        cardDelete(index){
            this.card.splice(index, 1);
            if (this.card.length === 0) {
                this.hasCard = false;
            }
        },
        defaultDelete() {
            this.hasDefault = false;
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity .5s;
}
.fade2-enter, .fade2-leave-to{
  opacity: 0;
}
</style>