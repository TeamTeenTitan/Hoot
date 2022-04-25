const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
// please note, that my res.locals sources likely need to be edited for precision.

// ordered by google api request first the extractor. Can be changed on request. 

// Google 
  
  // This may not be possible, and thats ok. article link is unique  
  // article_id: { type: Number },
  
  // if there is no unique id, this will work as a way to filer out articles that have already made it into our database. 
  // res.locals.link = response.data.link
  link: { type: String },

  // res.locals.sourceName = response.data.source.title
  source: { type: String },

  // res.locals.url = response.data.source.url
  sourceURL: { type: String },

  // res.locals.favicon = response.data.source.favicon
  favicon: { type: String },

  // res.locals.description = response.data.description
  // description: { type: String },

// Extractor
  
  // res.locals.publishedDate = response.data.article.published
  published_date: { type: Date },

  // res.locals.title = response.data.article.title
  title: { type: String },
  
  //classifying as a string may cause rendering issues. 
  // res.locals.body = response.data.article.text
  body: { type: String },
  
  // This one will be trickier to figure out because I will have to have to have an editional schema... alternately, we could just post the first author and do some logic that will display 'plus 3 more' which is acceptable in academic writing. I am going to write it in the simpler way
  // res.locals.authors = response.data.article.authors[0]
  author: { type: String },
  
  //res.locals.metaDescription = response.data.article.meta_description
  description: { type: String },
 
  // We will likely need to create a bit of code that checks the two immages and sees if the source is ok, the first one that returns ok will just go to the database... alternately, the array of images can go to the database and it can be check upon being pulled. -- adding it as an array would mean creating a second schema that would go in this. Therefore I think the first image that works is the best solution.
  // it also gives us the top image and meta image and we can just store both of those. 
  // res.locals.images = response.data.article.images
  thumbnail: { type: String },

  // this will come from a third source. 
  bias: { type: String },
},
  // this will record the time it is added to our data base, and will eventually make it so that we can run first in first out logic. 
  { timeStamps: true }
);

module.exports = mongoose.model('NewsData', newsSchema);


// We need to import this into the database
// the way this would sort of look like going into the database is something like this:
  // bear in mind that it will need to be reworked a lot for our use case.

const setNewsData = async (req, res) => {
  try {
    const newsData = await NewsData.create({
      // coming from google
      article_id: res.data.id, // this is an unknown
      link: res.data.link,
      source: res.data.source.title,
      favicon: res.data.source.favicon,
      description: res.data.description,
      //coming from extractor, probably will have to add to it somehow... or it is possible we can do all of this after it has been run through both.
      published_date: res.data.article.published,
      title: res.data.article.title,
      body: res.data.article.text,
      authors: res.data.article.authors[0], // this will require additional logic
      // coming from another source
      bias: res.data.article.bias
    });
  } catch (error) {
    console.log(error)
  }
};