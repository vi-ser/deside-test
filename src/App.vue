<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppWatch from './components/AppWatch.vue';

export default {
  components: {
    AppJumbotron,
    AppWatch
  }

}

</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppWatch></AppWatch>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;
</style>
