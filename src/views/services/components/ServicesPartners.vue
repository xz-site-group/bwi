<script setup lang="ts">
import { ref } from 'vue'
import partnerWay from '@/assets/images/services/partner_logo_waypacific.png'
import partnerSup from '@/assets/images/services/partner_logo_superants.png'
import partnerAbc from '@/assets/images/services/partner_logo_abcprime.png'
import partnerArc from '@/assets/images/services/partner_logo_arctowers.png'

const partners = ref([
    {
        src: partnerWay,
    },
    {
        src: partnerSup,
    },
    {
        src: partnerAbc,
    },
    {
        src: partnerArc,
    },
])
</script>

<template>
    <section class="pt-2 pb-4 md:pt-6 md:pb-10 lg:pt-10 lg:pb-16 bg-[#DBDBDB]">
        <div class="container px-4 m-auto">
            <div class="text-center text-black text-2xl font-medium pt-4">{{ $t("services.partners") }}</div>
            <div class="flex flex-wrap justify-between md:flex-nowrap md:gap-0">
                <div class="w-1/2 md:w-auto p-4" v-for="(item, index) in partners" :key="index">
                    <img :src="item.src" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
