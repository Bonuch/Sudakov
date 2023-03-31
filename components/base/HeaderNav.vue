<template>
    <ul class="header-menu-list">
        <li
            v-for="(item, indexIdx) in headerItems"
            :key="indexIdx"
            class="header-menu-item"
        >
            <a :href="item.link" target="_blank">
                {{item.title}}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "HeaderNav",
    data(){
        return {
            headerItems: [
                {
                    title: 'о нас',
                    link: '/art_fashion_man/cufflinks/about/',
                },
                {
                    title: 'интервью',
                    link: 'https://sudakov.store/interview/',
                },
                {
                    title: 'space',
                    link: 'https://sudakov.store/space/',
                },
                {
                    title: 'запонки',
                    link: 'https://sudakov.store/art_fashion_man/cufflinks/custom/',
                },
                {
                    title: 'доставка и оплата',
                    link: 'https://sudakov.store/art_fashion_man/cufflinks/order-and-shipping/',
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
