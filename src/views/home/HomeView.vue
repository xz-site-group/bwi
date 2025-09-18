<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeDesc from '@/views/home/components/HomeDesc.vue'
</script>

<template>
    <BaseLayout>
        <HomeBanner class=" " >
            <HomeDesc></HomeDesc>
        </HomeBanner>
        <template v-slot:footer>
            <div></div>
        </template>
    </BaseLayout>
</template>
