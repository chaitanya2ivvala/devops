var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html=fs.readFileSync(__dirname + '/index.html','utf8');
    var artist="SlimShady";
    html=html.replace('{artist}', artist);
    res.end(html);
}).listen(8080,'0.0.0.0');