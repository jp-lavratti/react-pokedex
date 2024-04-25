import { createContext, useState } from 'react'

export const themes = {
    light:{
        backgroundColor:'#FDEDEE',
        pokemonCardColor:'#A3F4A3',
        pokemonCardBorderColor:'#8FEB91',
        textColor:'#000000',
        buttonColor:'#FECDCD',
        buttonHoverColor:'#F996B5',
        buttonTextColor:'#000000',
    },
    dark:{
        backgroundColor:'#001249',
        pokemonCardColor:'#0D3580',
        pokemonCardBorderColor:'#1761B0',
        textColor:'#C0C0C0',
        buttonColor:'#D2292D',
        buttonHoverColor:'#AF0C15',
        buttonTextColor:'#C0C0C0',
    }
}

export const ThemeContext = createContext({})
export const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme, themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}