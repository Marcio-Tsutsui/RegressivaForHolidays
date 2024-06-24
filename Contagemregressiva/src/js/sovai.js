document.addEventListener('DOMContentLoaded', () => {
    // Defina a data de destino aqui
    const targetDate = new Date('July 1, 2024 00:00:00').getTime();

    // Atualize o contador a cada segundo
    const countdown = setInterval(() => {
        const now = new Date().getTime();

        // Calcular a diferença entre a data atual e a data de destino
        const difference = targetDate - now;

        // Calcular o tempo restante em dias, horas, minutos e segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Exibir o resultado
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // Se o contador terminar, mostrar uma mensagem
        if (difference < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = '<h2>Férias!</h2>';
        }
    }, 1000);
});

// Função para tocar som ao mover o mouse
function execSom() {
    var playAudio = document.getElementById("playaudio");
    if (playAudio) {
      playAudio.play().catch(error => {
        console.error("Erro ao tentar tocar o áudio:", error);
      });
    }
  }

// Função para mudar a cor dos caracteres
/*function changeColorRandomly() 
{     const h1 = document.querySelector('h1');    if (h1) {
      h1.innerHTML = h1.textContent.split('').map(char => {
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            return `<span style="color:${color}">${char}</span>`;
        }).join('');
    }
}

Change color every 500 milliseconds
setInterval(changeColorRandomly, 500); */



document.getElementById('cancel-button').addEventListener('click', () => {
  // Parar o áudio
  var playAudio = document.getElementById("playaudio");
  if (playAudio) {
      playAudio.pause();
  }

  // Mostrar o pop-up
  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', () => {
  // Fechar o pop-up e voltar para a tela principal
  document.getElementById('popup').style.display = 'none';

  // Reproduzir o áudio novamente
  var playAudio = document.getElementById("playaudio");
  if (playAudio) {
      playAudio.play().catch(error => {
          console.error("Erro ao tentar tocar o áudio:", error);
      });
  }
});