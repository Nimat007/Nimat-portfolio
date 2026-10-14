const toggle = document.getElementById('themeToggle');
if (toggle) {
  const savedTheme = localStorage.getItem('nimat-theme');
  if (savedTheme === 'light') document.body.classList.add('light');
  toggle.textContent = document.body.classList.contains('light') ? '☾' : '☼';
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('nimat-theme', theme);
    toggle.textContent = theme === 'light' ? '☾' : '☼';
  });
}
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// Client-side category filters for the demo.
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === button));
    const filter = button.dataset.filter;
    document.querySelectorAll('.thumbnail-card[data-category]').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  });
});
document.querySelectorAll('[data-pubfilter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-pubfilter]').forEach(b => b.classList.toggle('active', b === button));
    const filter = button.dataset.pubfilter;
    document.querySelectorAll('.publication-card[data-pubstatus]').forEach(card => { card.hidden = filter !== 'all' && card.dataset.pubstatus !== filter; });
  });
});
