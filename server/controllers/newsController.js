const fetch = require('node-fetch');
const axios = require('axios')

const db = require('../models/newsModel');
const biasData = require('../allSidesData/allsides');
const dummyData = require("../dummy-data-contextApi");

/** CLIENT REQUEST OPTIONS FOR QUERYING TRENDING NEWS FROM WEB SEARCH API **/
const optionsTrendingNews = {
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
}

/** CLIENT REQUEST OPTIONS FOR QUERYING GENERAL NEWS FROM WEB SEARCH API **/
const optionsNewsSearch = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  params: {
    q: '',
    pageNumber: '1',
    pageSize: '50',
    autoCorrect: 'true',
    withThumbnails: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null'
  },
  headers: {
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146'
  }
};

const newsController = {};

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

  /** ANTIQUATED: FILTER UNWANTED ASCII, HTML AND UNICODE CHARACTERS IN DESCRIPTION BODIES **/
  // //replace all unicode, special html, and ascii characters to be the appropriate character in the description. I believe I caught all of them?
  // article.description = article.description.replaceAll('&#x2018;', '\'');
  // article.description = article.description.replaceAll('&#x2019;', '\'');
  // article.description = article.description.replaceAll('&#39;', '\'');
  // article.description = article.description.replaceAll('&rsquo;', '\'');
  // article.description = article.description.replaceAll('&amp;quot;', '\"');
  // article.description = article.description.replaceAll('&quot;', '\"');
  // article.description = article.description.replaceAll('&amp;#039;', '\'');
  // article.description = article.description.replaceAll('&#039;', '\'');
  // article.description = article.description.replaceAll('&#x27;', '\'');
  // article.description = article.description.replaceAll('&#x22;', '\"');
  // article.description = article.description.replaceAll('&hellip;', '...');
  // article.description = article.description.replaceAll('&#8230;', '...');
  // article.description = article.description.replaceAll('&nbsp;', '');
  // article.description = article.description.replaceAll('&#x2013;', '-');
  // article.description = article.description.replaceAll('&amp;', '&');
  // article.description = article.description.replaceAll('&#8217;', '\'');
  // article.description = article.description.replaceAll('&#x2026;', '...');
  // article.description = article.description.replaceAll('&ndash;', '-');
  // //at first I thought if the description still includes [;] (which is an indication of a special character), I would empty the description, but so far my tests indicate I caught all of them.
  // //this if statement is used as a test, and can also be used to empty the description if needed
  // // if(article.description.includes(';')){
  // //   article.description = '';
  // //   console.log(article.description)
  // // }
  // //regex pattern to give everything before ' - '
  // const pattern =  /^(.*?)\ - /;
  // article.title = article.title.match(pattern)[1];
  // //return article

  // RETURN ARTICLE WITH datePublished PROPERTY CONVERTED TO READABLE FORMAT, AS WELL AS BAD THUMBNAILS ELIMINATED
  return article;
}

/** FETCH TRENDING NEWS USING WEB SEARCH API WITH PREDEFINED REQUEST OPTIONS **/
newsController.getTrendingNews = (req, res, next) => {
  // POPULATE RES.LOCALS.ARTICLES WITH THE ARRAY OF ARTICLES (OBJECTS)
  res.locals.articles = dummyData.value; // USING THE API, THIS WOULD BE response.data.value, THE ARRAY OF ARTICLES
  return next();

  /** AXIOS REQUEST COMMENTED OUT FOR dummyData USAGE **/
//   axios
//     .request(options)
//     .then(response => {
//       res.locals.articles = response.data.value; // <-- THIS IS THE ARRAY OF ARTICLES
//       return next(); // KEEP next() MIDDLEWARE WITHIN ASYNC FUNCTIONALITY
//     })
//     .catch((error) => {
//       console.error(
//         "Error with GET request to contextAPI on contextApiController.js",
//         error
//       );
//     });
};

/** ANTIQUATED: ASYNCHRONOUSLY FETCH DATA WITH INTERCHANGEABLE API REQUEST OPTIONS **/
//   const runFetch = async (allOptions) => {
//     try {
//       const results = await Promise.all(allOptions.map(el => axios.request(el)));
//       res.locals.articles = results.flatMap(el => el.data.articles);
//       return next();
//     }
//     catch (error) {
//       console.log(error);
//       // return next(error)
//     }
//   }
//   runFetch(optionsBreaking);
// };

