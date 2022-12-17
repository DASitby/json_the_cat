const request = require('request');

let query = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,(error, response, body) => {
  if (error) {
    console.log('Error:' + error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
  return data;
});

