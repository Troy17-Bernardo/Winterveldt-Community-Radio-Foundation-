document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.management-photo').forEach(photo => {
    photo.addEventListener('mousedown', () => {
      photo.style.transform = 'scale(1.05)';
    });

    photo.addEventListener('mouseup', () => {
      photo.style.transform = '';
    });

    photo.addEventListener('mouseleave', () => {
      photo.style.transform = '';
    });
  });
});
