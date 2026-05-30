/* =====================================================================
   PROFILE PAGE JAVASCRIPT - profile.js
   ===================================================================== */

// Progress Bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.width = '0';
progressBar.style.background = 'linear-gradient(90deg, #CC2200, #D4A017)';
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.1s ease-out';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
});

// Timeline animations
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s forwards`;
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  timelineObserver.observe(item);
});

// Add keyframe animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .timeline-item {
    margin-bottom: 2rem;
    padding-left: 2rem;
  }
`;
document.head.appendChild(style);

// Advocacy cards hover effects
const advocacyCards = document.querySelectorAll('.advocacy-card');
advocacyCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Bio section smooth reveal
const bioSections = document.querySelectorAll('.bio-section');
const bioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      bioObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

bioSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  bioObserver.observe(section);
});

console.log('Profile page JavaScript loaded successfully');

