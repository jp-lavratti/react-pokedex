import React from 'react'
import styled from 'styled-components'
const FilterArea = styled.div`
  display:flex;
  jutify-content:center;
  align-items:center;`
const Filter = styled.select`
  border:1px black solid;
  border-radius:3px`
const Title=styled.h2`
  margin:0 10px 0 0`
export const Filters = (props) => {
    const handleFilterChange=(event)=>{
        props.onFilterChange(event)
    }
  return (
    <FilterArea>
        <Title>Filter</Title>
        <Filter name="filter" id="" onChange={handleFilterChange}>
            <option value="" defaultValue></option>
            <option value="normal">Normal</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="bug">Bug</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="electric">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="psychic">Psychic</option>
            <option value="dark">Dark</option>
            <option value="ice">Ice</option>
            <option value="ground">Ground</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="steel">steel</option>
        </Filter>
    </FilterArea>
  )
}
