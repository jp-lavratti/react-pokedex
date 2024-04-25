import axios from "axios";
export const GetPokemonData = async (number) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`
        );
        const pokemonData = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const response = await axios.get(pokemon.url);
                return response.data;
            })
        );
        return pokemonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};