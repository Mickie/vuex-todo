<template>
    <div>
        <h2>Tell me what you want to do</h2>
        <MyInput v-model="myInputVal"></MyInput>
        <Row>
            <Col span="12" >
            <h4>done({{doneLength}})</h4>
            <ul v-for="(todo,index) in doneTodos">
                <SingleTodo :data="todo" :key="index"></SingleTodo>
            </ul>
            </Col>
            <Col span="12">
            <h4>on going({{onGoingLength}})</h4>
            <ul v-for="(todo,index) in undoTodos">
                <SingleTodo :data="todo" :key="index"></SingleTodo>
            </ul>
            </Col>
        </Row>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'
    import SingleTodo from './SingleTodo.vue'
    import MyInput from './MyInput.vue'
    export default{
        data(){
            return {
                myInputVal: ""
            }
        },
        created(){
            //API FETCH todoLists
            this.fetch();
        },
        computed: {
            ...mapState([
                'todos'
            ]),
            ...mapGetters([
                'doneTodos',
                'undoTodos'
            ]),
            doneLength(){
                return this.doneTodos.length;
            },
            onGoingLength(){
                return this.undoTodos.length;
            }
        },
        methods: {
            ...mapActions([
                'fetch', 'addAsync'
            ]),
        },
        components: {SingleTodo, MyInput},
        watch: {
            myInputVal: function (nV, oV) {
                let _obj = {name: nV, done: false};
                this.addAsync(_obj);
            }
        }
    }
</script>
<style scoped>
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    ul {
        padding: 0;
    }
</style>