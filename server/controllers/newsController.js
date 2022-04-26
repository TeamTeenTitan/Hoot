const fetch = require('node-fetch');
const axios = require('axios');

const db = require('../models/newsModel');
const allSidesConverter = require('../../utils/allSidesConverter');
const dummyArticles = require('../../data/dummyData/dummyArticles');

const newsController = {};
let id = 0;

/** CLIENT REQUEST OPTIONS FOR QUERYING GENERAL NEWS FROM WEB SEARCH API **/
const optionsNewsSearch = {
  method: 'GET',
  url: '',
  params: {
    q: '',
    country: 'US',
    lang: 'en',
    limit: '50',
    when: '30d',
    media: 'true',
  },
  headers: {
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146'
  }
};

/** GET CURRENT DATE OF CLIENT REQUEST **/
const retrieveDate = (i) => {
  let date = new Date();
  let yesterday = new Date(date.getTime());
  yesterday.setDate(date.getDate() - i);
  yesterday = JSON.stringify(yesterday).slice(1,11);
  return `${yesterday}`;
};

/** FILTER ARTICLES FOR BAD THUMBNAILS, LOGOS; REFORMAT DATES FOR CLIENT. **/
const filterArticle = (article) => {
  // FIND BAD THUMBNAILS
  if (article.image.thumbnail === 'https://res.cloudinary.com/dyexzgvkb/image/upload/v1627049796/thumbnail_luxwgj.jpg') {
    article.image.thumbnail = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynkol1VMGE-dwybU5_FMFGpzNkJMR-d09eQ&usqp=CAU';
  }

  // FIND BAD NEWS SOURCE LOGOS
  if (article.source.favicon === 'https://res.cloudinary.com/dyexzgvkb/image/upload/v1626528473/favicon_acrnzm.png') {
    article.source.favicon = 'https://www.pikpng.com/pngl/m/515-5153151_owl-vector-png.png';
  }

  // CONVERT DATES TO READABLE FORM
  const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
  let convertedDate = '';

  // CONVERT MONTH FROM NUMERIC TO TEXT
  convertedDate += months[parseInt(article.datePublished.slice(5, 7)) - 1];

  // CONVERT DAY AND YEAR FROM NUMERIC TO TEXT
  convertedDate += (article.datePublished.slice(8, 10) + ', ' + article.datePublished.slice(0, 4));

  // ASSIGN NEWLY CONVERTED TEXT DATE TO ARTICLE AS datePublished PROPERTY
  article.datePublished = convertedDate;

  // RETURN ARTICLE WITH datePublished PROPERTY CONVERTED TO READABLE FORMAT, AS WELL AS BAD THUMBNAILS ELIMINATED
  return article;
}

/** FETCH TRENDING NEWS USING WEB SEARCH API WITH PREDEFINED REQUEST OPTIONS **/
newsController.getTrendingNews = (req, res, next) => {
  optionsNewsSearch.url = 'https://google-news1.p.rapidapi.com/top-headlines';

  // USE DUMMY ARTICLES TO SPEED UP TEST RUN TIME
  res.locals.articles = dummyArticles.articles;
  return next();

  // REQUEST NEWS FROM GOOGLE NEWS API VIA AXIOS REQUEST
  // axios
  //   .request(optionsNewsSearch)
  //   .then(response => {
  //     res.locals.articles = response.data.articles;
  //     return next();
  //   })
  //   .catch((error) => {
  //     console.error(
  //       "Error with GET request to contextAPI on contextApiController.js",
  //       error
  //     );
  //   });
};


/** CREATE FIVE COLUMNS TO RESPECTIVELY SORT FETCHED ARTICLES BASED ON POLITICAL LEANING (LEVERAGING ALLSIDES) **/
newsController.sortNews = (req, res, next) => {
  const returnArray = [[], [], [], [], []];

  for (let i = 0; i < res.locals.articles.length; i++) {
    const article = res.locals.articles[i];
    switch (article.bias) {
      case 'left':
        returnArray[0].push((article));
        break;
      case 'left-center':
        returnArray[1].push((article));
        break;
      case 'center':
        returnArray[2].push((article));
        break;
      case 'right-center':
        returnArray[3].push((article));
        break;
      case 'right':
        returnArray[4].push((article));
        break;
      default:
        console.log(`Error: Unable to find bias with ${article.source.title}`);
        returnArray[2].push((article));
        break;
    }
  }

  res.locals.articles = returnArray;
  return next();
}

/** SEARCH NEWS ARTICLES USING GOOGLE NEWS & WEB SEARCH APIS; QUERY USING CLIENT INPUT **/
newsController.searchNews = (req, res, next) => {
  // SET SEARCH QUERY BASED ON CLIENT INPUT ON FRONTEND
  optionsNewsSearch.url = 'https://google-news1.p.rapidapi.com/search';
  optionsNewsSearch.params.q = req.body.query;

  axios
    .request(optionsNewsSearch)
    .then(response => {
      // THIS WILL REPLACE ANY QUERIED/DISPLAYED ARTICLES
      res.locals.articles = response.data.articles;

      for (let i = 0; i < res.locals.articles.length; i++) {
        const article = res.locals.articles[i];
        article.id = id++;
        article.favicon = article.source.favicon;
        article.bias = allSidesConverter[article.source.title];
      }
      return next();
    })
    .catch((error) => {
      console.error(
        "Error with GET request to contextAPI on contextApiController.js",
        error
      );
    });
};


module.exports = newsController;