<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      TeamMembers: {password: '', email: ''}
    }
  },
  methods: {
    inicioSesion () {
      let newTeamMember = {
        email: this.TeamMembers.email,
        password: this.TeamMembers.password
      }
      if (newTeamMember.email !== '' && newTeamMember.password !== '') {
        console.log(newTeamMember)
        console.log(newTeamMember.rol)
        axios.post('https://api1-a329927.b4a.run/login', newTeamMember)
          .then((response) => {
            this.$router.push('/inicio')
            console.log(response)
          }).catch((error) => { console.log(`Si llega aqui ${error}`) })
      } else {
        console.log('Blank text')
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <h4>Iniciar sesion</h4>
    <div class="class-group">
      <label class="pull-left">Introduce tu E-mail:</label>
      <input type="text" class="form-control" v-model="TeamMembers.email" required>
    </div>
    <div class="class-group">
      <label class="pull-left">Introduce tu Contraseña:</label>
      <input type="password" class="form-control" v-model="TeamMembers.password" required>
    </div>
    <button class="btn btn-large btn-block btn-success btn-primary full-width" @click="inicioSesion()">Iniciar sesion</button>
    <router-link to="/registro">
      <button class="btn btn-large btn-block btn-success full-width">Registrate</button>
    </router-link>
  </div>
</template>

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
