const axios = require("axios");

const testController = {};
 
testController.getNews = (req, res, next) => {
  console.log('This is my get request on testController.js')
  res.send('Test')
  return next
} 


// const options = {
//   method: 'GET',
//   url: 'https://google-news1.p.rapidapi.com/topic-headlines',
//   params: {topic: 'WORLD', country: 'US', lang: 'en', limit: '50'},
//   headers: {
//     'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
//     'X-RapidAPI-Key': '89e47335f5msh4d7997067bc1babp1d3444jsn4a9af4c9af9c'
//   }
// };

// testController.getNews =  (req, res, next) => {
//   axios.request(options)
//   .then(function (response) {
// 	console.log(response.data);
//   // res.locals = (response.data)
//   }).catch(function (error) {
//     console.error('Error requesting data from Google News API', error);
//   });
// };



module.exports = testController;
