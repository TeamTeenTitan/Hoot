const express = require("express");
const newsController = require("../controllers/newsController");
const contextApiController = require("../controllers/contextApiController");


const router = express.Router();

// fetch top breaking news, order them, send back
router.get("/", contextApiController.getTrendingNews, (req, res, next) => {
  console.log(res.locals.articles);
  res.status(200).json(res.locals);
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
