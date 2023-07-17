<template>
  <div>
    <div>
      <h3>
        <span> My Cart </span>
        <span class="total-price"> | Total Amount : ₹{{ grandTotal }} </span>
        <button v-if="cartArray.length > 0" @click="removeAllItems">Clear</button>
      </h3>
      
    </div>
    <hr />
    <div v-if="cartArray.length === 0">
      <h4>Shopping Cart is Empty</h4>
    </div>
    <div v-else class="cart-item-body">
      <div v-for="cartItem in cartArray" :key="cartItem.id" class="cart-item">
        <h4>{{ cartItem.name }}</h4>
        <h4>₹{{ cartItem.price }}</h4>
        <span class="remove-icon" @click="removeItem(cartItem)">
          <i class="fas fa-times"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

interface CartItem {
  id: number;
  name: string;
  price: number;
}
const cartArray = computed(() => {
  return store.state.cartArrayStore;
});

const removeItem = (cartItem: CartItem) => {
  store.commit("removeItemMutation", cartItem);
};

const removeAllItems = () => {
  store.commit("removeAllItemsFromCartMutation");
};

const grandTotal = computed(() => {
  return store.state.grandTotalStore;
});
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  margin: 10px;
  background-color: #c0c0c0;
  width: 300px;
}
.total-price {
  margin-left: 20px;
  color: green;
}
h3 {
  text-align: center;
}

h4 {
  margin-left: 40px;
}

.remove-icon {
  cursor: pointer;
  margin-left: 40px;
  margin-top: 20px;
}

.remove-icon i {
  color: red;
}
</style>