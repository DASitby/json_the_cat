const request = require('request');

const fetchBreedDescription = function(query, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,(error, response, body) => {
    if (error) {
      return callback(error,null);
    }
    const data = JSON.parse(body)[0];
    if (data === undefined) {
      return callback('Invalid breed',null);
    }
    callback(null,data);
  });
};

module.exports = fetchBreedDescription;