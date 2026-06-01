function mostrarFrase(){

    const frases = [
        "Grandes sonhos começam com pequenos passos. 🌸",
        "Você é capaz de conquistar coisas incríveis. 💖",
        "Todo dia é uma nova oportunidade para recomeçar. ✨",
        "Acredite em você e continue tentando. 🌷",
        "Com dedicação, seus sonhos podem se tornar realidade. 💫"
    ];

    const numeroAleatorio = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").textContent = frases[numeroAleatorio];
}
