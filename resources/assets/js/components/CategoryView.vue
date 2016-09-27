<template>
  <div class="category-view">
    <topic v-for="topic in topics" :topic="topic" track-by="id"></topic>
  </div>
</template>

<script>
  import Topic from './Topic.vue'

  export default {
    components: { Topic },

    data () {
      return {
        topics: []
      }
    },

    route: {
      data (transition) {
        const categoryId = transition.to.params.categoryId;

        return this.$http.get(`/api/categories/${categoryId}/topics`)
          .then((data) => ({ topics: data.data}));
      }
    }
  }
</script>
