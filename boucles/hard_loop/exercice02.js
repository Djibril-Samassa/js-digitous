let numbers = [];

for (let i = 0; i<50; i++){
    numbers.push(Math.round(Math.random() * (200 - 50)) + 50);
    console.log(numbers);
}

for(let i = 200; i > 0; i--){
    if(numbers.indexOf(i) !== -1){
        console.log(i);
    }
}