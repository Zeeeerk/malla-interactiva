const ramos = [
  { id: "fisica1", nombre: "Introducción a la Física", creditos: 6, prerreq: [], semestre: 1 },
  { id: "algebra1", nombre: "Álgebra I", creditos: 6, prerreq: [], semestre: 1 },
  { id: "calculo1", nombre: "Cálculo I", creditos: 6, prerreq: [], semestre: 1 },

  { id: "mecanica", nombre: "Mecánica", creditos: 6, prerreq: ["fisica1"], semestre: 2 },
  { id: "algebra2", nombre: "Álgebra II", creditos: 6, prerreq: ["algebra1"], semestre: 2 },
  { id: "calculo2", nombre: "Cálculo II", creditos: 6, prerreq: ["calculo1"], semestre: 2 },

  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", creditos: 6, prerreq: ["calculo2"], semestre: 3 },
  { id: "calculo3", nombre: "Cálculo III", creditos: 6, prerreq: ["calculo2"], semestre: 3 },
  { id: "estadistica", nombre: "Estadística", creditos: 6, prerreq: ["algebra2"], semestre: 3 }
];
