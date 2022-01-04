function sortLetters (string){

    let tab1 =[];

    tab1 = string.split('');
    tab1.sort();
    
    console.log(tab1.join(''));
}

sortLetters ("konexio");
