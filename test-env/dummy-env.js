const axios = require('axios');
const dummyData = require('./dummy-data');
const util = require('util');
const allSides = require('../server/allSidesData/allsides');


const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: 'ukraine',
    count: '50',
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146'
  }
};

/** USE AXIOS TO SENT A GET REQUEST VIA THE API TO FETCH NEWS ARTICLES **/
axios
  .request(options)
  .then((response) => {
    console.log(util.inspect(response.data.value, {
      showHidden: false,
      depth: null,
      colors: true
    }))})
  .catch(function (error) {
    console.error('Error with GET request to contextAPI on contextApiController.js', error);
  });


/** INSPECT THE ENTIRE OBJECT WITH COMPACTED PROPERTIES **/
// console.log(response.data.value);

/** INSPECT THE ENTIRE OBJECT WITH ALL PROPERTIES LOGGED **/
// console.log(util.inspect(dummyData, {
//   showHidden: false,
//   depth: null,
//   colors: true,
// }));


const newsPush = (inputArr) => {
  /* CREATE AN ARRAY THAT WILL CONTAIN THE NAMES OF THE NEWS ARTICLES */
  const newsPubs = [];

  /* ITERATE THROUGH THE NAMES OF API-PROVIDED VALUES AND APPEND TO THE ARRAY */
  for (let i = 0; i < inputArr.length; i++) {
    newsPubs.push(inputArr[i].provider[0].name);
  }

  /* RETURN THE ARRAY OF NEWS ARTICLE NAMES */
  return newsPubs;
};

console.log(newsPush(dummyData));

// for (let i = 0; i < allSides.length; i++) {
//   console.log(allSides[i]["name"])
// }