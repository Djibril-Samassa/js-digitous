let somme = 0;

for (let i = 0; i<21; i++){
    let random = Math.round(Math.random() * (10 - 0));
    console.log(random);
    if(random >= 5){
        somme += random;
    }
}

console.log(somme);