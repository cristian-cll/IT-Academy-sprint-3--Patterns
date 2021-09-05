class ScoreMarker {

    constructor(){
        if (ScoreMarker._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.");
        }
        ScoreMarker._instance = this;
    }

    showScores(board) {
        return board;
    }

    getWinner(board) {
        return this.sort(board)[0];
    }
    
    sort(board) {
        return board.sort((p1, p2) => p2.scores - p1.scores);
    }
  
}


  
module.exports = ScoreMarker;
