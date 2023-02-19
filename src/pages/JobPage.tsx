import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useParams } from 'react-router-dom';
import JobCard from '../components/searchpage/JobCard'
import Container from '@mui/material/Container';
import {jobs} from '../params'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StyleIcon from '@mui/icons-material/Style';
import { Box } from '@mui/system';
import PaidIcon from '@mui/icons-material/Paid';
import Divider from '@mui/material/Divider';
const theme = createTheme();


export default function JobPage() {
  let  jobid  = 1
  console.log(jobid)
  console.log(jobs)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl" sx={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Container maxWidth={false} sx={{position: "sticky" ,top:0, bgcolor:'white', boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.3)"}}>
          <Typography variant="h4" align="left" gutterBottom fontWeight='bold'>
            {jobs[jobid].title}
          </Typography>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <Box component="img" src={jobs[jobid].companyphoto} sx={{
          height: 80,
          width: 80,
          mt:1.5,
          mb:1.5,
          mr:1.5
        }}>
            </Box>
            <span>
              <Typography variant="h6" align="left" gutterBottom>
                {jobs[jobid].company}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                {jobs[jobid].location}
              </Typography>
            </span>
          
          </div>
          <Button
              href = {jobs[jobid].link.toString()}
              target="_blank"
              size="small"
              variant="contained"
              sx={{ mt: 1, mb: 4 }}
              endIcon={<SendIcon />}
              >
                APPLY NOW
          </Button>
        </Container>
        <Divider />
        <Container sx={{whiteSpace: "pre-wrap",wordWrap: 'break-word'}}>
          <Typography variant='h5' fontSize='1.8rem' align="left" sx={{ mt: 1, mb: 2 }} fontWeight='bold'>
            職缺資訊
          </Typography>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <StyleIcon />
              <span>
                <Typography variant='h5' fontSize='1.3rem' align='left' sx={{ ml: 0.5, mt: 0.4}} fontWeight='500'>
                  職缺類型
                </Typography>
              </span>
          </div> 
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <PaidIcon />
              <span>
                <Typography variant='h5' fontSize='1.3rem' align='left' sx={{ ml: 0.5, mt: 0.4}} fontWeight='500'>
                  薪資：
                </Typography>
              </span>
              <span>
                <Typography variant='h5' fontSize='1.3rem' align='left' sx={{ ml: 0.5, mt: 0.4}}>
                  {jobs[jobid].salary}
                </Typography>
              </span>
          </div> 
          <div>
            <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0}} fontWeight='bold'>
                職缺描述
            </Typography>
            {/* <pre> */}
            <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0}} fontWeight='400'>
                {jobs[jobid].description}
            </Typography>
            {/* </pre> */}
          </div>
          <div>
            <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0}} fontWeight='bold'>
                職缺要求
            </Typography>
            {/* <pre> */}
            <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0}} fontWeight='400'>
              {jobs[jobid].requirements}
              
            </Typography>
            {/* </pre> */}
          </div>
          <div>
            <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0, flexWrap: 'wrap'}} fontWeight='bold'>
                公司福利
            </Typography>
            {/* <pre> */}
            <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0 , flexWrap: 'wrap'}} fontWeight='400'>
              {jobs[jobid].benefits}
              
            </Typography>
            {/* </pre> */}
          </div>

          
          
        </Container>
          
      </Container>
    </ThemeProvider>
  );
}
