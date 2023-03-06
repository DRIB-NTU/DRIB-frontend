import * as React from 'react';
import {useState, ChangeEvent} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useNavigate} from 'react-router';
import SendIcon from '@mui/icons-material/Send';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}
export default function Header(props: HeaderProps) {
  // const navigate = useNavigate();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   navigate('login/');
  // };
  const [logged, setlogged] = useState(false);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUploadClick = () => {
    if (!file) {
      return;
    }
    // 👇 Uploading the file using the fetch API to the server
    fetch('http://localhost:3000/api/uploadfile', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  const [file, setFile] = useState<File>();
  const hideupload=()=>{
    if(!file) return;
    else return(
      <Button 
      onClick={handleUploadClick}
      variant="contained"
      endIcon={<SendIcon />}
      size="small"
      >Upload</Button>
    );
  }
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
        <Box>
          <Button variant="contained" size="small">
          登入/註冊
          </Button>
        </Box>
        
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
          <input hidden accept="application/pdf" multiple type="file" onChange={handleFileChange}/>
        </Button>
        <div>{file && `${file.name}`}</div>
        {hideupload()}
        {login()}
      </Toolbar>
    </React.Fragment>
  );
}