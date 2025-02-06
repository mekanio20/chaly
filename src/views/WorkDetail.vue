<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" title="Chaly-trading-Сервис." href="/" class="home"><span
                            property="name" itemprop="name">Главная</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%">
                        <span itemprop="name" property="name">
                            {{ work?.title }}
                        </span></span>
                    <meta itemprop="position" property="position" content="3" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">
                    {{ work?.title }}
                </h1>
                <div class="news-contant">
                    <div class="text-wrap">
                        <p>
                            <img decoding="async" class="lazyload wp-image-1731 alignleft" :src="work?.bg_image"
                                :data-src="work?.bg_image" width="363" height="350"
                                data-sizes="(max-width: 263px) 100vw, 263px" data-recalc-dims="1" />
                        </p>
                        <p class="!mb-5">
                            {{ work?.description }}
                        </p>
                    </div>
                </div>
                <Company />
                <ContactInfo />
                <a href="tel:99365609009" class="contact-nav-box">
                    <strong class="title">Остались вопросы?<br />
                        Мы Вам перезвоним</strong>
                    <span class="callback">Перезвоните мне</span>
                </a>
                <div class="about-content">
                    <div class="clients-container">
                        <h2 class="global-title"><span>Наши клиенты</span></h2>
                        <div class="pb-20">
                            <Partners />
                        </div>
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
import ContactInfo from '@/components/base/ContactInfo.vue'
import Company from '@/components/base/Company.vue'
import Partners from '@/components/base/Partners.vue'
import workData from '@/data/work-card.js'
export default {
    name: "WorkDetail",
    components: {
        Navbar,
        Header,
        Footer,
        ContactInfo,
        Company,
        Partners
    },
    created() {
        this.getWorkDetail()
    },
    data() {
        return {
            work: null
        }
    },
    methods: {
        getWorkDetail() {
            this.work = workData.find(item => item.id == this.$route.params.id)
        }
    },
    watch: {
        $route() {
            this.getWorkDetail()
        }
    }
}
</script>