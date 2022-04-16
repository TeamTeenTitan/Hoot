const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8000;

/** REQUIRE ROUTERS **/
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

/** HANDLE PARSING REQUEST BODY FOR JSON, URL AND COOKIES **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/** HANDLE REQUESTS FOR STATIC FILES **/
app.use('/build', express.static(path.join(__dirname, '../build')));

/** DEFINE ROUTE HANDLERS **/
app.use('/api', apiRouter);
app.use('/auth', authRouter);

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE **/
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

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