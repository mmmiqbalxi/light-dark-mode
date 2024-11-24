const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const icon = themeToggle.querySelector('.iconify');
  if (document.body.classList.contains('dark-theme')) {
    icon.style.color = '#fff';
  } else {
    icon.style.color = '#000';
  }
});


// dark mode
const darkStyles = document.createElement('style');
darkStyles.textContent = `
  body.dark-theme {
    background-color: #333;
    color: #fff;
`;
document.head.appendChild(darkStyles);