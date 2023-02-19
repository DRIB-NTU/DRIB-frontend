import * as React from 'react';
import JobCard from './JobCard';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface JobListProps {
  job_list: string;
}

const theme = createTheme();

export default function JobList(props: JobListProps) {
  const { job_list } = props
	const jobs = JSON.parse(job_list)
  console.log(jobs)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {jobs.map((data, id) => (
            <div>
              <JobCard 
                key={"search-job-" + id} 
                job_data={JSON.stringify(data)}
              />
              <Box  key={"job-padding-" + id}  sx={{ m: 1 }} />
            </div>
        ))}
        {/* <Link href="/jobs/05" variant="body2">
          {"to job page"}
        </Link> */}
      </Container>
    </ThemeProvider>
  );
}
