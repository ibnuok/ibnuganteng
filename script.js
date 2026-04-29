const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('[data-target]');
const rain = document.querySelector('.rain');

function showPage(id) {
  pages.forEach((p) => p.classList.toggle('active', p.id === id));
  if (id === 'ending') startLoveRain();
}

function startLoveRain() {
  rain.innerHTML = '';
  for (let i = 0; i < 40; i += 1) {
    const heart = document.createElement('span');
    heart.textContent = ['💖', '💗', '💘', '💕'][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    heart.style.animationDelay = `${Math.random() * 1.2}s`;
    rain.appendChild(heart);
  }
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    if (target) showPage(target);
  });
});
