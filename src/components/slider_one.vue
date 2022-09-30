<template>
  <swiper
    :direction="'vertical'"
    :autoplay="{
      delay: 2500,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide
    ><swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide
    ><swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide
    ><swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide
    ><swiper-slide><img src="./../image/side1.png" alt="" /></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/style.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style>
</style>