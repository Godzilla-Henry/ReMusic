<!-- 
    Search Bar 
-->
<template lang="pug">
.input-box(:class="{open : isOpen}")
    input(type='text' placeholder='Search...')
    span.search
        q-icon.search-icon(name="search" size="22px" @click="isOpen = true")
    q-icon.close-icon(name="close" size="22px"  @click="isOpen = false")
</template>

<script lang="ts">  
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    setup(){
        const isOpen = ref<boolean>(false);
        return {
            isOpen,
        }
    }
})
</script>

<style lang="scss" scoped>
.input-box {
    position: relative;
    width: 100%;
    max-width: 60px;
    height: 32px;
    // background-color: #fff;
    background-color: transparent;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;

    input {
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        opacity: 0;
        color: $grey;
        padding: 0 15px;
        border: none;
        border-radius: 15px;
        outline: none;
        transition: all 0.5s ease-in-out;
    }

    .search {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .search-icon {
            font-size: 26px;
            color: $grey;
        }
    }

    .close-icon {
        position: absolute;
        top: 50%;
        right: 0px;
        font-size: 30px;
        color: $grey;
        padding: 5px;
        transform: translateY(-50%);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        pointer-events: none;
        opacity: 0;
    }

    &.open {
        max-width: 350px;
        border: 1px solid $grey;
        input {
            padding: 0 15px 0 65px;
            opacity: 1;
        }

        .search {
            .search-icon {
                font-size: 30px;
                color: $grey;
            }
        }

        .close-icon {
            transform: translateY(-50%) rotate(180deg);
            pointer-events: auto;
            opacity: 1;
        }

    }
}
</style>