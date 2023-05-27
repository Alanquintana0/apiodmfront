import Kanban from '../kanban/Kanban.vue';

export default {
  install(vue) {
    vue.component('kanban-board', Kanban);
  },
};