/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

 <template>
  <header class="header">
    <span class="header__name">TestList</span>
    <img
      class="header__logo"
      src="../img/basket.svg"
      alt="basket"
      v-on:click="$emit('openBasket')"
    >
    <span></span>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 18px;
  padding-bottom: 20px;
  background: #FFFFFF;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
  &__name {
    margin-left: 88px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: #59606D;
  }
  &__logo {
    margin: 2px 88px 0 0;
    float: right;
    cursor: pointer;
  }
}
</style>
