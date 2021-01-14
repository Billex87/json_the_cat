const request = require('request');
let breed = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (body === '[]') {
    console.log("The breed is not found.");
  } if (error !== null) {
    console.log("Wrong URL ya bum");
  }
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', typeof body); // Print the HTML for the Google homepage.
  // const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  // console.log(body);
});