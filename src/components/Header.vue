<script setup>
import { dragon } from 'fontawesome';
import { usePokemonStore } from '../../Stores/pokemones';
import variableFormateada from '../helpers/variableFormateada';



const store = usePokemonStore();
const botones = store.buttonPokemon;
const tipos = store.pokemonTypes;



</script>

<template>
    <header class="p-5">
        <nav class="md:flex justify-between gap-3 items-center  xs:grid grid-cols-1 place-items-center">
            <div class="flex flex-col gap-3 self-center">
                <img 
                src="../../public/pokeball-16809.png" 
                alt="logo Pokedex"
                class="h-16 w-16  transition duration-500 ease-in-out transform hover:scale-110"
                @click="botones('todos')"
                >
                <p class="font-bold">Poke<span class="italic text-green-700">Vuejs</span></p>
            </div>
            
            <ul class="flex flex-wrap gap-5 border border-gray-600 p-2 rounded-lg">
                <li>
                    <button
                    type="button"
                    class="bg-gray-200 hover:bg-gray-400 transition ease-in font-bold italic p-2 rounded-full"
                    @click="botones('todos')"
                    >
                    inicio
                    </button>
                </li>

                <li
                v-for="(type, className) in store.classPokemon"
                :key="type"
                >
                    <button
                    type="button"
                    :class="[type, 'transition ease-in font-bold italic p-2 rounded-full']"
                    :id="type"
                    @click="botones(className)"
                    >

                    {{ variableFormateada(className) }}

                    </button>
                    
                </li>
            </ul>
        </nav>
    </header>

    
</template>