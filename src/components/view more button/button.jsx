import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/themeContext'
const Button = styled.button`
  text-decoration:none;
  padding:15px;
  background-color:${props=>props.theme.buttonColor};
  border-radius:10px;
  font-size:20px;
  font-weight:700;
  color:${props=>props.theme.textColor};
  margin:30px;
  width:40%;
  &:hover{
    cursor:pointer;
    background-color:${props=>props.theme.buttonHoverColor};
    transition:0.2s;
  }`
export const ViewMoreButton = (props) => {
  const {theme} =useContext(ThemeContext)
    const handleClick=()=>{
        props.onClick()
    }
  return (
    <Button onClick={handleClick} theme={theme}>Load More 10</Button>
  )
}
