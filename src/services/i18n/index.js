import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {fr} from './languages/fr'

Vue.use(VueI18n)

const messages = {
  fr: fr,
}
export default new VueI18n({
  locale: 'fr',
  messages,
})