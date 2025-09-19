<script setup lang="ts">

</script>

<template>
<div class="section-title relative">
    <div class="left relative">
        <slot></slot>
    </div>
    <div class="right relative">
    </div>
</div>
</template>

<style scoped>
.section-title {
    position: relative;
    display: flex;
    flex-direction: row;
}
.right {
    width: clamp(40px, 5.5vw, 220px); /* 响应式宽度 */
}
.right:after {
    content: '';
    position:  absolute;
    top: 0;
    left: -30px;
    width: clamp(10px, 5vw, 100px); /* 响应式宽度 */
    min-width: 10px;
    max-width: 100px;
    height: 100%;
    aspect-ratio: 1/4; /* 宽高比为1:2，即宽度是高度的一半 */
    background: #ff0000;
    transform: skewX(-15deg);
}
</style>
