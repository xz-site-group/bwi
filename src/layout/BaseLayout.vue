<script setup lang="ts">
import CommonHeader from '@/layout/CommonHeader.vue'
import CommonFooter from '@/layout/CommonFooter.vue'
import { RouterView } from 'vue-router'
const props = defineProps({
    currentPath: {
        type: String,
        default: '',
    },
    isFlex: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <div class="base-layout" :class="{'base-layout--flex': isFlex}">
        <div class="base-layout__header w-full">
            <CommonHeader :static-route-path="props.currentPath"></CommonHeader>
        </div>
        <div class="base-layout__content w-full">
            <slot>
                <RouterView></RouterView>
            </slot>
        </div>
        <div class="base-layout__footer w-full">
            <slot name="footer">
                <CommonFooter></CommonFooter>
            </slot>
        </div>
    </div>
</template>

<style scoped>
.base-layout {

}
.base-layout--flex {
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
}
.base-layout__header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
}
.base-layout__content {
    flex: 1;

}
</style>
