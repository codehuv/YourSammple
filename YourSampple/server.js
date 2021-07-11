var crawling = require('./crawler-node/naver')
var express = require('express');
var app = express();

const fs = require('fs');
const path = require('path');
const HTTPS = require('https');
const domain = "www.yoursampple.tk"
const sslport = 23023;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('mainpage')
});
app.get('/recommended', function(req,res){
	var title = [
		{ title: crawling.result[0] },
		{ title: crawling.result[1] },
		{ title: crawling.result[2] },
		{ title: crawling.result[3] },
		{ title: crawling.result[4] },
		{ title: crawling.result[5] },
		{ title: crawling.result[6] },
		{ title: crawling.result[7] },
		{ title: crawling.result[8] },
		{ title: crawling.result[9] }
	];
	res.render('index', { title: title})
});
app.get('/samsung', function(req,res){
	res.render('samsung')
});
app.get('/samsung-phone', function(req,res){
	res.render('samsung-phone')
});
app.get('/samsung-tablet', function(req,res){
	res.render('samsung-tablet')
});
app.get('/samsung-watch', function(req,res){
	res.render('samsung-watch')
});
app.get('/apple', function(req,res){
	res.render('apple')
});
app.get('/apple-phone', function(req,res){
	res.render('apple-phone')
});
app.get('/apple-tablet', function(req,res){
	res.render('apple-tablet')
});
app.get('/apple-watch', function(req,res){
	res.render('apple-watch')
});
app.get('/bill', function(req,res){
	res.render('bill')
});
// var server = app.listen(23023);
try {
	const option = {
	  ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
	  key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
	  cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
	};
  
	HTTPS.createServer(option, app).listen(sslport, () => {
	  console.log(`[HTTPS] Server is started on port ${sslport}`);
	});
  } catch (error) {
	console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
	console.log(error);
  }
  