function formatDate(string){

    const currentDate = new Date (string);
    let test = [currentDate.getDay()+1,currentDate.getMonth()+1,currentDate.getFullYear()];

    console.log(currentDate);
    console.log(test);
}

formatDate("2001-07-02");