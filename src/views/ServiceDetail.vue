<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" href="/" class="home"><span property="name"
                            itemprop="name">Главная</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                        :title="service?.name">
                        <span itemprop="name" property="name">
                            {{ service?.name }}
                        </span>
                    </span>
                    <meta itemprop="position" property="position" content="3" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">
                    {{ service?.name }}
                </h1>
                <div class="news-contant">
                    <div class="text-wrap">
                        <p>
                            <img decoding="async" class="lazyload alignright wp-image-1028" :src="service?.image"
                                :data-src="service?.image" width="450" height="300"
                                data-sizes="(max-width: 450px) 100vw, 450px" data-recalc-dims="1" />
                            {{ service?.title }}
                        </p>
                        <p>
                            {{ service?.desc }}
                        </p>
                    </div>
                </div>
                <noindex>
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
                </noindex>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Partners from '@/components/base/Partners.vue'
import ContactInfo from '@/components/base/ContactInfo.vue'
import Company from '@/components/base/Company.vue'
import serviceData from '@/data/service-items.js'
export default {
    name: "ServiceDetail",
    components: {
        Navbar,
        Header,
        Footer,
        ContactInfo,
        Partners,
        Company
    },
    created() {
        this.getServiceDetail()
    },
    data() {
        return {
            service: null
        }
    },
    methods: {
        getServiceDetail() {
            this.service = serviceData.find(item => item.id == this.$route.params.id)
            console.log(this.service);
        }
    }
}
</script>