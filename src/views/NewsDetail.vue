<template>
  <div class="wrapper">
    <Header>
      <Navbar />
    </Header>
    <div class="main">
      <div class="breadcrumbs container pt-10 !mb-10" itemtype="http://schema.org/BreadcrumbList" id="breadcrumbs">
        <span itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a itemprop="item" property="item"
            typeof="WebPage" href="/" class="home"><span property="name" itemprop="name">Главная</span></a>
          <meta property="position" itemprop="position" content="1" />
        </span>
        &gt;
        <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%" :title="news?.name">
            <span itemprop="name" property="name">
              {{ news?.name }}
            </span>
          </span>
          <meta itemprop="position" property="position" content="3" />
        </span>
      </div>
      <div class="container">
        <h1 class="global-title">
          {{ news?.name }}
        </h1>
        <div class="news-contant">
          <div class="text-wrap">
            <div class="social-links">
              <time class="time" :datatime="news?.date">{{ news?.date }}</time>
              <div class="social-shares pluso" data-background="transparent"
                data-options="small,round,line,horizontal,nocounter,theme=04"
                data-services="odnoklassniki,google,facebook,vkontakte,twitter"></div>
            </div>
            <p>
              <img decoding="async" class="lazyload alignleft wp-image-3480" :src="news?.img" width="450" height="253"
                data-sizes="(max-width: 450px) 100vw, 450px" data-recalc-dims="1" />
            </p>
            <p>
              {{ news?.desc }}
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
import Partners from '@/components/base/Partners.vue'
import ContactInfo from '@/components/base/ContactInfo.vue'
import Company from '@/components/base/Company.vue'
import newsData from '@/data/news-card.js'
export default {
  name: "NewsDetail",
  components: {
    Navbar,
    Header,
    Footer,
    ContactInfo,
    Partners,
    Company
  },
  created() {
    this.getnewsDetail()
  },
  data() {
    return {
      news: null
    }
  },
  methods: {
    getnewsDetail() {
      this.news = newsData.find(item => item.id == this.$route.params.id)
    }
  }
}
</script>