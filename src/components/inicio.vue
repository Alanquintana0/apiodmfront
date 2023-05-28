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
    axios.get('https://api1-a329927.b4a.run/proyectRecords')
      .then((response) => {
        console.log(`Responde con estos datos ${response.data.obj}`)
        console.log(response.data.obj)
        this.ProyectRecords = response.data.obj
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
    <table class="table-striped table-bordered pull-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripcion</th>
          <th>Equipo de desarrollo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proyectRecord_alias in ProyectRecords" :key="proyectRecord_alias.id">
          <td> {{ proyectRecord_alias._id }} </td>
          <td> {{ proyectRecord_alias._DevelopmentTeam }} </td>
          <td> {{ proyectRecord_alias._description }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
