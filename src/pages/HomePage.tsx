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
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate('search/', {
      state: {
        keywords: data.get('keywords'),
        location: data.get('location'),
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          sx={{
            marginTop: 11,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:20,
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <SearchIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            找到最適合你的職缺
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="工作地點"
            name="location"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="keywords"
            label="關鍵字"
            id="keywords"
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            搜尋
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

