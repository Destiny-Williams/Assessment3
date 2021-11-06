
var x = document.getElementById("color");
x.addEventListener("click", myFunction);

function myFunction() {
  alert ("My favorite color is YELLOW!")
}
// on-click action for the place button
var y = document.getElementById("place");
y.addEventListener("click", myFunctionPlace);

function myFunctionPlace() {
  alert ("My favorite place is HOME!")
}
// on-click action for the ritual button
var z = document.getElementById("ritual");
z.addEventListener("click", myFunctionRitual);

function myFunctionRitual() {
  alert ("My favorite ritual is EXERCISING!")
}