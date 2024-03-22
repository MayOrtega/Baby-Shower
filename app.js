let cardStates = [false, false, false];

function toggleCard(index) {
  const card = document.getElementsByClassName('card')[index - 1];
  const message = card.querySelector('p');
  const message2 = card.querySelector('span');
  
  if (!cardStates[index - 1]) {
    message.style.display = 'block';
    card.classList.add('flipped');
  } else {
    message.style.display = 'none';
    card.classList.remove('flipped');
  }

  if (!cardStates[index - 1]) {
    message2.style.display = 'none';
    card.classList.remove('flipped2');
    showConfetti(); 
  } else {
    message2.style.display = 'block';
    card.classList.add('flipped2');
    
  }
  
  // Cambiar estado de la tarjeta
  cardStates[index - 1] = !cardStates[index - 1];
}

function showConfetti() {
    const confettiContainer = document.querySelector('.card');
    const colors = ['#f4acb4', '#bbdbdc', '#fab265', '#eddab8', '#e9705d', '#c4d4de']; // Lista de colores
    
    for (let i = 0; i < 100; i++) { // Crear 100 confetis
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
      confetti.style.animationDelay = `${Math.random() * 2}s`; // Retraso de animación aleatorio
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Asignar un color aleatorio
      confettiContainer.appendChild(confetti);
      
      // Remover el confeti después de que termine la animación
      confetti.addEventListener('animationend', () => {
        confetti.classList.add('fade-out');
        setTimeout(() => {
          confetti.remove();
        }, 1000); // Tiempo de espera antes de eliminar el confeti
      });
    }
  }

  
  
