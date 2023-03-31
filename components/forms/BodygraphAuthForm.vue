<template>
    <form method="post" @submit.prevent="onSubmit">
        <input name="USER_FORM" type="hidden" value="Введите ваши данные">

        <div class="form-fields">
            <div class="form-item form-item-phone">
                <label for="user-form-phone" class="label">Телефон</label>
                <label class="error__label" v-if="errors && errors.phone">{{ errors.phone }}</label>
                <input :type="isAppleDevice ? 'tel' : 'text'" name="USER_PHONE" class="input input-shadow" id="user-form-phone"
                       @change="e => preValidateForm(e.target.value, 'phone')"
                       placeholder="+7" required v-mask="'+7 ### ###-##-##'" v-model="user.phone">
            </div>

            <div class="form-item form-item-birth-date"
                 @click='showCalendar = !showCalendar'>
                <label for="user-form-birth-date" class="label">Дата рождения</label>
                <label class="error__label" v-if="errors && errors.birthDate">{{ errors.birthDate }}</label>
                    <div class="wrap-calendar pos-rel">
                        <div>
                            <input type="text"
                               name="USER_BIRTH"
                               autocomplete="off"
                               class="input input-shadow"
                               id="user-form-birth-date"
                               v-mask="'##.##.####'"
                               required
                               @change="e => preValidateForm(e.target.value, 'birthDate')"
                               v-model="user.birthDate"
                               placeholder="ДД.ММ.ГГГГ">
                        </div>
                    </div>

            </div>

            <div class="form-item">
                <span class="error__label" v-if="error">{{ error }}</span>
            </div>

            <div class="section-form-submit-wrap">
                <button
                    type="submit"
                    class="section-form-submit btn btn-padding btn-rounded btn-black"
                >
                    Войти
                </button>

                <nuxt-link
                    :to="{name: 'instruction-auth-register'}"
                    class="mt-2 section-form-submit btn btn-padding btn-rounded btn-black"
                >
                    Регистрация
                </nuxt-link>
            </div>

        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import 'vue-select/dist/vue-select.css';


export default {
    name: 'BodygraphAuthForm',
    data() {
        return {
            loading: false,
            places: [],
            selectedPlace: null,
            hasError: false,
            errors: {
                phone: null,
                birthDate: null,
            },
            error: null,
            user: {
                phone: '+7 ',
                birthDate: null,
            },
            showCalendar: false,
        };
    },
    computed: {
        isAppleDevice() {
            return typeof(navigator) !== 'undefined' ? (/iPhone|iPad|iPod/i.test(navigator.userAgent)) : false;
        }
    },
    methods: {
        ...mapActions({
            login: 'users/login',
            fetchGraph: 'bodygraph/fetchBodyGraph',
        }),
        async getSuggestions(search, loading) {
            if (search.length > 2) {
                loading(true);
                this.selectedPlace = null;
                const response = await this.$axios.get('/auth/city-suggestions', {
                    params: {
                        term: search
                    }
                });
                if (response && response.data) {
                    this.places = response.data;
                }
                loading(false);
            }
        },
        preValidateForm(value, field) {
            this.hasError = false;
            switch (field) {
                case 'phone':
                    if (value.length < 16) {
                        this.errors.phone = 'Укажите мобильный номер телефона';
                        this.hasError = true;
                    } else {
                        this.errors.phone = null;
                    }
                    break;
                case 'birthDate':
                    this.errors.birthDate = null;
                    if (value.length < 10) {
                        this.errors.birthDate = 'Требуется дата в полном формате (16.11.1982)';
                        this.hasError = true;
                    } else if (value.length === 10) {
                        if (this.$dayjs().isBefore(this.$dayjs(value))) {
                            this.errors.birthDate = 'Указана дата из будущего. Здравствуй, путешественник во времени.';
                            this.hasError = true;
                        }
                    }
                    break;
            }
        },
        formattedPayload() {
            return {
                phone: this.user.phone,
                birth_date: this.user.birthDate,
            }
        },
        clearMessages() {
            this.errors = null;
            this.error = null;
        },
        async onSubmit() {
            if (this.hasError) return;
            this.loading = true;
            try {
                this.clearMessages();
                const data = await this.login(this.formattedPayload());
                if (data && data.errors) {
                    for (const key of Object.keys(data.errors)) {
                        this.errors[key] = data.errors[key];
                        return;
                    }
                }
                if (data && data.error) {
                    this.error = data.message
                    return;
                }
                this.loading = false;
                this.$emit('authenticated', true)
            } catch (ex) {
                this.loading = false;
            }
        },
        setDate(data) {
            this.user.birthDate = data.id
        }
    },
};
</script>

<style lang="scss" scoped>
.card{
    padding: 2px 16px 0 16px;
}

.section-form {
    &-note {
        max-width: 300px;
        margin: 4px 0;
    }

    &-link {
        margin: 0 0 8px 0;
    }

    &-submit-wrap {
        margin:{
            top: 24px;
            bottom: 16px;
        }
        text-align: center;
    }
}

.form-fields {
    padding: 0 16px;

    .form-item {

        label {
            margin: 8px 0 4px 0;
            @apply text-18
        }

        input {
            height: 40px;
            padding: 8px 16px;
            margin: 4px 0 8px 0;
        }

        .nopadding {
            padding: 0;
        }

        /deep/ .vs__dropdown-toggle {
            border: none;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.error__label {
    @apply text-red-600 text-18;
}

.wrap-calendar{
    position: absolute;
    z-index: 999;
}

.pos-rel {
    position: relative;
}
</style>
