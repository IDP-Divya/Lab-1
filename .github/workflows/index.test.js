const axios = require('axios');
const { getJoke } = require('./index');

jest.mock('axios');

describe('getJoke', () => {
  test('should return a joke object', async () => {
    const joke = {
      setup: 'What do you call a fish wearing a bowtie?',
      punchline: 'Sofishticated',
    };
    axios.get.mockResolvedValue({ data: joke });
    const result = await getJoke();
    expect(result).toEqual(joke);
  });

  test('should throw an error if the API request fails', async () => {
    const error = new Error('Network error');
    axios.get.mockRejectedValue(error);
    await expect(getJoke()).rejects.toThrow(error);
  });
});
