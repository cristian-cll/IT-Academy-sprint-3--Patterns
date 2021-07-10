class Players {

    static db = []

    static selectedPlayer;

    static newPlayer(username){
        const player = new Player(username)
        this.db.push(player)
        return console.log(`'${player.getName()}' player created!`);
    }

    static selectPlayer(username){
        this.selectedPlayer = this.db.find(player => {
            if(player.username === username){
                 console.log(`'${username}' player selected!`);
                 return player;
            }
            console.log(`It does not exist ${username} player. Create it!`);
            return undefined;
        })
    }
  
    static showPlayers(){
        if(this.db.length > 0) { 
            console.log("Players: ");
            this.db.forEach(player => console.log(`- Player: ${player.username}, score: ${player.score}`)) 
            console.log("Total players: ", this.db.length);
            return;
        } 
        return console.log("There aren't players yet. Create one!");
    }        
}


  class Player  {

    constructor(username, score) {
        this.username = username
        this.score = 0
    }

    getName(){
        return this.username;
    }

    addScore(score){
        return selectedPlayer.score += score 
    }

    subtractScore(score){
        return selectedPlayer.score -= score 
    }
}



/* Players.newPlayer("Cristian")
Players.showPlayers()
Players.selectPlayer("Cristian")
Players.showPlayers()
console.log(selectedPlayer);
Players.addScore(50)
Players.showPlayers()
console.log(selectedPlayer);

const test = Players.newPlayer("Cristian")
console.log(test);
selectedPlayer.addScore(50)
console.log(selectedPlayer) */


module.exports = {Players}
