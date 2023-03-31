<template>
    <div
        class="modal modal--active"
    >

        <div class="wrapper-modal-form">
            <button @click.prevent="closeModal" class="modal__close"></button>

            <div class="modal__wrap">
                <div class="modal__logo">
                    <img class="modal__logo--desktop sm:hidden" src="@/assets/images/Sudakov-logo-plate-main-white.svg" alt="#">
                    <img class="modal__logo--mobile sm:block" src="@/assets/images/Sudakov-logo-men-white.svg" alt="#">
                </div>

                <div class="modal__form">

                    <div class="b-form-moving__wrap b-text">
                        <div class="b-form__hidden js-swiper-form">
                            <div class="b-form__hidden-text js-ajax-success-wrap" :class="{'b-form__hidden-text--hidden': request}">
                                <!-- <h3>Оставьте ваш номер телефона</h3> -->
                                <h3>Напишите, пожалуйста,<br>ваш номер телефона</h3>
                                <!-- <p>B течение 5 минут с&nbsp;Вами свяжутся для&nbsp;оформления заказа и&nbsp;бесплатной консультации</p> -->
                                <p>Мы свяжемся с вами в ближайшее время</p>
                            </div>

                            <div class="b-form__success" :class="{'b-form__success--active': request}"><h3> Спасибо, <br>что&nbsp;оставили заявку!</h3>
                                <p> В течение 5 минут мы с вами свяжемся, <br> чтобы ответить на любые ваши вопросы.</p>
                            </div>
                        </div>

                        <form class="js-form js-form-popup" :class="{'b-form__hidden-text--hidden': request}" @submit.prevent="onSubmitForm" value="diamond">

                            <input name="USER_FORM" type="hidden" value="Паралакс1">
                            <input name="LEAD_SOURCE_CODE" type="hidden" value="personalization">
                            <div class="b-form-moving__inner">
                                <div class="b-form-moving__row">
                                    <p class="b-form__item js-animate-form">
                                        <label>
                                            <span
                                                :class="{'active': isActiveName}"
                                                class="b-form__item-label mb-0 pb-4"
                                            >Ваше имя</span>
                                            <input
                                                @focus="focusInputName"
                                                name="USER_NAME"
                                                type="text"
                                                required
                                                v-model="inputNameModel">
                                        </label>
                                    </p>

                                    <p class="b-form__item js-animate-form">
                                        <label>
                                            <span
                                                :class="{'active': isActivePhone}"
                                                class="b-form__item-label mb-0 pb-4"
                                            >Ваш телефон</span>
                                            <input
                                                @focus="focusInputPhone"
                                                class="b-form__phone--mask"
                                                name="USER_PHONE"
                                                type="tel"
                                                v-mask="'+7-###-###-##-##'"
                                                placeholder="+7-___-___-__-__"
                                                v-model="inputPhoneModel"
                                                required>
                                        </label>
                                    </p>
                                </div>

                                <div class="b-form-moving__row b-form-moving__row--end">
                                    <button type="submit" class="btn btn--color-red"><span></span>Оставить заявку<span></span></button>
									<span class="b-form__agreement">
										Нажимая на&nbsp;кнопку, я&nbsp;даю свое согласие на&nbsp;обработку персональных данных
									</span>
                                    <!--								<button class="btn btn--color-red"><span></span>Получить подарки<span></span></button>-->
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Preloader from "@/components/base/Preloader";

export default {
    name: "ModalForm",
    components: {Preloader},
    data () {
        return {
            isActiveName: false,
            isActivePhone: false,
            inputNameModel: '',
            inputPhoneModel: '',
            request: false,
        }
    },
    methods: {
        focusInputName(event) {
            if(this.inputNameModel === '') {
                this.isActiveName = !this.isActiveName;
            }
            if(event.target.value === '') {
                this.isActiveName = true;
            }
            if(this.inputPhoneModel === '' && this.isActiveName === true) {
                this.isActivePhone = false;
            }
        },
        focusInputPhone(event) {
            if(this.inputPhoneModel === '') {
                this.isActivePhone = !this.isActivePhone;
            }
            if(event.target.value === '') {
                this.isActivePhone = true;
            }
            if(this.isActivePhone === true && this.inputNameModel === '') {
                this.isActiveName = false;
            }
        },
        async onSubmitForm(event) {
            let USER_MOBILE =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent) ? '1' : '0';
            let USER_FORM = event.srcElement.attributes.value.value;

            try {
                const formData = {
                    USER_MOBILE: USER_MOBILE,
                    USER_FORM: USER_FORM,
                    LEAD_SOURCE_CODE: "about",
                    USER_NAME: this.inputNameModel,
                    USER_PHONE: this.inputPhoneModel
                };
                const { data } = await this.$axios.post('/order', {...formData});
                this.resetFields();

                return this.request = true;
            } catch (ex) {
                this.errors = ["Что-то пошло не так, попробуйте еще раз"];
                console.log('cant send data: ' + ex);

                return this.request = false;
            }

        },
        resetFields() {
            this.name = null;
            this.phone = null;
        },
        closeModal() {
            this.$emit('modalClose')
        }
    },
}
</script>

