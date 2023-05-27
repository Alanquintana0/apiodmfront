<template>
  <div class="container">
    <h4>Crea un proyecto</h4>
    <div class="class-group">
      <label for="">Nombre del proyecto</label>
      <input type="text" class="form-control" placeholder="Nombre del proyecto" v-model="ProyectRecords.name">
    </div>
    <div class="class-group">
      <label for="">Fecha de orden</label>
      <input type="date" class="form-control" placeholder="Fecha en la que se pidio el proyecto" v-model="ProyectRecords.requestDate">
    </div>
    <div class="class-group">
      <label for="">Fecha de inicio</label>
      <input type="date" class="form-control" placeholder="Fecha en la que se inicio el proyecto" v-model="ProyectRecords.startDate">
    </div>
    <div class="class-group">
      <label for="">Manager del proyecto</label>
      <input type="text" class="form-control" placeholder="Product manager" v-model="ProyectRecords.proyectManager">
    </div>
    <div class="class-group">
      <label for="">Owner del proyecto</label>
      <input type="text" class="form-control" placeholder="Product Owner" v-model="ProyectRecords.productOwner">
    </div>
    <div class="class-group">
      <label for="">Equipo de desarrollo</label>
      <input type="text" class="form-control" placeholder="Equipo que trabajara en el proyecto" v-model="ProyectRecords.developmentTeam">
    </div>
    <label for="">Estado:</label>
    <select v-model="ProyectRecords.status">
      <option value="true">Activo</option>
      <option value="false">Inactivo</option>
    </select>
    <button class="btn btn-large btn-block btn-success btn-primary full-width" @click="addToApi">Iniciar sesion</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'createProyect',
  data () {
    return {
      ProyectRecords: {name: '', requestDate: '', startDate: '', proyectManager: '', productOwner: '', developmentTeam: [], description: '', status: true}
    }
  },
  methods: {
    addToApi () {
      let newProyect = {
        name: this.ProyectRecords.name,
        requestDate: this.ProyectRecords.requestDate,
        startDate: this.ProyectRecords.startDate,
        proyectManager: this.ProyectRecords.proyectManager,
        productOwner: this.ProyectRecords.productOwner,
        developmentTeam: this.ProyectRecords.developmentTeam.push,
        status: this.ProyectRecords.status
      }
      console.log(newProyect)
      axios.post('http://localhost:3000/proyectRecords', newProyect).then((response) => { console.log(response) }).catch((error) => { console.log(`Si llega aqui ${error}`) })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
