import { createI18n } from 'vue-i18n'

const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    fr: {
      message: {
        hello: 'xin chào'
      }
    }
  }

  const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr', 
    messages,
  })
   export default i18n