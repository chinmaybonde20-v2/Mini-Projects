<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppLogin from "@/views/AppLogin.vue";

const showLoginForm = ref(false);
const store = useStore();
const router = useRouter();

const logout = () => {
  store.dispatch("logout");
  router.push("/login");
};

const isLoggedIn = computed(() => {
  return store.getters.userAuthCheck;
});

watch(isLoggedIn, (newVal) => {
  if (newVal) {
    showLoginForm.value = false;
  }
});
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img
          class="logo"
          src="https://static.vecteezy.com/system/resources/previews/008/879/446/original/white-clipboard-task-management-todo-check-list-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-productivity-solution-icon-3d-render-on-white-background-free-png.png"
          alt="Logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav">
          <router-link to="/tasks" class="nav-link">Tasks</router-link>
          <router-link to="/completed-tasks" class="nav-link">Completed Tasks</router-link>
          <button class="btn btn-light" @click="showLoginForm = true" v-if="!isLoggedIn">Login</button>
          <button class="btn btn-light" @click="logout" v-if="isLoggedIn">Logout</button>
        </div>
      </div>
    </div>
  </nav>
  <div>
    <AppLogin v-if="showLoginForm" @close="showLoginForm = false" />
  </div>
</template>
<style scoped>
.logo {
  height: 60px;
}
</style>
