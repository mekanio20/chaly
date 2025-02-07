<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" href="/" class="home"><span property="name" itemprop="name">{{
                            $t('title1') }}</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                        :title="$t('title74')">
                        <span itemprop="name" property="name">{{ $t('title74') }}</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">-{{ $t('title74') }}</h1>
                <div class="projects-content services-content">
                    <div class="our-services-content">
                        <div class="services-box !px-0">
                            <router-link to="/services/" class="title"><span>
                                    {{ $t('title75') }}
                                </span><i class="figure"></i></router-link>
                            <ul>
                                <li v-for="item in service" :key="item.id">
                                    <router-link :to="item.url">
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="seo-text-scroll">
                    <div class="text-scroll">
                        <div>
                            <p>
                                {{ $t('title76') }}
                            </p>
                            <p>
                                {{ $t('title77') }}
                            </p>
                            <p>
                                {{ $t('title78') }}
                            </p>
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
import serviceData from '@/data/service-items.js'
export default {
    name: "Service",
    components: {
        Navbar,
        Header,
        Footer,
    },
    created() {
        this.service = serviceData[this.$i18n.locale]
    },
    data() {
        return {
            service: null
        }
    }
}
</script>