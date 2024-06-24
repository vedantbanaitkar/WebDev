// window.addEventListener("keydown", (e) => {
//   alert(e.code);
// })

// setTimeout(() => {
//   window.location.href = "https://www.google.com"
// }, 3000);

// document.querySelector("#google").addEventListener("click", (e) => {
//   window.location.href = "https://www.google.com";
// });

// document.querySelector("#fb").addEventListener("click", (e) => {
//   window.location.href = "https://www.fb.com";
// });

// document.querySelector("#maps").addEventListener("click", (e) => {
//   window.location.href = "https://www.google.com/maps";
// });

const APIKey = "1e9c398347e6ef79f8f40e36c69f24e5";
let city = "Pune";

async function getWeatherData() {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error. status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching data!", error);
  }
}

async function showData() {
  try {
    let d = await getWeatherData();
    if (d) {
      let m = d["main"];
      let temp = m["temp"];
      let feelsLike = m["feels_like"];
      let tempMin = m["temp_min"];
      let tempMax = m["temp_max"];
      let humidity = m["humidity"];

      console.log(
        `Temperature : ${temp}\nFeels Like : ${feelsLike}\nTemperatur Min : ${tempMin}\nTemperature Max : ${tempMax}\nHumidity : ${humidity}\n`
      );
    } else {
      console.log("No data returned");
    }
  } catch (error) {
    console.error("Error showing the weather data:", error);
  }
}

// setInterval(() => {
//   showData();
  
// }, 500);

let bulb = document.querySelector(".bulb-container");

setInterval(() => {
  bulb.classList.toggle("bulb");
}, 1000);
