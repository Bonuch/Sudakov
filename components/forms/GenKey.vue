<template>
    <section class="section">
        <div class="padding-62 border-left border-right border-bottom">
            <h2 class="title text-xl">Ваш генный ключ темы дело жизни</h2>
            <p>
                + доп ключи<br>
                52<br>
                29<br>
                8
            </p>
            <p>Описание</p>
        </div>

        <form method="post" class="video-form">
            <BaseCheckbox
                id="gen_key_accept"
                name="gen_key_accept"
                label=" - Я изучил свой генный ключ темы дело жизни"
                class="mb-2"
                labelSelectors=""
                markSelectors=""
                :custom-val="genKey"
                v-model="genKey"
            />

            <button type="submit" class="btn card-action link-inline">поехали дальше</button>
        </form>
    </section>
</template>

<script>
    import BaseCheckbox from '@/components/base/BaseCheckbox';

    export default {
        name: 'GenKey',
        components: { BaseCheckbox },
        data() {
            return {
                genKey: false,
            };
        },
    };
</script>

<style></style>
