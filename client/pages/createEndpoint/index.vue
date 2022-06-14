<template>
  <div class="container">
    <div>
      <div class="title">secret route Only Accesible when Logged in</div>
    </div>
    <div>
      <div class="title">http://BASE_ADDRESS/api/ID_OF_ENDPOINT</div><br>
    </div>

    <!-- <small>Request ID:-  {{ $route.params.id }}</small> -->

      <ol>
      <li>Each time a new JSON object response is created It gets mapped to a unique ID which is displayed when created</li>
      <li>For the Time Being the input is in the form of JSON object -> But can be easily converted to KEY : VALUE Pair input</li>
    </ol><br>

    <div>
      <div>Currently Only a GET response is supported</div>
      <div>Sample <strong>Response</strong> Must be in JSON form example:- <br><br>
      Method = GET and RESPONSE = { "name":"John", "age":30, "city":"New York"}</div>
    </div> <br>

     <!-- <div v-if="ID != null">
      Sample Route:- {{ $config.AUTH_DOMAIN }}
    </div> <br> -->

      <div v-if="ID != null">
      Your Unique Route:- {{ $config.BASE_URL }}/api/{{ ID }}
    </div> <br>






    <EndPoint v-on:make-endpoint="make_endpoint" />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Cookie from 'js-cookie'

import EndPoint from '../../components/EndPoint'
import { getUserfromCookie } from '@/helpers/CookieParser'
// import storeDB from '../../plugins/firebase'

export default {
  components: {
    EndPoint,
  },

  data(){
    return{
      ID: null

    }
  },

// add later
  // data(){
  //   return{
  //     id
  //   }
  // },


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

  methods: {
    async make_endpoint(method, response) {
      console.log('worked perfectly', method, response)
      console.log('The current user is', firebase.auth().currentUser.email)
      const data_jsonConversion = JSON.parse(response)
      console.log(data_jsonConversion)
      let currentUser = firebase.auth().currentUser.email
      data_jsonConversion.createdBy = currentUser;

      

      console.log('The store db is ', firebase.firestore())

      // Add a new document in collection "cities"

      // Add a new document in collection "cities" with ID 'LA'
      // firebase
      //   .firestore()
      //   .collection('mockpoints')
      //   .doc()
      //   .set(data_jsonConversion)
      //   .then((res) => {
      //     console.log(res)
      //   })

        firebase.firestore().collection('mockpoints').add(data_jsonConversion).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.ID = docRef.id
        }).catch(error => {
          console.error("Error adding document: ", error);
        })

      // BASE_JSON = {
      //   mainobject: [
      //     {
      //       id: 0,
      //       name: 'bhavuk',
      //       description: 'This is temp usage',
      //     },
      //     {
      //       id: 1,
      //       name: 'abhinav',
      //       description: 'This is temp usage',
      //     },
      //   ],
      // }
    },
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
