<template>
    <div class="base-drop-file__list mb-5">
        <div
            v-for="(fileItem, idx) in files"
            :key="idx"
            class="flex items-center justify-between p-3 mb-2 bg-gray-200 last:mb-0 rounded-sm overflow-hidden"
        >
            <span class="text-base mob:text-sm">{{ idx + 1 }}. {{ fileItem.name }}</span>

            <button
                type="button"
                class="btn"
                @click="onRemoveItemClick(idx)"
            >
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                    <path
                        class="fill-current"
                        d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                            L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                            c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                            l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                            L284.286,256.002z"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseDropFiles",
    props: {
        files: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onRemoveItemClick(idx) {
            this.$emit("on-remove-file-from-files", idx);
        },
    },
};
</script>

<style></style>
