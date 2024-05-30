const API_KEY = "a4c65653270c30c5a4fd929bfb23e186"; // https://openweathermap.org/current 에서 나의 API를 얻어 API_KEY에 저장함

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Error. Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
