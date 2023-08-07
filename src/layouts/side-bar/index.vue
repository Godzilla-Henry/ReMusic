<!-- 
    Side Bar 
-->
<template lang="pug">
q-drawer(
    v-model="drawer"
    show-if-above 
    bordered
    :mini="isMini"
    :mini-width="65"
)
    q-scroll-area.fit
        //- Logo
        #logo
            q-img.logoImg(
                :src="logo"
                spinner-color="white"
                :class="{mini: isMini}"
            )
            h3(:class="{hide: isMini}") Music Dog
            q-btn.absolute(style='top: 18px; right: 10px;' :class="{hide: !isMobile}")(
                flat
                color='grey-6' 
                icon='first_page' 
                @click="globalStore.act_toggleDrawer()"
            )

        q-separator
        //- 功能清單
        q-list.rounded-borders.text-grey.q-pa-md
            q-item-label.q-pa-md(overline) Discover
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='cottage')
                q-item-section Home
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='trending_up')
                q-item-section Trends
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='headphones')
                q-item-section Library

            q-item-label.q-pa-md(overline) Your Collection
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='favorite')
                q-item-section Liked Songs
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='art_track')
                q-item-section Favorite Artist
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='playlist_add_check_circle')
                q-item-section Playlist

            q-item-label.q-pa-md(overline) Personal
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='settings')
                q-item-section Settings
            q-item(clickable v-ripple)
                q-item-section(avatar)
                    q-icon(name='help')
                q-item-section Help
    
    .q-mini-drawer-hide.absolute(style='bottom: 5%; right: 17px;')
        q-btn(
            dense round unelevated 
            color='grey-6' 
            icon='navigate_before' 
            @click='close'
        )
    .q-mini-drawer-only.absolute(style='bottom: 5%; left: 17px;')
        q-btn(
            dense round unelevated 
            color='grey-6' 
            icon='last_page' 
            size="12px"
            @click='isMini = false'
        )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useGlobal } from 'src/stores';
import { useQuasar } from 'quasar';
import logo from 'src/assets/logo.svg';

export default defineComponent({
    setup () {
        const globalStore = useGlobal();
        const drawer = computed(() => globalStore.getDrawer);
        const isMini = ref<boolean>(false);
        const $q = useQuasar();
        
        console.log($q.platform.is);

        //- 當前使用平台，裝置
        const isMobile = ref($q.platform.is.mobile!);
        onMounted(() => {
            if(isMobile.value){
                globalStore.act_setDrawer(false);
            }
        });
        //- Mobile 禁用 Mini
        const close = () => {
            isMini.value = isMobile.value? false: true;
            console.log(isMini.value);
        };

        return {
            drawer,
            isMini,
            isMobile,
            globalStore,
            close,
            logo,
        }
    }
})
</script>

<style lang="scss" scoped>
#logo{
    padding: 10px 5px;
    display: flex;
    align-items: center;
    .logoImg{
        width: 45px;
        height: 45px;
        margin: 0px 15px;
        transition: width 0.5s, height 0.5s;

        &.mini{
            width: 30px;
            height: 30px;
            margin-left: 10px;
        }
    }
    h3{
        margin: 0;
        font-size: 25px;
        font-weight: 800;
        color: $grey;
    }
}

.hide{
    display: none;
}
</style>