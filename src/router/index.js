import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/auth/Login'
import Me from '@/views/me/Index'
import Book from '@/views/book/Index'
import Eat from '@/views/eat/Index'
import Note from '@/views/note/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/eat',
      name: 'Eat',
      component: Eat
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
