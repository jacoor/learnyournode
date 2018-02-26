var fs = require('fs');

file_path = process.argv[2]

readFileCallback = function(err, data){
    if (err){
        console.log(err)
    }else{
        lines = data.split("\n").length - 1;
        console.log(lines);
    }
}

lines = fs.readFile(file_path, "utf8", readFileCallback);