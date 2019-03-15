var express = require('express');

var app=express();
var port = process.env.PORT || 3001; 
var people=[
  {
      name: 'chaitanya ivvala'
  },
  {
      name: 'krishna chaitanya'
  },
  {
      name: 'sai krishna'
  }
];

app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.get('/',function(req,res){
  res.render('index', { serverPeople: people });
});
app.listen(port);
