<template>
    <div
        class="error-field flex items-center py-1 px-3 mt-2 bg-red-400 bg-opacity-30 text-sm rounded-sm overflow-hidden"
    >
        <svg
            class="mr-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8.5 4.66667C8.5 4.39052 8.27614 4.16667 8 4.16667C7.72386 4.16667 7.5 4.39052 7.5 4.66667V8.66667C7.5 8.94281 7.72386 9.16667 8 9.16667C8.27614 9.16667 8.5 8.94281 8.5 8.66667V4.66667ZM8.5 10.6667C8.5 10.3905 8.27614 10.1667 8 10.1667C7.72386 10.1667 7.5 10.3905 7.5 10.6667V10.7333C7.5 11.0095 7.72386 11.2333 8 11.2333C8.27614 11.2333 8.5 11.0095 8.5 10.7333V10.6667Z"
                fill="#DA3E34"
            />
        </svg>

        <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "ErrorField",
        props: {
            text: {
                type: [Number, String],
                required: true,
            },
        },
    };
</script>

<style scoped></style>
