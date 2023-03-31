<template>
    <div class="front-main wrapper-680">
        <section class="section">

            <h1 class="dividing-component">Тип 1</h1>
            <Card>
                <template v-slot:buttons>
                    <button type="button" class="btn card-action link-inline">
                        Читать
                    </button>
                    <button type="button" class="btn card-action link-inline">
                        Слушать
                    </button>
                </template>
            </Card>

            <h1 class="dividing-component">Тип 2</h1>
            <Next/>

            <h1 class="dividing-component">Тип 3</h1>
            <Button/>

            <h1 class="dividing-component">Тип 4</h1>
            <CheckBoxNext/>

            <h1 class="dividing-component">Тип 5</h1>
            <InputSend/>

            <h1 class="dividing-component">Тип 6</h1>
            <InputSendSkipMeta/>

            <h1 class="dividing-component">Тип 7</h1>
            <TextareaSend/>

            <h1 class="dividing-component">Тип 8</h1>
            <TextareaCheck/>

            <h1 class="dividing-component">Тип 9</h1>
            <Love/>

            <h1 class="dividing-component">Тип 10</h1>
            <Header/>

            <h1 class="dividing-component">Тип 11</h1>
            <Card>
                <template v-slot:buttons>
                    <button type="button" class="btn card-action link-inline">
                        Читать
                    </button>
                    <button type="button" class="btn card-action link-inline">
                        Слушать
                    </button>
                    <button type="button" class="btn card-action link-inline">
                        Техника принятия
                    </button>
                </template>
            </Card>

            <h1 class="dividing-component">Тип 12</h1>
            <YourQuality/>

<!--            <section class="section p-4">-->
<!--                <h2 class="title">Введите ваши данные</h2>-->
<!--                <BodygraphAuthForm/>-->
<!--            </section>-->

<!--            <Instructions-->
<!--                v-if="formattedGraph"-->
<!--                :personality='formattedGraph.personality'-->
<!--                :relations='formattedGraph.relations'-->
<!--                :money='formattedGraph.money'-->
<!--            />-->



<!--            <form method="post" class="video-form">-->
<!--                <label for="secret1" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret1" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется возможность<br>-->
<!--                    получить инструкцию-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
        </section>



<!--        <section class="section">-->


<!--            <form method="post" class="video-form">-->
<!--                <label for="secret2" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret2" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание важности<br>-->
<!--                    гармоничного отношение к себе-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border-left border-right border-bottom card-gray"-->
<!--                title="Любовь к себе"-->
<!--                subtitle="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret3" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret3" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание важности<br>-->
<!--                    гармоничного отношение к себе-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <Love />-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border-bottom border-left border-right card-gray"-->
<!--                title="Техника благодарности"-->
<!--                subtitle="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret4" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret4" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание важности<br>-->
<!--                    гармоничного отношение к себе-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <form method="post" class="video-form">-->
<!--                <h2 class="title">-->
<!--                    Задачи?<br>-->
<!--                    Зачем здесь?<br>-->
<!--                    Твой главный запрос?-->
<!--                </h2>-->
<!--                <textarea-->
<!--                    name="task"-->
<!--                    class="textarea textarea-gray video-form-input input-shadow"-->
<!--                    placeholder="знакомство"-->
<!--                    required-->
<!--                ></textarea>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание важности<br>-->
<!--                    гармоничного отношение к себе-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border-bottom border-left border-right card-black"-->
<!--                title="пример сферы и линии"-->
<!--                desc="<p>пример сферы и линии</p><p>пример синтеза</p><p>о принятии</p><p style='margin-top: 18px;'>+ доп ключи</p>"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret5" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret5" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание<br>-->
<!--                    вашего генного ключа темы дела жизни-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <GenKey/>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border-bottom border-left border-right card-gray"-->
<!--                title="Техника принятия ключей"-->
<!--                subtitle="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret6" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret6" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание линий<br>-->
<!--                    темы дела жизни-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <Lines-->
<!--            title="Линии темы<br> дела жизни"-->
<!--            desc="<p>Описание</p>"-->
<!--            advanced="<p>Описание моей линии выделено</p>"-->
<!--            :checkboxes="linesCheckboxes"-->
<!--        />-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border border-t-0 card-gray"-->
<!--                title="Техника принятия линий"-->
<!--                desc="Описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret8" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret8" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется задание<br>-->
<!--                    «Синтез темы дело жизни»-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <Lines-->
<!--            title="Напишите синтез своей первой сферы"-->
<!--            advanced="-->
<!--            <p>-->
<!--                Перед написанием синтеза убедитесь что вы приняли ключ по&nbsp;<a href='#' class='link-inline'>технике принятия ключи</a>-->
<!--                и вашу линию-->
<!--                по&nbsp;<a href='#' class='link-inline'>технике принятия линии</a>-->
<!--                </p>-->
<!--            "-->
<!--            :checkboxes="sintezCheckboxes"-->
<!--            submit-text="перейти к написанию синтеза"-->
<!--        />-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border border-t-0 card-gray"-->
<!--                title="Что дальше?"-->
<!--                desc="<p>О домашнем задании</p><p>Об отслеживании состояний</p><p>и отчетах в чат</p>"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret9" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret9" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание<br>-->
<!--                    взаимосвязи наших качеств и качеств<br>-->
<!--                    других людей-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border border-t-0"-->
<!--                title="Взаимосвязь наших качеств и качеств других людей"-->
<!--                desc="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret10" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret10" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется описание<br>-->
<!--                    техники принятия качеств-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border border-t-0 card-gray"-->
<!--                title="Техника принятия качеств"-->
<!--                desc="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret11" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret11" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется вторая техника<br>-->
<!--                    благодарности-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <section class="section">-->
<!--            <Card-->
<!--                class="border border-t-0 card-gray"-->
<!--                title="Техника благодарности 2"-->
<!--                desc="описание"-->
<!--            />-->
<!--            <form method="post" class="video-form">-->
<!--                <label for="secret12" class="label text-lg">Введи секретное слово из видео</label>-->
<!--                <input id="secret12" type="text" name="secret" class="input input-shadow video-form-input" required>-->
<!--                <p class="text-gray-300">-->
<!--                    после этого вам откроется тема эволюции-->
<!--                </p>-->
<!--                <button type="submit" class="btn card-action link-inline">отправить</button>-->
<!--            </form>-->
<!--        </section>-->

