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
  const colorChart= ["blue",'#00ABD8', 'purple', '#e71111', '#950b0b']

  /** FETCH NEWS ARTICLES FROM  **/
  useEffect(async () => {
    await axios.get('api')
      .then((response) => {
        setColumns(response.data.articles.map((el,i) => <Home colors={colorChart[i]} articles={el} bias={headers[i]}/>));
        // console.log(columns);
      })
      .catch(err => console.log(err));
  }, []);

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
