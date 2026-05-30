const params = new URLSearchParams(window.location.search);
const subjectFromUrl = params.get('subject');
if (subjectFromUrl) {
  const subjectInput = document.getElementById('subject');
  if (subjectInput) subjectInput.value = subjectFromUrl;
}

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function showStatus(message, type) {
  if (!status) return;
  status.textContent = message;
  status.classList.remove('success', 'error');
  status.classList.add(type);
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('Please complete all required fields before sending.', 'error');
      return;
    }

    showStatus('Message ready to send. Connect your form endpoint for live delivery.', 'success');
    form.reset();
  });
}

