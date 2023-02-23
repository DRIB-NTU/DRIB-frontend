import * as React from 'react';
import JobCard from './JobCard';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface JobListProps {
  job_list: string;
  SetSelectedJob(id: number): any
}

const theme = createTheme();

export default function JobList(props: JobListProps) {
  const { job_list, SetSelectedJob } = props
	const jobs = JSON.parse(job_list)
  const handleJobClick = (id) => {
    SetSelectedJob(id)
  }
  // console.log(jobs)

  return (
    <ThemeProvider theme={theme}>
      <Container 
        component="main" 
        maxWidth="sm"
        sx={{ 
          height: '100%', 
          overflow: 'auto'
        }}>
        {jobs.map((data, id) => (
            <div key={"search-div-" + id} >
              <CardActionArea
                onClick={() => handleJobClick(id)}
              >
                <JobCard 
                  key={"search-job-" + id} 
                  job_data={JSON.stringify(data)}
                />
              </CardActionArea>
              <Box  key={"job-padding-" + id}  sx={{ m: 1 }} />
            </div>
        ))}
      </Container>
    </ThemeProvider>
  );
}
