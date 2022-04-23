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

// @desc Post news
// @route GET /hootDB
// @access public - Note: User will not be able to post to DB. This is for creating mock data and testing
const setNewsToDB = async(req, res) => {
  try {
    const news = await NewsData.create({
      link: req.body.link,
      sourceName: req.body.sourceName,
      sourceURL: req.body.sourceURL,
      favicon: req.body.favicon,
      publishedDate: req.body.publishedDate,
      title: req.body.title,
      body: req.body.body,
      authors: req.body.authors,
      description: req.body.metaDescription,
      images: req.body.images,
      bias: req.body.bias,
    })
    res.status(200).json(news)
  } catch (error) {
    console.log('Error in newsFromDBController - setNewsToDB', error)
  }
}

const deleteNews = async(req, res) => {
  const news = await NewsData.findByIdAndDelete(req.params.id)
  res.json({ news })
}

// app.delete('/task/delete/:id', async (req, res) => {
//   const result = await Task.findByIdAndDelete(req.params.id);
//   res.json({ result });
// });

module.exports = {
  getNewsFromDB,
  setNewsToDB,
  deleteNews,
};