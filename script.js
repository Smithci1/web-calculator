function calc(){
var numOne = document.querySelector("#numOne").value;
var numTwo = document.querySelector("#numTwo").value;
var oPeration = document.querySelector("#oPeration").value;
var answer;

switch(oPeration === "minus"){
    case true:
    answer = Number(numOne) - Number(numTwo)
    break;
}switch(oPeration ==  "multiply"){
    case true:
    answer = Number(numOne) * Number(numTwo)
    break;
}switch(oPeration == "divide"){
    case true:
    answer = Number(numOne) / Number(numTwo)
    break;
}switch(oPeration == "addition"){
    case true:
    answer = Number(numOne) + Number(numTwo)
    break;
}


document.querySelector("#answer").value = answer


}



    





 
  

     
  
    



