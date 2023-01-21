const btnEl = document.getElementById('btn');
const authorEl = document.getElementById('author');
const quoteEl = document.getElementById('quote');

const apiURL = 'https://api.quotable.io/random';

const getQuote = async () => {
  try {
    btnEl.innerText = 'loading..';
    btnEl.disabled = true;
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = '~' + quoteAuthor;
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    quoteEl.innerText = 'An rror happend, try again later!';
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
  }
};

btnEl.addEventListener('click', getQuote);
