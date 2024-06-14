const longitudeEL = document.getElementById('longitude')
const latitudeEL = document.getElementById('latitude')
const temparatureEL = document.getElementById('temperature')
const timeEL = document.getElementById('time')
const rainEL = document.getElementById('rain')
const isDayEL = document.getElementById('isDay')
const latitudeInput = document.getElementById('latitudeInput')
const longitudeInput = document.getElementById('longitudeInput')
const weatherBtn = document.getElementById('weatherbtn')


let time = ""
let temperature = ""
let windSpeed = ""

const getWeatherData = async function (latitude,longitude){
    let weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain`)
    let response = await weatherData.json()
    console.log(JSON.stringify(response))
    return response
}

async function revealEverything(){

    const response = await getWeatherData(latitudeInput.value,longitudeInput.value)
    console.log(response.longitude,response.latitude,response.current.time,response.current.temperature_2m,response.current.rain,response.current.is_day)
    longitudeEL.innerText = `longitude: ${response.longitude}`
    latitudeEL.innerText = `Latitude: ${response.latitude}`

}

weatherBtn.addEventListener('click',revealEverything)

document.body.style.backgroundImage = `url("arindam-saha-rSLIzC-dlB4-unsplash.jpg")`



      



    //   https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m