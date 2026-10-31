(() => {
  const root = document.getElementById('joyyu-privacy');
  const sections = [...root.querySelectorAll('[data-policy-sections] > details')];
  const toggle = root.querySelector('[data-toggle-all]');
  function updateToggle() {
    const allOpen = sections.every(section => section.open);
    toggle.textContent = allOpen ? 'Collapse all' : 'Expand all';
    toggle.setAttribute('aria-expanded', String(allOpen));
  }
  toggle.addEventListener('click', () => {
    const shouldOpen = !sections.every(section => section.open);
    sections.forEach(section => { section.open = shouldOpen; });
    updateToggle();
  });
  sections.forEach(section => section.addEventListener('toggle', updateToggle));
  root.querySelectorAll('.pp-toc a').forEach(link => {
    link.addEventListener('click', () => {
      const section = root.querySelector(link.hash);
      section.open = true;
      updateToggle();
    });
  });
})();
