function mostrarFormulario() {
    var formulario = document.getElementById("miFormulario");
    var container = document.getElementById("container");
    var botonServicios = document.getElementById("mi-boton");
    var botonVolver = document.getElementById("volver");
    
    // Mover el formulario al lugar del botón y la imagen
    container.innerHTML = ''; // Limpiar el contenido del contenedor
    container.appendChild(formulario); // Agregar el formulario al contenedor
    
    // Mostrar el formulario y ocultar el botón "SERVICIOS"
    formulario.style.display = "block";
    botonServicios.style.display = "none";
    
    // Mostrar el botón "Volver"
    botonVolver.style.display = "block";
}

function volverAtras() {
    var formulario = document.getElementById("miFormulario");
    var container = document.getElementById("container");
    var botonServicios = document.getElementById("mi-boton");
    var botonVolver = document.getElementById("volver");
    
    // Ocultar el formulario y mostrar el botón "SERVICIOS" y la imagen
    formulario.style.display = "none";
    botonServicios.style.display = "block";
    
    // Ocultar el botón "Volver"
    botonVolver.style.display = "none";
    
    // Mover la imagen y el botón "SERVICIOS" al contenedor
    container.innerHTML = ''; // Limpiar el contenido del contenedor
    container.innerHTML = '<button id="mi-boton" onclick="mostrarFormulario()">SERVICIOS</button>'; // Agregar el botón "SERVICIOS" al contenedor
    container.innerHTML += '<img alt="" src="PHOTO-2023-12-06-11-15-21.jpg" style="max-width: 100%; max-height: 30vh;">'; // Agregar la imagen al contenedor
}
