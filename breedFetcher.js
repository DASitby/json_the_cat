const request = require('request');

const fetchBreedDescription = function(query, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,(error, response, body) => {
    if (error) {
      console.log('Error:' + error);
      callback(error,null);
    }
    const data = JSON.parse(body);
    callback(null,data);
  });
};

module.exports = fetchBreedDescription;