const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '6197c5b39169e01185df9fd5bcc8ad74';

document.addEventListener('DOMContentLoaded', function () {
	weatherFn('Indore'); // Set Noida as the initial city
	
	// Click handler
	document.getElementById('city-input-btn').addEventListener('click', function () {
		let cityName = document.getElementById('city-input').value.trim();
		if (cityName) {
			weatherFn(cityName);
		} else {
			alert("Please enter a city name.");
		}
	});
	
	// Enter key support
	document.getElementById('city-input').addEventListener('keypress', function(e) {
		if (e.key === 'Enter') {
			document.getElementById('city-input-btn').click();
		}
	});
});

async function weatherFn(cName) {
	const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
		alert('Error fetching weather data. Please try again.');
	}
}

function weatherShowFn(data) {
	document.getElementById('city-name').textContent = data.name;
	
	// Format date without moment.js
	const now = new Date();
	const options = { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric', 
		hour: 'numeric', 
		minute: 'numeric', 
		second: 'numeric',
		hour12: true 
	};
	document.getElementById('date').textContent = now.toLocaleString('en-US', options);
	
	document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}°C`;
	document.getElementById('description').textContent = data.weather[0].description;
	document.getElementById('wind-speed').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
	
	// Fade in effect (replace jQuery fadeIn)
	const weatherInfo = document.getElementById('weather-info');
	weatherInfo.style.display = 'block';
	weatherInfo.style.opacity = '0';
	let opacity = 0;
	const fadeIn = setInterval(() => {
		if (opacity >= 1) {
			clearInterval(fadeIn);
		}
		weatherInfo.style.opacity = opacity;
		opacity += 0.1;
	}, 30);
}