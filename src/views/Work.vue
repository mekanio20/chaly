<template>
    <div class="w-full h-full">
        <div class="wrapper">
            <Header>
                <Navbar />
            </Header>
            <div class="main">
                <div class="breadcrumbs container" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                    id="breadcrumbs">
                    <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a
                            itemprop="item" property="item" typeof="WebPage" title="АСГАРД-Сервис." href="../index.html"
                            class="home"><span property="name" itemprop="name">Главная</span></a>
                        <meta property="position" itemprop="position" content="1" />
                    </span>
                    &gt;
                    <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                            title="Наши работы">
                            <span itemprop="name" property="name">Наши работы</span></span>
                        <meta itemprop="position" property="position" content="2" />
                    </span>
                </div>
                <div class="container">
                    <h1 class="global-title">Наши работы</h1>
                    <div class="projects-content works-content">
                        <div class="projects-list">
                            <ul>
                                <WorkCard v-for="item in workData" :key="item.id" :bg_img="item.bg_image" :title="item.title" :url="item.link" class="!mb-10" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import WorkCard from '@/components/cards/Work.vue';
import workData from '@/data/work-card.js'
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
        workData
      }
    }
}
</script>