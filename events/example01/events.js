/* descriptions : treatments of events
* fase (capturing) handlers : parents  >>> children
* fase (bubbing)   handlers : children >>> parents
*/

var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r1 = document.getElementById('r1');

/* Old code without good practices 

function soma() {
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
        if(isNaN){
            r1.textContent = '';
        } else {
            r1.textContent = resultado;
        } 
    }
    document.addEventListener("input",soma); 
*/

// refacture code - It's a good practices !!!

document.addEventListener("input", () => {
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    r1.textContent = isNaN(resultado) ? '' : resultado;
});
 