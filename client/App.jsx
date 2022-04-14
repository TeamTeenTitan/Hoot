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
      main: "#2B2012",
      darker: "#053e85",
    },
    secondary: {
      main: "#D67747",
      light: "#462210",
    },
    common: {
      main: '#E8CFC1',
      light: '#f1e2da'
    }
  },
});

export default function App() {

  const headers=["Left", "Left Leaning", "Center", "Right Leaning", "Right"]
  const [columns, setColumns] = useState(null);
  const [test, setTest] = useState([])

  // useEffect(()=>{
  //   axios.get("/api")
  //   .then((response) => {
  //     setColumns(response.data.map((el, i) => <Home articles={el} bias={headers[i]}/>));})
  //   .catch(err => {console.log(err)});
  // }, [])

  // useEffect(()=>{
   
  //   setColumns(sampleData.map((el,i) => <Home key='i' articles={el} bias={headers[i]}/>));
   
  // }, [])

  useEffect(() => {
    fetchNews();
  }, [])

  const fetchNews =  () => {
    try {
      const { data } =  axios.get('/api', {test});
      setTest(data)
    } catch (error) {
      console.error('error reported by fetchNews on App.jsx', error)
    }
  }


  return (

    <ThemeProvider theme={theme}>

      <div className="main">
      <HeaderIcons />
        <Search setColumns={setColumns}/>
       
        <div className="cardWrap">
          {columns}
        </div>
      </div>

    </ThemeProvider>
  );
}
