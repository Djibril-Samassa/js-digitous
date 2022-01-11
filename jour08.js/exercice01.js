const axios = require("axios");

const countriesNames = [];

axios
.get("https://restcountries.com/v3.1/all")
.then( function getCountries(res){
    for( let i = 0; i<= res.data.length; i++){
        countriesNames.push(res.data[res].name.common);
    }
        console.log(countriesNames);
})
;
