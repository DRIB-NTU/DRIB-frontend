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

interface JobProps {
  job_data: string;
}
    
export default function JobCard(props: JobProps) {
	const [saved, setSaved] = useState(false)
	const { job_data } = props
	const jobData = JSON.parse(job_data)

	const onSavedCLick = () => {
		setSaved(!saved)
	}

	console.log(jobData)
	
  return (
		<React.Fragment>
			<Box 
				sx={{ minWidth: 275, flexGrow: 1}}
			>
				<Card variant="outlined" sx={{ overflow: 'auto' }}>
					<Box sx={{ 
						display: 'flex', 
						flexDirection: 'row-reverse', 
						mb: -6, 
					}}>
						<IconButton color="primary" onClick={onSavedCLick}>
							{saved? <BookmarkIcon color="primary" />:
								<BookmarkBorderRoundedIcon color="primary" />
							}
						</IconButton>
					</Box>
					<Grid container spacing={2} >
						<Grid item xs={1.8}>
							<Box
								component="img"
								sx={{
									height: 50,
									width: 50,
									m:2
								}}
								src={jobData.companyphoto}
							/>
						</Grid>
						<Grid item xs={10}>
							<CardContent>
								<Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
									{jobData.title}
								</Typography>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{jobData.company}
								</Typography>
								<Typography sx={{ mb: 1, fontSize: 14 }} color="text.secondary">
									{jobData.location}
								</Typography>
								<Stack direction="row" spacing={1}>
									<Typography sx={{ 
										fontWeight: 500, 
										display: "flex",
										flexDirection: "column",
										justifyContent: "center" }}>
										Tags: 
									</Typography>
									{jobData.jobtag1 && <Chip label={jobData.jobtag1} />}
									{jobData.jobtag2 && <Chip label={jobData.jobtag2} />}
									{jobData.jobtag3 && <Chip label={jobData.jobtag3} />}
								</Stack>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Box>
		</React.Fragment>
  );
}
