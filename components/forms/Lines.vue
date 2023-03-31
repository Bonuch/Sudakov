<template>
    <section class="section">
        <div class="padding-62 border-left border-right border-bottom">
            <h2 v-if="title" class="title" v-html="title"></h2>
            <div v-if="desc" v-html="desc"></div>
            <div v-if="advanced" class="h-40 p-4 bg-brown-400 text-black-400 overflow-x-hidden overflow-y-auto mb-4" v-html="advanced"></div>
            <div>
                <button type="button" class="btn card-action link-inline"
                        style="padding-left: 0; padding-right: 0;">
                    слушать
                </button>
            </div>
        </div>

        <form method="post" class="video-form">
            <BaseCheckbox
                v-for="(checkbox, checkboxIdx) in checkboxes"
                :key="checkboxIdx"
                :id="`id-${_uid}-${checkboxIdx}`"
                :name="`checkbox-${_uid}-${checkboxIdx}`"
                :label="checkbox.label"
                class="mb-2"
                :custom-val="checkbox.value"
                v-model="checkbox.value"
            />

            <button type="submit" class="btn card-action link-inline">{{ submitText }}</button>
        </form>
    </section>
</template>

<script>
    import BaseCheckbox from '../base/BaseCheckbox';

    export default {
        name: 'Lines',
        components: { BaseCheckbox },
        props: {
            title: { type: String },
            desc: { type: String },
            advanced: { type: String },
            checkboxes: { type: Array },
            submitText: {
                type: String,
                default: "поехали дальше"
            },
        },
        data() {
            return {
                checkbox: false,
                checkbox2: false,
            };
        },
    };
</script>

<style></style>
