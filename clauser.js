function greet(name) {
    return function() {
        setTimeout(() => {
            console.log(`Hello, ${name}!`);
        }, 2000);
    };
}

const delayedGreet = greet("Asif");
delayedGreet(); // 2 sec baad "Hello, Asif!" print hoga


function greet2(name2){
    return function(){
        setTimeout(()=>{
            console.log(`MY COMBACK IS HERE ${name2}`);
            
        },5000);
    };
}
