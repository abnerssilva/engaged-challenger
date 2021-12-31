<template>
  <div class="load mx-auto">

  </div>
</template>

<script>
export default {
    name: 'Loading'

}
</script>

<style>
.load {
    width: 50px;
    height: 50px; 
    border: 5px solid black;
    border-radius: 50%; 
    border-top-color: transparent;
    margin-top: 20%;
    animation: load 0.5s linear infinite;
}

@keyframes load {
    to {
        transform: rotate(360deg);
    }
    
}
</style>