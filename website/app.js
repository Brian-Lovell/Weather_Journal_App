let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=f14302284edc0516459d70333b5c6f2d";



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    let newZipcode = document.getElementById('zip').value;
    let content = document.getElementById('feelings').value;
    console.log(content);
    getWeather(baseURL, newZipcode, apiKey)
    .then(function(data){
        // console.log(data)
    postData('/addWeather', {date:data.dt, temp:data.main.temp, content})

    updateUI()
    });
};

const getWeather = async ( baseURL, data, key)=>{
    // console.log(data);
    const res = await fetch(baseURL+data+key)

    try {
        const data = await res.json();
        console.log(data)
        return data
    } catch(error) {
    console.log("error",error);
    }
};

const postData = async ( url = '', data = {},)=>{
    console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date: data.date,
            temp: data.temp,
            content: data.content,
        }),
    });

    try {
        const newData = await res.json();
        console.log(newData)
        return newData
    } catch(error) {
    console.log("error",error);
    }
};

const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;

    }catch(error){
        console.log("error", error)
    }
}
