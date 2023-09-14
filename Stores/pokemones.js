import { ref, reactive, onMounted } from "vue";
import { defineStore } from 'pinia'
import { car } from "fontawesome";



export const usePokemonStore = defineStore('pokemones', () => {

    const pokemones = ref([])
    const filteredPokemon = ref([])
    const tipoSeleccionado = ref("normal")
    const copyPokemon = ref([])
    const cargando = ref(false)
    const mostrar = ref(false)

    let URL = 'https://pokeapi.co/api/v2/pokemon/'

    const cargarPokemones = async () => {

        try {
            cargando.value = true

            for(let i = 1; i <= 1000; i++){
                fetch( URL + i)
                    .then((res) => res.json())
                    .then(data => {
                    const pokeObj = {
                        
                        imagen: data.sprites.other['official-artwork'].front_default,
                        name: data.name,
                        id: data.id,
                        types: data.types.map((types) => types.type.name),
                        weight: data.weight * 0.453592, // Se convierte a kg
                        height: data.height * 0.1, // Se convierte a metro
                        stats: {
                            hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
                            atq: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
                            def: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
                        },
                    }
                     // Agrego la data al ref de pokemones
        
                    try {
                        
                        Promise.all(
                        pokemones.value.push(pokeObj),
                        copyPokemon.value.push(pokeObj),
        
                    //La ordeno por el numero de id del pokemon
            
                        pokemones.value.sort((a, b) => a.id - b.id),
                        copyPokemon.value.sort((a, b) => a.id - b.id),
                        ) 
                        
                    } catch (error) {
                        console.log(error)
                    }
                });
                
            }
            cargando.value = false

        } catch (error) {
            console.log(error)
            cargando.value = false
        }
    }



    const pokemonTypes = (types) => {
        const classPokemon = {
            normal: 'bg-gray-200',
            fire: 'bg-red-500',
            water: 'bg-blue-400',
            grass: 'bg-green-400',
            electric: 'bg-yellow-200',
            ice: 'bg-indigo-400',
            fighting: 'bg-red-600',
            poison: 'bg-purple-200',
            ground: 'bg-orange-200',
            flying: 'bg-indigo-100',
            psychic: 'bg-red-200',
            bug: 'bg-green-800',
            rock: 'bg-yellow-700',
            ghost: 'bg-purple-600',
            dark: 'bg-gray-700',
            dragon: 'bg-blue-700',
            steel: 'bg-gray-400',
            fairy: 'bg-purple-400',
        };

        const choiceClass = types.map((type) => {
            return classPokemon[type] 
        });

        if(choiceClass.length === 1){
            return { type1: classPokemon[types[0]] }
        } else if (choiceClass.length === 2){
            return {type1: classPokemon[types[0]] , type2: classPokemon[types[1]]}
        }
    };

    const pokemonIcons = (types) =>{
        const classPokemon = {
            normal: 'normal.png',
            fire: 'fuego.png',
            water: 'agua.png',
            grass: 'planta.png',
            electric: 'electrico.png',
            ice: 'hielo.png',
            fighting: 'lucha.png',
            poison: 'veneno.png',
            ground: 'tierra.png',
            flying: 'volador.png',
            psychic: 'psiquico.png',
            bug: 'insecto.png',
            rock: 'roca.png',
            ghost: 'fantasma.png',
            dark: 'oscuro.png',
            dragon: 'dragon.png',
            steel: 'acero.png',
            fairy: 'hada.png',
        };

        const choiceClass = types.map((type) => {
            return classPokemon[type] 
        });

        if(choiceClass.length === 1){
            return { type1: classPokemon[types[0]] }
        } else if (choiceClass.length === 2){
            return {type1: classPokemon[types[0]] , type2: classPokemon[types[1]]}
        }
    }

    const buttonPokemon = (type) => {

        tipoSeleccionado.value = type

        filteredPokemon.value = copyPokemon.value.filter((pokemon) => {
            return pokemon.types.includes(tipoSeleccionado.value)
        })
        mostrar.value = true

        if(type === 'todos'){
            mostrar.value = false
        }

        


    }

    const classPokemon = {
        normal: 'bg-gray-200',
        fire: 'bg-red-500',
        water: 'bg-blue-400',
        grass: 'bg-green-400',
        electric: 'bg-yellow-200',
        ice: 'bg-indigo-400',
        fighting: 'bg-red-600',
        poison: 'bg-purple-200',
        ground: 'bg-orange-200',
        flying: 'bg-indigo-100',
        psychic: 'bg-red-200',
        bug: 'bg-green-800',
        rock: 'bg-yellow-700',
        ghost: 'bg-purple-600',
        dark: 'bg-gray-700',
        dragon: 'bg-blue-700',
        steel: 'bg-gray-400',
        fairy: 'bg-purple-400',
    };

    
    
    return {
        pokemones,
        copyPokemon,
        filteredPokemon,
        pokemonTypes,
        pokemonIcons,
        buttonPokemon,
        cargarPokemones,
        cargando,
        mostrar,
        classPokemon
    }
})
