function checkPal (string){

    let tab1 = string.split('');
    let tab2 = string.split('');
    tab2 = tab2.reverse();
    let verif = 0;

    for ( let i = 0; i < tab1.length; i++){

        if(tab1[i] == tab2[i]){
            verif += 1;
        }
    }

    if(verif == tab1.length){
        console.log("Palindrome");
    }
    else{
        console.log("Nope");
    }
}

checkPal("kayak");