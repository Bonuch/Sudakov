<template>
    <div class="page-inner pt-6">
        <div class="wrapper">
            <h1 v-if="title" class="page-inner-h1 page-inner-h1--offset mb-10">
                {{ title }}
            </h1>
        </div>

        <div class="page-inner__content">
            <div v-if="content && content.data" class="wrapper" v-html="content.data"></div>
        </div>

    </div>
</template>

<script>
    import { ogHelper } from '~/mixins/content-helpers';

    export default {
        mixins: [ogHelper],
        head() {
            return {
                title: this.getPageTitle('title'),
                meta: [
                    { hid: 'keywords', name: 'keywords', content: this.getPageKeywords() },
                    { hid: 'description', property: 'description', content: this.getPageDescription() },
                    { hid: 'og:title', property: 'og:title', content: this.getPageTitle() },
                    { hid: 'og:type', property: 'og:type', content: 'article' },
                    { hid: 'og:description', property: 'og:description', content: this.getPageDescription() },
                    { hid: 'og:url', property: 'og:url', content: this.getPageUrl },
                    { hid: 'og:image', property: 'og:image', content: this.getOgImage() },
                ],
            };
        },
        data() {
            return {
                content: {},
                breadcrumbs: [],
            };
        },
        async asyncData({ params, $axios, error }) {
            const decodedParams = decodeURI(params);
            const splittedParams = decodedParams.split('-');
            let title = '';
            let contentID = 0;
            let content = {};
            let breadcrumbs = [];

            if (splittedParams && splittedParams.length > 0) {
                contentID = splittedParams[splittedParams.length - 1];
            }

            try {
                const { data } = await axios.get('/get-content');

                content = {
                    title: 'Политика конфиденциальности',
                    data: data.data,
                };
                title = content.title;
                breadcrumbs = [
                    {
                        id: 1,
                        title: 'Главная',
                        link: '/',
                    },
                    {
                        id: 3,
                        title,
                        link: '',
                    },
                ];
            } catch (e) {
                error({ statusCode: 404, message: 'cant fetch content' });
            }

            return {
                breadcrumbs,
                title,
                content,
            };
        },
    };
</script>

<style></style>
