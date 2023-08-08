<template lang="pug">
.relative-position(ref="el")
    .container(:class="{hidden: expandPlayerView}")
        .row
            .col.q-px-xl.q-pt-md
                q-chip(square size="16px" color='grey-6' text-color='white') catergory
                q-chip(square size="16px" color='grey-6' text-color='white') catergory
                q-chip(square size="16px" color='grey-6' text-color='white') catergory
                q-chip(square size="16px" color='grey-6' text-color='white') catergory
                q-chip(square size="16px" color='grey-6' text-color='white') catergory
        .row 
            .col.q-px-xl.q-py-lg
                multiCarousel
        .row
            .col.q-px-xl.q-py-lg
                singleCarousel
        .row
            .col.q-px-xl.q-py-lg
                singleCarousel
        .row
            .col.q-px-xl.q-py-lg
                singleCarousel
    .absolute.full-width.playerView(:class="{expand: expandPlayerView}")
        .row.fit
            .col.col-md-6
                .flex.flex-center.fit
                    q-img.img.rounded-borders(
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
                        spinner-color="white"
                        style="height: 400px; max-width: 400px"
                    )

            .col.col-md-6
                .flex.flex-center.fit
                    div.playerViewContent
                        q-tabs.text-grey(v-model='tab' dense active-color='primary' indicator-color='primary' align='justify' narrow-indicator)
                            q-tab(name='Next' label='Next')
                            q-tab(name='Lyrics' label='Lyrics')
                            q-tab(name='Others' label='Others')
                        q-separator
                        q-tab-panels.playerViewPanel(v-model='tab' animated)
                            q-tab-panel(name='Next')
                                .flex.justify-between.items-center
                                    div
                                        span Player List
                                        .text-h6 List Name
                                    q-btn(outline rounded color="grey-9" icon="add" label="Save")
                                q-list
                                    q-item.q-my-sm(v-for='contact in contacts' :key='contact.id' clickable v-ripple)
                                        q-item-section(avatar)
                                            q-avatar(square color='grey-7' text-color='white') {{ contact.letter }}
                                        q-item-section
                                            q-item-label {{ contact.name }}
                                            q-item-label(caption lines='1') {{ contact.singer }}

                                        q-item-section(side)
                                            span 4:16
                                    
                            q-tab-panel(name='Lyrics')
                                pre.
                                    I found a love, for me
                                    Darling, just dive right in and follow my lead
                                    Well, I found a girl, beautiful and sweet
                                    Oh, I never knew you were the someone waiting for me
                                    'Cause we were just kids when we fell in love
                                    Not knowing what it was
                                    I will not give you up this time
                                    But darling, just kiss me slow
                                    Your heart is all I own
                                    And in your eyes, you're holding mine
                                    Baby, I'm dancing in the dark
                                    With you between my arms
                                    Barefoot on the grass
                                    Listening to our favourite song
                                    When you said you looked a mess
                                    I whispered underneath my breath
                                    But you heard it
                                    Darling, you look perfect tonight
                                    Well, I found a woman, stronger than anyone I know
                                    She shares my dreams, I hope that someday I'll share her home
                                    I found a lover, to carry more than just my secrets
                                    To carry love, to carry children of our own
                                    We are still kids, but we're so in love
                                    Fighting against all odds
                                    I know we'll be alright this time
                                    Darling, just hold my hand
                                    Be my girl, I'll be your man
                                    I see my future in your eyes
                                    Baby, I'm dancing in the dark
                                    With you between my arms
                                    Barefoot on the grass
                                    Listening to our favorite song
                                    When I saw you in that dress, looking so beautiful
                                    I don't deserve this
                                    Darling, you look perfect tonight
                                    Baby, I'm dancing in the dark
                                    With you between my arms
                                    Barefoot on the grass
                                    Listening to our favorite song
                                    I have faith in what I see
                                    Now I know I have met an angel in person
                                    And she looks perfect
                                    I don't deserve this
                                    You look perfect tonight
                                
                                
                            q-tab-panel(name='Others')
                                .row
                                    .col.q-my-lg
                                        multiCarousel
                                .row
                                    .col.q-my-lg
                                        singleCarousel
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import singleCarousel from 'src/components/singleCarousel.vue';
import multiCarousel from 'src/components/multiCarousel.vue';
import eventBus from 'src/Utils/useEventBus';
import { useGlobal } from 'src/stores';

export default defineComponent({
    components:{
        singleCarousel,
        multiCarousel,
    },
    setup () {
        const globalStore = useGlobal();
        const expandPlayerView = computed(() => globalStore.getExpand);

        const tab = ref('Next');
        //- 1
        const contacts = ref([ 
            {
                id: 1,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 2,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 3,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 4,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 5,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 6,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            {
                id: 7,
                name: 'SongName',
                singer: 'singerName',
                letter: 'H'
            },
            
        ]);

        onMounted(() => {
            eventBus.on('openPlayerView', () => {
                globalStore.act_toggleExpand();
            });
            
        });

        return {
            expandPlayerView,
            tab,
            contacts,
        }
    }
})
</script>

<style scoped>
.playerView{
    background: #ffffff;
    height: calc(100vh - 108px - 50px);
    top: 0px;
    left: 0px;
    display: none;
    transform: translateY(100%);

    &.expand{
        display: block;
        /* 動畫 */
        animation-name: slideInAnimation;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards; /* 保持動畫結束狀態 */
    }

    .playerViewContent{
        width: 70%;
        height: 70%;
        .playerViewPanel{
            max-height: 500px;
            overflow-y: scroll;
        }
    }
}

/* 定义动画关键帧 */
@keyframes slideInAnimation {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>