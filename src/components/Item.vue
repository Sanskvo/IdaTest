/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

 <template>
  <div class="content__product">
    <div class="content__card">
      <div class="content__card-header">
        <div class="content__card-header-starBlock">
          <img
            class="content__card-header-star"
            :src= starSrc
            alt="star"
          />
          <span class="content__card-header-rating">{{ product.rating }}</span>
        </div>
        <img
          class="content__card-header-product"
          :src="'https://frontend-test.idaproject.com' + product.photo"
          alt="product"
        />
        <img
          class="content__card-header-bask"
          src="../img/product-bask.svg"
          alt="product-bask"
          v-on:click="addInBasket(product.id, product.category)"
        />
      </div>
      <div class="content__card-title">
        <span>{{ product.name }}</span>
      </div>
      <div class="content__card-price">
        <span>{{ product.price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'Item',
  props: ['product'],
  components: {},
  computed:
  {
    starSrc () {
      const map = {
        1: require('../img/star-inside_one1.svg'),
        2: require('../img/star-inside_two.svg'),
        3: require('../img/star-inside_two.svg'),
        4: require('../img/star-inside.svg'),
        5: require('../img/star-inside_five.svg')
      }
      return map[this.product.rating] || require('../img/star.svg')
    }
  },
  setup () {
    const store = useStore()
    return {
      addInBasket: (id, category) =>
        store.commit('addInBasket', {
          id,
          category
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.content-main {
  margin-top: 65px;
  display: flex;
  flex-wrap: wrap;
  width: 1130px;
}

.content {
  margin-top: 52px;
  margin: 32px 88px 0 88px;
  display: grid;
  grid-template-columns: 15% 85%;
  &__product {
    margin: 16px 16px 0 0;
    min-width: 264px;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
  }
  &__product:nth-child(-n + 4) {
    margin-top: 0;
  }
  &__card {
    max-width: 264px;
    background: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    text-align: center;
  }
  &__card-header {
  }
  &__card-header-starBlock {
    position: relative;
  }
  &__card-header-star {
    float: left;
    margin: 17px 0 0 16px;
  }
  &__card-header-insideStar {
    position: absolute;
    top: 22px;
    left: 17px;
  }
  &__card-header-insideStar-one {
    position: absolute;
    top: 26px;
    left: 19px;
  }
  &__card-header-insideStar-two {
    position: absolute;
    top: 24px;
    left: 19px;
  }
  &__card-header-insideStar-three {
    position: absolute;
    top: 23px;
    left: 19px;
  }
  &__card-header-insideStar-five {
    position: absolute;
    top: 19px;
    left: 17px;
  }
  &__card-header-rating {
    color: #f2c94c;
  }
  &__card-header-rating {
    position: absolute;
    top: 17.2px;
    left: 33px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    display: flex;
    align-items: flex-end;
    color: #f2c94c;
  }
  &__card-header-product {
    margin-top: 18px;
    width: 142.71px;
    height: 180px;
  }
  &__card-header-bask {
    float: right;
    margin: 17.5px 18px 0 0;
  }
  &__card-header-bask:hover {
    cursor: pointer;
    fill: #1f1f1f;
  }
  &__card-title {
    margin-top: 16px;
    padding-left: 16px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #59606d;
  }
  &__card-price {
    margin-top: 6px;
    padding-left: 16px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #1f1f1f;
  }
  &__card-price span {
    margin-bottom: 16px;
  }
}

@media (min-width: 1280px) {
  .content-main {
    width: 1105px;
  }
}

@media only screen and (max-height: 768px) and (max-width: 1024px) {
  .content {
    &__product {
      margin: 16px 16px 0 0;
      min-width: 264px;
      &:nth-child(4n + 4) {
        margin-right: 16px;
      }
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
    &__product:nth-child(-n + 4) {
      margin-top: 16px;
    }
  }
  .content-main {
    margin-left: 43px;
    width: 825px;
  }
}

// tabled
@media only screen and (max-width: 768px) {
  .content {
    &__product {
      margin: 16px 16px 0 0;
      min-width: 264px;
      &:nth-child(4n + 4) {
        margin-right: 16px;
      }
      &:nth-child(2n + 2) {
        margin-right: 0;
      }
    }
    &__product:nth-child(-n + 4) {
      margin-top: 16px;
    }
  }
  .content-main {
    width: 565px;
  }
}

@media only screen and (max-width: 820px) {
  .content {
    &__product {
      margin: 16px 16px 0 0;
      min-width: 264px;
      &:nth-child(4n + 4) {
        margin-right: 16px;
      }
      &:nth-child(2n + 2) {
        margin-right: 0;
      }
    }
    &__product:nth-child(-n + 4) {
      margin-top: 16px;
    }
  }
  .content-main {
    width: 565px;
  }
}

@media (max-width: 834px) {
  .content {
    &__product {
      margin: 16px 16px 0 0;
      min-width: 264px;
      &:nth-child(4n + 4) {
        margin-right: 16px;
      }
      &:nth-child(2n + 2) {
        margin-right: 0;
      }
    }
    &__product:nth-child(-n + 4) {
      margin-top: 16px;
    }
  }
  .content-main {
    width: 565px;
  }
}
</style>
