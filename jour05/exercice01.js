
function calculate(nb1, string, nb2) {

    nb1 = parseInt(process.argv[2]);
    nb2 = parseInt(process.argv[4])

    if(process.argv[3] == "+"){
        console.log(nb1 + nb2);
    }

    else if(process.argv[3] == "-"){
        console.log(nb1 - nb2);
    }

    else if( process.argv[3] == "*"){
        console.log(nb1 * nb2);
    }

    else if(process.argv[3] == "/"){
        console.log(nb1 / nb2);
    }



}
calculate();
