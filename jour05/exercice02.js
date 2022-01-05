function multiply(int){

    if (process.argv[2] == undefined){
        console.log("error");
    }

    int = process.argv[2];
    for ( let i = 0; i <= 10; i++){
        console.log( int * i);
    }
}

multiply();

var multiply2 = require("./tables-utils");

multiply2(2,6);

