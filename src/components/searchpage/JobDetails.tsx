import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StyleIcon from '@mui/icons-material/Style';
import PaidIcon from '@mui/icons-material/Paid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
interface JobDataProps {
  job_data: string;
}
    
export default function JobCard(props: JobDataProps) {
	const { job_data } = props
	const jobs = JSON.parse(job_data)
	// console.log(jobData)
	
  return (
		<React.Fragment>
			<Box sx={{ 
        flexGrow: 1, 
        height: '175vh',
        width: '95%',
      }}>
				<Card variant="outlined" sx={{ 
          flexGrow: 1, 
          height: '100%',
          width: '100%',
          overflow: 'auto'
        }}>
          <Container component="main" maxWidth="xl" sx={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Container maxWidth={false} sx={{ position: "sticky" ,top:0, bgcolor:'white', boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.3)"}}>
              <Typography variant="h4" align="left" gutterBottom fontWeight='bold'sx={{pt:3}}>
                {jobs.title}
              </Typography>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
              }}>
                <Box component="img" src={jobs.companyphoto} sx={{
              height: 80,
              width: 80,
              mt:0.5,
              mb:1.5,
              mr:1.5
            }}>
                </Box>
                <span>
                  <Typography variant="h6" align="left" gutterBottom>
                    {jobs.company}
                  </Typography>
                  <Typography variant="subtitle1" align="left" gutterBottom>
                    {jobs.location}
                  </Typography>
                </span>
              
              </div>
              <Button
                  href = {jobs.link.toString()}
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
                    <Typography variant='h5' fontSize='1.3rem' align='left' sx={{ ml: 0.5, mt: 0.4, mr: 0.5}} fontWeight='500'>
                      職缺類型：
                    </Typography>
                  </span>
                  <span>
                    <Stack direction="row" spacing={1}>
                      {jobs.jobtag1 && <Chip label={jobs.jobtag1} />}
                      {jobs.jobtag2 && <Chip label={jobs.jobtag2} />}
                      {jobs.jobtag3 && <Chip label={jobs.jobtag3} />}
                    </Stack>
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
                      {jobs.salary}
                    </Typography>
                  </span>
              </div> 
              <div>
                <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0}} fontWeight='bold'>
                    職缺描述
                </Typography>
                {/* <pre> */}
                <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0}} fontWeight='400'>
                    {jobs.description}
                </Typography>
                {/* </pre> */}
              </div>
              <div>
                <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0}} fontWeight='bold'>
                    職缺要求
                </Typography>
                {/* <pre> */}
                <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0}} fontWeight='400'>
                  {jobs.requirements}
                  
                </Typography>
                {/* </pre> */}
              </div>
              <div>
                <Typography variant='h5' fontSize='1.5rem' align='left' sx={{ ml: 0.5, mt: 3.0, flexWrap: 'wrap'}} fontWeight='bold'>
                    公司福利
                </Typography>
                {/* <pre> */}
                <Typography variant='body1' align='left' sx={{ ml: 0.5, mt: 1.0 , flexWrap: 'wrap'}} fontWeight='400'>
                  {jobs.benefits}
                  
                </Typography>
                {/* </pre> */}
              </div>

              
              
            </Container>
              
          </Container>
        </Card>
			</Box>
		</React.Fragment>
  );
}
