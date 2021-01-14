const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    //if something is wrong in general
    if (error !== null) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined || data[0].length === 0) {
        callback(error, null);
      } else {
        callback(null, data[0]['description']);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
// console.error('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', typeof body); // Print the HTML for the Google homepage.
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);
// console.log(body);
