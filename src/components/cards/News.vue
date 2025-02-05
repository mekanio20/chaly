<template>
  <li class="item item-0">
    <router-link :to="url" class="image">
      <noscript>
        <img width="80" height="80"
          :src="image"
          class="attachment-img_small size-img_small wp-post-image" decoding="async" loading="lazy" />
      </noscript>
      <img width="80" height="80"
          :src="image"
          class="lazyload attachment-img_small size-img_small wp-post-image" decoding="async" loading="lazy"
          data-sizes="(max-width: 80px) 100vw, 80px" />
    </router-link>
    <div class="info">
      <time style="background-image: url('/imgs/news-icon-1.svg');" class="time" datetime="2023-05-29">{{ date }}</time>
      <router-link :to="url">{{ title }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    url: String,
    image: String,
    date: String,
    title: String
  }
}
</script>