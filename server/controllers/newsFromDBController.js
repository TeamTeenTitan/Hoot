const NewsData = require('../models/mongoNewsModel');

// @desc Get news
// @route GET /hootDB
// @access public
const getNewsFromDB = async(req, res) => {
  try {
    const news = await NewsData.find()
    res.status(200).json(news)
  } catch (error) {
    console.log(error, 'Error in newsFromDBController - getNewsFromDB')
  }
};

module.exports = {
  getNewsFromDB,
};