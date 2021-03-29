import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
    state: {
        counter: 0,
        session: {
            lenguaje: '',
            ancho: 0,
            alto: 0
        },
        users: []
    },
    getters: {
       users: state => {
           return state.users;
       }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        SET_Users(state, users) {
            state.users = users;
        }
    },
    actions: {
        incrementAsync( { commit } ) {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
        loadUsers ({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users', {
                headers: {

                }
            })
            .then(response => response.data)
            .then(users => {
                commit('SET_Users', users)
            })
        }
    }
});

export default store;