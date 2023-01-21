const sectionEl = document.querySelector('.section');
const btnEl = document.querySelector('.btn');
const emojiNameEl = document.querySelector('.emoji-name');

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    'https://emoji-api.com/emojis?access_key=9d200d0c010478227801679e4048130315968dbc'
  );
  data = await response.json();
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
