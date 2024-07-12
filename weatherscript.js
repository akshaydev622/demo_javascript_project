const apiKey = `c3700d3c1e18f9bbe54177cd36ebcd4e`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const Weather = document.querySelector("#weather");


// const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city)=> {
    Weather.innerHTML = "<h1>Loading..</h1>";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const newurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    showWeather(data);

}
const showWeather = (data)=>{
    if(data.cod == "404"){
        Weather.innerHTML = "<h2> City Not Found</h2>";
        return;
    }
    Weather.innerHTML = `
            <div class="img">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp}<span><sup> 0</sup>C</span> </h2>
                <h2>${data.weather[0].main}</h2>
            </div>
            `;

}
form.addEventListener(
    "submit", function(event){
        getWeather(search.value);
        event.preventDefault();
    }

)