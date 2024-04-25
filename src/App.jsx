import './App.css'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/themeContext'
const GlobalStyle = createGlobalStyle`
  *{
    font-family:Roboto;
    padding:0;
    border:0;
    margin:0;
  }`
function App() {
  return (
    <>
    <ThemeProvider>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
    </>
  )
}
export default App
