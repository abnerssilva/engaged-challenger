<template>
  <main class="episode" :style="'background: '+background+';'">
    <!-- Button to First page app -->
    <router-link to="/characters"><Button class="p-button-info p-button-text p-button-sm" label="Ver todos os Cards" icon="pi pi-angle-double-left" iconPos="left" /></router-link>

    <!-- Episode Info -->
    <div id="info" class="mx-auto border-dashed border-white border-2 px-4 pt-2 pb-10">
      <p class="poppins text-justify text-white">
        Este é o Episódio "<em>{{ name }}</em>", ele foi ao ar originalmente nos Estados Unidos em {{ brazilianDate }}.
      </p><br>
      <p class="poppins text-white text-justify">
        Os personagens que aparecem nesse episódio são: <small>(clique no personagem para saber detalhes específicos dele)</small><br>

        <!-- Dynamic Characters aparison List -->
        <ul>
          <li class="list-none inline" v-for="character in characters" :key="character.id">
            <router-link :to="'/about/'+btoa(character.id)">
              <span class="mx-1 inline-block text-blue-300">{{ character.name }}</span> 
            </router-link>|
          </li>
        </ul>
      </p>
    </div>
    <div id="link" style="display: none;">
      <a :href="linkHBO" target="_blank">
        <div class="linkHBO absolute"></div>
      </a>
    </div>

  </main>
  
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'Episode',

  components: {
    Button
  },

  props: {
    id: String,
    name: String,
    date: String,
    characters: Array
  },

  data() {
    return {
      background: this.image,
      gradient: 'linear-gradient(to bottom right, #ffffff 5%, #000000 95%)',
      image: `url(/img/ep${this.id}-min.png)`,
      brazilianDate: '',
      linkHBO: ''
    }
  },

  methods: {
    // Method to "encrypt" the Character ID
    btoa(text) {
      return btoa(text)
    },

    // Method to set dynamic background according screen configuration
    screenAdjustment() {
      let screenWidth = window.innerWidth
      let screenHeight = window.innerHeight
      const link = document.getElementById('link')

      if(screenHeight >= (screenWidth * 0.75)) {
        this.background = this.gradient
        link.setAttribute('style', 'display: none')
      } else {
        this.background = this.image
        link.removeAttribute('style')
      }
    },

    // Method to transform american date to brazilian date
    dateFormat() {
      let date = this.date
      let dateSplited = date.split(' ')
      let day = (dateSplited[1].split(',').shift())
      let month = dateSplited[0]
      let year = dateSplited[2]
      let brazilianMonth

      switch (month) {
        case 'January':
          brazilianMonth = 'Janeiro'
          break;
        case 'February':
          brazilianMonth = 'Fevereiro'
          break;
        case 'March':
          brazilianMonth = 'Março'
          break;
        case 'April':
          brazilianMonth = 'Abril'
          break;
        case 'May':
          brazilianMonth = 'Maio'
          break;
        case 'June':
          brazilianMonth = 'Junho'
          break;
        case 'July':
          brazilianMonth = 'Julho'
          break;
        case 'August':
          brazilianMonth = 'Agosto'
          break;
        case 'September':
          brazilianMonth = 'Setembro'
          break;
        case 'October':
          brazilianMonth = 'Outubro'
          break;
        case 'November':
          brazilianMonth = 'Novembro'
          break;
        case 'December':
          brazilianMonth = 'Dezembro'
          break;
        default:
          break;
      }

      this.brazilianDate = `${day} de ${brazilianMonth} de ${year}`
    },

    // Method to set exactly HBO hash link for each episode
    getHBOLink() {
      let hash

      switch (this.id) {
        case '1':
          hash = 'GXkRkPgoDro7CZgEAABqh'
          break;
        case '2':
          hash = 'GXl2aAgboTSLCHAEAAAm7'
          break;  
        case '3':
          hash = 'GXrWp8QRaGr7DwgEAAAWC'
          break;
        case '4':
          hash = 'GXrWp5wLB6I5awgEAAATx'
          break;
        case '5':
          hash = 'GXrWrJwmCoI5awgEAAAU-'
          break;
        case '6':
          hash = 'GXl2aIAEq2yLCHAEAAAoZ'
          break;
        case '7':
          hash = 'GXrWvxQdjeTmqwwEAAAAJ'
          break;
        case '8':
          hash = 'GXrWrMQijDoayhAEAAAXj'
          break;
        case '9':
          hash = 'GXrWmEgLPmL7DwgEAAASv'
          break;
        case '10':
          hash = 'GXrWmHAGNJ77DwgEAAAS3'
          break;
        case '11':
          hash = 'GXrWrHQlOVYayhAEAAAXQ'
          break;
        case '12':
          hash = 'GXrWoBgt9V77DwgEAAAUZ'
          break;
        case '13':
          hash = 'GXrWmJgIAjo5awgEAAARf'
          break;     
        case '14':
          hash = 'GXrWodQB1o77DwgEAAAUi'
          break;      
        case '15':
          hash = 'GXrWpbwBZUI5awgEAAATM'
          break;     
        case '16':
          hash = 'GXrWxLQq1bDmqwwEAAABk'
          break;     
        case '17':
          hash = 'GXrWn6AqvyIayhAEAAAT-'
          break;     
        case '18':
          hash = 'GXrWq4Qjk6L7DwgEAAAXD'
          break;     
        case '19':
          hash = 'GXrWlaAMFsL7DwgEAAASM'
          break;     
        case '20':
          hash = 'GXrWqcwWqeL7DwgEAAAWm'
          break;     
        case '21':
          hash = 'GXrWqNwXyJIayhAEAAAWH'
          break;     
        case '22':
          hash = 'GXrWioQKSk45awgEAAAQT'
          break;     
        case '23':
          hash = 'GXrWxVQ0mlTmqwwEAAACL'
          break;     
        case '24':
          hash = 'GXrWxGQtSvzmqwwEAAABM'
          break;     
        case '25':
          hash = 'GXrWtxg1SSIayhAEAAAZF'
          break;     
        case '26':
          hash = 'GXrWiqwUfhb7DwgEAAARd'
          break;     
        case '27':
          hash = 'GXrWqhwXeIr7DwgEAAAWw'
          break;     
        case '28':
          hash = 'GXrWrOwodjY5awgEAAAVL'
          break;    
        case '29':
          hash = 'GXrWozgwUiY5awgEAAAS_'
          break;     
        case '30':
          hash = 'GXrWijQMivL7DwgEAAARX'
          break;    
        case '31':
          hash = 'GXrWqaQVsYoayhAEAAAWW'
          break;    
        case '32':
          hash = 'GX6G_ugaAqcMDUgEAAAA4'
          break;     
        case '33':
          hash = 'GX6G_ugniMsMDUgEAAABG'
          break;     
        case '34':
          hash = 'GX6G_ugd96cMDUgEAAAA6'
          break;     
        case '35':
          hash = 'GX6G_ugI8_sMDUgEAAAAw'
          break;     
        case '36':
          hash = 'GX6G_ugVyQMLDdgEAAAA7'
          break;     
        case '37':
          hash = 'GX6G_xAKReGIOVAEAAAA'
          break;     
        case '38':
          hash = 'GX6G_xAOm1WIOVAEAAABB'
          break;     
        case '39':
          hash = 'GX6G_ugL2h2IOVAEAAAAi'
          break;     
        case '40':
          hash = 'GX6G_ugoYW8LDdgEAAABK'
          break;    
        case '41':
          hash = 'GX6G_xALJVcLDdgEAAABk'
          break;    
        case '42':
          hash = 'GYNdsAAMIomKSjQEAAAAV'
          break;     
        case '43':
          hash = 'GYNXYtgWyi1SLqQEAAAAl'
          break;     
        case '44':
          hash = 'GYN8vjgTObIMqsQEAAAKk'
          break;     
        case '45':
          hash = 'GYOS3AwNY3BOXUQEAAAOG'
          break;     
        case '46':
          hash = 'GYOb3LAT0hsPDwgEAAAVI'
          break;     
        case '47':
          hash = 'GYOceOQyet4MqsQEAAAUB'
          break;     
        case '48':
          hash = 'GYPbd8ASzP5eJwgEAAAFQ'
          break;     
        case '49':
          hash = 'GYPXnTA0ycbPCQAEAAAEG'
          break;     
        case '50':
          hash = 'GYPXslAOHfZeJwgEAAAEI'
          break;     
        case '51':
          hash = 'GYP7MfASUUqsVnwEAAAAL'
          break;
        default:
          break;
      }

      this.linkHBO = `https://play.hbomax.com/page/urn:hbo:page:${hash}:type:episode?reentered=true&userProfileType=fullUserProfile`
    },

    handleEpisode() {
      this.screenAdjustment()

      this.dateFormat()

      this.getHBOLink()
    }
  },

  mounted() {
    this.handleEpisode()
  }

}
</script>

<style scoped>

main {
  height: 100vh;
   background-size: 100% 100% !important;
}

#info {
  background-color: rgba(0, 0, 0, 0.5); 
  background-blend-mode: luminosity;
  width: 65%;
}

.linkHBO {
  width: 8%; 
  height: 12%; 
  bottom: 0;
  margin-left: 2.5%;
  margin-bottom: 1.5%;
}

@media (max-width: 1299.98px) {
   #info {
    width: 75%;
    margin-top: 40%;
  }

}

@media (max-width: 949.98px) {
  #info {
    width: 85%;
  }

  p {
    font-size: 1em;
  }
}

@media (max-width: 649.98px) {
  #info {
    width: 95%;
  }

  p {
    font-size: 0.8em;
  }
}

</style>