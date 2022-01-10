let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

const shortNames = longNames.map( function (obj){
    return {name : `${obj["firstName"]} ${obj["lastName"]}`}
})

console.log(longNames);
console.log(shortNames);
