<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <home/>
    </v-content>
    <v-footer class="footer is-primary" height="auto" dark style="background-color: black">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex md4>
            <p>{{$t('footer.about_destibox')}}</p>
            <p>{{$t('footer.about_us')}}</p>
            <p>{{$t('footer.Quality_charter')}}</p>
            <p>{{$t('footer.legals_information')}}</p>
            <p>{{$t('footer.Sponsorship_by_destibox')}}</p>
            <p>{{$t('footer.Satisfied_or_Refunded_Warranty')}}</p>
          </v-flex>
          <v-flex md4>
            <p>{{$t('footer.Need_some_help')}}</p>
            <p>{{$t('footer.help_and_contact')}}</p>
            <p>{{$t('footer.How_does_it_work')}}</p>
            <p>{{$t('footer.Delivery_terms_and_conditions ')}}</p>
            <p>{{$t('footer.Exchange_and_extension ')}}</p>
            <p>{{$t('footer.')}}</p>
          </v-flex>

          <v-flex md4>
            <v-layout column>
              <v-flex xs12 md12>
                <p>{{$t('footer.payment_method')}}</p>
              </v-flex>

              <v-flex xs12 md12>
                <v-icon style="padding: 5px" large>home</v-icon>
                <v-icon style="padding: 5px" large>event</v-icon>
                <v-icon style="padding: 5px" large>info</v-icon>
              </v-flex>
            </v-layout>
            <v-layout column>
              <v-flex xs12 md12>
                <p>{{$t('footer.follow_us')}}</p>
              </v-flex>
              <v-flex xs12 md12>
                <v-icon style="padding: 5px" large>home</v-icon>
                <v-icon style="padding: 5px" large>event</v-icon>
                <v-icon style="padding: 5px" large>info</v-icon>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 md12 style="text-align: center">
            <p>Conditions Générales de Vente Politique de confidentialité et cookies Mentions Légales</p>
          </v-flex>
          <v-flex xs12 md12 style="text-align: center">
            <p>© 2019 Wonderbox</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: 'App',
  components: {
    Home,
  },
  data () {
    return {
      //
    }
  },
  created () {
    this.create_theme()
  },
  methods: {
    create_theme() {
      this.$vuetify.theme = {
        primary: '#ffffff',
        secondary: '#D5D5D5',
        accent: '#ffffff',
        error: '#E53935',
        info: '#2196F3',
        success: '#4e974e',
        warning: '#FFC107',
      }
    }
  }
}
</script>
