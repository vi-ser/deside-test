<script>
import AccordionItem from './AccordionItem.vue';
import questionsData from '../assets/faq.json';

export default {
    name: 'AppFaq',
    components: {
        AccordionItem,
    },
    data() {
        return {
            questions: questionsData,
        };
    },
};
</script>

<template>
    <div class="container text-center">
        <span class="title">Frequently Asked Questions</span>
        <ul class="accordion list-unstyled d-flex flex-column gap-3 mt-4" id="faq-accordion">
            <AccordionItem v-for="(currentQuestion, index) in questions" :key="index" :question="currentQuestion"
                :index="index">
            </AccordionItem>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.container {

    margin-bottom: 48px;

    .title {
        @include titleText;
    }
}
</style>