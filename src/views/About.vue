<template>
  <main class="about">
    <!-- Query -->
    <ApolloQuery 
      :query="require('../graphql/character.graphql')"
      :variables="{ id }"
      :update="data => data.character"
    >
      <template v-slot="{ result: { data, loading, error } }">
        <!-- Loading Condition -->
        <section v-if="loading"><Loading /></section>

        <!-- Data Condition -->
        <section v-else-if="data">
          <Character 
            :id="data.id"
            :name="data.name"
            :status="data.status"
            :species="data.species"
            :gender="data.gender"
            :origin="data.origin.name"
            :location="data.location.name"
            :image="data.image"
            :episodes="data.episode"
            :createdAt="data.created"
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
import Character from '../components/Character.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';

export default {
  name: 'About',

  components: {
    Character,
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
