const d = new Date();
console.log( d.getFullYear() + "-" + (d.getMonth()+  1 ).toString().padStart(2, "0") + "-" + d.getDate().toString().padStart(2, "0")+ " " + d.getHours().toString().padStart(2, "0")+":00:00");

document.querySelector("#submit").addEventListener("click", searchCity)

async function searchCity(e) {// su antriniu variantu atsiranda async
    e.preventDefault();
    let city = document.querySelector("#city");
    console.log(city.value);
    // callApi(city.value);//pirminis variantas
    const data = await callApi('adakavas');//antrinis variantas
    printToConsole(data);
    city.value = "";
}

async function callApi(city) {//antrinis variantas
    let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
        let response = await fetch(url);
        let data = await response.json();
        return data;
}

// function callApi(city) {//pirminis variantas
//     let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
//     // console.log(url);
//     fetch(url)
//     .then(response => { return response.json(); })
//     .then(data => { printToConsole(data) })
// }


function printToConsole(data) {
    console.log(data.forecastTimestamps[0].forecastTimeUtc);
}


