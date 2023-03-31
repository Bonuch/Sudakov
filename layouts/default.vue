<template>
    <div class="app-layout flex flex-col min-h-screen">
        <div class="global-wrapper">
            <main :class="{'main-inner': this.$route.path !== '/'}">
                <Nuxt/>
            </main>
        </div>

        <FooterComponent/>

        <ClientOnly>
            <Modal/>
            <CookieNotification/>
        </ClientOnly>
    </div>

</template>

<script>
    import { resizeHelper } from '@/mixins/resize-helper';
    import FooterComponent from '@/components/base/FooterComponent';
    import CookieNotification from '@/components/base/Cookie-notification';
    import Modal from '@/components/modals/Modal';

    export default {
        name: 'default',
        mixins: [resizeHelper],
        components: { Modal, CookieNotification, FooterComponent },
    };
</script>

<style></style>
