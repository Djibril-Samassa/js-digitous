let numbers = [];
let somme = 0 ;

for (let i = 0; i<50; i++){
    numbers.push(Math.round(Math.random() * (100 - 0)));
    console.log(numbers);
}

for(let i = 0; i<50; i++){
    somme += numbers[i];
}
console.log(somme);