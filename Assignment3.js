const inputField1 = Number(document.getElementById("C2F"));
const inputField2 = Number(document.getElementById("F2C"));
const button1 = document.getElementById(fahrenheitbutton);
const button2 = document.getElementById(celsiusbutton);
 

button1, button2.addEventListener("click", function)
temperatureConversion(){
    if(button1){
        let results1 = (inputField1 - 32) * 5/9; 
        document.getElementById("results1");

    }else if(button2){
        let results2 = (inputField2 * 9/5) + 32;
        document.getElementById("results2");
    }

}