<template>
    <div class='instruction' :ref="idx" :data-number-instruction="idx">
        <div class='instruction-heading flex items-center content-between'
             v-if='item.theme.title'
             @click='onToggleDropdown'>

            <button
                v-if='item.theme.title'
                type='button'
                class='instruction-btn text-right'
            >
                <span class='link-inline text-gray-300'>{{ item.theme.title }}</span>

            </button>
            <div>
                <img src="~/assets/images/svg/arrow.svg" class="link-inline-arrow mx-1 block">
            </div>
            <div class="flex flex-wrap">
            <span v-for="gate in item.info.qualities"
                  class="pr-1"
                  :class='{
                        "instruction-title2 font-bold": gate.type === "1",
                        "instruction-title2 font-bold": gate.type === "0",
                  }'>
                {{ gate.title }}
            </span>
            </div>
            <span v-if='item.title2' class='instruction-title2 mr-1 font-bold'>{{ item.title2 }}</span>
            <span v-if='item.title3' class='instruction-title3 text-red-700'>{{ item.title3 }}</span>
        </div>

        <transition name='dropdown'>
            <div
                class='instruction-dropdown bg-brown-400'
                v-if='showDropdown'
            >
                <div class="sintez" v-if="sintez">
                    <div class="sintez-edit flex p-4">
                        <h3 class="instruction-subtitle instruction-subtitle-edit flex-grow">Синтез</h3>
                        <div class="text-right flex-grow wrap-btn-sintez">
                            <button class="btn-edit link-inline">редактировать синтез</button>
                        </div>
                    </div>
                    <div class="sintez-text" v-if="!sintez.is_lesson_done">
                        Здесь появится описание вашего синтеза темы «{{ theme.title }}» после того, как
                        Вы пройдете урок и выполните задания
                    </div>
                </div>

                <div v-if='info.desc' v-html='info.desc' class='mb-4 border-text'></div>

                <div v-if='info.qualities' class='mb-4'>
                    <h3 class='instruction-subtitle'>Качества</h3>
                    <div class='qualities items-center'>
                        <button
                            type='button'
                            class='instruction-dropdown-btn btn'
                            v-for='(btn, btnIdx) in info.qualities'
                            :key='btnIdx'
                            @click="onFetchData(`/entities/gate/${btn.id}`)"
                        >
                            <span v-if='btn.icon && btn.title === "затмение"' v-html='btn.icon'
                                  class='instruction-dropdown-icon'></span>
                            <span v-if='btn.icon && btn.title !== "затмение"'
                                  class='instruction-dropdown-icon'>{{ btn.icon }}</span>
                            <span v-if='btn.title' class='instruction-dropdown-btn-text link-inline'>{{
                                    btn.title
                                }}</span>
                        </button>
                    </div>
                </div>
                <div v-if='info.vectors' class='mb-4'>
                    <h3 class='instruction-subtitle'>Линия</h3>
                    <div class='vectors flex items-center'>
                        <button
                            type='button'
                            class='instruction-dropdown-btn btn instruction-dropdown-btn-vector'
                            v-for='(btn, btnIdx) in info.vectors'
                            :key='btnIdx'
                            @click="onFetchData(`/entities/line/${btn.id}`)"
                        >
                            <span v-if='btn.icon' class='instruction-dropdown-icon'>{{ btn.icon }}</span>
                            <span v-if='btn.title' class='instruction-dropdown-btn-text link-inline' v-html="btn.title"></span>
                        </button>
                    </div>
                </div>
                <div class="materials px-4">
                    <h3 class='instruction-subtitle'>Материалы</h3>
                    <button class="btn link-inline text-left pb-4">
                        Описание темы «{{ theme.title }}»
                    </button>
                    <button class="btn link-inline text-left pb-4">
                        Дополнительные качества темы «{{ theme.title }}»
                    </button>
                    <button class="btn link-inline text-left pb-4">
                        Практики темы «{{ theme.title }}»
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Instruction',
    components: {},
    data() {
        return {}
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        showDropdown: {
            type: Boolean,
        },
        idx: [String, Number],
    },
    computed: {
        info() {
            return this.item.info;
        },
        theme() {
            return this.item.theme;
        },
        sintez() {
            return this.item.sintez;
        },
    },
    methods: {
        ...mapActions({
            fetchInstructionContent: 'fetchInstructionContent',
            openModal: "modals/openModal",
        }),
        async onFetchData(url) {
            await this.fetchInstructionContent(url);
            await this.openModal({
                name: 'ModalInstruction',
            });
        },
        onToggleDropdown() {
            if (this.showDropdown) {
                this.$emit('on-toggle-dropdown', null);
            } else {
                this.$emit('on-toggle-dropdown', this.idx);
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.dropdown-enter-active {
    animation: custom-slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.dropdown-leave-active {
    animation: custom-slide-in-top 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

.instruction {
    &-block {
        padding: 0 16px;
    }

    &-subtitle {
        padding: 16px 1rem;
    }

    &-dropdown-icon {
        font-size: 15px;
    }

    &-dropdown {

        width: calc(100% + 32px);
        margin: 0 -16px 0;
        padding: 16px 16px 32px 16px;

        &-btn {
            min-height: 34px;
            display: flex;
            align-items: center;
            text-align: left;
            max-width: 80%;
            padding: 4px 16px 4px;
            border-radius: 20px;
            color: #fff;
            @apply flex items-center text-18 mr-2 last:mr-0;

            &-text {
                line-height: 20px;
            }
        }

        .link-inline {
            border-bottom: none !important;
        }

        &-icon {
            //position: absolute;
            //top: 2px;
        }
    }

    .instruction-dropdown-btn-vector {
        padding: 7px 16px;
        text-transform: lowercase;
    }

    &-heading {
        position: relative;
        z-index: 1;
        //max-width: 350px;
        padding: 8px 16px;
        //margin: 0 auto;
        //background-color: #fff;
        //border: 1px solid #F2EDE3;
        //border-radius: 22px;
        font-size: 12px;
        line-height: 16px;
    }


    &-btn {
        //width: content-box;
        width: 86px;
        @media screen and (max-width: 427px){
            width: 73px;
        }
        @media screen and (max-width: 374px) {
            width: 63px;
        }
    }

    .qualities {
        padding: 0;

        .instruction-dropdown-btn {
            display: inline;
            margin: 0 16px 16px 0;

            &:nth-child(1n) {
                @apply bg-green-500;
            }

            &:nth-child(2n) {
                @apply bg-red-600;
            }

            &:nth-child(3n) {
                background-color: #fff;
                color: #000 !important;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .vectors {
        padding: 0;

        .instruction-dropdown-btn {
            margin-right: 16px;

            &:nth-child(1n) {
                background-color: #000;
            }

            &:nth-child(2n) {
                @apply bg-red-600;
            }

            &:nth-child(3n) {
                background-color: #fff;
                color: #000 !important;
            }
        }
    }

    .link-inline {
        margin: 0;
    }

    .instruction-subtitle-edit {
        padding: 0;
    }

    .sintez {
        margin-bottom: 2rem;

        .sintez-edit {
            align-items: center;
        }

        .sintez-text {
            border: 1px solid #727272;
            border-radius: 5px;
            padding: 15px 15px;
        }
    }

    .border-text {

        @apply px-0;

        &::v-deep {
            p {
                border: 1px solid #232323;
                border-radius: 4px;
                font-size: 14px;
                line-height: 20px;
                margin: 0;
                @apply p-4;
            }
        }

        @media screen and (min-width: 375px) {
            font-size: 16px;
            line-height: 24px;
            @apply px-4;
        }

    }

    .instruction-heading {
        font-size: 12px;
        line-height: 16px;
        @media screen and (min-width: 375px) {
            font-size: 14px;
            line-height: 20px;
        }
        @media screen and (min-width: 428px) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .materials {
        .instruction-subtitle {
            padding: 16px 0;
        }

        .btn {
            font-size: 16px;
            line-height: 26px;
            border: none;
            text-decoration: underline;
            @media screen and (min-width: 375px) {
                font-size: 20px;
                line-height: 30px;
            }
        }

        .btn-edit {
            display: inline-block;
            padding: 0;
            font-size: 12px;
            line-height: 16px;
            border-bottom: 1px solid #000;

            @media screen and (min-width: 375px) {
                font-size: 14px;
                line-height: 20px;
            }
            @media screen and (min-width: 428px) {
                font-size: 16px;
                line-height: 24px;
            }
        }
    }


}
</style>
