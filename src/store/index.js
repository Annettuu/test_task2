import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        taskData: {}
    },
    getters: {
        taskData: state => state.taskData
    },
    mutations: {
        SET_TASK_DATA(state, taskData) {
            state.taskData = taskData;
        }
    },
    actions: {
        fetchTaskData({ commit }) {
            axios.get('public/data.json')
                .then(response => {
                    commit('SET_TASK_DATA', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
});
