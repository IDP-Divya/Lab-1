const axios = require('axios');

const getJoke = async () => {
  const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
  const joke = response.data;
  return joke;
};

module.exports = { getJoke };
