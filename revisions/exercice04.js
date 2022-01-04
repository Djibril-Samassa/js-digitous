function swap (string){
    for(let i = 0; i < string.length; i++){
        
        if( string.charAt(i) == string.charAt(i).toUpperCase()){
            console.log("Maj");
            (string.charAt(i)).toLowerCase();
        }
    }
    
    console.log(string);
}

swap("AAbb");