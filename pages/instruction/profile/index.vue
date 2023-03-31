<template>
    <div class="front-main">
        <section class="section">
            <Instructions
                v-if="formattedGraph"
                :personality='formattedGraph.personality'
                :relations='formattedGraph.relations'
                :money='formattedGraph.money'
            />
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Instructions from "@/components/front/instruction/Instructions";

export default {
    name: "index",
    components: { Instructions },
    middleware: ['auth'],
    computed: {
        ...mapGetters({
            bodygraph: 'bodygraph/getBodyGraph'
        }),
        formattedGraph() {
            const personality = [];
            const relations = [];
            const money = [];
            if (!this.bodygraph) {
                return null;
            }
            for (const item of this.bodygraph) {
                if (item.theme.group === '1') {
                    personality.push(item);
                } else if (item.theme.group === '2') {
                    relations.push(item);
                } else if (item.theme.group === '3') {
                    money.push(item);
                }
            }
            return {
                personality,
                relations,
                money
            }
        }
    },
    methods: {
        ...mapActions({
            fetchGraph: 'bodygraph/fetchBodyGraph',
        })
    },
    async created() {
        await this.fetchGraph();
    },
}
</script>

<style scoped>

</style>
