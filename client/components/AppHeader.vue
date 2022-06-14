<template>
  <header class="header">
    <h1 class="title">Firebase</h1>

    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/createEndpoint">createEndpoint</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login" v-if="!loggedIn">login</nuxt-link>
      </li>
      <li>
        <div @click="logout" v-if="loggedIn" class="logout-link">Logout</div>
      </li>
    </ul>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Cookie from 'js-cookie'

export default {
  name: 'AppHeader',

  mounted() {
    // run as soon as the template loads
    this.checkLoggedIn()
  },

  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    logout() {
      alert('test')
    },
    checkLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('logged in')
          this.loggedIn = true

          // To get access to the token on the server side as well(via cookies access)
          firebase
            .auth()
            .currentUser.getIdTokenResult(true)
            .then((token) => {
              Cookie.set('access_token', token)
            })

          firebase
        } else {
          this.loggedIn = false
          // if not logged in remove the token
          Cookie.remove('access_token')
        }
      })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
    },
  },
}
</script>

<style>
.logout-link {
  cursor: pointer;
  text-decoration: underline;
  background-color: black;
  color: white;
}
.logout-link:hover {
  background: grey;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}
.header .title {
  font-size: 3rem;
  color: #526488;
}
.header ul {
  display: flex;
  list-style-type: none;
}
.header a:hover {
  display: inline-block;
  background: grey;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
</style>
