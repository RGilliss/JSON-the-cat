const request = require('request');
const arg = process.argv.slice(2);
const breed = arg[0];


let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, function(error, response, body) {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Error: Please input a valid cat breed');
  } else {
    console.log(data[0].description);
  }
});