export default function Experiencia() {
  const experiencia = [
  { id: 1, cargo: "Desarrollador Full Stack", empresa: "Navisoft Gaming", año: 2024, descripcion: "Desarrollo de aplicaciones web interactivas para plataformas de videojuegos, utilizando React y Node.js ." },
  { id: 2, cargo: "Instructor TIC", empresa: "SENA", año: 2023, descripcion: "Capacitación de aprendices en tecnologías de la información, enfocada en programación en Python y desarrollo web." },
  { id: 3, cargo: 'Proyecto: E-commerce', empresa: 'Freelance', año: 2021, descripcion: 'Desarrollo de una tienda online con React y Firebase.' },
  { id: 4, cargo: 'Analista de Datos', empresa: 'DataCorp', año: 2020, descripcion: 'Análisis de datos con Python y SQL.' },
  { id: 5, cargo: 'Desarrollador Full Stack', empresa: 'WebMasters', año: 2019, descripcion: 'Mantenimiento de aplicaciones web.' },
  { id: 6, cargo: 'Proyecto: App Mobile', empresa: 'Freelance', año: 2023, descripcion: 'App móvil con React Native.' },
  { id: 7, cargo: 'Soporte Técnico', empresa: 'IT Services', año: 2018, descripcion: 'Soporte a usuarios y mantenimiento de equipos.' },
  { id: 8, cargo: 'Desarrollador Junior', empresa: 'StartUpX', año: 2017, descripcion: 'Desarrollo de funcionalidades en JavaScript.' },
  { id: 9, cargo: 'Proyecto: Portfolio', empresa: 'Personal', año: 2024, descripcion: 'Creación de un portfolio con React.' },
  { id: 10, cargo: 'Practicante TI', empresa: 'Tech Academy', año: 2016, descripcion: 'Soporte en desarrollo de software.' },
  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}