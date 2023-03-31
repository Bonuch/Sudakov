<template>
    <transition name="modal">
        <div
            v-if="getModalStatus"
            class="modal"
            @click.self="closeModal"
        >
            <div
                class="modal-content"
                :class="{'modal-content--full': getModalSize === 'full'}"
            >
                <button
                    type="button"
                    :class="{ apple: isAppleDevice }"
                    class="modal-btn-close wtf_absolute z-1 right-10 top-12 w-5 h-5 text-dark-400 custom-transition tablet:right-5 tablet:top-6 tablet:w-5 tablet:h-5"
                    @click="closeModal"
                >
                    <svg
                        class="w-full h-full fill-current"
                        width="40" height="40" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            class="fill-current"
                            fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.2071 2.20711C11.5976 1.81658 11.5976 1.18342 11.2071 0.792893C10.8166 0.402369 10.1834 0.402369 9.79289 0.792893L6 4.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L4.58579 6L0.792893 9.79289C0.402369 10.1834 0.402369 10.8166 0.792893 11.2071C1.18342 11.5976 1.81658 11.5976 2.20711 11.2071L6 7.41421L9.79289 11.2071C10.1834 11.5976 10.8166 11.5976 11.2071 11.2071C11.5976 10.8166 11.5976 10.1834 11.2071 9.79289L7.41421 6L11.2071 2.20711Z"
                            fill="#DA3E34"
                        />
                    </svg>

                </button>

                <div class="modal-container">
                    <component v-if="getModalName" :is="getModalName" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalInstruction from './ModalInstruction';

export default {
    name: "Modal",
    components: {
        ModalInstruction,
    },
    computed: {
        ...mapGetters({
            getModalName: "modals/getModalName",
            getModalSize: "modals/getModalSize",
            getModalStatus: "modals/getModalStatus",
        }),
    },
    methods: {
        ...mapActions({
            closeModal: "modals/closeModal",
        }),
        isAppleDevice() {
            return typeof(navigator) !== 'undefined' ? (/iPhone|iPad|iPod/i.test(navigator.userAgent)) : false;
        }
    },
    created() {
        let onModalPressEsc = new KeyboardEvent("keydown", { "key": 27 });

        const closeModalOnEsc = (e) => {
            if (this.getModalStatus) {
                if (e.key === "Escape" || e.key === "Esc") {
                    this.closeModal(null);
                }
            }
        };

        document.addEventListener("keydown", closeModalOnEsc, false);
        document.dispatchEvent(onModalPressEsc);

        this.$once("hook:destroyed", () => {
            document.removeEventListener("keydown", closeModalOnEsc);
        });
    },
};
</script>

<style lang="scss" scoped>
.modal-enter-active {
    animation: fade-in 0.45s var(--custom-transition) both;
}
.modal-content {
    height: 100vh !important;
    max-height: 100vh !important;
}
.modal-container {
    padding: 16px 32px;
}
.modal-leave-active {
    animation: fade-in 0.3s ease forwards reverse;
}

.modal-btn-close {
    position: fixed;
    top: 20px;
}
</style>
