import React, { useEffect, useState } from 'react';
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


import IconButton from '@mui/material/IconButton';

import StarIcon from '@mui/icons-material/Star';
import BookmarksIcon from '@mui/icons-material/Bookmarks';



export default function VirtualizedList(props) {
  const { articles } = props;



  function renderRow(props) {
    const { index, style } = props;

    return (
      <ListItem sx={{m: 0}} style={style} key={index} component="div" disablePadding alignItems="center">
        
        <ListItemButton onClick={()=>window.open(articles[index].link)}>
        
          <Card sx={{ 
            display: 'grid',
            gap: 1,
            gridTemplateColumns: ' 40px 80px 70px 28px ',
            gridTemplateRows: '40px 33px 12px 78px ',


            backgroundColor: "common.light",
            borderColor:"secondary.main",
            boxShadow: 8,
            border:1,
            borderRadius:5,
            minWidth: 220,
            maxWidth: 220,
            maxHeight: 200,
            minHeight: 200 }}
            display= "inline block">
           
           
           <Box
        component="img"
        sx={{
          marginTop: 1.5,
         marginLeft: 1,
          height: 30,
          width: 30,
          gridColumnStart: 1,
          gridColumnEnd: "span 1",
          gridRowStart: 1,
          gridRowEnd: 'span 1',
                }}
        alt="The house from the offer."
        src={articles[index].source.favicon}
      />

<Typography sx={{
   marginTop: 1.5,
  fontSize:12,
  gridColumnStart: 2,
  gridColumnEnd: "span 1",
  gridRowStart: 1,
  gridRowEnd: 'span 1',
  }}
  variant="h1" component="div">
{articles[index].source.title}               
 </Typography>
              
        
              <CardActions sx={{
   marginLeft: -5,
  gridColumnStart: 4,
  gridColumnEnd: "span 1",
  gridRowStart: 1,
  gridRowEnd: 'span 1',
  }}>
                <IconButton  size="small" variant="outlined"><BookmarksIcon/></IconButton>
              </CardActions>
      
    
          
  
              <CardContent sx={{
   marginTop: -1.5,
   marginLeft: -1,
  fontSize:12,
  gridColumnStart: 1,
  gridColumnEnd: "span 4",
  gridRowStart: 2,
  gridRowEnd: 'span 1',
  }}>
                <Typography sx={{fontSize:10}}variant="h6" component="div">
                  {articles[index].title.slice(0,100) + "..."}
                </Typography>
              </CardContent>

              

              <Box
        component="img"
        sx={{
          borderRadius: 1,
          marginLeft: -2.5,
         width: 150,
         height: 80,
        justifySelf: 'center',
          gridColumnStart: 1,
          gridColumnEnd: "span 4",
          gridRowStart: 4,
          gridRowEnd: 'span 1',
                }}
        alt="The house from the offer."
        src={articles[index].thumbnail} 
      />

         
  
       
          </Card>
        </ListItemButton>
      </ListItem>
    );
  };


  return (
    <div>
      <Typography sx={{
        color: "white",
        fontSize:40,
        textAlign: 'center'
        }}
        variant="h6"
        component="div">
         { props.bias}
      </Typography>
  
      <Box
      
        sx={{
          // borderRadius:"borderRadius", // THE REDECLARATION WAS CAUSING MY APP TO CRASH
          borderRadius: 5,
          color: "#1769aa",
          boxShadow: 10,
          mt: 2,
          mr:2,
          border: 1,
          width: "100%",
          height: 590,
          maxWidth: 250,
          backgroundColor: "secondary.main",
          borderColor:"white"
        }}
        >
        <FixedSizeList
          height={580}
          width={250}
          itemSize={215}
          itemCount={articles.length-1}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  );
}



