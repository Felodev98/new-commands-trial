// Array of weather conditions and their corresponding background colors
const weatherConditions = {
    Sunny: 'skyblue',
    Rainy: 'gray',
    Cloudy: 'lightgray',
    Snowy: 'white',
    Stormy: 'darkgray'
};

// Function to change the weather condition
function changeWeather() {
    // Get a random weather condition
    const conditions = Object.keys(weatherConditions);
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

    // Update the displayed weather condition
    document.getElementById('condition').innerText = randomCondition;

    // Change the background color based on the weather condition
    document.body.style.backgroundColor = weatherConditions[randomCondition];
}