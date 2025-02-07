<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                    <router-link to="/" property="item" typeof="WebPage" class="home">
                        <span property="name" itemprop="name">{{ $t('title1') }}</span>
                    </router-link>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemid="%slink%" :title="$t('title2')">
                        <span itemprop="name" property="name">{{ $t('title2') }}</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">-{{ $t('title2') }}</h1>
                <div class="about-content">
                    <div class="text-wrap">
                        <p>
                            <span style="
                                    font-weight: 400;
                                    display: inline-block;
                                    margin-bottom: 8px;
                                    color: #1d2057;
                                ">{{ $t('title3') }}</span>
                            {{ $t('title4') }}
                        </p>
                        <p>
                            <span style="
                                    font-weight: 400;
                                    display: inline-block;
                                    margin-bottom: 8px;
                                    color: #1d2057;
                                ">{{ $t('title5') }}</span>
                            &#8212; {{ $t('title6') }}
                        </p>
                        <p>
                            <span style="
                                    font-weight: 400;
                                    display: inline-block;
                                    margin-bottom: 8px;
                                    color: #1d2057;
                                ">{{ $t('title7') }}</span>
                            {{ $t('title8') }}
                        </p>
                        <p>
                            <span style="
                                    font-weight: 400;
                                    display: inline-block;
                                    color: #1d2057;
                                ">{{ $t('title9') }}</span>
                            {{ $t('title10') }}
                        </p>
                    </div>
                    <Company />
                    <div class="our-services-content">
                        <div class="services-box !px-0">
                            <router-link to="/services" class="title"><span>
                                {{ $t('title11') }}
                            </span><i class="figure"></i>
                            </router-link>
                            <ul>
                                <li v-for="item in services" :key="item.id">
                                    <router-link :to="item.url">
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <router-link to="/services" class="mark-link"><span>{{ $t('title12') }}</span></router-link>
                    </div>
                    <div class="clients-container">
                        <h2 class="global-title"><span>{{ $t('title13') }}</span></h2>
                        <div class="pb-20">
                            <Partners />
                        </div>
                    </div>
                    <Certificate />
                    <div class="about-contact">
                        <ContactInfo />
                        <div class="max-w-[400px] mx-auto">
                            <span
                                class="relative z-20 mb-[20px] text-lg block font-normal text-center text-[#1d2057] uppercase">
                                {{ $t('title14') }}
                            </span>
                            <div class="wpcf7 no-js" id="wpcf7-f381-o1" dir="ltr">
                                <div class="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                </div>
                                <form action="#" method="post" class="wpcf7-form init"
                                    novalidate="novalidate" data-status="init">
                                    <div style="display: none">
                                        <input type="hidden" name="_wpcf7" value="381" />
                                        <input type="hidden" name="_wpcf7_version" value="5.7.4" />
                                        <input type="hidden" name="_wpcf7_locale" value="ru_RU" />
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f381-o1" />
                                        <input type="hidden" name="_wpcf7_container_post" value="0" />
                                        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                        <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                                    </div>
                                    <div class="item-input input-name">
                                        <span class="wpcf7-form-control-wrap" data-name="Name"><input size="40"
                                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                aria-required="true" aria-invalid="false" :placeholder="$t('title15')"
                                                value="" type="text" name="Name" /></span>
                                    </div>
                                    <div class="item-input input-email">
                                        <span class="wpcf7-form-control-wrap" data-name="email"><input size="40"
                                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                aria-required="true" aria-invalid="false" :placeholder="$t('title16')"
                                                value="" type="email" name="email" /></span>
                                    </div>
                                    <div class="item-input input-phone">
                                        <span class="wpcf7-form-control-wrap" data-name="phone"><input size="40"
                                                class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                aria-invalid="false" placeholder="+993" value="" type="tel"
                                                name="phone" /></span>
                                    </div>
                                    <div class="item-textarea">
                                        <span class="wpcf7-form-control-wrap" data-name="textarea">
                                            <textarea cols="40" rows="10"
                                                class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                aria-required="true" aria-invalid="false" :placeholder="$t('title17')"
                                                name="textarea"></textarea>
                                        </span>
                                    </div>
                                    <div class="item-btn submit" style="display: block">
                                        <label for="btm-response-page">{{ $t('title18') }}</label><input
                                            class="wpcf7-form-control has-spinner wpcf7-submit" id="btm-response-page"
                                            type="submit" :value="$t('title18')" />
                                    </div>
                                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Map from '@/components/base/Map.vue'
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Partners from '@/components/base/Partners.vue'
import Company from '@/components/base/Company.vue'
import ContactInfo from '@/components/base/ContactInfo.vue'
import Certificate from '@/components/base/Certificate.vue'
import serviceData from '@/data/service-items.js'
export default {
    name: 'About',
    components: {
        Navbar,
        Header,
        Footer,
        Partners,
        Company,
        ContactInfo,
        Certificate,
        Map
    },
    created() {
        this.services = serviceData[this.$i18n.locale]
    },
    data() {
        return {
            services: null
        }
    }
};
</script>