var http = require('http');
var url = require('url');
// createServer是http模块的提供的函数，这个函数会返回一个对象，
// listen就是这个对象的一个方法指定监听的端口号

//事件驱动

function start(route, handle) {
  function onRequest(request, response) {
    var postData = '';
    var pathname = url.parse(request.url).pathname;
    console.log("request for " + pathname + " has received");
    // 设置接收数据的编码格式
    request.setEncoding("utf8");
    // 收集接收到的数据块
    request.addListener('data', function (postDatachunk) {
      postData += postDatachunk;
      console.log('receive Post data chunk ' + postData);
    });
    request.addListener('end',function () {
      route(handle, pathname, response,postData);
    })
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.write("Hello World");
    // response.end();
  }

  http.createServer(onRequest).listen(8888)

  console.log("server has started");
}
exports.start = start;
