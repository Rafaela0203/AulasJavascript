let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
let tentativas = 1;
let btn = document.getElementById("btnChute");

function exibirTextoNaTela(texto){
    let campo = document.getElementById("texto");
    campo.textContent = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela(`Escolha um número entre 1 e ${numeroLimite}`); 
}

exibirMensagemInicial();

btn.addEventListener('click', verificarChute);

function verificarChute(){
    let chute = document.getElementById('valorChute').value;
    // console.log(chute == numeroAleatorio);
    if(chute == numeroAleatorio){
        exibirTextoNaTela('Acertou!');
        let palavraTentativa
        if(tentativas > 1){
            palavraTentativa = 'tentativas';
        }else{
            palavraTentativa = 'tentativa';
        }
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela(mensagemTentativas);
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('O número secreto é menor');
        }else{
            exibirTextoNaTela('O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.getElementById('valorChute');
    chute.value = '';
}