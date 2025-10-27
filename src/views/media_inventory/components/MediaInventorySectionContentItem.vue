<script setup>
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(34, 60)
const { fontSizeClamp: subTitleTextSize } = useResponsiveFontSize(20, 36)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(13, 28)
</script>

<template>
    <div class="mod-1 p-[1px] pt-2 md:pt-9">
        <div class="img-wrap md:img-wrap-md flex flex-col ">
            <slot name="img">
                <img :src="adImg01" alt="" />
            </slot>
        </div>
        <div class="px-4 ">
            <div class="title font-bold" :style="{fontSize:titleTextSize}">
                <slot name="title"></slot>
            </div>
            <div class="font-medium leading-[1]" :style="{fontSize:subTitleTextSize}">
                <slot name="sub-title"></slot>
            </div>
            <div :style="{fontSize:descTextSize}">
                <slot name="desc"></slot>
            </div>
            <div class="pt-6 lg:pt-12" :style="{fontSize:descTextSize}">
                <slot name="sub-desc"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped >
.img-wrap {
    width: 100%; /* 或者设置为固定宽度 */
    overflow: hidden; /* 防止内容溢出 */
}
.img-wrap img {
    width: 100%; /* 或者设置为固定宽度 */
    height: 100%; /* 确保高度不会超过宽度 */
    overflow: hidden; /* 防止内容溢出 */
}
@media (min-width: 768px) {
    .img-wrap {
        width: calc( ((100vw - 4px - 18px) / 3) );
        height: calc( ((100vw - 4px - 18px) / 3)  );
    }

}
</style>
