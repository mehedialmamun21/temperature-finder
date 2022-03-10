const API_KEY = `f023ca1a74fba9cf88d44c0512d8418a`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name');
    const city = cityName.value;
    cityName.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lon={lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('each-temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}