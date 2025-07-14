const malla = document.getElementById("malla");

let progreso = JSON.parse(localStorage.getItem("ramos_aprobados")) || [];

function guardarProgreso() {
  localStorage.setItem("ramos_aprobados", JSON.stringify(progreso));
}

function renderMalla() {
  malla.innerHTML = "";

  for (let s = 1; s <= 3; s++) {
    const semTitle = document.createElement("div");
    semTitle.className = "semestre";
    semTitle.textContent = `Semestre ${s}`;
    malla.appendChild(semTitle);

    const ramosSemestre = ramos.filter(r => r.semestre === s);

    for (const ramo of ramosSemestre) {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.nombre}`;
      const creditos = document.createElement("div");
      creditos.className = "creditos";
      creditos.textContent = `${ramo.creditos} créditos`;
      div.appendChild(creditos);

      const habilitado = ramo.prerreq.every(p => progreso.includes(p));
      if (!habilitado && !progreso.includes(ramo.id)) {
        div.classList.add("bloqueado");
      }

      if (progreso.includes(ramo.id)) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        if (progreso.includes(ramo.id)) {
          progreso = progreso.filter(x => x !== ramo.id);
        } else {
          progreso.push(ramo.id);
        }

        guardarProgreso();
        renderMalla();
      });

      malla.appendChild(div);
    }
  }
}

renderMalla();
