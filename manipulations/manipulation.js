var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r1 = document.getElementById('r1');

var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');

function soma() {

    console.log(n1)
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    r1.textContent = resultado;
    console.log(resultado)

}

function show(){

   var inputs = document.querySelectorAll('input');
   r2.textContent = inputs;
   var spans = document.querySelectorAll('span');
   r3.textContent = spans;

}