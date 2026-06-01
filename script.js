// Acessibilidade: Painel
function abrirMenu() {
    document.getElementById('accPanel').classList.toggle('show');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
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
