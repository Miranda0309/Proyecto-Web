document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendar-body');
    const currentMonthLabel = document.getElementById('current-month');
    const nextMonthButton = document.getElementById('next-month');
    const eventDetails = document.getElementById('event-details');
  
    let currentDate = new Date();
    const eventMap = {
      '2024-06-10': ['Entrega proyecto de programación web'],
      '2024-06-26': ['Reunión de planificación', 'Entrega parcial de proyecto'],
      '2024-07-05': ['Examen final de Sistemas Operativos']
    };
  
    function renderCalendar(date) {
      calendarBody.innerHTML = '';
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDate = new Date(year, month + 1, 0).getDate();
      const startDay = firstDay.getDay();
  
      currentMonthLabel.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
  
      let dayCount = 1;
      for (let row = 0; row < 6; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 7; col++) {
          const td = document.createElement('td');
          if (row === 0 && col < startDay) {
            td.textContent = '';
          } else if (dayCount <= lastDate) {
            const thisDate = new Date(year, month, dayCount);
            const isoDate = thisDate.toISOString().split('T')[0];
            td.textContent = dayCount;
            td.classList.add('calendar-day');
            td.setAttribute('data-date', isoDate);
            if (eventMap[isoDate]) {
              td.classList.add('has-event');
            }
            dayCount++;
          }
          tr.appendChild(td);
        }
        calendarBody.appendChild(tr);
      }
  
      document.querySelectorAll('.calendar-day').forEach(cell => {
        cell.addEventListener('click', () => {
          const iso = cell.getAttribute('data-date');
          const events = eventMap[iso];
          const readableDate = new Date(iso).toLocaleDateString('es', {
            day: 'numeric', month: 'long', year: 'numeric'
          });
          document.getElementById('selected-date').textContent = readableDate;
          if (events) {
            eventDetails.innerHTML = `<ul>${events.map(e => `<li>${e}</li>`).join('')}</ul>`;
          } else {
            eventDetails.innerHTML = `<p>No hay eventos para esta fecha.</p>`;
          }
        });
      });
    }
  
    nextMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
  
    renderCalendar(currentDate);
  });
  