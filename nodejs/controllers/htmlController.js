var bodyParser=require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index', { serverPeople: people });
      });
      app.get('/people/:id',function(req,res){
          res.render('people',{ ID: req.params.id, Qstr: req.query.qstr });
      });
      app.post('/people/', urlencodedParser ,function(req,res){
          res.send('Thank You');
          console.log(req.body.firstname);
          console.log(req.body.lastname);
      });
      app.post('/peoplejson/', jsonParser ,function(req,res){
          res.send('Thank You');
          console.log(req.body.firstname);
          console.log(req.body.lastname);
      });
}