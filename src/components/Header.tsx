import * as React from 'react';
import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}
export default function Header(props: HeaderProps) {
  const [logged, setlogged] = useState(false);
  const changesaved =()=>{
    setlogged(true);
  }
  const login=()=>{
    if(logged){
      return(
        <div>
          <IconButton>
          <AccountCircleIcon fontSize="large"/>
        </IconButton>
        <IconButton>
          <BookmarkIcon fontSize="large" color="primary"/>
        </IconButton>
        </div>
      );
    }
    else{
      return(
        <Button variant="contained" size="small" onClick={changesaved}>
          登入/註冊
        </Button>
      );
    }
    
  }
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', gap: 1 }}>
        <Box id="title"
        sx={{
          align:"left",
          flex:1,
          padding:"0px",
          
        }}>
          <img src={require("../img/drib-low-resolution-color-logo.png")} alt="DRIB" height="70px"></img>
        </Box>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
        </Typography>
        {/* <Button size="large" component="label" variant="text" sx={{left:"0px"}} color="primary">DRIB</Button> */}
        
        <Button size="small" variant="outlined" component="label">
          上傳履歷
          <input hidden accept="application/pdf" multiple type="file" />
        </Button>
        {login()}
      </Toolbar>
    </React.Fragment>
  );
}