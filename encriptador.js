const entradaTexto=document.querySelector('textarea')  
const btnEncriptar=document.getElementById('encriptar')
const btnDesencriptar=document.getElementById('desencriptar')
const btnCopiar=document.getElementById('copiar')

 

function copiar() {
  navigator.clipboard.writeText(mensajeResultado.innerHTML);
}

function show(texto) {
  document.getElementById('mensajeResultado').innerHTML = texto;
}

function encriptar() {
  var encripta = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufai'
  }

  var mensaje = entradaTexto.value;
  
  var mensajeEncriptado = mensaje.replace(/a|e|i|o|u/g, function(matched) {
    return encripta[matched];
  });
  

  show(mensajeEncriptado);
}

function desencriptar() {
  var desencripta = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufai': 'u'
  }
  
  let mensaje = entradaTexto.value;
  
  var mensajeDesencriptado = mensaje.replace(/ai|enter|imes|ober|ufai/g, function(matched) {
    return desencripta[matched];
  });
  
  show(mensajeDesencriptado);
  
}

btnCopiar.onclick = copiar;
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
