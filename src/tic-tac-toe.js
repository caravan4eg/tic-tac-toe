class TicTacToe {
    // разбор
    // https://www.youtube.com/watch?v=3SaedVlvo5E&ab_channel=RollingScopesSchool
    constructor() {
    }
    CurrentPlayerSymbol = 'x';
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    winner = null;


    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;

    }

    nextTurn(rowIndex, columnIndex) {
        //console.log(this.gameField);
        if (this.gameField[rowIndex][columnIndex]) return; //усли поле уже не пустое
        this.gameField[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        this.CurrentPlayerSymbol = this.CurrentPlayerSymbol === 'x' ? 'o' : 'x';


    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;

    }

    getWinner() {
        this.winner = null;
        //current gameField
        console.log(`Вход в getWinner() -->  current gameField ----> ${this.gameField}`);

        //check row0-2 win


        for (let r = 0; r < 3; r++) {
            if (this.gameField[r][0] === this.gameField[r][1] === this.gameField[r][2]) {
                this.winner = this.gameField[r][0];
                return this.winner;
            }
        }
        //check col0-2 win
        for (let c = 0; c < 3; c++) {
            if (this.gameField[0][c] === this.gameField[1][c] === this.gameField[2][c]) {
                this.winner = this.gameField[0][c];
                return this.winner;
            }
        }
        //check main diag win
        if (this.gameField[0][0] === this.gameField[1][1] === this.gameField[2][2]) {
            this.winner = this.gameField[0][0];
            return this.winner;
        }
        //check main diag win
        if (this.gameField[0][2] === this.gameField[1][1] === this.gameField[2][0]) {
            this.winner = this.gameField[0][2];
            return this.winner;
        }
        console.log(`Выход из getWinner() -->  Рещультат getWinner() - ${this.winner}`)
        return this.winner;

    }

    noMoreTurns() {
        console.log(`Входим в noMoreTurns()) -->  `);
        console.log(`Состояние матрицы()) --> ${this.gameField}  `);

        return !this.gameField.includes(null);

    }

    isDraw() {
        console.log(`isDraw() -->  `);
        console.log(`Результ !noMoreTurns ${!this.noMoreTurns()}`);
        console.log(`Результ !this.getWinner ${!this.getWinner()}`);

        return this.noMoreTurns() && !this.getWinner();

    }

    getFieldValue(rowIndex, columnIndex) {
        return this.gameField[rowIndex][columnIndex];

    }
}

module.exports = TicTacToe;
