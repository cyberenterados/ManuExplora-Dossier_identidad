// OPERACIÓN: MÁQUINA DE ESCRIBIR
const textoComandante = ">_ COMANDANTE MANUEXPLORA_";
let indexTexto = 0;

function escribirTexto() {
    const elementoH2 = document.getElementById("maquina-escribir");
    if (elementoH2 && indexTexto < textoComandante.length) {
        elementoH2.innerHTML += textoComandante.charAt(indexTexto);
        indexTexto++;
        setTimeout(escribirTexto, 100); // Velocidad de tipeo
    }
}

// Iniciar secuencias al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(escribirTexto, 500); // Pequeño retraso táctico antes de escribir
});

// OPERACIÓN: CARRUSEL FALLOUT ROBCO (CÓDIGO PARCHEADO V1.1)
function desplazarRadarIzquierda() {
    const radarVideos = document.getElementById('videoSection');
    radarVideos.scrollBy({
        top: 0,
        left: -370, // Retirada táctica (Ancho de la tarjeta + gap)
        behavior: 'smooth'
    });
}

function desplazarRadarDerecha() {
    const radarVideos = document.getElementById('videoSection');
    radarVideos.scrollBy({
        top: 0,
        left: 370, // Avance de exploración
        behavior: 'smooth'
    });
}