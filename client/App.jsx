import React, { useEffect, useState} from 'react';
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import HeaderIcons from "./components/HeaderIcons.jsx";


import { sampleData } from "./assets/sampleData.js"

const theme = createTheme({
  palette: {
    primary: {
      main: "#8f24bd",
    },
    secondary: {
      main: "#f1f2f5"
    }
  
  },
});

export default function App() {

  const headers=["Left", "Lean-Left", "Center", "Lean-Right", "Right"]
  const [columns, setColumns] = useState(null);
  console.log(sampleData.length)
  const colorChart= ["blue",'#00ABD8', 'purple', '#e71111', '#950b0b']

  // useEffect(()=>{
  //   axios.get("/api")
  //   .then((response) => {
  //     setColumns(response.data.map((el, i) => <Home articles={el} bias={headers[i]}/>));})
  //   .catch(err => {console.log(err)});
  // }, [])

  useEffect(()=>{
   
    setColumns(sampleData.map((el,i) => <Home colors={colorChart[i]} articles={el} bias={headers[i]}/>));
   
  }, [])


  return (

    <ThemeProvider theme={theme}>
      <div>
<HeaderIcons/>
      <div className="main">
        <Search setColumns={setColumns}/>
       
        <div className="cardWrap">
          {columns}
        </div>

      </div>
</div>
    </ThemeProvider>
  );
}
