export const state = () => ({
    modalStatus: null, // видимость модалки
    modalName: null, // название компонента, который будем подтягивать нутри обертки
    modalSize: "medium", // размер модалки(смотреть в css)
    modalMessage: null, // сообщение
    modalContent: null, // данные для подгрузки в модалке (например список экскурсий и т.д.)
    modalCb: null, // действие, которое выполнится после закрытия модалки
});

export const getters = {
    getModalName(state) {
        return state.modalName;
    },
    getModalStatus(state) {
        return state.modalStatus;
    },
    getModalSize(state) {
        return state.modalSize;
    },
    getModalMessage(state) {
        return state.modalMessage;
    },
    getModalContent(state) {
        return state.modalContent;
    },
    getModalCb(state) {
        return state.modalCb;
    },
};

export const mutations = {
    setModalName(state, name) {
        state.modalName = name;
    },
    setModalSize(state, payload) {
        state.modalSize = payload;
    },
    setModalStatus(state, status) {
        state.modalStatus = status;
    },
    setModalMessage(state, message) {
        state.modalMessage = message;
    },
    setModalContent(state, payload) {
        state.modalContent = payload;
    },
    setModalCb(state, payload) {
        state.modalCb = payload;
    },
};

export const actions = {
    openModal({ commit }, options) {
        commit("setModalName", options.name);
        commit("setModalSize", options.size || "medium");
        commit("setModalStatus", true);
        commit("setModalCb", options.cb || null);
        document.body.classList.add("overflow-hidden");
    },
    closeModal({ commit }) {
        commit("setModalName", null);
        commit("setModalSize", 'medium');
        commit("setModalStatus", null);
        document.body.classList.remove("overflow-hidden");
    },
    updateModalMessage({ commit }, payload) {
        commit("setModalMessage", payload);
    },
};
