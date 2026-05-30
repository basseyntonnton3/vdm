/* =====================================================================
   HOME PAGE JAVASCRIPT - home.js
   ===================================================================== */

// DOM Elements
const statisticsCards = document.querySelectorAll('.stat-number');
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
};

// Initialize Intersection Observer for animated counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Animate counter from 0 to final value
function animateCounter(element) {
  const finalValue = element.innerText;
  const isNaira = finalValue.includes('₦');
  const isMillion = finalValue.includes('M+');
  
  // Extract numeric value
  let numericValue;
  if (isNaira && isMillion) {
    numericValue = 377; // Million representation
  } else if (finalValue === '2022') {
    numericValue = 2022;
  } else {
    numericValue = parseInt(finalValue);
  }

  let currentValue = 0;
  const increment = Math.ceil(numericValue / 60);
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= numericValue) {
      clearInterval(interval);
      element.innerText = finalValue;
    } else {
      if (isNaira && isMillion) {
        element.innerText = currentValue + 'M+';
      } else if (finalValue === '2022') {
        element.innerText = currentValue;
      } else {
        element.innerText = currentValue;
      }
    }
  }, 30);
}

// Observe stat cards
statisticsCards.forEach(card => {
  counterObserver.observe(card);
});

// Smooth hover effects for cards
const movementCards = document.querySelectorAll('.movement-card');
movementCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Lazy load images (if implemented)
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });
}

// Scroll event tracking
let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;
});

// Accessibility: Track keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-active');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-active');
});

console.log('Home page JavaScript loaded successfully');
