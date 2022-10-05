import {createI18n} from 'vue-i18n'

const i18n = new createI18n({
   locale : 'en',
   fallbackLocale: 'vn',
   messages:{
    en:{
      text : 'Hello'
    },
    vn:{
      text: 'xin chào'
    }
   }
})





export default i18n