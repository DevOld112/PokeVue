<script setup>

import { usePokemonStore } from '../../Stores/pokemones'
import  variableFormateada  from '../helpers/variableFormateada'
import idFormateado from '../helpers/idFormateado';

defineProps({
    pokemon:{
        type: Object
    }
})

//Funciones de Store

const store = usePokemonStore();
const tipos = store.pokemonTypes;
const icons = store.pokemonIcons;

//Helpers

const format = variableFormateada
const formatId = idFormateado;

</script>

<template>
    <div :class="['space-y-4 p-4 border border-gray-900 rounded-lg  m-auto flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105', tipos(pokemon.types).type1]">

        <img
            class="w-32 h-32 border border-black rounded-lg bg-yellow-50"
            :src="pokemon.imagen" 
            :alt="pokemon.name"
        >
    
        <div class="flex flex-wrap justify-center gap-2 items-center">
            <p class="border border-gray-200 font-bold p-2 bg-yellow-200 rounded-lg text-xs">
            #{{ formatId(pokemon.id) }}
            </p>
            <p
            :class="[
                'p-2 border border-gray-200 rounded-lg font-bold z-10',
                tipos(pokemon.types).type1
            ]"
            >{{ format(pokemon.types[0]) }}</p>
            <p
            v-if="pokemon.types.length > 1"
            :class="[
                'p-2 border border-gray-200 rounded-lg m-auto flex flex-col justify-center items-center z-10 font-bold',
                tipos(pokemon.types).type2
            ]"
            >{{ format(pokemon.types[1]) }}</p>
        </div>
    
        <div class="flex gap-2 items-center">
            <img
            class="h-6 w-6 rounded-md border border-white "
            :src="'../../public/' + icons(pokemon.types).type1"
            :alt="pokemon.types"
            >
            <img
            v-if="pokemon.types.length > 1"
            class="h-6 w-6 rounded-md border border-white "
            :src="'../../public/' + icons(pokemon.types).type2"
            :alt="pokemon.types"
            >
            <h3 class="text-lg font-bold italic">{{ format(pokemon.name) }}</h3>
        </div>
    
        <div class="flex flex-wrap justify-center gap-2 items-center">
            <p class="text-xs">Peso: {{ pokemon.weight.toFixed(2) }} kg</p>
            <p class="text-xs">Altura: {{ pokemon.height.toFixed(2) }} m</p>
        </div>
    
        <div class="flex gap-2 items-center">
            <div>
            <p class="text-xs font-bold">Stats:</p>
            </div>
            <div class="flex gap-2 border border-gray-300 rounded-md p-2">
            <p class="text-xs italic">{{ pokemon.stats.hp }} hp</p>
            <p class="text-xs italic">{{ pokemon.stats.atq }} atq</p>
            <p class="text-xs italic">{{ pokemon.stats.def }} def</p>
            </div>  
        </div>
        
    </div>
</template>