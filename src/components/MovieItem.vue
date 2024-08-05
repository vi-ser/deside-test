<script>
export default {
    name: 'MovieItem',

    props: {
        movie: Object,
    },

    methods: {
        getCover(cover) {
            if (cover == null) {
                return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            } else {
                return 'https://image.tmdb.org/t/p/w342/' + cover;
            }
        },
    }
}
</script>

<template>
    <li>
        <div class="image-container">
            <img class="movie" width="300px" :src="getCover(movie.poster_path)" alt="">
        </div>

    </li>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

img {
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    img {
        width: 200px;
    }
}
</style>