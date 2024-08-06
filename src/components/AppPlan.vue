<script>
import PlanItem from './PlanItem.vue';
import plansData from '../assets/plans.json';

export default {
    name: 'AppPlan',

    components: {
        PlanItem,
    },

    data() {
        return {
            selectedPlan: 'Disney Bundle',
            plans: plansData,
        }
    },

    computed: {
        filteredPlans() {
            return this.plans.filter(plan => {
                if (this.selectedPlan === 'Disney Bundle') {
                    return plan.category === 'Disney Bundle';
                } else if (this.selectedPlan === 'Disney+') {
                    return plan.category === 'Disney+';
                }
                return false;
            });
        }
    },

    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    }
}
</script>

<template>
    <div class="container text-center">
        <div class="title">Choose Your Plan</div>
        <p>Switch or cancel* anytime.</p>
        <div class="container d-flex justify-content-center">
            <div class="switch d-flex gap-2 p-2 position-relative">
                <div class="switch-background"
                    :class="{ 'bundle': selectedPlan === 'Disney Bundle', 'plus': selectedPlan === 'Disney+' }"></div>
                <button :class="{ selected: selectedPlan === 'Disney Bundle' }"
                    @click="selectPlan('Disney Bundle')">Disney Bundle</button>
                <button :class="{ selected: selectedPlan === 'Disney+' }"
                    @click="selectPlan('Disney+')">Disney+</button>
            </div>
        </div>
        <ul class="list-unstyled d-flex flex-wrap justify-content-center gap-4 mt-4 mb-4">
            <PlanItem v-for="(currentPlan, index) in filteredPlans" :key="index" :plan="currentPlan">
            </PlanItem>
        </ul>
        <p class="terms">*Effective at the end of the billing period. <br>
            Terms apply.</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.container {
    margin-bottom: 40px;

    .title {
        @include titleText;
    }

    p {
        color: $lightGrey;
        font-family: Avenir, sans-serif;
        font-size: 20px;
    }

    .switch {
        background-color: $mediumGrey;
        color: $lightColor;
        font-family: Avenir, sans-serif;
        font-size: 16px;
        border-radius: 24px;
        border: 4px solid $mediumGrey;
        padding: 5px !important;
        position: relative;
        overflow: hidden;

        .switch-background {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 58%;
            background-color: $primaryColor;
            border-radius: 21px;
            transition: transform 0.3s ease;

            &.plus {
                transform: translateX(90%);
            }
        }

        button {
            background-color: transparent;
            color: $lightColor;
            border: none;
            padding: 4px 20px 4px 12px;
            border-radius: 19px;
            position: relative;
            z-index: 10;
            user-select: none;

            &.selected {
                color: $lightColor;
            }
        }
    }

    .terms {
        color: $lightGrey;
        font-family: Avenir, sans-serif;
        font-size: 12px;
        margin-bottom: 180px;
    }
}
</style>