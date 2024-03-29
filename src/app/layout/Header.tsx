import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

interface Props {
  state: boolean;
  changeMode: () => void;
}

const midLinks = [
  { title: 'Home', path: '/' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

const navStyles = {
  typography: 'h8',
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: '#26c6da'
  },
  '&.active': {
    color: "text.secondary"
  }
}

export default function Header({ changeMode, state }: Props) {
  const { basket } = useAppSelector(state => state.basket);
  const { user } = useAppSelector(state => state.account);
  const itemCount = basket?.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
        <Box display="flex" alignItems="center">
          <Typography variant='h6' component={NavLink} to="/" sx={navStyles}>
            React Store
          </Typography>
          <Switch onChange={changeMode} checked={state} color="default" />
        </Box>
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title}
            </ListItem>
          ))}
          {user && user.roles?.includes('Admin') &&
            <ListItem
                component={NavLink}
                to="/inventory"
                sx={navStyles}
              >
                Inventory
            </ListItem>
          }
        </List>
        <Box display="flex" alignItems="center">
          <IconButton component={Link} to="/basket" size='large' sx={{ color: 'inherit' }}>
            <Badge badgeContent={itemCount} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}