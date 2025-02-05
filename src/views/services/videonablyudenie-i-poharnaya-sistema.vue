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
                        title="Видеонаблюдение и Пожарная система">
                        <span itemprop="name" property="name">
                            Видеонаблюдение и Пожарная система
                        </span>
                    </span>
                    <meta itemprop="position" property="position" content="3" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">
                    Видеонаблюдение и Пожарная система
                </h1>
                <div class="news-contant">
                    <div class="text-wrap">
                        <p>
                            <img decoding="async" class="lazyload alignright wp-image-1028" title="Инженерная система"
                                src="/imgs/service-2.webp" data-src="/imgs/service-2.webp" width="450" height="300"
                                data-srcset="https://i0.wp.com/asgard-service.com/wp-content/uploads/2017/05/ochistka-gvs-khvs.jpg?resize=600%2C400&amp;ssl=1 600w, https://i0.wp.com/asgard-service.com/wp-content/uploads/2017/05/ochistka-gvs-khvs.jpg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/asgard-service.com/wp-content/uploads/2017/05/ochistka-gvs-khvs.jpg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/asgard-service.com/wp-content/uploads/2017/05/ochistka-gvs-khvs.jpg?resize=180%2C120&amp;ssl=1 180w, https://i0.wp.com/asgard-service.com/wp-content/uploads/2017/05/ochistka-gvs-khvs.jpg?w=1427&amp;ssl=1 1427w"
                                data-sizes="(max-width: 450px) 100vw, 450px" data-recalc-dims="1" />
                            Компания «Çaly» предлагает комплексные решения в области видеонаблюде-
                            ния и
                            пожарной безопасности, обеспечивая защиту объектов любого масштаба — от
                            частных домов и офисов до крупных промышленных предприятий и нефтега-
                            зовых объектов.
                        </p>
                        <p>
                            Мы разрабатываем, устанав-
                            ливаем и обслуживаем систе-
                            мы, которые
                            гарантируют круглосуточный
                            контроль, мгновенное реаги-
                            рование на угрозы и макси-
                            мальную надежность.
                        </p>
                    </div>
                </div>
                <noindex>
                    <Company />
                    <ContactInfo />
                    <div class="contact-nav-box">
                        <strong class="title">Остались вопросы?<br />
                            Мы Вам перезвоним</strong>
                        <span style="width: 186px" class="callback">Перезвоните мне</span>
                    </div>
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
export default {
    name: "Videonablyudenie-i-poharnaya-sistema",
    components: {
        Navbar,
        Header,
        Footer,
        ContactInfo,
        Partners,
        Company
    }
}
</script>