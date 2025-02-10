<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main bg-m_blue-100 lg:!mt-[115px] max-w-[900px]:!mt-[100px] mt-0 pt-10">
            <div class="about-home add_bg">
                <div class="container">
                    <div class="text-scroll">
                        <div class="text-white">
                            <p class="pt-8 font-medium" style="text-align: center">
                                <span style="font-size: 18pt">
                                    {{ $t('title64') }}
                                </span>
                            </p>
                            <p style="margin-top: -30px;">
                                <span class="font-medium"></span><br /> <br>
                                    {{ $t('title65') }}
                                <br /> <br>
                                    {{ $t('title68') }}
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects-content !mb-0 pb-10">
                <div class="container">
                    <strong class="global-title font-bold text-m_blue-100">
                        {{ $t('title70') }}
                    </strong>
                    <aside class="sidebar-news">
                        <!-- <router-link to="/news"
                            class="py-[10px] text-center mb-[30px] leading-[20px] rounded-full block font-normal hover:text-white text-white uppercase bg-m_red-100 hover:opacity-80 duration-300">
                            {{ $t('title71') }}<i
                                class="figure"></i></router-link>
                        <ul>
                            <NewsCard v-for="(item, index) in news" :key="item.id" :url="item.url" :title="item.name"
                                :date="item.date" :image="news_images[index]" />
                        </ul> -->
                    </aside>
                    <div class="projects-list">
                        <ul>
                            <li v-for="(item, index) in services.slice(0, 4)" :key="item.id">
                                <router-link :to="item.url" class="w-full h-full">
                                    <h2 class="title !pt-2">{{ item.name }}</h2>
                                    <img :src="service_images[index]" class="w-full h-full object-cover" />
                                    <div class="text">
                                        <span class="mark-link opacity-80">
                                            {{ $t('title72') }}
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                        <router-link to="/works"
                            class="py-2 px-10 rounded-[25px] min-w-[205px] table cursor-pointer mx-auto font-normal text-white text-center bg-m_red-100 hover:opacity-80 duration-300 hover:text-white">
                            {{ $t('title73') }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import WorkCard from '@/components/cards/Work.vue';
import NewsCard from '@/components/cards/News.vue';
import serviceData from '@/data/service-items.js'
import newsData from '@/data/news-items.js'
export default {
    name: 'Home',
    components: {
        Navbar,
        Header,
        Footer,
        WorkCard,
        NewsCard,
    },
    created() {
        this.services = serviceData[this.$i18n.locale]
        this.service_images = serviceData.imgs

        this.news = newsData[this.$i18n.locale]
        this.news_images = newsData.imgs

    },
    data() {
        return {
            isOpen: true,

            news: null,
            news_images: null,

            services: null,
            service_images: null
        }
    },
}
</script>