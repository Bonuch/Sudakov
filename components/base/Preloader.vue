<template>
    <div class="preloader preloader-layer preloader-layer-1">
        <div class="preloader-layer-2 preloader-layer">
            <div class="preloader-layer preloader-layer-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Preloader",
    };
</script>

<style lang="scss" scoped>
    .preloader {
        &-layer {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 4px solid;
            border-top: 4px solid transparent;
            border-right: 4px solid transparent;
            border-radius: 50%;
        }

        &-layer-1 {
            @apply border-blue-700;
            width: 150px;
            height: 150px;
            animation: rotate 2s infinite;
            border-top-color: transparent;
            border-right-color: transparent;
        }

        &-layer-2 {
            @apply border-blue-500;
            animation: rotate 2s infinite .4s;
            width: 120px;
            height: 120px;
            transform: rotate(-20deg);
            border-top-color: transparent;
            border-right-color: transparent;
        }

        &-layer-3 {
            @apply border-blue-400;
            width: 80px;
            height: 80px;
            animation: rotate 2s infinite .6s;
            transform: rotate(-20deg);
            border-top-color: transparent;
            border-right-color: transparent;
        }
    }

    @keyframes rotate {
        from {
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