<style scoped lang="scss">
.modal {
    display: block;
    position: fixed;
    overflow-y: auto;
    left: 0;
    top: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: #e3e2de url("~/assets/images/bg_popup_form.jpg") no-repeat center top / cover;
    // background: #e3e2de url("../images/bg_popup_form.jpg") no-repeat center top / cover;

    &--active {
        display: block;
        animation: slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
    }

    &__close {
        position: absolute;
        top: 55px;
        right: 66px;
        background: url("~assets/images/sprite-8e46e9b8.svg") 32.900432900432904% 99.71428571428571% no-repeat;
        width: 50px;
        height: 50px;
        border: 0;
        outline: 0;
        cursor: pointer;
    }

    .wrapper-modal-form {
        max-width: 1440px;
        padding: 0 48px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    &__wrap {
        max-width: 360px;
        margin-right: 92px;
        width: 100%;
    }

    .b-form-moving__wrap {
        padding: 0;
    }

    &__logo {
        margin-bottom: 100px;

        &--mobile {
            display: none;
        }
    }

    .js-swiper-form .b-form__success {
        margin: 0;
    }

    .js-form-popup {
        margin-top: 56px;
    }

    .b-form-moving__row {
        flex-wrap: wrap;

        &--end {
            justify-content: flex-start;
        }
    }

    .b-form__item {
        width: 100%;
    }

    .btn {
        margin: 15px 0 24px;
    }

    .b-form__agreement {
        order: 2;
        width: 100%;
        max-width: 215px;
        margin: 0;
        text-align: left;
    }
}
.b-text {
    font-family: "ALS Sector Regular", "sans-serif";
    h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.33;
        letter-spacing: .5px;
        margin-bottom: 23px;
        padding: 0;
    }

    p {
        font-size: 14px;
        line-height: 1.43;
        margin-left: 0;
        margin-top: 0;
    }
}
.b-form {
    &__hidden {
        position: relative;

        &-text {
            opacity: 1;
            transform: scale(1);
            transition: .35s ease all;
        }

        .sttl {
            font-size: 16px;
            line-height: 20px;
            margin-top: 18px;
            display: inline-block;
        }
    }

    &__item {
        width: 44%;
        margin: 0 0 24px;

        label {
            display: block;
            position: relative;
        }

        &-label {
            width: 100%;
            display: block;
            padding-bottom: 4px;
            text-align: left;
            transition: .3s linear all;
            transform: translateY(21px);
            height: 14px;
            font-size: 14px;
            line-height: 1;
        }

        &-label.active {
            transform: translate(-14px, 0) scale(.91);
        }

        input {
            width: 100%;
            height: 24px;
            padding: 0 1px;
            text-align: left;
            outline: 0;
            font-size: 16px;
            line-height: 22px;
            color: #232323;
            border-top: 1px solid transparent;
            border-bottom: 1px solid #232323;
            border-right: 0;
            border-left: 0;
            border-radius: 0;
            background: 0 0;
            transition: .3s ease border-bottom-color;
            &::placeholder {
                @apply text-base;
                opacity: 0;
            }
            &:focus {
                &::placeholder {
                    opacity: 1;
                    @apply text-dark-400;
                }
            }
        }
    }

    &__agreement {
        display: block;
        width: 230px;
        margin-right: 32px;
        margin-top: 0;
        color: #767676;
        text-align: right;
        font-size: 10px;
        line-height: 1.45;
    }
}
.btn {
    position: relative;
    display: inline-block;
    height: 40px;
    padding: 0 30px;
    text-align: center;
    background-color: transparent;
    font-size: 10px;
    letter-spacing: .8px;
    line-height: 38px;
    text-transform: uppercase;
    outline: 0 !important;
    transition: .1s ease border-color, .4s ease background-color, .4s ease color;
    cursor: pointer;

    &--color-red {
        background-color: #d81d5c;
        color: #fff;
        border: 1px solid rgba(35,35,35,.4);

        &:hover,
        &:active,
        &:focus {
            color: #fff;
            border-color: #232323;
            background-color: #232323;
        }
    }
}
.js-swiper-form .b-form__success {
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 276px;
}

.b-form__success {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transform: scale(.7);
    transition: .35s ease all;
}

.b-form__hidden-text--hidden {
    opacity: 0;
    visibility: hidden;
    transform: scale(.7);
}

.b-form__success--active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

@screen sm {
    .modal {
        background: #f0ebdd;
        &__close {
            top: -1px;
            right: 6px;
        }

        .wrapper-modal-form {
            display: block;
            padding-top: 54%;
            padding-left: 10px;
            padding-right: 10px;
        }

        &__wrap {
            max-width: 100%;
        }

        &__logo {
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);

            img {
                width: 135px;
            }
            &--mobile {
                display: block;
            }
        }

        .b-text p {
            font-size: 12px;
        }

        .js-form-popup {
            margin-top: 24px;
        }

        .b-form-moving__row--end {
            align-items: flex-start;
        }

        .btn {
            padding: 0 18px;
            height: 32px;
            line-height: 30px;
        }
    }
}

@screen xs {
    .modal{
        &__wrap {
            margin-right: 0;
        }
    }
}

</style>
