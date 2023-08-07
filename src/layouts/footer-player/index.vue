<template lang="pug">
q-footer(elevated)
    q-card
        q-linear-progress(:value="0.6" color="grey-6")
        q-card-section.row.items-center.no-wrap

            q-btn(flat round color="grey-10" size="lg" icon="fast_rewind")
            q-btn(flat round color="grey-10" size="xl" icon="pause")
            q-btn(flat round color="grey-10" size="lg" icon="fast_forward")
            .text-grey 3:15 / 4:30

            q-space

            q-img(
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
                spinner-color='white' 
                style='height: 50px; max-width: 50px'
            )
            div.q-mx-md
                .text-h6.text-weight-bold.text-grey Song Title 
                .text-grey singer or group name
            q-btn(flat round color="grey-6" size="md" icon="thumb_up")
            q-btn(flat round color="grey-6" size="md" icon="thumb_down")

            q-space

            q-btn(flat round color="grey-6" size="md" icon="volume_up")
            q-btn(flat round color="grey-6" size="md" icon="replay")
            q-btn(flat round color="grey-6" size="md" icon="shuffle")
            q-btn(
                flat round color="grey-10" size="lg" 
                :icon="expandPlayerView? 'expand_more': 'keyboard_arrow_up'" 
                @click.prevent="eventBus.emit('openPlayerView')"
            )
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import eventBus from 'src/Utils/useEventBus';
import { useGlobal } from 'src/stores';

export default defineComponent({
    setup () {
        const globalStore = useGlobal();
        const expandPlayerView = computed(() => globalStore.getExpand);

        return {
            eventBus,
            expandPlayerView,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>