const fetch = require('node-fetch');
const axios = require('axios')

const db = require('../models/newsModel');
const biasData = require('../allSidesData/allsides');
const { search } = require('../server');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
		'X-RapidAPI-Key': '28c1914233msh9110de4ee73575cp1dca2cjsnfffcc805fe3d'
	}
};

const defaultSearchOptions = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/search',
  params: {
    q: '',
    country: 'US',
    lang: 'en',
    before: '',
    limit: '50',
    when: '30d',
    media: 'true'
  },
  headers: {
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    'X-RapidAPI-Key': '28c1914233msh9110de4ee73575cp1dca2cjsnfffcc805fe3d'
  }
};

const newsController = {};

function retrieveDate(i){
  // &before=2022-03-31&after=2022-04-01
  var date = new Date();
  var yesterday = new Date(date.getTime());
  yesterday.setDate(date.getDate() - i);
  yesterday = JSON.stringify(yesterday).slice(1,11);
  const returnString = `${yesterday}`;
  return returnString;
}

function filterArticle(article){
  // find bad thumbnails
  if(article.thumbnail === 'https://res.cloudinary.com/dyexzgvkb/image/upload/v1627049796/thumbnail_luxwgj.jpg'){
    article.thumbnail = '';
  }
  // find bad news source logos
  if(article.source.favicon === 'https://res.cloudinary.com/dyexzgvkb/image/upload/v1626528473/favicon_acrnzm.png'){
    article.source.favicon = '';
  }

  // convert dates to readable form
  const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
  let textDate = '';
  textDate += months[parseInt(article.published_date.slice(6, 8)) - 1];
  textDate += (article.published_date.slice(8, 10) + ', ' + article.published_date.slice(0, 4));
  article.published_date = textDate;

  //replace all unicode, special html, and ascii characters to be the appropriate character in the description. I believe I caught all of them?
  article.description = article.description.replaceAll('&#x2018;', '\'');
  article.description = article.description.replaceAll('&#x2019;', '\'');
  article.description = article.description.replaceAll('&#39;', '\'');
  article.description = article.description.replaceAll('&rsquo;', '\'');
  article.description = article.description.replaceAll('&amp;quot;', '\"');
  article.description = article.description.replaceAll('&quot;', '\"');
  article.description = article.description.replaceAll('&amp;#039;', '\'');
  article.description = article.description.replaceAll('&#039;', '\'');
  article.description = article.description.replaceAll('&#x27;', '\'');
  article.description = article.description.replaceAll('&#x22;', '\"');
  article.description = article.description.replaceAll('&hellip;', '...');
  article.description = article.description.replaceAll('&#8230;', '...');
  article.description = article.description.replaceAll('&nbsp;', '');
  article.description = article.description.replaceAll('&#x2013;', '-');
  article.description = article.description.replaceAll('&amp;', '&');
  article.description = article.description.replaceAll('&#8217;', '\'');
  article.description = article.description.replaceAll('&#x2026;', '...');
  article.description = article.description.replaceAll('&ndash;', '-');
  //at first I thought if the description still includes [;] (which is an indication of a special character), I would empty the description, but so far my tests indicate I caught all of them.
  //this if statement is used as a test, and can also be used to empty the description if needed
  // if(article.description.includes(';')){
  //   article.description = '';
  //   console.log(article.description)
  // }
  //regex pattern to give everything before ' - '
  const pattern =  /^(.*?)\ - /;
  article.title = article.title.match(pattern)[1];
  //return article
  return article;
}

