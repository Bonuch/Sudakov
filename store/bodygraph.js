export const state = () => ({
    bodyGraph: null,
    instructionGroup: [
        {
            title: 'Моя личность',
            theme_group: 1,
        },
        {
            title: 'Мои отношения',
            theme_group: 2,
        },
        {
            title: 'Мои деньги',
            theme_group: 3,
        }
    ],
});

export const getters = {
    getBodyGraph(state) {
        return state.bodyGraph;
    }
};

export const mutations = {
    setBodyGraph(state, payload) {
        state.bodyGraph = payload;
    }
};

export const actions = {
    async fetchBodyGraph({ commit }) {
        try {
            const { data } = await this.$axios.get('/user/graph', { });
            if (data && data.data) {
                commit('setBodyGraph', data.data);
                return;
            }
            throw new Error("Неверный формат ответа");
        } catch (e) {
            throw new Error(e)
        }
    }
}
