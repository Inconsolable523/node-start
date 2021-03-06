var express=require('express');
var app=express();
var fortune=require('./lib/fortune');
var weatherData=require('./lib/weatherData');

// 随机渲染幸运饼干视图
// 已经换成模块化形式
// var fortunes=[
// "Conquer your fears or they will conquer you.", "Rivers need springs.",
// "Do not fear what you don't know.",
// "You will have a pleasant surprise.",
// "Whenever possible, keep it simple."
// ];

// 设置handlebars视图引擎
// 添加辅助方法，可以将视图添加到不同部分的布局里面
var handlebars = require('express3-handlebars')
.create({
	defaultLayout:'main',
	helpers:{
		section:function(name,options){
			if(!this._sections) this._sections={};
			this._sections[name]=options.fn(this);
			return null;
		}
	}
});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

// 中间件
app.use(express.static(__dirname+'/public'));
// 检测查询字符串test=1
app.use(function(req,res,next){
	res.locals.showTests=app.get('env')!=='production'&&req.query.test==='1';
	next();
});
app.use(function(req,res,next){
	if(!res.locals.partials) res.locals.partials={};
	res.locals.partials.weather=weatherData.getWeatherData();
	next();
});

app.get('/',function(req,res){
	// res.type('text/plain');
	// res.send('meadowlark travel');
	res.render('home');
})

app.get('/about',function(req,res){
	// res.type('text/plain');
	// res.send('about meadowlark travel');
	// var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:fortune.getFortune(),
						pageTestScript:'/qa/tests-about.js'});
})

// 测试section
app.get('/jquerytest',function(req,res){
	res.render('jquerytest');
})

// 动态渲染
app.get('/dynamic',function(req,res){
	res.render('dynamic');
})

app.get('/data/nursery-rhyme',function(req,res){
	res.json({
		animal:'ssss',
		bodyPart:'dfvdf',
		adjective:'vdsv',
		noun:'heck'
	})
})
app.get('/tours/hood-river',function(req,res){
res.render('tours/hood-river');
})

app.get('/tours/request-group-rate',function(req,res){
	res.render('tours/request-group-rate');
})

// 中间件
// 404页面
app.use(function(req,res){
	// res.type('text/plain');
	res.status(404);
	// res.send('404-Not Found'); 
	res.render('404');
})

// 500页面
app.use(function(err,req,res,next){
    console.log(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500-Server Error');
    res.render('500');
})

app.listen(app.get('port'),function(){
	console.log('Express started at http://localhost:'+app.get('port'));
})

