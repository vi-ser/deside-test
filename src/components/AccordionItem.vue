<script>
export default {
    name: 'AccordionItem',

    props: {
        question: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
};
</script>

<template>
    <li>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse-' + index" aria-expanded="false" :aria-controls="'collapse-' + index">
                    {{ question.question }}
                </button>
            </h2>
            <div :id="'collapse-' + index" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                <div class="accordion-body text-start">
                    {{ question.answer }}
                </div>
            </div>
        </div>
    </li>
</template>


<style lang="scss" scoped>
@use "../styles/variables" as *;

li {
    border-radius: 0 !important;


    .accordion-item {

        border: none !important;
        border-radius: 0 !important;


        button {
            background-color: $darkGrey !important;
            border: none;
            color: $lightColor;
            padding: 24px;
            border-radius: 0 !important;
            font-family: Avenir, sans-serif;
            font-size: 20px;


            &:focus {
                box-shadow: none;
            }
        }

        .accordion-button::after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' class='bi bi-dash-lg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8'/%3E%3C/svg%3E");
        }

        .accordion-button.collapsed::after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' class='bi bi-plus-lg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
        }


        .accordion-body {
            border-radius: 0 !important;
            border: none !important;
        }
    }
}
</style>