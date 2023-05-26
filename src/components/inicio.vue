<script>
import axios from 'axios'
export default {
  name: 'inicio',
  data () {
    return {
      ProyectRecords: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/proyectRecords')
      .then((response) => {
        console.log(response.data)
        this.ProyectRecords = response.data
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
  <div class="container">
    <router-link to="/crearProyecto">
      <button class="btn btn-large btn-block btn-success full-width">Crear proyecto</button>
    </router-link>
    <table class="table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripcion</th>
          <th>Equipo de desarrollo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proyectRecord_alias in ProyectRecords" :key="proyectRecord_alias.id">
          <td> {{ proyectRecord_alias.id }} </td>
          <td> {{ proyectRecord_alias.DevelopmentTeam }} </td>
          <td> {{ proyectRecord_alias.description }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
