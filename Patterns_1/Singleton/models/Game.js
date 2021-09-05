const scoreMarker = require("./ScoreMarker");

class Game {
    constructor(name) {
        this.name = name
        console.log(`--> ${this.name} game has been created!`);
        this.score = new scoreMarker();
        this.board = [];
    }

    getName() {
        return this.name;
    }

    join(player) {
        console.log(`Player '${player.getName()}' added to '${this.getName()}' game`);
        return this.board.push(player);
    }


    showScores() {
        return this.score.showScores(this.board)
    }

    getWinner() {
        return this.score.getWinner(this.board)
    }
}


module.exports = Game;