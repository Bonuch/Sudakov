<template>
    <section class='card'>
        <form method='post'>
            <h2 class='title'>Ваши качества темы «Дело жизни»</h2>
            <div class="wrap-text">
                <p>
                    Перед написанием синтеза
                    убедитесь что вы приняли
                    качества и ваш вектор
                    по <a href="#">технике принятия качеств</a>
                </p>
            </div>

            <label class="wrap-checkbox" for="learn-line2">
                <input type="checkbox" id="learn-line2" class="checkbox-black">
                <span class="span-checkbox"></span>

                <span class="label-checkbox">
                    Принял все качества темы
                </span>
            </label>
            <label class="wrap-checkbox" for="learn-line3">
                <input type="checkbox" id="learn-line3" class="checkbox-black">
                <span class="span-checkbox"></span>

                <span class="label-checkbox">
                    Принял вектор
                </span>
            </label>

            <button type='submit' class='btn card-action link-inline mb-2'>
                Отправить на проверку
            </button>

        </form>
    </section>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
    .card{
        padding: 16px 16px 32px 16px;

        .btn{
            margin: 16px 16px 8px 16px;
        }

        .wrap-checkbox{
            padding: 14px 16px;
            margin: 0;
        }
    }
</style>
