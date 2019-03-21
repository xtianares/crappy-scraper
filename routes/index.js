// making easy to add more individual routes by using an index.js for all routes
var fs = require('fs');

module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        let name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}
