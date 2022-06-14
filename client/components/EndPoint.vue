<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="method" placeholder="Method" id="method"/>
    <input type="text" v-model="response" placeholder="Response" id="response"/>
    <!-- <input type="text" v-model="text" placeholder="Search jokes" />
    <input type="text" v-model="text" placeholder="Search jokes" /> -->
    <input type="submit" value="Mock My JSON response" id="submit_get"/>
  </form>
</template>

<script>
export default {
  name: 'EndPoint',

  data() {
    return {
      method: '',
      response: '',
    }
  },

  methods: {
    //  On submit, send the text entered to to parent Component
    //  with 'search-text' placeholder and this.text as a parameter
    onSubmit() {
      console.log('Inside on submit functions')
      this.$emit('make-endpoint', this.method, this.response)
      this.method = ''
      this.response = ''
    },
  },
}
</script>

<style></style>
