const { fetchBreedDescription } = require('./breedFetcher');


const findBreed = process.argv[2];

fetchBreedDescription(findBreed, (error, description) => {
  if (error) console.log('Error Msg:',error);
  else console.log(description);
});
