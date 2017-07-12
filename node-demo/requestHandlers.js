// var exec = require("child_process").exec;
var queryString=require("querystring");

function start(response, postData) {
  console.log("request handler 'start' was called");
  // exec执行一个shell脚本，"ls-lah"获取当前目录下的所有文件，将文件信息显示出来
  // exec("ls -lah", function (error, stdout, stderr) {
  //   response.writeHead(200, { "Content-Type": "text/plain" });
  //   response.write(stdout);
  //   response.end();
  // });

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' + '<input type="submit" value="Submit text" />' + '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}
function upload(response, postData) {
  console.log("request handler 'upload' was called");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("you have send " + queryString.parse(postData).text);
  response.end();

}

exports.start = start;
exports.upload = upload;