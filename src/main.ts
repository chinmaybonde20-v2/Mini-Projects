// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import VueGoodTable from '.'
import router from './routes';

const app = createApp(App)
app.use(VueGoodTable);
app.use(router);
app.mount('#app');








