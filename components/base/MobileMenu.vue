<template>
    <div
        class="menu z-100 fixed left-0 top-0 w-full h-full bg-black-400 bg-white overflow-hidden"
        @click.self="closeMobileMenu"
    >
        <div class="flex justify-center mb-8 mt-4 relative z-20">
            <HeaderLogo/>
        </div>
        <div class="menu-mobile-wrap px-4 pt-2.5 ">
            <div class="">
                <HeaderNav/>
            </div>

            <div class="header-mobile-phone">
                <a href="tel:74951804685" class="header-mobile-phone__number">+7 495 180 46 85</a>
                <a href="https://sudakov.store/policy/" class="header-mobile-phone__text">Об обработке персональных данных</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderNav from "@/components/base/HeaderNav";
import HeaderLogo from "@/components/base/HeaderLogo";

export default {
name: "MobileMenu",
    components: { HeaderLogo, HeaderNav},
    methonds: {
        ...mapActions({
            closeMobileMenu: "closeMobileMenu",
        }),
    }
}
</script>

<style scoped lang="scss">
.menu-mobile-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 120px;
}

.header-mobile-phone {
    @apply flex flex-col;
    & a {
        font-family: "ALS Sector Regular", "sans-serif";
        display: inline-block;
        color: #767676;
        letter-spacing: 1.2px;
        text-align: left;
        text-transform: uppercase;
    }
    &__number {
        font-size: 20px;
        line-height: 33px;

    }
    &__text {
        font-size: 10px;
    }
}
</style>
