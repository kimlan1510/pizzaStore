$(document).ready(function(){
  $("#back_button1").click(function(){
    $("#size").show();
    $("#cheese").hide();
  });
  $("#back_button2").click(function(){
    $("#toppings").hide();
    $("#cheese").show();
  });
  $("form#size").submit(function(event){
    event.preventDefault();
    newPizza.Size = $("input:radio[name=size]:checked").val();
    $("#choice_made").append
    $("#cheese").show();
    $("#size").hide();
    console.log(newPizza.Size);
  });
  $("form#cheese").submit(function(event){
    event.preventDefault();
    newPizza.Cheese = $("input:radio[name=cheese]:checked").val();
    $("#toppings").show();
    $("#cheese").hide();
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
    for(i=0; i<toppings; i++){
      price += parseInt(toppings[i]);
    }
    price += parseFloat(size) * price;
  }
  else{
    for(i=0; i<toppings.length; i++){
      price += parseInt(toppings[i]);
    }
    price += (parseFloat(size) + 1)*price;
  }
  return price;
}

pizza.prototype.showsize = function(size){
  if(size === "2"){
    var sizeChoice = "10 inches diameter";
  }else if(size === "2.25"){
    var sizeChoice = "16 inches diameter";
  }else if(size === "2.5"){
    var sizeChoice = "24 inches diameter";
  }else if(size === "2.75"){
    var sizeChoice = "30 inches diameter";
  }else if(size === "3"){
    var sizeChoice = "48 inches diameter";
  }
  return sizeChoice;
}
pizza.prototype.showcheese = function(cheese){
  if(cheese === "1"){
    var cheeseChoice = "Yes"
  }else{
    var cheeseChoice = "No"
  }
  return cheeseChoice;
}
pizza.prototype.showToppings = function(toppings){
  var toppingArray = [];
  for(i=0; i<toppings.length; i++){
    if(toppings[i] === "1"){
      toppingArray.push("Classic Pepperoni");
    }else if(toppings[i] === "2"){
      toppingArray.push("Italian Sausage");
    }else if(toppings[i] === "3"){
      toppingArray.push("Bacon");
    }else if(toppings[i] === "4"){
      toppingArray.push("Slice and dice chicken");
    }else{
      toppingArray.push("Steak");
    }
  }
  return toppingArray;
}
