<script setup>
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: firstTextSize } = useResponsiveFontSize(128, 321)
const { fontSizeClamp: TwoTextSize } = useResponsiveFontSize(26, 66)
const { fontSizeClamp: contentTextSize } = useResponsiveFontSize(13, 32)
</script>

<template>
    <section class="pt-2 pb-4 md:pt-6 md:pb-10 lg:pt-10 lg:pb-16">
        <div class="container px-4 m-auto">
            <div class="content flex flex-col md:items-center md:justify-between md:flex-row">
                <!--      start         title-->
                <div class="services-section--title flex-1 relative">
                    <div
                        class="text-[#DBDBDB] font-bold leading-[1]"
                        :style="{
                            fontSize: firstTextSize,
                        }"
                    >
                        <slot name="decorative-number"></slot>
                    </div>
                    <div
                        class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 font-bold"
                        :style="{
                            fontSize: TwoTextSize,
                        }"
                    >
                        <slot name="title">
                            <div>Media Leasing</div>
                            <div>& Representation</div>
                        </slot>
                    </div>
                </div>
                <!--       end title         -->
                <!--   content -->
                <div class="services-section--content flex-1" :style="{
                            fontSize: contentTextSize,
                        }">
                    <slot></slot>
                </div>
                <!--  end  content -->
            </div>
        </div>
    </section>
</template>

<style scoped></style>
