// Header solid background on scroll
const header = document.getElementById('siteHeader');
function onScroll() {
  if (window.scrollY > 40) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link highlight based on section in view
const sections = ['home', 'servicos', 'portfolio', 'contato', 'depoimentos']
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-pill a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((section) => sectionObserver.observe(section));

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Services interactive panel selector
const servicePanels = document.querySelectorAll('.service-panel');
servicePanels.forEach((panel) => {
  panel.addEventListener('click', () => {
    servicePanels.forEach((p) => p.classList.remove('is-active'));
    panel.classList.add('is-active');
  });
});

// Portfolio expanding gallery
const portfolioPhotos = document.querySelectorAll('.portfolio-photo');
portfolioPhotos.forEach((photo) => {
  photo.addEventListener('click', () => {
    portfolioPhotos.forEach((p) => p.classList.remove('is-active'));
    photo.classList.add('is-active');
  });
});
