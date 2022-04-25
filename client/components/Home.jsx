import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList} from "react-window";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';
import { left } from '@mui/system';
import Modal from '@mui/material/Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import PublicIcon from '@mui/icons-material/Public';



import IconButton from '@mui/material/IconButton';

import StarIcon from '@mui/icons-material/Star';
import BookmarksIcon from '@mui/icons-material/Bookmarks';



export default function VirtualizedList(props) {

  
  const { articles } = props;
  const [expanded, setExpanded] = React.useState(false);
  

  

  function renderRow(props) {

    
    const [newNum, setNewNum] = useState(0);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [newNum])
    const style2 = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      height: 700,
      bgcolor: 'secondary.main',
      borderRadius:2,
      boxShadow: 24,
      p: 4,
      overflow:'scroll',
    };
    const { index, style } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  
    function dualClick (){
  handleOpen()
  open === false ? setNewNum(index) : newNum<articles.length -1 ? setNewNum(newNum+1): null;
  }



  const nextArticle = event => {

if (event.key=="ArrowRight" && newNum< articles.length-1){
 setNewNum(newNum+1);
}

if (event.key=="ArrowLeft" && newNum>0){

  setNewNum(newNum-1);
 }

 


  };

    return (
      <ListItem className="zoom" sx={{marginLeft:"-5.5px", borderColor: "white"}} style={style} key={index} component="div" disablePadding alignItems="center">
     <ListItemButton onClick={dualClick} sx={{'&:hover': {
          
          backgroundColor: 'transparent !important'      } }}>
              <Modal
              
        open={open}
        onClose={handleClose}
        onKeyDown={nextArticle} 
        // onClick={nextArticle}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style2}>
         
          <Typography sx={{mb:3, fontFamily: "Franklin,Arial,Helvetica,sans-serif;", fontSize: 30, fontWeight: 600, letterSpacing: 0}} id="modal-modal-title" variant="h6" component="h2">
          {articles[newNum].title}  
                    </Typography>
                    <Typography sx={{ fontSize:12, color:"#9d9d9d" }} id="modal-modal-title" variant="h6" component="h2">
          April 5th, 2022   
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "space-between"}} >
                    <img className="modalCard" src={articles[newNum].thumbnail} alt=""/>

                      <Typography sx={{width: 300, mr: 5, textAlign: "center", fontWeight: 600, fontFamily:  "Helvetica Neue,Helvetica,Arial,Utkal,sans-serif"}}>"{articles[newNum].description}"</Typography>
                    </Box>
                    <Typography sx={{mb:3, fontSize: 15,}} id="modal-modal-title" variant="h6" component="h2">
          {articles[newNum].source.title}  
                    </Typography>
              
          <Typography  id="modal-modal-description" sx={{ mt: 5, fontFamily: "Helvetica Neue,Helvetica,Arial,Utkal,sans-serif", fontWeight: 380 }}>
           { articles[newNum].body}          </Typography>
        </Box>
      </Modal>
        
        <Card sx={{ maxWidth: 200, maxHeight: 170, minHeight: 170 }}>


      <CardMedia
        component="img"
        alt="no news"
        height="90"
        image={articles[index].thumbnail} 
      
      />
      <CardContent>
    <Box sx={{minHeight: 30, maxHeight:25}}>
        <Typography sx={{fontSize: 12, fontWeight: 400, color: "black", marginTop: "-10px"}}>
          {articles[index].title.length > 50 ? articles[index].title.slice(0,70) + "..." : articles[index].title + ":"}
        </Typography>
      
    
        </Box>
      </CardContent>
      
      <Box sx={{maxHeight:2,}}> 
      
{articles[index].favicon[0] != "h" ? <img
      
      src={"https://c.tenor.com/r5YDafn04RoAAAAi/littlest-friends-owlbert.gif"} alt="hi"
      className="cardImage"
       
     /> :
        <img
      
      src={articles[index].favicon} alt="hi"
      className="cardImage"
       
     />}

      </Box>
    {/* <Box sx={{marginTop:"-15px"}}>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Box> */}
    </Card>
        
        </ListItemButton>
      </ListItem>
    );
  };


  return (
    <div>
       
    
      <Typography className="headers" sx={{
      
        fontSize:25,
        textAlign: 'center',
        color: 'black',
        fontFamily: "Palatino, URW Palladio L, serif",
        fontWeight: 1
        }}
        variant="h6"
        component="div">
         { props.bias}
      </Typography>
     
  
      <Box
      
        sx={{
          // borderRadius:"borderRadius",
          borderRadius: 2,
          color: "#1769aa",
          boxShadow: 20,
          mt: 2,
          mr:2,
          border: 1,
          width: "100%",
          height: 500,
          maxWidth: 220,
          backgroundColor: "#f1f2f5",
          borderColor: props.colors
        }}
        >
        <FixedSizeList
          height={470}
          width={250}
          itemSize={195}
          itemCount={articles.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      
    </div>
  );
}



