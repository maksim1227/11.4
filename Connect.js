const mysql = require('mysql2');


const connection = mysql.createConnection({

   host: '127.0.0.1',

   user: 'root',

   password: '',

   database: 'Studenti'

});


connection.connect(err => {

   if (err) console.log(err);


   console.log('Connected!');

});


connection.end(err => {

   if (err) console.log(err);


   console.log('Disconnected!');

});