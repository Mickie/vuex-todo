import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        undoTodos: state => {
            return state.todos.filter(todo => !todo.done)
        }
    },
    mutations: {
        toggleState(state, item){
            let _item = state.todos.find(todo => todo.name == item.name);
            _item.done = !_item.done;
        },
        updateList(state, list){
            state.todos = list;
        }
    },
    actions: {
        addAsync({commit, state}, item){
            let todos = [...state.todos, item];
            setTimeout(() => {
                commit('updateList', todos)
                //state.todos = [...state.todos,item]
            }, 1000)
        },
        removeAsync({commit, state}, item){
            let index = state.todos.findIndex(todo => todo.name == item.name);
            setTimeout(() => {
                state.todos.splice(index, 1);
            }, 1000)
        },
        fetch({state}){
            setTimeout(() => {
                state.todos = [
                    {name: "read oldeli book", done: false},
                    {name: "write something after reading", done: false},
                    {name: "go pick a nice dress for new year eve", done: true}
                ]
            }, 1000)
        },
    }
});