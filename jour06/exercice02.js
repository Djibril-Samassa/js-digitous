function calculateAge(string) {
    const birthday = new Date(string);
    const date = new Date();
    const age = date.getFullYear() - birthday.getFullYear();
    
    console.log(age);
}

calculateAge("2001-07-02");