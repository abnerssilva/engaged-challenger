<template>
  <div class="about">
    <ApolloQuery 
      :query="require('../graphql/character.graphql')"
      :variables="{ id }"
      :update="data => data.character"
    >
      <template v-slot="{ result: { data, loading, error } }">
        <div v-if="loading"><Loading /></div>
        <div v-else-if="data">
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

<style >


</style>