<!--        <Instructions-->
<!--            :personality='personality'-->
<!--            :relations='relations'-->
<!--            :money='money'-->
<!--        />-->
    </div>
</template>

<script>
    import Card from '@/components/base/Card';
    import Next from '@/components/base/Next';
    import Button from '@/components/base/Button';
    import CheckBoxNext from '@/components/forms/CheckBoxNext';
    import InputSend from '@/components/forms/InputSend';
    import InputSendSkipMeta from '@/components/forms/InputSendSkipMeta';
    import TextareaSend from '@/components/forms/TextareaSend';
    import TextareaCheck from '@/components/forms/TextareaCheck';
    import Love from '@/components/forms/Love';
    import YourQuality from '@/components/forms/YourQuality';
    import BodygraphAuthForm from '@/components/forms/BodygraphAuthForm';
    import GenKey from '@/components/forms/GenKey';
    import Lines from '@/components/forms/Lines';
    import Instructions from '@/components/front/instruction/Instructions';
    import Header from "@/components/base/Header";
    import {mapGetters} from "vuex";

    export default {
        name: 'index',
        components: {
            Header, Card, Next, Button, CheckBoxNext, InputSend, InputSendSkipMeta, TextareaSend, TextareaCheck, Love, YourQuality, Instructions, Lines, GenKey, BodygraphAuthForm
        },
        data() {
            return {
                linesCheckboxes: [
                    {
                        label: "- Я изучил свою линию темы дело жизни",
                        value: false,
                    },
                ],
                sintezCheckboxes: [
                    {
                        label: "— принял ключ",
                        value: false,
                    },
                    {
                        label: "— принял линию",
                        value: false,
                    },
                ],
                personality: [ // TODO remove
                    {
                        id: 1,
                        title1: "Дело жизни",
                        title2: "Идеализм",
                        title3: "Затмение",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни»<br> после того как вы пройдете урок<br> и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 2,
                        title1: "Эволюция",
                        title2: "Проницательность",
                        title3: "Тщеславие",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 3,
                        title1: "Энергия",
                        title2: "Удовольствие",
                        title3: "Серъезность",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 4,
                        title1: "Цель",
                        title2: "Принятие",
                        title3: "Ограниченость",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                ],
                relations: [
                    {
                        id: 1,
                        title1: "Дело жизни",
                        title2: "Идеализм",
                        title3: "Затмение",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 2,
                        title1: "Эволюция",
                        title2: "Проницательность",
                        title3: "Тщеславие",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 3,
                        title1: "Энергия",
                        title2: "Удовольствие",
                        title3: "Серъезность",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 4,
                        title1: "Цель",
                        title2: "Принятие",
                        title3: "Ограниченость",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                ],
                money: [
                    {
                        id: 1,
                        title1: "Дело жизни",
                        title2: "Идеализм",
                        title3: "Затмение",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 2,
                        title1: "Эволюция",
                        title2: "Проницательность",
                        title3: "Тщеславие",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 3,
                        title1: "Энергия",
                        title2: "Удовольствие",
                        title3: "Серъезность",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                    {
                        id: 4,
                        title1: "Цель",
                        title2: "Принятие",
                        title3: "Ограниченость",
                        info: {
                            title: "Синтез",
                            desc: "<p>здесь появится описание вашего «дела жизни» после того как вы пройдете урок и опишите свой синтез</p>",
                            qualities: [
                                {
                                    id: 1,
                                    icon: "+",
                                    title: "идеализм",
                                },
                                {
                                    id: 2,
                                    icon: "&minus;",
                                    title: "затмение",
                                },
                                // {
                                //     id: 3,
                                //     icon: "",
                                //     title: "свет",
                                // },
                            ],
                            vectors: [
                                {
                                    id: 1,
                                    icon: "",
                                    title: "учитель",
                                },
                            ],
                        }
                    },
                ],
            };
        },
        computed: {
            ...mapGetters({
                bodygraph: 'bodygraph/getBodyGraph'
            }),
            formattedGraph() {
                const personality = [];
                const relations = [];
                const money = [];

                if (!this.bodygraph) {
                    return null;
                }
                for (const item of this.bodygraph) {
                    if (item.theme.group === '1') {
                        personality.push(item)
                    } else if (item.theme.group === '2') {
                        relations.push(item)
                    } else if (item.theme.group === '3') {
                        money.push(item)
                    }
                }
                return {
                    personality,
                    relations,
                    money
                }
            }
        },
    };
</script>

<style scoped></style>
