function calc(){
var numOne = document.querySelector("#numOne").value;
var numTwo = document.querySelector("#numTwo").value;
var oPeration = document.querySelector("#oPeration").value;
var answer;
if (oPeration == "minus"){
    answer = Number(numOne) - Number(numTwo)
}
else if (oPeration ==  "multiply") {
    answer = Number(numOne) * Number(numTwo)
} 
else if (oPeration == "divide") {
    answer = Number(numOne) / Number(numTwo)
}
else if (oPeration == "addition") {
    answer = Number(numOne) + Number(numTwo)
}

document.querySelector("#answer").value = answer


}



    





 
  

     
  
    



