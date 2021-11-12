import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router';

export default function ServerError() {
  const { state} = useLocation();
  
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography>Server Error</Typography>
          <Divider />
          <Typography>{state.error.detail || 'Internal Server error'}</Typography>
        </>
      ) : (
        <Typography>Server Error</Typography>
      )}
      <Button onClick={() => console.log("test")}></Button>
    </Container>
  )
}
