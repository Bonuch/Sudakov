export const resizeHelper = {
    methods: {
        rhUpdateWindowWidth() {
            this.$nextTick(function() {
                window.addEventListener("resize", this.rhGetWindowWidth);
            });
        },
        rhGetWindowWidth() {
            this.$store.commit("setWindowWidth", document.documentElement.clientWidth);
        },
    },
    mounted() {
        this.rhGetWindowWidth();
        this.rhUpdateWindowWidth();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.rhGetWindowWidth);
    },
};
