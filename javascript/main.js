// ============================================================
// MG_OS v2.1 — MANUEXPLORA | javascript/main.js
// ============================================================

// ---- MÁQUINA DE ESCRIBIR ----
const textoComandante = ">_ COMANDANTE MANUEXPLORA_";
let indexTexto = 0;

function escribirTexto() {
    const el = document.getElementById("maquina-escribir");
    if (el && indexTexto < textoComandante.length) {
        el.innerHTML += textoComandante.charAt(indexTexto);
        indexTexto++;
        setTimeout(escribirTexto, 100);
    }
}

// ---- MATRIX BACKGROUND SUTIL ----
function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const chars = "アイウエオカキクケコ01アBCDEF<>{}[]|/\\#@!%^&*ABCDEFGHIJ0123456789";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    function drawMatrix() {
        // Fade trail — fondo semi-transparente
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF00';
        ctx.font = fontSize + 'px VT323, monospace';

        columns = Math.floor(canvas.width / fontSize);
        if (drops.length < columns) {
            drops = drops.concat(Array(columns - drops.length).fill(1));
        }

        for (let i = 0; i < columns; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 55);
}

// ---- HAMBURGER MENU ----
function initHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const panel = document.getElementById('nav-mobile-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('activo');
        panel.classList.toggle('activo');
    });

    // Cerrar al hacer click en un link del panel
    panel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('activo');
            panel.classList.remove('activo');
        });
    });
}

// ---- CARRUSEL FALLOUT ----
function desplazarRadarIzquierda() {
    const el = document.getElementById('videoSection');
    if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
}

function desplazarRadarDerecha() {
    const el = document.getElementById('videoSection');
    if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(escribirTexto, 500);
    initMatrix();
    initHamburger();
});
