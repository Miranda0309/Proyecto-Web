const regimenes = ['IC-2025', 'IIC-2025', 'IIIC-2025'];
const cortes = ['I corte parcial', 'II corte parcial'];
const semanas = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'];

const asignaturasPorRegimen = {
  'IC-2025': [
    { nombre: 'Introducción a la programación', año: 2, grupo: 'Gpo5', entrega: '07/04/2025', limite: '07/04/2025' },
    { nombre: 'Lenguaje de programación', año: 3, grupo: 'Gpo1', entrega: '10/04/2025', limite: '10/04/2025' },
    { nombre: 'Introducción a la programación', año: 2, grupo: 'Gpo5', entrega: '07/04/2025', limite: '07/04/2025' }
  ],
  'IIC-2025': [
    { nombre: 'Algoritmos', año: 2, grupo: 'Gpo3', entrega: '12/04/2025', limite: '13/04/2025' },
    { nombre: 'Estructura de Datos', año: 3, grupo: 'Gpo4', entrega: '14/04/2025', limite: '15/04/2025' },
    { nombre: 'Introducción a la programación', año: 2, grupo: 'Gpo5', entrega: '07/04/2025', limite: '07/04/2025' },
    { nombre: 'Lenguaje de programación', año: 3, grupo: 'Gpo1', entrega: '10/04/2025', limite: '10/04/2025' }
  ],
  'IIIC-2025': [
    { nombre: 'Base de Datos', año: 3, grupo: 'Gpo2', entrega: '16/04/2025', limite: '17/04/2025' },
    { nombre: 'Sistemas Operativos', año: 4, grupo: 'Gpo6', entrega: '18/04/2025', limite: '19/04/2025' }
  ]
};

const syllabusFechas = {
  'IC-2025': [
    { nombre: 'Introducción a la programación', año: 2, grupo: 'Gpo5', entrega: '08/04/2025', limite: '09/04/2025', estado: 'Aprobado' },
    { nombre: 'Lenguaje de programación', año: 3, grupo: 'Gpo1', entrega: '11/04/2025', limite: '12/04/2025', estado: 'Pendiente' },
    { nombre: 'Introduccion a la programación', año: 2, grupo: 'Gpo5', entrega: '11/04/2025', limite: '12/04/2025', estado: 'Pendiente' }
  ],
  'IIC-2025': [
    { nombre: 'Algoritmos', año: 2, grupo: 'Gpo3', entrega: '13/04/2025', limite: '14/04/2025', estado: 'Aprobado' },
    { nombre: 'Estructura de Datos', año: 3, grupo: 'Gpo4', entrega: '15/04/2025', limite: '16/04/2025', estado: 'Aprobado' },
    { nombre: 'Introduccion a la programación', año: 2, grupo: 'Gpo5', entrega: '11/04/2025', limite: '12/04/2025', estado: 'Pendiente' },
    { nombre: 'Lenguaje de programación', año: 3, grupo: 'Gpo1', entrega: '11/04/2025', limite: '12/04/2025', estado: 'Aprobado' }
  ],
  'IIIC-2025': [
    { nombre: 'Base de Datos', año: 3, grupo: 'Gpo2', entrega: '17/04/2025', limite: '18/04/2025', estado: 'Pendiente' },
    { nombre: 'Sistemas Operativos', año: 4, grupo: 'Gpo6', entrega: '19/04/2025', limite: '20/04/2025', estado: 'Aprobado' }
  ]
};

