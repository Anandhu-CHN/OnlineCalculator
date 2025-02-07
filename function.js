alert("Welcome to a Calculator Program ");


const display = document.getElementById("txt");

//Creating Display Function 

function appendtoDisplay(input){
    display.value += input; 
}

//Clear Display Function 

function cleardisplay(){
    display.value = "";
}

//Calculate Function 

function calculate(){
    display.value = eval(display.value);
}