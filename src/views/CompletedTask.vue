<script setup lang="ts">
import { inject, provide, computed } from "vue";
import { useStore } from "vuex";
import "@/styles/CompletedTasks.css";

const store = useStore();

const completedTasks = inject("completedTasks") as Array<any>;

const isLoggedIn = computed(() => store.getters.userAuthCheck);
</script>

<template>
  <div class="completed-task-container">
    <h5>Completed Tasks:</h5>

    <div class="completed-task-cards-container row">
      <div class="card m-1" v-for="task in completedTasks" :key="task.id">
        <div class="card-body">
          <div class="task-header row">
            <div class="col">
              <h5 class="card-title">{{ task.name }}</h5>
            </div>
          </div>

          <h6 class="card-text">{{ task.description }}</h6>
          <p class="card-subtitle mb-2 text-muted">
            Due Date: {{ task.dueDate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>