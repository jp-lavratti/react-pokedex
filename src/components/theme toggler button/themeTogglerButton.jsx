import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import styled from 'styled-components'

const ToggleButton = styled.div`
    background-color:${props=>props.theme.pokemonCardColor};
    padding:10px 20px;
    border-radius:10px;
    border:3px solid ${props=>props.theme.pokemonCardBorderColor};
    &:hover{
        cursor:pointer;
        border-color:${props=>props.theme.pokemonCardColor};
        transition:0.2s;
    }
`
export const ThemeTogglerButton = () => {
    const {theme, setTheme, themes}= useContext(ThemeContext)
    const onThemeChange=()=>{
        setTheme(theme === themes.light? themes.dark:themes.light)
    }
  return (
    <ToggleButton theme={theme} onClick={onThemeChange}>{theme==themes.light?'Change to dark theme':'Change to light theme  '}</ToggleButton>
  )
}
