const copiar = document.getElementById('copiar');
const meuNome = document.getElementById('meuNome');
const title = document.getElementById('title');
const intro = document.getElementById('intro');
const poem = document.getElementById('poem');

copiar.addEventListener('click', async ()=>{
  const text = `${title.textContent}\n\n${intro.textContent}\n\n${poem.innerText}\n\n${meuNome.textContent}`;
  try{
    await navigator.clipboard.writeText(text);
    alert('Mensagem copiada! Agora você pode colar em um chat ou cartão ❤️');
  }catch(e){
    alert('Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.');
  }
});
