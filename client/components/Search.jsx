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

  };

  const headers=["Left", "Left Leaning", "Center", "Right Leaning", "Right"]

  const handleOnSearch = event => {
    if (event.key==="Enter") {
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
    

    

<Box sx={{ 
  mt: 8,         
  borderRadius: 2,
  height: 210, 
  background: 'linear-gradient(to right, #003399 29%, #ff0000 100%)',
}}>
    <Box
      sx={{
        width: 600,
        maxWidth: '100%',
        m:4,
        borderColor: 'purple',

        
      }}
    >
        <Typography className="headers" sx={{
        color: "white",
        fontSize: 90,
        textAlign: 'center',
        fontFamily: "Palatino, URW Palladio L, serif",
        mt: "-25px",
        mb: 3,
        borderRadius: 4,
        fontWeight: 300,
        lettSpacing: "normal"
   
        
        }}
      >
       HOOT
      </Typography>
      <Box sx={{mt: "-51px", display: "flex", ml: 7.3, maxWidth: "80%"}}>

      {/* <img className="owl" src={"https://c.tenor.com/r5YDafn04RoAAAAi/littlest-friends-owlbert.gif"} alt="hi"/> */}
      <TextField sx={{ backgroundColor: "white"}} onKeyDown={handleOnSearch} onChange={handleOnChange} fullWidth label="search" id="fullWidth" />
      </Box>
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