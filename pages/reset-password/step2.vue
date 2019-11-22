<template lang="pug">
    .test password-step2
</template><template lang="pug">
    .container
        .header
            .header__link
                a(:href="prePage")
            .header__title 重設密碼
        .main
            .progress-bar
                .progress-bar__item.now-step 1
                .progress-bar__item.now-step 2
                .progress-bar__item 3
</template>

<script>
    export default {
        head: {},
        data () {
            return {
                prePage: "#",
            }
        },
    }
</script>>