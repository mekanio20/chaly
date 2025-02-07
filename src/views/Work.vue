<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" href="/" class="home"><span
                            property="name" itemprop="name">{{ $t('title1') }}</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                        :title="$t('title70')">
                        <span itemprop="name" property="name">{{ $t('title70') }}</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">-{{ $t('title70') }}</h1>
                <div class="projects-content">
                    <div class="projects-list">
                        <ul>
                            <li v-for="(item, index) in services" :key="item.id">
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
import workData from '@/data/work-items.js'
import serviceData from '@/data/service-items.js'
export default {
    name: "Work",
    components: {
        Navbar,
        Header,
        Footer,
        WorkCard
    },
    data() {
        return {
            services: null,
            service_images: null,
            works: null,
            work_images: null,
            searchQuery: this.$route.query.q || "",
        }
    },
    created() {
        this.services = serviceData[this.$i18n.locale]
        this.service_images = serviceData.imgs
        this.works = workData[this.$i18n.locale].filter((work) => work.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        this.work_images = workData.imgs
    },
    watch: {
        "$route.query.q"(newQuery) {
            this.searchQuery = newQuery || "";
            this.works = workData[this.$i18n.locale].filter((work) => work.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
}
</script>