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


//Form function to the send name to the API Server
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    fetch('http://localhost:3000/api/customGreeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverResponse').innerHTML = data.greeting;
    })

})