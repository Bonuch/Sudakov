<template>
    <form method="post" class="modal-call" @submit.prevent="onSubmit">
        <div v-if="loading" class="absolute z-10 left-0 top-0 w-full h-full bg-white bg-opacity-50 flex">
            <Preloader class="m-auto"/>
        </div>

        <h3 class="page-inner-h1 leading-1-1 mb-8">Заказать обратный звонок</h3>

        <div class="modal-item">
            <label for="modal-name" class="label">Ваше имя: <sup>*</sup></label>
            <input
                type="text"
                name="name"
                id="modal-name"
                class="input"
                required
                autocomplete="off"
                placeholder="Введите имя"
                v-model="name"
            >
        </div>

        <div class="modal-item">
            <label for="modal-phone" class="label">Ваш телефон: <sup>*</sup></label>
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

        <ErrorField v-if="errors" :text="errors[0]" class="modal-item" />

        <div class="modal-item">
            <BaseCheckbox
                id="modal-privacy"
                name="privacy"
                label="Я согласен с <a href='/privacy' target='_blank'>условиями обработки</a> персональных данных"
                :labelSelectors="['pl-8 text-lg font-medium', {'text-red-400': !privacy}]"
                :markSelectors="['w-6 h-6 text-gray-300 border border-gray-300', {'border-red-400': !privacy}]"
                required="true"
                :custom-val="privacy"
                v-model="privacy"
            />
        </div>

        <div class="modal-submit-wrap">
            <button type="submit" class="button modal-submit">Отправить</button>
        </div>
    </form>
</template>

<script>
    import Preloader from "@/components/base/Preloader";
    import BaseCheckbox from "@/components/base/BaseCheckbox";
    import { parsePhoneMixin } from "../../mixins/content-helpers";
    import ErrorField from "../base/ErrorField";

    export default {
        name: "ModalCall",
        components: { ErrorField, BaseCheckbox, Preloader },
        mixins: [parsePhoneMixin],
        data() {
            return {
                loading: false,
                name: null,
                phone: null,
                privacy: true,
                errors: null,
            };
        },
        methods: {
            async onSubmit() {
                try {
                    this.errors = null;
                    this.loading = true;
                    const formData = {
                        name: this.name,
                        phone: this.chParsePhone(this.phone),
                    };

                    const { data } = await this.$axios.post("/call-route", { formData });
                    this.resetFields();
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                    this.errors = ["Что-то пошло не так, попробуйте еще раз"];
                }
            },
            resetFields() {
                this.name = null;
                this.phone = null;
            },
        },
    };
</script>

<style scoped></style>
