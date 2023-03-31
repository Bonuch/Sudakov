<template>
    <div class="page-inner page-error pt-6 pb-24 md:pb-16">
        <div class="wrapper">
            <div class="page-error__content flex flex-col items-center text-center">
                <h1 class="m-0 mb-2 text-50 leading-1-1 font-medium xl:text-44 md:text-30 mob:text-26">
                    <template v-if="isDevMode">
                        <span v-if="error.statusCode === 404">Страница не&nbsp;найдена!</span>
                        <span v-else>{{ error.statusCode }}</span>
                    </template>

                    <template v-else>Страница не&nbsp;найдена!</template>
                </h1>

                <p class="m-0 mb-6 text-22 sm:text-xl mob:text-lg">Страница, на которую вы пытаетесь попасть, не&nbsp;существует.</p>

                <div class="flex items-center justify-center">
                    <nuxt-link class="link-inline text-lg mob:text-base" to="/">Главная страница</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "error.vue",
        props: ["error"],
        layout: "default",
        data() {
            return {
                breadcrumbs: [
                    {
                        id: 1,
                        title: "Главная",
                        link: "/",
                    },
                    {
                        id: 2,
                        title: "404",
                        link: "",
                    },
                ],
            };
        },
        computed: {
            isDevMode() {
                return process.env.NODE_ENV !== "dev";
            },
        },
    };
</script>

<style lang="scss" scoped>
    .page-error__content {
        max-width: 662px;
        margin: 0 auto;
    }
</style>