const estadosPorSemana = {
  'IC-2025': {
    'I corte parcial': [
      ['Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente']
    ],
    'II corte parcial': [
      ['Pendiente', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente'],
      ['Pendiente', 'Pendiente', 'Aprobado', 'Aprobado', 'Aprobado', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente']
    ]
  },
  'IIC-2025': {
    'I corte parcial': [
      ['Pendiente', 'Aprobado', 'Pendiente', 'Aprobado', 'Aprobado', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Aprobado', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente']
    ],
    'II corte parcial': [
      ['Aprobado', 'Pendiente', 'Pendiente', 'Pendiente', 'Aprobado', 'Aprobado'],
      ['Pendiente', 'Pendiente', 'Pendiente', 'Aprobado', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente']
    ]
  },
  'IIIC-2025': {
    'I corte parcial': [
      ['Aprobado', 'Pendiente', 'Pendiente', 'Aprobado', 'Pendiente', 'Pendiente'],
      ['Pendiente', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Aprobado']
    ],
    'II corte parcial': [
      ['Pendiente', 'Pendiente', 'Aprobado', 'Aprobado', 'Pendiente', 'Pendiente'],
      ['Aprobado', 'Aprobado', 'Pendiente', 'Pendiente', 'Pendiente', 'Aprobado']
    ]
  }
};

function generarTablaDocente() {
  const contenedor = document.getElementById('tabla-docente');
  const regimen = document.getElementById('regimen-select').value;
  const corte = document.getElementById('corte-select').value;
  const semanaActual = document.getElementById('semana-select').value;
  const semanaIndex = semanas.indexOf(semanaActual);
  const asignaturas = asignaturasPorRegimen[regimen];
  const estados = estadosPorSemana[regimen][corte];

  let html = `<table><thead><tr><th>Asignaturas</th><th>Año</th><th>Grupo</th><th>Fecha de entrega</th><th>Fecha límite</th><th>Estado</th></tr></thead><tbody>`;
  asignaturas.forEach((asig, i) => {
    const estado = estados[i][semanaIndex];
    const clase = estado.toLowerCase();
    html += `<tr>
      <td>📘 ${asig.nombre}</td>
      <td>${asig.año}</td>
      <td>${asig.grupo}</td>
      <td>${asig.entrega}</td>
      <td>${asig.limite}</td>
      <td><span class="estado-${clase}">${estado}</span> <button class="ojo-btn" onclick="mostrarDetalle('${regimen}', '${corte}', ${i})">👁️</button></td>
    </tr>`;
  });
  html += `</tbody></table>`;
  contenedor.innerHTML = html;
}

function generarSyllabus() {
  const contenedor = document.getElementById('tabla-syllabus');
  const regimen = document.getElementById('regimen-select').value;
  const asignaturas = syllabusFechas[regimen];

  let html = `<h3>SYB</h3><table><thead><tr><th>Asignaturas</th><th>Año</th><th>Grupo</th><th>Fecha de entrega</th><th>Fecha límite</th><th>Estado</th></tr></thead><tbody>`;
  asignaturas.forEach((asig) => {
    const clase = asig.estado.toLowerCase();
    html += `<tr>
      <td>📘 ${asig.nombre}</td>
      <td>${asig.año}</td>
      <td>${asig.grupo}</td>
      <td>${asig.entrega}</td>
      <td>${asig.limite}</td>
      <td><span class="estado-${clase}">${asig.estado}</span></td>
    </tr>`;
  });
  html += `</tbody></table>`;
  contenedor.innerHTML = html;
}

function mostrarDetalle(regimen, corte, index) {
  const detalle = document.getElementById('detalle-semanas');
  const asignatura = asignaturasPorRegimen[regimen][index];
  const estados = estadosPorSemana[regimen][corte][index];

  let html = '<div class="tabla-scroll"><table><thead><tr><th>Asignatura</th>';
  semanas.forEach(sem => html += `<th>${sem}</th>`);
  html += '</tr></thead><tbody>';
  html += `<tr><td>${asignatura.nombre}</td>`;
  estados.forEach(estado => {
    const clase = estado.toLowerCase();
    html += `<td><span class="estado-${clase}">${estado}</span></td>`;
  });
  html += '</tr></tbody></table></div>';

  detalle.innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
}

// Eventos

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

document.getElementById('regimen-select').addEventListener('change', () => {
  generarTablaDocente();
  generarSyllabus();
});
document.getElementById('corte-select').addEventListener('change', () => {
  generarTablaDocente();
  generarSyllabus();
});
document.getElementById('semana-select').addEventListener('change', () => {
  generarTablaDocente();
  generarSyllabus();
});

document.addEventListener('DOMContentLoaded', () => {
  generarTablaDocente();
  generarSyllabus();
});
