import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/themeContext'
const List = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  max-width:100vw`
const Pokemon = styled.div`
  background-color:${(props)=>props.theme.pokemonCardColor};
  color:${(props)=>props.theme.textColor};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:203px;
  margin:20px;
  padding:30px;
  border-radius:30px;
  border:3px solid ${(props)=>props.theme.pokemonCardBorderColor};`
const Button = styled(Link)`
  padding:10px;
  background-color:${(props)=>props.theme.buttonColor};
  border-radius:10px;
  border:3px solid ${(props)=>props.theme.buttonHoverColor};
  text-decoration:none;
  font-weight:700;
  font-size:20px;
  color:${(props)=>props.theme.textColor};
  margin:10px 0 0 0;
  &:hover{
    cursor:pointer;
    background-color:${(props)=>props.theme.buttonHoverColor};
    color:${(props)=>props.theme.textColor};
    transition:0.2s;
  }`
export const PokemonList = (props) => {
  const { theme } = useContext(ThemeContext)
  return (
    <List>
        {props.pokemonArray.map((pokemon, index)=>(
            <Pokemon key={index} theme={theme}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h2>{pokemon.name.toUpperCase()}</h2>
                <p>ID {pokemon.id}</p>
                <Button to={`/react-pokedex/pokemon/${pokemon.name}`} theme={theme}>Learn more</Button>
            </Pokemon>
        ))}
    </List>
  )
}
