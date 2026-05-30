const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('newsSearch');
const cards = document.querySelectorAll('.news-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const category = card.dataset.category;
      const matchesFilter = filter === 'All' || category === filter;
      const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
      card.style.display = matchesFilter && matchesSearch ? 'block' : 'none';
    });
  });
});

searchInput.addEventListener('input', () => {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  const searchTerm = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const category = card.dataset.category;
    const matchesFilter = activeFilter === 'All' || category === activeFilter;
    const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
    card.style.display = matchesFilter && matchesSearch ? 'block' : 'none';
  });
});
