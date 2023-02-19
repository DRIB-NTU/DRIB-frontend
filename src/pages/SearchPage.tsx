import * as React from 'react';
import JobList from '../components/searchpage/JobList';
import JobDetails from '../components/searchpage/JobDetails';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import SearchBar from '../components/searchpage/SearchBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {jobs} from '../params'


const theme = createTheme();

export default function SearchPage() {
  const location = useLocation();
  let query_keywords = location.state.keywords;
  let query_location = location.state.location;
  console.log(query_keywords, query_location)
  console.log(jobs)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1}}>
        <SearchBar keywords={query_keywords} location={query_location} />
        <Grid container spacing={0} >
          <Grid item xs={6}>
            <JobList job_list={JSON.stringify(jobs)}/>
          </Grid>
          <Grid item xs={6}>
            <JobDetails job_data={JSON.stringify(jobs[0])}/>
          </Grid>
        </Grid>
      </Box>  
    </ThemeProvider>
  );
}
