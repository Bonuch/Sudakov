<template>
    <div class="instruction p-4">
        <h2 class="title">Инструкция</h2>

        <div v-if='hasItems(personality)' class='instruction-block'>
            <h3 class='instruction-subtitle'>Моя личность</h3>
            <Instruction
                v-for='(item, idx) in personality'
                :key='item.theme.id'
                :item='item'
                :idx='item.theme.id'
                :showDropdown='selectedInstruction === item.theme.id'
                @on-toggle-dropdown="onToggleDropdown"
            />
        </div>

        <div v-if='hasItems(relations)' class='instruction-block'>
            <h3 class='instruction-subtitle'>Мои отношения</h3>

            <Instruction
                v-for='(item, idx) in relations'
                :key='item.theme.id'
                :item='item'
                :idx='item.theme.id'
                :showDropdown='selectedInstruction === item.theme.id'
                @on-toggle-dropdown="onToggleDropdown"
            />
        </div>

        <div v-if='hasItems(money)' class='instruction-block'>
            <h3 class='instruction-subtitle'>Мои деньги</h3>

            <Instruction
                v-for='(item, idx) in money'
                :key='item.theme.id'
                :item='item'
                :idx='item.theme.id'
                :showDropdown='selectedInstruction === item.theme.id'
                @on-toggle-dropdown="onToggleDropdown"
            />
        </div>
    </div>
</template>

<script>
	import Instruction from './Instruction';
    export default {
		name: 'Instructions',
        components: { Instruction },
        data() {
            return {
                selectedInstruction: null,
            }
        },
        props: {
            personality: {
                type: Array,
                required: true,
            },
            relations: {
                type: Array,
                required: true,
            },
            money: {
                type: Array,
                required: true,
            },
        },
        methods: {
            onToggleDropdown(newItem) {

                let oldItem = this.selectedInstruction;
                this.selectedInstruction = null;

                if(newItem > oldItem && oldItem !== null){
                    this.goto(newItem, oldItem);
                    setTimeout( () => this.selectedInstruction = newItem, 800);
                }else{
                    this.selectedInstruction = newItem;
                }
            },
            goto(newItem, oldItem) {

                if(!oldItem) return;
                const element = document.querySelector(`[data-number-instruction="${oldItem}"]`);
                const bottom = element.offsetTop + element.offsetHeight;

                window.scrollTo({
                    'top': window.pageYOffset - element.offsetHeight + 10,
                    'behavior': 'smooth'
                });
            }
        },
        computed: {
            hasItems() {
                return (arr) => arr && arr.length > 0;
            }
        },
	};
</script>


<style>
.title{
    padding-bottom: 8px;
}
</style>
