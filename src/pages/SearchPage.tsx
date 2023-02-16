import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';

const theme = createTheme();

export default function SearchPage() {
  const location = useLocation();
  let query_keywords = location.state.keywords;
  let query_location = location.state.location;
  console.log(query_keywords, query_location)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        search result page
        <Link href="/jobs/05" variant="body2">
          {"to job page"}
        </Link>
      </Container>
    </ThemeProvider>
  );
}
