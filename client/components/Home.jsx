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


import IconButton from '@mui/material/IconButton';

import StarIcon from '@mui/icons-material/Star';
import BookmarksIcon from '@mui/icons-material/Bookmarks';



export default function VirtualizedList(props) {

  
  const { articles } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  function renderRow(props) {

    const { index, style } = props;

    return (
      <ListItem className="zoom" sx={{marginLeft:"-1", borderColor: "white"}} style={style} key={index} component="div" disablePadding alignItems="center">
        
        <ListItemButton onClick={()=>window.open(articles[index].link)} sx={{'&:hover': {
          
          backgroundColor: 'transparent !important'      } }}>
        
        <Card sx={{ maxWidth: 190, maxHeight: 170, borderRaidus:5 }}>


      <CardMedia
        component="img"
        alt="green iguana"
        height="70"
        image={articles[index].thumbnail} 
      />
      <CardContent>
     <IconButton>
        {articles[index].source.favicon }
      </IconButton>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        {/* <Card sx={{ maxWidth: 190, maxHeight: 180, borderRadius: 5 }}>
          <Box sx={{display: "flex"}}>
      <CardHeader  
        avatar={
          <CardMedia
          component="img"
          height="20"
          image= {articles[index].source.favicon }
          alt="none"
          
        />
        }

      />
      <Typography  sx={{fontSize:15, marginRight:10, minWidth:120, mt: 1.5}}>
        
            {articles[index].source.title.length > 20 ? articles[index].source.title.slice(0,20)+"..." : articles[index].source.title}
          </Typography>
       </Box>
      <CardMedia
        component="img"
        height="70"
        image={articles[index].thumbnail} 
        alt="Paella dish"
        />
  
      <CardContent sx={{marginTop:"-10px"}}>
        <Typography sx={{ fontSize:10}} variant="body2" color="black">
         {articles[index].title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
  
      </CardActions>
  
    </Card> */}
        
        </ListItemButton>
      </ListItem>
    );
  };


  return (
    <div>
      <Typography className="headers" sx={{
      
        fontSize:30,
        textAlign: 'center',
        color: 'black',
        fontFamily: "Palatino, URW Palladio L, serif",
        fontWeight: 50,
    
        }}
        variant="h6"
        component="div">
         { props.bias}
      </Typography>
  
      <Box
      
        sx={{
          borderRadius:"borderRadius",
          borderRadius: 5,
          color: "#1769aa",
          boxShadow: 10,
          
          mt: 2,
          mr:2,
          border: 1,
          width: "100%",
          height: 480,
          maxWidth: 220,
          backgroundColor: "#f1f2f5",
          borderColor:"white"
        }}
        >
        <FixedSizeList
          height={470}
          width={250}
          itemSize={200}
          itemCount={articles.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  );
}



