const fetch = require('node-fetch');
const axios = require('axios');


const biasData = require('../allSidesData/allsides');
const dummyArticles = require('../../test-env/dummyData/dummyArticles');
const dummyExtraction = require('../../test-env/dummyData/dummyArtExtraction');

const newsController = {};

/** CLIENT REQUEST OPTIONS FOR QUERYING GENERAL NEWS FROM WEB SEARCH API **/
const optionsNewsSearch = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/search',
  params: {
    q: 'putin',
    country: 'US',
    lang: 'en',
    limit: '3',
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
  // POPULATE RES.LOCALS.ARTICLES WITH THE ARRAY OF ARTICLES (OBJECTS)
  // res.locals.articles = dummyArticles; // USING THE API, THIS WOULD BE response.data.value, THE ARRAY OF ARTICLES
  // return next();

  /** AXIOS REQUEST COMMENTED OUT FOR dummyData USAGE **/
  // REQUEST GENERAL NEWS FROM THE API VIA AXIOS REQUEST
  axios
    .request(optionsNewsSearch)
    .then(response => {
      res.locals.articles = response.data.articles; // <-- THIS IS THE ARRAY OF ARTICLES
      return next(); // KEEP next() MIDDLEWARE WITHIN ASYNC FUNCTIONALITY
    })
    .catch((error) => {
      console.error(
        "Error with GET request to contextAPI on contextApiController.js",
        error
      );
    });
};

/** USE EXTRACT NEWS API TO GIVE EACH ARTICLE A BODY **/
newsController.getArticleBody = (req, res, next) => {
  for (let i = 0; i < 1; i++) {
    const article = res.locals.articles[i];
    optionsNewsExt.params.url = article.link;

    axios
      .request(optionsNewsExt)
      .then((response) => {
        const extraction = response.data.article;
        article.body = extraction.text;
        article.author = extraction.authors;
        article.description = extraction.meta_description;
        article.thumbnail = extraction.meta_image;
        console.log(article);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return next();

  // ENABLED: LEVERAGE THE DUMMY DATA TO FETCH AND ASSIGN THE ARTICLE'S BODY
  // article.body = dummyExtraction.article.text;
}

/** CREATE FIVE COLUMNS TO RESPECTIVELY SORT FETCHED ARTICLES BASED ON POLITICAL LEANING (LEVERAGING ALLSIDES) **/
newsController.sortNews = (req, res, next) => {
  const returnArray = [ [], [], [], [], [] ];

  for (let i = 0; i < res.locals.articles.length; i++) {
    const article = res.locals.articles[i];
    const publication = article.source.title;

    for (let i = 0; i < biasData.length; i++) {
      if (biasData[i].name === publication) {
        switch (biasData[i].bias) {
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
            console.log('Error: Unable to find bias');
            break;
        }
        break;
      }
    }
  }

  console.log(`
    Left Articles Length: ${returnArray[0].length},
    Left-Center Articles Length: ${returnArray[1].length},
    Center Articles Length: ${returnArray[2].length},
    Right-Center Articles Length: ${returnArray[3].length},
    Right Articles Length: ${returnArray[4].length}
  `);

  res.locals.articles = returnArray;
  return next();
}

/** SEARCH GENERAL NEWS USING THE WEB SEARCH API AND QUERYING USING CLIENT INPUT **/
newsController.searchNews = (req, res, next) => {
  // SET SEARCH QUERY BASED ON CLIENT INPUT ON FRONTEND
  optionsNewsSearch.q = req.body.query;

  // REQUEST GENERAL NEWS FROM THE API VIA AXIOS REQUEST
  axios
    .request(optionsNewsSearch)
    .then(response => {
      res.locals.articles = response.data.value; // <-- THIS IS THE ARRAY OF ARTICLES
      return next(); // KEEP next() MIDDLEWARE WITHIN ASYNC FUNCTIONALITY
    })
    .catch((error) => {
      console.error(
        "Error with GET request to contextAPI on contextApiController.js",
        error
      );
    });

  console.log(req.body.query);
  const searchArray = [0, 1, 2, 3].map((el, i) => {
    const searchOptions = {}
    Object.assign(searchOptions, defaultSearchOptions);
    Object.assign(searchOptions.params, { q: req.body.query, before: retrieveDate(i)})
    return searchOptions;
  })
  console.log(searchArray[0]);
  // const runSearch = async (optionsArray) => {
  //   try {
  //     const results = await Promise.all(optionsArray.map(el => axios.request(el)));
  //     // const results = await axios.request(optionsArray[0]);
  //     // console.log(results.data.articles);
  //     res.locals.articles = results.map(el => el.data.articles).flat();
  //     // res.locals.articles = results.data.articles;
  //     console.log(res.locals.articles);
  //     return next();
  //   } catch (error) {
  //     console.log(error);
  //     return next(error);
  //   }
  // };
  const runSearch = async (optionsArray) => {
    try {
      const results = [];

      for (let i = 0; i < optionsArray.length; i++) {
        let art = await axios.request(optionsArray[i]);
        // console.log(art.data.articles);
        results.push(art.data.articles);
      }

      res.locals.articles = results.flat();
      // res.locals.articles = results.data.articles;
      // console.log(res.locals.articles);
      return next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };

  runSearch(searchArray);
};


module.exports = newsController;