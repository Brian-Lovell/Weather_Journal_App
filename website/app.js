let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=f14302284edc0516459d70333b5c6f2d";



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    let newZipcode = document.getElementById('zip').value;
    let content = document.getElementById('feelings').value;
    let d = new Date();
    let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
    console.log(content);
    getWeather(baseURL, newZipcode, apiKey)
    .then(function(data){
        // console.log(data)
        postData('/addWeather', {date:newDate, temp:data.main.temp, content});
        updateUI()
    })
}

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
        recentIndex = (allData.length - 1);
        console.log(allData);
    document.getElementById('date').innerHTML = allData[recentIndex].date;
    document.getElementById('temp').innerHTML = (Math.round(allData[recentIndex].temp - 272.15))+'&deg;';
    document.getElementById('content').innerHTML = allData[recentIndex].content;

    }catch(error){
        console.log("error", error)
    }
};