import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player: string = "X";
  pontuacaoX: number = 0;
  pontuacaoO: number = 0;

  tabuleiro: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  marcar(row: number, col: number){
    if (this.tabuleiro[row][col] == "") {
      const currentPlayer = this.player;
      this.tabuleiro[row][col] = currentPlayer;

      if (this.checkForWin(currentPlayer)) {
        window.alert(`Jogador ${currentPlayer} venceu!`);
        this.pontuacaoX = currentPlayer == "X" ? this.pontuacaoX +1 : this.pontuacaoX;
        this.pontuacaoO = currentPlayer == "O" ? this.pontuacaoO +1 : this.pontuacaoO;
        this.resetTabuleiro();
      }

      const draw = this.checkForDraw();
      if(draw){
        window.alert(`Jogo empatado!`);
        this.resetTabuleiro();
      }

      this.player = currentPlayer == 'X' ? 'O' : 'X';
    }
  }

  checkForWin(player: string): boolean {
    for (let i = 0; i < 3; i++) {
      if (this.tabuleiro[i][0] === player && this.tabuleiro[i][1] === player && this.tabuleiro[i][2] === player) {
        return true; 
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (this.tabuleiro[0][i] === player && this.tabuleiro[1][i] === player && this.tabuleiro[2][i] === player) {
        return true;
      }
    }
  
    if (this.tabuleiro[0][0] === player && this.tabuleiro[1][1] === player && this.tabuleiro[2][2] === player) {
      return true;
    }
    if (this.tabuleiro[0][2] === player && this.tabuleiro[1][1] === player && this.tabuleiro[2][0] === player) {
      return true; 
    }
  
    return false;
  }

  checkForDraw(){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.tabuleiro[i][j] === '') {
          return false; 
        }
      }
    }

    return true;
  }

  resetTabuleiro() {
    this.tabuleiro = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.player = 'X';
  }
}
