<template>
    <section class='card'>
        <form method='post'>
            <h2 class='title'>Любовь к себе</h2>
            <p class='card-subtitle'>набираем задание текстом в конце просим сфотать и отправить</p>

            <BaseDropFile
                id='modal-file'
                class='my-4'
                v-on:on-file-change='onFileChange'
            />

            <BaseDropFiles
                v-if='files'
                :files='files'
                v-on:on-remove-file-from-files='onRemoveFileFromFiles'
            />

            <button type='submit' class='btn card-action link-inline mb-2'>
                Отправить на проверку
            </button>

            <p class='text-gray-300'>
                после проверки откроется первая техника<br>
                благодарности
            </p>
        </form>
    </section>
</template>

<script>
import BaseDropFile from '@/components/base/BaseDropFile';
import BaseDropFiles from '@/components/base/BaseDropFiles';

export default {
    name: 'Love',
    components: { BaseDropFiles, BaseDropFile },
    data() {
        return {
            loading: false,
            files: null,
        };
    },
    methods: {
        async onSubmit() {
            this.loading = true;

            try {
                const formData = {
                    files: this.files,
                };

                const res = await this.$axios.post('/reg-route', { formData });
                this.loading = false;
            } catch (e) {
                this.loading = false;
            }
        },
        onFileChange(files) {
            if (this.files && this.files.length > 0) {
                this.files = [...this.files, ...files];
            } else {
                this.files = files;
            }
        },
        onRemoveFileFromFiles(idx) {
            this.files.splice(idx, 1);
        },
    },
};
</script>

<style lang="scss" scoped>
    .card{
        padding: 16px 16px 24px 16px;

        .btn{
            margin: 16px 16px 8px 16px;
        }

        .label {
            margin-bottom: 0;
        }
    }
</style>
