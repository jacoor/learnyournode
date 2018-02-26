var fs = require("fs");
var path = require("path");

dir_path = process.argv[2]
file_extension = "." + process.argv[3]

callback = function(err, files){
    if (err) return console.log(err);

    files.forEach(function(file){
        log_file_name_callback(file, file_extension);
    });
}

log_file_name_callback = function(file, extension){
    if (path.extname(file) == file_extension){
        console.log(file);
    }
}

fs.readdir(dir_path, callback);