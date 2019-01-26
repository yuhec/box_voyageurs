import Vue from 'vue'
import i18n from '@/services/i18n'

import '@fortawesome/fontawesome-free/css/all.css'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VToolbar,
  VGrid,
  VIcon,
  VBtn,
  VCard,
  VDialog,
  VSwitch,
  VCheckbox,
  VTooltip,
  VTextField,
  VTextarea,
  VAutocomplete,
  VList,
  VForm,
  VProgressCircular,
  VProgressLinear,
  VDivider,
  VCombobox,
  VMenu,
  VTabs,
  VSelect,
  VDatePicker,
  VHover,
  transitions,
  VBottomNav,
  VRating,
  VTimeline,
} from 'vuetify'
import {Ripple} from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'

import Toasted from 'vue-toasted'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VGrid,
    VIcon,
    VBtn,
    VCard,
    VToolbar,
    VDialog,
    VSwitch,
    VCheckbox,
    VTooltip,
    VTextField,
    VTextarea,
    VAutocomplete,
    VList,
    VForm,
    VProgressCircular,
    VProgressLinear,
    VDivider,
    VCombobox,
    VMenu,
    VTabs,
    VSelect,
    VDatePicker,
    VHover,
    transitions,
    VBottomNav,
    VRating,
    VTimeline,
  },
  directives: {
    Ripple,
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  iconfont: 'fa',
})

Vue.use(Toasted, {
  duration: 5000,
})


