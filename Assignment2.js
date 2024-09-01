

function sum() {
    let num1 = document.getElementById("input1").value;
    let num2= document.getElementById("input2").value;
    let num3 = Number(num1) + Number(num2);
    document.getElementById("result").value = num3;
}

function subs() {
    let num1 = document.getElementById("input1").value;
    let num2= document.getElementById("input2").value;
    let num3 = Number(num1) - Number(num2);
    document.getElementById("result").value = num3;
}

function multipilication() {
    let num1 = document.getElementById("input1").value;
    let num2= document.getElementById("input2").value;
    let num3 = Number(num1) * Number(num2);
    document.getElementById("result").value = num3;
}

function division() {
    let num1 = document.getElementById("input1").value;
    let num2= document.getElementById("input2").value;
    let num3 = Number(num1) / Number(num2);
    document.getElementById("result").value = num3;
}