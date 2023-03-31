<template>
    <div class="app-layout flex flex-col min-h-screen">
        <div class="global-wrapper">
            <TheHeader/>
            <main>
                <Nuxt/>
            </main>
            <TheFooter/>
        </div>

        <ClientOnly>
            <transition name="mobile-menu">
                <MobileMenu v-if="getMobileMenuActivity" :class="{'menu--active': getMobileMenuActivity}"/>
            </transition>
        </ClientOnly>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/base/TheHeader";
import MobileMenu from "@/components/base/MobileMenu";
import TheFooter from "@/components/base/TheFooter";

export default {
    name: 'with-out',
    components: {TheFooter, TheHeader, MobileMenu},
    computed: {
        ...mapGetters(["getMobileMenuActivity"]),
    }
};
</script>

<style></style>
