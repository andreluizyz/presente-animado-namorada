document.getElementById('nao').onclick = function() {
    window.location.href = '../etapa2/pagina2.html'; 
  };
  document.getElementById('sim').onmouseover = function() {
    var naoBtn = document.getElementById('sim');
    naoBtn.style.position = 'absolute';
    naoBtn.style.top = Math.random() * window.innerHeight + 'px';
    naoBtn.style.left = Math.random() * window.innerWidth + 'px';
  };
  