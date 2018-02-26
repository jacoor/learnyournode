let http = require("http");
let url = require("url");

let port = Number(process.argv[2]);

function json_time(date){
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

function unixtime(date){
    return {
        "unixtime": date.getTime()
    }
}

function listener(request, response){
    if (request.method !== 'GET') {
        return response.end('send me a GET\n');
    }

    let parsedUrl = url.parse(request.url, true);

    if (!parsedUrl.query.iso){
        return response.end("iso required");
    }

    let date = new Date(parsedUrl.query.iso);
    let result;

    if (parsedUrl.pathname == "/api/parsetime"){
        result = json_time(date);
    }else if(parsedUrl.pathname == "/api/unixtime"){
        result = unixtime(date);
    }else{
        response.writeHead(404);
        response.end();
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
}

let server = http.createServer(listener);
server.listen(port);
