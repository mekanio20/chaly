<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" href="/" class="home"><span property="name"
                            itemprop="name">{{ $t('title1') }}</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                        :title="$t('title52')">
                        <span itemprop="name" property="name">{{ $t('title52') }}</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">-{{ $t('title52') }}</h1>
                <div class="text-wrap">
                    <h2>
                        {{ $t('title53') }}
                    </h2>
                    <p>
                        {{ $t('title54') }}г. Ашхабад, ул. Б. Аннанов, 219
                        <br />
                    </p>
                    <p>&nbsp;</p>
                    <h2>
                        {{ $t('title55') }}
                    </h2>
                </div>
                <ul class="contact-info-box">
                    <li class="row-1">
                        <strong class="title">
                            {{ $t('title56') }}
                        </strong>
                        <address>
                           г. Ашхабад, ул. Б. Аннанов, 219
                        </address>
                    </li>
                    <li class="row-1">
                        <strong class="title">
                            {{ $t('title57') }}
                        </strong>
                        <a class="phone" href="tel:99365609009">+993 (65) 60-90-09</a>
                    </li>
                    <li class="row-1">
                        <strong class="title">
                            {{ $t('title58') }}
                        </strong>
                        <a href="mailto:chaly.marketing@gmail.com">chaly.marketing@gmail.com</a>
                    </li>
                    <li class="row-1">
                        <strong class="title">
                            {{ $t('title59') }}
                        </strong>
                        <span class="schedule">
                            {{ $t('title60') }}
                        </span>
                    </li>
                    <li class="clearfix"></li>
                </ul>
                <div class="contact-map">
                    <div id="map" class="map"></div>
                </div>
                <a href="tel:99365609009" class="contact-nav-box">
                    <strong class="title">
                        {{ $t('title61') }}
                        <br />
                        {{ $t('title62') }}    
                    </strong>
                    <span class="callback">
                        {{ $t('title63') }}
                    </span>
                </a>
            </div>
            <div class="!h-max[40px]">
                <Map />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Map from '@/components/base/Map.vue';
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
export default {
    name: "Contact",
    components: {
        Navbar,
        Header,
        Footer,
        Map
    }
}
</script>