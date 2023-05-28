import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import inicio from '@/components/inicio'
import createProyect from '@/components/createProyect'
import backlog from '@/components/kanban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registro',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/crearProyecto',
      name: 'createProyect',
      component: createProyect
    },
    {
      path: '/backlog',
      name: 'backlog',
      component: backlog
    }
  ]
})
