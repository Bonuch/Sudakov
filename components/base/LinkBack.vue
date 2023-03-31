<template>
    <button
        type="button"
        class="link-back custom-transition hover:text-orange-400"
        @click="goBack"
    >
        <slot name="body">
            <div class="flex items-center">
                <slot name="icon">
                    <svg
                        class="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30" height="30"
                        viewBox="0 0 30 30" fill="none"
                    >
                        <path
                            class="fill-current"
                            fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.7071 8.04289C11.0976 8.43342 11.0976 9.06658 10.7071 9.45711L6.16421 14H26.25C26.8023 14 27.25 14.4477 27.25 15C27.25 15.5523 26.8023 16 26.25 16H6.16421L10.7071 20.5429C11.0976 20.9334 11.0976 21.5666 10.7071 21.9571C10.3166 22.3476 9.68342 22.3476 9.29289 21.9571L3.04289 15.7071C2.65237 15.3166 2.65237 14.6834 3.04289 14.2929L9.29289 8.04289C9.68342 7.65237 10.3166 7.65237 10.7071 8.04289Z"
                            fill="#DEE3EB"
                        />
                    </svg>
                </slot>

                <slot name="text">
                    <span class="font-bold text-xl">Назад</span>
                </slot>
            </div>
        </slot>
    </button>
</template>

<script>
    export default {
        name: "LinkBack",
        methods: {
            goBack() {
                const firstPath = this.$route.path.split("/");

                if (firstPath.length > 2) {
                    this.$router.push({ path: `/${firstPath[1]}` });
                } else {
                    this.$router.push("/");
                }
            },
        },
    };
</script>

<style></style>
