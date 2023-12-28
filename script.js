const button = document.querySelector('button');
const card = document.querySelector('.card');

document.addEventListener('click', (event) => {
  // Check if clicked element is the card or its children
  if (event.target.closest('.card')) {
    card.classList.toggle('flipped');
  }
});

window.alert('Hi there! (づ￣ 3￣)づ')
