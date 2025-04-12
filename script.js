function checkWeather() {
    const location = document.getElementById('location').value;
    const resultDiv = document.getElementById('result');
    
    if (!location) {
        resultDiv.textContent = "Please enter a location";
        return;
    }
    
    resultDiv.innerHTML = `Analysing weather for <strong>${location}</strong> <span class="loading"></span>`;
    

    setTimeout(() => {
        resultDiv.innerHTML = `Weather analysis complete for <strong>${location}</strong>`;
        

        setTimeout(() => {
            resultDiv.innerHTML = "Just look out the window.";
        }, 1500);
    }, 3000);
}


document.getElementById('location').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkWeather();
    }
});