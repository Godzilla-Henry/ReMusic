<template lang="pug">
q-layout(view='lHh Lpr fFf')
  //- Header
  HeaderBar.fixed

  //- SideBar
  SideBar
  
  //- Page Wrapper
  q-page-container.relative-position
    router-view

  //- Footer
  Footer.fixed(v-show="showFooter")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import eventBus from 'src/Utils/useEventBus';
//- Components
import HeaderBar from './header-bar/index.vue';
import SideBar from './side-bar/index.vue';
import Footer from './footer-player/index.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderBar,
    SideBar,
    Footer,
  },

  setup () {
    const showFooter = ref(false);

    onMounted(() => {
      eventBus.on('openPlayer', () => {
        showFooter.value = true;
      });
    });

    return {
      showFooter,
    }
  }
});
</script>

<style lang="scss">
.fixed{position: fixed;}
</style>

