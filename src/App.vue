<script>
import { store } from './store';
import { API_KEY } from './config';
import axios from 'axios';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMovies from './components/AppMovies.vue';
import AppPlan from './components/AppPlan.vue';
import AppWatch from './components/AppWatch.vue';
import AppBundle from './components/AppBundle.vue';
import AppDevices from './components/AppDevices.vue';
import AppFaq from './components/AppFaq.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppJumbotron,
    AppMovies,
    AppPlan,
    AppWatch,
    AppBundle,
    AppDevices,
    AppFaq,
    AppFooter,
  },

  data() {
    return {
      store,
    }
  },

  created() {
    // API from themoviedb
    // trending movies
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY).then(res => {
      this.store.trendingMovies = res.data.results;
    });

    // new movies
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY).then(res => {
      this.store.newMovies = res.data.results;
    });

    // coming soon movies
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY).then(res => {
      this.store.comingMovies = res.data.results;
    });
  },


}

</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppMovies></AppMovies>
  <AppPlan></AppPlan>
  <AppWatch></AppWatch>
  <AppBundle></AppBundle>
  <AppDevices></AppDevices>
  <AppFaq></AppFaq>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;
</style>
