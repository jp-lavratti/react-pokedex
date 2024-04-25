import React from 'react'
import styled from 'styled-components'
const SearchArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;`
const Title=styled.h2`
  margin:0 10px 0 0;`
const SearchInput = styled.input`
  border:1px black solid;
  border-radius:3px`
export const Search = (props) => {
  return (
    <SearchArea>
        <Title>Search</Title>
        <SearchInput type="text" name="SearchPokemon" id="" value={props.search} placeholder='search Pokemon' onChange={(e)=>{props.setSearch(e.target.value)}} />
    </SearchArea>
  )
}
