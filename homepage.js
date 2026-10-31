(() => {
  const root = document.getElementById('joyyu-block-home');
  root.querySelector('[data-contact]').addEventListener('click', () => root.querySelector('[data-contact-dialog]').showModal());
  const sectionLinks = [...root.querySelectorAll('header nav a[href^="#"]')];
  function updateSection() {
    const current = sectionLinks.filter(link => document.querySelector(link.hash).getBoundingClientRect().top <= 100).pop() || sectionLinks[0];
    sectionLinks.forEach(link => {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateSection, { passive: true });
  updateSection();
})();
