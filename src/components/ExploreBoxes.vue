<template>
  <div style="margin-top: 20px;">
    <header/>
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex xs12 md12>
        <p class="text-xs-center"><b>{{ $t('explore_our_boxes').toUpperCase() }}</b></p>
      </v-flex>
      <v-flex xs12 md12>
        <v-container>
          <v-layout
            row
            wrap
            justify-space-between
          >
            <v-flex
              xs4 md4
              style="padding: 5px"
              v-for="(box) in boxes.slice(0,3)"
              :key="box.id"
            >
                <v-progress-linear
                  v-if="loadings.photos"
                  indeterminate
                />
              <div
                v-else
                v-for="(photo) in photos"
              >
                <v-img
                  v-if="box.destination.photo_id === photo.id"
                  :src="photo.url"
                  :alt="photo.name"
                />
              </div>
                <p><b>{{ box.destination.city }}</b></p>
                <p>{{ format_short_description(box.comments) }}</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // boxes: [
        //   { id: 0, destination: {city: 'Bordeaux'}, comments: 'Séjour pour 2 personnes', photo: {name: 'Bordeaux', url:'https://image.shutterstock.com/image-photo/place-de-la-bourse-bordeaux-450w-124255273.jpg'}},
        //   { id: 1, destination: {city: 'Dublin'}, comments: 'Séjour pour 2 personnes', photo: {name: 'Dublin', url:'https://image.shutterstock.com/image-photo/place-de-la-bourse-bordeaux-450w-124255273.jpg'}},
        //   { id: 2, destination: {city: 'Amsterdam'}, comments: 'Séjour pour 2 personnes', photo: {name: 'Amsterdam', url:'https://image.shutterstock.com/image-photo/place-de-la-bourse-bordeaux-450w-124255273.jpg'}},
        //
        // ],
        boxes: [],
        photos: [],

        loadings: {
          boxes: true,
          photos: true,
        }
      }
    },
    created() {
      this.load_boxes();
      this.load_photos();
    },
    methods: {
      async load_boxes () {
        this.loadings.boxes = true;
        this.boxes = await this.$db.boxes.get_all_elements();
        console.log(this.boxes);
        this.loadings.boxes = false
      },
      async load_photos () {
        this.loadings.photos = true;
        this.photos = await this.$db.photos.get_all_elements();
        console.log(this.photos);
        this.loadings.photos = false
      },
      format_short_description(description) {
        if (description != null && description.length > 65) {
          return description.substr(0, 250) + '...';
        } else if (description != null) {
          return description;
        } else {
          return '';
        }
      }
    }
  }
</script>

<style>
  p {
    margin-bottom: 0;
  }
</style>
