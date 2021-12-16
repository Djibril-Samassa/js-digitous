function format(num){
    let horaire = {
        heures: Math.floor((num/60)/60),
        minutes: Math.floor((num/60%60)),
        secondes: Math.floor((num%60)%60),
    };

    console.log(horaire);
}

format(5300); 