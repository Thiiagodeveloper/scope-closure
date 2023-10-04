//##VARIABLES

var a; // declarando
var b = "b"; // declaramos && Asiganamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

//GLOBAL SCOPE
var fruit = "Apple"; // global

function besFruit() {
  console.log(fruit);
}
besFruit();

function countries() {
  country = "Colombia"; // Global
  console.log(country);
}

countries();
console.log(country);
