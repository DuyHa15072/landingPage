import {createI18n} from 'vue-i18n'

const i18n = new createI18n({
   locale : 'en',
   fallbackLocale: 'vn',
   messages:{
    en:{
      text_giaidau : 'TOURNAMENTS',
      text_2 : 'TEAM SYSTEM',
      text_3 : ''
    },
    vn:{
      text_giaidau: 'GIẢI ĐẤU',
      text_2 : 'HỆ THỐNG GIẢI ĐẤU'
    }
   }
})





export default i18n