const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8000;

/** REQUIRE ROUTERS **/
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

/** HANDLE PARSING REQUEST BODY FOR JSON, URL AND COOKIES **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());

/** HANDLE REQUESTS FOR STATIC FILES **/
app.use('/build', express.static(path.join(__dirname, '../build')))

/** SERVE INDEX.HTML TO CLIENT UPON SERVER STARTUP (ANTIQUATED) **/
// app.get('/', (req, res) => {
//   const fileName = path.resolve(__dirname, '../client/index.html');
//   res.sendFile(fileName, (err) => {
//     if (err) console.log(err);
//     console.log('sent');
//   })
// })

/** TESTING CONNECTION BETWEEN FRONTEND/BACKEND **/
// server.get('/api', (req, res) => {
//   console.log('This is my get request on server.js')
//   res.send('Test')
// })

/** DEFINE ROUTE HANDLERS **/
app.use('/api', apiRouter);
app.use('/auth', authRouter);

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE **/
app.use((req, res) => {
  res.status(404).send('This is not the page you\'re looking for...')
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