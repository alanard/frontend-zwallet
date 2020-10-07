<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created() {
    this.interceptorsRequest()
  },
  mounted() {
    this.interceptorsResponse()
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;

  font-family: 'Nunito Sans', sans-serif;
}
</style>
