<template>
  <div>
    <h4 v-if="!isLoggedIn" class="login-text">Please Login</h4>
    <div v-else class="task-container">
      <!-- Add button -->
      <div
        class="task-header d-flex align-items-center justify-content-between"
      >
        <button class="btn btn-primary" @click="openForm">Add Task</button>
        <!-- Search Bar -->
        <div class="search-container d-flex align-items-center">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search tasks..."
            v-model.trim="searchTerm"
            @input="searchTasks"
          />
          <button class="btn btn-primary search-btn" @click="clearSearch">
            Clear
          </button>
        </div>
      </div>

      <div class="task-list">
        <div>
          <h5>To Do List:</h5>
        </div> 

        <div class="task-form-container" v-if="showForm">
          <form @submit="submitTask" class="task-form">
            <div class="form-group m-3">
              <label for="taskName">Task Name</label>
              <input
                type="text"
                class="form-control"
                id="taskName"
                v-model.trim="name"
                :class="{ 'is-invalid': !isNameValid && name.length > 0 }"
                required
              />
              <p v-if="!isNameValid && name.length > 0" class="error-message">
                Name must be characters between 2 and 20 characters
              </p>
            </div>
            <div class="form-group m-3">
              <label for="dueDate">Due Date</label>
              <input
                type="date"
                class="form-control"
                id="dueDate"
                v-model="dueDate"
                :class="{ 'is-invalid': !isDueDateValid && dueDate.length > 0 }"
                required
              />
              <p
                v-if="!isDueDateValid && dueDate.length > 0"
                class="error-message"
              >
                Please select a due date.
              </p>
            </div>
            <div class="form-group m-3">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                v-model.trim="description"
                :class="{
                  'is-invalid': !isDescriptionValid && description.length > 0,
                }"
              ></textarea>
              <p
                v-if="!isDescriptionValid && description.length > 0"
                class="error-message"
              >
                Description must be between 2 and 30 characters.
              </p>
            </div>
            <button
              type="submit"
              class="btn btn-primary m-3"
              :disabled="!isFormValid"
            >
              {{ editMode ? "Update Task" : "Add Task" }}
            </button>
          </form>
        </div>

        <div class="task-cards-container row">
          <div class="card m-1" v-for="task in paginatedTasks" :key="task.id">
            <div class="card-body">
              <div class="task-header row">
                <div class="col">
                  <h5 class="card-title">{{ task.name }}</h5>
                </div>
                <div class="col-auto task-actions">
                  <button
                    class="btn btn-secondary btn-sm"
                    @click="editTask(task.id)"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="deleteTask(task.id)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                  <button
                    class="btn btn-success btn-sm"
                    @click="markAsDone(task)"
                  >
                    Mark as Done
                  </button>
                </div>
              </div>
              <hr />
              <div>
                <h6 class="card-text">{{ task.description }}</h6>
              </div>
              <div>
                <p class="card-subtitle mb-2 text-muted">
                  Due Date: {{ task.dueDate }} |
                  <span class="days-left">{{ daysLeft(task) }} days left</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-if="isLoggedIn" class="completed-task">
    <CompletedTask />
  </div> -->

  <!-- Pagination -->
  <div class="pagination-btn">
    <div class="pagination">
      <button
        class="btn btn-primary"
        @click="goToFirstPage"
        :disabled="currentPage === 1"
      >
        First Page
      </button>
      <button
        class="btn btn-primary"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span class="page-of">{{ `Page ${currentPage} of ${totalPages}` }}</span>
      <button
        class="btn btn-primary"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
      <button
        class="btn btn-primary"
        @click="goToLastPage"
        :disabled="currentPage === totalPages"
      >
        Last Page
      </button>
    </div>
    <!-- Tasks per page -->
    <div class="task-per-page-links">
      <p>Tasks per page:</p>
      <a
        href="#"
        :class="{ active: tasksPerPage === item }"
        v-for="item in pageItems"
        :key="item"
        @click.prevent="setTasksPerPage(item)"
        class="card-per-page"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, provide, computed } from "vue";
import CompletedTask from "@/views/CompletedTask.vue";
import "@/styles/MyTask.css";
import {
  name,
  dueDate,
  description,
  isNameValid,
  isDueDateValid,
  isDescriptionValid,
  isFormValid,
} from "@/mixins/FormValidations.ts";

