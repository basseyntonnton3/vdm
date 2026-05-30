/* =====================================================================
   GALLERY PAGE JAVASCRIPT - gallery.js
   ===================================================================== */

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalDate = document.getElementById('modalDate');
const modalClose = document.getElementById('modalClose');
const galleryButtons = document.querySelectorAll('.view-btn');

// Bind gallery buttons
galleryButtons.forEach(button => {
  button.addEventListener('click', () => openModal(button));
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Filter Functionality
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
          item.style.display = 'block';
          // Add animation
          setTimeout(() => {
            item.classList.add('visible');
          }, 50);
        } else {
          item.classList.remove('visible');
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Modal Functionality
function openModal(button) {
  const item = button.closest('.gallery-item');
  const img = item.querySelector('img');
  const title = item.querySelector('h3').innerText;
  const descriptionEl = item.querySelector('.description');
  const dateEl = item.querySelector('.date');
  
  if (img && title) {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.innerText = title;
    if (descriptionEl) modalDescription.innerText = descriptionEl.innerText;
    if (dateEl) modalDate.innerText = dateEl.innerText;
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  imageModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on background click
if (imageModal) {
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      closeModal();
    }
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
    closeModal();
  }
});

// Gallery item hover effects
galleryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-4px)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
  });
});

console.log('Gallery page JavaScript loaded successfully');

