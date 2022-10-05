<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import Swal from "sweetalert2";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./assets/style.scss";

// import required modules
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      form: {
        name: "",
        company: "",
        service: "",
        email: "",
        phone: "",
      },
      error: {
        text: "",
        status: false,
      },
      success: {
        text: "",
        status: false,
      },
      activetab: "1",
      isShowModal : false,
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  setup() {
    var menu = [
      "Timeline",
      "Bộ môn thi đấu",
      "Thông số giải",
      "Giải đấu HOSC 2022",
      "Giải súng hơi",
      "Giải OSC  ",
      "Giải OSNC",
    ];
    return {
      modules: [Autoplay, Pagination, Navigation, EffectFade],
      paginationShow: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            " show" +
            '">' +
            menu[index] +
            "</span>"
          );
        },
      },
    };
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    showModel(){
       this.isShowModal = true
        console.log(this.isShowModal);
    },
    hide(){
        this.isShowModal = false
        console.log(this.isShowModal);
    },
    onSubmit() {
      if (this.form.name.length < 6) {
        this.error = {
          text: "Nhập đúng điều kiện",
          status: true,
        };
      } else if (this.form.name.length > 5) {
        this.success = {
          text: "Look great!",
          status: true,
        };
        this.form.name='',
        this.form.company='',
        this.form.service='',
        this.form.email='',
        this.form.phone='',
        this.showModel()
      } else {
        this.error = {
          text: "",
          status: false,
        };
      }
    },
    setLocale(locale){
      this.$i18n.locale = locale
    }
  },
};
</script>
  
<template>
<div class="flex items-cente fixed z-10">
 <div class="over_lay" @click="hide" v-if="isShowModal">
 <div class="show_model flex flex-col items-center pt-5 px-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" fill="currentColor" class="bi bi-check-circle text-[#F7C51E]"  viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
     <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
     </svg>
      <h3 class="text-[48px] text-[#F7C51E] font-black">THÀNH CÔNG</h3>
      <p>Chúng tôi sẽ liên hệ đến bạn trong thời gian sớm nhất
      </p>
       <span>Xin cảm ơn!</span>
 </div>
 </div>
