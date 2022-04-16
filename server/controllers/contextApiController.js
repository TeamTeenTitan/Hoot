const axios = require("axios");
const util = require('util');

const options = {
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  params: {
    pageNumber: "1",
    pageSize: "50",
    withThumbnails: "false",
    location: "us",
  },
  headers: {
    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146",
  },
};

const contextApiController = {};

contextApiController.getTrendingNews = (req, res, next) => {
  // console.log("This is my get request on contextApiController.js");
  // res.send("Test");

  axios
    .request(options)
    .then((response) => {
      console.log(response.data.value);
    res.locals = response.data.value
    })

    .catch(function (error) {
      console.error('Error with GET request to contextAPI on contextApiController.js', error);
    });

  return next();
};



module.exports = contextApiController;
