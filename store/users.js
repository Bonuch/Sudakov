export const state = () => ({
    user: {},
    isLogged: false,
    authToken: null,
    isAuth: false,
});

export const getters = {
    getUser(state) {
        return state.user;
    },
    isLogged(state) {
        return state.user && Object.keys(state.user).length > 0;
    },
    isAuth(state) {
        return state.isAuth
    }
};

export const mutations = {
    setUser(state, payload) {
        // if (process.client) {
        //     window.localStorage.setItem('auth_token', payload.token)
        // }

        state.user = payload;
    },
    setAuth(state, payload) {
        state.isAuth = payload
    },
    setToken(state, payload) {
        this.$cookies.set('authUser', payload)
        state.authToken = payload
    }
};

export const actions = {
    async login({state, commit}, payload) {
        try {
            const {data} = await this.$axios.post('/auth/login', payload);
            if (data && data.error) {
                return data;
            }
            if (data && data.user && data.token) {
                commit('setUser', data.user)
                commit('setToken', data.token)
                commit('setAuth', true)
            }
            return data.user;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 422) {
                    return e.response.data;
                }
            }
            throw new Error(e)
        }
    },

    async registerUser({state, commit}, payload) {
        try {
            const {data} = await this.$axios.post('/auth/registration', payload);
            if (data && data.error) {
                return data;
            }
            if (data && data.user && data.token) {
                commit('setUser', data.user)
                commit('setToken', data.token)
                commit('setAuth', true)
            }
            return data.user;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 422) {
                    return e.response.data;
                }
            }
            throw new Error(e)
        }

    },

    async updateUser({ commit }, payload) {
        commit("setUser", payload);
    },
    async updateToken({ commit }, payload) {
        // todo crypt token
        this.$cookies.set("authUser", payload);
    },
    async getUserByToken({ commit, dispatch }) {
        const token = this.$cookies.get("authUser");

        if (token) {
            try {
                const { data } = await this.$axios.get("/user/me");
                commit("setUser", data);
                commit('setAuth', true);
                return true;
            } catch (ex) {
                return false;
            }
        } else {
            dispatch("logout");
        }
    },
    async logout({ commit, dispatch }) {
        this.$cookies.remove("authUser");
        commit("setUser", null);
        commit("setAuth", false);
    },
};
