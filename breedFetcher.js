const request = require('request');
// const arg = process.argv.slice(2);
// const breedName = arg[0];



const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback("This is not a breed", null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};
