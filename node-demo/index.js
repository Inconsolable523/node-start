// 通过生成外部模块启动一个服务
var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["./upload"]=requestHandlers.upload;

server.start(router.route,handle);