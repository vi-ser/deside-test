<script>
import AppNav from '../components/AppNav.vue';

export default {
    name: 'AppJumbotron',

    components: {
        AppNav,
    }
}
</script>

<template>
    <div class="jumbo">
        <AppNav></AppNav>
        <div class="main-section container-fluid text-center justify-content-center m-auto">
            <div class="ctas row d-flex flex-column flex-sm-row justify-content-center gap-4 px-4">
                <div class="left col-12 col-sm-8 col-md-4 col-lg-3 d-flex flex-column" width="307px" height="auto">
                    <img src="/img/logo-disney-hulu.svg" width="100%" alt="logo disney hulu">
                    <button type="button" class="primary-button">get them both</button>
                </div>
                <div class="right col-12 col-sm-8 col-md-4 col-lg-3 d-flex flex-column" width="307px" height="auto">
                    <img src="/img/logo-disney-hulu-espn.svg" width="100%" alt="logo disney hulu espn+">
                    <button type="button" class="primary-button">get all three</button>
                </div>
            </div>
            <div class="text p-4">
                <p class="description">All of these and more now streaming.</p>
                <p class="small-description">The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu (With
                    Ads).
                    <a href="" class="text-decoration-none text-white">Terms Apply.</a>
                </p>
            </div>
            <img class="brands col-12 col-md-8 col-lg-6 p-4" src="/img/brands.png" alt="brand logos">

            <a href="" class="cta text-decoration-none d-block">View All Plan Options</a>


        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.jumbo {
    height: 675px;
    background-image: url('/img/jumbotron.jpg');
    background-size: cover;
    margin-bottom: 180px;

    img {
        margin-bottom: 28px;
    }

    .primary-button {
        @include primaryButton;
    }

    .description,
    .small-description {
        font-family: Avenir, sans-serif;
        color: $lightGrey;

    }

    .description {
        margin-top: 48px;
    }

    .small-description {
        font-size: 12px;
    }

    .cta {
        font-family: Avenir, sans-serif;
        font-size: 20px;
        color: white;
    }

}
</style>