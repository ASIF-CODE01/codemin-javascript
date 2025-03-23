

var voteEligible= function(age){
    if (age==0 || age<0 ||age>=130) {
        console.log(`invalid data ,Age:${age}`);
        
        
    } else {
        if (age>=18) {
            console.log(`AGE: ${age} eligible for the vote`);
            
        } else {
            console.log(`AGE: ${age} is not elible for vote`);
              
      
    
    if (age>=18) {
        console.log(`AGE: ${age} eligible for the vote`);
        
    } else {
        console.log(`AGE: ${age} is not elible for vote`);
          
    }
}
   
    }
}
voteEligible(18);
voteEligible(140);
