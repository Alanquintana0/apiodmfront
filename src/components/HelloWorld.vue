<template>
  <div class="container">
    <form action="">
      <h4>Registro</h4>
      <div class="class-group">
        <label class="pull-left">Nombre</label>
        <input type="text" class="form-control" placeholder="introduzca Nombre" v-model="TeamMembers.name">
      </div>
      <div class="class-group">
        <label class="pull-left">Apellido</label>
        <input type="text" class="form-control" placeholder="introduzca Apellido" v-model="TeamMembers.lastName">
      </div>
      <div class="class-group">
        <label class="pull-left">E-mail</label>
        <input type="text" class="form-control" placeholder="introduzca Email" v-model="TeamMembers.email">
      </div>
      <div class="class-group">
        <label class="pull-left">Password</label>
        <input type="password" class="form-control" placeholder="introduzca Password" v-model="TeamMembers.password">
      </div>
      <div class="class-group">
        <label class="pull-left">Curp</label>
        <input type="text" class="form-control" placeholder="introduzca Curp" v-model="TeamMembers.curp">
      </div>
      <div class="class-group">
        <label class="pull-left">Nivel</label>
        <select class="form-control" v-model="TeamMembers.skills">
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Master">Master</option>
        </select>
      </div>
      <div class="class-group">
        <label class="pull-left">Rol</label>
        <select class="form-control" v-model="TeamMembers.rol">
          <option value="ScrumMaster">ScrumMaster</option>
          <option value="ProductOwner">ProductOwner</option>
          <option value="Developer">Developer</option>
        </select>
      </div>
      <div class="class-group">
        <label class="pull-left">RFC</label>
        <input type="text" class="form-control" placeholder="introduzca RFC" v-model="TeamMembers.rfc">
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
      axios.post('http://localhost:3000/TeamMembers', newTeamMember).then((response) => { console.log(response) }).catch((error) => { console.log(`Si llega aqui ${error}`) })
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
