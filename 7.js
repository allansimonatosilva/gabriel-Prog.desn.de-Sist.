let jogo =["jogador1","jogador2", "jogador3"];
jogo.shift();

if(jogo.length < 3) {
    jogo.unshift("JogadorNovo")
    console.log("jogador adicionado", jogo)
} else {
    console.log("jogo completo", jogo)
}