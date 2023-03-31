<template>
    <div class="modal-registration">
        <h3 class="page-inner-h1 leading-1-1 mb-8">Вход</h3>

        <template v-if="codeWaiting">
            <form
                class="modal-code"
                :class="{ 'relative overflow-hidden': loading }"
                @submit.prevent="onLoginSubmit"
            >
                <template v-if="loading">
                    <div class="absolute z-1 left-0 top-0 w-full h-full flex items-center justify-center">
                        <Preloader />
                    </div>
                </template>

                <div :class="{ 'disabled': loading }">
                    <div class="modal-item">
                        <label for="modal-code" class="label">Код из смс: <sup class="">*</sup></label>
                        <input
                            type="text"
                            name="name"
                            id="modal-code"
                            class="input"
                            required
                            :disabled="isLoading"
                            autocomplete="off"
                            placeholder="Введите код из смс"
                            v-model="code"
                        >
                    </div>

                    <ErrorField
                        v-if="errors && errors.message" :text="errors.message"
                        class="modal-item"
                    />

                    <!-- TODO DELETE -->
                    <p v-if="tempCode">{{ tempCode }}</p>

                    <div class="modal-submit-wrap flex items-center justify-between xs:block">
                        <button
                            type="submit"
                            class="button button-bordered button-transparent--blue-300 py-5 modal-submit-150 xs:w-full xs:mb-2"
                            :disabled="isLoading"
                        >
                            Вход
                        </button>

                        <div class="xs:w-full flex flex-col">
                            <transition name="timer">
                                <div v-if="!canRequestSmsCode" class="text-sm">
                                    Повторная отправка доступна через:
                                    <span class="w-10 inline-block">{{ formattedTimer }}</span>
                                </div>
                            </transition>

                            <transition name="timer">
                                <button
                                    v-if="canRequestSmsCode"
                                    type="button"
                                    class="link-inline font-medium text-red-400"
                                    @click="onRepeatClick"
                                    :disabled="isLoading"
                                >
                                    Отправить повторно
                                </button>
                            </transition>
                        </div>
                    </div>
                </div>
            </form>
        </template>

        <template v-else>
            <form class="form" @submit.prevent="onGetCodeSubmit">
                <div class="modal-item">
                    <label for="modal-phone" class="label">Номер телефона: <sup class="">*</sup></label>
                    <input
                        type="text"
                        name="name"
                        id="modal-phone"
                        class="input"
                        required
                        autocomplete="off"
                        placeholder="+7 (###) ###-##-##"
                        v-mask="'+7 (###) ###-##-##'"
                        v-model="phone"
                    >
                </div>

                <ErrorField
                    v-if="errors && errors.phone" :text="errors.phone"
                    class="modal-item"
                />

                <div class="mt-6">
                    <button
                        type="submit"
                        class="modal-submit modal-submit-150 button button-bordered button-transparent--blue-300 py-5"
                    >
                        Получить код
                    </button>
                </div>
            </form>
        </template>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import { parsePhoneMixin } from "@/mixins/content-helpers";
    import BaseCheckbox from "@/components/base/BaseCheckbox";
    import ErrorField from "@/components/base/ErrorField";
    import Preloader from "@/components/base/Preloader";

    const startTime = 60;
    const endTime = 0;

    export default {
        name: "ModalRegistration",
        components: { Preloader, ErrorField, BaseCheckbox },
        mixins: [parsePhoneMixin],
        data() {
            return {
                phone: null,
                code: null,
                codeWaiting: false,
                codeWaitingTimer: null,
                errors: {},
                timer: startTime,
                timerID: null,
                loading: false,
                tempCode: null, // todo DELETE
            };
        },
        computed: {
            ...mapGetters({
                getModalCb: "modals/getModalCb",
                getCartItem: "cart/getCartItem",
            }),
            /**
             * Можно отправить смс с кодом повторно.
             * @boolean
             */
            canRequestSmsCode() {
                return this.timer <= endTime;
            },
            /**
             * Строка с временем в формате 00:00.
             * @string
             */
            formattedTimer() {
                return this.timer < 10 ? `00:0${this.timer}` : `00:${this.timer}`;
            },
            /**
             * Для disabled на форме во время загрузки
             */
            isLoading() {
                return this.loading ? "disabled" : null;
            },
        },
        methods: {
            ...mapActions({
                openModal: "modals/openModal",
                closeModal: "modals/closeModal",
                updateUser: "users/updateUser",
                updateToken: "users/updateToken",
                addItemToCart: "cart/addItemToCart",
                fetchCartItems: "cart/fetchCartItems",
            }),
            /**
             * Post Запрос на получение кода из по телефону.
             */
            async onGetCodeSubmit() {
                try {
                    this.codeWaiting = true;
                    this.runTimer();
                    const phone = this.chParsePhone(this.phone);
                    const { data } = await this.$axios.post("/login", { phone });
                    this.tempCode = data;// todo DELETE tempCode
                } catch (e) {
                    this.codeWaiting = false;
                    this.errors = {
                        phone: "Что-то пошло не так, попробуйте позже",
                    };
                }
            },
            /**
             * Post Запрос на логин по коду из смс, далее закидываем в стор данные пользователя.
             */
            async onLoginSubmit() {
                this.loading = true;

                try {
                    const { data } = await this.$axios.post("/verification", { code: this.code });
                    await this.updateUser(data.user);
                    await this.updateToken(data.token);

                    if (this.getModalCb && this.getModalCb === "addItemToCart") {
                        await this.addItemToCart(this.getCartItem);
                    } else {
                        await this.fetchCartItems();
                    }

                    this.loading = false;
                    this.closeModal();
                } catch (e) {
                    this.loading = false;
                    const errResponse = e.response;

                    if (errResponse.status === 422) {
                        this.errors.message = errResponse.data.errors.code[0];
                    } else if (errResponse.status === 404) {
                        this.errors.message = errResponse.data;
                    } else if (errResponse.status === 403) {
                        this.errors.message = "Отправьте код повторно"; // Срок кода истек
                    } else {
                        this.errors.message = "Что то пошло не так, попробуйте позже.";
                    }
                }
            },
            /**
             * Повторный запрос на получение кода из смс по телефону.
             */
            async onRepeatClick() {
                this.stopTimer();
                this.timer = startTime;
                await this.onGetCodeSubmit();
            },
            runTimer() {
                this.timerID = setInterval(() => {
                    this.timer--;
                }, 1000);
            },
            stopTimer() {
                clearInterval(this.timerID);
                this.timerID = null;
            },
        },
        watch: {
            timer(val) {
                if (val <= endTime) {
                    this.stopTimer();
                    this.timer = endTime;
                }
            },
        },
        beforeDestroy() {
            this.stopTimer();
        },
    };
</script>

<style scoped>
    .timer-enter-active {
        animation: fade-in-block 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
</style>
