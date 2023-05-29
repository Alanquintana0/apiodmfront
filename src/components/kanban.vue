<template>
    <div>
      <h1>Backlog</h1>
      <div class="table-container">
        <h2>Tareas</h2>
              <table class="custom-table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Prioridad</th>
      <th>Estatus</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id" draggable="true" @dragstart="startDrag(item)">
                <td>{{ item._name }}</td>
                <td>{{ item._priority }}</td>
                <td>{{ item._status }}</td>
              </tr>
  </tbody>
</table>
<div class="table-container">
        <div class="table-wrapper">
            <h2>En Proceso</h2>
            <!-- Encabezado de la tabla -->
            <thead class="custom-table">
    <tr>
      <th>Nombre</th>
      <th>Prioridad</th>
      <th>Estatus</th>
    </tr>
            </thead>
        </div>
    </div>
      </div>
      <!-- Repite el mismo patrón para las otras dos tablas (Backlog y Terminadas) -->

      <div class="table-container">
        <h2>Terminadas</h2>
        <div class="table-wrapper" @dragover="allowDrop($event)" @drop="dropItem('backlogItems')">
          <table class="custom-table">
            <thead class="custom-table">
    <tr>
      <th>Nombre</th>
      <th>Prioridad</th>
      <th>Estatus</th>
    </tr>
            </thead>
            <!-- Elementos de la tabla -->
          </table>
        </div>
      </div>
    </div>
  </template>
<script>
/* eslint-disable */
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      porHacerItems: [],
      backlogItems: [],
      terminadasItems: [],
      selectedItem: null
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
    }
}}
</script>
<style>
.table-container {
  margin-bottom: 30px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.table-wrapper {
  min-height: 100px;
  border: 2px dashed #ccc;
  padding: 10px;
}

.edit-button {
  margin-right: 5px;
}

/* Estilos para el elemento arrastrable */
tr[draggable="true"] {
  cursor: move;
}

/* Estilos para el contenedor de soltar */
.table-wrapper.dragover {
  background-color: #f9f9f9;
}
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

</style>

</style>