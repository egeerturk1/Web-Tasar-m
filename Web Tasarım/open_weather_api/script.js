const URL = "https://api.openweathermap.org/data/2.5/"
const API_KEY = "fdfeac9c1c2b64a4f580cf86f8a66c69"

const setApp = (e) => {
    console.log(e);
    if (e.code == 'Enter')
        getResult(search.value);
}

const getResult = (city) => {
    let api = `${URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`;
    fetch(api)
        .then(weather => weather.json())
        .then(displayResult)
}

const displayResult = (data) => {
    const city = document.querySelector(".city");
    city.innerText = `${data.name} ${data.sys.country}`
    const temp = document.querySelector(".temp");
    temp.innerText = `${data.main.temp}°C`;
    const description = document.querySelector(".description");
    description.innerText = `${data.weather[0].main}`;
    const minmax = document.querySelector(".minmax");
    minmax.innerText = `${data.main.temp_min} °C / ${data.main.temp_max} °C`;
}

const search = document.querySelector("#search");
search.addEventListener("keypress", setApp);