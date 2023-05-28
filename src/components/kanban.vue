<template>
    <div>
      <h2>List of Items:</h2>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
      axios.get('/api/items') // Reemplaza '/api/items' con la URL de tu endpoint de API
        .then(response => {
          this.items = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
