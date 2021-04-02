/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

 <template>
    <div class="basket__success" >
      <img class="basket__success-logo" src="../img/submitTrueImg.svg" alt="img">
      <h3 class="basket__success-title">Заявка успешно отправлена</h3>
      <div class="basket__success-subtitle">Вскоре наш менеджер свяжется с Вами</div>
    </div>
</template>

<script>
export default {
  name: 'BasketSuccess'
}
</script>

<style lang="scss" scoped>
.basket {
  position: fixed;
  right: 0;
  top: 0;
  height: 1077px;
  max-width: 460px;
  background: #FFFFFF;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0 0 8px;
  &__success-logo {
    margin: 50% auto auto 190px;
    height: 80px;
    width: 80px;
  }
  &__success-title {
    margin: 24px 0 0 0;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #000000;
  }
  &__success-subtitle {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #59606D;
  }
}
</style>
