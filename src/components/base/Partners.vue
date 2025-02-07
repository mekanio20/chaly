<template>
    <swiper :modules="modules" :slidesPerView="slidesPerView" :breakpoints="breakpoints" spaceBetween="100" :autoplay="{ delay: 1000, disableOnInteraction: false, duration: 2000, }"
        class="w-full select-none flex items-center">
        <swiper-slide v-for="item in partners" :key="item.id">
            <div class="h-[70px]">
                <img class="w-full h-full object-contain lazyload" :src="item.img" :data-src="item.img" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import partners from '@/data/partners.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default {
    name: 'Partners',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            partners,
            modules: [Navigation, Autoplay],
            slidesPerView: 4,
            breakpoints: {
                200: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        };
    },
}
</script>