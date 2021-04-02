/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

<template>
  <div>
    <div class="basket__text">Пока что вы ничего не добавили в корзину.</div>
    <button class="basket__btn" >
      Перейти к выбору
    </button>
  </div>
</template>

<script>
export default {
  name: 'BasketEmpty'
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
  &__text {
    margin-left: 48px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    width: 364px;
  }
  &__btn {
    margin: 24px 0 0 48px;
    height: 50px;
    width: 364px;
    background: #1f1f1f;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    &:hover {
      background: #59606d;
      cursor: pointer;
    }
  }
}
</style>
