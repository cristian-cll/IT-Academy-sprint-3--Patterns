const readline = require("readline");
const scoreMarker = require("./models/ScoreMarker");
const Player = require("./models/Player");
const Game = require("./models/Game");
const {menu, clearScreen, findData} =require("./UserInterface")

let players = [];
let games = [];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu();

rl.on('line', (line) => {
    switch(line.trim()) {
        case '1': // Create a new player
            rl.question("Whats your name? ", (name) => {
                const player = findData(name, players)
                if(player){
                    return console.log(`'${name}' player already exists. Try another name.`);
                }
                players.push(new Player(name))
            });
        break;
        case '2': // Create a new game
            rl.question("Whats the game name? ", (name) => {
                const game = findData(name, games)
                if(game){
                    return console.log(`'${name}' game already exists. Try another name.`);
                }
                games.push (new Game(name))
            });
        break;
        case '3': // Add player to a game
            if(players.length === 0) {
                return console.log("There are no unassigned players to a game. Create one!");
            }
            if(games.length === 0) {
                return console.log("There aren't games yet. Create one!");
            }
            console.log(`Players : ${players.length} \n`, players);
            rl.question("Select player by name: ", (name) => {
                const player = findData(name, players)
                if(!player){
                    return console.log(`This ${name} player does not exist`);
                }
                console.log(player.name, "selected");
                console.log(`Games : ${games.length} \n`, games);
                rl.question("Select game by name: ", (name) => {
                    const game = findData(name, games)
                    if(!game){
                        return console.log(`This ${name} game does not exist`);
                    }
                    game.join(player)
                })
                players = players.filter(player => player.name !== name);
            });
        break;
        case '4': // Win score for a board player
            if(scoreMarker.board.length === 0){
                return console.log("There are no players on the board. Create a player and add it to a game.");
            }
            console.log(scoreMarker.board);
            rl.question("Select board's player by name: ", (name) => {
                const player = findData(name, scoreMarker.board);
                if(player){
                    rl.question("Input the score to win: (positive integer number) ", (number) => {
                        if(Math.sign(parseInt(number)) === 1 ){
                            player.win(parseInt(number))
                        }
                        return console.log("Is not a number!");
                    })
                }
            });
        break;
        case '5': // Lose score for a board player
            if(scoreMarker.board.length === 0){
                return console.log("There are no players on the board. Create a player and add it to a game.");
            }
            console.log(scoreMarker.board);
            rl.question("Select board's player by name: ", (name) => {
                const player = findData(name, scoreMarker.board);
                if(player){
                    rl.question("Input the score to lose: (positive integer number) ", (number) => {
                        if(Math.sign(parseInt(number)) === 1 ){
                            player.lose(parseInt(number))
                        }
                        return console.log("Is not a number!");
                    })
                }
            });
        break;
        case '6': // View score marker
            if(scoreMarker.board.length === 0){
                return console.log("There are no players on the board. Create a player and add it to a game.");
            }
            console.log(`***********************************************\n                SCORE MARKER                 \n***********************************************`);
            console.log(scoreMarker.showScores());
            console.log(`***********************************************\n                    WINNER                    \n***********************************************`);
            console.log("The winner is: ", scoreMarker.getWinner());

        break;
        case '7': // Test (Fill data automatically)
            test()
            console.log("Filled succesfully. You can view the score marker typing 6.");
        break;
        case '8': // Clear screen
            clearScreen();
        break;
        case '9': // Exit
            rl.close();
        break;
      default:
        console.log('Say what? I might have heard `' + line.trim() + '`' + '\nThis option does not exist.');
        clearScreen();
        break;
    }
})


rl.on("close", function() {
    console.log("BYE BYE !!!");
    process.exit(0);
});




const test = () => {

    players.push(new Player("SolidSnake"));
    players.push(new Player("Otacon"));
    games.push(new Game("MGSX"));
    games.push(new Game("MGS2"));

    const SolidSnake = findData("SolidSnake", players);
    const Otacon = findData("Otacon", players);
    const MGSX = findData("MGSX", games);
    const MGS2 = findData("MGS2", games);

    MGSX.join(SolidSnake);
    MGS2.join(Otacon);

    SolidSnake.win(300);
    SolidSnake.lose(100);
    SolidSnake.win(50);
    Otacon.win(50);
    Otacon.lose(20);

}