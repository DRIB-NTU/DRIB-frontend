import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

const theme = createTheme();

interface JobDataProps {
  job_data: string;
}
    
export default function JobCard(props: JobDataProps) {
	const { job_data } = props
	const jobData = JSON.parse(job_data)
	console.log(jobData)
	
  return (
		<React.Fragment>
			<Box sx={{ 
        flexGrow: 1, 
        height: '100%',
        width: '90%',
      }}>
				<Card variant="outlined" sx={{ 
          flexGrow: 1, 
          height: '100%',
          width: '100%',
          overflow: 'auto'
        }}>

        </Card>
			</Box>
		</React.Fragment>
  );
}
