<template>
    <swiper :navigation="true" :modules="modules" :slidesPerView="5" spaceBetween="100" loop="true"
        class="select-none flex items-center">
        <swiper-slide v-for="item in partners" :key="item.id">
            <div class="w-[150px] h-[100px]">
                <img class="w-full h-full object-contain lazyload" :src="item.img" :data-src="item.img" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import partners from '@/data/partners.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
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
            modules: [Navigation],
            partners
        };
    },
}
</script>