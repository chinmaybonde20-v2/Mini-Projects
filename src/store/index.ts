
import { createStore } from "vuex";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default createStore({
  state: {
    cartArrayStore: [] as Product[],
    grandTotalStore: 0,
  },

  mutations: {
    addToCartMutation(state, product: Product) {
      state.cartArrayStore.push(product);
      state.grandTotalStore = state.grandTotalStore + product.price;
    },
    removeItemMutation(state, cartItem: Product) {
      const index = state.cartArrayStore.findIndex(
        (item) => item.id === cartItem.id
      );
      if (index !== -1) {
        state.cartArrayStore.splice(index, 1);
        state.grandTotalStore = state.grandTotalStore - cartItem.price;
      }
    },
    updateCartTotal(state) {
      state.grandTotalStore = state.cartArrayStore.reduce((total, item) => total + item.price, 0);
    },

    removeAllItemsFromCartMutation(state){
      state.cartArrayStore = [];
      state.grandTotalStore = 0;
    },


  },

  actions: {},

  getters: {},

  modules: {},
});