const store = useStore();
const tasks = ref([
  {
    id: 1,
    name: "Vue.js",
    dueDate: "2023-07-15",
    description: "Complete activity",
  },
  {
    id: 2,
    name: "Angular",
    dueDate: "2023-07-20",
    description: "Complete activity 2",
  },
  {
    id: 3,
    name: "JavaScript",
    dueDate: "2023-07-25",
    description: "Complete activity 3",
  },
  {
    id: 4,
    name: "Python",
    dueDate: "2023-07-30",
    description: "Complete activity 4",
  },
  {
    id: 5,
    name: "Java",
    dueDate: "2023-08-05",
    description: "Complete activity 5",
  },
  {
    id: 6,
    name: "C++",
    dueDate: "2023-08-10",
    description: "Complete activity 6",
  },
  {
    id: 7,
    name: "CSS",
    dueDate: "2023-08-15",
    description: "Complete activity 7",
  },
  {
    id: 8,
    name: "C#",
    dueDate: "2023-08-20",
    description: "Complete activity 8",
  },
  {
    id: 9,
    name: "Ruby",
    dueDate: "2023-08-25",
    description: "Complete activity 9",
  },
  {
    id: 10,
    name: "React",
    dueDate: "2023-08-30",
    description: "Complete activity 10",
  },
]);
const taskId = ref(11);
const showForm = ref(false);
const editMode = ref(false);
const editIndex = ref(-1);
const completedTasks = ref([]);

provide("completedTasks", completedTasks);

const isLoggedIn = computed(() => store.getters.userAuthCheck);

const openForm = () => {
  showForm.value = true;
  editMode.value = false;
  resetForm();
};

const submitTask = (event) => {
  event.preventDefault();

  if (editMode.value) {
    updateTask();
  } else {
    addTask();
  }

  resetForm();
  showForm.value = false;
};

const addTask = () => {
  const task = {
    id: taskId.value++,
    name: name.value,
    dueDate: dueDate.value,
    description: description.value,
  };
  tasks.value.push(task);
};

const updateTask = () => {
  const task = tasks.value[editIndex.value];
  task.name = name.value;
  task.dueDate = dueDate.value;
  task.description = description.value;
};

const daysLeft = (task) => {
  const dueDate = new Date(task.dueDate);
  const currentDate = new Date();
  const timeDifference = dueDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
};

const markAsDone = (task) => {
  deleteTask(task.id);
  completedTasks.value.push(task);
};

const deleteTask = (taskId) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === taskId);
  if (taskIndex > -1) {
    tasks.value.splice(taskIndex, 1);
  }
};

const editTask = (taskId) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === taskId);
  if (taskIndex > -1) {
    const task = tasks.value[taskIndex];
    name.value = task.name;
    dueDate.value = task.dueDate;
    description.value = task.description;
    editMode.value = true;
    editIndex.value = taskIndex;
    showForm.value = true;
  }
};

const resetForm = () => {
  name.value = "";
  dueDate.value = "";
  description.value = "";
};

// Search functionality
const searchTerm = ref("");
const searchTasks = () => {
  updatePaginatedTasks();
};

const clearSearch = () => {
  searchTerm.value = "";
  updatePaginatedTasks();
};

const filteredTasks = computed(() => {
  const search = searchTerm.value.toLowerCase().trim();
  if (!search) {
    return tasks.value;
  }
  return tasks.value.filter((task) => {
    const taskName = task.name.toLowerCase();
    const taskDescription = task.description.toLowerCase();
    return taskName.includes(search) || taskDescription.includes(search);
  });
});

const tasksPerPageOptions = [4, 8, 12];
const tasksPerPage = ref(tasksPerPageOptions[0]);
const currentPage = ref(1);
const totalTasks = computed(() => filteredTasks.value.length);
const totalPages = computed(() =>
  Math.ceil(totalTasks.value / tasksPerPage.value)
);

const paginatedTasks = computed(() => {
  const startIndex = (currentPage.value - 1) * tasksPerPage.value;
  const endIndex = startIndex + tasksPerPage.value;
  return filteredTasks.value.slice(startIndex, endIndex);
});

const updatePaginatedTasks = () => {
  currentPage.value = 1;
  const startIndex = (currentPage.value - 1) * tasksPerPage.value;
  const endIndex = startIndex + tasksPerPage.value;
  paginatedTasks.value = filteredTasks.value.slice(startIndex, endIndex);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToFirstPage = () => {
  currentPage.value = 1;
};

const goToLastPage = () => {
  currentPage.value = totalPages.value;
};

const pageItems = [4, 8, 12];

const setTasksPerPage = (perPage) => {
  tasksPerPage.value = perPage;
  currentPage.value = 1;
};

updatePaginatedTasks();
</script>

<style scoped>
/* Styles... */
</style>
