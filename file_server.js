let http = require("http");
let fs = require("fs");

let port = Number(process.argv[2]);
let file_path = process.argv[3];

function listener(request, response){
    response.writeHead(200, { 'content-type': 'text/plain' });
    let file_stream = fs.createReadStream(file_path);
    file_stream.pipe(response);
}

let server = http.createServer(listener);
server.listen(port);