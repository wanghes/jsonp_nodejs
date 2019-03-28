var express = require('express');

var app = express();

app.get('/test', function(req, res){
	var result = '[{"word":"伊巴卡禁赛三场"},{"word":"狗狗"}]';
	var callback = req.query.callback;
  	res.send(callback + '(' +  result +')');
});

app.get('/test2', function(req, res){
	var result = '[{"word":"伊巴卡禁赛三场"},{"word":"狗狗"}]';
	var callback = req.query.callback;
  	res.send(callback + '(' +  result +')');
});

app.get('/test3', function(req, res){
	var result = '[{"word":"伊巴卡禁赛三场"},{"word":"狗狗"}]';
	var callback = req.query.callback;
  	res.send(callback + '(' +  result +')');
});

app.get('/test4', function(req, res){
	var result = '[{"word":"伊巴卡禁赛三场"},{"word":"狗狗"}]';
	var callback = req.query.theFunction; // 指定参数名
  	res.send(callback + '(' +  result +')');
});


//客户端以post方式请求
app.get('/test5', function(req, res){
	var result = '[{"word":"伊巴卡禁赛三场"},{"word":"狗狗"}]';
	var callback = req.query.callback; // 指定参数名
  	res.send(callback + '(' +  result +')');
});


app.listen(3000);