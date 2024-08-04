<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppWatch from './components/AppWatch.vue';
import AppBundle from './components/AppBundle.vue';
import AppDevices from './components/AppDevices.vue';
import AppFaq from './components/AppFaq.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppJumbotron,
    AppWatch,
    AppBundle,
    AppDevices,
    AppFaq,
    AppFooter,
  }

}

</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppWatch></AppWatch>
  <AppBundle></AppBundle>
  <AppDevices></AppDevices>
  <AppFaq></AppFaq>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;
</style>
