import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  state: boolean;
  changeMode: () => void;
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
  { title: 'logout', path: '/logout' },
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
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar sx={{display: "flex", justifyContent: "space-between", alignContent: "center"}}>
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
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size='large' sx={{ color: 'inherit' }}>
            <Badge badgeContent={4} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

      </Toolbar>
    </AppBar>
  )
}