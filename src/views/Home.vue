<template>
  <div class="error-class">

    <h1 class="arcade text-white text-center">Sejam Bem-vindos !!!</h1>

    <div class="flex justify-center">
      <div id="image" class="my-5 bg-black flex justify-center">
        <img class="m-0 w-full" src="/img/rick-morty.png" alt="foto de rick e morty trocando de dimensão">
      </div> 
    </div>

    <div class="flex justify-center">
      <div id="text" class="my-5 bg-black text-center">
        <router-link to="/characters">
          <Button class="p-button-success p-button-rounded p-button-lg" label="Acesse a Aplicação" icon="pi pi-check" iconPos="left" />
        </router-link>   
      </div> 
    </div>  
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'Home',

  components: {
    Button
	},
}
</script>

<style scoped>

h1 {
  font-size: 3em;
}

#image {
  width:40%; 
  height:40%;
}

#text{
  width: 25%; 
  height: 25%;
}

@media (max-width: 950px) {
  #text{
      width: 80%; 
      height: 80%;
  }
}
</style>