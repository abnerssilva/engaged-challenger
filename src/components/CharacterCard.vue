<template>
  <main id="character">
    <div class="card mb-9">
      <div class="card__inner" :class="'new-class-'+id">
        <div class="card__face card__face--front block">
          <img :src="image" loading="lazy" alt="" class="pp-front mt-9" />
          <div class="flex justify-center">
            <h2 class="text-center mt-10 w-11/12"><strong>{{ id }} - <em>{{ shortName }}</em></strong></h2>
          </div>
          <p class="w-full text-center text-xs mt-2 text-gray-300 cursor-pointer" @click="flipFront()">{{ label }}</p>
        </div>
        
        <div class="card__face card__face--back">
          <div class="card__content">
            <div class="card__header">
              <h2>{{ shortName }}</h2>
              <img :src="image" loading="lazy" alt="" class="pp mt-3" />
              <p class="w-full text-center text-xs mt-2 text-gray-300 cursor-pointer" @click="flipBack()">{{ label }}</p>
            </div>
            <div class="card__body">
              <h3 class="arcade text-center">Extras</h3>                      
              <p class="digital text-base">Status: {{ status }}</p>                       
              <p class="digital text-base">Espécie: {{ species }}</p>
              <p class="digital text-base">Planeta: {{ this.character.planet }}</p>
              <p class="digital text-base">1ª Aparição: Ep.{{ episode[0].id }}: "<em>{{ episode[0].name }}</em>"</p>
              <div class="text-center mt-2">
                <router-link :to="'/about/'+encryptedId">
                  <Button class="p-button-success p-button-text p-button-sm" label="Ver Detalhes" icon="pi pi-check" iconPos="left" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </main>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'CharacterCard',

  components: {
    Button
  },

  props: {
      id: String,
      name: String,
      image: String,
      status: String,
      species: String,
      origin: String,
      episode: Array
  },

  data() {
    return {
      encryptedId: btoa(this.id),
      label: 'Ver Verso',
      shortName: (this.name.split("(").shift()),
      character: {
        planet: this.origin === "unknown" ? "Desconhecido" : this.origin
      }
    }
  },

  methods:{
      flipFront() {
          let card = document.querySelector(`.new-class-${this.id}`);
          setTimeout(() => {
            this.label = 'Ver Frente'
          }, 500)
          card.classList.toggle('is-flipped');
      },

      flipBack() {
          let card = document.querySelector(`.new-class-${this.id}`);
          setTimeout(() => {
            this.label = 'Ver Verso'
          }, 500)
          card.classList.toggle('is-flipped');
      }
  },

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: montserrat, sans-serif;
  width: 100%;
  min-height: 100vh;
}

.card {
  width: 300px;
  height: 450px;
  perspective: 1000px;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}


.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border: 1px solid #F3F3F3;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(131, 131, 131, 0.4);
}

.card__face--front {
  background-image: linear-gradient(to bottom right, #7ac490, #2023b3);
}

.card__face--front h2 {
  color: #FFF;
  font-size: 32px;
  font-family: 'Poppins Regular';
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
}

.card__content {
  width: 100%;
  height: 100%;
}

.card__header {
  position: relative;
  padding: 20px;
}

.card__header:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, #FFCE00 10%, #FE4880 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}

.pp {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background-color: #0d101a;
  border: 5px solid #FFF;
  object-fit: cover;
}

.pp-front {
  display: block;
  width: 180px;
  height: 180px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background-color: #0d101a;
  border: 5px solid #FFF;
  object-fit: cover;
}

.card__header h2 {
  color: #FFF;
  font-size: 100%;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card__body {
  padding: 10px;
  color: green;
}

.card__body h3 {
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>