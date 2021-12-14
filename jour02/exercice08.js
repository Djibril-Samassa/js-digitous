let limit = 50;
let score = 64;
let password = "azerty";
const nbOfLetters = password.split("");

if (score >= limit && nbOfLetters.length >= 6){
    console.log("Everything is good");
}
else if (score >= limit || nbOfLetters.length >= 6){
    console.log("Something is good");
}
else{
    console.log("Nothing is good");
}