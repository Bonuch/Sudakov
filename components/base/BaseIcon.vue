<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :class="selectors"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <slot/>
    </svg>
</template>

<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: "box",
            },
            viewBox: {
                type: String,
                default: "0 0 18 18",
            },
            width: {
                type: [Number, String],
                default: 18,
            },
            height: {
                type: [Number, String],
                default: 18,
            },
            selectors: {
                type: String,
                default: "",
            },
            iconColor: {
                type: String,
                default: "currentColor",
            },
        },
    };
</script>

<style></style>
