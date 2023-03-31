import Vue from "vue";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
} from "vee-validate";
import {
    required,
    email,
    numeric,
    length,
} from "vee-validate/dist/rules";

import ru from "vee-validate/dist/locale/ru.json";

extend("required", required);
extend("length", length);
extend("numeric", numeric);
extend("email", email);
extend("phone", {
    validate: (value) => {
        if (!value) return true;
        const regex = /^[\+7]7? [(]?[0-9]{3}[)]? [0-9]{3}[-\s\.]?[0-9]{2}[-\s\.][0-9]{2}$/;
        return Boolean(value.match(regex));
    },
});

localize({
    ru: {
        messages: {
            required: "Обязательно для заполнения",
            length: "Заполните все поля",
            email: "Введите почту",
            phone: "Введите телефон",
        }
    },
});

localize("ru");

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
