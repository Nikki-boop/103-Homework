
let scale = prompt("Do you want to convert from C or F?");
let temp = prompt("Put a temperature");

function temperatureConversion(){
    if(scale == "F"){
        
        let results = (temp - 32) * 5/9; 
        console.log(results);
        
        document.write(results)
    }else if(scale == "C"){
   
        let results = (temp * 9/5) + 32;
        console.log(results);
        document.write(results)
        

    }

}
temperatureConversion()