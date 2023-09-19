let num = Math.floor(Math.random(50)* 51);

let guss = prompt(`Please guss the random 0 - 50`);


while (guss != num){
   
    
    if (guss < num ){
        console.log(`the guess was to low`);
        
        guss = prompt(`guss the number again`);
        
        
    }else if (guss > num){
        console.log(`the guess was to high`);
        guss = prompt(`guss the number again`);
    
    }else {
        console.log('Your guss was correct :');
       
    }
};





