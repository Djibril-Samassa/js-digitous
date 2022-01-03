let dice = null;
let count = 0;

while( dice != 6){
    dice = Math.round(Math.random() * (7 - 1));
    count += 1;
    console.log("tour" + count);
}