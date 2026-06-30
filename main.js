const numeroSenha=document.querySelector('.paremetro-senha_texto');
let numeroSenha = 12
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorall('.paremetro-senha_botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha <20){
        tamanhoSenha++;
   
    }
    numeroSenha.textContent = tamanhoSenha;
}