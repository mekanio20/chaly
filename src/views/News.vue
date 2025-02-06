<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" title="АСГАРД-Сервис." href="../index.html" class="home"><span
                            property="name" itemprop="name">Главная</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%" title="Новости">
                        <span itemprop="name" property="name">
                            Новости
                        </span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">Новости</h1>
                <div class="projects-content works-content">
                    <div class="projects-list">
                        <ul>
                            <li v-for="(item, index) in news" :key="item.id">
                                <router-link :to="item.url" class="w-full h-full">
                                    <h2 class="title !pt-2">{{ item.name }}</h2>
                                    <img :src="news_images[index]" class="w-full h-full object-cover" />
                                    <div class="text">
                                        <span class="mark-link opacity-80">Подробнее</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
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
import newsData from '@/data/news-items.js'
export default {
    name: "News",
    components: {
        Navbar,
        Header,
        Footer,
        WorkCard
    },
    created() {
        this.news = newsData[this.$i18n.locale]
        this.news_images = newsData.imgs
    },
    data() {
        return {
            news: null,
            news_images: null
        }
    }
}
</script>