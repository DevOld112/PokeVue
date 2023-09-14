<script setup>
import { dragon } from 'fontawesome';
import { usePokemonStore } from '../../Stores/pokemones';


const store = usePokemonStore();
const botones = store.buttonPokemon;
const agregar = store.addPokemon;
const filteredPokemon = store.filteredPokemon
const mostrar = store.mostrar



</script>

<template>
    <header class="p-5">
        <nav class="md:flex justify-between gap-3 items-center  xs:grid grid-cols-1 place-items-center">
            <div class="flex flex-col gap-3 self-center">
                <img 
                src="../../public/pokeball-16809.png" 
                alt="logo Pokedex"
                class="h-16 w-16  transition duration-500 ease-in-out transform hover:scale-110"
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

                <li>
                    <button
                    type="button"
                    class="bg-gray-300 hover:bg-gray-400 transition ease-in font-bold italic p-2 rounded-full"
                    id="normal"
                    @click="botones('normal')"
                    >
                    Normal
                    </button>
                </li>

                <li>
                    <button
                    type="button"
                    class="bg-red-500 hover:bg-red-600 transition ease-in font-bold italic p-2 rounded-full"
                    id="fire"
                    @click="botones('fire')"
                    >
                    Fuego
                    </button>
                </li>

                <li>
                    <button
                    type="button"
                    class="bg-blue-400 hover:bg-blue-600 transition ease-in font-bold italic p-2 rounded-full"
                    id="water"
                    @click="botones('water')"
                    >
                    Agua
                    </button>
                </li>

                <li>
                    <button
                    type="button"
                    class="bg-green-400 hover:bg-green-500 transition ease-in font-bold italic p-2 rounded-full"
                    id="grass"
                    @click="botones('grass')"
                    >
                    Planta
                    </button>
                </li>

                <li>
                    <button
                    type="button" 
                    class="bg-yellow-200 hover:bg-yellow-400 transition ease-in font-bold italic p-2 rounded-full"
                    id="electric"
                    @click="botones('electric')"
                    >
                    Electrico
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-blue-50 hover:bg-blue-200 transition ease-in font-bold italic p-2 rounded-full"
                    id="ic"
                    @click="botones('ice')"
                    >
                    Hielo
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-red-600 hover:bg-red-600 transition ease-in font-bold italic p-2 rounded-full"
                    id="fighting"
                    @click="botones('fighting')"
                    >
                    Lucha
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-purple-200 hover:bg-purple-400 transition ease-in font-bold italic p-2 rounded-full"
                    id="poison"
                    @click="botones('poison')"
                    >
                    Veneno
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-orange-200 hover:bg-orange-400 transition ease-in font-bold italic p-2 rounded-full"
                    id="ground"
                    @click="botones('ground')"
                    >
                    Tierra
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-indigo-100 font-bold italic p-2 rounded-full"
                    id="flying"
                    @click="botones('flying')"
                    >
                    Volador
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-red-200 hover:bg-red-400 transition ease-in font-bold italic p-2 rounded-full"
                    id="pyshic"
                    @click="botones('psychic')"
                    >
                    Psiquico
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-green-800 hover:bg-green-600 transition ease-in font-bold italic p-2 rounded-full"
                    id="bug"
                    @click="botones('bug')"
                    >
                    Insecto
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-yellow-700 hover:bg-yellow-800 transition ease-in font-bold italic p-2 rounded-full"
                    id="rock"
                    @click="botones('rock')"
                    >
                    Roca
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-purple-600 hover:bg-purple-700 transition ease-in font-bold italic p-2 rounded-full"
                    id="ghost"
                    @click="botones('ghost')"
                    >
                    Fantasma
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-gray-700 hover:bg-gray-800 transition ease-in font-bold italic p-2 rounded-full"
                    id="dark"
                    @click="botones('dark')"
                    >Oscuro
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-blue-700 hover:bg-blue-900 transition ease-in font-bold italic p-2 rounded-full"
                    id="dragon"
                    @click="botones('dragon')"
                    >
                    Dragon
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-gray-400 hover:bg-gray-500 transition ease-in font-bold italic p-2 rounded-full"
                    id="steel"
                    @click="botones('dragon')"
                    >
                    Acero
                    </button>
                </li>

                <li>
                    <button 
                    type="button"
                    class="bg-purple-400 hover:bg-purple-500 transition ease-in font-bold italic p-2 rounded-full"
                    id="fairy"
                    @click="botones('fairy')"
                    >
                    Hada
                    </button>
                </li>
            </ul>
        </nav>
    </header>

    
</template>