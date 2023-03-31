<template>
    <div class="base-checkbox relative items-center" :class="groupSelectors">
        <input
            type="checkbox"
            :id="id"
            class="base-checkbox__input"
            :value="customVal"
            :checked="customVal"
            v-on="listeners"
            v-bind="$attrs"
        />

        <div
            class="base-checkbox__mark custom-transition absolute top-1/2 left-0 w-5 h-5 flex items-center justify-center bg-white leading-none rounded-sm transform -translate-y-1/2"
            :class="markSelectors"
        >
            <span>[</span>
            <svg
                width="8"
                height="8"
                class="fill-current mt-1"
                xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29.107 29.107"
            >
                <path
                    d="M14.554,0C6.561,0,0,6.562,0,14.552c0,7.996,6.561,14.555,14.554,14.555c7.996,0,14.553-6.559,14.553-14.555 C29.106,6.562,22.55,0,14.554,0z"/>
            </svg>
            <span>]</span>
        </div>

        <label
            v-if="label"
            :for="id"
            class="base-checkbox__label custom-transition relative block z-1 pl-6 text-base font-medium cursor-pointer"
            :class="labelSelectors"
            v-html="label"
        ></label>
    </div>
</template>

<script>
    export default {
        name: 'BaseCheckbox',
        inheritAttrs: false,
        props: {
            id: {
                type: String,
                required: true,
            },
            label: String,
            groupSelectors: [String, Array],
            labelSelectors: [String, Array],
            markSelectors: [String, Array],
            customVal: {
                type: Boolean,
            },
        },
        computed: {
            listeners() {
                return Object.assign({},
                    this.$listeners,
                    { input: (event) => this.updateValue(event) },
                );
            },
        },
        methods: {
            updateValue() {
                this.$emit('input', !this.customVal);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .base-checkbox {
        &:hover,
        &:active,
        &:focus {
            .base-checkbox__label {
                @apply text-orange-400;
            }

            .base-checkbox__mark {
                //@apply border-success;
            }
        }

        &__input {
            display: none;

            &:checked {
                & ~ .base-checkbox__mark {
                    svg {
                        opacity: 1;
                    }
                }

                & ~ .base-checkbox__label {
                    @apply text-orange-400;
                }
            }
        }

        &__mark {
            &--top {
                @apply top-0 translate-y-0;
            }

            svg {
                opacity: 0;
            }
        }

        &::v-deep {
            a {
                @apply text-red-400;

                &:hover,
                &:focus,
                &:active {
                    @apply text-blue-400;
                }
            }
        }
    }
</style>
