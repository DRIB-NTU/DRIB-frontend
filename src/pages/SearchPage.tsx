import * as React from 'react';
import { useState } from 'react';
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
  const [selectedJob, SetSelectedJob] = useState(1)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1}}>
        <SearchBar keywords={query_keywords} location={query_location} />
        <Grid container>
          <Grid item xs={4}>
            <JobList job_list={JSON.stringify(jobs)} SetSelectedJob={SetSelectedJob}/>
          </Grid>
          <Grid item xs={8}>
            <JobDetails job_data={JSON.stringify(jobs[selectedJob])}/>
          </Grid>
        </Grid>
      </Box>  
    </ThemeProvider>
  );
}
