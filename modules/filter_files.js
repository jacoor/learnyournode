var path = require("path");
var fs = require("fs");

module.exports = function (directory_path, extension, callback) {
    extension = "." + extension;

    readdir_callback = function(err, files){
        if (err) return callback(err);

        files = files.filter(function(file){
            return path.extname(file) === extension;
        });
        return callback(null, files);
    }
    fs.readdir(directory_path, readdir_callback);
}
