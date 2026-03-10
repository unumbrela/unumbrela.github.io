// === Language Toggle ===
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'cn' : 'en';
  document.getElementById('langLabel').textContent = currentLang === 'en' ? 'CN' : 'EN';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';

  document.querySelectorAll('[data-en][data-cn]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
}

// === Navbar scroll effect ===
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    scrollTop.classList.add('visible');
  } else {
    navbar.style.boxShadow = 'none';
    scrollTop.classList.remove('visible');
  }
});

// === Mobile menu toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// === Scroll reveal animation ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.pub-item, .project-card, .award-item, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// === Active nav link highlight ===
const sections = document.querySelectorAll('.section, .hero');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#e6edf3';
    }
  });
});
