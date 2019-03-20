import Vue from 'vue';
import i18n from '@/services/i18n';

import '@fortawesome/fontawesome-free/css/all.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import Toasted from 'vue-toasted';

Vue.use(
  Vuetify,
  {
    lang: {
      t: (key, ...params) => i18n.t(key, params),
    },
    iconfont: 'fa',
  });

Vue.use(Toasted, {
  duration: 5000,
});


