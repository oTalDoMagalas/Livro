/*
const clickesq = () => {
  console.log("Clicado com sucesso esquerda");
};

const clickdir = () => {
  console.log("Clicado com sucesso direita");
};
*/

let lista = document.querySelectorAll('.item');
let next = document.getElementById('proximo');
let prev = document.getElementById('anterior');
let contar = lista.length;
let ativo = 0;

function proximoSlide() {
    let desativar = document.querySelector('.ativo');
    desativar.classList.remove('ativo');
    
    if (ativo >= contar - 1) {
        ativo = 0;
    } else {
        ativo += 1;
    }
    
    lista[ativo].classList.add('ativo');
}

function anteriorSlide() {
    let desativar = document.querySelector('.ativo');
    desativar.classList.remove('ativo');
    
    if (ativo <= 0) {
        ativo = contar - 1;
    } else {
        ativo -= 1;
    }
    
    lista[ativo].classList.add('ativo');
}

next.onclick = proximoSlide;
prev.onclick = anteriorSlide;
