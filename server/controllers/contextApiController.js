const axios = require("axios");
const dummyData = require('../dummy-data-contextApi');

const options = {
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  params: {
    pageNumber: "1",
    pageSize: "50",
    withThumbnails: "true",
    location: "us",
  },
  headers: {
    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146",
    // Patrick's key: 89e47335f5msh4d7997067bc1babp1d3444jsn4a9af4c9af9c
    // Michael's key: ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146 -- used up 4/16
    // Matt's Key: a65e262fb5msh06c38f045ca319ap1d473fjsn6801c08d9a5a
    // Mike's Key: 17f0cf7f02mshb9e0b4e8b9ea0abp1ebce6jsn889c43680174
  },
};

const contextApiController = {};

contextApiController.getTrendingNews = (req, res, next) => {

  res.locals.articles = dummyData;
  return next();

  /** AXIOS REQUEST COMMENTED OUT FOR dummyData USAGE **/
  // axios
  //   .request(options)
  //   .then(response => {
  //     res.locals.articles = response.data.value[0].title;
  //     return next(); // KEEP next() MIDDLEWARE WITHIN ASYNC FUNCTIONALITY
  //   })
  //   .catch((error) => {
  //     console.error(
  //       "Error with GET request to contextAPI on contextApiController.js",
  //       error
  //     );
  //   });
};

module.exports = contextApiController;
