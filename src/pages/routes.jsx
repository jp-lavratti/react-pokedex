import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./mainpage"
import { PokemonPage } from "./pokemonpage"

const AppRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path = '/react-pokedex' element={<MainPage />}/>
            <Route exact path = '/pokemon/:name' element={<PokemonPage/>}/>
        </Routes>
    </BrowserRouter>
)

export {AppRoutes}