/* =====================================================================
   GLOBAL JAVASCRIPT - global.js
   Shared functionality for all pages
   ===================================================================== */

// ============================================================
// NAVBAR FUNCTIONALITY
// ============================================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Close menu when link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ============================================================
// ACTIVE LINK HIGHLIGHTING
// ============================================================

function updateActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Call on load
document.addEventListener('DOMContentLoaded', updateActiveLink);
window.addEventListener('popstate', updateActiveLink);

// ============================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================

const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// ============================================================
// SMOOTH SCROLL BEHAVIOR
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================================
// KEYBOARD ACCESSIBILITY
// ============================================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }
  }
});

// Track keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-active');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-active');
});

// ============================================================
// PRELOAD CRITICAL RESOURCES
// ============================================================

window.addEventListener('load', () => {
  // Optimize performance
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      console.log('VDM Website - All resources loaded');
    });
  }
});

// ============================================================
// ERROR HANDLING
// ============================================================

window.addEventListener('error', (event) => {
  console.error('Error detected:', event.error);
});

// ============================================================
// INITIALIZATION
// ============================================================

console.log('Global JavaScript loaded successfully');

// ============================================================
// THEME TOGGLE - Light / Dark
// Adds a `data-theme` attribute to the document root and
// persists the selection in localStorage under `vdmTheme`.
// ============================================================

function applyTheme(theme) {
  try {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vdmTheme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      btn.querySelector('.icon') && (btn.querySelector('.icon').textContent = theme === 'light' ? '☀️' : '🌙');
      btn.title = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    }
  } catch (e) {
    console.warn('Theme apply failed', e);
  }
}

function initThemeToggle() {
  const saved = localStorage.getItem('vdmTheme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
});

