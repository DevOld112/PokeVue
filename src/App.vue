<script setup>
import CardPokemon from './components/CardPokemon.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue'
import {ref,  onMounted, onUnmounted, onBeforeMount } from 'vue'


import { usePokemonStore } from '../Stores/pokemones'



const store = usePokemonStore()
const showPokemon = store.pokemones
const cargando = ref(true);




const cargarDatos = async () => {
  await store.cargarPokemones()
}

onBeforeMount(async () => {
  try {
    cargando.value = true
    await cargarDatos(); 
    cargando.value = false; 
  } catch (error) {
    console.error(error);
    cargando.value = false;
  }
});


defineProps({
  pokemon:{
    type: Object
  }
})


</script>

<template>
  <div class=" w-full bg-blue-200">

    <Header
    />

    <main>

      

      <div 
      class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-5 space-y-10 gap-10"
      v-if="store.mostrar && showPokemon.length > 0"
      >

        <CardPokemon
        v-for="pokemon in store.filteredPokemon"
        :key="pokemon.name"
        :pokemon="pokemon"
        />
      </div>
      
      

      <div
        v-else="showPokemon.length === 0"
        >
          <h1 class="text-xl font-bold text-center h-96 mb-10 flex justify-center items-center">
            No hay Pokemones para Mostrar
          </h1>
      </div>

      <Spinner 
      v-if="cargando"
      />


    </main>
    <Footer 
    />
    
  </div>
</template>

<style scoped>
footer{
  background-image: url(../public/photo-1638613067237-b1127ef06c00.avif);
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center center; 
  
}
</style>