newsController.breakingNews = (req, res, next) => {
  let articlesArray = [];
  fetch('https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50&media=true', options)
	.then(response => response.json())
	.then(response => {
    for(let i = 0; i < response.articles.length; i++){
      articlesArray.push(response.articles[i])
    }
    console.log('fetch call number 1', articlesArray.length)
    fetch('https://google-news1.p.rapidapi.com/topic-headlines?topic=NATION&country=WORLD&lang=en&limit=50&media=true', options)
	  .then(response => response.json())
	  .then(response => {
    for(let i = 0; i < response.articles.length; i++){
      articlesArray.push(response.articles[i])
    }
    console.log('fetch call number 2', articlesArray.length)
    fetch('https://google-news1.p.rapidapi.com/search?q=Democrat&country=US&lang=en&limit=50&when=30d&media=true', options)
      .then(response => response.json())
      .then(response => {
        // console.log(response.articles);
        for(let i = 0; i < response.articles.length; i++){
          articlesArray.push(response.articles[i])
      }
      console.log('fetch call number 3', articlesArray.length)
      fetch('https://google-news1.p.rapidapi.com/search?q=Republican&country=US&lang=en&limit=50&when=30d&media=true', options)
          .then(response => response.json())
          .then(response => {
          for(let i = 0; i < response.articles.length; i++){
            articlesArray.push(response.articles[i])
          }
          console.log('fetch call number 4', articlesArray.length)
          res.locals.articles = articlesArray;
          console.log('Line 98 - Number of articles --> ', res.locals.articles.length);
          return next();
          })
      })
    }
  )
	.catch(err => next(err));
  })
};

newsController.sortNews = (req, res, next) => {
  
  console.log('Line 110 - Number of articles --> ', res.locals.articles.length);

  const returnArray = [[],[],[],[],[]];
  res.locals.articles.forEach ((el, i, arr) => {
    
    let publication;
    el.source.title.startsWith('The ') ? 
      publication = el.source.title.slice(4).toLowerCase() : 
      publication = el.source.title.toLowerCase();

    for(let i = 0; i <= biasData.length; i++){
      if (i < biasData.length) {
    
        if(biasData[i].name.toLowerCase().includes(publication)) {

        switch(biasData[i].bias) {
          case 'left':
            // console.log('left -->', publication)
            returnArray[0].push(filterArticle(el));
            break;
          case 'left-center':
            // console.log('left-center -->', publication)  
            returnArray[1].push(filterArticle(el));
            break;
          case 'center':
            // console.log('center -->', publication)  
            returnArray[2].push(filterArticle(el));
            break;
          case 'right-center':
            // console.log('right-center -->', publication)  
            returnArray[3].push(filterArticle(el));
            break;
          case 'right':
          //  console.log('right -->', publication)
            returnArray[4].push(filterArticle(el));
            break;
        };
        break;
      }} 
      // else {
      //   console.log('NO BIAS FOUND -->', publication)
      // }
    };
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
  //req.body
  //search with req.body data
  //save those articles in res.locals.articles, go to next middleware which is sort
  // const searchOptions = {...defaultSearchOptions};
  // searchOptions.q = req.body;

  // console.log('request line 199 --> ',req);
  // console.log('req.body -->', req.body);

  const searchArray = [0, 1, 2, 3].map((el, i) => {
    const searchOptions = {}
    Object.assign(searchOptions, defaultSearchOptions);
    Object.assign(searchOptions.params, { q: req.body.query, before: retrieveDate(i)})
    return searchOptions;
  })  

  // searchArray[4] = new Promise((resolve, reject) => {
  //   res.locals.articles = articlesArray;
  //   console.log(res.locals.articles);
  // })

  let articlesArray = [];

  // const runSearch = async (searchArray) => {
  //   const results = await Promise.all(searchArray.map(el => axios.request(el)));
  //   articlesArray = results.map
  // }


  Promise.all(searchArray.map(el => {
    axios.request(el)
    .then((response) => {
      // console.log(response.data.articles);
      for(let i = 0; i < response.data.articles.length; i++){
        articlesArray.push(response.data.articles[i])
      }
      res.locals.articles = articlesArray;
    })
    .catch((error) => {
      return next(error);
    });
  }))
}

module.exports = newsController;

//db.query()