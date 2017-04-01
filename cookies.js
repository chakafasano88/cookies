var chocolateBtn = document.getElementById("chocolatebtn");
var lemonBtn = document.getElementById("lemonbtn");
var sugarBtn = document.getElementById("sugarbtn");
var sugar = 0;
var lemon = 0;
var chocolate = 0;

sugarBtn.addEventListener("click",function(){
  event.preventDefault();
  sugar = sugar +1
  document.getElementById("sugar").value = sugar;
  Cookies.set("Sugar", sugar);
});

lemonBtn.addEventListener("click",function(){
  lemon = lemon +1
  document.getElementById("lemon").value = lemon;
  Cookies.set("Lemon", lemon);
});

chocolateBtn.addEventListener("click",function(){
  chocolate = chocolate +1
  document.getElementById("chocolate").value = chocolate;
  Cookies.set("Chocolate", chocolate);
});
