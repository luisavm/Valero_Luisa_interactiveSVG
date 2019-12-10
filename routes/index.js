var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require("../utils/sql");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('on main route');
//   res.sendFile((path.join(__dirname, "../views/index.html")));
let query = "SELECT * FROM tbl_elephants";

sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err); }

    console.log(result); // should see objects wrapped in an array

    // render the home view with dynamic data
    res.render('home', { data: result });
})
});

router.get('/', function(req, res, next) {
  //   res.sendFile((path.join(__dirname, "../views/index.html")));
  let query = "SELECT * FROM tbl_killing";
  
  sql.query(query, (err, result) => {
      if (err) { throw err; console.log(err); }
  
      console.log(result); // should see objects wrapped in an array
  
      // render the home view with dynamic data
      res.render('home', { data: result });
  })
  });

router.get('/svgdata/elephant1', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_elephants WHERE ID = "1"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

  router.get('/svgdata/elephant2', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_elephants WHERE ID = "2"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

  router.get('/svgdata/killing1', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_killing WHERE ID = "1"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

  router.get('/svgdata/killing2', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_killing WHERE ID = "2"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

  router.get('/svgdata/killing3', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_killing WHERE ID = "3"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

  router.get('/svgdata/killing4', function(req, res, next) {
    
  let query = `SELECT * FROM tbl_killing WHERE ID = "4"`;
  
  sql.query(query, (err, result) => {
            if (err) { console.log(err); } 
    
            console.log(result); 
    
            res.json(result[0]);
        })
  });

// router.get("/svgdata/:target", (req, res) => {
//     //here is where we set up the quiery
//     let query = `SELECT * FROM stats WHERE id="${req.params.target}"`;

//     sql.query(query, (err, result) => {
//         if (err) { console.log(err); } //something broke!

//         console.log(result); //this should be the database row

//         res.json(result[0]); // send that row back to the calling function
//     })
// })

module.exports = router;
