<template lang="pug">
q-layout(view='lhh Lpr lFf')
  //- Header
  headerBar

  //- SideBar
  sideBar
  
  //- Page Wrapper
  q-page-container
    router-view
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
//- Components
import headerBar from './header-bar/index.vue';
import sideBar from './side-bar/index.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    headerBar,
    sideBar,
  },

  setup () {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
    }
  }
});
</script>

