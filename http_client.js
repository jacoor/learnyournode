http = require("http");

url = process.argv[2];

http_callback = function(response){
    response.setEncoding("utf8");
    response.on('data', console.log)
    response.on('error', console.error)
};

http.get(url, http_callback).on("error", console.error);