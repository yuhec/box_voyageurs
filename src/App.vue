<template>
  <v-app style="background-color: white">
    <div style="font-family:Arial">
      <v-layout
        row
        wrap
        style="padding: 20px 20px 5px 20px"
      >
        <v-flex xs3 md3>
          <v-text-field
            :label="$t('header.search')"
            prepend-inner-icon="search"
          />
        </v-flex>
        <v-spacer/>
        <v-flex xs2 md2 style="text-align: center">
          <v-icon color="black">account_circle</v-icon>
          <br>
          <a href="/" style="color: black!important;">{{ $t('header.account').toUpperCase() }}</a>
        </v-flex>
        <v-flex xs2 md2 style="text-align: center">
          <v-icon color="black">shopping_cart</v-icon>
          <br>
          <a href="/" style="color: black!important;">{{ $t('header.shopping_cart').toUpperCase() }}</a>
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
        justify-center
        style="color: white; background-color: black; font-size: 15px; text-align: center"
      >

        <v-flex xs2 md2 style="margin: auto 0;">
          <a href="/">{{ $t('header.home').toUpperCase() }}</a>
        </v-flex>
        <v-flex xs2 md2 style="margin: auto 0;">
          <a href="/">{{ $t('header.boxes').toUpperCase() }}</a>
        </v-flex>
        <v-flex xs2 md2>
          <v-img
            :src="src_logo"
            max-height="200px"
            max-width="200px"
            alt="destibox-logo"
            style="margin-top: -30px; z-index: 1000; margin-bottom: -30px; background-color: white; border-radius: 76px;"
          />
        </v-flex>
        <v-flex xs2 md2 style="margin: auto 0;">
          <a href="/">{{ $t('header.destinations').toUpperCase() }}</a>
        </v-flex>
        <v-flex xs2 md2 style="margin: auto 0;">
          <a href="/" >{{ $t('header.my_box').toUpperCase() }}</a>
          <!--<v-icon>card_giftcard</v-icon>-->
        </v-flex>
      </v-layout>
    </div>

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
      src_logo: require('./assets/logo-destibox.png')
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
<style>
  a {
    text-decoration: none;
  }
</style>
