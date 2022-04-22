const express = require("express");
const newsController = require("../controllers/newsController");
const contextApiController = require("../controllers/contextApiController");


const router = express.Router();

/** FETCH TRENDING NEWS, SORT THE ARTICLES, SEND BACK TO CLIENT **/
router.get("/",
  newsController.getTrendingNews,
  newsController.getArticleBody,
  // newsController.sortNews,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

/** FETCH NEWS BASED ON CLIENT SEARCH CRITERIA, THEN SORT AND SEND TO CLIENT **/
router.post('/search',
  // newsController.searchNews,
  // newsController.sortNews,
  (req, res) => {
    res.status(200).json(res.locals.articles);
  }
);
module.exports = router;
