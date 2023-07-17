
<template>
  <div>
    <div class="row product-title">
      <h3>Product List</h3>
    </div>
    <hr />

    <!-- Product List -->
    <div class="product-container">
      <div class="add-product"  v-if="selectedRole == 'admin'">
        <!-- <div class="add-product"> -->
        <h4>Manage products</h4>
        <div class="row" style="margin-left: 8px">
          <!-- Add Product -->
          <div>
            <i @click="openForm" class="fa-solid fa-plus"></i>
          </div>
          <!-- Remove Product -->
          <div>
            <i
              @click="toggleDeleteButton"
              class="fa fa-trash"
              aria-hidden="true"
            ></i>
          </div>
          <!-- Save Product -->
          <div>
            <i
              v-if="showSaveButton"
              @click="saveProduct()"
              class="fas fa-save"
            ></i>
          </div>
        </div>
      </div>
      <div v-for="product in products" :key="product.id" class="product-div">
        <!-- Del button -->
        <span class="delete-icon" v-if="showDeleteButton"
          ><i
            @click="deleteProduct(product)"
            class="fa fa-times"
            aria-hidden="true"
          ></i
        ></span>
        <h4>{{ product.name }}</h4>
        <h4>₹{{ product.price }}</h4>
        <button @click="addToCartFunction(product)">Add to Cart</button>
      </div>
    </div>

    <!-- Add new product form -->
    <div v-if="showForm" class="form-container">
      <form @submit.prevent="addNewProduct" class="form">
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" v-model="productName" required />

        <label for="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          v-model="productPrice"
          required
        />

        <button type="submit">Add</button>
        <button type="button" @click="closeForm">Close</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from "vue";
import { useStore } from "vuex";
import {selectedRole} from '@/views/AppNavbar';

const store = useStore();

const productName = ref("");
const productPrice = ref("");
const showForm = ref(false);
const showDeleteButton = ref(false);
const showSaveButton = ref(false);


interface Product {
  id: number;
  name: string;
  price: number;
}

const products = ref([
  { id: 1, name: "Laptop", price: 90000 },
  { id: 2, name: "Mobile", price: 65000 },
  { id: 3, name: "Tablet", price: 30000 },
]);

const openForm = () => {
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const addNewProduct = () => {
  const newProduct = {
    id: products.value.length + 1,
    name: productName.value,
    price: productPrice.value,
  };
  products.value.push(newProduct);

  productName.value = "";
  productPrice.value = "";
  showForm.value = false;
};

const addToCartFunction = (product: Product) => {
  store.commit("addToCartMutation", product);
};

const toggleDeleteButton = () => {
  showDeleteButton.value = true;
  showSaveButton.value = true;
};

const deleteProduct = (product: Product) => {
  const index = products.value.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    products.value.splice(index, 1);
  }
};

const saveProduct = () => {
  showDeleteButton.value = false;
  showSaveButton.value = false;
};
</script>

<style scoped lang="scss">
.product-container {
  display: flex;
  flex-direction: row;
}
.add-icon i {
  height: 30px;
}
.row {
  display: flex;
  flex-direction: row;
}
i {
  margin: 10px;
}
.product-title {
  margin-left: 300px;
}
label {
  cursor: pointer;
  margin-left: 20px;
}
.product-div {
  width: 110px;
  padding: 5px;
  background-color: rgb(224, 221, 221);
  margin: 5px;
  text-align: center;
  border: 1px solid;
}

.delete-icon {
  color: red;
  cursor: pointer;
}

.add-product {
  width: 110px;
  padding: 5px;
  margin: 5px;
  text-align: center;
  border: 1px solid;
  cursor: pointer;
}

button {
  margin-left: 10px;
  border-radius: 30px;
  height: 25px;
  cursor: pointer;
}

.form-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form label {
  display: block;
  margin-bottom: 5px;
}

.form input[type="text"],
.form input[type="number"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.form button {
  margin-top: 10px;
}
</style>
