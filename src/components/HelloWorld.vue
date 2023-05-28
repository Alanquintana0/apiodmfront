<template>
  <div class="container">
    <form action="">
      <h4>Registro</h4>
      <div class="class-group">
        <label class="pull-left">Introduce tu Nombre:</label>
        <input type="text" class="form-control" v-model="TeamMembers.name" required>
      </div>
      <div class="class-group">
        <label class="pull-left">Introduce tu Apellido:</label>
        <input type="text" class="form-control" v-model="TeamMembers.lastName" required>
      </div>
      <div class="class-group">
        <label class="pull-left">introduce tu Correo:</label>
        <input type="email" class="form-control" v-model="TeamMembers.email" required>
      </div>
      <div class="class-group">
        <label class="pull-left">Introduce tu Contraseña:</label>
        <input type="password" class="form-control" v-model="TeamMembers.password" required>
      </div>
      <div class="class-group">
        <label class="pull-left">Introduce tu Curp:</label>
        <input type="text" class="form-control" v-model="TeamMembers.curp" required>
      </div>
      <div class="class-group">
        <label class="pull-left">Nivel</label>
        <select class="form-control" v-model="TeamMembers.skills" required>
          <option value="">(Selecciona una opcion)</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Master">Master</option>
        </select>
      </div>
      <div class="class-group">
        <label class="pull-left">Rol</label>
        <select class="form-control" v-model="TeamMembers.rol" required>
          <option value="">(Selecciona una opcion)</option>
          <option value="ScrumMaster">ScrumMaster</option>
          <option value="ProductOwner">ProductOwner</option>
          <option value="Developer">Developer</option>
        </select>
      </div>
      <div class="class-group">
        <label class="pull-left">introduce tu RFC:</label>
        <input type="text" class="form-control" v-model="TeamMembers.rfc" required>
      </div>
      <button class="btn btn-large btn-block btn-success full-width" @click="addToApi()">Registrate</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      TeamMembers: {name: '', lastName: '', curp: '', rfc: '', skills: '', rol: '', password: '', email: ''}
    }
  },
  methods: {
    addToApi () {
      let newTeamMember = {
        name: this.TeamMembers.name,
        lastName: this.TeamMembers.lastName,
        email: this.TeamMembers.email,
        password: this.TeamMembers.password,
        curp: this.TeamMembers.curp,
        skills: this.TeamMembers.skills,
        rol: this.TeamMembers.rol,
        rfc: this.TeamMembers.rfc
      }
      console.log(newTeamMember)
      console.log(newTeamMember.rol)
      axios.post('https://api1-a329927.b4a.run/teamMembers', newTeamMember).then((response) => { console.log(response) }).catch((error) => { console.log(`Si llega aqui ${error}`) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
