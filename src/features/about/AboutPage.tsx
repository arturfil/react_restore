import { Alert, AlertTitle, Button, ButtonGroup, Container, ListItem, ListItemText, Typography } from '@mui/material'
import { useState } from 'react';
import agent from '../../app/api/agent'

export function AboutPage() {
  const [errors, setErros] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch(error => setErros(error));
  }

  return (
    <Container>
      <Typography gutterBottom variant="h4">
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained" onClick={() => agent.TestErrors.get400Error().catch(err => console.log(err))}>Test400 Error</Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get401Error().catch(err => console.log(err))}>Test401 Error</Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get404Error().catch(err => console.log(err))}>Test404 Error</Button>
        {/* <Button variant="contained" onClick={() => agent.TestErrors.get500Error().catch(err => console.log(err))}>Test500 Error</Button> */}
        <Button variant="contained" onClick={getValidationError}>Test Validation Error</Button>
      </ButtonGroup>
      {errors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          {errors.map(error => (
            <ListItem key={error}>
              <ListItemText>{error}</ListItemText>
            </ListItem>
          ))}
        </Alert>
      )}
    </Container>
  )
}
