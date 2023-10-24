document.getElementById("agregar-organizador-btn").addEventListener("click", function() {
            document.getElementById("modal").style.display = "block";
        });

        document.getElementById("cerrar-modal-btn").addEventListener("click", function() {
            document.getElementById("modal").style.display = "none";
        });

        document.getElementById("organizador-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;

            // Crear un nuevo elemento de lista con el nombre del organizador y fondo verde
            const nuevoOrganizador = document.createElement("li");
            nuevoOrganizador.textContent = nombre;

            // Agregar el nuevo organizador a la lista horizontal
            document.getElementById("organizadores-list").appendChild(nuevoOrganizador);

            // Limpiar el formulario y ocultar el modal
            document.getElementById("nombre").value = "";
            document.getElementById("modal").style.display = "none";
        });