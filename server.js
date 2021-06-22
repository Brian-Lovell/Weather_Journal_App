// Store project Data
projectData = {};


//Express setup
const express = require("express");
const app = express();
const port = 2076;

//Dependencies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
const { response } = require("express");
app.use(cors());


// Start server
const server = app.listen(port, listening);

function listening(){
    console.log(`Example app listening on port ${port}!`);
};

app.get("/all", (res,req) => {
    response.send(projectData);
});

app.post('/', addWeather);

function addWeather (req, res){
    console.log(req.body)
    data.push(req.body)
};