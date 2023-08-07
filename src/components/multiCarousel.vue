<template lang="pug">
.flex.justify-between.items-center
    div
        .text-subtitle1 describe
        .title-1 List Title
    .flex.flex-center
        q-btn.q-mr-md(rounded outline color="grey" size="12px" label="More")
        q-btn.q-mr-xs(round outline color="grey" icon="arrow_back_ios" size="sm" @click="prev")
        q-btn(round outline color="grey" icon="arrow_forward_ios" size="sm" @click="next")
.carousel
    .inner(ref='inner' :style='innerStyles')
        q-card.card(v-for='(list) in chunkedArray' :key='list' flat)
            q-list
                q-item.q-my-sm(v-for='item in list' :key='item' clickable v-ripple)
                    q-item-section(avatar)
                        q-avatar(square color='grey-7' text-color='white') {{ item }}
                    q-item-section
                        q-item-label Song Title
                        q-item-label(caption lines='1') singer or group

                    q-item-section(side)
                        span 4:16
            
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import eventBus from 'src/Utils/useEventBus';

export default defineComponent({
    setup () {
        const cards = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        const innerStyles = ref({});
        const step = ref('');
        const transitioning = ref(false);
        const inner = ref<HTMLElement>();

        const setStep = () => {
            const innerWidth = inner.value?.scrollWidth!;
            const totalList = chunkedArray.value.length;
            step.value = `${innerWidth / totalList}px`
        }

        const next = () => {
            if (transitioning.value) return;
            transitioning.value = true;

            moveLeft();
            afterTransition(() => {
                const card = chunkedArray.value.shift();
                chunkedArray.value.push(card);
                resetTranslate();
                transitioning.value = false;
            })
        }

        const prev = () => {
            if (transitioning.value) return;
            transitioning.value = true;

            moveRight();
            afterTransition(() => {
                const card = chunkedArray.value.pop();
                chunkedArray.value.unshift(card);
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

        //- 組合List
        function chunkArray(arr: any, size: number) {
            const chunkCount = Math.ceil(arr.length / size);
            return Array.from({ length: chunkCount }, (_, index) =>
                arr.slice(index * size, index * size + size)
            );
        }
        const chunkedArray = ref([]) as any;
        chunkedArray.value = chunkArray(cards.value, 4);
        console.log(chunkedArray);


        onMounted(() => {
            setStep();
            resetTranslate();

            console.log(innerStyles.value);
        })
        
        return {
            chunkedArray,
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
            max-width: 450px;
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