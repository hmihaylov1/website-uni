const modal = document.querySelector('.modal');
const successModal = document.querySelector('#success-modal');
const countdown = document.querySelector('#countdown');

modal.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulating successful submission with a 2 second delay
  setTimeout(() => {
    modal.style.display = 'none';
    successModal.style.display = 'flex';
    let counter = 10;
    countdown.textContent = counter;
    setInterval(() => {
      counter--;
      countdown.textContent = counter;
    }, 1000);

    setTimeout(() => {
      window.location.href = 'website.html';
    }, 10000);
  }, 2000);
});

const backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click', () => {
  window.location.href = 'website.html';
});
