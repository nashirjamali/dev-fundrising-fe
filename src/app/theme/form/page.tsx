import { Container, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Form() {
  return (
    <Container>
      <Typography variant="subtitle1">Label</Typography>
      <TextField placeholder="Placeholder" variant="outlined" />
    </Container>
  );
}
