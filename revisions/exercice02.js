function countEach (string){

    let allChar = string.split('');
    let numberOfx = 0 ;
    let numberOfo = 0 ;
    let equality ;

    for ( let i = 0; i < allChar.length; i++){
        if (allChar[i] == "x"){
            numberOfx += 1;
        }
        else if (allChar[i] == "o"){
            numberOfo += 1;
        }
    }

    if(numberOfo == numberOfx){
        equality = true;
    }
    else{
        equality = false;
    }

    console.log(equality);

}

countEach("xoxoxoxo")