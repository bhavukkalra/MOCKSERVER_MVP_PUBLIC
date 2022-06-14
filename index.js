const express = require('express');
const port = process.env.PORT || 9000;
const app = express();
const path = require('path');

const db = require('./firebase.js')
const routes = require('./routes')
const handle = require('./handlers')


app.use(express.static(path.join(__dirname, 'client/dist')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function (req, res) {
  res.send('hello world')
});




// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.use('/api', routes);

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, () => {
  console.log(`Example node app listening at http://localhost:${port}`)
})