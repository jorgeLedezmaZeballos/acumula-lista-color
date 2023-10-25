document.getElementById("agregar-organizador-btn").addEventListener("click", function () {
        document.getElementById("modal").style.display = "block";
    });

    document.getElementById("cerrar-modal-btn").addEventListener("click", function () {
        document.getElementById("modal").style.display = "none";
    });

    document.getElementById("organizador-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;

        // Crear un nuevo elemento de organizador
        const nuevoOrganizador = document.createElement("div");
        nuevoOrganizador.className = "organizador";
        nuevoOrganizador.textContent = nombre;

        // Crear un botón de borrar
        const borrarBtn = document.createElement("button");
        borrarBtn.textContent = "X";
        borrarBtn.className = "borrar-btn";

        // Agregar un manejador de eventos para el botón de borrar
        borrarBtn.addEventListener("click", function () {
            nuevoOrganizador.remove(); // Eliminar el organizador
        });

        // Agregar el botón de borrar al organizador
        nuevoOrganizador.appendChild(borrarBtn);

        // Agregar el nuevo organizador al contenedor de organizadores
        document.getElementById("organizadores-container").appendChild(nuevoOrganizador);

        // Limpiar el formulario y ocultar el modal
        document.getElementById("nombre").value = "";
        document.getElementById("modal").style.display = "none";
    });