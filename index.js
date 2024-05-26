
function convertTemperature (){
  var tempInput = document.getElementById("temperatureInput").value;
  var temp = parseFloat(tempInput);
  var result = document.getElementById("result");


if (isNaN(temp)) {
  result.textContent = "Please Enter a Valid Number!";
  result.style.color = "red";

} else if (temp < 0) {
  result.textContent = "Its's freezing cold!"
  result.style.color = "blue";

} else if (temp >= 0 && temp <= 30) {
  result.textContent = "The temperature is moderate.";
  result.style.color = "green";
}
else {
  result.textContent = "It is very hot!"
  result.style.color = "orange";
}

}