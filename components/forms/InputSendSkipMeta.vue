<template>
    <div class="card">
        <form>
            <p class="input-title">
                Напишите силу качества минус
            </p>
            <div class="input-wrap">
                <input type="text" class="input" placeholder="Текст подсказка">
            </div>
            <button type="button" class="btn card-action link-inline">
                Отправить
            </button>
            <p class="short-desc">
                после этого вам откроется описание
                качества плюс
            </p>
            <button type="submit" class="btn card-action link-inline btn-skip">
                Пропустить метакачество
            </button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
.card{
    padding: 16px 16px 24px 16px;

    .input-title{
        margin: 0 0 0 16px;
    }

    .btn{
        margin: 16px 16px 8px 16px;

        &-skip{
            margin: 16px;
        }
    }
}
</style>
