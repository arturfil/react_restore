
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AboutPage } from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetailsPage from "../../features/catalog/ProductDetailsPage";
import ContactPage from "../../features/contact/ContactPage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
  

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
      <ToastContainer theme="colored" position="bottom-right"/>
      <CssBaseline/>
      <Header state={darkMode} changeMode={changeMode}/>
      <Container sx={{mb: 4}}>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/catalog/:id" component={ProductDetailsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/server-error" component={ServerError} />
        </Switch>
      </Container>
    </ThemeProvider>
  )
  
}

export default App;
