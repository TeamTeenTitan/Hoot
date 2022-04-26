const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')
const PORT = 8000;

/** REQUIRE ROUTERS **/
const apiRouter = require('./routes/apiRouter');
const authRouter = require('./routes/authRouter');
const dbRouter = require('./routes/dbRouter');

/** REFACTOR: CONNECT MONGO DB **/
// connectDB()

/** HANDLE PARSING REQUEST BODY FOR JSON, URL AND COOKIES **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/** HANDLE REQUESTS FOR STATIC FILES **/
app.use('/build', express.static(path.join(__dirname, '../build')))

/** DEFINE ROUTE HANDLERS **/
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/hootDB', dbRouter);

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE **/
app.use((req, res) => {
  res.status(404);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
});

/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER **/
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
      
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

/** START THE SERVER AND LISTEN FOR CLIENT REQUESTS **/
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  

module.exports = app;