function playRockPaperScissor(player1, player2) {
    const pedra = 'Pedra';
    const tesoura = 'Tesoura';
    const papel = 'Papel';

    if (player1 == pedra && player2 == tesoura) {
        return 'Jogador 1 venceu!';
    } else if (player1 == pedra && player2 == papel) {
        return 'Jogador 2 venceu!'
    } else if (player2 == pedra && player1 == tesoura) {
        return 'Jogador 2 venceu!';
    } else if (player2 == pedra && player1 == papel) {
        return 'Jogador 1 venceu!'
    } else if (player1 == papel && player2 == pedra) {
        return 'Jogador 1 venceu!'
    } else if (player1 == papel && player2 == tesoura) {
        return 'Jogador 2 venceu!'
    } else if (player2 == papel && player1 == pedra) {
        return 'Jogador 2 venceu!'
    } else if (player2 == papel && player1 == tesoura) {
        return 'Jogador 1 venceu!' 
    } else if (player1 == tesoura && player2 == papel) {
        return 'Jogador 1 venceu!'
    } else if (player1 == tesoura && player2 == pedra) {
        return 'jogador2 venceu!' 
    } else if (player2 == tesoura && player1 == papel) {
        return 'Jogador 2 venceu!'
    } else if (player2 == tesoura && player1 == pedra) {
        return 'jogador 1 venceu!' 
    }   
    
    return 'Empate!';
}

console.log(playRockPaperScissor(pedra, papel));