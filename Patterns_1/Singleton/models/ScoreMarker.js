 class ScoreMarker {

    constructor(){
        this.board = [];
    }

    findPlayer(name) {
        const player = this.board.find(player => player.name === name)
        if(player){
                 console.log(`'${player.name}' player selected!`);
                 return player;
            }
        console.log(`This ${name} player does not exist or has not been added to a game.`);
        return undefined;
    }

    join(player) {
        this.board.push(player);
    }


    update(name, scores) {
        const playerFind = this.board.find(player => player.name === name);
        if(playerFind){
            playerFind.scores += scores
        }
    }

    showScores() {
        return this.board;
    }

    getWinner() {
        return this.sort()[0];
    }
    
    sort() {
        return this.board.sort((p1, p2) => p2.scores - p1.scores);
    }
  
}


  
  module.exports = new ScoreMarker();
