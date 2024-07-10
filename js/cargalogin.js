function loadBar(){
    const loadingBar = document.getElementById('loadingBar');
    const message = document.getElementById('message');
    
    loadingBar.style.width = '0%';
    message.textContent = 'Cargando...';
  
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        message.textContent = '¡Carga Completa!';
        setTimeout(() => {
          window.location.href = 'INICIODEX.html';
        }, 1000);
      } else {
        width++;
        loadingBar.style.width = width + '%';
      }
    }, 35);
} 
