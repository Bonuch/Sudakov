const tempInstructions = "<p>\n" +
    "                То, что большинство людей считают\n" +
    "                идеализмом, в действительности яв-\n" +
    "                ляется утопией или 11-й Тенью За-\n" +
    "                темнения, которая мешает людям\n" +
    "                воплощать свои мечты в жизнь.\n" +
    "                Чтобы идеализм проявился в мире,\n" +
    "                все, что нужно — это структура. Но\n" +
    "                сперва вы должны узнать свои ис-\n" +
    "                тинные идеалы и настоящие мечты.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                Архетипы помогают открыть поток\n" +
    "                ваших внутренних образов, которые\n" +
    "                вначале могут казаться вам хаотич-\n" +
    "                ными. Сила работы с архетипом со-\n" +
    "                стоит в том, что вы знаете заранее,\n" +
    "                что это всего лишь проекция вашей\n" +
    "                собственной психики, независимо\n" +
    "                от ваших чувств и ощущений. На-\n" +
    "                пример, если у вас был опыт изме-\n" +
    "                ненных состояний сознания, в кото-\n" +
    "                рых вы становились Буддой или\n" +
    "                ощущали в себе силу и энергию\n" +
    "                мессии, то вместо отождествления с\n" +
    "                этим опытом, вы можете рассматри-\n" +
    "                вать его как стадию своего психиче-\n" +
    "                ского процесса. Опасность появля-\n" +
    "                ется при отождествлении.\n" +
    "            </p>\n" +
    "\n" +
    "            <p class='advanced'>\n" +
    "                Идентификация с историческим\n" +
    "                персонажем прошлого препятству-\n" +
    "                ет более глубокому проникновению\n" +
    "                в вас самого архетипа. Архетипы\n" +
    "                движутся по фрактальным пат-\n" +
    "                тернам, перетекая из прошлого в\n" +
    "                будущее и наоборот. Только в на-\n" +
    "                стоящем вы находитесь в безопас-\n" +
    "                ности, поскольку настоящее — это\n" +
    "                единственное, с чем вы не можете\n" +
    "                отождествиться.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                Идеализм представляет собой\n" +
    "                устойчивый поток архетипической\n" +
    "                памяти, который воплощается в\n" +
    "                мире форм. Позволяя ему течь сво-\n" +
    "                бодно, вы помогаете своим мечтам\n" +
    "                воплотиться. Но в мечте скрыта не-\n" +
    "                предсказуемость. Вы никогда не\n" +
    "                знаете, чем она обернется после ре-\n" +
    "                ализации. Вам знакомо только чув-\n" +
    "                ство, которое она вызывает, задевая\n" +
    "                глубины вашего сердца.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                Ум создает визуальные образы\n" +
    "                вокруг ваших мечтаний и идеалов, и\n" +
    "                именно здесь возникают потенци-\n" +
    "                альные преграды. Вы должны\n" +
    "                верить в силу своей мечты и в то же\n" +
    "                время отказаться от представлений,\n" +
    "                как она должна выглядеть.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                Любые ваши образы, архетипы или\n" +
    "                мифический опыт находятся в\n" +
    "                потоке, текущем из прошлого в бу-\n" +
    "                дущее и наоборот. Поэтому истин-\n" +
    "                ная суть 11-го Дара — это способ-\n" +
    "                ность играть с архетипами, присут-\n" +
    "            </p>";


export const state = () => ({
    windowWidth: 0,
    overlayStatus: null,
    mobileMenuActivity: null,
    instructionContent: {
        title: 'Идеализм',
        content: tempInstructions,
    },
});

export const getters = {
    getWindowWidth(state) {
        return state.windowWidth;
    },
    getOverlayStatus(state) {
        return state.overlayStatus;
    },
    getInstructionContent(state) {
        return state.instructionContent;
    },
    getMobileMenuActivity(state) {
        return state.mobileMenuActivity;
    },
};

export const mutations = {
    setWindowWidth(state, payload) {
        state.windowWidth = payload;
    },
    setOverlayStatus(state, payload) {
        state.overlayStatus = payload;
    },
    setInstructionContent(state, payload) {
        state.instructionContent = {
            title: payload.name.charAt(0).toUpperCase() + payload.name.slice(1),
            content: payload.description ? payload.description : "Контента нет но он скоро будет"
            // content: tempInstructions
        };
    },
    setMobileMenuActivity(state, payload) {
        state.mobileMenuActivity = payload;
    },
};

export const actions = {
    async nuxtServerInit({ getters, dispatch }) {
        // await dispatch("users/getUserByToken");
        //
        // if (getters["users/isLogged"]) {
        //     await dispatch("cart/fetchCartItems");
        // }
    },
    async fetchInstructionContent({ commit }, url ) {
        try {
            const { data } = await this.$axios.get(url);
            if (data) {
                await commit('setInstructionContent', data);
            }
        } catch (ex) {
            console.log('cant fetch instructions: ' + ex);
        }
    },
    toggleMobileMenu({ commit, state }) {
        commit('setMobileMenuActivity', !state.mobileMenuActivity);
    },
    closeMobileMenu({ commit }) {
        commit('setMobileMenuActivity', null);
    },
};
