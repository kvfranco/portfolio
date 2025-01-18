function trocarCorDeFundo() {
  const background = document.querySelector('body');
  const iconeTrocarFundo = document.querySelector('#icone-trocar-fundo');
  const iconeSite = document.querySelector('#icone-site');
  if (background.className === 'modo-escuro'){
    background.style.backgroundColor = '#ffffff';
    background.style.color = '#213547';
    background.className = 'modo-claro';
    iconeTrocarFundo.src = './public/icones/light-mode-icon.svg';
    iconeSite.src = './public/icones/letra-k-escura.svg';
    return;
  }
  iconeTrocarFundo.src = './public/icones/dark-mode-icon.svg';
  iconeSite.src = './public/icones/letra-k-claro.svg'
  background.style.backgroundColor = '#213547';
  background.style.color = '#ffffff';
  background.className = 'modo-escuro';
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(window.location.href, { method: 'HEAD' });
    const instanceID = response.headers.get('X-Instance-ID');
    document.getElementById('instancia-info').innerHTML = instanceID
      ? `&#x1F310; Instância: ${instanceID}`
      : 'Não foi possível identificar a instância';
  } catch (error) {
    document.getElementById('instancia-info').innerHTML = 'Erro ao obter informações da instância';
  }
});

window.addEventListener('scroll', () => {
  const paragrafoInstancia = document.querySelector('.instancia');
  if (window.scrollY > 10) {
    paragrafoContemClasse = paragrafoInstancia.classList.contains('hidden');
    return paragrafoContemClasse || paragrafoInstancia.classList.add('hidden');
  }
  paragrafoInstancia.classList.remove('hidden');
});