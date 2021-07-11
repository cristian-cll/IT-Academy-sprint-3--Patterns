const scoreMarker = require("./ScoreMarker");

class Game {
    constructor(name) {
        this.name = name
        console.log(`${this.name} game has been created!`);
    }

    getName() {
        return this.name;
    }

    join(player) {
        if(player){
            console.log(`Player '${player.getName()}' added to '${this.getName()}' game`);
            scoreMarker.join(player);
            return;
        }
        console.log("Does not exist this player");
        return false;
    }
}


module.exports = Game;