(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = [...document.querySelectorAll('[data-section]')];
  const currentYear = document.querySelector('[data-current-year]');
  const printButton = document.querySelector('[data-print]');

  function updateMenuLabel() {
    if (!menuToggle) return;
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  function closeMenu({ returnFocus = false } = {}) {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
    updateMenuLabel();
    if (returnFocus) menuToggle.focus();
  }

  menuToggle?.addEventListener('click', () => {
    const shouldOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    siteNav?.classList.toggle('is-open', shouldOpen);
    updateMenuLabel();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav?.classList.contains('is-open')) {
      closeMenu({ returnFocus: true });
    }
  });

  document.addEventListener('click', (event) => {
    if (!siteNav?.classList.contains('is-open')) return;
    if (!siteNav.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
  });

  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 22);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-active', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, {
      rootMargin: '-24% 0px -58% 0px',
      threshold: [0, 0.12, 0.35]
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  printButton?.addEventListener('click', () => {
    document.body.classList.add('print-cv-only');
    window.print();
  });

  window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-cv-only');
  });

  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });

  updateMenuLabel();
})();
