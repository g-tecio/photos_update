const express = require('express');
const bodyParser = require('body-parser')

const app = express();
// const routerapp = express.Router();


app.set('view engine','ejs')

let router = require('./app/routers/upload.router.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

// Create a Server
const server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})