const {Players} = require("./Player");
const ScoreMarker = require("./ScoreMarker");

class Games {

    static db = [];

    static newGame(name){
        const game = new Game(name)
        this.db.push(game)
        return console.log(`'${game.getName()}' game created!`);
    }

    static getGames(){
        if(this.db.length > 0) { 
            console.log("Games: ");
            this.db.forEach(game => console.log(`- Game: ${game.name}`)) 
            console.log("Total games: ", this.db.length);
            return;
        } 
        console.log("There aren't games yet. Create one!");
        return false;
    }

    static selectGame(gameName){
        const gameSelected = this.db.find(game => game.name === gameName)
        if(gameSelected){
            return gameSelected;
        }
        return undefined;
    }




}

  

class Game {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    join(player) {
/*         if(!Players.selectedPlayer){
            return console.log("First choose a Player!");
        } */
        console.log("has llegado ", player);
        ScoreMarker.join("hola");
    }
    
}


module.exports = {Games};