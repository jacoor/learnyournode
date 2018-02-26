let http = require("http");
let map = require('through2-map');

let port = Number(process.argv[2]);

function listener(request, response){
    if (request.method !== 'POST') {
        return response.end('send me a POST\n');
    }
    request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
    })).pipe(response);
}

let server = http.createServer(listener);
server.listen(port);