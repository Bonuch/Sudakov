<template>
    <div class="front-main">
        <section class="section">
            <section class="section p-4">
                <h2 class="title">Введите ваши данные</h2>
                <BodygraphRegisterForm @authenticated="onAuth"/>
            </section>
        </section>
    </div>
</template>

<script>
import BodygraphRegisterForm from "@/components/forms/BodygraphRegisterForm";

export default {
    name: "index.vue",
    components: { BodygraphRegisterForm },
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
