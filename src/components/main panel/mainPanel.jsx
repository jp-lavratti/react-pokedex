import React, { useContext, useEffect, useState } from "react";
import { GetPokemonData } from "../../services/getPokemonData";
import { PokemonList } from "../pokemon list/pokemonList";
import { ViewMoreButton } from "../view more button/button";
import { Filters } from "../filters/filters";
import { Search } from "../search/search";
import { ThemeContext } from "../../contexts/themeContext";
import styled from "styled-components";
import { ThemeTogglerButton } from "../theme toggler button/themeTogglerButton";
const Page = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:${(props) => props.theme.backgroundColor};
  min-height:100vh
  `
const Title = styled.h1`
  font-size:50px
`
const Header = styled.header`
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin:30px;
  color:${(props) => props.theme.textColor};
  width:100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }`
const PokedexLimit = styled.h3`
  font-weight:500;
  font-size:20px`
export const MainPanel = () => {
  const [pokemonCount, setPokemonCount] = useState(10);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext)
  const handleCountChange = () => {
    setPokemonCount(pokemonCount + 10);
  };
  const onFilterChange = (value) => {
    setFilter(value);
  };
  useEffect(() => {
    const fetchAndFilterData = async () => {
      const pokemonData = await GetPokemonData(pokemonCount);
      if (filter == '' && search == '') {
        setPokemonArray(pokemonData);
      }else {
        const filteredPokemon = pokemonData
            .filter(pokemon => 
                (filter === '' || pokemon.types.some(type => type.type.name === filter)) &&
                (search === '' || pokemon.name.includes(search.toLowerCase()))
            );
        setPokemonArray(filteredPokemon);
      }
    };
    fetchAndFilterData();
  }, [pokemonCount, filter, search, theme]);
  return (
    <Page theme={theme}>
      <Header theme={theme}>
        <Title>Pokédex</Title>
        <Search search={search} setSearch={setSearch} />
        <Filters onFilterChange={() => onFilterChange(event.target.value)} />
        <PokedexLimit>Pokedex current limit: {pokemonCount}</PokedexLimit>
        <ThemeTogglerButton/>
      </Header>
      <PokemonList pokemonArray={pokemonArray} theme={theme}/>
      <ViewMoreButton onClick={handleCountChange}  theme={theme}/>
    </Page>
  );
};
