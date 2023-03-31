<template>
    <div v-if="isOpen" class="cookie-notification">
        <p class="cookie-notification-text">
            Перейдя на&nbsp;сайт, вы&nbsp;соглашаетесь с&nbsp;использованием файлов cookie для&nbsp;сбора
            информации на&nbsp;сайте {{ getDomain }} и&nbsp;за его пределами.
        </p>

        <button type="button" class="cookie-notification-button text-black-400"
                @click="onCloseClick">
            Я принимаю
        </button>
    </div>
</template>

<script>
    export default {
        name: "Cookie-notification",
        data() {
            return {
                isOpen: true,
            };
        },
        computed: {
            getDomain() {
                return process.env.BASE_URL;
            },
        },
        methods: {
            onCloseClick() {
                this.isOpen = false;
                // 2592000000 - 1 месяц
                this.setWithExpiry("cookie-agreed", 1, 2592000000);
            },
            setWithExpiry(key, value, ttl) {
                const now = new Date();
                const item = {
                    value: value,
                    expiry: now.getTime() + ttl,
                };
                localStorage.setItem(key, JSON.stringify(item));
            },
            getWithExpiry() {
                const itemStr = localStorage.getItem("cookie-agreed");

                if (!itemStr) {
                    return null;
                }

                const item = JSON.parse(itemStr);
                const now = new Date();

                if (now.getTime() > item.expiry) {
                    localStorage.removeItem("cookie-agreed");
                    return null;
                }
                return item.value;
            },
            getCookieAgreed() {
                return !this.getWithExpiry() ? this.isOpen = true : this.isOpen = false;
            },
        },
        beforeMount() {
            this.getCookieAgreed();
        },
    };
</script>

<style lang="scss" scoped>
    .cookie-notification {
        position: fixed;
        z-index: 30;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px;
        background-color: rgba(#fff, 0.9);
        border-top: 1px solid;

        &-text {
            max-width: 60%;
            margin-right: 25px;
        }

        a {
            display: inline;
            text-decoration: none;
            border-bottom: 1px solid;
            transition: all 0.3s ease;

            &:hover,
            &:focus {
                border-bottom-color: transparent;
            }
        }

        p {
            margin: 0;
        }

        &-button {
            width: 20px;
            height: 20px;
            min-width: auto;
            padding: 0;
            background-color: transparent;
            border: none;
            cursor: pointer;

            svg {
                width: 100%;
                height: 100%;
                fill: currentColor;
                transition: all 0.3s ease;
            }

            &:hover,
            &:focus,
            &:active {
                @apply text-orange-400;
            }
        }
    }

    @media (max-width: 768px) {
        .cookie-notification {
            &-text {
                max-width: initial;
                flex: 1;
                font-size: 13px;
            }
        }
    }

    @media (max-width: 480px) {
        .cookie-notification {
            &-button {
                width: 16px;
                height: 16px;
            }
        }
    }
</style>
