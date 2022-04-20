import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Home from "./Home.jsx";
import axios from "axios";
import Typography from '@mui/material/Typography';


export default function FullWidthTextField(props) {

 


const handleOnChange = event => {
    console.log('Click');
    console.log(event.target.value);


  };

  const headers=["Left", "Left Leaning", "Center", "Right Leaning", "Right"]

  const handleOnSearch = event => {
    console.log('Click');
    console.log(event.target.value);
    if (event.key==="Enter"){
      axios({
        method: 'post',
        url: '/api/search',
        data: {
          query: event.target.value,
        },
      })
      //props.setColumns
      .then((response) => {
        props.setColumns(response.data.map((el, i) => <Home articles={el} bias={headers[i]}/>));
      })
      .catch(err => console.log(err))
  };
  }

  return (
    

    

   
    <Box
      sx={{
        width: 600,
        maxWidth: '100%',
        m:4,
        borderColor: 'purple',
        backgroundColor: 'white',

        borderRadius: 100
        
      }}
    >
        <Typography className="headers" sx={{
        color: "primary.main",
        fontSize: 100,
        textAlign: 'center',
        fontFamily: "Palatino, URW Palladio L, serif",
        mt: 4,
   
        
        }}
      >
       HOOT
      </Typography>
      <Box sx={{display: "flex"}}>

      {/* <img className="owl" src={"https://c.tenor.com/r5YDafn04RoAAAAi/littlest-friends-owlbert.gif"} alt="hi"/> */}
      <TextField sx={{ }} onKeyDown={handleOnSearch} onChange={handleOnChange} fullWidth label="search" id="fullWidth" />
      </Box>
    </Box>

  );
}

// export default function LoadingButtons() {
//   console.log(LoadingButton)
//   return (
//     <Stack direction="row" spacing={2}>
//       <LoadingButton loading variant="outlined">
//         Submit
//       </LoadingButton>
      

//     </Stack>
//   );
// }