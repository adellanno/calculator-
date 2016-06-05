$( document ).ready(function() {

  $(".numbers").click(function() {
    if (currentNumber === null) {
      currentNumber = parseInt(this.id, 10);
    } else if (currentNumber != null && nextNumber === null){
      nextNumber = parseInt(this.id, 10);
      stringToFunction();
    } else if (currentNumber != null && nextNumber != null) {
      currentNumber = result;
      nextNumber = parseInt(this.id, 10);
      stringToFunction();
    }
  });

  $(".operative").click(function() {
    currentOperative = this.id;
  });

  $(".result").html(result)

  $(".clear").click(function() {
    clear();
  })


});

var currentNumber = null; // maybe change to number 1 and number 2 or something
var nextNumber = null;
var currentOperative = null;
var result = 0;

function add(a, b) {
  result = a + b;
  $(".result").html(result)
}

function subtract(a, b) {
  result = a - b;
  $(".result").html(result)
}

function multiply(a, b) {
  result = a * b;
  $(".result").html(result)
}

function divide(a, b) {
  result = a / b;
  $(".result").html(result)
}

function clear() {
  currentNumber = null;
  currentOperative = null;
  nextNumber = null;
  result = 0;
  $(".result").html(result)
}

function stringToFunction() {
  var fn = window[currentOperative];
  fn(currentNumber, nextNumber)
}
