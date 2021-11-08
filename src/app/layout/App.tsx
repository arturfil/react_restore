
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetailsPage from "../../features/catalog/ProductDetailsPage";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
  

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: `${palleteType}`,
      background: {
        default: ( palleteType === 'light' ? '#efefef' : '#121212')
      }
    }
  });

  const changeMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header state={darkMode} changeMode={changeMode}/>
      <Container sx={{mb: 4}}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/catalog/:id" element={<ProductDetailsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
  
}

export default App;
