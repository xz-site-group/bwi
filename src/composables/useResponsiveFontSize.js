// src/composables/useResponsiveFontSize.js
import { ref,onMounted, onUnmounted } from 'vue';

export function useResponsiveFontSize(min, max, minScreenWidth = 375, maxScreenWidth = 1920) {
    // 定义响应式变量
    const windowInnerWidth = ref(window.innerWidth);
    const intermediateVW = ref(0);

    // 计算中间的vw值
    const calculateVW = () => {
        const fontSizeRange = max - min;
        const screenWidthRange = maxScreenWidth - minScreenWidth;
        intermediateVW.value = (fontSizeRange / screenWidthRange) * 100;

        if (windowInnerWidth.value >= maxScreenWidth) {
            intermediateVW.value = max;
        }
        if (windowInnerWidth.value <= minScreenWidth ) {
            intermediateVW.value = min;
        }
    };

    // 初始化计算
    calculateVW();
    const handleResize = () => {
        windowInnerWidth.value = window.innerWidth;
        calculateVW();
    };
    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });



    // 返回组装好的clamp字符串
    const fontSizeClamp = `clamp(${min}px, ${intermediateVW.value}vw, ${max}px)`;
    const textSizeClamp = `text-[clamp(${min}px,  ${intermediateVW.value*10}vw, ${max}px)]`
    return {
        fontSizeClamp,
        textSizeClamp
    };
}
