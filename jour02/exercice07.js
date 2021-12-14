let password = "azerty";
const nbOfLetters = password.split("");

if (nbOfLetters.length > 5 ){
    console.log("The password is secure");
}
else{
    console.log("Mot de passe pas assez long");
}