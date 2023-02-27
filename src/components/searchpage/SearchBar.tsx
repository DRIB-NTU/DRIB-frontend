import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import TextField from '@mui/material/TextField';
import instance from '../../axios';
import {params_jobs, useBackend} from '../../params';

const theme = createTheme();

interface QueryProps {
  keywords: string
  location: string
  setJobs(jobs: any): any
}
    
export default function JobCard(props: QueryProps) {
	const { setJobs } = props
  const [keywords, setKeywords] = useState("行銷實習生")
  const [location, setLocation] = useState("台北市")
	// console.log(keywords, location)

  const handleOnClick = () => {
    const getJobs = async () => {
      console.log(keywords, location)
      const res = await instance.get('/api/search', {
        params: { 'keywords': keywords, 'location': location },
      });
      if (res.status === 200) {
        console.log(res.data.jobs)
        setJobs(res.data.jobs)
      } else {
        console.log('error', res.data);
      }
    };
    if(useBackend) getJobs();
  }

  return (
		<React.Fragment>
      <Box sx={{width:"100%"}}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: 2, 
            mb: 2,
        }}>
          <TextField
            margin="normal"
            name="keywords"
            label="Keywords"
            id="keywords"
            onChange={(newValue) => setKeywords(newValue.target.value)}
            value={keywords}
            sx={{width: 300}}
          />
          <TextField
            margin="normal"
            id="location"
            label="Location"
            name="location"
            value={location}
            onChange={(newValue) => setLocation(newValue.target.value)}
            sx={{width: 300, ml:3}}
          />
          <Box sx={{
            fontWeight: 550,
            ml: 3
            // pt:3,
          }}>
            <Button 
              variant="contained" 
              endIcon={<ManageSearchRoundedIcon />}
              sx={{
                fontWeight: 550,
              }}
              onClick={handleOnClick}
            >
              搜尋
            </Button>
          </Box>
        </Grid>
      </Box>
		</React.Fragment>
  );
}
