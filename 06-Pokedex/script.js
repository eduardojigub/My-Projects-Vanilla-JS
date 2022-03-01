//Chamando API com AJAX 
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const fetchPokemon = () => {

    const pokemonPromises= []

    for(let index = 1; index <= 151; index++ ) { 
        pokemonPromises.push(fetch(getPokemonUrl(index))
        .then(response => response.json()))//adicionando no array a cada iteração
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
        const createLiPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name);

            accumulator += `
            <li class='card ${types[0]}'>
            <img class='card-image' alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" />
            <h2 class='card-title'>${pokemon.id}. ${pokemon.name} </h2>
            <p class='card-subtitle'>${types.join(' | ')}</p>
            </li>`
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = createLiPokemons;
    })
}

fetchPokemon();

