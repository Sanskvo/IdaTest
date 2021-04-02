import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://frontend-test.idaproject.com/api/'
})

export const productsAPI = {
  products ({ category }) {
    return instance.get('product?category=' + category)
  },

  productCategories () {
    return instance.get('product-category')
  }
}
