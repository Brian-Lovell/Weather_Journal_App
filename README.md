# Weather Journal App Project
Project to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Dependencies
Node Express
Body Parser
Cors


# Udacity Review

## Meets Specifications
### Congratulation for reaching this far!
*We are feeling extremely delighted to inform that you completed all the requirements.*
*This is not an easy project. Instead of being the initial project, it covers all the aspects of JavaScript programming. I have mentioned below what all are covered.*
- Promise chaining.
- API calling
- async functions
- UI


*I am really impressed with the hard work you invested. It takes a lot to complete such a tedious task.*
*You have to face much more challenges in upcoming projects. Tighten up your seat belt and face them like a hero.*
*We are always there to help and you can reach us through Knowledge.*
*:star: Special appreciation for such great implementations and hard work. To me it seems to be the work of the great JAVASCRIPT Developer.*
*HAVE A HAPPY LEARNING THANK YOU!*

*Good luck! Happy learning:thumbsup: Stay :udacious:*
*Stay safe and healthy. Together we will defeat corona.*

*Stay safe and healthy.*

## Project Environment Setup
**Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.**

**The Express app instance should be pointed to the project folder with .html, .css, and .js files.**

*Hey, rubric requires here couple of specifications that need to be fulfilled. We need to install Node platform on our system and install express dependency for setting up the server and loading the static content. We are really impressed that you achieved this in first go. Please refer below for more details.*

### Meets Expectations

- Node need to be installed on local machine. This is needed to provide platform architecture for our project. We all need this to be installed on our system.
- express dependency need to be installed for our project. We need to make it part of node_modules folder. We need to add it in file package.json and we can use just one command npm install to get it installed in one go. This is well achieved.
- We need to instantiate express instance in file server.js. This instance is need for setting up server and loading static content such as HTML file and CSS files. This is well achieved in the implementation. Great work pal!

Overall kudos for the brilliant work done.


**The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().**

**The body-parser package should be installed and included in the project.**

*Hey, rubric requires couple of specifications that need to be fulfilled. We need to install two dependencies named cors and body-parser. We need to make it part of node_modules folder. We are really impressed that you achieved this in one go. Please refer below for more details:*

### Meets Expectations
- We need to add cors in file package.json. This is needed for making cross-origin request. Adding it in the file make it easy to install using command npm install. Great work pal!
- We need to add body-parser in file package.json. This is needed for formatting the request in the format acceptable by the endpoint. Adding it in the file make it easy to install using command npm install. Great work pal!
*Overall kudos for the brilliant work done. Keep it up pal!*

**Local server should be running and producing feedback to the Command Line through a working callback function.**

*Hey, rubric here requires couple of specification that need to be fulfilled. We have to setup server and log the feedback on command line. We are really impressed that you achieved it in this submission. We have explained the rest of details below:*

### Meets Expectations
- We need to setup server using express dependency and using method app.listen. We need to specify some port and a callback function which will produce feedback on command line. This implementation is done as per the specifications. Great work pal!
*Overall kudos for the brilliant work done..*

**Create API credentials on OpenWeatherMap.com**

*Hey, requirement of rubric here was to create credentials on OpenWeatherMap.com. These credentials will serve as API_KEY. We are really impressed that you achieved all of it in one go. Please refer below for more details:*

### Meets Expectations
- We need to create credentials on OpenWeatherMap.com. These credentials will help for successful API calls and fetch the response.

- We need to place these credentials at the top of file app.js. This is required as per the standards all the constants should be placed on the top of file. This helps in easy maintenance.

- We need to append directive &units=imperial or &units=metric for fahrenheit or celsius respectively. This reduces the boilerplate code and with the use of 2 3 words we can achieve temperature conversion in desired units. This is achieved perfectly in the implementation. Please refer imperial units for more details.
*Overall kudos for such brilliant work here!*

## APIs and Routes
There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*
The personal API Key for OpenWeatherMap API is saved in a named const variable.

The API Key variable is passed as a parameter to fetch() .

Data is successfully returned from the external API.

*Hey, I reviewed your previous submission and gave comments on this.*

### Meets Expectations
All the marked suggestions are now addressed.
**There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*

**There should be an asynchronous function to fetch the data from the app endpoint**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*

**You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.**

**The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.**

**The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*

## Dynamic UI
**The input element with the placeholder property set to “enter zip code here” should have an id of zip.**

**The textarea included in project HTML should have an id of feelings.**

**The button included in project HTML should have an id of generate.**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*
The div with the id, entryHolder should have three child divs with the ids:

- date
- temp
- content

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*

**Adds an event listener to an existing HTML button from DOM using Vanilla JS.**

**In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*
**Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.**

**Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.**

*Hey, I reviewed your previous submission and gave comments on this. It was marked complete.*
