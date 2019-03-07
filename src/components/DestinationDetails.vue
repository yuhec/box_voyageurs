<template>
  <div>
    <p>Page de destination de la box : {{ $route.params.id }} </p>
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
