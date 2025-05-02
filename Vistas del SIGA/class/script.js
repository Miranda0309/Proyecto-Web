// Resaltar botón activo
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Menú lateral (opcional si implementas menú deslizante)
  document.querySelector('.menu-icon')?.addEventListener('click', () => {
    alert('Aquí puedes abrir un menú lateral si lo deseas');
  });
  