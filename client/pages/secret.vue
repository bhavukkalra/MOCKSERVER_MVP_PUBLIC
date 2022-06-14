<template>
  <div class="container">
    <div>
      <div class="title">secret route</div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Cookie from 'js-cookie'

import { getUserfromCookie } from '@/helpers/CookieParser'

export default {
  // naive way of hiding the secret(Too slow and data can still be seen)

  // created() {
  //   let user = firebase.auth().currentUser
  //   if (!user) {
  //     this.$router.push('/login')
  //   }
  // },

  asyncData({ req, redirect }) {
    if (process.server) {
      console.log('Cookie parser is', getUserfromCookie)
      // In nuxt first the server side is ran then the client side(with routing and stuff)
      const user = getUserfromCookie(req)
      console.log(user)
      if (!user) {
        redirect('/login')
      }
    } else {
      // firebase.auth().currentUser -> We have access to it on client side only(not on server side)
      // so to keep track of if the user is logged in on server side is cookies
      let user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
    }
  },

  head() {
    return {
      title: 'Firebase',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'best place for Firebase learning',
        },
      ],
    }
  },
}
</script>

<style></style>
