var http = require('http');
// createServer是http模块的提供的函数，这个函数会返回一个对象，
// listen就是这个对象的一个方法指定监听的端口号

//事件驱动

function start() {
    function onRequest(request, response) {
        console.log("request received")
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888)

    console.log("server has started");
}
exports.start = start;
