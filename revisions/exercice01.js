function sortLetters (string){

    let tab1 =[];
    let tab2 =[];

    for( let i = 0; i < string.length ; i++){
        tab1.push(string.substring(i));
    }
    console.log(tab1);
}

sortLetters ("salam");
