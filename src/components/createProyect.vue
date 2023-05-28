<template>
  <div class="container">
    <h4>Crea un proyecto</h4>
    <div class="class-group">
      <label for="">Nombre del proyecto</label>
      <input type="text" class="form-control" placeholder="Nombre del proyecto" v-model="ProyectRecords.Name">
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
      <input type="text" class="form-control" placeholder="Product manager" v-model="ProyectRecords.projectManagerId">
    </div>
    <div class="class-group">
      <label for="">Owner del proyecto</label>
      <input type="text" class="form-control" placeholder="Product Owner" v-model="ProyectRecords.productOwnerId">
    </div>
    <div class="class-group">
      <label for="">Equipo de desarrollo</label>
      <input type="text" class="form-control" placeholder="Equipo que trabajara en el proyecto" v-model="ProyectRecords.developmentTeam">
    </div>
    <div class="class-group">
      <label for="">Descripcion</label>
      <input type="text" class="form-control" placeholder="Descripcion del proyecto" v-model="ProyectRecords.description">
    </div>
    <label for="">Estado:</label>
    <select v-model="ProyectRecords.status">
      <option value="true">Activo</option>
      <option value="false">Inactivo</option>
    </select>
    <button class="btn btn-large btn-block btn-success btn-primary full-width" @click="addToApi">Crear Proyecto</button>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'createProyect',
  data () {
    return {
      ProyectRecords: {Name: '', requestDate: '', startDate: '', projectManagerId: '', productOwnerId: '', developmentTeam: [], description: '', status: true},
      team:[]
    }
  },
  methods: {
    addToApi () {
      let newProyect = {
        Name: this.ProyectRecords.Name,
        requestDate: this.ProyectRecords.requestDate,
        startDate: this.ProyectRecords.startDate,
        projectManagerId: this.ProyectRecords.projectManagerId,
        productOwnerId: this.ProyectRecords.productOwnerId,
        developmentTeam: this.ProyectRecords.developmentTeam,
        status: this.ProyectRecords.status,
        description: this.ProyectRecords.description
      }
      console.log(newProyect)
      axios.post('https://api1-a329927.b4a.run/proyectRecords', newProyect).then((response) => { console.log(response) }).catch((error) => { console.log(`Si llega aqui ${error}`) })
    }
  },
  created () {
    axios.get('https://api1-a329927.b4a.run/teamMember')
             .then(response => {
                this.team = response.data.obj;
             }).catch(err => {
                console.log(err);
             })
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
