const { get } = require("prompt");
const prompt = require ("prompt");

prompt.start();

function checkProfile() {

    prompt.get(

        {name:"mail", description:"Entrez votre adresse mail"},

        function(err, res){
            const email = res.mail;
            console.log(email);
        })
    }

checkProfile()