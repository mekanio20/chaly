<template>
    <div class="w-full h-full">
        <div class="wrapper">
            <Header>
                <Navbar />
            </Header>
            <div class="main">
                <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                    id="breadcrumbs">
                    <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a
                            itemprop="item" property="item" typeof="WebPage" href="/" class="home"><span property="name"
                                itemprop="name">Главная</span></a>
                        <meta property="position" itemprop="position" content="1" />
                    </span>
                    &gt;
                    <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%"
                            title="Наши услуги">
                            <span itemprop="name" property="name">Наши услуги</span></span>
                        <meta itemprop="position" property="position" content="2" />
                    </span>
                </div>
                <div class="container">
                    <h1 class="global-title">Наши услуги</h1>
                    <div class="projects-content services-content">
                        <div class="our-services-content">
                            <div class="services-box !px-0">
                                <router-link to="/services/"
                                    class="title"><span>Предприятия промышленные, предприятия нефтепереработки и
                                        нефтехимии</span><i class="figure"></i></router-link>
                                <ul>
                                    <li v-for="item in serviceData" :key="item.id">
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
                                    В сферу деятельности компании «Chaly» trading service входят очистка и
                                    монтаж оборудования – мы оказываем услуги для энергетических и
                                    нефтеперерабатывающих предприятий, а также проводим сервисные
                                    работы по наладке инженерных систем зданий и сооружений.
                                </p>
                                <p>
                                    Все работы по очистке нефтепроводов, монтажу оборудования и
                                    т.д. проводятся с использованием специального оборудования
                                    силами квалифицированных специалистов, что позволяет
                                    гарантировать каждому клиенту высокое качество, сокращение
                                    времени простоя оборудования и экономичный расход бюджетных
                                    средств. Выбор технологии и способа выполнения работ
                                    производится на основе полного анализа состояния системы:
                                    особенностей конструкции и срока эксплуатации. Благодаря
                                    такому подходу обеспечивается безопасность сотрудников и
                                    сохранность оборудования.
                                </p>
                                <p>
                                    Чтобы узнать подробную информацию об услугах и применяемых
                                    методах, позвоните нам по телефону +993 (65) 60-90-09 или
                                    напишите на электронную почту info@asgard-service.com
                                </p>
                            </div>
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
import serviceData from '@/data/service-items.js'
export default {
    name: "Service",
    components: {
        Navbar,
        Header,
        Footer,
    },
    data() {
        return {
            serviceData
        }
    }
}
</script>