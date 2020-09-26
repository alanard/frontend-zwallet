<template>
  <div>
    <ContainerOne />
    <ContainerTwo />
    <ContainerThree />
    <ContainerFour />
    <Footer />
  </div>
</template>

<script>
import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import ContainerThree from './components/ContainerThree'
import ContainerFour from './components/ContainerFour'
import Footer from './components/Footer'
export default {
  name: 'Main',
  components: {
    ContainerOne,
    ContainerTwo,
    ContainerThree,
    ContainerFour,
    Footer
  }
}
</script>

<style scoped>
</style>
