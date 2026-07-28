const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll ('.checkbox');

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha
}
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

console.log(checkbox[1].checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789';
const simbolos = '!@%*/?';

function geraSenha(){
    let senha = '';
let alfabeto = '';
if (chrckbox[0].checked){
     alfabeto = alfabeto + letrasMaiusculas;
        }
if (chrckbox[1].checked){
     alfabeto = alfabeto + letrasMaiusculas;
        }
if (chrckbox[2].checked){
     alfabeto = alfabeto + numeros;
        }
if (chrckbox[3].checked){
     alfabeto = alfabeto + simbolos;
        }
  
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
