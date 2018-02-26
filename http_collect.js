http = require("http");

url = process.argv[2];

http_callback = function(response){
    response.setEncoding("utf8");
    var datastream = []
    response.on('data', function(data){
        datastream.push(data);
    });
    response.on('error', console.error);
    response.on("end", function(){
        var str = datastream.join("");
        console.log(str.length);
        console.log(str);
    });
};

http.get(url, http_callback).on("error", console.error);


// // official solution, not using end
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })