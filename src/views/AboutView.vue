<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import axios from 'axios';  
  import { RouterLink } from 'vue-router'
  
  import "./../assets/styleEng.scss";
  
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
        isShowModal: false,
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
        "Competition Events",
        "Tournament System",
        "Tournament Stats",
        "HOSC 2022",
        "Airgun Championship",
        "OSC",
        "OSNC",
      ];
      return {
        modules: [Autoplay, Pagination, Navigation, EffectFade],
        paginationShow: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<div class="' +
              className +
              " show" +
              '">' +
              menu[index] +
              "</div>"
            );
          },
        },
        paginationShow_fram2: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return ('<div class="' + className + " show_fram1" + '">' + '' + "</div>"
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
      showModel() {
        this.isShowModal = true
      },
      hide() {
        this.isShowModal = false
      },
      onSubmit() {
        if (!this.form.name) {
        this.error = {
          text: "Enter the exact condition",
          status: true,
        };
      } else if (!this.form.company) {
        this.error = {
          text: "Enter the exact condition",
          status: true,
        };
      }
      else if (!this.form.service) {
        this.error = {
          text: "Enter the exact condition",
          status: true,
        };
      }
      else if (!this.form.email) {
        this.error = {
          text: "Enter the exact condition Email ",
          status: true,
        };
      }
      else if (!this.form.phone) {
        this.error = {
          text: "Enter the exact condition over 10 characters",
          status: true,
        };
      }
        else if (this.form.name.length > 0) {
          this.success = {
            status: true,
          };
          const creactContact = async () => {
        try {
          const res = await axios.post('https://sendmail.oeg.vn/api/contact-mail',{
            'T??n': this.form.name,
            'C??ng Ty': this.form.company,
            "Ch???c V???": this.form.service,
            "Email": this.form.email,
            "S??T": this.form.phone,
          });
        } catch (error) {
           console.log(error);
        }
        }
        creactContact()
            this.error.text = '',
            this.form.name = '',
            this.form.company = '',
            this.form.service = '',
            this.form.email = '',
            this.form.phone = '',
            this.showModel()
        } else {
          this.error = {
            text: "",
            status: false,
          };
        }
      },
      setLocale(locale) {
        this.$i18n.locale = locale
      }
    },
  };
  </script>
    
  <template>
    <div class="flex items-cente fixed z-10">
      <div class="over_lay" @click="hide" v-if="isShowModal">
        <div class="show_model flex flex-col items-center pt-5 px-5 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" fill="currentColor"
            class="bi bi-check-circle text-[#F7C51E]" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <h3 class="text-[48px] text-[#F7C51E] font-black">SUCCESS</h3>
          <p>We will contact you as soon as possible!
          </p>
          <span>Thank you!</span>
        </div>
      </div>
    </div>
    <div>
      <div class="banner select-none">
          <header class="
              header_top
              flex
              justify-between
              py-2
              items-center
              bg-transparent
              mt-2
              md:gap-1
              mx-[229px]
            ">
            <div class="logo">
              <RouterLink to="/landing/en"><img src="./../image/OEG-White.png" alt="" /></RouterLink>
            </div>
            <div class="Language flex items-center float-right right-[10px] ">
              <ul>
                <li class="group relative no-underline">
                  <RouterLink to="/ENG" class="menu-item group-hover:border-white flex items-center mb-2 gap-1">
                    <img src="./../image/ENG.png" alt="">
                    ENG
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                      class="bi bi-chevron-dow text-white" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </RouterLink>
                  <ul
                    class="absolute left-0 bg-transparent w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                    <li><RouterLink to="/landing/vn" class="menu-sub-item flex items-center mb-2" @click="setLocale('vn')">
                        <img src="./../image/VN.png" alt="">
                        <p class="px-[5px] text-white">VN</p>
                      </RouterLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
        </div>
        <div class="bg-[#121212] ">
      <div class="max-w-[90rem] mx-auto">
        <section class="side1">
          <div class="slider2">
            <swiper
            :loop="true" :effect="'fade'" :autoplay="{
            delay: 5500,
            disableOnInteraction: false,
          }" :pagination="paginationShow_fram2" 
            :modules="modules" class="mySwiper_one">
              <swiper-slide><img src="./../image/ENG/Frame1/1.jpg" alt="Welcometo Oeg esports" /></swiper-slide>
              <swiper-slide><img src="./../image/ENG/Frame1/2.jpg" alt="T???m Nh??n OEG" /></swiper-slide>
              <swiper-slide><img src="./../image/ENG/Frame1/3.jpg" alt="S???c m???nh nh??n s???" /></swiper-slide>
              <swiper-slide><img src="./../image/ENG/Frame1/4.jpg" alt="M???ng l?????i k???t n???i" /></swiper-slide>
              <swiper-slide><img src="./../image/ENG/Frame1/5.jpg" alt="H??? sinh th??i oeg" /></swiper-slide>
              <swiper-slide><img src="./../image/ENG/Frame1/6.jpg" alt="?????i T??c VTC" /></swiper-slide>
              <div class="absolute right-[29px] bottom-[362px;] show_fram2">
              <div class="swiper-pagination"></div>
            </div>
            </swiper>
          </div>
        </section>
        <section class="side2 select-none">
          <div class="text_side2">
            <p class="text-[#F7C51E]">TOURNAMENTS</p>
            <h2 class="fiter text-[64px] font-black uppercase ">Tournament System</h2>
          </div>
          <div class="mt-[0]">
            <div class="">
              <swiper :loop="true" :pagination="paginationShow" :modules="modules" :autoplay="{
                delay: 5500,
                disableOnInteraction: false,
              }" class="mySwiper_two">
                <swiper-slide><img src="./../image/ENG/Frame2/1.jpg" alt="Timeline" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/2.jpg" alt="B??? m??n thi ?????u" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/3.jpg" alt="H??? th???ng gi???i" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/4.jpg" alt="Th??ng s??? gi???i" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/5.jpg" alt="Gi???i ?????u HOSC 2022" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/6.jpg" alt="Gi???i s??ng h??i" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/7.jpg" alt="Gi???i OSC" /></swiper-slide>
                <swiper-slide><img src="./../image/ENG/Frame2/8.jpg" alt="Gi???i OSNC" /></swiper-slide>
                <div class="swiper-pagination box_slider"></div>
              </swiper>
            </div>
          </div>
        </section>
        <section class="side3">
          <div class="slider2_titel">
            <div id="tabs" class="">
              <div class="tabs flex justify-around relative top-[7rem]">
                <button v-on:click="activetab = '1'" v-bind:class="[activetab === '1' ? 'active' : 'text-[#ffff]']"
                  class="text-[48px] text-[#F7C51E] font-black text-show">
                  PARTNERS BENEFITS
                </button>
                <button v-on:click="activetab = '2'" v-bind:class="[activetab === '2' ? 'active' : 'text-[#ffff]']"
                  class="text-[48px] text-[#F7C51E] font-black text-show">
                  STUDENT CUP BENEFITS
  
                </button>
              </div>
              <p class="
                  text_backgroup
                  flex
                  justify-center
                  text-[#3E3E3E] text-[189px]
                  font-black
                  items-center
                  select-none
                ">
                OEG ESPORTS
              </p>
              <div class="content">
                <div v-if="activetab === '1'" class="tabcontent">
                  <swiper :slidesPerView="1" :spaceBetween="0" :loop="true" :autoplay="{
                    delay: 5500,
                    disableOnInteraction: false,
                  }" :pagination="{
                      clickable: true,
                    }" :navigation="true" :modules="modules" class="mySwiper_three ">
                    <swiper-slide><img src="./../image/ENG/Frame3/1.jpg" alt="Quy???n l???i" /></swiper-slide>
                    <swiper-slide><img src="./../image/ENG/Frame3/2.jpg" alt="Quy???n l???i ?????c tr??ng" /></swiper-slide>
                    <swiper-slide><img src="./../image/ENG/Frame3/3.jpg" alt="Quy???n l???i truy???n th??ng" /></swiper-slide>
                    <swiper-slide><img src="./../image/ENG/Frame3/4.jpg" alt="Quy???n l???i ngo??i s??? ki???n" /></swiper-slide>
                    <div class="page"></div>
                  </swiper>
                </div>
                <div v-if="activetab === '2'" class="tabcontent">
                  <swiper :slidesPerView="1" :spaceBetween="0" :loop="true" :autoplay="{
                    delay: 5500,
                    disableOnInteraction: false,
                  }" :pagination="{
                      clickable: true,
                    }" :navigation="true" :modules="modules" class="mySwiper_three">
                    <swiper-slide><img src="./../image/ENG/Frame3/5.jpg" alt="Quy???n l???i truy???n th??ng " /></swiper-slide>
                    <swiper-slide><img src="./../image/ENG/Frame3/6.jpg" alt="Quy???n l???i ?????c tr??ng" /></swiper-slide>
                    <swiper-slide><img src="./../image/ENG/Frame3/7.jpg" alt="Quy???n l???i ngo??i s??? ki???n" /></swiper-slide>
                    <div class="page"></div>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="contact relative">
          <div class="title">
            <h3 class="
                text_title2
                flex
                justify-center
                text-[64px]
                font-black
                relative
                text-[#F7C51E]
                top-[135px]
                select-none
              ">
              CONTACT
            </h3>
            <p class="
                text_backgroup2
                flex
                justify-center
                text-[#3E3E3E] text-[189px]
                font-black
                items-center
                select-none
              ">
              OEG ESPORTS
            </p>
          </div>
          <div>
            <div class="contact_all justify-center flex">
              <div class="contact_all  mr-[112px] px-3">
                <h4 class="fiter text-[40px] font-black">ABOUT US</h4>
                <nav>
                  <ul class="ml-5 mt-[20px] px-[10px] nav_side3">
                    <li class="flex gap-[5px] items-center py-[10px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 11" fill="none"
                        class="mb-[25px]">
                        <path
                          d="M4.5 0C2.20997 0 0.353516 1.85644 0.353516 4.14649C0.353516 4.91233 0.503418 5.70333 0.933591 6.27344L4.5 11L8.0664 6.27344C8.45713 5.75561 8.64648 4.84017 8.64648 4.14649C8.64649 1.85644 6.79004 0 4.5 0ZM4.5 2.40155C5.46357 2.40155 6.24493 3.18292 6.24493 4.14648C6.24493 5.11005 5.46357 5.89142 4.5 5.89142C3.53644 5.89142 2.75507 5.11005 2.75507 4.14649C2.75507 3.18292 3.53644 2.40155 4.5 2.40155Z"
                          fill="white" />
                      </svg>
                      <p> <strong class="">Address</strong>: No. 131 Thai Ha Street, Trung Liet Ward, <br>Dong Da District, Hanoi City</p>
                    </li>
                    <li class="flex gap-[5px] items-center my-[10px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-telephone-fill text-white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <strong>Phone:</strong><a href="tel:02466565025"> 02466565025</a>
                    </li>
                    <li class="flex gap-[5px] items-center my-[10px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M10.7767 2.00009C10.7312 1.99541 10.6854 1.99541 10.64 2.00009H1.30667C1.24685 2.00102 1.18743 2.00998 1.13 2.02676L5.94667 6.82343L10.7767 2.00009Z"
                          fill="white" />
                        <path
                          d="M11.27 2.46338L6.41664 7.29671C6.29174 7.42088 6.12277 7.49057 5.94664 7.49057C5.77052 7.49057 5.60155 7.42088 5.47664 7.29671L0.666644 2.50005C0.651857 2.55439 0.644017 2.61039 0.643311 2.66671V9.33338C0.643311 9.51019 0.713548 9.67976 0.838573 9.80478C0.963597 9.92981 1.13317 10 1.30998 10H10.6433C10.8201 10 10.9897 9.92981 11.1147 9.80478C11.2397 9.67976 11.31 9.51019 11.31 9.33338V2.66671C11.3073 2.59726 11.2938 2.52866 11.27 2.46338ZM1.76664 9.33338H1.30331V8.85671L3.72664 6.45338L4.19664 6.92338L1.76664 9.33338ZM10.6366 9.33338H10.17L7.73998 6.92338L8.20998 6.45338L10.6333 8.85671L10.6366 9.33338Z"
                          fill="white" />
                      </svg><strong>Email:</strong> biz@oeg.vn
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="contacts h-[747px] w-[732px] relative top-[-142px]">
                <div class="from_contact mx-[73px] my-[54px]">
                  <h3 class="
                      text-[48px] text-[#F7C51E]
                      font-black
                      text-center
                      mb-[30px]
                    ">
                    CONTACT
                  </h3>
                  <form @submit.prevent="onSubmit" class="form_contact" autocomplete="off">
                    <div class="input_all">
                      <input id="name" :class="{ error: error.status}" type="text" v-model="form.name"
                        placeholder="Name" class="input_bg block py-3" />
                      <input type="text" :class="{ error: error.status }" v-model="form.company"
                        placeholder="Unit/Company" class="input_bg block py-3" />
                      <input type="text" :class="{ error: error.status }" v-model="form.service"
                        placeholder="Position" class="input_bg block py-3" />
                      
                      <input type="email" :class="{ error: error.status}" v-model="form.email" placeholder="Email*"
                        class="input_bg block py-3" />
                      <input type="number" :class="{ error: error.status }" v-model="form.phone"
                        placeholder="Phone" class="input_bg block py-3" />
                        <p class="error-text text-red-500 text-[15px]" v-if="error.status">
                        {{ error.text }}
                      </p>
                      <div class="flex justify-center">
                        <button type="submit" class="
                          bg-submit 
                         bg-[#F7C51E]
                          text-black text-[20px]
                          rounded
                        ">
                        Submit
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
    </div>
      <footer class="parent2 max-w-[95rem] mx-auto">
        <section class="p-[60px]">
          <div class="Contact_information w-[732px] h-[518px] child2">
            <img src="./../image/OEG-White.png" alt="" class="logo ml-[60px] mt-[60px] mb-[10px] logo_contact" />
            <div class="nav_contact px-[85px]">
              <nav>
                <h4 class="text-[#F7C51E] text-[20px] font-black">{{ $t("text_contact") }}</h4>
                <ul class="">
                  <li class="flex gap-[5px] items-center py-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 11" fill="none"
                      class="mb-[25px]">
                      <path
                        d="M4.5 0C2.20997 0 0.353516 1.85644 0.353516 4.14649C0.353516 4.91233 0.503418 5.70333 0.933591 6.27344L4.5 11L8.0664 6.27344C8.45713 5.75561 8.64648 4.84017 8.64648 4.14649C8.64649 1.85644 6.79004 0 4.5 0ZM4.5 2.40155C5.46357 2.40155 6.24493 3.18292 6.24493 4.14648C6.24493 5.11005 5.46357 5.89142 4.5 5.89142C3.53644 5.89142 2.75507 5.11005 2.75507 4.14649C2.75507 3.18292 3.53644 2.40155 4.5 2.40155Z"
                        fill="white" />
                    </svg>
                    <p> <strong class="">Address: </strong> No. 131 Thai Ha Street, Trung Liet Ward, Dong Da District, Hanoi City</p>
                  </li>
                  <li class="flex gap-[5px] items-center my-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                      class="bi bi-telephone-fill text-white" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <strong>Phone:</strong><a href="tel:02466565025"> 02466565025</a>
                  </li>
                  <li class="flex gap-[5px] items-center my-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10.7767 2.00009C10.7312 1.99541 10.6854 1.99541 10.64 2.00009H1.30667C1.24685 2.00102 1.18743 2.00998 1.13 2.02676L5.94667 6.82343L10.7767 2.00009Z"
                        fill="white" />
                      <path
                        d="M11.27 2.46338L6.41664 7.29671C6.29174 7.42088 6.12277 7.49057 5.94664 7.49057C5.77052 7.49057 5.60155 7.42088 5.47664 7.29671L0.666644 2.50005C0.651857 2.55439 0.644017 2.61039 0.643311 2.66671V9.33338C0.643311 9.51019 0.713548 9.67976 0.838573 9.80478C0.963597 9.92981 1.13317 10 1.30998 10H10.6433C10.8201 10 10.9897 9.92981 11.1147 9.80478C11.2397 9.67976 11.31 9.51019 11.31 9.33338V2.66671C11.3073 2.59726 11.2938 2.52866 11.27 2.46338ZM1.76664 9.33338H1.30331V8.85671L3.72664 6.45338L4.19664 6.92338L1.76664 9.33338ZM10.6366 9.33338H10.17L7.73998 6.92338L8.20998 6.45338L10.6333 8.85671L10.6366 9.33338Z"
                        fill="white" />
                    </svg><strong>Email:</strong> biz@oeg.vn
                  </li>
                </ul>
              </nav>
              <div>
                <h4 class="text-[#F7C51E] text-[20px] font-black">{{ $t("text_jhonWith") }}</h4>
                <nav class="py-2">
                  <ul class="flex gap-6 nav_footer">
                    <li>
                      <a href="https://www.facebook.com/oegvn"> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.11263 0C2.28046 0 0 2.28046 0 5.11263V22.8874C0 25.7196 2.28046 28 5.11263 28H14.7464V17.0538H11.8519V13.1128H14.7464V9.74576C14.7464 7.10046 16.4566 4.67163 20.3963 4.67163C21.9914 4.67163 23.1709 4.82476 23.1709 4.82476L23.0781 8.50503C23.0781 8.50503 21.8752 8.49366 20.5625 8.49366C19.1418 8.49366 18.914 9.14824 18.914 10.2349V13.1128H23.191L23.0046 17.0538H18.914V28.0001H22.8874C25.7195 28.0001 28 25.7196 28 22.8874V5.11266C28 2.28049 25.7195 2.8e-05 22.8874 2.8e-05H5.1126L5.11263 0Z"
                          fill="white" />
                      </svg></a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/user/wadesports"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.7526 21.4193V18.5573C16.7526 17.9497 16.5764 17.6458 16.224 17.6458C16.0174 17.6458 15.8168 17.7431 15.6224 17.9375V22.0208C15.8168 22.2153 16.0174 22.3125 16.224 22.3125C16.5764 22.3125 16.7526 22.0148 16.7526 21.4193ZM20.1068 19.1953H21.3099V18.5755C21.3099 17.9557 21.1094 17.6458 20.7083 17.6458C20.3073 17.6458 20.1068 17.9557 20.1068 18.5755V19.1953ZM9.69792 14.3464V15.6224H8.23958V23.3333H6.89062V15.6224H5.46875V14.3464H9.69792ZM13.362 16.6432V23.3333H12.1406V22.6042C11.6667 23.151 11.2049 23.4245 10.7552 23.4245C10.3542 23.4245 10.099 23.2543 9.98958 22.9141C9.91667 22.7075 9.88021 22.3793 9.88021 21.9297V16.6432H11.0833V21.5651C11.0833 21.8568 11.0894 22.0148 11.1016 22.0391C11.1137 22.2214 11.2049 22.3125 11.375 22.3125C11.6181 22.3125 11.8733 22.1241 12.1406 21.7474V16.6432H13.362ZM17.9557 18.6667V21.3281C17.9557 21.9601 17.9132 22.4036 17.8281 22.6589C17.6823 23.1693 17.3602 23.4245 16.862 23.4245C16.4366 23.4245 16.0234 23.1753 15.6224 22.6771V23.3333H14.401V14.3464H15.6224V17.2812C16.0113 16.7951 16.4245 16.5521 16.862 16.5521C17.3602 16.5521 17.6823 16.8073 17.8281 17.3177C17.9132 17.5729 17.9557 18.0226 17.9557 18.6667ZM22.5312 21.0182V21.1823C22.5312 21.5347 22.5191 21.796 22.4948 21.9661C22.4583 22.2335 22.3672 22.4766 22.2214 22.6953C21.8932 23.1814 21.4071 23.4245 20.763 23.4245C20.1311 23.4245 19.6389 23.1936 19.2865 22.7318C19.0312 22.4036 18.9036 21.8811 18.9036 21.1641V18.8125C18.9036 18.0955 19.0252 17.5729 19.2682 17.2448C19.6207 16.783 20.1068 16.5521 20.7266 16.5521C21.3464 16.5521 21.8203 16.783 22.1484 17.2448C22.4036 17.5972 22.5312 18.1198 22.5312 18.8125V20.1979H20.1068V21.3828C20.1068 22.0026 20.3134 22.3125 20.7266 22.3125C21.0182 22.3125 21.2005 22.1545 21.2734 21.8385C21.2734 21.8264 21.2765 21.7839 21.2826 21.7109C21.2886 21.638 21.2917 21.5378 21.2917 21.4102V21.0182H22.5312ZM14.3099 5.9974V8.84115C14.3099 9.46094 14.1155 9.77083 13.7266 9.77083C13.3377 9.77083 13.1432 9.46094 13.1432 8.84115V5.9974C13.1432 5.36545 13.3377 5.04948 13.7266 5.04948C14.1155 5.04948 14.3099 5.36545 14.3099 5.9974ZM24.026 18.9948C24.026 16.8438 23.9106 15.2639 23.6797 14.2552C23.5582 13.7205 23.2969 13.2739 22.8958 12.9154C22.4948 12.5569 22.033 12.3472 21.5104 12.2865C19.8576 12.1042 17.3542 12.013 14 12.013C10.658 12.013 8.16059 12.1042 6.50781 12.2865C5.97309 12.3472 5.50825 12.5569 5.11328 12.9154C4.71832 13.2739 4.46007 13.7205 4.33854 14.2552C4.09549 15.3125 3.97396 16.8924 3.97396 18.9948C3.97396 21.1337 4.09549 22.7135 4.33854 23.7344C4.46007 24.2569 4.71832 24.7005 5.11328 25.0651C5.50825 25.4297 5.96701 25.6424 6.48958 25.7031C8.15451 25.8854 10.658 25.9766 14 25.9766C17.342 25.9766 19.8455 25.8854 21.5104 25.7031C22.033 25.6424 22.4918 25.4297 22.8867 25.0651C23.2817 24.7005 23.5399 24.2569 23.6615 23.7344C23.9045 22.7135 24.026 21.1337 24.026 18.9948ZM10.263 7.1276L11.9036 1.73177H10.5365L9.60677 5.28646L8.64062 1.73177H7.21875C7.30382 2.01128 7.44358 2.43056 7.63802 2.98958L8.07552 4.2474C8.50087 5.49913 8.78038 6.4592 8.91406 7.1276V10.7917H10.263V7.1276ZM15.5312 8.60417V6.23438C15.5312 5.52951 15.4036 5.00087 15.1484 4.64844C14.796 4.18663 14.322 3.95573 13.7266 3.95573C13.1068 3.95573 12.6328 4.18663 12.3047 4.64844C12.0495 5.00087 11.9219 5.52951 11.9219 6.23438V8.60417C11.9219 9.30903 12.0495 9.83767 12.3047 10.1901C12.6328 10.6519 13.1068 10.8828 13.7266 10.8828C14.322 10.8828 14.796 10.6519 15.1484 10.1901C15.4036 9.86198 15.5312 9.33333 15.5312 8.60417ZM18.8307 10.7917H20.0521V4.04688H18.8307V9.20573C18.5634 9.58247 18.3082 9.77083 18.0651 9.77083C17.8828 9.77083 17.7856 9.67361 17.7734 9.47917C17.7613 9.45486 17.7552 9.29688 17.7552 9.00521V4.04688H16.5339V9.38802C16.5339 9.83767 16.5703 10.1719 16.6432 10.3906C16.7769 10.7188 17.0382 10.8828 17.4271 10.8828C17.8646 10.8828 18.3325 10.6094 18.8307 10.0625V10.7917ZM28 5.25V22.75C28 24.1962 27.4865 25.4327 26.4596 26.4596C25.4327 27.4865 24.1962 28 22.75 28H5.25C3.80382 28 2.56727 27.4865 1.54036 26.4596C0.513455 25.4327 0 24.1962 0 22.75V5.25C0 3.80382 0.513455 2.56727 1.54036 1.54036C2.56727 0.513455 3.80382 0 5.25 0H22.75C24.1962 0 25.4327 0.513455 26.4596 1.54036C27.4865 2.56727 28 3.80382 28 5.25Z"
                          fill="white" />
                      </svg></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/oegesports/">
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.0495 9.36667C11.469 9.36667 9.36316 11.4725 9.36316 14.053C9.36316 16.6335 11.469 18.7393 14.0495 18.7393C16.63 18.7393 18.7358 16.6335 18.7358 14.053C18.7358 11.4725 16.63 9.36667 14.0495 9.36667ZM28.105 14.053C28.105 12.1124 28.1225 10.1893 28.0135 8.25222C27.9046 6.00222 27.3913 4.00534 25.746 2.36003C24.0971 0.711202 22.1038 0.201436 19.8538 0.0924519C17.9132 -0.0165325 15.9901 0.0010457 14.053 0.0010457C12.1124 0.0010457 10.1893 -0.0165325 8.25222 0.0924519C6.00222 0.201436 4.00534 0.714717 2.36003 2.36003C0.711202 4.00886 0.201436 6.00222 0.0924519 8.25222C-0.0165325 10.1928 0.0010457 12.1159 0.0010457 14.053C0.0010457 15.9901 -0.0165325 17.9167 0.0924519 19.8538C0.201436 22.1038 0.714718 24.1007 2.36003 25.746C4.00886 27.3948 6.00222 27.9046 8.25222 28.0135C10.1928 28.1225 12.1159 28.105 14.053 28.105C15.9936 28.105 17.9167 28.1225 19.8538 28.0135C22.1038 27.9046 24.1007 27.3913 25.746 25.746C27.3948 24.0971 27.9046 22.1038 28.0135 19.8538C28.126 17.9167 28.105 15.9936 28.105 14.053ZM14.0495 21.2635C10.0592 21.2635 6.83894 18.0432 6.83894 14.053C6.83894 10.0628 10.0592 6.84245 14.0495 6.84245C18.0397 6.84245 21.26 10.0628 21.26 14.053C21.26 18.0432 18.0397 21.2635 14.0495 21.2635ZM21.5553 8.23112C20.6237 8.23112 19.8714 7.47878 19.8714 6.54714C19.8714 5.6155 20.6237 4.86315 21.5553 4.86315C22.487 4.86315 23.2393 5.6155 23.2393 6.54714C23.2396 6.76836 23.1962 6.98746 23.1117 7.1919C23.0272 7.39634 22.9031 7.58209 22.7467 7.73852C22.5903 7.89494 22.4045 8.01897 22.2001 8.1035C21.9957 8.18803 21.7766 8.2314 21.5553 8.23112Z"
                        fill="white" />
                    </svg>
                  </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@oegvn?lang=vi-VN">
                    <img src="./../image/tiktok_icon.png" alt="" class="w-[29px] h-[29px]">
                  </a>
                    </li>
                  </ul>
                </nav>
                <p class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M0.625 5C0.625 6.16032 1.08594 7.27312 1.90641 8.09359C2.72688 8.91406 3.83968 9.375 5 9.375C6.16032 9.375 7.27312 8.91406 8.09359 8.09359C8.91406 7.27312 9.375 6.16032 9.375 5C9.375 3.83968 8.91406 2.72688 8.09359 1.90641C7.27312 1.08594 6.16032 0.625 5 0.625C3.83968 0.625 2.72688 1.08594 1.90641 1.90641C1.08594 2.72688 0.625 3.83968 0.625 5ZM10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C3.67392 10 2.40215 9.47322 1.46447 8.53553C0.526784 7.59785 0 6.32608 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0C6.32608 0 7.59785 0.526784 8.53553 1.46447C9.47322 2.40215 10 3.67392 10 5ZM5.09125 3.12C4.33375 3.12 3.88687 3.695 3.88687 4.68375V5.34625C3.88687 6.32812 4.32625 6.885 5.09125 6.885C5.70312 6.885 6.11688 6.51875 6.17188 5.99875H6.98125V6.05688C6.91875 6.96187 6.135 7.59875 5.0875 7.59875C3.78063 7.59875 3.04437 6.76375 3.04437 5.34688V4.67625C3.04437 3.26312 3.795 2.4025 5.08812 2.4025C6.13875 2.4025 6.9225 3.06125 6.98125 4.01V4.065H6.17188C6.11688 3.51562 5.69187 3.12 5.09125 3.12Z"
                      fill="white" />
                  </svg>2022 Ocean Entertainment Group
                </p>
              </div>
            </div>
          </div>
          <div class="contact_lq flex flex-col gap-6 float-right">
            <h4 class="text-[#F7C51E] text-[20px] font-black">WORKING HOURS</h4>
            <p>Mon-Fir: 8.30 - 18.00</p>
            <div>
              <h5 class="flex gap-2 font-black">
                <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="2" height="19" fill="#F7C51E" />
                </svg>
                SUPPORT FOR TOURNAMENT
              </h5>
              <p class="">
                Please reach out to OEG esports via the fanpage <br class="br_footer">for free advice and with the tournament`s planning below.
              </p>
            </div>
            <div class="mb-[147px]">
              <button class="p-[17px] bg-[#F7C51E] items-center text-black font-black">
               <a href="https://www.facebook.com/oegvn">CONTACT CONSULTANT</a>
              </button>
            </div>
          </div>
        </section>
      </footer>
    </div>
    <transition name="fade" class="ontop bg-[#F7C51E] rounded-[3px]">
      <div id="pagetop" class="fixed right-0 bottom-0 in" v-show="scY > 300" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a5568"
          stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs" class="webty_black">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
  </template>
  
  <style scoped>
  .show_model {
    background-image: url('./../image/Mask group.png');
    width: 371px;
    height: 409px;
    z-index: 99999;
    justify-content: center;
  }
  
  .over_lay {
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
  .bg-submit{
    padding: 9px 260px;
  }
  @media only screen and (max-width: 840px) {
  .bg-submit{
  padding: 9px 69px;
  align-items: center;
  }
}
  </style>
  