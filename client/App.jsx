import React, { useEffect, useState} from 'react';
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import HeaderIcons from "./components/HeaderIcons.jsx";
import dummyArticles from '../test-env/dummyData/dummyArticles'


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
  const [columns, setColumns] = useState([[],[],[],[],[]]);
  const [test, setTest]= useState([])
  console.log(sampleData.length)
  const colorChart= ["blue",'#00ABD8', 'purple', '#e71111', '#950b0b']

  // useEffect(()=>{
  //   axios.get("/api")
  //   .then((response) => {
  //     setColumns(response.data.map((el, i) => <Home articles={el} bias={headers[i]}/>));})
  //   .catch(err => {console.log(err)});
  // }, [])

 // dummyData is an array of arrays. I made it not an array of arrays so that i can get patricks sorting down.#00ABD8

//  for (let i=0; i < objs.length; i++){
//   sampleData[i].bias== 'left' ? columns[0].push(sampleData[i]) :  sampleData[i].bias== 'center-left' ? columns[1].push( sampleData[i].bias) :     sampleData[i].bias== 'center' ? columns[2].push( sampleData[i].bias) :     sampleData[i].bias== 'center-right' ? columns[3].push( sampleData[i].bias) : sampleData[i].bias== 'left' ? columns[4].push( sampleData[i].bias) :null
// }
 
    useEffect(()=>{
   
    
      setColumns(sampleData.map((el,i) => <Home colors={colorChart[i]} articles={el} bias={headers[i]}/>));
    }, []) 

    console.log(sampleData)
  /** CALL THE BACKEND FROM THE FRONTEND **/
  // useEffect(() => {
  //   fetchNews();
  // }, [])

  // const fetchNews = async () => {
  //   try {
  //     const { data } =  await axios.get('/hootDB', {test});
  //     setTest(data);
  //     console.log('fetchNews is being invoked...', data);
  //   } catch (error) {
  //     console.error('error reported by fetchNews on App.jsx', error)
  //   }
  // }

  // console.log(state)

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
