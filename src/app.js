function weatherCondition(response) {
  console.log(response);
  //let temperatureElement = document.querySelector("#temperature");

  // temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "0d4847b8ed5adf866001a54ef0a28029";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(weatherCondition);
