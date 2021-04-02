/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

 <template>
  <li class="content__link" v-on:click="getProducts(num)">
    <router-link
      :to="'/'+num"
    >{{name}}</router-link>
  </li>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'MenuItem',
  props: ['num', 'name'],
  setup () {
    const store = useStore()
    return {
      getProducts: (num) => store.dispatch('getProducts', num)
    }
  }

}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 52px;
  margin: 32px 88px 0 88px;
  display: grid;
  grid-template-columns: 15% 85%;
  &__link {
    width: 60px;
    color: #959DAD;
    margin-top: 16px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    a {
      text-decoration: none;
      color: #959DAD;
      &:first-child {
        margin-top: 0;
      }
      &:hover {
        text-decoration-line: underline;
        cursor: pointer;
        color: #1F1F1F;
      }
      &:active {
        text-decoration-line: none;
        color: #59606D;
      }
    }
  }
}
</style>
