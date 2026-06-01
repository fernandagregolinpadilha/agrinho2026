:root {
    --agro-green-dark: #4a1230;
    --agro-gold-safe: #b91c5c;
}

body {
    font-family: 'Inter', sans-serif;
    transition: background-color 0.3s, color 0.3s;
    background-color: #fff5fa;
    color: #1a1a1a;
}

h1,
h2,
h3,
.serif {
    font-family: 'Playfair Display', serif;
}

.text-agro-gold {
    color: var(--agro-gold-safe);
}

.hero-gradient {
    background: linear-gradient(rgba(74, 18, 48, 0.72), rgba(74, 18, 48, 0.88)),
        url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1600');
    background-size: cover;
    background-position: center;
}

/* Acessibilidade: Painel */
.accessibility-menu {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.acc-button {
    background: var(--agro-green-dark);
    color: white;
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.acc-panel {
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 12px;
    width: 250px;
    display: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    color: #1a202c;
}

.acc-panel.show {
    display: block;
}

.acc-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.btn-small {
    background: #fce7f3;
    color: #4a1230;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
}

/* Modo Escuro */
body.dark-mode {
    background-color: #121212;
    color: #f7fafc;
}

.dark-mode .acc-panel {
    background: #1e1e1e;
    color: white;
    border-color: #333;
}

.dark-mode .btn-small {
    background: #333;
    color: white;
}

.dark-mode .bg-white {
    background-color: #1a1a1a !important;
}

.dark-mode .bg-gray-50 {
    background-color: #242424 !important;
}

.dark-mode .text-gray-600,
.dark-mode .text-gray-700 {
    color: #cbd5e0 !important;
}

.dark-mode .text-agro-gold {
    color: #ff8cc6;
}

.dark-mode h2,
.dark-mode h3 {
    color: #ffffff;
}

/* Animações Reveal */
.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Destaque na Leitura */
.reading-active {
    outline: 3px solid var(--agro-gold-safe);
    background: rgba(185, 28, 92, 0.12);
}