/** ANTIQUATED: LEVERAGE GOOGLE API TO MAKE MULTIPLE FETCH REQUESTS FOR TOP HEADLINE U.S. NEWS **/
// newsController.breakingNews = (req, res, next) => {
//   let articlesArray = [];
//   fetch('https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50&media=true', options)
// 	.then(response => response.json())
// 	.then(response => {
//     for(let i = 0; i < response.articles.length; i++){
//       articlesArray.push(response.articles[i])
//     }
//     console.log('fetch call number 1', articlesArray.length)
//     fetch('https://google-news1.p.rapidapi.com/topic-headlines?topic=NATION&country=WORLD&lang=en&limit=50&media=true', options)
// 	  .then(response => response.json())
// 	  .then(response => {
//     for(let i = 0; i < response.articles.length; i++){
//       articlesArray.push(response.articles[i])
//     }
//     console.log('fetch call number 2', articlesArray.length)
//     fetch('https://google-news1.p.rapidapi.com/search?q=Democrat&country=US&lang=en&limit=50&when=30d&media=true', options)
//       .then(response => response.json())
//       .then(response => {
//         // console.log(response.articles);
//         for(let i = 0; i < response.articles.length; i++){
//           articlesArray.push(response.articles[i])
//       }
//       console.log('fetch call number 3', articlesArray.length)
//       fetch('https://google-news1.p.rapidapi.com/search?q=Republican&country=US&lang=en&limit=50&when=30d&media=true', options)
//           .then(response => response.json())
//           .then(response => {
//           for(let i = 0; i < response.articles.length; i++){
//             articlesArray.push(response.articles[i])
//           }
//           console.log('fetch call number 4', articlesArray.length)
//           res.locals.articles = articlesArray;
//           console.log('Line 98 - Number of articles --> ', res.locals.articles.length);
//           return next();
//           })
//       })
//     }
//   )
// 	.catch(err => next(err));
//   })
// };

/** CREATE FIVE COLUMNS TO RESPECTIVELY SORT FETCHED ARTICLES BASED ON POLITICAL LEANING (LEVERAGING ALLSIDES) **/
newsController.sortNews = (req, res, next) => {
  const returnArray = [[],[],[],[],[]];
  res.locals.articles.forEach((article, i, arr) => {
    
    let publication;
    article.provider.name.startsWith('The ') ?
      publication = article.provider.name.slice(4).toLowerCase() :
      publication = article.provider.name.toLowerCase();

    for (let i = 0; i <= biasData.length; i++) {
      if (i < biasData.length) {
    
        if (biasData[i].name.toLowerCase().includes(publication)) {

        switch (biasData[i].bias) {
          case 'left':
            // console.log('left -->', publication)
            returnArray[0].push(filterArticle(article));
            break;
          case 'left-center':
            // console.log('left-center -->', publication)  
            returnArray[1].push(filterArticle(article));
            break;
          case 'center':
            // console.log('center -->', publication)  
            returnArray[2].push(filterArticle(article));
            break;
          case 'right-center':
            // console.log('right-center -->', publication)  
            returnArray[3].push(filterArticle(article));
            break;
          case 'right':
          //  console.log('right -->', publication)
            returnArray[4].push(filterArticle(article));
            break;
        }
        break;
      }} 
      // else {
      //   console.log('NO BIAS FOUND -->', publication)
      // }
    }
  });
  // console.log(returnArray[0].length, returnArray[1].length, returnArray[2].length, returnArray[3].length, returnArray[4].length);
  // for(let i = 0; i < returnArray.length; i++){
    res.locals.articles = returnArray;
    console.log(res.locals.articles.map(el => `${el.length} articles`));
    // console.log('Left articles --> ', res.locals.articles[0]);
    return next();
  // }
}

newsController.searchNews = (req, res, next) => {
  // ADD LOGIC TO DIFFERENTIATE BETWEEN TRENDING NEWS SEARCH AND GENERAL NEWS
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

      console.log('results -->',results);
      res.locals.articles = results.flat();
      // res.locals.articles = results.data.articles;
      console.log(res.locals.articles);
      return next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };

  runSearch(searchArray);
};

module.exports = newsController;