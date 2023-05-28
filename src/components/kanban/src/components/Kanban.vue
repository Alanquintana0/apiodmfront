<template>
  <div class="drag-container">
    <h1>User Stories</h1>

    <div class="create-container">
      <input type="text" v-model="newItemName" placeholder="Nombre de la tarea" class="create-input">
      <select v-model="newItemColumn.priority" class="create-input">
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <select v-model="newItemColumn.size" class="create-input">
        <option value="Grande">Grande</option>
        <option value="Medio">Medio</option>
        <option value="Pequeño">Pequeño</option>
      </select>
      <textarea v-model="newItemColumn.como" placeholder="Como" class="create-textarea"></textarea>
      <textarea v-model="newItemColumn.quiero" placeholder="Quiero" class="create-textarea"></textarea>
      <textarea v-model="newItemColumn.deTalManera" placeholder="De tal manera" class="create-textarea"></textarea>
      <button @click="createItem" class="create-button">Crear Tarea</button>
    </div>
    <!-- <div class="search-container">
      <input type="text" v-model="searchName" placeholder="Buscar tarea" class="search-input">
      <button @click="searchItems" class="search-button">Buscar</button>
    </div> -->
      <div v-for="item in searchResults" :key="item.id" class="card">
        <!-- <h1>Histroy Register</h1>
        <div class="card-header">
          <span class="card-name">{{ item.name }}</span>
          <span class="card-size">Tamaño: {{ item.column.size }}</span>
          <span class="card-priority">Prioridad: {{ item.column.priority }}</span>
        </div>
        <div class="card-body">
          <div class="card-section">
            <h3 class="card-section-title">Como:</h3>
            <p class="card-section-text">{{ item.column.como }}</p>
          </div>
          <div class="card-section">
            <h3 class="card-section-title">Quiero:</h3>
            <p class="card-section-text">{{ item.column.quiero }}</p>
          </div>
          <div class="card-section">
            <h3 class="card-section-title">De tal manera:</h3>
            <p class="card-section-text">{{ item.column.deTalManera }}</p>
          </div>
        </div>
        <div class="card-footer">
          <button @click="editItem(item)" class="edit-button">Editar</button>
          <button @click="deleteItem(item)" class="delete-button">Eliminar</button>
        </div> -->
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      searchName: '',
      searchResults: [],
      newItemName: '',
      newItemColumn: { name: '', size: 'Grande', priority: 'Alta', como: '', quiero: '', deTalManera: '' }
    }
  },

  mounted () {
    this.fetchItems()
  },

  methods: {
    async fetchItems () {
      try {
        const response = await axios.get('http://localhost:3000/boards')
        this.searchResults = response.data
      } catch (error) {
        console.log('Error al obtener las tareas:', error)
      }
    },

    async createItem () {
      try {
        const newItem = {
          name: this.newItemName,
          column: {
            name: this.newItemColumn.name,
            size: this.newItemColumn.size,
            priority: this.newItemColumn.priority,
            como: this.newItemColumn.como,
            quiero: this.newItemColumn.quiero,
            deTalManera: this.newItemColumn.deTalManera
          }
        }
        const response = await axios.post('http://localhost:3000/boards', newItem)
        this.searchResults.unshift(response.data)
        this.newItemName = ''
        this.newItemColumn = { name: '', size: 'Grande', priority: 'Alta', como: '', quiero: '', deTalManera: '' }
      } catch (error) {
        console.log('Error al crear la tarea:', error)
      }
    },

    async editItem (item) {
      try {
        const updatedItem = {
          name: item.name,
          column: {
            name: item.column.name,
            size: item.column.size,
            priority: item.column.priority,
            como: item.column.como,
            quiero: item.column.quiero,
            deTalManera: item.column.deTalManera
          }
        }
        const response = await axios.put(`http://localhost:3000/boards/${item.id}`, updatedItem)
        const index = this.searchResults.findIndex(result => result.id === item.id)
        this.searchResults.splice(index, 1, response.data)
      } catch (error) {
        console.log('Error al editar la tarea:', error)
      }
    },

    async deleteItem (item) {
      try {
        await axios.delete(`http://localhost:3000/boards/${item.id}`)
        const index = this.searchResults.findIndex(result => result.id === item.id)
        this.searchResults.splice(index, 1)
      } catch (error) {
        console.log('Error al eliminar la tarea:', error)
      }
    },
    async searchItems () {
      try {
        const response = await axios.get(`http://localhost:3000/boards?name=${this.searchName}`)
        this.searchResults = response.data
      } catch (error) {
        console.log('Error al buscar las tareas:', error)
      }
    }
  }
}
</script>

<style>
.drag-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

.drag-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.create-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.create-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.card {
  background-color: rgb(255, 255, 255);
  padding: 10px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.card-name {
  font-weight: bold;
}

.card-size {
  margin-left: 10px;
}

.edit-button,
.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
</style>
