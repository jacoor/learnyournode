var filter_files = require("./modules/filter_files");


dir_path = process.argv[2]
file_extension = process.argv[3]

print_callback = function(err, data){
    data.forEach(function(elem){
        console.log(elem);
    });
}

filter_files(dir_path, file_extension, print_callback);