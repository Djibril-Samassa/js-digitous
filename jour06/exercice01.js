function formatDate(string){

    const currentDate = new Date (string);
    let formattedDate = [currentDate.getDate(),currentDate.getMonth()+1,currentDate.getFullYear()];

    console.log(currentDate);
    console.log(formattedDate.join("-"));
}

formatDate("1980-02-11");