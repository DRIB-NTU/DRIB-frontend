import * as React from 'react';
import { useState, useEffect } from 'react';
import JobList from '../components/searchpage/JobList';
import JobDetails from '../components/searchpage/JobDetails';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import SearchBar from '../components/searchpage/SearchBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {params_jobs, useBackend} from '../params';
import instance from '../axios';

const theme = createTheme();

export default function SearchPage() {
  const loc = useLocation()
  const [keywords, setKeywords] = useState("軟體工程師")
  const [location, setLocation] = useState("台北")
  const [jobs, setJobs] = useState(params_jobs)
  // console.log(query_keywords, query_location)
  
  const [selectedJob, SetSelectedJob] = useState(0)

  useEffect(() => {
    const getJobs = async () => {
      console.log(keywords, location)
      setKeywords(loc.state.keywords)
      setLocation(loc.state.location)
      const res = await instance.get('/api/search', {
        params: { 'keywords': keywords, 'location': location },
      });
      if (res.status === 200) {
        // console.log(res.data)
        // console.log(res.data.jobs)
        setJobs(res.data.jobs)
      } else {
        console.log('error', res.data);
      }
    };
    if(useBackend) getJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1}}>
        <SearchBar keywords={keywords} location={location} setJobs={setJobs} />
        <Grid container>
          <Grid item xs={4}>
            <JobList job_list={JSON.stringify(jobs)} SetSelectedJob={SetSelectedJob}/>
          </Grid>
          <Grid item xs={8}>
            <JobDetails job_data={JSON.stringify(jobs? jobs[selectedJob]: [])}/>
          </Grid>
        </Grid>
      </Box>  
    </ThemeProvider>
  );
}
