<template>
    <div class="card">
        <div class="card-video-wrap">
            <div class="card-content">
                <button
                    type="button"
                    class="btn card-video-btn"
                >
                    <svg
                        width="120"
                        height="120"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 60"
                    >
                        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15 C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884 c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="card-footer">
            <slot name="buttons">
            </slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Card',
        props: {
            video: {
                type: String,
            }
        },
	};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    padding: 16px 16px 28px 16px;

    &-gray {
        .card-video-wrap {
            @apply bg-gray-400;
        }
    }

    &-black {
        .card-video-wrap {
            background-color: #000;
        }

        .card-video-btn {
            &:hover,
            &:focus,
            &:active {
                svg {
                    fill: currentColor;
                    @apply text-orange-400;
                }
            }
        }

    }

    &-footer {
        padding: 0 4px;
    }

    &-video-wrap {
        height: 0;
        padding-bottom: 177.555%;
        margin-bottom: 12px;
        color: #fff;
        background-color: #C4C4C4;
        @apply text-18;

        a {
            color: #fff;
        }
    }

    &-video-btn {
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%, -50%);

        &:hover,
        &:focus,
        &:active {
            svg {
                fill: #000;
            }
        }
    }

    svg {
        fill: white;
        transition: all .3s ease;
    }

    &-action {

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
