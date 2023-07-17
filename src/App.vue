<template>
  <div class="app">
    <AppNavbar />

    <!-- <router-view></router-view> -->
    <div class="body">
      <div class="products">
        <HomeView />
      </div>
      <div class="cart">
        <MyCart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from "@/views/AppNavbar.vue";
import HomeView from "@/views/HomeView.vue";
import MyCart from "@/views/MyCart.vue";
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
}
.products {
  width: 70%;
}
.cart {
  width: 30%;
  border-left: 10px;
  width: 30%;
}
</style>