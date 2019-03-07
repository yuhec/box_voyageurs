<template>
  <div>
    <search-boxes-home/>
    <explore-boxes/>
  </div>
</template>

<script>
  import SearchBoxesHome from '@/components/SearchBoxesHome'
  import ExploreBoxes from '@/components/ExploreBoxes'
  export default {
    components: {
      SearchBoxesHome,
      ExploreBoxes
    },
    data () {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>

</style>
