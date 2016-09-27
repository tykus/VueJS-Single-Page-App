<template>
  <div class="home-view">
    This is the homepage.
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: []
      }
    },
    route: {
      data () {
        return this.$http.get('/api/categories')
          .then(function (data) {
              return { categories: data.data }
          });
      }
    }
  }
</script>
