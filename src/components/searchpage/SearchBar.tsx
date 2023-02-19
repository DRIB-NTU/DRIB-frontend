import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import TextField from '@mui/material/TextField';

const theme = createTheme();

interface QueryProps {
  keywords: string
  location: string
}
    
export default function JobCard(props: QueryProps) {
	// const { keywords, location } = props
  const [keywords, setKeywords] = useState("行銷實習生")
  const [location, setLocation] = useState("台北市")
	// console.log(keywords, location)

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
            value={keywords}
            sx={{width: 300}}
          />
          <TextField
            margin="normal"
            id="location"
            label="Location"
            name="location"
            value={location}
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
            >
              搜尋
            </Button>
          </Box>
        </Grid>
      </Box>
		</React.Fragment>
  );
}
