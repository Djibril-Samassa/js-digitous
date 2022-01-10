const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

const soldOut = cakes.filter(function(obj){
    if(obj["flavor"] == "chocolate"){
        obj["status"] = "sold out !";
        return obj;
    }
});

console.log(cakes);
console.log(soldOut);