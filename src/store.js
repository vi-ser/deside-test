import { reactive } from "vue";

export const store = reactive({
  trendingMovies: [],
  newMovies: [],
  comingMovies: [],
  selectedCategory: "trending",
});
