<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeDesc from '@/views/home/components/HomeDesc.vue'
import MultiStageEntryAnimation from '@/components/MultiStageEntryAnimation.vue'
</script>

<template>
    <div class="relative">
        <BaseLayout>
            <HomeBanner class=" " >
                <HomeDesc></HomeDesc>
            </HomeBanner>
            <template v-slot:footer>
                <div></div>
            </template>
        </BaseLayout>
        <MultiStageEntryAnimation v-if="false"></MultiStageEntryAnimation>
    </div>

</template>
