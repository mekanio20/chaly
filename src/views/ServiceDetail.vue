<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item"
                        property="item" typeof="WebPage" href="/" class="home"><span property="name" itemprop="name">{{
                            $t('title1') }}</span></a>
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
                <h1 class="global-title">-
                    {{ service?.name }}
                </h1>
                <div class="news-contant">
                    <div class="text-wrap pb-10">
                        <p class="text-xl font-bold pb-10">
                            {{ service?.title }}
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="service in service?.services" :key="service.id" @click="openModal(service)"
                                class="cursor-pointer border p-4 rounded-lg shadow hover:shadow-lg transition">
                                <img :src="service.img" :alt="service.name" class="w-full h-[300px] object-cover mb-2" />
                                <h2 class="text-lg font-semibold !mb-0">{{ service.name }}</h2>
                            </div>
                        </div>

                        <div v-if="showModal"
                            class="fixed !z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                                <button @click="closeModal"
                                    class="absolute top-2 right-2 text-xl font-bold">&times;</button>
                                <img :src="selectedService.img" :alt="selectedService.name"
                                    class="w-full h-[300px] object-cover rounded-sm mb-2" />
                                <h2 class="text-xl font-semibold mb-2">{{ selectedService.name }}</h2>
                                <p class="!mb-0">{{ selectedService.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Company />
                <ContactInfo />
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
                <div class="about-content">
                    <div class="clients-container">
                        <h2 class="global-title"><span>
                                {{ $t('title13') }}
                            </span></h2>
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
import Partners from '@/components/base/Partners.vue'
import Company from '@/components/base/Company.vue'
import ContactInfo from '@/components/base/ContactInfo.vue'
import serviceData from '@/data/service-items.js'
export default {
    name: "ServiceDetail",
    components: {
        Navbar,
        Header,
        Footer,
        ContactInfo,
        Partners,
        Company,
    },
    created() {
        this.getServiceDetail()
    },
    data() {
        return {
            service: null,
            showModal: false,
            selectedService: {},
        }
    },
    methods: {
        getServiceDetail() {
            this.service = serviceData[this.$i18n.locale].find(item => item.id == this.$route.params.id)
        },
        openModal(service) {
            this.selectedService = service;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedService = {};
        },
    },
    watch: {
        $route() {
            this.getServiceDetail()
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>