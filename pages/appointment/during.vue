<template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 付款結果
        .main
</template>

<script>
export default {
    data(){
        return{
            prePage: "/"
        }
    }
}
</script>