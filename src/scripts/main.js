document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-generator').addEventListener('submit', function(event) {
        event.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('result-number').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })
})