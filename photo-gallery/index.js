const bntEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const errorMessageEl = document.getElementById('errorMessage');
const galleryEl = document.getElementById('gallery');
const containerEl = document.querySelector('.container');

async function fetchImage() {
  const inputValue = document.getElementById('input').value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = 'block';
    errorMessageEl.innerText = 'Number should be between  0 and 11';
    return;
  }

  imgs = '';

  try {
    bntEl.style.display = 'none';
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=AI5MEHVUreM1jP2XBfDVhFxkmHwCE5i2CKI2XH0idMY`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `<img src=${pic.urls.small} alt='image />`;
            galleryEl.style.display = 'block';
            galleryEl.innerHTML = imgs;
            bntEl.style.display = 'block';
          });
        }
      })
    );
    errorMessageEl.style.display = 'none';
  } catch (error) {
    errorMessageEl.style.display = 'block';
    errorMessageEl.innerText = 'an error happend';
    bntEl.style.display = 'block';
  }
}

bntEl.addEventListener('click', fetchImage);
