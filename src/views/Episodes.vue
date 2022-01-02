<template>
  <main class="episodes">
    <!-- Query -->
    <ApolloQuery 
      :query="require('../graphql/episode.graphql')"
      :variables="{ id }"
      :update="data => data.episode"
    >
      <template v-slot="{ result: { data, loading, error } }">
        <!-- Loading Condition -->
        <section v-if="loading"><Loading /></section>

        <!-- Data Condition -->
        <section v-else-if="data">
          <Episode 
            :id="data.id"
            :name="data.name"
            :date="data.air_date"
            :characters="data.characters"
          />
        </section>

        <!-- Error Condition -->
        <section class="error-class" v-else-if="error">
          <Error 
            :error="error"
          />
        </section>
      </template>
    </ApolloQuery>
  </main>
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
