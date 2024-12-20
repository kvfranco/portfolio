document.querySelector('#dark-mode-button').addEventListener('click', trocarCorDeFundo);

function trocarCorDeFundo() {
  const background = document.querySelector('body');
  const iconeTrocarFundo = document.querySelector('#icone-trocar-fundo');
  const iconeSite = document.querySelector('#icone-site');
  if (background.className === 'modo-escuro'){
    background.style.backgroundColor = '#ffffff';
    background.style.color = '#213547';
    background.className = 'modo-claro';
    iconeTrocarFundo.src = './assets/icones/light-mode-icon.svg';
    iconeSite.src = './assets/icones/letra-k-escura.svg';
    return;
  }
  iconeTrocarFundo.src = './assets/icones/dark-mode-icon.svg';
  iconeSite.src = './assets/icones/letra-k-claro.svg'
  background.style.backgroundColor = '#213547';
  background.style.color = '#ffffff';
  background.className = 'modo-escuro';
}