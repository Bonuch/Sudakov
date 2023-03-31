import Inputmask from 'inputmask';

jQuery(function($) {
    setPhoneMask('.js-phone-masked');
    setBirthTimeMask('.js-input-birth-time');
    onSubmitForm('.js-form');

    // functions
    function setPhoneMask(selector) {
        const inputs = $(selector);

        if (inputs) {
            const im = new Inputmask('+7 999 999-99-99', {
                showMaskOnHover: false,
            });

            im.mask(selector);
        }
    }

    function setBirthTimeMask(selector) {
        const inputs = $(selector);

        if (inputs) {
            const im = new Inputmask('99:99', {
                showMaskOnHover: false,
            });

            im.mask(selector);
        }
    }

    function onSubmitForm(form) {
        const $form = $(form);

        $form.submit(function(e) {
            e.preventDefault();
            const $this = $(this);

            const ajaxUrl = 'https://sudakov.store/laravel-api/api/order/';
            const landingName = 'Космос';
            const USER_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '1' : '0';
            const userForm = $this.find('input[name=USER_FORM]').val(); // что это была за форма (от какого товара)
            const userName = $this.find('input[name=USER_NAME]').val(); // имя и знак
            const userPhone = $this.find('input[name=USER_PHONE]').val(); // телефон
            const userBirth = $this.find('input[name=USER_BIRTH]').val(); // дата рождения
            const userBirthTime = $this.find('input[name=USER_BIRTH_TIME]').val(); // время рождения
            const userPlace = $this.find('input[name=USER_PLACE]').val(); // место рождения
            const userComment = `Дата и время рождения: ${userBirth} ${userBirthTime} ${userPlace}`; // все остальные поля

            jQuery.ajax({
                type: 'POST',
                url: ajaxUrl,
                data: {
                    USER_MOBILE: USER_MOBILE,
                    USER_FORM: userForm,
                    USER_NAME: userName,
                    USER_PHONE: userPhone,
                    USER_COMMENT: userComment,
                    LANDING_NAME: landingName,
                },
                dataType: 'json',
            }).done(function(json) {
                $this.addClass('modal-form--success');
            }).fail(function(ex) {
                $this.addClass('modal-form--error');
            });

            return false;
        });
    }
});
