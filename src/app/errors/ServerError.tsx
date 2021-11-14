import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'

export default function ServerError() {
  const history = useHistory();
  const {state} = useLocation<any>();

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
      <Button onClick={() => history.push('/catalog')}></Button>
    </Container>
  )
}
