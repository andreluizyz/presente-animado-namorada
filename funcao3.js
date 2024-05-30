document.getElementById('sim').onclick = function() {
    window.location.href = 'fim.html'; 
  };
  document.getElementById('nao').onmouseover = function() {
    var naoBtn = document.getElementById('nao');
    naoBtn.style.position = 'absolute';
    naoBtn.style.top = Math.random() * window.innerHeight + 'px';
    naoBtn.style.left = Math.random() * window.innerWidth + 'px';
  };
  