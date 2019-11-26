<template lang="pug">
  <div class="container">
    <div>
      <logo />
      <h1 class="title">gym-app</h1>
      <h2 class="subtitle">健身APP</h2>
      <div class="links">
        a(href="payment-result").button--green 付款結果
        a(href="course").button--green 課程列表
        a(href="course/standard").button--green 一般課程
        a(href="course/member").button--green 會員課程
        a(href="register/step1").button--green 加入會員-步驟一
        a(href="register/step2").button--green 加入會員-步驟二
        a(href="register/step3").button--green 加入會員-步驟三
        a(href="register/step4").button--green 加入會員-步驟四
        a(href="reset-password/step1").button--green 重設密碼-步驟一
        a(href="reset-password/step2").button--green 重設密碼-步驟二
        a(href="reset-password/step3").button--green 重設密碼-步驟三
        a(href="credit-card").button--green 信用卡列表
        a(href="credit-card/card").button--green 信用卡資訊
        a(href="credit-card/add").button--green  新增信用卡
        a(href="credit-card/verification").button--green 密碼驗證
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #10bb00;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
