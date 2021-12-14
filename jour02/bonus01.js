var min = 1;
var max = 6;
const random = Math.floor(Math.random() * (max - min + 1) + min);

if( random === 6){
    console.log("Yes, I win !!");
    console.log(random);
}
else{
    console.log("So close...");
    console.log(random);
}
