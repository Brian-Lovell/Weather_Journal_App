let baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "f14302284edc0516459d70333b5c6f2d";


document.getElementById("submit").addEventListener('click', submitZipCode);

function submitZipCode(e){
    const newZipCode = document.getElementById('zipcode').value;
    getWeather(baseURL,newZipCode,apiKey)
}

const getWeather = async (baseURL, zipcode, key) => {

    const res = await fetch(baseURL+zipcode+key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
    }
}