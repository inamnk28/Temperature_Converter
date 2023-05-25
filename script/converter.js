let celsius = document.getElementById("celsius");
let farenheit = document.getElementById("farenheit");

function convert() {
    if (celsius.value) {
        let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
        farenheit.value = parseFloat(output.toFixed(2));
    } else if (farenheit.value) {
        let output = ( parseFloat(farenheit.value) - 32) * 5/9;
        celsius.value = parseFloat(output.toFixed(2))
    }
}

function clearAll() {
    celsius.value = '';
    farenheit.value = '';
}