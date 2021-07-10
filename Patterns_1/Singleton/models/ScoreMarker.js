 class ScoreMarker {

    constructor(){
        this.board = [];
    }

    join(name) {
        this.board.push(name);
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
