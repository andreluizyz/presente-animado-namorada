document.getElementById('sim').onclick = function() {
    window.location.href = '../etapa3/pagina3.html'; 
  };
  document.getElementById('nao').onmouseover = function() {
    var naoBtn = document.getElementById('nao');
    naoBtn.style.position = 'absolute';
    naoBtn.style.top = Math.random() * window.innerHeight + 'px';
    naoBtn.style.left = Math.random() * window.innerWidth + 'px';
  };
  