</div>
  <div>
    <div class="bg-[#121212]">
      <div class="banner">
        <header
          class="
            header_top
            flex
            justify-between
            py-2
            items-center
            bg-transparent
            mt-2
            md:gap-1
            mx-[229px]
          "
        >
          <div class="logo">
            <img src="./image/OEG-White.png" alt="" />
          </div>
          <div class="Language flex items-center float-right right-[10px]">
            <ul class="group relative">
              <li class="mb-[10px]">
                <a
                @click="setLocale('en')"
                  href="#"
                  class="menu-item group-hover:border-white flex items-center"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31Z"
                      fill="#D80027"
                    />
                    <path
                      d="M15.5 18.8906L20.2953 22.2812L18.5031 16.7594L23.25 13.175H17.3406L15.5 7.75L13.7078 13.175H7.75L12.4969 16.7594L10.7047 22.2812L15.5 18.8906Z"
                      fill="#FFE62E"
                    />
                  </svg>
                  <p class="px-[5px] text-white">VN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    class="bi bi-chevron-dow text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    /></svg
                ></a>
              </li>
              <li
                class="
                  absolute
                  left-0
                  bg-transparent
                  w-max
                  mt-14
                  opacity-0
                  invisible
                  group-hover:opacity-100 group-hover:visible group-hover:mt-0
                  transition-all
                  duration-500
                "
              >
                <a
                @click="setLocale('vn')"
                  href="#"
                  class="menu-item hover:border-white flex items-center"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3334 30.0001C23.4335 30.0001 30 23.4336 30 15.3334C30 7.23324 23.4335 0.666748 15.3334 0.666748C7.23318 0.666748 0.666687 7.23324 0.666687 15.3334C0.666687 23.4336 7.23318 30.0001 15.3334 30.0001Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M3.69856 6.40356C2.54648 7.90249 1.67776 9.63012 1.17194 11.5069H8.80193L3.69856 6.40356Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M29.4945 11.5069C28.9887 9.63012 28.1199 7.90249 26.9679 6.40356L21.8646 11.5069H29.4945Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M1.17194 19.1589C1.67782 21.0357 2.54653 22.7633 3.69856 24.2622L8.80175 19.1589H1.17194Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M24.2622 3.69855C22.7633 2.54647 21.0358 1.67776 19.1589 1.17188V8.80181L24.2622 3.69855Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M6.40369 26.9677C7.90261 28.1198 9.63024 28.9885 11.507 29.4944V21.8645L6.40369 26.9677Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M11.5069 1.17188C9.63018 1.67776 7.90255 2.54647 6.40369 3.69849L11.5069 8.80175V1.17188Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M19.1589 29.4944C21.0357 28.9885 22.7633 28.1198 24.2622 26.9678L19.1589 21.8645V29.4944Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M21.8646 19.1589L26.9679 24.2622C28.1199 22.7634 28.9887 21.0357 29.4945 19.1589H21.8646Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M29.8759 13.4204H17.2465H17.2464V0.790899C16.6202 0.709373 15.9817 0.666748 15.3334 0.666748C14.6849 0.666748 14.0465 0.709373 13.4203 0.790899V13.4203V13.4203H0.790838C0.709312 14.0466 0.666687 14.685 0.666687 15.3334C0.666687 15.9819 0.709312 16.6202 0.790838 17.2464H13.4202H13.4203V29.8759C14.0465 29.9575 14.6849 30.0001 15.3334 30.0001C15.9817 30.0001 16.6202 29.9575 17.2464 29.8759V17.2466V17.2465H29.8759C29.9574 16.6202 30 15.9819 30 15.3334C30 14.685 29.9574 14.0466 29.8759 13.4204V13.4204Z"
                      fill="#D80027"
                    />
                    <path
                      d="M19.1589 19.159L25.7036 25.7038C26.0047 25.4029 26.2918 25.0883 26.5658 24.7622L20.9625 19.1589H19.1589V19.159Z"
                      fill="#D80027"
                    />
                    <path
                      d="M11.5084 19.1589H11.5083L4.96356 25.7036C5.26446 26.0047 5.57905 26.2918 5.90515 26.5658L11.5084 20.9624V19.1589Z"
                      fill="#D80027"
                    />
                    <path
                      d="M11.5085 11.5086V11.5084L4.96369 4.96362C4.66268 5.26452 4.37553 5.57911 4.10156 5.90521L9.70486 11.5085H11.5085V11.5086Z"
                      fill="#D80027"
                    />
                    <path
                      d="M19.1589 11.5085L25.7037 4.96363C25.4028 4.66262 25.0882 4.37547 24.7621 4.10156L19.1589 9.70487V11.5085Z"
                      fill="#D80027"
                    />
                  </svg>
                  <p class="px-[5px] text-white">ENG</p>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <section class="side1">
        <div class="slider2 mx-[229px]">
          <swiper
            :direction="'vertical'"
            :loop="true"
            :effect="'fade'"
            :autoplay="{
              delay: 5500,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper_one"
          >
            <swiper-slide><img src="./image/side1.png" alt="" /></swiper-slide>
            <swiper-slide><img src="./image/2.png" alt="" /></swiper-slide
            ><swiper-slide><img src="./image/3.png" alt="" /></swiper-slide>
            <swiper-slide><img src="./image/4.png" alt="" /></swiper-slide
            ><swiper-slide><img src="./image/5.png" alt="" /></swiper-slide>
            <swiper-slide><img src="./image/6.png" alt="" /></swiper-slide
            ><swiper-slide><img src="./image/2.png" alt="" /></swiper-slide>
            <swiper-slide><img src="./image/5.png" alt="" /></swiper-slide>
          </swiper>
        </div>
      </section>
      <section class="side2 px-[229px]">
        <div class="text_side2">
          <p class="text-[#F7C51E]">{{ $t("text") }}</p>
          <h3 class="fiter text-[64px] font-black">HỆ THỐNG GIẢI ĐẤU</h3>
        </div>
        <div class="mt-[0]">
          <div class="">
            <swiper
              :loop="true"
              :pagination="paginationShow"
              :modules="modules"
              :autoplay="{
                delay: 5500,
                disableOnInteraction: false,
              }"
              class="mySwiper_two"
            >
              <swiper-slide><img src="./image/side2.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/slider1.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/slider2.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/slider3.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/slider4.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/slider2.png" alt="" /></swiper-slide
              ><swiper-slide
                ><img src="./image/side2.png" alt=""
              /></swiper-slide>
              <div class="swiper-pagination box_slider"></div>
            </swiper>
          </div>
        </div>
      </section>
      <section class="side3 px-[229px]">
        <div class="slider2_titel">
          <div id="tabs" class="container">
            <div class="tabs flex justify-around relative top-[7rem]">
              <button
                v-on:click="activetab = '1'"
                v-bind:class="[activetab === '1' ? 'active' : 'text-[#ffff]']"
                class="text-[48px] text-[#F7C51E] font-black text-show"
              >
                QUYỀN LỢI NATIONAL
              </button>
              <button
                v-on:click="activetab = '2'"
                v-bind:class="[activetab === '2' ? 'active' : 'text-[#ffff]']"
                class="text-[48px] text-[#F7C51E] font-black text-show"
              >
               QUYỀN LỢI STUDENT CUP
                
              </button>
            </div>
            <p
              class="
                text_backgroup
                flex
                justify-center
                text-[#3E3E3E] text-[200px]
                font-black
                items-center
              "
            >
              OEG ESPORTS
            </p>
            <div class="content">
              <div v-if="activetab === '1'" class="tabcontent">
                <swiper
                  :slidesPerView="1"
                  :spaceBetween="0"
                  :loop="true"
                  :autoplay="{
                    delay: 5500,
                    disableOnInteraction: false,
                  }"
                  :pagination="{
                    clickable: true,
                  }"
                  :navigation="true"
                  :modules="modules"
                  class="mySwiper_three"
                >
                  <swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/side3.png" alt=""
                  /></swiper-slide>

                  <div class="page"></div>
                </swiper>
              </div>
              <div v-if="activetab === '2'" class="tabcontent">
                <swiper
                  :slidesPerView="1"
                  :spaceBetween="0"
                  :loop="true"
                  :autoplay="{
                    delay: 5500,
                    disableOnInteraction: false,
                  }"
                  :pagination="{
                    clickable: true,
                  }"
                  :navigation="true"
                  :modules="modules"
                  class="mySwiper_three"
                >
                  <swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt="" /></swiper-slide
                  ><swiper-slide
                    ><img src="./image/slider1.png" alt=""
                  /></swiper-slide>

                  <div class="page"></div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact relative">
        <div class="title">
          <h3
            class="
              text_title2
              flex
              justify-center
              text-[64px]
              font-black
              relative
              text-[#F7C51E]
              top-[135px]
            "
          >
            LIÊN HỆ
          </h3>
          <p
            class="
              text_backgroup2
              flex
              justify-center
              text-[#3E3E3E] text-[200px]
              font-black
              items-center
            "
          >
            OEG ESPORTS
          </p>
        </div>
        <div>
          <div class="contact_all flex pl-[312px]">
            <div class="contact_all mr-[112px] px-3">
              <h4 class="fiter text-[40px] font-black">THÔNG TIN CHÚNG TÔI</h4>
              <nav>
                <ul class="ml-5 mt-[20px] px-[10px]">
                  <li class="flex gap-[5px] items-center py-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 9 11"
                      fill="none"
                      class="mb-[25px]"
                    >
                      <path
                        d="M4.5 0C2.20997 0 0.353516 1.85644 0.353516 4.14649C0.353516 4.91233 0.503418 5.70333 0.933591 6.27344L4.5 11L8.0664 6.27344C8.45713 5.75561 8.64648 4.84017 8.64648 4.14649C8.64649 1.85644 6.79004 0 4.5 0ZM4.5 2.40155C5.46357 2.40155 6.24493 3.18292 6.24493 4.14648C6.24493 5.11005 5.46357 5.89142 4.5 5.89142C3.53644 5.89142 2.75507 5.11005 2.75507 4.14649C2.75507 3.18292 3.53644 2.40155 4.5 2.40155Z"
                        fill="white"
                      />
                    </svg>
                   <p> <strong class="">Địa chỉ:</strong> Phố 131 Thái Hà, Phường Trung Liệt, Quận Đống Đa,<br />Thành
                  phố Hà Nội</p>
                  </li>
                  <li class="flex gap-[5px] items-center my-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-telephone-fill text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    <strong>Phone:</strong> 02466565025
                  </li>
                  <li class="flex gap-[5px] items-center my-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10.7767 2.00009C10.7312 1.99541 10.6854 1.99541 10.64 2.00009H1.30667C1.24685 2.00102 1.18743 2.00998 1.13 2.02676L5.94667 6.82343L10.7767 2.00009Z"
                        fill="white"
                      />
                      <path
                        d="M11.27 2.46338L6.41664 7.29671C6.29174 7.42088 6.12277 7.49057 5.94664 7.49057C5.77052 7.49057 5.60155 7.42088 5.47664 7.29671L0.666644 2.50005C0.651857 2.55439 0.644017 2.61039 0.643311 2.66671V9.33338C0.643311 9.51019 0.713548 9.67976 0.838573 9.80478C0.963597 9.92981 1.13317 10 1.30998 10H10.6433C10.8201 10 10.9897 9.92981 11.1147 9.80478C11.2397 9.67976 11.31 9.51019 11.31 9.33338V2.66671C11.3073 2.59726 11.2938 2.52866 11.27 2.46338ZM1.76664 9.33338H1.30331V8.85671L3.72664 6.45338L4.19664 6.92338L1.76664 9.33338ZM10.6366 9.33338H10.17L7.73998 6.92338L8.20998 6.45338L10.6333 8.85671L10.6366 9.33338Z"
                        fill="white"
                      /></svg
                    ><strong>Email:</strong> esports@oeg.vn
                  </li>
                </ul>
              </nav>
            </div>
            <div class="contacts h-[747px] w-[732px] relative top-[-142px]">
              <div class="from_contact mx-[73px] my-[54px]">
                <h3
                  class="
                    text-[48px] text-[#F7C51E]
                    font-black
                    text-center
                    mb-[30px]
                  "
                >
                  LIÊN HỆ
                </h3>
                <form @submit.prevent="onSubmit" class="form_contact">
                  <div class="input_all">
                    <input
                      id="name"
                      :class="{ error: error.status, success: success.status }"
                      type="text"
                      v-model="form.name"
                      placeholder="Họ tên*"
                      class="input_bg block py-3"
                    />
                    <p class="error-text" v-if="error.status">
                      {{ error.text }}
                    </p>
                    <input
                      type="text"
                      :class="{ error: error.status, success: success.status }"
                      v-model="form.company"
                      placeholder="Đơn vị/Công ty*"
                      class="input_bg block py-3"
                    />
                    <p class="error-text" v-if="error.status">
                      {{ error.text }}
                    </p>
                    <input
                      type="text"
                      :class="{ error: error.status, success: success.status }"
                      v-model="form.service"
                      placeholder="Chức vụ*"
                      class="input_bg block py-3"
                    />
                    <p class="error-text" v-if="error.status">
                      {{ error.text }}
                    </p>
                    <input
                      type="email"
                      :class="{ error: error.status, success: success.status }"
                      v-model="form.email"
                      placeholder="Email*"
                      class="input_bg block py-3"
                    />
                    <p class="error-text" v-if="error.status">
                      {{ error.text }}
                    </p>
                    <input
                      type="text"
                      :class="{ error: error.status, success: success.status }"
                      v-model="form.phone"
                      placeholder="Số điện thoại*"
                      class="input_bg block py-3"
                    />
                    <p class="error-text" v-if="error.status">
                      {{ error.text }}
                    </p>
                    <div class="flex justify-center">
                      <button
                      type="submit"
                      class="
                        bg-submit 
                       bg-[#F7C51E]
                        text-black text-[20px]
                        rounded
                      "
                    >
                      Gửi
                    </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="parent2">
      <section class="p-[60px]">
        <div class="Contact_information w-[732px] h-[518px] child2">
          <img
            src="./image/OEG-White.png"
            alt=""
            class="logo ml-[60px] mt-[60px] mb-[10px]"
          />
          <div class="nav_contact px-[85px]">
            <nav>
              <h4 class="text-[#F7C51E] text-[20px] font-black">LIÊN HỆ</h4>
              <ul class="">
                <li class="flex gap-[5px] items-center py-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 9 11"
                    fill="none"
                    class="mb-[25px]"
                  >
                    <path
                      d="M4.5 0C2.20997 0 0.353516 1.85644 0.353516 4.14649C0.353516 4.91233 0.503418 5.70333 0.933591 6.27344L4.5 11L8.0664 6.27344C8.45713 5.75561 8.64648 4.84017 8.64648 4.14649C8.64649 1.85644 6.79004 0 4.5 0ZM4.5 2.40155C5.46357 2.40155 6.24493 3.18292 6.24493 4.14648C6.24493 5.11005 5.46357 5.89142 4.5 5.89142C3.53644 5.89142 2.75507 5.11005 2.75507 4.14649C2.75507 3.18292 3.53644 2.40155 4.5 2.40155Z"
                      fill="white"
                    />
                  </svg>
                  <p> <strong class="">Địa chỉ:</strong> Phố 131 Thái Hà, Phường Trung Liệt, Quận Đống Đa,<br />Thành
                  phố Hà Nội</p>
                </li>
                <li class="flex gap-[5px] items-center my-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-telephone-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <strong>Phone:</strong> 02466565025
                </li>
                <li class="flex gap-[5px] items-center my-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10.7767 2.00009C10.7312 1.99541 10.6854 1.99541 10.64 2.00009H1.30667C1.24685 2.00102 1.18743 2.00998 1.13 2.02676L5.94667 6.82343L10.7767 2.00009Z"
                      fill="white"
                    />
                    <path
                      d="M11.27 2.46338L6.41664 7.29671C6.29174 7.42088 6.12277 7.49057 5.94664 7.49057C5.77052 7.49057 5.60155 7.42088 5.47664 7.29671L0.666644 2.50005C0.651857 2.55439 0.644017 2.61039 0.643311 2.66671V9.33338C0.643311 9.51019 0.713548 9.67976 0.838573 9.80478C0.963597 9.92981 1.13317 10 1.30998 10H10.6433C10.8201 10 10.9897 9.92981 11.1147 9.80478C11.2397 9.67976 11.31 9.51019 11.31 9.33338V2.66671C11.3073 2.59726 11.2938 2.52866 11.27 2.46338ZM1.76664 9.33338H1.30331V8.85671L3.72664 6.45338L4.19664 6.92338L1.76664 9.33338ZM10.6366 9.33338H10.17L7.73998 6.92338L8.20998 6.45338L10.6333 8.85671L10.6366 9.33338Z"
                      fill="white"
                    /></svg
                  ><strong>Email:</strong> esports@oeg.vn
                </li>
              </ul>
            </nav>
            <div>
              <h4 class="text-[#F7C51E] text-[20px] font-black">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <nav class="py-2">
                <ul class="flex gap-6">
                  <li>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.11263 0C2.28046 0 0 2.28046 0 5.11263V22.8874C0 25.7196 2.28046 28 5.11263 28H14.7464V17.0538H11.8519V13.1128H14.7464V9.74576C14.7464 7.10046 16.4566 4.67163 20.3963 4.67163C21.9914 4.67163 23.1709 4.82476 23.1709 4.82476L23.0781 8.50503C23.0781 8.50503 21.8752 8.49366 20.5625 8.49366C19.1418 8.49366 18.914 9.14824 18.914 10.2349V13.1128H23.191L23.0046 17.0538H18.914V28.0001H22.8874C25.7195 28.0001 28 25.7196 28 22.8874V5.11266C28 2.28049 25.7195 2.8e-05 22.8874 2.8e-05H5.1126L5.11263 0Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7526 21.4193V18.5573C16.7526 17.9497 16.5764 17.6458 16.224 17.6458C16.0174 17.6458 15.8168 17.7431 15.6224 17.9375V22.0208C15.8168 22.2153 16.0174 22.3125 16.224 22.3125C16.5764 22.3125 16.7526 22.0148 16.7526 21.4193ZM20.1068 19.1953H21.3099V18.5755C21.3099 17.9557 21.1094 17.6458 20.7083 17.6458C20.3073 17.6458 20.1068 17.9557 20.1068 18.5755V19.1953ZM9.69792 14.3464V15.6224H8.23958V23.3333H6.89062V15.6224H5.46875V14.3464H9.69792ZM13.362 16.6432V23.3333H12.1406V22.6042C11.6667 23.151 11.2049 23.4245 10.7552 23.4245C10.3542 23.4245 10.099 23.2543 9.98958 22.9141C9.91667 22.7075 9.88021 22.3793 9.88021 21.9297V16.6432H11.0833V21.5651C11.0833 21.8568 11.0894 22.0148 11.1016 22.0391C11.1137 22.2214 11.2049 22.3125 11.375 22.3125C11.6181 22.3125 11.8733 22.1241 12.1406 21.7474V16.6432H13.362ZM17.9557 18.6667V21.3281C17.9557 21.9601 17.9132 22.4036 17.8281 22.6589C17.6823 23.1693 17.3602 23.4245 16.862 23.4245C16.4366 23.4245 16.0234 23.1753 15.6224 22.6771V23.3333H14.401V14.3464H15.6224V17.2812C16.0113 16.7951 16.4245 16.5521 16.862 16.5521C17.3602 16.5521 17.6823 16.8073 17.8281 17.3177C17.9132 17.5729 17.9557 18.0226 17.9557 18.6667ZM22.5312 21.0182V21.1823C22.5312 21.5347 22.5191 21.796 22.4948 21.9661C22.4583 22.2335 22.3672 22.4766 22.2214 22.6953C21.8932 23.1814 21.4071 23.4245 20.763 23.4245C20.1311 23.4245 19.6389 23.1936 19.2865 22.7318C19.0312 22.4036 18.9036 21.8811 18.9036 21.1641V18.8125C18.9036 18.0955 19.0252 17.5729 19.2682 17.2448C19.6207 16.783 20.1068 16.5521 20.7266 16.5521C21.3464 16.5521 21.8203 16.783 22.1484 17.2448C22.4036 17.5972 22.5312 18.1198 22.5312 18.8125V20.1979H20.1068V21.3828C20.1068 22.0026 20.3134 22.3125 20.7266 22.3125C21.0182 22.3125 21.2005 22.1545 21.2734 21.8385C21.2734 21.8264 21.2765 21.7839 21.2826 21.7109C21.2886 21.638 21.2917 21.5378 21.2917 21.4102V21.0182H22.5312ZM14.3099 5.9974V8.84115C14.3099 9.46094 14.1155 9.77083 13.7266 9.77083C13.3377 9.77083 13.1432 9.46094 13.1432 8.84115V5.9974C13.1432 5.36545 13.3377 5.04948 13.7266 5.04948C14.1155 5.04948 14.3099 5.36545 14.3099 5.9974ZM24.026 18.9948C24.026 16.8438 23.9106 15.2639 23.6797 14.2552C23.5582 13.7205 23.2969 13.2739 22.8958 12.9154C22.4948 12.5569 22.033 12.3472 21.5104 12.2865C19.8576 12.1042 17.3542 12.013 14 12.013C10.658 12.013 8.16059 12.1042 6.50781 12.2865C5.97309 12.3472 5.50825 12.5569 5.11328 12.9154C4.71832 13.2739 4.46007 13.7205 4.33854 14.2552C4.09549 15.3125 3.97396 16.8924 3.97396 18.9948C3.97396 21.1337 4.09549 22.7135 4.33854 23.7344C4.46007 24.2569 4.71832 24.7005 5.11328 25.0651C5.50825 25.4297 5.96701 25.6424 6.48958 25.7031C8.15451 25.8854 10.658 25.9766 14 25.9766C17.342 25.9766 19.8455 25.8854 21.5104 25.7031C22.033 25.6424 22.4918 25.4297 22.8867 25.0651C23.2817 24.7005 23.5399 24.2569 23.6615 23.7344C23.9045 22.7135 24.026 21.1337 24.026 18.9948ZM10.263 7.1276L11.9036 1.73177H10.5365L9.60677 5.28646L8.64062 1.73177H7.21875C7.30382 2.01128 7.44358 2.43056 7.63802 2.98958L8.07552 4.2474C8.50087 5.49913 8.78038 6.4592 8.91406 7.1276V10.7917H10.263V7.1276ZM15.5312 8.60417V6.23438C15.5312 5.52951 15.4036 5.00087 15.1484 4.64844C14.796 4.18663 14.322 3.95573 13.7266 3.95573C13.1068 3.95573 12.6328 4.18663 12.3047 4.64844C12.0495 5.00087 11.9219 5.52951 11.9219 6.23438V8.60417C11.9219 9.30903 12.0495 9.83767 12.3047 10.1901C12.6328 10.6519 13.1068 10.8828 13.7266 10.8828C14.322 10.8828 14.796 10.6519 15.1484 10.1901C15.4036 9.86198 15.5312 9.33333 15.5312 8.60417ZM18.8307 10.7917H20.0521V4.04688H18.8307V9.20573C18.5634 9.58247 18.3082 9.77083 18.0651 9.77083C17.8828 9.77083 17.7856 9.67361 17.7734 9.47917C17.7613 9.45486 17.7552 9.29688 17.7552 9.00521V4.04688H16.5339V9.38802C16.5339 9.83767 16.5703 10.1719 16.6432 10.3906C16.7769 10.7188 17.0382 10.8828 17.4271 10.8828C17.8646 10.8828 18.3325 10.6094 18.8307 10.0625V10.7917ZM28 5.25V22.75C28 24.1962 27.4865 25.4327 26.4596 26.4596C25.4327 27.4865 24.1962 28 22.75 28H5.25C3.80382 28 2.56727 27.4865 1.54036 26.4596C0.513455 25.4327 0 24.1962 0 22.75V5.25C0 3.80382 0.513455 2.56727 1.54036 1.54036C2.56727 0.513455 3.80382 0 5.25 0H22.75C24.1962 0 25.4327 0.513455 26.4596 1.54036C27.4865 2.56727 28 3.80382 28 5.25Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0495 9.36667C11.469 9.36667 9.36316 11.4725 9.36316 14.053C9.36316 16.6335 11.469 18.7393 14.0495 18.7393C16.63 18.7393 18.7358 16.6335 18.7358 14.053C18.7358 11.4725 16.63 9.36667 14.0495 9.36667ZM28.105 14.053C28.105 12.1124 28.1225 10.1893 28.0135 8.25222C27.9046 6.00222 27.3913 4.00534 25.746 2.36003C24.0971 0.711202 22.1038 0.201436 19.8538 0.0924519C17.9132 -0.0165325 15.9901 0.0010457 14.053 0.0010457C12.1124 0.0010457 10.1893 -0.0165325 8.25222 0.0924519C6.00222 0.201436 4.00534 0.714717 2.36003 2.36003C0.711202 4.00886 0.201436 6.00222 0.0924519 8.25222C-0.0165325 10.1928 0.0010457 12.1159 0.0010457 14.053C0.0010457 15.9901 -0.0165325 17.9167 0.0924519 19.8538C0.201436 22.1038 0.714718 24.1007 2.36003 25.746C4.00886 27.3948 6.00222 27.9046 8.25222 28.0135C10.1928 28.1225 12.1159 28.105 14.053 28.105C15.9936 28.105 17.9167 28.1225 19.8538 28.0135C22.1038 27.9046 24.1007 27.3913 25.746 25.746C27.3948 24.0971 27.9046 22.1038 28.0135 19.8538C28.126 17.9167 28.105 15.9936 28.105 14.053ZM14.0495 21.2635C10.0592 21.2635 6.83894 18.0432 6.83894 14.053C6.83894 10.0628 10.0592 6.84245 14.0495 6.84245C18.0397 6.84245 21.26 10.0628 21.26 14.053C21.26 18.0432 18.0397 21.2635 14.0495 21.2635ZM21.5553 8.23112C20.6237 8.23112 19.8714 7.47878 19.8714 6.54714C19.8714 5.6155 20.6237 4.86315 21.5553 4.86315C22.487 4.86315 23.2393 5.6155 23.2393 6.54714C23.2396 6.76836 23.1962 6.98746 23.1117 7.1919C23.0272 7.39634 22.9031 7.58209 22.7467 7.73852C22.5903 7.89494 22.4045 8.01897 22.2001 8.1035C21.9957 8.18803 21.7766 8.2314 21.5553 8.23112Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3333 8.78646C22.6528 9.09028 21.9175 9.29688 21.1276 9.40625C21.954 8.92014 22.5191 8.2092 22.8229 7.27344C22.033 7.73524 21.2188 8.04514 20.3802 8.20312C19.6389 7.40104 18.7092 7 17.5911 7C16.5339 7 15.6315 7.3737 14.8841 8.12109C14.1367 8.86849 13.763 9.77083 13.763 10.8281C13.763 11.1806 13.7934 11.4722 13.8542 11.7031C12.2865 11.6181 10.816 11.2231 9.44271 10.5182C8.06944 9.81337 6.90278 8.87153 5.94271 7.69271C5.59028 8.30035 5.41406 8.94444 5.41406 9.625C5.41406 11.0104 5.96701 12.0738 7.07292 12.8151C6.50174 12.803 5.8941 12.645 5.25 12.3411V12.3776C5.25 13.2891 5.55382 14.1003 6.16146 14.8112C6.7691 15.5221 7.51649 15.9627 8.40365 16.1328C8.05122 16.23 7.74132 16.2786 7.47396 16.2786C7.31597 16.2786 7.07899 16.2543 6.76302 16.2057C7.01823 16.9714 7.47092 17.6033 8.12109 18.1016C8.77127 18.5998 9.50955 18.855 10.3359 18.8672C8.92622 19.9609 7.34028 20.5078 5.57812 20.5078C5.26215 20.5078 4.95833 20.4896 4.66667 20.4531C6.46528 21.5955 8.42188 22.1667 10.5365 22.1667C11.8976 22.1667 13.1736 21.951 14.3646 21.5195C15.5556 21.0881 16.5764 20.5109 17.4271 19.7878C18.2778 19.0647 19.01 18.2322 19.6237 17.2904C20.2374 16.3485 20.6931 15.3641 20.9909 14.3372C21.2886 13.3103 21.4375 12.2865 21.4375 11.2656C21.4375 11.0469 21.4314 10.8828 21.4193 10.7734C22.1849 10.2266 22.8229 9.56424 23.3333 8.78646ZM28 5.25V22.75C28 24.1962 27.4865 25.4327 26.4596 26.4596C25.4327 27.4865 24.1962 28 22.75 28H5.25C3.80382 28 2.56727 27.4865 1.54036 26.4596C0.513455 25.4327 0 24.1962 0 22.75V5.25C0 3.80382 0.513455 2.56727 1.54036 1.54036C2.56727 0.513455 3.80382 0 5.25 0H22.75C24.1962 0 25.4327 0.513455 26.4596 1.54036C27.4865 2.56727 28 3.80382 28 5.25Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </ul>
              </nav>
              <p class="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M0.625 5C0.625 6.16032 1.08594 7.27312 1.90641 8.09359C2.72688 8.91406 3.83968 9.375 5 9.375C6.16032 9.375 7.27312 8.91406 8.09359 8.09359C8.91406 7.27312 9.375 6.16032 9.375 5C9.375 3.83968 8.91406 2.72688 8.09359 1.90641C7.27312 1.08594 6.16032 0.625 5 0.625C3.83968 0.625 2.72688 1.08594 1.90641 1.90641C1.08594 2.72688 0.625 3.83968 0.625 5ZM10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C3.67392 10 2.40215 9.47322 1.46447 8.53553C0.526784 7.59785 0 6.32608 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0C6.32608 0 7.59785 0.526784 8.53553 1.46447C9.47322 2.40215 10 3.67392 10 5ZM5.09125 3.12C4.33375 3.12 3.88687 3.695 3.88687 4.68375V5.34625C3.88687 6.32812 4.32625 6.885 5.09125 6.885C5.70312 6.885 6.11688 6.51875 6.17188 5.99875H6.98125V6.05688C6.91875 6.96187 6.135 7.59875 5.0875 7.59875C3.78063 7.59875 3.04437 6.76375 3.04437 5.34688V4.67625C3.04437 3.26312 3.795 2.4025 5.08812 2.4025C6.13875 2.4025 6.9225 3.06125 6.98125 4.01V4.065H6.17188C6.11688 3.51562 5.69187 3.12 5.09125 3.12Z"
                    fill="white"
                  /></svg
                >2022 Ocean Entertainment Group
              </p>
            </div>
          </div>
        </div>
        <div class="contact_lq flex flex-col gap-6 float-right mr-[200px]">
          <h4 class="text-[#F7C51E] text-[20px] font-black">GIỜ LÀM VIỆC</h4>
          <p>Thứ 2 - Thứ 6: 8.30 - 18.00</p>
          <div>
            <h5 class="flex gap-2 font-black">
              <svg
                width="2"
                height="19"
                viewBox="0 0 2 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="2" height="19" fill="#F7C51E" />
              </svg>
              TƯ VẤN HỖ TRỢ GIẢI ĐẤU
            </h5>
            <p>
              Để được tư vấn và hỗ trợ miễn phí về việc tổ chức giải <br />đấu,
              xin vui lòng liên hệ tới OEG ESPORTS qua Fanpage dưới đây.
            </p>
          </div>
          <div class="mb-[147px]">
            <button
              class="p-[17px] bg-[#F7C51E] items-center text-black font-black"
            >
              LIÊN HỆ TƯ VẤN
            </button>
          </div>
        </div>
      </section>
    </footer>
  </div>
  <transition name="fade" class="ontop bg-[#F7C51E] rounded-[3px]">
    <div
      id="pagetop"
      class="fixed right-0 bottom-0"
      v-show="scY > 300"
      @click="toTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a5568"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="arcs"
        class="webty_black"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  </transition>
</template>

<style scoped>
 .show_model{
  background-image: url('./image/Mask group.png');
  width:auto;
  height: 409px;
  z-index: 99999;
  justify-content: center;
 }
 .success{
  color: blue;
 }
.over_lay{
  position: fixed; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(115, 113, 113, 0.5); 
  z-index: 2; 
  cursor: pointer; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
