
let startValue = prompt("What do you want your start temp. to be?");
let endValue = prompt("What do you want your end temp to be?");
let scale = prompt("Do you want to coonvert to C or F?");

function convertTemperatureRange() {
    for(let i=startValue; i < endValue; i++) {
        if(scale == "C"){
            let results = (i - 32) * 5/9;
            console.log(results + " C");
            

        }else if(scale == "F"){
            let results = (i * 9/5) + 32;
            console.log(results + " F");
        
        }
    }

}
convertTemperatureRange()   