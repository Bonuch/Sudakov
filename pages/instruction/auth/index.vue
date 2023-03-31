<template>
    <div class="front-main">
        <section class="section">
            <section class="section p-4">
                <h2 class="title">Введите ваши данные</h2>
                <BodygraphAuthForm @authenticated="onAuth"/>
            </section>
        </section>
    </div>
</template>

<script>
import BodygraphAuthForm from "@/components/forms/BodygraphAuthForm";

export default {
    name: "index.vue",
    components: { BodygraphAuthForm },
    methods: {
        onAuth(evt) {
            if (evt) {
                this.$router.push({ path: '/instruction/profile' });
            }
        }
    }
}
</script>

<style scoped>

</style>
