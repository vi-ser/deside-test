<script>
import { store } from './store';
import axios from 'axios';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMovies from './components/AppMovies.vue';
import AppWatch from './components/AppWatch.vue';
import AppBundle from './components/AppBundle.vue';
import AppDevices from './components/AppDevices.vue';
import AppFaq from './components/AppFaq.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppJumbotron,
    AppMovies,
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
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10').then(res => {
      this.store.trendingMovies = res.data.results;
    });

    // new movies
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10').then(res => {
      this.store.newMovies = res.data.results;
    });

    // coming soon movies
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10').then(res => {
      this.store.comingMovies = res.data.results;
    });
  },


}

</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppMovies></AppMovies>
  <AppWatch></AppWatch>
  <AppBundle></AppBundle>
  <AppDevices></AppDevices>
  <AppFaq></AppFaq>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;
</style>
