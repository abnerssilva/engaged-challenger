<template>
  <main class="error-class">
    <!-- Homepage Title -->
    <h1 class="arcade text-white text-center">Sejam Bem-vindos !!!</h1>

    <!-- Homepage Figure -->
    <section class="flex justify-center">
      <figure id="image" class="my-5 bg-black flex justify-center">
        <img class="m-0 w-full" src="/img/rick-morty.png" alt="foto de rick e morty trocando de dimensão">
      </figure> 
    </section>

    <!-- App access Button -->
    <section class="flex justify-center">
      <div id="button" class="my-5 bg-black text-center">
        <router-link to="/characters">
          <Button class="p-button-success p-button-rounded p-button-lg" label="Acesse a Aplicação" icon="pi pi-check" iconPos="left" />
        </router-link>   
      </div> 
    </section>  
  </main>
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
  width: 40%; 
  height: 40%;
}

#button{
  width: 25%; 
  height: 25%;
}

@media (max-width: 1299.98px) {
  h1 {
    font-size: 2.5em;
  }
  #image {
    width: 50%; 
    height: 50%;
  }

  #button{
      width: 50%; 
      height: 50%;
  }

}

@media (max-width: 949.98px) {
  h1 {
    font-size: 2em;
  }
  #image {
    width: 80%; 
    height: 80%;
  }

  #button{
      width: 80%; 
      height: 80%;
  }
}

@media (max-width: 649.98px) {
  h1 {
    font-size: 1.4em;
  }
  #image {
    width: 90%; 
    height: 90%;
  }

  #button{
      width: 80%; 
      height: 80%;
  }
}

</style>