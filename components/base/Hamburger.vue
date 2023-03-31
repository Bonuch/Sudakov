<template>
    <button
        type="button"
        class="hamburger"
        :class="{'hamburger--active': getMobileMenuActivity}"
        @click="toggleMobileMenu"
    >
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
    </button>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Hamburger",
        computed: {
            ...mapGetters(["getMobileMenuActivity"]),
        },
        methods: {
            ...mapActions(["toggleMobileMenu"]),
        },
    };
</script>

<style lang="scss" scoped>
    .hamburger {
        padding: 5px;
        border-radius: 0;
        border: 0;

        &:hover,
        &:focus {
            background-color: transparent;

            .hamburger__line {
                @apply bg-dark-400;
            }
        }

        &--active {
            .hamburger__line {
                background-color: #dea36e;

                &:nth-child(1) {
                    transform: translateY(4px) rotate(45deg);
                }

                &:nth-child(2) {
                    transform: translateY(-4px) rotate(-45deg);
                }
            }
        }

        &__line {
            width: 26px;
            height: 2px;
            display: block;
            margin: 6px auto;
            background-color: #dea36e;
            transition: all 0.3s ease-in-out;

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
