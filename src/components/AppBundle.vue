<script>

export default {
    name: 'AppBundle',
};
</script>

<template>
    <div class="container w-100 d-flex flex-column flex-lg-row">
        <div class="left col-12 col-lg-6 d-flex flex-column">
            <div class="posters row-cols-3">
                <img class="poster p-1" src="/img/hulu-poster.jpg" alt="">
                <img class="poster p-1" src="/img/disney-poster.jpg" alt="">
                <img class="poster p-1" src="/img/espn-poster.jpg" alt="">
            </div>
            <div class="logo-bundle">
                <img class="logo" src="/img/disney-bundle.svg" alt="">

            </div>
        </div>
        <div class="right col-12 col-lg-6 d-flex flex-column gap-4 justify-content-center">
            <p class="mb-0">Get your favorite stories, originals and live sports with Disney+, Hulu, and ESPN+</p>
            <button type="button" class="primary-button">get all three</button>
            <a href="">Terms Apply.</a>

        </div>


    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.container {
    background-image: url('img/bundle-bg.svg');
    background-size: cover;
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 80px;

    .left {
        .posters {
            width: 100%;
        }

        .poster {
            border-radius: 12px;
        }

        .logo-bundle {
            padding: 40px 54px;
        }
    }

    .right {
        padding: 12px 24px;


        p {
            font-family: Avenir, sans-serif;
            font-size: 24px;
            color: white;
        }

        button {
            @include primaryButton;
        }

        a {
            font-family: Avenir, sans-serif;
            color: white;
            font-weight: 500;
            font-size: 12px;
        }
    }
}
</style>