<template>
  <div class="episodes">
    <ApolloQuery 
      :query="require('../graphql/episode.graphql')"
      :variables="{ id }"
      :update="data => data.episode"
    >
      <template v-slot="{ result: { data, loading, error } }">
        <div v-if="loading"><Loading /></div>
        <div v-else-if="data">
          <Episode 
            :id="data.id"
            :name="data.name"
            :date="data.air_date"
            :characters="data.characters"
          />
        </div>
        <div class="error-class" v-else-if="error">
          <Error 
            :error="error"
          />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Episode from '../components/Episode.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';

export default {
  name: 'Episodes',

  components: {
    Episode,
    Loading,
    Error
  },

  data() {
    return {
      id: atob(this.$route.params.id)
    }
  },
}
</script>

<style >

</style>