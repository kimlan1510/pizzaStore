$(document).ready(function(){
  $("form#size").submit(function(event){
    event.preventDefault();
    newPizza.Size = $("input:radio[name=size]:checked").val();
    console.log(newPizza.Size);
  });
  $("form#cheese").submit(function(event){
    event.preventDefault();
    newPizza.Cheese = $("input:radio[name=cheese]:checked").val();
    console.log(newPizza.Cheese);
  });
  $("form#toppings").submit(function(event){
    event.preventDefault();
    newPizza.Toppings = [];
    $(":checkbox:checked").each(function(i){
          newPizza.Toppings[i] = $(this).val();
    });
    console.log(newPizza.Toppings);
    var price = newPizza.pizzaPrice(newPizza.Size, newPizza.Cheese, newPizza.Toppings);
    $("#result").text("$" + price);
    console.log(price);
  });

});


//pizza constructor
function pizza(size, cheese, toppings){
  this.Size = size;
  this.Cheese = cheese;
  this.Toppings = toppings;
}
// pizza object
var newPizza = new pizza("size","cheese","toppings");

//method to calculate pizza price
pizza.prototype.pizzaPrice = function(size, cheese, toppings){
  var price = 0;
  if(cheese === 0){
    for(i=0; i<newPizza.Toppings.length; i++){
      price += parseInt(newPizza.Toppings[i]);
    }
    price += parseInt(size)*price;
  }
  else{
    for(i=0; i<newPizza.Toppings.length; i++){
      price += parseInt(newPizza.Toppings[i]);
    }
    price += (parseInt(size) + 1)*price;
  }
  return price;
}
