
export default {
    state: {
        list: []
    },
    mutations: {
        setList(state, list) {
            state.list = list;
        }
    },
    getters: {
        list(state) {
            return state.list.list;
        }
    }
};
