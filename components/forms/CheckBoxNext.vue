<template>
    <div class="card">
            <label class="wrap-checkbox" for="learn-line">
                <input type="checkbox" id="learn-line" class="checkbox-black">
                <span class="span-checkbox"></span>

                <span class="label-checkbox">
                    Я изучил свою линию тем дело жизни
                </span>
            </label>
        <button type="button" class="btn card-action link-inline">
            Далее
        </button>
        <p class="short-desc">
            после этого вам откроется практика «Любовь к себе»
        </p>
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
        margin: 8px 12px 8px 16px;
    }
}
</style>
