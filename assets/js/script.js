let weather = {
    "apiKey": "aeaadd7bd3ef0726b64f6538463c7613", 
    fetchWeather: function (City) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city + 
            "&units=metric&appid=" +
            this.apiKey
        )
    }
}