<template>
    <div class="wrapper">
        <Header>
            <Navbar />
        </Header>
        <div class="main">
            <div class="breadcrumbs container pt-10 !mb-10" itemscope="" itemtype="http://schema.org/BreadcrumbList"
                id="breadcrumbs">
                <span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" property="item" typeof="WebPage" href="/" class="home">
                        <span property="name" itemprop="name">{{ $t('title1') }}</span>
                    </a>
                    <meta property="position" itemprop="position" content="1" />
                </span>
                &gt;
                <span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="%slink%" :title="$t('title19')">
                        <span itemprop="name" property="name">{{ $t('title19') }}</span></span>
                    <meta itemprop="position" property="position" content="2" />
                </span>
            </div>
            <div class="container">
                <h1 class="global-title">-{{ $t('title19') }}</h1>
                <div class="text-wrap">
                    <h2>
                        {{ $t('title20') }}
                    </h2>
                    <p>
                        {{ $t('title21') }}
                    </p>
                    <p>
                        {{ $t('title22') }}
                    </p>
                    <p>
                        {{ $t('title23') }}
                    </p>
                    <p>
                        {{ $t('title24') }}
                    </p>
                    <p>&nbsp;</p>
                    <hr />
                    <p>
                        {{ $t('title25') }}
                    </p>
                    <h2>{{ $t('title26') }}</h2>
                    <h3>{{ $t('title27') }}</h3>
                    <ul>
                        <li>
                            {{ $t('title28') }}
                        </li>
                        <li>
                            {{ $t('title29') }}
                        </li>
                        <li>{{ $t('title30') }}</li>
                        <li>{{ $t('title31') }}</li>
                        <li>
                            {{ $t('title32') }}
                        </li>
                        <li>
                            {{ $t('title33') }}
                        </li>
                        <li>{{ $t('title34') }}</li>
                    </ul>
                    <h3>{{ $t('title35') }}</h3>
                    <ul>
                        <li>{{ $t('title36') }}</li>
                        <li>
                            {{ $t('title37') }}
                        </li>
                        <li>
                            <strong>
                                {{ $t('title38') }}
                            </strong>
                        </li>
                        <li>
                            {{ $t('title39') }}
                        </li>
                        <li>
                            {{ $t('title40') }}
                        </li>
                        <li>
                            {{ $t('title41') }}
                        </li>
                        <li>
                            {{ $t('title42') }}
                        </li>
                        <li>
                            {{ $t('title43') }}
                        </li>
                        <li>
                            {{ $t('title44') }}
                        </li>
                    </ul>
                    <h3>
                        {{ $t('title45') }}
                    </h3>
                    <ul>
                        <li>
                            {{ $t('title46') }}
                        </li>
                        <li>
                            {{ $t('title47') }}
                        </li>
                        <li>
                            {{ $t('title48') }}
                        </li>
                        <li>
                            {{ $t('title49') }}
                        </li>
                        <li>
                            {{ $t('title50') }}
                        </li>
                    </ul>
                    <hr />
                    <p>
                        {{ $t('title51') }}
                        <a href="mailto:mailto:chaly.marketing@gmail.com">chaly.marketing@gmail.com</a>
                    </p>
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
export default {
    name: "Career",
    components: {
        Navbar,
        Header,
        Footer,
    }
}
</script>