module.exports=function(app){
    app.get('/api',function(req,res){

        res.json({firstname:'Chaitanya',lastname:'krishna'});
    });
}