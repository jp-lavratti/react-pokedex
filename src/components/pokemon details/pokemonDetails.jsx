import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GetPokemonDetails } from "../../services/getPokemonDetails";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";
import { ThemeTogglerButton } from "../theme toggler button/themeTogglerButton";
const PokemonPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 91vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;
const Button = styled(Link)`
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.buttonHoverColor};
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.buttonHoverColor};
    color: ${(props) => props.theme.textColor};
    transition: 0.2s;
  }
`;
const Header = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  padding: 2vh;
  max-height: 5vh;
  @media (max-width: 790px) {
    padding: 5px;
  }
`;
const PokemonImage = styled.img`
  min-width: 300px;
  background-color: ${(props) => props.theme.buttonColor};
  border: 5px solid ${(props) => props.theme.buttonHoverColor};
  border-radius: 20px;
  @media (max-width: 790px) {
    width:200px;
  }
`;
const PokemonInfo = styled.div`
  background-color: ${(props) => props.theme.pokemonCardColor};
  padding: 40px;
  border: 4px solid ${(props) => props.theme.pokemonCardBorderColor};
  display: flex;
  margin:20px;
  flex-direction: column;
  border-radius: 40px;
  @media (max-width: 790px) {
    padding:15px;
    border-radius:0px
  }
`;
const PokemonMoves = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media (max-width: 1220px) {
    margin:20px;
  }
`;
const Moves = styled.div`
  min-height: 500px;
  max-height:650px;
  width: 100%;
  font-size: 15px;
  background-color: ${(props) => props.theme.buttonColor};
  padding: 10px;
  border: 4px solid ${(props) => props.theme.buttonHoverColor};
  margin: 2vw;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  @media (max-width: 790px) {
    max-height:100%;
    flex-wrap:nowrap;
    width: 80vw;
    font-size:30px;
  }
`;

export const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const name = useParams();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    async function fetchData() {
      const data = await GetPokemonDetails(name);
      setPokemonData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {pokemonData && (
        <>
          <Header theme={theme}>
            <Button to={"/"} theme={theme}>
              Menu
            </Button>
            <ThemeTogglerButton />
          </Header>
          <PokemonPage theme={theme}>
            <PokemonInfo theme={theme}>
              <PokemonImage
                src={pokemonData.sprites.front_default}
                theme={theme}
                alt={pokemonData.name}
              />
              <h1>{pokemonData.name.toUpperCase()}</h1>
              <h3></h3>
              <h2>{pokemonData.types[0].type.name}</h2>
              {pokemonData.types[1] && (
                <h2>{pokemonData.types[1].type.name}</h2>
              )}
              <div>
                <h2>ABILITIES</h2>
                {pokemonData.abilities.map((ability, index) => (
                  <div key={index}>
                    <h3>{ability.ability.name}</h3>
                    <p>{pokemonData.abilitesData[index]}</p>
                  </div>
                ))}
              </div>
            </PokemonInfo>
            <PokemonMoves theme={theme}>
              <h2>{pokemonData.name.toUpperCase()} MOVESET</h2>
              <Moves theme={theme}>
                {pokemonData.moves.map((move, index) => (
                  <div key={index}>
                    <h4>{move.move.name}</h4>
                  </div>
                ))}
              </Moves>
            </PokemonMoves>
          </PokemonPage>
        </>
      )}
    </div>
  );
};
