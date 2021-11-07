import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  state: boolean;
  changeMode: () => void;
}

export default function Header({changeMode, state}: Props) {
  return (
    <AppBar position='static' sx={{mb: 4}}>
      <Toolbar>
        <Typography variant='h6'>
          React Store
        </Typography>
      <Switch onChange={changeMode} checked={state} color="default" />
      </Toolbar>
    </AppBar>
  )
}