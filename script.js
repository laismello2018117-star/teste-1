```javascript
// Elementos
const copiar = document.getElementById('copiar');
const meuNome = document.getElementById('meuNome');
const title = document.getElementById('title');
const intro = document.getElementById('intro');
const poem = document.getElementById('poem');
const fileInput = document.getElementById('fileInput');
const photo = document.getElementById('photo');
const trocar = document.getElementById('trocarFoto');


// Copiar texto para área de transferência
copiar.addEventListener('click', async ()=>{
const text = `${title.textContent}


${intro.textContent}


${poem.innerText}


${meuNome.textContent}`;
try{
await navigator.clipboard.writeText(text);
alert('Mensagem copiada! Agora você pode colar em um chat ou cartão.');
}catch(e){
alert('Não foi possível copiar automaticamente — selecione o texto e copie manualmente.');
}
});


// Trocar foto
trocar.addEventListener('click', ()=> fileInput.click());
fileInput.addEventListener('change', (e)=>{
const file = e.target.files[0];
if(!file) return;
const reader = new FileReader();
reader.onload = ()=>{
photo.style.backgroundImage = `url(${reader.result})`;
photo.style.backgroundSize = 'cover';
photo.style.backgroundPosition = 'center';
photo.textContent = '';
};
reader.readAsDataURL(file);
});