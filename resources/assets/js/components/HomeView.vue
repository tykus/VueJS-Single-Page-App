<template>
  <div class="home-view">
    <div class="categories">
      <category
        v-for="category in categories"
        :category="category"
        track-by="id">
      </category>
    </div>
  </div>
</template>

<script>
  import Category from './Category.vue';

  export default {
    data () {
      return {
        categories: []
      }
    },
    components: { Category },
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
