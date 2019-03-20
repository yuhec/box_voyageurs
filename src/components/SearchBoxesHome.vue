<template>
  <div style="background-color: #D5D5D5; min-height: 300px;">
    <v-container style="min-height: 300px;">
      <v-layout
        justify-center
        row
        wrap
        style="padding-top: 40px;"
      >
        <v-flex md12 xs12>
          <p style="text-align: center; font-size: 20px; font-weight: bold;">
            {{ $t('find_my_box').toUpperCase() }}
          </p>
        </v-flex>
        <v-flex
          md10
          xs10
          style="background-color: black; text-align: center;"
        >
          <v-layout
            row
            wrap
            justify-space-between
            style="margin: 25px;"
          >
            <v-flex md5 xs12>
              <v-autocomplete
                :label="$t('destination')"
                :items="get_formatted_destinations"
                :loadings="loadings.destinations"
                item-text="name"
                item-value="id"
                dark
              />
            </v-flex>
            <v-flex md5 xs12>
              <v-autocomplete
                :label="$t('categories')"
                :items="categories"
                item-text="name"
                item-value="id"
                dark/>
            </v-flex>
            <v-flex md12 xs12>
              <v-btn
                @click="search_destination()"
              >
                {{ $t('lets_go') }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: [],
        destinations: [],

        loadings: {
          destinations: true,
          categories: true,
        }
      }
    },
    computed: {
      get_formatted_destinations() {
        return this.destinations.map((destination) => {
          return destination.city + ', ' + destination.country.toUpperCase();
        })
      },
    },
    created() {
      this.load_destinations();
      this.load_categories()
    },
    methods: {
      async load_destinations () {
        this.loadings.destinations = true;
        this.destinations = await this.$db.destinations.get_all_elements();
        this.loadings.destinations = false
      },
      async load_categories () {
        this.loadings.categories = true;
        this.categories = await this.$db.categories.get_all_elements();
        this.loadings.categories = false
      },
      search_destination() {

      },
    }
  }
</script>

<style>

</style>
