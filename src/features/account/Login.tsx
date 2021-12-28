import React, { ChangeEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';


export default function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    agent.Account.login(values);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setValues({...values,[name]: value});
  }

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={handleChange}
          value={values.username}
          margin="normal"
          fullWidth
          label="Username"
          name="username"
          autoFocus
        />
        <TextField
          onChange={handleChange}
          value={values.password}
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/register">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}