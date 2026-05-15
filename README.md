# 🌤️ Weather App

A clean and responsive weather application that displays real-time weather information for any city worldwide using the OpenWeatherMap API.


## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature display in Celsius
- 💨 Wind speed information
- 📅 Current date and time
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Responsive design
- ⌨️ Enter key support for quick searches
- 🎯 Default city (Indore) loads on startup

## Screenshot

<div align="center">
  <img src="./image/Screenshot (4).png" alt="Logo" width="200"/>
  
  <p>A beautiful weather app built with vanilla JavaScript</p>
</div>

---


## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Functionality
- **OpenWeatherMap API** - Weather data
- **Fetch API** - Asynchronous requests

## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)
- Basic knowledge of HTML, CSS, and JavaScript (for modifications)

## 🔧 Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/weather-app.git
```

2. **Navigate to the project directory**
```bash
   cd weather-app
```

3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
```

4. **Access the app**
   - Open your browser and go to `http://localhost:8000`

## 🔑 API Key Setup

This project uses OpenWeatherMap API. The current API key is for demonstration purposes only.

**To use your own API key:**

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the API key in `index.js`:
```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
```

