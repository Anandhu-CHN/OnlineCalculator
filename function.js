alert("Welcome to a Calculator Program ");
const clickSound = document.getElementById('clickSound');
      

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
