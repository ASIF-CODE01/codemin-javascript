function fetchData(){

}
function main(){
    fetchData();
}
main();

console.log("==== START of the Program =====");

async function fetchData(){

    return new Promise((resolve, reject)=>{

        setTimeout(() => {

            // resolve("Successfully fetched the data...");

            reject("Failed to fetch the data.....");

        }, 5000);

    });

}

async function main(){

    try {

        const promiseResolve = await fetchData();

        console.log(promiseResolve);

    } catch (error) {

        console.log(`----- Inside catch block ---------`);

        console.log(error);

    }

    console.log("===== main END ======"); 

}

main();

console.log("==== END of the Program =====");