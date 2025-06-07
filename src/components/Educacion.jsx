export default function Educacion() {
  const educacion = [
    { id: 1, institucion: 'Universidad Nacional', curso: 'Ingeniería de Sistemas', año: 2027 },
    { id: 2, institucion: 'SENA', curso: 'Técnico en Programación de Software', año: 2025 },
    { id: 3, institucion: 'Platzi', curso: 'Curso de React.js', año: 2026 },
    { id: 4, institucion: 'Udemy', curso: 'Desarrollo Web Full Stack', año: 2025 },
    { id: 5, institucion: 'SENA', curso: 'Taller de JavaScript Avanzado', año: 2028 },
    { id: 6, institucion: 'Galeria de arte', curso: 'Cuerso de tecnicas para hacer cuadros', año: 2025 },
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}