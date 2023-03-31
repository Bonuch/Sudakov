<template>
    <div class="card">
        <form>
            <div class="scrollbar" id="style-1">
                <div class="force-overflow"></div>
            </div>
            <textarea class="textarea" placeholder="Расскажите о себе и о своих целях на курс">
            </textarea>
            <button type="button" class="btn card-action link-inline">
                Отправить на проверку
            </button>
            <p class="short-desc">
                после этого вам откроется описание
                качества плюс
            </p>
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

    .btn{
        margin: 24px 16px 8px 16px;
    }
}
</style>
