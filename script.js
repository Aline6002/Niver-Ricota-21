document.addEventListener('DOMContentLoaded', () => {
  const surpriseBtn = document.getElementById('surpriseBtn');
  const surpriseMessage = document.getElementById('surpriseMessage');
  const tirada = document.getElementById('tirada');

  surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.add('show');
    tirada.style.display = 'block';

    surpriseBtn.disabled = true;
    surpriseBtn.textContent = 'Surpresa ativada!';

    surpriseMessage.scrollIntoView({ behavior: 'smooth' });
  });
});
