const express = require('express');
const newsController = require('../controllers/newsController');
const testController = require('../controllers/testController');

const router = express.Router();

// fetch top breaking news, order them, send back
router.get('/', testController.getNews, (req, res, next) => {
  res.status(200).json(res.locals.articles)
  // console.log('This is my get request on server.js')
  // res.send('Test')
  // return next
});


// router.get('/',
//   newsController.breakingNews,
//   // newsController.sortNews,
//   (req, res) => {
//     res.status(200).json(res.locals.articles)
//   }
// );

// //fetch news based on search, order them, send back
// router.post('/search',
//   newsController.searchNews,
//   newsController.sortNews,
//   (req, res) => {
//     res.status(200).json(res.locals.articles)
//   }
// )

module.exports = router;