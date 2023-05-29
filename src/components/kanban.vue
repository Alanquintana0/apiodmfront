<template>
    <div>
      <h1>Backlog</h1>
      <h2>List of Items:</h2>
      <input type="text" v-model="busca" />
      <button @click="buscar">Search</button>
      <div class="space">
      </div>
      <div class="container">
        <table class="custom-table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Prioridad</th>
      <th>Estatus</th>
      <th>Resultado</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item._name }}</td>
      <td>{{ item._priority }}</td>
      <td>{{ item._status }}</td>
      <td>{{ item._result }}</td>
      <td>
        <button class="edit-button" @click="editItem(item)">Editar Estatus</button>
      </td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
  </template>
<script>
/* eslint-disable */
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
      axios.get('https://api1-a329927.b4a.run/userHistory')
        .then(response => {
          this.items = response.data.obj
        })
    .catch(error => {
      console.error(error)
        })
    },
    buscar() {
      this.filteredItems = this.items.filter(item =>
        item._name.toLowerCase().includes(this.busca.toLowerCase())
      )
    },
    editItem(item) {
        const updatedItem = {
        ...item,
        _status: 'Nuevo estado', // Reemplaza 'Nuevo estado' por el nuevo valor de _status
        }
        axios.put('https://api1-a329927.b4a.run/userHistory', updatedItem)
        .then(response => {
            const index = this.items.findIndex(i => i.id === item.id)
        if (index !== -1) {
            this.items.splice(index, 1, updatedItem)
        }
        })
        .catch(error => {
        console.error(error)
        })
    }
}}
</script>
<style>
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 10px;
  text-align: center;
}

.custom-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.custom-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.edit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #0056b3;
}
.space{
    margin-top: 40px;
}
</style>