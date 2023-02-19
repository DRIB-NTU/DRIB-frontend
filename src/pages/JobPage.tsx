import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


const theme = createTheme();

export default function JobPage() {
  let { jobid } = useParams()
  console.log(jobid)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <Typography variant="h4" align="left" gutterBottom>
          JOB TITLE
        </Typography>
        <Typography variant="h6" align="left" gutterBottom>
          COMPANY
        </Typography>
        <Button
            href = "https://www.104.com.tw/job/7ftzg?jobsource=jolist_c_relevance"
            size="small"
            // variant="contained"
            sx={{ mt: 0, mb: 1 }}
            >
              APPLY NOW
            </Button>
          
      </Container>
    </ThemeProvider>
  );
}
