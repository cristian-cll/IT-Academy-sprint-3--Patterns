const ScoreMarker = require("./models/ScoreMarker");
const readline = require("readline");
const {Players} = require("./models/Player");
const {Games} = require("./models/Game");

const {menu, clearScreen} =require("./functions")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu();

rl.on('line', (line) => {
    switch(line.trim()) {
        case '1':
            rl.question("Whats your name? ", (name) => {
                Players.newPlayer(name)
                //clearScreen();
            });
        break;
        case '2':
            Players.showPlayers()
        break;
        case '3':
            if(Players.db == 0) {
                return Players.showPlayers()
            }
            Players.showPlayers();
            rl.question("Which user do you want to select? ", (name) => {
                Players.selectPlayer(name)
            });
        break;
        case '4':
            rl.question("Whats the game name? ", (name) => {
                Games.newGame(name)
                clearScreen();
            });
        break;
        case '5': //Join to game
            if(!Players.selectedPlayer){
                return console.log("First choose a Player!");
            }
            if(Games.db.length > 0){
                Games.getGames()
                return rl.question("Which one to join? ", (gameName) => {
                    let game = Games.selectGame(gameName)
                    if(game){
                        console.log("test", game);
                        game.join(Players.selectedPlayer)
                        console.log(`${Players.selectedPlayer.username} has joined to ${game.name}`);
                        console.log(game);
                        return;
                    }
                    return console.log("You wrong with game name");
                });
            }
            Games.getGames()
        
            
        break;

        case '7':
            console.log(ScoreMarker.showScores());
        break;

        


        case '7':
            rl.close();
        break;





      default:
        console.log('Say what? I might have heard `' + line.trim() + '`');
        break;
    }
})




rl.on("close", function() {
    console.log("BYE BYE !!!");
    process.exit(0);
});