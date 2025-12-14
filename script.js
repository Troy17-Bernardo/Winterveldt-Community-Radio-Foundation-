document.addEventListener('DOMContentLoaded', () => {
  // Management photo click effect
  document.querySelectorAll('.management-photo').forEach(photo => {
    photo.addEventListener('mousedown', () => { photo.style.transform = 'scale(1.05)'; });
    photo.addEventListener('mouseup', () => { photo.style.transform = ''; });
    photo.addEventListener('mouseleave', () => { photo.style.transform = ''; });
  });

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const icon = toggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')){
      icon.classList.replace('fa-moon','fa-sun');
    } else {
      icon.classList.replace('fa-sun','fa-moon');
    }
  });
});
