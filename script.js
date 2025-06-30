const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
  if (surpriseMessage.classList.contains('hidden')) {
    surpriseMessage.classList.remove('hidden');
    surpriseMessage.classList.add('show');
    surpriseBtn.disabled = true;
  }
});
