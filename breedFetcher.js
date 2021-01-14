const request = require('request');

const breedSearchUrl = breed => "https://api.thecatapi.com/v1/breeds/search?q=" + breed;


const fetchBreedDescription = (breed, errHandling) => {
  request(breedSearchUrl(breed), (err, response, body) => {
    if (err) {
      errHandling(err);
      return;
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      errHandling('Error: breed not found');
      return;
    }

    const result = `Breed: ${data[0].name}\nDescription: ${data[0].description}`;

    errHandling(null, result);
  });
  
   
};


module.exports = { fetchBreedDescription };