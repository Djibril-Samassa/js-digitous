var fs = require("fs");

fs.readFile("jour07.txt", function (err, data){
    if(err){
        console.error("error");
        return;
    }

    console.log("Lecture en différe : " + data.toString())
});