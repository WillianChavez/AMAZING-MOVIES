import { createGlobalStyle } from 'styled-components'
import { colors, fontFamily } from './stylesConfig'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Aside from './components/Aside'
import Header from './components/Header'
import Details from './pages/Details'
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
        width: 100%;
        height: 100%;
    }
`

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Aside />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:category" element={<Movies />} />
                    <Route path="/movie/:id" element={<Details />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
