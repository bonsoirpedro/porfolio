const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para cobrir a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "01";
const matrixChars = letras.split("");

const fontSize = 10;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(0);

function efeitoMatrix () {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#a42cd6";
    ctx.font = `${fontSize}px monospace`;

    // loop para desenhar os caracteres em cada col
    for (let i=0; i< drops.length; i++) {
        //escolhe caractere aleatório
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        // desenha o caractere na pos corresp
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        // move a pos da "gota" para baixo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // volta para o topo
        } else {
            drops[i]++;
        }

    }
}

// inicia o loop de animação
setInterval(efeitoMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize); // Ajusta o número de colunas
    drops.fill(0); // Reinicia a posição das gotas
});

