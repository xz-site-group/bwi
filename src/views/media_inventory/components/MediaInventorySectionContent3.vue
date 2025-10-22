<script setup>
import MediaInventorySectionContentItem from '@/views/media_inventory/components/MediaInventorySectionContentItem.vue'
import adImg01 from '@/assets/images/media_inventory/ad_img_07.webp'
import adImg02 from '@/assets/images/media_inventory/ad_img_08.webp'
import adImg03 from '@/assets/images/media_inventory/ad_img_09.webp'
</script>

<template>
    <section class="relative">
        <div class="md:flex gap-x-0.5">
            <!--   start 1         -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg01" alt="" />
                </template>
                <template v-slot:title>Photo Frame</template>
                <template v-slot:sub-title> @ Entry Point 1F Elevator Messaging</template>
                <template v-slot:desc>  Captive Elevator Audience for Brand </template>
                <template v-slot:sub-desc>
                    <div>Location: ARC Towers Entry Point</div>
                    <div>Device Size: 0.4m (H) x 0.7m (W)</div>
                    <div>Screen Size: 32 inches ( 1080px X 1920px)</div>
                    <div>2 sets available</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--     end 1       -->
            <!--     start 2 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg02" alt="" />
                </template>
                <template v-slot:title>HD Display</template>
                <template v-slot:sub-title>@ 1F Entrance Lobby</template>
                <template v-slot:desc> Premium 75” HD Screen for High-Impact Lobby Ads</template>
                <template v-slot:sub-desc>
                    <div>Location: Main Entry Point of ARC Towers</div>
                    <div>Screen Size: 75 inches ( 1080px X 1920px)</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 2 -->
            <!--  start 3 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg03" alt="" />
                </template>
                <template v-slot:title>In App Ads </template>
                <template v-slot:sub-title> @ ARC Mall App ABC Prime App</template>
                <template v-slot:desc>Direct Digital Reach via Property and Mall Apps</template>
                <template v-slot:sub-desc>
                    <div>Location: in App</div>
                    <div>Device: Web & Mobile</div>
                    <div>Screen: 9:16 & 16:9，Customize banner</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 3   -->
        </div>
    </section>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover; /* 保证图片覆盖整个容器 */
}
</style>
