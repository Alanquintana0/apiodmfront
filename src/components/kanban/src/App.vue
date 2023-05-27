<template>
    <div id="app">
      <Kanban :stages="statuses" :blocks="blocks" @update-block="updateBlock">
        <div v-for="stage in statuses" :slot="stage" :key="stage">
          <h2>
            {{ stage }}
            <a>+</a>
          </h2>
        </div>
        <div v-for="item in blocks" :slot="item.id" :key="item.id">
          <div>
            <strong>id:</strong> {{ item.id }}
          </div>
          <div>
            {{ item.title }}
          </div>
        </div>
        <div v-for="stage in statuses" :key="stage" :slot="`footer-${stage}`">
            <a href="" @click.prevent="() => addBlock(stage)">+ Add new block</a>
        </div>
      </Kanban>
    </div>
  </template>
  
  <script>
  import faker from 'faker';
  import { debounce } from 'lodash';
  import Kanban from './components/Kanban';
  
  export default {
    name: 'app',
    components: {
      Kanban,
    },
    data() {
      return {
        statuses: ['on-hold', 'in-progress', 'needs-review', 'approved'],
        blocks: [],
      };
    },
    mounted() {
      for (let i = 0; i <= 10; i += 1) {
        this.blocks.push({
          id: i,
          status: this.statuses[Math.floor(Math.random() * 4)],
          title: faker.company.bs(),
        });
      }
    },
  
    methods: {
      updateBlock: debounce(function (id, status) {
        this.blocks.find(b => b.id === Number(id)).status = status;
      }, 500),
      addBlock: debounce(function (stage) {
        this.blocks.push({
          id: this.blocks.length,
          status: stage,
          title: faker.company.bs(),
        });
      }, 500),
    },
  };
  </script>