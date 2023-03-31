<template>
    <header class="header-new desktop mobile">
        <div class="sm:hidden">
            <div class="header-wrap">
                <div class="header-logo">
                   <HeaderLogo/>
                </div>
                <div class="header-menu">
                    <HeaderNav/>
                </div>
                <div class="header-phone">
                    <a href="tel:74951804685" class="">+7 495 180 46 85</a>
                </div>
            </div>
        </div>
        <div class="header-menu-mobile hidden px-8 sm:flex">
            <a href="tel:74951804685" class="header-menu-mobile-phone">+7 495 180 46 85</a>
            <hamburger/>
        </div>
    </header>
</template>

<script>
import Hamburger from "@/components/base/Hamburger";
import HeaderNav from "@/components/base/HeaderNav";
import HeaderLogo from "@/components/base/HeaderLogo";
export default {
    name: "theHeader",
    components: { HeaderLogo, HeaderNav, Hamburger},
    data(){
        return {
            headerItems: [
            {
                title: 'о нас',
                link: '',
            },
                {
                title: 'интервью',
                link: '',
            },
                {
                title: 'space',
                link: '',
            },
                {
                title: 'персонализация запонок',
                link: '',
            },
                {
                title: 'отзывы',
                link: '',
            },
                {
                title: 'коллекции',
                link: '',
            },
                {
                title: 'фильтр',
                link: '',
            },
                {
                title: 'доставка и оплата',
                link: '',
            },
                {
                title: 'блог',
                link: '',
            },

        ]
        }
    }
}
</script>

<style scoped lang="scss">
.header-new {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 32px;
    background-color: #fff;
    z-index: 1000;
    transform: translate3d(0,0,0);
}

.header-menu-mobile{
    justify-content: space-between;
}

.header-menu-mobile-phone{
    position: relative;
    font-size: 0;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 210px;
    background-color: rgba(255,255,255,.8);
    z-index: 10000000;
    transition: all .3s ease;
    &:after {
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 24px;
        height: 23px;
        background: url('~assets/images/sprite-8e46e9b8.svg')62.295081967213115% 92.57294429708223% no-repeat;
    }
}

@screen sm {
    .header-new {
        background-color: transparent;
    }
    .mobile {
        @apply pt-4;
    }
}
</style>

