<script>

export default {
    name: 'AppWatch',
}
</script>

<template>
    <div class="container-fluid d-flex flex-column flex-lg-row gap-4 p-5 align-items-center">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
            <img src="/img/watch-the-way.png" width="100%" alt="">
        </div>
        <div class="col-12 col-lg-6">
            <span class="title">
                Watch the way you want
            </span>
            <ul class="d-flex flex-column gap-4 mt-4">
                <li>
                    Host virtual movie nights with GroupWatch. Pause, rewind, and react with up to six friends. To
                    invite or be invited to join GroupWatch, subscription is required.
                </li>
                <li>
                    Download any movie or series and watch it on the go.
                </li>
                <li>
                    Keep your family safe with easy parental controls.
                </li>
                <li>
                    An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.
                </li>
                <li>
                    Stream on up to four devices at the same time.
                </li>
            </ul>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;


.container-fluid {
    .title {
        @include titleText;
    }

    li {
        color: $lightGrey;
        font-family: Avenir, sans-serif;
        font-size: 20px;

    }
}
</style>