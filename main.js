const botoes = document.querySelectorAll(".botao");
for (let i = 0; i < botoes.lenght; i++) {
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.lenght; j++) {
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}