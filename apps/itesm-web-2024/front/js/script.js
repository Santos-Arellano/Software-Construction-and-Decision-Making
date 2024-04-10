document.getElementById('changeMessage').addEventListener('click', function() {
    document.getElementById('greeting').innerHTML = 'goodbye World!';
});

//var vs let

let counterValue = 0;

//incrementCounter
function incrementCounter() {
    counterValue++;
    document.getElementById("counterDisplay").innerText = "llevamos " + counterValue + "  en el counter"; 
}