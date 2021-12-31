<template>
  <div>

        <h1 class="arcade text-white text-center">OH, no !!!</h1>

        <div class="flex justify-center">
            <div id="image" class="my-5 bg-black flex justify-center">
                <img class="m-0" src="/img/rick-morty-min.png" alt="foto do erro">
            </div> 
        </div>
        <div class="flex justify-center">
            <div id="text" class="my-5 bg-black">
                <p class="poppins text-white text-center">A página que você procura não foi encontrada! :(</p><br>
                <p class="poppins text-white text-center">Tente novamente mais tarde.</p>
                
            </div> 
        </div>
        <p class="poppins text-white text-center">{{ error }}</p>
  </div>
</template>

<script>
export default {
    name: 'Error',

    props: {
        error: String
    },
}
</script>

<style scoped>

h1 {
    font-size: 3em;
}

#image {
    width: 25%; 
    height: 25%;
}

#text{
    width: 25%; 
    height: 25%;
}

@media (max-width: 950px) {
    #image{
        width: 80%; 
        height: 80%;
    }
    #text{
        width: 80%; 
        height: 80%;
    }
}

</style>