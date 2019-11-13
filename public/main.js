let weatherData

const getWeather = async () => {
  const userInput = document.querySelector('.weather-input').value
  console.log('going out to api')
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    userInput +
    '&units=imperial&appid=de4ef1f1269489087794b38d35cbc46f'
  const response = await fetch(url)
  console.log('back from api')
  weatherData = await response.json()
  console.log(weatherData)
  displayData(weatherData)
}

const displayData = weatherData => {
  document.querySelector('.data').textContent = weatherData.main.temp
}
document.querySelector('.weathercheck').addEventListener('click', getWeather)
