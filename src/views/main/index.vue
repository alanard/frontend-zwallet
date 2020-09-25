<template>
  <div>
    <ContainerOne />
    <ContainerTwo />
    <ContainerThree />
  </div>
</template>

<script>
import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import ContainerThree from './components/ContainerThree'
export default {
  name: 'Main',
  components: {
    ContainerOne,
    ContainerTwo,
    ContainerThree
  }
}
</script>

<style scoped>
</style>
