var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(url == '/'){
      url = '/views/mainpage.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(80);