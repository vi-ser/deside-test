<script>
export default {
    name: 'AppFooter',

}
</script>

<template>
    <div class="container d-flex flex-column align-items-center">
        <div class="logo-container mb-4">
            <img src="/img/logo-disney.svg" class="w-100" alt="logo disney+">
        </div>

        <ul class="links list-unstyled d-flex justify-content-center gap-4 text-center flex-wrap">
            <li>
                <a class="link" href=""><i class="bi bi-globe me-1"></i>English<i
                        class="bi bi-chevron-compact-down ms-1"></i></a>
            </li>
            <li>
                <a class="link" href="">Subscriber Agreement</a>
            </li>
            <li>
                <a class="link" href="">Privacy Policy</a>
            </li>
            <li>
                <a class="link" href="">Your California Privacy Rights</a>
            </li>
            <li>
                <a class="link" href="">Do Not Sell My Personal Information</a>
            </li>
            <li>
                <a class="link" href="">Children's Online Privacy Policy</a>
            </li>
            <li>
                <a class="link" href="">Closed Captioning</a>
            </li>
            <li>
                <a class="link" href="">Interest-Based Ads</a>
            </li>
            <li>
                <a class="link" href="">Supported Devices</a>
            </li>
            <li>
                <a class="link" href="">Help</a>
            </li>
            <li>
                <a class="link" href="">Gift Disney+</a>
            </li>
            <li>
                <a class="link" href="">About Us</a>
            </li>
            <li>
                <a class="link" href="">Disney+ Partner Program</a>
            </li>
            <li>
                <a class="link" href="">Disney Bundle</a>
            </li>
        </ul>

        <p class="footer-text">Content and platform availability may vary by region.</p>
        <p class="footer-text">© Disney. All Rights Reserved.</p>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.container {
    padding: 48px;

    .logo-container {
        width: 80px;
    }

    .link {
        text-decoration: none;
        color: $lightGrey;
        font-family: Avenir, sans-serif;
        font-size: 12px;

        &:hover {
            color: $lightColor;
        }
    }

    .footer-text {
        text-decoration: none;
        color: $lightGrey;
        font-family: Avenir, sans-serif;
        font-size: 12px;
        margin-top: 16px;
    }
}
</style>