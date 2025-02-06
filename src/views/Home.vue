<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="about-home add_bg">
                <div class="container">
                    <div class="text-scroll">
                        <div class="text-m_gray-100">
                            <p class="pt-8 text-black font-medium" style="text-align: center">
                                <span style="font-size: 18pt">ÇALY
                                    Gurluşyk materiallaryny öndüriji
                                    2007-nji ýyldan bäri Türkmenistanda</span>
                            </p>
                            <p class="first-paragraph py-8">
                                "CHALY" kompaniýasy islendik gurluşyk taslamasynyň dowamlylygyny we ynamlylygyny
                                üpjün edýän ýokary hilli gurluşyk materiallaryny bermek maksady bilen
                                esaslandyryldy. Iş ýyllarynda biz özümüzi gurluşyk pudagynda iň ýokary hilli
                                standartlara laýyk bolan önümleri teklip edip, ygtyýarly hyzmatdaşy hökmünde
                                görkezdik.
                            </p>
                            <p>
                                <span class="text-black font-medium">Gymmatlyklar</span><br /> <br>
                                – Ulgamy. Biz önümçiligimiziň ähli basgançaklarynda gaty gözegçilik geçirip,
                                materiallarymyzyň hiline aýratyn üns berýäris.<br />
                                – Täzelikler. Biziň önümimiziň gowulandyrylmagy üçin ylmy barlaglara we işlenmelere
                                hemişelik maýa goýberýäris.<br />
                                – Hünärmentçilik. Biziň toparymyz siziň taslamalaryň üçin iň gowy çözgütler sunmaga
                                taýýar bolan tejribeli hünärmenlerden ybarat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects-content">
                <div class="container">
                    <strong class="global-title font-bold text-m_blue-100">Наши работы</strong>
                    <aside class="sidebar-news">
                        <router-link to="/news"
                            class="py-[10px] text-center mb-[30px] leading-[20px] rounded-full block font-normal hover:text-white text-white uppercase bg-m_red-100 hover:opacity-80 duration-300">Новости<i
                                class="figure"></i></router-link>
                        <ul>
                            <NewsCard v-for="item in news" :key="item.id" :url="item.url" :title="item.name"
                                :date="item.date" :image="item.img" />
                        </ul>
                    </aside>
                    <div class="projects-list">
                        <ul>
                            <li v-for="item in serviceData" :key="item.id">
                                <router-link :to="item.url" class="w-full h-full">
                                    <h2 class="title !pt-2">{{ item.name }}</h2>
                                    <img :src="item.image" class="w-full h-full object-cover" />
                                    <div class="text">
                                        <span class="mark-link opacity-80">Подробнее</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                        <router-link to="/works"
                            class="py-2 px-10 rounded-[25px] min-w-[205px] table cursor-pointer mx-auto font-normal text-white text-center bg-m_red-100 hover:opacity-80 duration-300 hover:text-white">
                            Все работы
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar.vue';
import Navbar from '@/components/common/Navbar.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import WorkCard from '@/components/cards/Work.vue';
import NewsCard from '@/components/cards/News.vue';
import worksData from '@/data/work-card.js'
import newsData from '@/data/news-card.js'
import serviceData from '@/data/service-items.js'
export default {
    name: 'Home',
    components: {
        Navbar,
        Header,
        Footer,
        WorkCard,
        NewsCard,
        Sidebar,
    },
    data() {
        return {
            isOpen: true,
            works: worksData,
            news: newsData,
            serviceData
        }
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
        handleClickOutside(event) {
            if (this.isOpen && this.$refs.sidebarRef && !this.$refs.sidebarRef.contains(event.target)) {
                this.isOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    },
}
</script>