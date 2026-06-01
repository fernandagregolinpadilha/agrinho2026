// Acessibilidade: Painel
function abrirMenu() {
    const panel = document.getElementById('accPanel');
    panel.classList.toggle('show');
}

let currentFontSize = 100;

function changeFontSize(delta) {
    currentFontSize += delta * 5;

    if (currentFontSize < 70) {
        currentFontSize = 70;
    }

    if (currentFontSize > 150) {
        currentFontSize = 150;
    }

    document.documentElement.style.fontSize = currentFontSize + '%';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

let synth = window.speechSynthesis;
let isReading = false;
let currentUtterance = null;

function toggleReading() {
    if (isReading) {
        synth.cancel();
        stopReadingState();
    } else {
        isReading = true;
        document.getElementById('readBtn').innerText = "Parar Leitura";
        readNextSection(0);
    }
}

function stopReadingState() {
    isReading = false;
    document.getElementById('readBtn').innerText = "Ouvir Site";
    document.querySelectorAll('.reading-active').forEach(el => el.classList.remove('reading-active'));
}

function readNextSection(index) {
    const sections = document.querySelectorAll('.readable-section');

    if (index >= sections.length || !isReading) {
        stopReadingState();
        return;
    }

    const text = sections[index].innerText;

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'pt-BR';
    currentUtterance.rate = 1.0;

    sections[index].classList.add('reading-active');
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });

    currentUtterance.onend = () => {
        sections[index].classList.remove('reading-active');

        if (isReading) {
            readNextSection(index + 1);
        }
    };

    currentUtterance.onerror = () => stopReadingState();

    synth.speak(currentUtterance);
}

// Animação de Revelação
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Fechar painel ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.accessibility-menu')) {
        document.getElementById('accPanel').classList.remove('show');
    }
});
