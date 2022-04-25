const fetch = require('node-fetch');
const axios = require('axios');

const db = require('../models/newsModel');
const allSidesConverter = require('../../utils/allSidesConverter');
const dummyArticles = require('../../data/dummyData/dummyArticles');
const dummyExtraction = require('../../data/dummyData/dummyArtExtraction');

const newsController = {};

/** CLIENT REQUEST OPTIONS FOR QUERYING GENERAL NEWS FROM WEB SEARCH API **/
const optionsNewsSearch = {
  method: 'GET',
  url: '',
  params: {
    q: '',
    country: 'US',
    lang: 'en',
    limit: '30',
    when: '30d'},
  headers: {
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146'
  }
};

/** CLIENT REQUEST OPTIONS FOR EXTRACTING NEWS PAGES USING EXTRACT NEWS API **/
const optionsNewsExt = {
  method: 'GET',
  url: 'https://extract-news.p.rapidapi.com/v0/article',
  params: {
    url: '' // MAKE SEPARATE API CALLS FOR EACH ARTICLE FETCHED WITH GOOGLE NEWS API
  },
  headers: {
    'X-RapidAPI-Host': 'extract-news.p.rapidapi.com',
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

  // TODO: RUN ARTICLE THROUGH MIDDLEWARE ONLY WHEN CLICKED, THEN SERVE TO CLIENT
  optionsNewsSearch.url = 'https://google-news1.p.rapidapi.com/top-headlines'

  res.locals.articles = dummyArticles.articles;
  return next();

  // REQUEST GENERAL NEWS FROM THE API VIA AXIOS REQUEST
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

/** USE EXTRACT NEWS API TO GIVE EACH ARTICLE A BODY **/
newsController.getArticleContents = async (req, res, next) => {
  // TODO: ADD A LOADING ANIMATION WHILE DATA IS BEING FETCHED
  const updatedArticles = [];

  for (let i = 0; i < 30; i++) {
    const article = res.locals.articles[i];
    optionsNewsExt.params.url = article.link;
    console.log(`getArticleContents for loop iteration: ${article.title}...`)

    // THROTTLE AXIOS REQUESTS TO SEND SYNCHRONOUSLY
    await axios
      .request(optionsNewsExt)
      .then(response => {
        const extraction = response.data.article;
        article.body = extraction.text;
        extraction.authors !== [] ? article.author = extraction.authors[0] : article.author = 'author unknown';
        // article.author = extraction.authors[0] || 'author unknown';
        article.description = extraction.meta_description;
        article.thumbnail = extraction.meta_image;
        article.bias = allSidesConverter[article.source.title];
        article.favicon = extraction.meta_favicon;
        updatedArticles.push(article);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // RETURN UPDATED ARTICLES AFTER COMPLETION OF ITERATIONS
  res.locals.articles = updatedArticles;
  return next();
}

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
  // THIS IS A COUNTER TO LOG THE NUMBERS OF ARTICLES IN EACH ARRAY
  // console.log(`
  //   Left Articles: ${returnArray[0].length}
  //   Left-Center Articles: ${returnArray[1].length}
  //   Center Articles: ${returnArray[2].length}
  //   Center-Right Articles: ${returnArray[3].length}
  //   Right Articles: ${returnArray[4].length}
  // `);

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