<template>
  <div class="container">
    <div>
      <div class="title">Firebase Test APP</div>
    </div>
    <!-- <div>
      $config:
      <pre align="left">{{ $config }}</pre>
    </div> -->
    This is a MVP for implementing the MockServer for Hopscotch(The main Aim is to show functionality)

    <ol>
      <li>Go to Login and enter Username - bhavuk@bhavuk.com, Password - test1234</li>
      <li>Each time a new JSON object response is created It gets mapped to a unique ID which is displayed when created</li>
      <li>For the Time Being the input is in the form of JSON object -> But can be easily converted to KEY : VALUE Pair input</li>
    </ol>
  </div>
</template>

<script>
export default {
  // components: {
  //   Joke,
  //   SearchJokes,
  // },

  // data() {
  //   return {
  //     jokes: [],
  //   }
  // },

  // created() {
  //   console.log(this.$config)
  // },

  head() {
    return {
      title: 'Firebase',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Firebase',
        },
      ],
    }
  },
}
</script>

<style></style>
