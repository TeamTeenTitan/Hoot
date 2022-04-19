const dummyData = require('../server/dummy-data-contextApi')

const article = dummyData.value[0]

// const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
// let textDate = '';

// CONVERT MONTH FROM NUMERIC TO TEXT
// textDate += months[parseInt(article.datePublished.slice(5, 7)) - 1];

// CONVERT DAY AND YEAR FROM NUMERIC TO TEXT
textDate += (article.datePublished.slice(8, 10) + ', ' + article.datePublished.slice(0, 4));

// ASSIGN NEWLY CONVERTED TEXT DATE TO ARTICLE AS datePublished PROPERTY
article.datePublished = textDate;

console.log(textDate);


/*
DAY: slice(8, 10)
MONTH: slice(5, 7)
YEAR: slice(0, 4)
TIME: slice(11, 16)
*/
