var express = require('express')
var cors = require('cors')
var app = express()

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb1'
});

app.use(cors())
app.use(express.json())


app.get('/number1', function (req, res, next) {
    connection.query(
        'SELECT * FROM `number1` ',
        function(err, results, fields) {
            res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );

})
app.post('/number1', function (req, res, next) {
    res.json(res.body)
})
app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})