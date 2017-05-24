console.log('come on');
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holis1234',
  database : 'escuela_danza'
});

connection.connect();

connection.query('SELECT * from alumnos', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();