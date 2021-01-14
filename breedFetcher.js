const request = require('request');

const breedSearchUrl = breed => "https://api.thecatapi.com/v1/breeds/search?q=" + breed;


const breedResults = breed => {
  request(breedSearchUrl(breed), (err, response, body) => {
    if (err) console.log(err);
    else {
      const data = JSON.parse(body);
      if (data[0] === undefined) console.log('Error: Breed not found');
      else console.log(data[0].description);
    }
  });
};

const breed = process.argv[2];
breedResults(breed);