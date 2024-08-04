<script>

export default {
    name: 'AppDevices',
};
</script>

<template>
    <div class="container text-center">
        <span class="title">Available on your favorite devices</span>
        <div class="row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex flex-wrap flex-column flex-md-row mt-5">
            <div class="tv d-flex flex-column">
                <img src="/img/device-tv.svg" alt="">
                <span class="title-device">TV</span>
                <ul class="list-unstyled">
                    <li>
                        Amazon Fire TV
                    </li>
                    <li>
                        Android TV devices
                    </li>
                    <li>
                        Apple TV
                    </li>
                    <li>
                        Chromecast
                    </li>
                    <li>
                        LG TV
                    </li>
                    <li>
                        Roku
                    </li>
                    <li>
                        Samsung
                    </li>
                    <li>
                        Xfinity X1 & Flex
                    </li>
                    <li>
                        Hisense
                    </li>
                    <li>
                        Panasonic
                    </li>
                </ul>
            </div>
            <div class="pc">
                <img src="/img/device-pc.svg" alt="">
                <span class="title-device">Computer</span>
                <ul class="list-unstyled">
                    <li>
                        Chrome OS
                    </li>
                    <li>
                        MacOS
                    </li>
                    <li>
                        Windows PC
                    </li>
                </ul>
            </div>
            <div class="mobile">
                <img src="/img/device-mobile.svg" alt="">
                <span class="title-device">Mobile & Tablet</span>
                <ul class="list-unstyled">
                    <li>
                        Amazon Fire Tablets
                    </li>
                    <li>
                        Android Phones & Tablets
                    </li>
                    <li>
                        iPhone & iPad
                    </li>
                </ul>
            </div>
            <div class="console">
                <img src="/img/device-console.svg" alt="">
                <span class="title-device">Game Consoles</span>
                <ul class="list-unstyled">
                    <li>
                        PS4
                    </li>
                    <li>
                        PS5
                    </li>
                    <li>
                        Xbox One
                    </li>
                    <li>
                        Xbox Series S
                    </li>
                    <li>
                        Xbox Series X
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.container {

    padding: 80px;
    margin-bottom: 48px;

    .title {
        @include titleText;
    }

    .title-device {
        @include titleText;
        font-size: 27px;

    }

    ul {
        margin-top: 16px;

        li {
            color: $lightGrey;
            font-family: Avenir, sans-serif;
            font-size: 18px;
        }
    }
}
</style>