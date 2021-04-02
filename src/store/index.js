/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

import { createStore } from 'vuex'
import { productsAPI } from '@/api/api'

export default createStore({
  state: {
    basket: [],
    content: [],
    categories: []
  },
  mutations: {

    addInBasket (state, { id, category }) {
      const product = state.content[category].find(b => b.id === id)
      state.basket.push(product)
    },

    deleteFromBasket (state, id) {
      const index = state.basket.findIndex(b => b.id === id)
      state.basket.splice(index, 1)
    },

    deleteAllBasket (state) {
      state.basket.splice(0, state.basket.length)
    },

    sortByPrice (state, category) {
      state.content.forEach(c => c.sort((a, b) => a.price - b.price))
    },
    sortByPopular (state, category) {
      state.content.forEach(
        c => c.sort(
          (a, b) => a.rating - b.rating))
    }
  },
  actions: {
    getProducts (context, category) {
      productsAPI.products({ category })
        .then(({ data }) => {
          if (context.state.content[category] === undefined) {
            context.state.content[category] = []
            context.state.content[category].push(...data)
            context.state.content[category].forEach(e => { e.category = category })
            context.state.content[category].sort(function (a, b) {
              return a.price - b.price
            })
          }
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    },

    getCategories (context) {
      productsAPI.productCategories()
        .then(({ data }) => {
          if (!context.state.categories.length) {
            context.state.categories.push(...data)
          }
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    }
  },
  modules: {
  }
})
