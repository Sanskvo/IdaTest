/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

 <template>
<div class="basket__header">
        <h1 class="basket__title">Корзина</h1>
        <img
          class="basket__cross"
          src="../img/cross.svg"
          alt="cross"
          v-on:click="$emit('closeBasket')"
        />
        </div>
</template>

<script>
export default {
  name: 'BasketHeader'
}
</script>

<style lang="scss" scoped>
.basket {
  position: fixed;
  right: 0;
  top: 0;
  height: 1077px;
  max-width: 460px;
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0 0 8px;
&__header {
    margin-left: 48px;
    display: flex;
  }
  &__title {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #000000;
  }
  &__cross {
    margin: 0 53px 0 227px;
    cursor: pointer;
  }
}
</style>
