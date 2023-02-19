import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useParams } from 'react-router-dom';
import JobCard from '../components/searchpage/JobCard'
import Container from '@mui/material/Container';
import {jobs} from '../params'

const theme = createTheme();


export default function JobPage() {
  let { jobid } = useParams()
  console.log(jobid)
  console.log("hi")
  console.log(jobs)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        job result page: {jobid}
      </Container>
    </ThemeProvider>
  );
}
