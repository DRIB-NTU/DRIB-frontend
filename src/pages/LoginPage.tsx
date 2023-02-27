import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function HomePage() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
            <Typography>Hello</Typography>
        </Container>
      </ThemeProvider>
    );
  }
  
  