import { setCase } from "@/helpers/text";

function isExist(variable) {
    return variable !== undefined;
}

export const parsePhoneMixin = {
    computed: {
        chParsePhone() {
            return (phone) => {
                return phone ? phone.replace(/[^+\d]+/g, "") : "";
            };
        },
        chFormatPhone() {
            return (phone) => {
                const cleaned = ('' + phone).replace(/\D/g, '');
                const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
                if (match) {
                    const intlCode = (match[1] ? '+7 ' : '');
                    return [intlCode, '(', match[2], ') ', match[3], '-', match[4], '-', match[5]].join('');
                }
            };
        },
    },
};

export const ogHelper = {
    methods: {
        getOgImage(ogName = "image") {
            if (this.content && this.content[ogName]) {
                return process.env.API_BASE_URL + this.content[ogName];
            } else {
                return process.env.OG_IMAGE;
            }
        },
        getPageTitle() {
            let contentMeta = isExist(this.content) && this.content.title ? this.content.title : false; // мета контента
            let menuMeta = isExist(this.menuMetaTitle) ? this.menuMetaTitle : false; // мета из меню
            return contentMeta || menuMeta || process.env.META_TITLE;
        },
        getPageKeywords() {
            let contentMeta = isExist(this.content) && this.content.meta_keywords ? this.content.meta_keywords : false;
            let menuMeta = isExist(this.menuMetaKeywords) ? this.menuMetaKeywords : false;
            return contentMeta || menuMeta || process.env.META_KEYWORDS;
        },
        getPageDescription() {
            let contentMeta = isExist(this.content) && this.content.meta_description ? this.content.meta_description : false;
            let menuMeta = isExist(this.menuMetaDescription) ? this.menuMetaDescription : false;
            return contentMeta || menuMeta || process.env.META_DESCRIPTION;
        },
    },

    computed: {
        getPageUrl() {
            const domain = process.env.BASE_URL;
            return `${domain}${this.$route.path}`;
        },
    },
};

export const dayjsHelpers = {
    computed: {
        getDaysFormatted() {
            return (length) => setCase(Number(length), ["день", "дня", "дней"], "<");
        },
        getDateFormatted() {
            return (dateStr) => this.$dayjs(dateStr).locale("ru").format("DD MMMM YYYY");
        },
        getMobileDateFormatted() {
            return (dateStr) => this.$dayjs(dateStr).format("DD.MM.YYYY");
        },
        getDayAndTimeFormatted() {
            return (dateStr) => this.$dayjs(dateStr).locale("ru").format("dddd H:mm");
        },
        dayjsGetDayFormatted() {
            return (dateStr) => this.$dayjs(dateStr).locale("ru").format("dddd");
        },
        dayjsGetTimeFormatted() {
            return (dateStr) => this.$dayjs(dateStr).locale("ru").format("H:mm");
        },
    },
};

export const fetchSearchResult = {
    data() {
        return {
            fsrLoading: false,
            fsrContent: [],
            fsrContentMeta: {},
        };
    },
    computed: {
        fsrShowMoreVisibility() {
            return this.fsrContentMeta && this.fsrContentMeta.current_page < this.fsrContentMeta.last_page;
        },
    },
    methods: {
        async fsrOnSearchMoreClick(url, additionalParams = {}) {
            let query = { ...this.$route.query };

            // дополнительные опции, например type: by в еак реестре
            // if (additionalParams && Object.keys(additionalParams).length > 0) {
            //     query = Object.assign({}, query, additionalParams);
            // }

            // сорт индекс для эластика
            if (this.fsrContentMeta && this.fsrContentMeta.sort_index && this.fsrContentMeta.sort_index !== "null") {
                query = {
                    ...query,
                    sort_index: JSON.stringify(this.fsrContentMeta.sort_index),
                };
            }

            // подкидываем следующую страницу
            if (this.fsrContentMeta && this.fsrContentMeta.current_page < this.fsrContentMeta.last_page) {
                query = {
                    ...query,
                    ...{ page: Number(this.fsrContentMeta.current_page) + 1 },
                };
            }

            await this.fsrFetch(url, query);
        },
        async fsrFetch(url, params = null) {
            this.fsrLoading = true;

            try {
                const { data } = await this.$axios.get(url, { params });
                (this.fsrContent && this.fsrContent.length > 0) ? this.fsrSetData(data, true) : this.fsrSetData(data);
                this.fsrLoading = false;
            } catch (e) {
                this.fsrLoading = false;
                this.$nuxt.error({ statusCode: 404, message: "cant fetch content" });
            }
        },
        async fsrSearch(url, params) {
            this.fsrLoading = true;

            try {
                const { data } = await this.$axios.get(url, { params });
                this.fsrSetData(data);
                this.fsrLoading = false;
            } catch (e) {
                this.fsrLoading = false;
                this.$nuxt.error({ statusCode: 404, message: "cant fetch content" });
            }
        },
        fsrSetData(data, merge = false) {
            this.fsrContent = merge ? [...this.fsrContent, ...data.data] : data.data;
            this.fsrContentMeta = data.meta;
            this.fsrContentMeta.sort_index = data.sort_index ? data.sort_index : null;
        },
    },
};
