<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppWatch from './components/AppWatch.vue';
import AppFaq from './components/AppFaq.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppJumbotron,
    AppWatch,
    AppFaq,
    AppFooter,
  }

}

</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppWatch></AppWatch>
  <AppFaq></AppFaq>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;
</style>
