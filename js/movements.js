document.querySelectorAll('.movement-panel').forEach(panel => {
  panel.classList.add('reveal');
});

const figures = document.querySelectorAll('.finance-item strong');
figures.forEach(value => {
  value.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], {
    duration: 700,
    easing: 'ease-out',
    fill: 'forwards'
  });
});
