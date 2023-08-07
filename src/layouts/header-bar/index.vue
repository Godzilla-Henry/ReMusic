<!-- 
    Header Bar 
-->
<template lang="pug">
q-header(elevated)
    q-toolbar.bg-white.text-grey
        q-btn(
            flat dense round 
            :icon='drawer? "first_page" : "last_page"' 
            aria-label='Menu'
            @click="globalStore.act_toggleDrawer()"
        )
        q-space
        searchBar
        q-separator.q-mx-md(color="grey" inset vertical)
        q-btn.q-mr-md(flat round dense icon='light_mode' size="12px")
        q-btn.q-mr-md(flat round dense icon='notifications' size="12px")
        q-avatar(size="30px")
            img(src='https://www.poaipets.com.tw/wp-content/uploads/2021/03/%E5%89%96%E6%9E%90%E7%8B%97%E7%8B%97%E5%B8%B8%E8%A6%8B%E7%96%BE%E7%97%85.jpg')
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useGlobal } from 'src/stores';

//- Components
import searchBar from './components/searchBar.vue';

export default defineComponent({
    components:{
        searchBar
    },
    setup () {
        const globalStore = useGlobal();
        const drawer = computed(() => globalStore.getDrawer);

        return {
            globalStore,
            drawer,
        }
    }
})
</script>
