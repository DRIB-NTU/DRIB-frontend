import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

function Copyright() {
  return (
    <Container>
      <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Container component="footer" >
      {/* <Link href="#" color="inherit">
        關於我們
      </Link>
      <Link href="#" color="inherit">
        幫助中心
      </Link>
      <Link href="#" color="inherit">
        隱私
      </Link>
      <Link href="#" color="inherit">
        條款
      </Link> */}
      <Divider/>
      <Typography variant="body2" color="text.secondary" align="center" sx={{mt:4}}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DRIB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
}