<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__top">
                <ul class="footer__list">
                    <li>
                        <a href="tel:+74951804682" class="roistat-phone link-hover js-analytics-send">
                            +7 495 180 46 82
                        </a><br>

                        <a href="mailto:sale@sergeysudakov.ru" class="link-hover js-analytics-send">sale@sergeysudakov.ru</a>
                    </li>

                    <li>
                        <a href="https://sudakov.store/policy/" target="_blank" class="link-hover">Об обработке персональных данных</a>
                        <a href="https://sergeysudakov.ru/zaponki/offerta.html" class="link-hover" target="_blank">договор
                            оферты</a>
                    </li>
                </ul>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-item">©2013-2020 SUDAKOV Store</div>
                <div class="footer__bottom-item">
                    ИП Судаков Сергей Евгеньевич. ИНН 550505666359; ОГРНИП 311774617300067
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style scoped lang="scss">
.footer {
    .wrapper {
        max-width: 1340px;
        padding: 20px 110px 0;
        @media (max-width: 1024px) {
            padding: 20px 122px 0;
        }
        @media (max-width: 960px) {
            padding: 20px 0 0 90px;
        }
        @media (max-width: 640px) {
            padding: 0 0 0 16px;
        }


    }

    &__top {
        width: 100%;
        position: relative;
        margin-bottom: 16px;
    }

    &__bottom {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        padding: 27px 0;
        font-size: 12px;
        letter-spacing: .8px;
        text-align: left;
        color: #767676;

        &-item {
            width: calc(112px * 3);
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 500;
        @media only screen and (max-width: 1024px) {
            align-items: start;
        }

        & li {
            width: calc(112px * 3);
            list-style-type: none;

            & a {
                font-size: 11px;
                text-transform: uppercase;
                transition: all .3s ease;
            }
        }
    }
}

.link-hover {
    display: inline-block;
    position: relative;
    padding-bottom: 2px;

    &:before,
    &:after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 50%;
        height: 1px;
        background-color: rgba(35, 35, 35, .4);
        bottom: 0;
        transition: .4s ease all;
    }

    &:hover {
        &:before,
        &:after {
            width: 0;
        }
    }

    &:before {
        right: 0;
    }

    &:after {
        left: 0;
    }
}
</style>
