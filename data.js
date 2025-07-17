const ramos = [
  // SEMESTRE I
  { id: "fisica1", nombre: "Introducción a la Física", creditos: 6, prerreq: [], semestre: 1 },
  { id: "calculo1", nombre: "Cálculo I", creditos: 6, prerreq: [], semestre: 1 },
  { id: "algebra1", nombre: "Álgebra I", creditos: 6, prerreq: [], semestre: 1 },
  { id: "ing1", nombre: "Inglés I", creditos: 2, prerreq: [], semestre: 1 },
  { id: "comunicacion1", nombre: "Comunicación Efectiva I", creditos: 2, prerreq: [], semestre: 1 },
  { id: "formacion1", nombre: "Identidad UCN / EQG", creditos: 2, prerreq: [], semestre: 1 },
  { id: "proyecto1", nombre: "Proyecto Introducción a la Ingeniería", creditos: 5, prerreq: [], semestre: 1 },

  // SEMESTRE II
  { id: "mecanica", nombre: "Mecánica", creditos: 6, prerreq: ["fisica1"], semestre: 2 },
  { id: "calculo2", nombre: "Cálculo II", creditos: 6, prerreq: ["calculo1"], semestre: 2 },
  { id: "algebra2", nombre: "Álgebra II", creditos: 6, prerreq: ["algebra1"], semestre: 2 },
  { id: "quimica", nombre: "Química General", creditos: 6, prerreq: [], semestre: 2 },
  { id: "ing2", nombre: "Inglés II", creditos: 2, prerreq: ["ing1"], semestre: 2 },
  { id: "dialogo1", nombre: "Diálogo Fe-Cultura", creditos: 2, prerreq: [], semestre: 2 },

  // SEMESTRE III
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", creditos: 6, prerreq: ["calculo2"], semestre: 3 },
  { id: "calculo3", nombre: "Cálculo III", creditos: 6, prerreq: ["calculo2"], semestre: 3 },
  { id: "estadistica", nombre: "Estadística", creditos: 6, prerreq: ["algebra2"], semestre: 3 },
  { id: "programacion", nombre: "Programación", creditos: 6, prerreq: [], semestre: 3 },
  { id: "formacion2", nombre: "Formación General Electiva", creditos: 2, prerreq: [], semestre: 3 },
  { id: "proyecto2", nombre: "Proyecto Diseño e Innovación", creditos: 5, prerreq: ["proyecto1"], semestre: 3 },

  // SEMESTRE IV
  { id: "electromagnetismo", nombre: "Electromagnetismo", creditos: 5, prerreq: ["mecanica"], semestre: 4 },
  { id: "admin1", nombre: "Admin. de la Producción I", creditos: 5, prerreq: ["estadistica"], semestre: 4 },
  { id: "estadistica_aplicada", nombre: "Estadística Aplicada", creditos: 5, prerreq: ["estadistica"], semestre: 4 },
  { id: "termodinamica", nombre: "Termodinámica", creditos: 5, prerreq: ["quimica"], semestre: 4 },
  { id: "economia", nombre: "Economía", creditos: 5, prerreq: [], semestre: 4 },
  { id: "comunicacion2", nombre: "Comunicación Efectiva II", creditos: 2, prerreq: ["comunicacion1"], semestre: 4 },

  // SEMESTRE V
  { id: "electivo_ciencias", nombre: "Electivo Ciencias de la Ingeniería", creditos: 5, prerreq: [], semestre: 5 },
  { id: "investigacion1", nombre: "Investigación Operativa I", creditos: 5, prerreq: ["estadistica_aplicada"], semestre: 5 },
  { id: "ciencia_datos", nombre: "Ciencia de Datos", creditos: 5, prerreq: ["programacion"], semestre: 5 },
  { id: "contabilidad", nombre: "Contabilidad de Dirección", creditos: 5, prerreq: [], semestre: 5 },
  { id: "proyecto3", nombre: "Proyecto Diseño de Sistemas Productivos", creditos: 5, prerreq: ["proyecto2"], semestre: 5 },

  // SEMESTRE VI
  { id: "emprendimiento", nombre: "Emprendimiento", creditos: 5, prerreq: [], semestre: 6 },
  { id: "investigacion2", nombre: "Investigación Operativa II", creditos: 5, prerreq: ["investigacion1"], semestre: 6 },
  { id: "ingenieria_economica", nombre: "Ingeniería Económica", creditos: 5, prerreq: ["economia"], semestre: 6 },
  { id: "electivo_prof1", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 6 },
  { id: "proyecto4", nombre: "Proyecto Calidad", creditos: 5, prerreq: ["proyecto3"], semestre: 6 },

  // SEMESTRE VII
  { id: "sustentabilidad", nombre: "Ingeniería y Desarrollo Sostenible", creditos: 5, prerreq: [], semestre: 7 },
  { id: "simulacion", nombre: "Simulación", creditos: 5, prerreq: ["programacion"], semestre: 7 },
  { id: "admin2", nombre: "Admin. de la Producción II", creditos: 5, prerreq: ["admin1"], semestre: 7 },
  { id: "tecnologias_info", nombre: "Tecnologías de Información", creditos: 5, prerreq: ["programacion"], semestre: 7 },
  { id: "cadena_suministro1", nombre: "Cadena de Suministro", creditos: 5, prerreq: [], semestre: 7 },
  { id: "electivo_prof2", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 7 },

  // SEMESTRE VIII
  { id: "planificacion", nombre: "Planificación Estratégica", creditos: 5, prerreq: [], semestre: 8 },
  { id: "gestion_humana", nombre: "Gestión de Capital Humano", creditos: 5, prerreq: [], semestre: 8 },
  { id: "organizacion_digital", nombre: "Organización Digital", creditos: 5, prerreq: ["tecnologias_info"], semestre: 8 },
  { id: "gestion_activos", nombre: "Gestión de Activos", creditos: 5, prerreq: ["cadena_suministro1"], semestre: 8 },
  { id: "electivo_prof3", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 8 },

 // SEMESTRE IX (9 electivos)
  { id: "electivo_prof4", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof5", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof6", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof7", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof8", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof9", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof10", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof11", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },
  { id: "electivo_prof12", nombre: "Electivo Profesional", creditos: 5, prerreq: [], semestre: 9 },

  // SEMESTRE X
  { id: "capstone", nombre: "Capstone Project", creditos: 10, prerreq: [], semestre: 10 }
];
