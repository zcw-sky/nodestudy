var http=require('http');
var url='http://www.imooc.com';
http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data;
	});

	res.on('end',function(data){
		console.log(html);
	});
}).on('error',function(){
	console.log('error...');
});
