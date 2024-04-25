import axios from "axios";
export const GetPokemonDetails = async (props) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
  const abilitesData = await Promise.all(
    response.data.abilities.map(async (ability) => {
      const response = await axios.get(ability.ability.url);
      const flavorTextEntry = response.data.flavor_text_entries.find(
        (element) => {
          return element.language.name === "en";
        }
      );
      return flavorTextEntry ? flavorTextEntry.flavor_text : null;
    })
  );
  const data = { ...response.data, abilitesData: abilitesData };
  return data;
};
