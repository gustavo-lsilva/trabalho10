function executar() {
    var number = parseInt(document.getElementById('input').value);
        
    for (let n = 0; n <= number; n++){
        if (n % 3 == 0) {
            document.getElementById("mult3").innerHTML += `
            <div class="mult3">
            <p>
            ${n}
            </p>
            </div>
            `;}
        else if (n % 5 == 0) {
            document.getElementById("mult5").innerHTML += `
            <div class="mult5">
            <p>
            ${n}
            </p>
            </div>
            `; }
        }
}
    

