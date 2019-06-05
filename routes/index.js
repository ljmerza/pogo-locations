const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

/* GET home page. */
router.get('/', function(req, res, next) {
  let connection = mysql.createConnection({host, user, password, database});

  connection.connect(function (err) {
    if (err) {
      return res.render('index', { results: ['no connection'] });
    }

    let sql = `SELECT * FROM gyms`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        connection.destroy();
        return res.render('index', { results: ['no query'] });
      }

      results.sort((a, b) => (a.name > b.name) ? 1 : -1)
      res.render('index', { results });
      connection.destroy();

    });


  });
});

module.exports = router;
