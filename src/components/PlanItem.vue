<script>
export default {
    name: 'PlanItem',

    props: {
        plan: {
            type: Object,
        },
    },
};
</script>

<template>
    <li>
        <div class="card plan d-flex flex-column text-start">
            <!-- logos -->
            <div class="logo-container">
                <img v-if="plan.all_logos" src="/img/logo-disney-hulu-espn.svg" alt="">
                <img v-else src="/img/hulu-disney.svg" alt="">
            </div>

            <!-- title -->
            <span class="name">{{ plan.name }}</span>

            <!-- ads -->
            <span v-if="plan.ads" class="ads">With Ads</span>
            <span v-else class="ads">No Ads on Disney+ & Hulu</span>

            <!-- features -->
            <div class="features d-flex flex-column gap-3">
                <ul class="list-unstyled">
                    <li v-for="currentFeature in plan.description" class="feature d-flex gap-2 align-items-baseline">
                        <i class="bi bi-check-lg"></i> {{ currentFeature }}
                    </li>
                </ul>
            </div>

            <!-- price -->
            <div class="price-container">
                <span class="price">${{ plan.price }}</span><span class="month">/month</span>
            </div>

            <button>select</button>

        </div>
    </li>
</template>


<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.card {
    width: 380px;
    background-color: $bgColor;
    color: $lightColor;
    border: 1px solid $lightGrey;
    border-radius: 0;
    padding: 40px;
    height: 100%;

    img {
        height: 40px;
        margin-bottom: 27px;
    }

    .name {
        @include titleText;
        font-size: 27px;
    }

    .ads {
        color: $lightColor;
        font-family: Avenir, sans-serif;
        font-size: 16px;
        margin-bottom: 16px;
    }

    .features {

        height: 100%;
        margin-bottom: 20px;

        .feature {
            color: $lightGrey;
            font-family: Avenir, sans-serif;
            font-size: 16px;
            margin-bottom: 16px;
            margin-left: 0;

            i {
                margin-right: 6px;
                color: white;
                font-size: 1.5em
            }
        }
    }

    .price-container {
        margin-bottom: 16px;

        .price {
            @include titleText;
            font-size: 28px;
        }

        .month {
            color: $lightGrey;
            font-family: Avenir, sans-serif;
            font-size: 16px;
        }
    }

    button {
        @include primaryButton;
    }

}
</style>