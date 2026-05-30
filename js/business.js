document.querySelectorAll('.business-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.borderColor = 'rgba(204,34,0,0.65)');
  card.addEventListener('mouseleave', () => card.style.borderColor = 'rgba(255,255,255,0.1)');
});

const params = new URLSearchParams(window.location.search);
const subject = params.get('subject');
if (subject) {
  const target = document.querySelector('a[href="contact.html"]');
  if (target) target.href = `contact.html?subject=${encodeURIComponent(subject)}`;
}
