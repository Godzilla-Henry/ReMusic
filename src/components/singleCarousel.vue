<template lang="pug">
.row.justify-between.items-center
    .title-1 List Title
    .row.justify-center.items-center
        q-btn.q-mr-md(rounded outline color="grey" size="12px" label="More")
        q-btn.q-mr-xs(round outline color="grey" icon="arrow_back_ios" size="sm" @click="prev")
        q-btn(round outline color="grey" icon="arrow_forward_ios" size="sm" @click="next")
.carousel
    .inner(ref='inner' :style='innerStyles')
        q-card.card(v-for='card in cards' :key='card' flat)
            .albumImg
                q-img.img.rounded-borders(
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
                    spinner-color="white"
                    style="z-index: -1;"
                )
                .info
                    q-btn(flat round icon="more_vert")
                .player(
                    @mouseover="isPlayerHover = true"
                    @mouseout="isPlayerHover = false"
                )
                    q-btn(round color="grey" icon="play_arrow" :size="isPlayerHover? '16px': 'md'" @click="eventBus.emit('openPlayer')")
            q-card-section
                .text-h6 Song Title {{ card }}
                .text-subtitle2 singer or group name
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import eventBus from 'src/Utils/useEventBus';

export default defineComponent({
    setup () {
        const cards = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const innerStyles = ref({});
        const step = ref('');
        const transitioning = ref(false);
        const inner = ref<HTMLElement>();

        const setStep = () => {
            const innerWidth = inner.value?.scrollWidth!;
            const totalCards = cards.value.length;
            step.value = `${innerWidth / totalCards}px`
        }

        const next = () => {
            if (transitioning.value) return;
            transitioning.value = true;

            moveLeft();
            afterTransition(() => {
                const card = cards.value.shift() as number;
                cards.value.push(card);
                resetTranslate();
                transitioning.value = false;
            })
        }

        const prev = () => {
            if (transitioning.value) return;
            transitioning.value = true;

            moveRight();
            afterTransition(() => {
                const card = cards.value.pop() as number;
                cards.value.unshift(card);
                resetTranslate();
                transitioning.value = false;
            })
        }

        const moveLeft = () => {
            innerStyles.value = {
                transform: `translateX(-${step.value})
                            translateX(-${step.value})`
            }
        }

        const moveRight = () => {
            innerStyles.value = {
                transform: `translateX(${step.value})
                            translateX(-${step.value})`
            }
        }

        const afterTransition = (callback:any) => {
            const listener = () => {
                callback();
                inner.value?.removeEventListener('transitionend', listener);
            }
            inner.value?.addEventListener('transitionend', listener);
        }

        const resetTranslate = () => {
            innerStyles.value = {
                transition: 'none',
                transform: `translateX(0)`
            }
        }

        const isPlayerHover = ref<boolean>(false);

        onMounted(() => {
            setStep();
            resetTranslate();
        })
        
        return {
            cards,
            inner,
            innerStyles,
            isPlayerHover,
            eventBus,
            next,
            prev,
        }
    }
})
</script>

<style scoped>
.carousel {
    width: 100%;
    overflow: hidden;
    .inner {
        transition: transform 0.2s;
        white-space: nowrap;
        display: flex;
        .card{
            width: 100%;
            max-width: 250px;
            margin-right: 25px;
            background-color: transparent;
            color: grey-9;
            .albumImg{
                position: relative;
                .img{
                    max-width: 250px;
                }
                &:hover{ box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3); }
                &:hover .info,
                &:hover .player{
                    opacity: 1;
                }
                .info{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    opacity: 0;
                }
                .player{
                    position: absolute;
                    right: 15px;
                    bottom: 15px;
                    opacity: 0;
                }
            }
        }
    }
}
</style>