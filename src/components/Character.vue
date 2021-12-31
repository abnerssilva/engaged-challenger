<template>
  <main class="character">
    <a href="/characters"><Button class="p-button-info p-button-text p-button-sm" label="Voltar aos Cards" icon="pi pi-angle-double-left" iconPos="left" /></a>
    <div class="flex justify-center">
      <div class="mb-5 bg-white" :style="'border: 15px ridge '+color+';'+' width: 25%; height: 25%;'">
        <img id="imagem" :src="image" alt="foto do personagem" :style="'filter: '+colorFilter+';'+' opacity: '+opacity+';'">
      </div> 
    </div>
    <div class="w-3/5 mx-auto border-dashed border-white border-2 px-4 pt-2 pb-10">
      <p class="poppins text-justify text-white">
        {{ text1 }}<strong>{{ upperName }}</strong> da série Rick and Morty. Sua espécie é {{ specie }} e sua primeira{{ aparison}} aparição no seriado foi no episódio "<em>{{ episodes[0].name }}</em>" exibido na {{ season }}.
        Seu estado de vida atual no seriado é: <span :style="'background-color: '+bgColorText+';'">&nbsp;{{ lifeStatus }}&nbsp;</span>.
      </p><br>
      <p class="poppins text-white text-justify">
        {{ name }} aparece {{ text2 }}: <small>(clique no episódio para saber detalhes específicos dele)</small><br>
        <ul>
          <li class="list-none inline" v-for="episode in episodes" :key="episode.id">
            <router-link :to="'/episodes/'+btoa(episode.id)">
              <span class="mx-1 inline-block text-blue-300">{{ episode.id }}</span> 
            </router-link>|
          </li>
        </ul>
      </p>
    </div>
    
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
      bgColorText: '',
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
    btoa(text) {
      return btoa(text)
    }
  },

  mounted() {
    let upperName = this.name.toUpperCase()
    this.upperName = upperName

    if(this.status === 'Alive') {
      this.color = '#87ce87'
    } else if(this.status === 'Dead') {
      this.color = '#fd7171'
      this.colorFilter = 'grayscale(1)'
      this.opacity = '0.7'
    } else {
      this.color = '#f5f5f5'
    }

    if(this.gender === 'Female') {
      this.text1 = 'Essa é a personagem '
    } else {
      this.text1 = 'Esse é o personagem '
    }

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

    if(this.status === 'Alive' && this.gender === 'Female') {
      this.lifeStatus = 'Viva'
      this.bgColorText = 'green'
    } else if(this.status === 'Alive' && this.gender === 'Male') {
      this.lifeStatus = 'Vivo'
      this.bgColorText = 'green'
    } else if(this.status === 'Alive' && this.gender === 'Genderless') {
      this.lifeStatus = 'Vivo'
      this.bgColorText = 'green'
    } else if(this.status === 'Alive' && this.gender === 'unknown') {
      this.lifeStatus = 'Vivo'
      this.bgColorText = 'green'
    } else if(this.status === 'Dead' && this.gender === 'Female') {
      this.lifeStatus = 'Morta'
      this.bgColorText = 'red'
    } else if(this.status === 'Dead' && this.gender === 'Male') {
      this.lifeStatus = 'Morto'
      this.bgColorText = 'red'
    } else if(this.status === 'Dead' && this.gender === 'Genderless') {
      this.lifeStatus = 'Morto'
      this.bgColorText = 'red'
    } else if(this.status === 'Dead' && this.gender === 'unknown') {
      this.lifeStatus = 'Morto'
      this.bgColorText = 'red'
    } else {
      this.lifeStatus = 'Desconhecido'
      this.bgColorText = 'gray'
    }

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

    if(this.episodes.length === 1) {
      this.aparison = ' e única'
      this.text2 = 'no episódio'
    } else {
      this.text2 = 'nos seguintes episódios'
    }
  }

}
</script>

<style scoped>

main {
  height: 150vh;
  background: url(../assets/media/images/outerspace.gif);
  background-size: cover;
}

#imagem {
  width: 100%;
  height: 100%;
  padding: 2px;
}

</style>