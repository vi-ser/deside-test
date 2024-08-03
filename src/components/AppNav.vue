<script>
export default {
    name: 'AppNav',

}
</script>

<template>
    <nav class="container-fluid px-5 py-2 bg-transparent">
        <div class="d-flex justify-content-end">
            <button type="button" class="login-btn btn btn-dark rounded-1 border border-white text-uppercase">log
                in</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin-bottom: 90px;
}

.login-btn {
    background-color: rgba(0, 0, 0, 0.6) !important;
    font-size: 18px;
    letter-spacing: 1px;
    font-family: Avenir, sans-serif;
    font-weight: 300;

    &:hover {
        background-color: white !important;
        color: black;
    }
}
</style>