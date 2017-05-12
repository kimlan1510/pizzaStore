$(document).ready(function(){

});


//pizza constructor
function pizza(size, cheese, toppings){
  this.Size = size;
  this.Cheese = cheese;
  this.Toppings = [];
}

pizza.prototype.pizzaPrice = function(size, cheese, toppings){
  var price;
  if(cheese === 0){
    price = 3*size + 3.5*toppings.length ;    
  }
  else{
    price =  3*size + 3.5*toppings.length + 1;
  }
}
