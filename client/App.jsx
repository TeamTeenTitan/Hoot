import React, { useEffect, useState} from 'react';
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import HeaderIcons from "./components/HeaderIcons.jsx";
import dummyData from '../server/dummy-data-contextApi'


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


/** CALL TO GOOGLE API FOR NEWS FETCH (ANTIQUATED) **/
useEffect(()=>{
  axios.get("/api")
  .then((response) => {
    setColumns(response.data.map((el, i) => <Home articles={el} bias={headers[i]}/>));})
  .catch(err => {console.log(err)});
}, [])

  useEffect(()=>{
    setColumns(dummyData.value.map((el,i) => <Home articles={el} bias={headers[i]}/>));
  }, [])

  /** CALL THE BACKEND FROM THE FRONTEND **/
  useEffect(() => {
    fetchNews();
  }, [])

  const fetchNews = async () => {
    try {
      const { data } =  await axios.get('/api', {test});
      setTest(data);
      console.log('fetchNews is being invoked...', data);
    } catch (error) {
      console.error('error reported by fetchNews on App.jsx', error)
    }
  }

  console.log('this is my result', test)


  return (

    <ThemeProvider theme={theme}>

      <div className="main">
      <HeaderIcons />
        <Search setColumns={setColumns}/>
       
        <div className="cardWrap">
          {columns}
        </div>
        {/* <div>
          {test.map((el, i) => {
            p
          })}
        </div> */}
      </div>

    </ThemeProvider>
  );
}
