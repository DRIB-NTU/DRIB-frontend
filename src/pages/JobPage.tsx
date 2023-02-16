import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useParams } from 'react-router-dom';

const theme = createTheme();

export default function JobPage() {
  let { jobid } = useParams()
  console.log(jobid)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        job result page: {jobid}
      </Container>
    </ThemeProvider>
  );
}
