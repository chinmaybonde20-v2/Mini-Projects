import VueGoodTable from './components/Table.vue';

export default {
  install: (app) => {
    app.component('VueGoodTable', VueGoodTable);
  }
}

export { VueGoodTable };