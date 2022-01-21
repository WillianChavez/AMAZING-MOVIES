import { createGlobalStyle } from 'styled-components'
import { colors, fontFamily } from './stylesConfig'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        background-color: hsl(${colors.black});
        color: hsl(${colors.white});
        margin: 0;
        font-family: ${fontFamily.primary};
    }

    img {
        max-width: 100%;
        height: 100%;
    }
`

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
