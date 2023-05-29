<script>
import axios from 'axios'

export default{
  name: 'CrearUserHistory',
  data () {
    return {
      UserHistory: {name: '', context: '', rol: '', benefit: '', priority: '', size: '', event: '', result: '', status: true, column: ''}
    }
  },
  methods: {
    addToApi () {
      let newUserHistory = {
        name: this.UserHistory.name,
        context: this.UserHistory.context,
        rol: this.UserHistory.rol,
        benefit: this.UserHistory.benefit,
        priority: this.UserHistory.priority,
        size: this.UserHistory.size,
        event: this.UserHistory.event,
        result: this.UserHistory.result,
        status: this.UserHistory.status,
        column: this.UserHistory.column
      }
      console.log(newUserHistory)
      axios.post('https://api1-a329927.b4a.run/userHistory', newUserHistory).then((response) => { console.log(response) }).catch((error) => { console.log(`Si llega aqui ${error}`) })
    }
  }
}
</script>

<template>
<div class="container">
  <h4>Crear tarjeta de User History</h4>
  <div class="class-group">
    <label for="">Nombre de User History</label>
    <input type="text" class="form-control" placeholder="Introduzca nombre" v-model="UserHistory.name" required>
  </div>
  <div class="class-group">
    <label for="">Contexto de User History</label>
    <input type="text" class="form-control" placeholder="Introduzca contexto" v-model="UserHistory.context" required>
  </div>
  <div class="class-group">
    <label for="">Rol User History</label>
    <input type="text" class="form-control" placeholder="Introduzca rol" v-model="UserHistory.rol" required>
  </div>
  <div class="class-group">
    <label for="">Benefit User History</label>
    <input type="text" class="form-control" placeholder="Introduzca benefit" v-model="UserHistory.benefit" required>
  </div>
  <div class="class-group">
    <label for="">Priority de User History</label>
    <input type="number" class="form-control" placeholder="Introduzca prioridad" v-model="UserHistory.priority" required>
  </div>
  <div class="class-group">
    <label for="">Tamano de User History</label>
    <input type="number" class="form-control" placeholder="Introduzca tamano" v-model="UserHistory.size" required>
  </div>
  <div class="class-group">
    <label for="">Evento</label>
    <input type="text" class="form-control" placeholder="Introduzca event" v-model="UserHistory.event" required>
  </div>
  <div class="class-group">
    <label for="">Resultado</label>
    <input type="text" class="form-control" placeholder="Introduzca resultado" v-model="UserHistory.result" required>
  </div>
  <div class="class-group">
    <label for="">Columna</label>
    <input type="number" class="form-control" placeholder="Introduzca numero de columna" v-model="UserHistory.column" required>
  </div>
  <label for="">Estado:</label>
  <select v-model="UserHistory.status" required>
    <option value="true">Activo</option>
    <option value="false">Inactivo</option>
  </select>
  <button class="btn btn-large btn-block btn-success btn-primary full-width" @click="addToApi">Crear user history</button>
  <router-link to="/inicio">
    <button class="btn btn-large btn-block btn-success full-width">Volver a inicio</button>
  </router-link>
</div>
</template>

<style scoped>

</style>
