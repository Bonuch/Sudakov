<template>
    <footer class="footer mt-auto">

        <div class="footer-block px-4">
            <h3 class='footer-subtitle'>Общение и поддержка</h3>
            <button class="btn link-inline">
                Мой чат
            </button>
            <button class="btn link-inline">
                Поддержка
            </button>
        </div>

        <div class="footer-block px-4">
            <h3 class='footer-subtitle'>Инвентарь</h3>
            <button class="btn link-inline">
                Библиотека практик
            </button>
            <button class="btn link-inline">
                Словарь
            </button>
        </div>

    </footer>
</template>

<script>
import { parsePhoneMixin } from "@/mixins/content-helpers";

export default {
    name: "FooterComponent",
    components: {},
    mixins: [parsePhoneMixin],
    computed: {
        getYear() {
            return new Date().getFullYear();
        },
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
    .footer {
        padding: 16px;
        background-color: #F2EDE3;
        @apply text-18;
        @apply text-dark-300;

        .btn{
            display: block;
            margin: 0 0 16px 0;
        }

        &-inventory {
            a {
                @apply text-gray-400;
            }
        }

        &-subtitle{
            padding: 16px 0;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            @media screen and (min-width: 375px) {
                font-size: 26px;
                line-height: 34px;
            }
            @media screen and (min-width: 428px) {
                font-size: 28px;
                line-height: 36px;
            }
        }
    }
</style>
