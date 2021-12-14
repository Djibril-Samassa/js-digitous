let month = "December"; 

switch(month){

    case "January", "February", "March":
        console.log("Winter");
        break;

    case "April", "May", "June":
        console.log("Spring");
        break;

    case "July", "August", "September":
        console.log("Summer");
        break;

    case "October", "November", "December":
        console.log("Automn");
        break;
        
    default:
        console.log("Not a month of year");
}