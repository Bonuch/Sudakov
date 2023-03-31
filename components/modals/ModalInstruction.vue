<template>
    <div class="modal-instruction">
        <h2 v-if="getInstructionContent.title" :class="{ apple: isAppleDevice }" v-html="getInstructionContent.title"></h2>
        <div v-if="getInstructionContent.content"
            class="modal-instruction-content text-20 leading-1-2"
            v-html="getInstructionContent.content"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ModalInstruction',
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        ...mapGetters({
            getInstructionContent: 'getInstructionContent',
        }),
        isAppleDevice() {
            return typeof(navigator) !== 'undefined' ? (/iPhone|iPad|iPod/i.test(navigator.userAgent)) : false;
        }
    },
};
</script>

<style scoped>
    .modal-instruction-content::v-deep p {
        line-height: 1.58;
        /*@apply pl-6;*/
        margin: 0;
        padding: 0 0 28px 0;
        font-size: 16px;
    }

    .modal-instruction::v-deep h2 {
        font-size: 32px;
        margin: 20px 0 0 0;
        padding: 0 0 18px 0;
    }
    .modal-instruction::v-deep h2.apple {
        margin: 30px 0 0 0;
        padding: 0 0 18px 0;
    }
    .modal-instruction-content::v-deep .advanced {
        padding: 24px 32px 24px 48px;
        margin-left: -32px;
        margin-bottom: 24px;
    }

</style>
