<script>
import MovieItem from './MovieItem.vue';
import { store } from '../store';


export default {
    name: 'AppMovies',

    components: {
        MovieItem,
    },

    data() {
        return {
            store,
        }
    },

    computed: {
        currentMovies() {
            switch (this.store.selectedCategory) {
                case 'new':
                    return this.store.newMovies;
                case 'coming':
                    return this.store.comingMovies;
                case 'trending':
                default:
                    return this.store.trendingMovies;
            }
        }
    },

    methods: {
        selectCategory(category) {
            this.store.selectedCategory = category;
        }
    }
}
</script>

<template>
    <div class="container-left">

        <!-- smartphones view -->
        <span class="category fs-6 d-md-none p-4">trending</span>
        <ul class="px-4 mb-5">
            <div class="d-flex d-md-none flex-row gap-3 overflow-x-auto list-unstyled mt-3">
                <MovieItem v-for="currentMovie in store.trendingMovies" :movie="currentMovie" :key="currentMovie.id">
                </MovieItem>
            </div>
        </ul>

        <span class="category fs-6 d-md-none p-4">new on disney+</span>
        <ul class="px-4 mb-5">
            <div class="d-flex d-md-none flex-row gap-3 overflow-x-auto list-unstyled mt-3">
                <MovieItem v-for="currentMovie in store.newMovies" :movie="currentMovie" :key="currentMovie.id">
                </MovieItem>
            </div>
        </ul>

        <span class="category fs-6 d-md-none p-4">coming soon</span>
        <ul class="px-4 mb-5">
            <div class="d-flex d-md-none flex-row gap-3 overflow-x-auto list-unstyled mt-3">
                <MovieItem v-for="currentMovie in store.comingMovies" :movie="currentMovie" :key="currentMovie.id">
                </MovieItem>
            </div>
        </ul>

        <!-- medium devices and desktop view -->
        <div class="container">
            <div class="categories d-none d-md-flex gap-4 justify-content-center mb-5">
                <span class="category fs-5" :class="{ selected: store.selectedCategory === 'trending' }"
                    @click="selectCategory('trending')">trending</span>
                <span class="category fs-5" :class="{ selected: store.selectedCategory === 'new' }"
                    @click="selectCategory('new')">new on disney+</span>
                <span class="category fs-5" :class="{ selected: store.selectedCategory === 'coming' }"
                    @click="selectCategory('coming')">coming soon</span>
            </div>
        </div>

        <!-- movies carousel trick -->
        <ul class="d-none d-md-flex gap-3 overflow-hidden">
            <div class="movie-slider d-flex flex-row gap-3 list-unstyled">
                <MovieItem v-for="currentMovie in currentMovies" :movie="currentMovie" :key="currentMovie.id">
                </MovieItem>
            </div>
            <div class="movie-slider d-flex flex-row gap-3 list-unstyled">
                <MovieItem v-for="currentMovie in currentMovies" :movie="currentMovie" :key="currentMovie.id">
                </MovieItem>
            </div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;


.container-left {

    margin-top: 160px;
    margin-bottom: 160px;

    .category {
        text-transform: uppercase;
        color: $lightColor;
        font-family: Avenir, sans-serif;
        font-size: 20px;
        cursor: pointer;

        &.selected {
            position: relative;
        }

        &.selected::after {
            content: "";
            height: 5px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 40px;
            background-color: white;
        }
    }


    .movie-slider {
        animation: movie-slide 100s infinite linear;
    }

    @keyframes movie-slide {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }


}
</style>