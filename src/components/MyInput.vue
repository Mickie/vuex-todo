<template>
    <input ref="input" :value="data" @keyup.enter="updateValue" placeholder="add new..">
</template>
<script>
    export default{
        computed: {
            data(){
                return this.value;
            }
        },
        props: ['value'],
        methods: {
            updateValue($event){
                this.$refs.input.value = $event.target.value;
                this.$emit('input', this.$refs.input.value);
            }
        }
    }
</script>
<style scoped>

</style>