const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = '4Vm92j+sByzQaVcRnZ8MLA==GNBsBS1JLa3bR0UL';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const getJoke = async () => {
  try {
    jokeEl.innerText = 'updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = 'tell me a joke';

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = 'An error happened, try again later!';
  }
};

btnEl.addEventListener('click', getJoke);
