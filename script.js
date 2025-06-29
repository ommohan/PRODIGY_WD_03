------<Javascript Code>-------

function ucFirst(str) {

    if (!str) return str;



    return str[0].toUpperCase() + str.slice(1);

}



function getWeather(city = 'London') {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=320b5ed7aee20b24e7e3f5c5a7bb919a`).then(function(resp) { return resp.json() })

        .then(function(data) {

            console.log(data);

            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&#176;';

            document.querySelector('.city').innerHTML = data.name;

            document.querySelector('.icon-img').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

            document.querySelector('.description').innerHTML = ucFirst(data.weather[0]['description']);

            document.querySelector('.feels_like').innerHTML = 'Feels like: ' + Math.round(data.main.feels_like - 273) + '°';

            document.querySelector('.humidity').innerHTML = 'Humidity: ' + data.main.humidity;

            document.querySelector('.pressure').innerHTML = 'Pressure: ' + data.main.pressure;

            document.querySelector('.wind').innerHTML = 'Wind: ' + data.wind.speed;

        }).catch(function() {

            console.log('error')

        });

}



function f1() {

    let city = document.getElementById('city').value;

    getWeather(city)

    console.log(city)

}
