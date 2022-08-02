// dispaly numbers/operators inside input box when we click on it
function display(num){
   result.value +=num
   console.log(result);
}

function clearAll(){
    result.value=""
}
function output(){
   result.value= eval(result.value)
}
// eval ()- evaluate operations
function removeLast() {
    result.value=result.value.slice(0,-1)
}
// slice(num1,num2)- removes letter from a string - use negative sign to remove letter from last