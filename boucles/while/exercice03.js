let usainBolt = 0;
let tysonGay = 0;

const limite = 100;

while(usainBolt<limite && tysonGay<limite){
    usainBolt += Math.round(Math.random() * (10 - 1));
    tysonGay += Math.round(Math.random() * (10 - 1));
}


if(usainBolt >= limite){
    console.log("U" + usainBolt);
    }
else if(tysonGay >= limite){
console.log("T" + tysonGay);
    }


