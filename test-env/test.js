// // const dummyData = require('../server/dummy-data-contextApi')
// //
// // const article = dummyData.value[0]
// //
// // // const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
// // // let textDate = '';
// //
// // // CONVERT MONTH FROM NUMERIC TO TEXT
// // // textDate += months[parseInt(article.datePublished.slice(5, 7)) - 1];
// //
// // // CONVERT DAY AND YEAR FROM NUMERIC TO TEXT
// // textDate += (article.datePublished.slice(8, 10) + ', ' + article.datePublished.slice(0, 4));
// //
// // // ASSIGN NEWLY CONVERTED TEXT DATE TO ARTICLE AS datePublished PROPERTY
// // article.datePublished = textDate;
// //
// // console.log(textDate);
// //
// //
// // /*
// // DAY: slice(8, 10)
// // MONTH: slice(5, 7)
// // YEAR: slice(0, 4)
// // TIME: slice(11, 16)
// // */
//
//
// const axios = require("axios");
//
// const options = {
//   method: 'GET',
//   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
//   params: {
//     q: 'ukraine',
//     pageNumber: '1',
//     pageSize: '50',
//     autoCorrect: 'true',
//     withThumbnails: 'true',
//     fromPublishedDate: 'null',
//     toPublishedDate: 'null'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'ecf66d69d6mshe72310107b57165p10bd22jsn5245b15bf146'
//   }
// };
//
// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

const responseData = {
  articles: [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5]
  ],
}

for (let i = 0; i < test.articles.length; i++) {
  console.log(test.articles[i]);
}