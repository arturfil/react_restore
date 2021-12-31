
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import Loader from "./Loader";
import { setBasket } from "../../features/basket/basketSlice";
import { useAppDispatch } from "../store/configureStore";

import { AboutPage } from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetailsPage from "../../features/catalog/ProductDetailsPage";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/features/CheckoutPage";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import { fetchCurrentUser } from "../../features/account/accountSlice";
  

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    dispatch(fetchCurrentUser());
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch])

  // functionality for dark or light theme
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

  if (loading) return <Loader message="Initialising App..." />

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
          <Route exact path="/basket" component={BasketPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/server-error" component={ServerError} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  )
  
}

export default App;
