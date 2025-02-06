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
                            itemprop="name">Главная</span></a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                        title="Контакты">
                        <span itemprop="name" property="name">Контакты</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">Контакты</h1>
                <div class="text-wrap">
                    <h2>Полные реквизиты ООО «Chaly» trading service</h2>
                    <p>
                        Юридический адрес: Ahal wel, Ak bugdaý etr, Änew şäh, "Industriýal" köç, jaý "B"
                        <br />
                    </p>
                    <p>&nbsp;</p>
                    <h2>Как пройти в офис</h2>
                </div>
                <ul class="contact-info-box">
                    <li class="row-1">
                        <strong class="title">Фактический адрес</strong>
                        <address>
                            Ahal wel, Ak bugdaý etr, Änew şäh, "Industriýal" köç, jaý "B"
                        </address>
                    </li>
                    <li class="row-1">
                        <strong class="title">Телефон</strong>
                        <a class="phone" href="tel:99365609009">+993 (65) 60-90-09</a>
                    </li>
                    <li class="row-1">
                        <strong class="title">E-mail</strong>
                        <a href="mailto:chaly.marketing@gmail.com">chaly.marketing@gmail.com</a>
                    </li>
                    <li class="row-1">
                        <strong class="title">График работы</strong>
                        <span class="schedule">ПН-ПТ с 09:00 до 18:00</span>
                    </li>
                    <li class="clearfix"></li>
                </ul>
                <div class="contact-map">
                    <div id="map" class="map"></div>
                </div>
                <a href="tel:99365609009" class="contact-nav-box">
                    <strong class="title">Остались вопросы?<br />
                        Мы Вам перезвоним</strong>
                    <span class="callback">Перезвоните мне</span>
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