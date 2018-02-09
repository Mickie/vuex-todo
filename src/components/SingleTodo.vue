<template>
    <div>
        <li >
            <span @click="toggleState(data)">{{data.name}}</span>
            <Button type="ghost" shape="circle" size="small" @click="remove(data)">x</Button>
        </li>

    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'
    export default{
        data(){
            return {}
        },
        methods: {
            ...mapMutations([
                'toggleState'
            ]),
            ...mapActions({
                remove: 'removeAsync'
            })
        },
        props: ['data']
    }
</script>
<style scoped>
    li {
        list-style-type: none;
    }
</style>
