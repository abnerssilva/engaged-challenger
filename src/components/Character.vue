<template>
  <main class="character">
    <!-- Button to First page app -->
    <router-link to="/characters"><Button class="p-button-info p-button-text p-button-sm" label="Ver todos os Cards" icon="pi pi-angle-double-left" iconPos="left" /></router-link>
    
    <!-- Character picture -->
    <section class="flex justify-center">
      <figure id="divImage" class="mb-5 bg-white" :style="'border-color: '+color+';'">
        <img id="image" :src="image" alt="foto do personagem" :style="'filter: '+colorFilter+';'+' opacity: '+opacity+';'" @mouseover="mouseOverColor()" @mouseout="mouseOutColor()">
      </figure> 
    </section>

    <!-- Character Info -->
    <section id="divText">
      <p class="poppins text-justify text-white">
        {{ text1 }}<strong>{{ upperName }}</strong> da série Rick and Morty. Sua espécie é {{ specie }} e sua primeira{{ aparison}} aparição no seriado foi no episódio "<em>{{ episodes[0].name }}</em>" exibido na {{ season }}.
        Seu estado de vida atual no seriado é: <span :style="'color: '+colorText+';'">&nbsp;{{ lifeStatus }}&nbsp;</span>.
      </p><br>
      <p class="poppins text-white text-justify">
        {{ name }} aparece {{ text2 }}: <small>(clique no episódio para saber detalhes específicos dele)</small><br>
        <!-- Dynamic Episodes List -->
        <ul>
          <li class="list-none inline" v-for="episode in episodes" :key="episode.id">
            <router-link :to="'/episodes/'+btoa(episode.id)">
              <span class="mx-1 inline-block text-blue-300">{{ episode.id }}</span> 
            </router-link>|
          </li>
        </ul>
      </p>
    </section>
  </main> 
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'Character',

  components: {
    Button
  },

  props: {
    id: String,
    name: String,
    status: String,
    species: String,
    gender: String,
    origin: String,
    location: String,
    image: String,
    episodes: Array,
    createdAt: String
  },

  data() {
    return {
      color: '',
      colorFilter: 'none',
      colorText: '',
      opacity: '1',
      upperName: '',
      text1: '',
      text2: '',
      specie: '',
      season: '',
      lifeStatus: '',
      aparison: '',
    }
  },

  methods: {
    // Method to "encrypt" the episode ID
    btoa(text) {
      return btoa(text)
    },

    // Color config according character status
    statusColorConfig() {
      if(this.status === 'Alive') {
        this.color = '#87ce87'
      } else if(this.status === 'Dead') {
        this.color = '#fd7171'
        this.colorFilter = 'grayscale(1)'
        this.opacity = '0.7'
      } else {
        this.color = '#f5f5f5'
      }

      if(this.status === 'Alive' && this.gender === 'Female') {
        this.lifeStatus = 'Viva'
        this.colorText = 'green'
      } else if(this.status === 'Alive' && this.gender === 'Male') {
        this.lifeStatus = 'Vivo'
        this.colorText = 'green'
      } else if(this.status === 'Alive' && this.gender === 'Genderless') {
        this.lifeStatus = 'Vivo'
        this.colorText = 'green'
      } else if(this.status === 'Alive' && this.gender === 'unknown') {
        this.lifeStatus = 'Vivo'
        this.colorText = 'green'
      } else if(this.status === 'Dead' && this.gender === 'Female') {
        this.lifeStatus = 'Morta'
        this.colorText = 'red'
      } else if(this.status === 'Dead' && this.gender === 'Male') {
        this.lifeStatus = 'Morto'
        this.colorText = 'red'
      } else if(this.status === 'Dead' && this.gender === 'Genderless') {
        this.lifeStatus = 'Morto'
        this.colorText = 'red'
      } else if(this.status === 'Dead' && this.gender === 'unknown') {
        this.lifeStatus = 'Morto'
        this.colorText = 'red'
      } else {
        this.lifeStatus = 'Desconhecido'
        this.colorText = 'gray'
      }
    },

    mouseOverColor() {
      if(this.status === 'Dead') {
        this.colorFilter = 'none'
        this.opacity = 1
      }
    },

    mouseOutColor() {
      if(this.status === 'Dead') {
        this.colorFilter = 'grayscale(1)'
        this.opacity = 0.7
      }
    },

    // Initial phrase according character gender
    genderPhrase() {
      if(this.gender === 'Female') {
        this.text1 = 'Essa é a personagem '
      } else {
        this.text1 = 'Esse é o personagem '
      }
    },

    // Season choose configuration according episodes
    seasonConfig() {
      if(this.episodes[0].id <= 11) {
        this.season = 'Primeira Temporada'
      } else if(this.episodes[0].id >= 12 && this.episodes[0].id <= 21) {
        this.season = 'Segunda Temporada'
      } else if(this.episodes[0].id >= 22 && this.episodes[0].id <= 31) {
        this.season = 'Terceira Temporada'
      } else if(this.episodes[0].id >= 32 && this.episodes[0].id <= 41) {
        this.season = 'Quarta Temporada'
      } else if(this.episodes[0].id >= 42 && this.episodes[0].id <= 51) {
        this.season = 'Quinta Temporada'
      }
    },

    // Species translation by english to portuguese
    speciesTranslation() {
      if(this.species === 'Human') {
        this.specie = 'humana'
      } else if(this.species === 'Alien') {
        this.specie = 'alienígena'
      } else if(this.species === 'Robot') {
        this.specie = 'robô'
      } else if(this.species === 'Disease') {
        this.specie = 'doença'
      } else {
        this.specie = this.species
      }
    },

    // Method to determine phrase about only one episode of a character
    episodeAparison() {
      if(this.episodes.length === 1) {
        this.aparison = ' e única'
        this.text2 = 'no episódio'
      } else {
        this.text2 = 'nos seguintes episódios'
      }
    },

    handleCharacter() {
      let upperName = this.name.toUpperCase()
      this.upperName = upperName

      this.statusColorConfig()

      this.genderPhrase()

      this.seasonConfig()

      this.speciesTranslation()

      this.episodeAparison()
    }
  },

  mounted() {
    this.handleCharacter()
  }

}
</script>

<style scoped>

main {
  height: 100vh;
  background: url(../assets/media/images/outerspace.gif);
  background-size: cover;
}

#divImage {
  width: 25%; 
  height: 25%;
  border: 15px ridge;
}

#image {
  width: 100%;
  height: 100%;
  padding: 2px;
}

#divText {
  width: 60%;
  border: 2px dashed white;
  margin-right: auto;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
}

@media (max-width: 1299.98px) {
  #divImage{
    width: 40%; 
    height: 40%;
    border: 12px ridge;
  }

  #divText {
    width: 75%;
  }

}

@media (max-width: 949.98px) {
  #divImage{
    width: 50%; 
    height: 50%;
    border: 10px ridge;
  }

  #divText {
    width: 85%;
  }

  p {
    font-size: 1em;
  }
}

@media (max-width: 649.98px) {
  #divImage{
    width: 60%; 
    height: 60%;
    border: 8px ridge;
  }

  #divText {
    width: 95%;
  }

  p {
    font-size: 0.8em;
  }
}

@media (max-height: 639.98px) {
  main {
    height: 115vh;
  }
}

</style>