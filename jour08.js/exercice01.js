const axios = require("axios");

let countriesNames = [];

axios
.get("https://restcountries.com/v3.1/all")
.then( function (res){
    countriesNames = res.data.map(function(res){
        return res.name.common;
    });
    console.log(countriesNames);
})
;
