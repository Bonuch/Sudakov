<template>
    <div class='base-drop-file mx-4 my-8'>
        <input class='hidden base-drop-file-input' type='file' multiple :id='id' v-bind='$attrs' v-on='listeners' />

        <label
            :for='id'
            class='flex items-center label'
        >
            <span class='flex items-center justify-center pr-2 rounded-full custom-transition plus'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C11.4477 19 11 18.5523 11 18V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19Z" fill="#232323"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13C5.44772 13 5 12.5523 5 12V12C5 11.4477 5.44772 11 6 11L18 11C18.5523 11 19 11.4477 19 12V12C19 12.5523 18.5523 13 18 13L6 13Z" fill="#232323"/>
                </svg>
            </span>


            <span class='text-22 custom-transition'>Добавить фото</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'BaseDropFile',
    inheritAttrs: false,
    props: {
        id: {
            type: [Number, String],
        },
    },
    data() {
        return {
            files: null,
        };
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                ...{ change: (event) => this.handleFileUpload(event) },
            };
        },
    },
    methods: {
        handleFileUpload(e) {
            const target = e.target;
            const files = target.files;

            if (files) {
                this.files = [...files];
                this.$emit('on-file-change', this.files);
            }
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
